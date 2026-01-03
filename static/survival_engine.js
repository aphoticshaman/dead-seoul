// ═══════════════════════════════════════════════════════════════════════════════
// DEAD SEOUL - SURVIVAL ENGINE
// Core systems: Resources, Conditions, Time, Companions, Districts
// ═══════════════════════════════════════════════════════════════════════════════

const SurvivalEngine = (function() {
    'use strict';

    // ═══════════════════════════════════════════════════════════════════════════
    // CONSTANTS
    // ═══════════════════════════════════════════════════════════════════════════

    const RESOURCE_MAX = {
        food: 10,
        water: 10,
        medicine: 5,
        ammo: 20
    };

    const CONDITION_SEVERITY = {
        NONE: 0,
        MILD: 1,
        MODERATE: 2,
        SEVERE: 3,
        CRITICAL: 4
    };

    const TIME_OF_DAY = {
        DAWN: 'dawn',       // 6-9 - Safe to move, infected retreating
        DAY: 'day',         // 9-17 - Safest, can explore openly
        DUSK: 'dusk',       // 17-20 - Danger rising, infected emerging
        NIGHT: 'night'      // 20-6 - Maximum danger, stealth required
    };

    const DISTRICTS = {
        gangnam: {
            name: '강남 GANGNAM',
            description: 'Wealth district. High-rises, luxury goods. Sparse infected but organized survivors can be hostile.',
            threatLevel: 2,
            lootQuality: 4,
            connections: ['yeouido', 'itaewon', 'jamsil'],
            landmarks: ['coex', 'gangnam_station', 'apgujeong'],
            special: 'rich_loot'
        },
        itaewon: {
            name: '이태원 ITAEWON',
            description: 'Nightlife district. Tight alleys, bars, clubs. Dense infected. Good for supplies.',
            threatLevel: 4,
            lootQuality: 3,
            connections: ['gangnam', 'yongsan', 'myeongdong'],
            landmarks: ['hamilton_hotel', 'hooker_hill', 'mosque'],
            special: 'dense_infected'
        },
        hongdae: {
            name: '홍대 HONGDAE',
            description: 'University area. Young survivors, artists. Underground culture. Hidden safehouses.',
            threatLevel: 3,
            lootQuality: 3,
            connections: ['sinchon', 'mapo', 'yeouido'],
            landmarks: ['hongik_university', 'club_street', 'parking_lot'],
            special: 'survivor_friendly'
        },
        yeouido: {
            name: '여의도 YEOUIDO',
            description: 'Government island. National Assembly, broadcasting. Military presence. Restricted.',
            threatLevel: 3,
            lootQuality: 2,
            connections: ['gangnam', 'hongdae', 'mapo', 'yongsan'],
            landmarks: ['national_assembly', 'kbs', 'yeouido_park'],
            special: 'military_checkpoint'
        },
        myeongdong: {
            name: '명동 MYEONGDONG',
            description: 'Shopping district. Cosmetics, clothes. Ransacked but useful. Central location.',
            threatLevel: 3,
            lootQuality: 3,
            connections: ['itaewon', 'jongno', 'dongdaemun'],
            landmarks: ['lotte_department', 'myeongdong_cathedral', 'shopping_street'],
            special: 'medical_supplies'
        },
        jongno: {
            name: '종로 JONGNO',
            description: 'Historic heart of Seoul. Palaces, traditional markets. Elder survivors. Hidden knowledge.',
            threatLevel: 2,
            lootQuality: 2,
            connections: ['myeongdong', 'dongdaemun', 'bukchon'],
            landmarks: ['gyeongbokgung', 'insadong', 'gwanghwamun'],
            special: 'traditional_medicine'
        },
        dongdaemun: {
            name: '동대문 DONGDAEMUN',
            description: 'Market district. 24-hour fabric markets, clothing. Maze-like. Easy to get lost.',
            threatLevel: 4,
            lootQuality: 4,
            connections: ['myeongdong', 'jongno', 'wangsimni'],
            landmarks: ['ddp', 'market_complex', 'cheonggyecheon'],
            special: 'fabric_shelter'
        },
        yongsan: {
            name: '용산 YONGSAN',
            description: 'Former US military base. Electronics market. Weapons possible. Fortified survivors.',
            threatLevel: 3,
            lootQuality: 4,
            connections: ['itaewon', 'yeouido', 'mapo'],
            landmarks: ['yongsan_station', 'electronics_market', 'war_memorial'],
            special: 'military_gear'
        },
        jamsil: {
            name: '잠실 JAMSIL',
            description: 'Olympic park area. Stadium, Lotte World. Open spaces. Horde migration path.',
            threatLevel: 5,
            lootQuality: 2,
            connections: ['gangnam', 'songpa', 'wangsimni'],
            landmarks: ['olympic_stadium', 'lotte_tower', 'seokchon_lake'],
            special: 'horde_danger'
        },
        mapo: {
            name: '마포 MAPO',
            description: 'Han River access. Bridges to cross. Mixed residential. Refugee camps.',
            threatLevel: 3,
            lootQuality: 2,
            connections: ['hongdae', 'yeouido', 'yongsan'],
            landmarks: ['mapo_bridge', 'world_cup_stadium', 'mangwon'],
            special: 'river_crossing'
        },
        bukchon: {
            name: '북촌 BUKCHON',
            description: 'Traditional hanok village. Quiet. Elderly holdouts. Preserved culture.',
            threatLevel: 1,
            lootQuality: 1,
            connections: ['jongno', 'samcheong'],
            landmarks: ['hanok_village', 'gahoe', 'changdeokgung'],
            special: 'safe_haven'
        },
        seoul_station: {
            name: '서울역 SEOUL STATION',
            description: 'Main train hub. Where it started. Ground zero. Extremely dangerous but vital passage.',
            threatLevel: 5,
            lootQuality: 3,
            connections: ['yongsan', 'myeongdong', 'namsan'],
            landmarks: ['station_hall', 'lotte_mart', 'overpass'],
            special: 'ground_zero'
        }
    };

    // ═══════════════════════════════════════════════════════════════════════════
    // STATE
    // ═══════════════════════════════════════════════════════════════════════════

    let state = {
        // Resources (integers)
        resources: {
            food: 3,
            water: 3,
            medicine: 1,
            ammo: 0
        },

        // Conditions (severity levels)
        conditions: {
            injured: CONDITION_SEVERITY.NONE,
            sick: CONDITION_SEVERITY.NONE,
            exhausted: CONDITION_SEVERITY.NONE,
            infected: CONDITION_SEVERITY.NONE  // The big one - progresses to death
        },

        // Time
        day: 1,
        timeOfDay: TIME_OF_DAY.DAY,
        hoursUntilNextPhase: 4,

        // Infection timer (if bitten)
        infectionTimer: null,  // null = not infected, number = hours until turning
        infectionStage: 0,     // 0-4, determines symptoms

        // Location
        currentDistrict: 'gangnam',
        exploredDistricts: ['gangnam'],
        discoveredLandmarks: [],

        // Companions (managed by RelationshipEngine, referenced here)
        activeCompanions: [],  // IDs of companions currently with player

        // Survival stats
        daysSurvived: 0,
        killCount: 0,
        decisionsWater: 0,  // Times chose water over other
        decisionsMercy: 0,  // Times showed mercy
        decisionsRuthless: 0  // Times chose ruthless option
    };

    // ═══════════════════════════════════════════════════════════════════════════
    // RESOURCE MANAGEMENT
    // ═══════════════════════════════════════════════════════════════════════════

    function addResource(type, amount) {
        if (!state.resources.hasOwnProperty(type)) return false;
        state.resources[type] = Math.min(
            state.resources[type] + amount,
            RESOURCE_MAX[type]
        );
        saveState();
        updateUI();
        return true;
    }

    function consumeResource(type, amount) {
        if (!state.resources.hasOwnProperty(type)) return false;
        if (state.resources[type] < amount) return false;
        state.resources[type] -= amount;
        saveState();
        updateUI();
        return true;
    }

    function hasResource(type, amount = 1) {
        return state.resources[type] >= amount;
    }

    function getResourceStatus() {
        const status = {};
        for (const [type, amount] of Object.entries(state.resources)) {
            const max = RESOURCE_MAX[type];
            const percent = (amount / max) * 100;
            status[type] = {
                amount,
                max,
                percent,
                critical: percent <= 20,
                low: percent <= 40
            };
        }
        return status;
    }

    // ═══════════════════════════════════════════════════════════════════════════
    // CONDITION MANAGEMENT
    // ═══════════════════════════════════════════════════════════════════════════

    function setCondition(type, severity) {
        if (!state.conditions.hasOwnProperty(type)) return;
        state.conditions[type] = Math.max(0, Math.min(severity, CONDITION_SEVERITY.CRITICAL));

        // Special handling for infection
        if (type === 'infected' && severity > 0 && state.infectionTimer === null) {
            startInfectionTimer();
        }

        saveState();
        updateUI();
    }

    function worsenCondition(type, amount = 1) {
        if (!state.conditions.hasOwnProperty(type)) return;
        setCondition(type, state.conditions[type] + amount);
    }

    function improveCondition(type, amount = 1) {
        if (!state.conditions.hasOwnProperty(type)) return;
        setCondition(type, state.conditions[type] - amount);
    }

    function hasCondition(type, minSeverity = CONDITION_SEVERITY.MILD) {
        return state.conditions[type] >= minSeverity;
    }

    function treatCondition(type) {
        // Requires medicine
        if (!consumeResource('medicine', 1)) {
            return { success: false, reason: 'No medicine available' };
        }

        // Treatment effectiveness depends on severity
        const current = state.conditions[type];
        let reduction = 2;  // Base reduction

        if (type === 'infected') {
            // Infection is harder to treat
            reduction = 1;
            if (state.infectionStage >= 3) {
                return { success: false, reason: 'Infection too advanced for treatment' };
            }
        }

        improveCondition(type, reduction);
        return {
            success: true,
            newSeverity: state.conditions[type],
            message: getConditionMessage(type, state.conditions[type])
        };
    }

    function getConditionMessage(type, severity) {
        const messages = {
            injured: [
                'Fully healed.',
                'Minor cuts and bruises.',
                'Bleeding wound needs attention.',
                'Serious injury limiting movement.',
                'Critical injury. Need immediate treatment.'
            ],
            sick: [
                'Healthy.',
                'Slight fever, manageable.',
                'Coughing, weak.',
                'High fever, can barely move.',
                'Delirious. Death approaching.'
            ],
            exhausted: [
                'Well rested.',
                'Tired but functional.',
                'Exhausted. Making mistakes.',
                'Barely conscious.',
                'Collapse imminent.'
            ],
            infected: [
                'Clean.',
                'Bite wound. Clock is ticking.',
                'Fever starting. Skin discoloring.',
                'Hallucinations. Losing grip.',
                'Turning. Say goodbye.'
            ]
        };
        return messages[type]?.[severity] || '';
    }

    // ═══════════════════════════════════════════════════════════════════════════
    // INFECTION SYSTEM
    // ═══════════════════════════════════════════════════════════════════════════

    function startInfectionTimer() {
        // 48 hours until turning, can be extended with treatment
        state.infectionTimer = 48;
        state.infectionStage = 1;
        setCondition('infected', CONDITION_SEVERITY.MILD);
    }

    function progressInfection() {
        if (state.infectionTimer === null) return null;

        state.infectionTimer--;

        // Stage progression
        if (state.infectionTimer <= 36 && state.infectionStage < 2) {
            state.infectionStage = 2;
            setCondition('infected', CONDITION_SEVERITY.MODERATE);
        }
        if (state.infectionTimer <= 24 && state.infectionStage < 3) {
            state.infectionStage = 3;
            setCondition('infected', CONDITION_SEVERITY.SEVERE);
        }
        if (state.infectionTimer <= 12 && state.infectionStage < 4) {
            state.infectionStage = 4;
            setCondition('infected', CONDITION_SEVERITY.CRITICAL);
        }
        if (state.infectionTimer <= 0) {
            return 'turned';  // Game over trigger
        }

        saveState();
        return state.infectionStage;
    }

    function cureInfection() {
        // Requires special item or location - not just medicine
        state.infectionTimer = null;
        state.infectionStage = 0;
        setCondition('infected', CONDITION_SEVERITY.NONE);
        return true;
    }

    // ═══════════════════════════════════════════════════════════════════════════
    // TIME SYSTEM
    // ═══════════════════════════════════════════════════════════════════════════

    function advanceTime(hours = 1) {
        state.hoursUntilNextPhase -= hours;

        // Progress infection
        if (state.infectionTimer !== null) {
            for (let i = 0; i < hours; i++) {
                const result = progressInfection();
                if (result === 'turned') {
                    return { event: 'turned', message: 'The infection has taken hold. You are no longer yourself.' };
                }
            }
        }

        // Phase transition
        if (state.hoursUntilNextPhase <= 0) {
            return advancePhase();
        }

        // Condition degradation over time
        if (Math.random() < 0.1 * hours) {
            if (state.resources.food <= 0) worsenCondition('exhausted');
            if (state.resources.water <= 0) worsenCondition('sick');
        }

        saveState();
        updateUI();
        return { event: 'time_passed', hours };
    }

    function advancePhase() {
        const phases = [TIME_OF_DAY.DAWN, TIME_OF_DAY.DAY, TIME_OF_DAY.DUSK, TIME_OF_DAY.NIGHT];
        const currentIndex = phases.indexOf(state.timeOfDay);
        const nextIndex = (currentIndex + 1) % phases.length;

        state.timeOfDay = phases[nextIndex];

        // New day at dawn
        if (state.timeOfDay === TIME_OF_DAY.DAWN) {
            state.day++;
            state.daysSurvived++;

            // Daily resource consumption
            consumeResource('food', 1);
            consumeResource('water', 1);

            // Rest recovery (if slept during night)
            if (state.conditions.exhausted > 0) {
                improveCondition('exhausted', 1);
            }
        }

        // Set hours until next phase
        const phaseDurations = {
            [TIME_OF_DAY.DAWN]: 3,
            [TIME_OF_DAY.DAY]: 8,
            [TIME_OF_DAY.DUSK]: 3,
            [TIME_OF_DAY.NIGHT]: 10
        };
        state.hoursUntilNextPhase = phaseDurations[state.timeOfDay];

        saveState();
        updateUI();

        return {
            event: 'phase_change',
            phase: state.timeOfDay,
            day: state.day,
            message: getPhaseMessage(state.timeOfDay)
        };
    }

    function getPhaseMessage(phase) {
        const messages = {
            [TIME_OF_DAY.DAWN]: 'The sun rises. The infected retreat to the shadows. You have a window.',
            [TIME_OF_DAY.DAY]: 'Daylight. The safest time to move, search, survive.',
            [TIME_OF_DAY.DUSK]: 'The light fades. They\'re waking up. Find shelter.',
            [TIME_OF_DAY.NIGHT]: 'Darkness falls. They own the night. Move carefully or don\'t move at all.'
        };
        return messages[phase];
    }

    function getThreatMultiplier() {
        const multipliers = {
            [TIME_OF_DAY.DAWN]: 0.5,
            [TIME_OF_DAY.DAY]: 0.3,
            [TIME_OF_DAY.DUSK]: 1.0,
            [TIME_OF_DAY.NIGHT]: 2.0
        };
        return multipliers[state.timeOfDay];
    }

    // ═══════════════════════════════════════════════════════════════════════════
    // DISTRICT / LOCATION SYSTEM
    // ═══════════════════════════════════════════════════════════════════════════

    function getCurrentDistrict() {
        return DISTRICTS[state.currentDistrict];
    }

    function getConnectedDistricts() {
        const current = DISTRICTS[state.currentDistrict];
        return current.connections.map(id => ({
            id,
            ...DISTRICTS[id],
            explored: state.exploredDistricts.includes(id)
        }));
    }

    function travelTo(districtId) {
        const current = DISTRICTS[state.currentDistrict];

        // Check if connected
        if (!current.connections.includes(districtId)) {
            return { success: false, reason: 'Cannot travel directly to that district' };
        }

        // Travel costs time and possibly triggers encounters
        const result = advanceTime(2);
        if (result.event === 'turned') return result;

        // Threat check during travel
        const threat = DISTRICTS[districtId].threatLevel * getThreatMultiplier();
        const dangerRoll = Math.random() * 10;

        let encounter = null;
        if (dangerRoll < threat) {
            encounter = generateEncounter(districtId);
        }

        // Move to district
        state.currentDistrict = districtId;
        if (!state.exploredDistricts.includes(districtId)) {
            state.exploredDistricts.push(districtId);
        }

        saveState();
        updateUI();

        return {
            success: true,
            district: DISTRICTS[districtId],
            encounter,
            timeResult: result
        };
    }

    function generateEncounter(districtId) {
        const district = DISTRICTS[districtId];
        const encounters = [
            { type: 'infected_single', threat: 1, message: 'A lone infected blocks your path.' },
            { type: 'infected_group', threat: 3, message: 'A group of infected. Fight or flee.' },
            { type: 'infected_horde', threat: 5, message: 'A HORDE. Run. Now.' },
            { type: 'survivor_friendly', threat: 0, message: 'Survivors. They seem friendly.' },
            { type: 'survivor_hostile', threat: 2, message: 'Survivors. They want what you have.' },
            { type: 'loot', threat: 0, message: 'An untouched supply cache.' },
            { type: 'trap', threat: 2, message: 'Someone set a trap here.' }
        ];

        // Weight by district type
        let weights = [3, 2, 1, 1, 1, 1, 1];
        if (district.special === 'survivor_friendly') weights = [2, 1, 0, 3, 1, 2, 0];
        if (district.special === 'horde_danger') weights = [1, 2, 4, 0, 1, 1, 1];
        if (district.special === 'dense_infected') weights = [4, 3, 2, 0, 1, 1, 0];

        const totalWeight = weights.reduce((a, b) => a + b, 0);
        let roll = Math.random() * totalWeight;

        for (let i = 0; i < encounters.length; i++) {
            roll -= weights[i];
            if (roll <= 0) return encounters[i];
        }

        return encounters[0];
    }

    function searchLocation() {
        const district = DISTRICTS[state.currentDistrict];

        // Searching takes time
        const result = advanceTime(1);
        if (result.event === 'turned') return result;

        // Loot quality affects finds
        const quality = district.lootQuality;
        const finds = [];

        // Roll for each resource type
        if (Math.random() < 0.2 * quality) {
            const amount = Math.ceil(Math.random() * quality);
            addResource('food', amount);
            finds.push({ type: 'food', amount });
        }
        if (Math.random() < 0.2 * quality) {
            const amount = Math.ceil(Math.random() * quality);
            addResource('water', amount);
            finds.push({ type: 'water', amount });
        }
        if (Math.random() < 0.1 * quality) {
            addResource('medicine', 1);
            finds.push({ type: 'medicine', amount: 1 });
        }
        if (Math.random() < 0.1 * quality && district.special === 'military_gear') {
            const amount = Math.ceil(Math.random() * 5);
            addResource('ammo', amount);
            finds.push({ type: 'ammo', amount });
        }

        // Possible encounter while searching
        const threat = district.threatLevel * getThreatMultiplier() * 0.5;
        let encounter = null;
        if (Math.random() * 10 < threat) {
            encounter = generateEncounter(state.currentDistrict);
        }

        return {
            success: true,
            finds,
            encounter,
            message: finds.length > 0
                ? `Found: ${finds.map(f => `${f.amount} ${f.type}`).join(', ')}`
                : 'Nothing useful here.'
        };
    }

    // ═══════════════════════════════════════════════════════════════════════════
    // CHOICE INTEGRATION
    // ═══════════════════════════════════════════════════════════════════════════

    function processChoiceCost(choice) {
        // Check if player can afford the choice
        if (choice.costs) {
            for (const [resource, amount] of Object.entries(choice.costs)) {
                if (!hasResource(resource, amount)) {
                    return {
                        canAfford: false,
                        reason: `Requires ${amount} ${resource}`
                    };
                }
            }
        }

        // Check condition requirements
        if (choice.requires) {
            if (choice.requires.maxInjury && state.conditions.injured > choice.requires.maxInjury) {
                return { canAfford: false, reason: 'Too injured for this action' };
            }
            if (choice.requires.maxExhaustion && state.conditions.exhausted > choice.requires.maxExhaustion) {
                return { canAfford: false, reason: 'Too exhausted for this action' };
            }
        }

        return { canAfford: true };
    }

    function executeChoiceEffects(choice) {
        // Deduct costs
        if (choice.costs) {
            for (const [resource, amount] of Object.entries(choice.costs)) {
                consumeResource(resource, amount);
            }
        }

        // Apply rewards
        if (choice.rewards) {
            for (const [resource, amount] of Object.entries(choice.rewards)) {
                addResource(resource, amount);
            }
        }

        // Apply condition changes
        if (choice.conditions) {
            for (const [condition, change] of Object.entries(choice.conditions)) {
                if (change > 0) worsenCondition(condition, change);
                else improveCondition(condition, Math.abs(change));
            }
        }

        // Time cost
        if (choice.timeCost) {
            return advanceTime(choice.timeCost);
        }

        return { success: true };
    }

    function filterAvailableChoices(choices) {
        return choices.map(choice => {
            const affordability = processChoiceCost(choice);
            return {
                ...choice,
                available: affordability.canAfford,
                reason: affordability.reason
            };
        });
    }

    // ═══════════════════════════════════════════════════════════════════════════
    // UI GENERATION
    // ═══════════════════════════════════════════════════════════════════════════

    function generateHUD() {
        const resourceStatus = getResourceStatus();

        return `
            <div class="survival-hud" id="survival-hud">
                <div class="hud-time">
                    <span class="hud-day">DAY ${state.day}</span>
                    <span class="hud-phase phase-${state.timeOfDay}">${state.timeOfDay.toUpperCase()}</span>
                </div>
                <div class="hud-resources">
                    ${Object.entries(resourceStatus).map(([type, status]) => `
                        <div class="hud-resource ${status.critical ? 'critical' : status.low ? 'low' : ''}" title="${type}: ${status.amount}/${status.max}">
                            <span class="resource-icon">${getResourceIcon(type)}</span>
                            <div class="resource-bar">
                                <div class="resource-fill" style="width: ${status.percent}%"></div>
                            </div>
                            <span class="resource-count">${status.amount}</span>
                        </div>
                    `).join('')}
                </div>
                <div class="hud-conditions">
                    ${Object.entries(state.conditions).filter(([_, sev]) => sev > 0).map(([type, severity]) => `
                        <div class="hud-condition severity-${severity}" title="${getConditionMessage(type, severity)}">
                            ${getConditionIcon(type)}
                        </div>
                    `).join('')}
                </div>
                ${state.infectionTimer !== null ? `
                    <div class="hud-infection">
                        <span class="infection-icon">☣️</span>
                        <span class="infection-timer">${state.infectionTimer}h</span>
                    </div>
                ` : ''}
                <div class="hud-location" title="${getCurrentDistrict().description}">
                    📍 ${getCurrentDistrict().name}
                </div>
            </div>
        `;
    }

    function getResourceIcon(type) {
        const icons = { food: '🍖', water: '💧', medicine: '💊', ammo: '🔫' };
        return icons[type] || '📦';
    }

    function getConditionIcon(type) {
        const icons = { injured: '🩸', sick: '🤒', exhausted: '😴', infected: '☣️' };
        return icons[type] || '⚠️';
    }

    function generateCSS() {
        return `
            <style>
                .survival-hud {
                    position: fixed;
                    top: 60px;
                    left: 0;
                    right: 0;
                    background: linear-gradient(180deg, rgba(10, 8, 8, 0.95) 0%, rgba(10, 8, 8, 0.8) 100%);
                    border-bottom: 1px solid rgba(139, 0, 0, 0.3);
                    padding: 0.5rem 1rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                    z-index: 200;
                    font-family: 'Space Mono', monospace;
                    font-size: 0.75rem;
                }

                .hud-time {
                    display: flex;
                    gap: 0.5rem;
                    align-items: center;
                }

                .hud-day {
                    color: var(--bone);
                    font-weight: bold;
                }

                .hud-phase {
                    padding: 0.2rem 0.5rem;
                    border-radius: 3px;
                    font-size: 0.65rem;
                }

                .phase-dawn { background: rgba(255, 200, 100, 0.3); color: #ffc864; }
                .phase-day { background: rgba(255, 255, 200, 0.2); color: #ffffc8; }
                .phase-dusk { background: rgba(255, 100, 50, 0.3); color: #ff6432; }
                .phase-night { background: rgba(50, 50, 100, 0.5); color: #6464c8; }

                .hud-resources {
                    display: flex;
                    gap: 0.75rem;
                }

                .hud-resource {
                    display: flex;
                    align-items: center;
                    gap: 0.3rem;
                }

                .hud-resource.critical { animation: pulse-critical 1s infinite; }
                .hud-resource.low .resource-fill { background: #c86400; }

                @keyframes pulse-critical {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.5; }
                }

                .resource-icon {
                    font-size: 0.9rem;
                }

                .resource-bar {
                    width: 40px;
                    height: 6px;
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 3px;
                    overflow: hidden;
                }

                .resource-fill {
                    height: 100%;
                    background: var(--blood);
                    transition: width 0.3s;
                }

                .resource-count {
                    color: var(--bone);
                    min-width: 1rem;
                    text-align: right;
                }

                .hud-conditions {
                    display: flex;
                    gap: 0.3rem;
                }

                .hud-condition {
                    padding: 0.2rem;
                    border-radius: 3px;
                    font-size: 0.8rem;
                }

                .severity-1 { background: rgba(255, 255, 0, 0.2); }
                .severity-2 { background: rgba(255, 165, 0, 0.3); }
                .severity-3 { background: rgba(255, 0, 0, 0.3); }
                .severity-4 { background: rgba(139, 0, 0, 0.5); animation: pulse-critical 0.5s infinite; }

                .hud-infection {
                    display: flex;
                    align-items: center;
                    gap: 0.3rem;
                    background: rgba(0, 139, 0, 0.3);
                    padding: 0.2rem 0.5rem;
                    border-radius: 3px;
                    animation: pulse-critical 1s infinite;
                }

                .infection-timer {
                    color: #00ff00;
                    font-weight: bold;
                }

                .hud-location {
                    color: rgba(232, 224, 213, 0.7);
                    font-size: 0.7rem;
                }

                /* Choice modifications for survival */
                .choice.unavailable {
                    opacity: 0.4;
                    cursor: not-allowed;
                    border-color: rgba(100, 100, 100, 0.3);
                }

                .choice.unavailable::after {
                    content: attr(data-reason);
                    display: block;
                    font-size: 0.7rem;
                    color: rgba(255, 100, 100, 0.8);
                    margin-top: 0.3rem;
                }

                .choice-cost {
                    font-size: 0.75rem;
                    color: rgba(139, 0, 0, 0.8);
                    margin-left: 0.5rem;
                }

                .choice-reward {
                    font-size: 0.75rem;
                    color: rgba(0, 139, 0, 0.8);
                    margin-left: 0.5rem;
                }

                /* Adjust content area for HUD */
                .content {
                    padding-top: 4rem !important;
                }
            </style>
        `;
    }

    // ═══════════════════════════════════════════════════════════════════════════
    // PERSISTENCE
    // ═══════════════════════════════════════════════════════════════════════════

    function saveState() {
        localStorage.setItem('deadseoul_survival', JSON.stringify(state));
    }

    function loadState() {
        const saved = localStorage.getItem('deadseoul_survival');
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                state = { ...state, ...parsed };
            } catch (e) {
                console.warn('Could not load survival state');
            }
        }
    }

    function resetState() {
        state = {
            resources: { food: 3, water: 3, medicine: 1, ammo: 0 },
            conditions: { injured: 0, sick: 0, exhausted: 0, infected: 0 },
            day: 1,
            timeOfDay: TIME_OF_DAY.DAY,
            hoursUntilNextPhase: 4,
            infectionTimer: null,
            infectionStage: 0,
            currentDistrict: 'gangnam',
            exploredDistricts: ['gangnam'],
            discoveredLandmarks: [],
            activeCompanions: [],
            daysSurvived: 0,
            killCount: 0,
            decisionsWater: 0,
            decisionsMercy: 0,
            decisionsRuthless: 0
        };
        saveState();
        updateUI();
    }

    // ═══════════════════════════════════════════════════════════════════════════
    // UI UPDATE
    // ═══════════════════════════════════════════════════════════════════════════

    function updateUI() {
        const existingHUD = document.getElementById('survival-hud');
        if (existingHUD) {
            existingHUD.outerHTML = generateHUD();
        }
    }

    function init() {
        loadState();

        // Inject CSS
        if (!document.getElementById('survival-css')) {
            const style = document.createElement('div');
            style.id = 'survival-css';
            style.innerHTML = generateCSS();
            document.head.appendChild(style.querySelector('style'));
        }

        // Inject HUD
        const header = document.querySelector('.header');
        if (header && !document.getElementById('survival-hud')) {
            header.insertAdjacentHTML('afterend', generateHUD());
        }

        console.log('🧟 Survival Engine initialized');
        console.log(`   Day ${state.day} | ${state.timeOfDay} | ${getCurrentDistrict().name}`);
    }

    // ═══════════════════════════════════════════════════════════════════════════
    // PUBLIC API
    // ═══════════════════════════════════════════════════════════════════════════

    return {
        // State access
        get state() { return state; },
        get districts() { return DISTRICTS; },

        // Constants
        CONDITION_SEVERITY,
        TIME_OF_DAY,

        // Resources
        addResource,
        consumeResource,
        hasResource,
        getResourceStatus,

        // Conditions
        setCondition,
        worsenCondition,
        improveCondition,
        hasCondition,
        treatCondition,
        getConditionMessage,

        // Infection
        startInfectionTimer,
        progressInfection,
        cureInfection,

        // Time
        advanceTime,
        advancePhase,
        getThreatMultiplier,
        getPhaseMessage,

        // Location
        getCurrentDistrict,
        getConnectedDistricts,
        travelTo,
        searchLocation,
        generateEncounter,

        // Choice integration
        processChoiceCost,
        executeChoiceEffects,
        filterAvailableChoices,

        // UI
        generateHUD,
        updateUI,

        // Lifecycle
        init,
        saveState,
        loadState,
        resetState
    };
})();

// Auto-initialize when DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => SurvivalEngine.init());
} else {
    SurvivalEngine.init();
}
