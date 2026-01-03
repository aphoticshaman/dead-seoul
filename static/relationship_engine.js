// ═══════════════════════════════════════════════════════════════════════════════
// DEAD SEOUL - RELATIONSHIP ENGINE
// Companion management, affinity tracking, permadeath, relationship arcs
// ═══════════════════════════════════════════════════════════════════════════════

const RelationshipEngine = (function() {
    'use strict';

    // ═══════════════════════════════════════════════════════════════════════════
    // COMPANION DEFINITIONS
    // ═══════════════════════════════════════════════════════════════════════════

    const COMPANIONS = {
        minho: {
            id: 'minho',
            name: 'Minho',
            nameKR: '민호',
            role: 'partner',
            description: 'Your boyfriend. Former office worker. Quiet strength, unwavering loyalty.',
            portrait: '👤',
            traits: ['loyal', 'protective', 'strategic'],
            skills: {
                combat: 3,
                medical: 1,
                scavenging: 2,
                stealth: 2,
                persuasion: 2
            },
            baseAffinity: 50,  // Starts high - existing relationship
            affinityThresholds: {
                romance: 70,
                sacrifice: 85,
                betrayal: 20
            },
            deathFlags: ['minho_death', 'sacrifice_minho', 'died_with_minho'],
            lines: {
                greeting: "Still here. Still fighting.",
                lowAffinity: "We need to talk about us...",
                highAffinity: "Whatever happens, I choose you.",
                combat: "Stay behind me.",
                danger: "We need to move. Now.",
                rest: "Get some sleep. I'll keep watch."
            }
        },

        jin: {
            id: 'jin',
            name: 'Jin',
            nameKR: '진',
            role: 'mysterious',
            description: 'Former Gentech researcher. Knows more than she says. Dangerous and compelling.',
            portrait: '👤',
            traits: ['secretive', 'intelligent', 'ruthless'],
            skills: {
                combat: 4,
                medical: 4,
                scavenging: 2,
                stealth: 3,
                persuasion: 2
            },
            baseAffinity: 0,  // Starts neutral - new relationship
            affinityThresholds: {
                trust: 30,
                romance: 60,
                reveal: 45,
                sacrifice: 80
            },
            deathFlags: ['jin_death', 'jin_sacrifice', 'jin_turned'],
            lines: {
                greeting: "You're still alive. Good.",
                lowAffinity: "Don't trust me. It's safer that way.",
                highAffinity: "I never expected to find someone worth dying for.",
                combat: "I'll handle this.",
                danger: "Follow my lead.",
                rest: "I don't sleep much. Old habits."
            }
        },

        hana: {
            id: 'hana',
            name: 'Hana',
            nameKR: '하나',
            role: 'child',
            description: 'A girl who lost everything. Tough beyond her years. Worth protecting.',
            portrait: '👧',
            traits: ['resourceful', 'traumatized', 'hopeful'],
            skills: {
                combat: 1,
                medical: 0,
                scavenging: 4,
                stealth: 5,
                persuasion: 2
            },
            baseAffinity: 20,
            affinityThresholds: {
                trust: 40,
                family: 70,
                sacrifice: 60
            },
            deathFlags: ['hana_death', 'abandoned_hana', 'hana_turned'],
            lines: {
                greeting: "You came back.",
                lowAffinity: "Everyone leaves.",
                highAffinity: "You're like family now.",
                combat: "*hides*",
                danger: "I know a way out.",
                rest: "Can you... stay close?"
            }
        },

        minji: {
            id: 'minji',
            name: 'Minji',
            nameKR: '민지',
            role: 'medic',
            description: 'Nurse who lost her brother. Professional exterior, broken inside. Essential skills.',
            portrait: '👩‍⚕️',
            traits: ['competent', 'grieving', 'dedicated'],
            skills: {
                combat: 2,
                medical: 5,
                scavenging: 3,
                stealth: 2,
                persuasion: 3
            },
            baseAffinity: 15,
            affinityThresholds: {
                trust: 35,
                friendship: 55,
                sacrifice: 75
            },
            deathFlags: ['minji_death', 'left_minji', 'minji_sacrifice'],
            lines: {
                greeting: "Any injuries I should know about?",
                lowAffinity: "I'm just here to help. Don't read into it.",
                highAffinity: "You're the closest thing to family I have left.",
                combat: "Aim for the head. More efficient.",
                danger: "I can stabilize them. Give me time.",
                rest: "You should sleep. I'll monitor vitals."
            }
        },

        seora: {
            id: 'seora',
            name: 'Seora',
            nameKR: '서라',
            role: 'soldier',
            description: 'Military deserter. Haunted by orders followed. Lethal and loyal once earned.',
            portrait: '👩‍✈️',
            traits: ['disciplined', 'haunted', 'lethal'],
            skills: {
                combat: 5,
                medical: 2,
                scavenging: 3,
                stealth: 4,
                persuasion: 1
            },
            baseAffinity: 5,
            affinityThresholds: {
                trust: 40,
                respect: 60,
                sacrifice: 70
            },
            deathFlags: ['seora_death', 'seora_sacrifice', 'died_with_seora'],
            lines: {
                greeting: "Perimeter's clear. For now.",
                lowAffinity: "I follow orders. Whose orders are we following?",
                highAffinity: "I'd die for you. Mean that literally.",
                combat: "Cover formation. Move on my signal.",
                danger: "Contact. Multiple hostiles.",
                rest: "I'll take first watch. Sleep light."
            }
        },

        soojin: {
            id: 'soojin',
            name: 'Soojin',
            nameKR: '수진',
            role: 'survivor',
            description: 'Former actress. Uses charm as weapon. Survivor at any cost.',
            portrait: '👩',
            traits: ['manipulative', 'charming', 'adaptable'],
            skills: {
                combat: 1,
                medical: 1,
                scavenging: 3,
                stealth: 3,
                persuasion: 5
            },
            baseAffinity: 25,
            affinityThresholds: {
                trust: 30,
                suspicion: -20,
                betrayal: -40
            },
            deathFlags: ['soojin_death', 'soojin_betrayal', 'killed_soojin'],
            canBetray: true,
            betrayalThreshold: -30,
            lines: {
                greeting: "Miss me?",
                lowAffinity: "We're useful to each other. That's enough.",
                highAffinity: "I've played a lot of roles. This one feels real.",
                combat: "I'll... I'll try to help.",
                danger: "There might be another way...",
                rest: "Wake me if anything happens. Or don't."
            }
        }
    };

    // ═══════════════════════════════════════════════════════════════════════════
    // STATE
    // ═══════════════════════════════════════════════════════════════════════════

    let state = {
        // Companion states
        companions: {},

        // Active party (max 3 including player)
        party: [],

        // Dead companions (for NG+ memory)
        deceased: [],

        // Relationship history for callbacks
        relationshipEvents: [],

        // Betrayal tracking
        betrayalRisk: {},

        // Romance state
        romanceActive: null,  // ID of romanced companion
        romanceHistory: []
    };

    // Initialize companion states
    function initCompanionStates() {
        for (const [id, companion] of Object.entries(COMPANIONS)) {
            if (!state.companions[id]) {
                state.companions[id] = {
                    id,
                    affinity: companion.baseAffinity,
                    met: false,
                    recruited: false,
                    alive: true,
                    inParty: false,
                    flags: {},
                    conversationsHad: [],
                    giftsGiven: [],
                    sharedMoments: 0,
                    betrayedPlayer: false,
                    sacrificedFor: false
                };
            }
        }
    }

    // ═══════════════════════════════════════════════════════════════════════════
    // AFFINITY MANAGEMENT
    // ═══════════════════════════════════════════════════════════════════════════

    function getAffinity(companionId) {
        return state.companions[companionId]?.affinity || 0;
    }

    function modifyAffinity(companionId, amount, reason = '') {
        if (!state.companions[companionId]) return;

        const old = state.companions[companionId].affinity;
        state.companions[companionId].affinity = Math.max(-100, Math.min(100, old + amount));

        // Log the event
        state.relationshipEvents.push({
            companion: companionId,
            change: amount,
            reason,
            timestamp: Date.now(),
            oldValue: old,
            newValue: state.companions[companionId].affinity
        });

        // Check for threshold crossings
        checkThresholds(companionId);

        // Check betrayal risk
        if (COMPANIONS[companionId].canBetray) {
            checkBetrayalRisk(companionId);
        }

        saveState();
        return state.companions[companionId].affinity;
    }

    function checkThresholds(companionId) {
        const companion = COMPANIONS[companionId];
        const compState = state.companions[companionId];
        const affinity = compState.affinity;

        const events = [];

        for (const [threshold, value] of Object.entries(companion.affinityThresholds)) {
            const flagName = `${companionId}_${threshold}_reached`;

            if (value > 0 && affinity >= value && !compState.flags[flagName]) {
                compState.flags[flagName] = true;
                events.push({ type: threshold, companion: companionId, positive: true });
            }
            if (value < 0 && affinity <= value && !compState.flags[flagName]) {
                compState.flags[flagName] = true;
                events.push({ type: threshold, companion: companionId, positive: false });
            }
        }

        return events;
    }

    function checkBetrayalRisk(companionId) {
        const companion = COMPANIONS[companionId];
        const affinity = state.companions[companionId].affinity;

        if (affinity <= companion.betrayalThreshold) {
            state.betrayalRisk[companionId] = {
                active: true,
                probability: Math.abs(affinity - companion.betrayalThreshold) * 2
            };
        } else {
            state.betrayalRisk[companionId] = { active: false, probability: 0 };
        }
    }

    function getRelationshipLevel(companionId) {
        const affinity = getAffinity(companionId);

        if (affinity >= 80) return { level: 'devoted', label: 'DEVOTED', color: '#ff69b4' };
        if (affinity >= 60) return { level: 'close', label: 'CLOSE', color: '#32cd32' };
        if (affinity >= 40) return { level: 'friendly', label: 'FRIENDLY', color: '#90ee90' };
        if (affinity >= 20) return { level: 'neutral', label: 'NEUTRAL', color: '#808080' };
        if (affinity >= 0) return { level: 'wary', label: 'WARY', color: '#ffa500' };
        if (affinity >= -30) return { level: 'hostile', label: 'HOSTILE', color: '#ff4500' };
        return { level: 'enemy', label: 'ENEMY', color: '#8b0000' };
    }

    // ═══════════════════════════════════════════════════════════════════════════
    // PARTY MANAGEMENT
    // ═══════════════════════════════════════════════════════════════════════════

    function meetCompanion(companionId) {
        if (!state.companions[companionId]) return false;

        state.companions[companionId].met = true;
        saveState();

        return {
            companion: COMPANIONS[companionId],
            state: state.companions[companionId],
            greeting: COMPANIONS[companionId].lines.greeting
        };
    }

    function recruitCompanion(companionId) {
        if (!state.companions[companionId]) return { success: false, reason: 'Unknown companion' };
        if (!state.companions[companionId].met) return { success: false, reason: 'Haven\'t met yet' };
        if (!state.companions[companionId].alive) return { success: false, reason: 'They\'re dead' };
        if (state.party.length >= 3) return { success: false, reason: 'Party is full' };

        state.companions[companionId].recruited = true;
        state.companions[companionId].inParty = true;
        state.party.push(companionId);

        modifyAffinity(companionId, 10, 'Joined party');
        saveState();

        return {
            success: true,
            companion: COMPANIONS[companionId],
            message: `${COMPANIONS[companionId].name} joins your group.`
        };
    }

    function dismissCompanion(companionId) {
        if (!state.companions[companionId]?.inParty) return false;

        state.companions[companionId].inParty = false;
        state.party = state.party.filter(id => id !== companionId);

        modifyAffinity(companionId, -15, 'Dismissed from party');
        saveState();

        return true;
    }

    function getPartyMembers() {
        return state.party.map(id => ({
            ...COMPANIONS[id],
            state: state.companions[id],
            relationship: getRelationshipLevel(id)
        }));
    }

    function getPartySkillBonus(skill) {
        return state.party.reduce((total, id) => {
            return total + (COMPANIONS[id]?.skills[skill] || 0);
        }, 0);
    }

    // ═══════════════════════════════════════════════════════════════════════════
    // DEATH & PERMADEATH
    // ═══════════════════════════════════════════════════════════════════════════

    function killCompanion(companionId, cause = 'unknown') {
        if (!state.companions[companionId]) return null;

        state.companions[companionId].alive = false;
        state.companions[companionId].inParty = false;
        state.companions[companionId].deathCause = cause;
        state.companions[companionId].deathDay = SurvivalEngine?.state?.day || 0;

        state.party = state.party.filter(id => id !== companionId);
        state.deceased.push({
            id: companionId,
            cause,
            day: SurvivalEngine?.state?.day || 0,
            affinity: state.companions[companionId].affinity
        });

        saveState();

        return {
            companion: COMPANIONS[companionId],
            cause,
            finalAffinity: state.companions[companionId].affinity,
            wasInParty: true,
            message: getDeathMessage(companionId, cause)
        };
    }

    function getDeathMessage(companionId, cause) {
        const name = COMPANIONS[companionId].name;
        const messages = {
            infected: `${name} turned. You did what had to be done.`,
            sacrifice: `${name} gave their life for you. Remember them.`,
            combat: `${name} fell in combat. There was nothing you could do.`,
            betrayal: `${name} betrayed you. It cost them everything.`,
            abandoned: `You left ${name} behind. You'll never know what happened to them.`,
            unknown: `${name} is gone. The details don't matter anymore.`
        };
        return messages[cause] || messages.unknown;
    }

    function canResurrectInNGPlus(companionId) {
        // Some deaths are permanent even in NG+
        const permadeathCauses = ['betrayal', 'abandoned'];
        const death = state.deceased.find(d => d.id === companionId);
        return death && !permadeathCauses.includes(death.cause);
    }

    // ═══════════════════════════════════════════════════════════════════════════
    // ROMANCE SYSTEM
    // ═══════════════════════════════════════════════════════════════════════════

    function canRomance(companionId) {
        const companion = COMPANIONS[companionId];
        const compState = state.companions[companionId];

        if (!compState.alive || !compState.recruited) return false;
        if (compState.affinity < companion.affinityThresholds.romance) return false;
        if (state.romanceActive && state.romanceActive !== companionId) return false;

        return true;
    }

    function initiateRomance(companionId) {
        if (!canRomance(companionId)) {
            return { success: false, reason: 'Cannot romance this companion' };
        }

        state.romanceActive = companionId;
        state.romanceHistory.push({
            companion: companionId,
            started: Date.now(),
            day: SurvivalEngine?.state?.day || 0
        });

        modifyAffinity(companionId, 20, 'Romance initiated');
        saveState();

        return {
            success: true,
            companion: COMPANIONS[companionId],
            message: COMPANIONS[companionId].lines.highAffinity
        };
    }

    function getRomanceStatus() {
        if (!state.romanceActive) return null;

        return {
            companion: COMPANIONS[state.romanceActive],
            state: state.companions[state.romanceActive],
            relationship: getRelationshipLevel(state.romanceActive)
        };
    }

    // ═══════════════════════════════════════════════════════════════════════════
    // BETRAYAL SYSTEM
    // ═══════════════════════════════════════════════════════════════════════════

    function checkForBetrayal() {
        const betrayers = [];

        for (const [companionId, risk] of Object.entries(state.betrayalRisk)) {
            if (risk.active && state.companions[companionId].inParty) {
                // Roll for betrayal
                if (Math.random() * 100 < risk.probability) {
                    betrayers.push(companionId);
                }
            }
        }

        return betrayers;
    }

    function executeBetrayal(companionId) {
        state.companions[companionId].betrayedPlayer = true;
        state.companions[companionId].inParty = false;
        state.party = state.party.filter(id => id !== companionId);

        saveState();

        return {
            betrayer: COMPANIONS[companionId],
            message: `${COMPANIONS[companionId].name} has betrayed you.`,
            consequences: generateBetrayalConsequences(companionId)
        };
    }

    function generateBetrayalConsequences(companionId) {
        // Betrayal steals resources and possibly reveals location
        const stolen = {};
        if (Math.random() < 0.5) stolen.food = Math.ceil(SurvivalEngine?.state?.resources?.food / 2) || 0;
        if (Math.random() < 0.5) stolen.water = Math.ceil(SurvivalEngine?.state?.resources?.water / 2) || 0;
        if (Math.random() < 0.3) stolen.medicine = 1;
        if (Math.random() < 0.3) stolen.ammo = Math.ceil(SurvivalEngine?.state?.resources?.ammo / 2) || 0;

        // Apply resource loss
        for (const [resource, amount] of Object.entries(stolen)) {
            SurvivalEngine?.consumeResource(resource, amount);
        }

        return {
            stolenResources: stolen,
            alertedEnemies: Math.random() < 0.3
        };
    }

    // ═══════════════════════════════════════════════════════════════════════════
    // DIALOGUE & INTERACTION
    // ═══════════════════════════════════════════════════════════════════════════

    function getContextualLine(companionId, context) {
        const companion = COMPANIONS[companionId];
        const compState = state.companions[companionId];

        // Check affinity-based lines first
        if (compState.affinity < 0) return companion.lines.lowAffinity;
        if (compState.affinity > 70) return companion.lines.highAffinity;

        // Context-specific lines
        if (companion.lines[context]) return companion.lines[context];

        return companion.lines.greeting;
    }

    function recordConversation(companionId, topic) {
        if (!state.companions[companionId]) return;

        state.companions[companionId].conversationsHad.push({
            topic,
            timestamp: Date.now(),
            day: SurvivalEngine?.state?.day || 0
        });

        // Conversations build affinity
        modifyAffinity(companionId, 2, `Conversation: ${topic}`);
    }

    function giveGift(companionId, item) {
        if (!state.companions[companionId]) return false;

        const giftValue = calculateGiftValue(companionId, item);
        state.companions[companionId].giftsGiven.push({
            item,
            value: giftValue,
            timestamp: Date.now()
        });

        modifyAffinity(companionId, giftValue, `Gift: ${item}`);
        return { success: true, affinityGain: giftValue };
    }

    function calculateGiftValue(companionId, item) {
        // Different companions value different things
        const preferences = {
            minho: { food: 3, water: 3, medicine: 5, ammo: 2 },
            jin: { food: 2, water: 2, medicine: 4, ammo: 4 },
            hana: { food: 5, water: 4, medicine: 3, ammo: 1 },
            minji: { food: 2, water: 3, medicine: 5, ammo: 2 },
            seora: { food: 2, water: 2, medicine: 3, ammo: 5 },
            soojin: { food: 3, water: 3, medicine: 4, ammo: 2 }
        };

        return preferences[companionId]?.[item] || 2;
    }

    function shareResource(companionId, resource, amount) {
        if (!SurvivalEngine?.consumeResource(resource, amount)) {
            return { success: false, reason: 'Not enough resources' };
        }

        const giftValue = calculateGiftValue(companionId, resource) * amount;
        modifyAffinity(companionId, giftValue, `Shared ${amount} ${resource}`);

        return { success: true, affinityGain: giftValue };
    }

    // ═══════════════════════════════════════════════════════════════════════════
    // UI GENERATION
    // ═══════════════════════════════════════════════════════════════════════════

    function generatePartyPanel() {
        const members = getPartyMembers();

        return `
            <div class="party-panel" id="party-panel">
                <div class="party-header">PARTY</div>
                ${members.map(member => `
                    <div class="party-member" data-companion="${member.id}">
                        <div class="member-portrait">${member.portrait}</div>
                        <div class="member-info">
                            <div class="member-name">${member.name}</div>
                            <div class="member-affinity" style="color: ${member.relationship.color}">
                                ${member.relationship.label}
                            </div>
                            <div class="affinity-bar">
                                <div class="affinity-fill" style="width: ${(member.state.affinity + 100) / 2}%"></div>
                            </div>
                        </div>
                        ${member.state.affinity >= member.affinityThresholds?.romance ? '<span class="romance-indicator">💕</span>' : ''}
                    </div>
                `).join('')}
                ${members.length === 0 ? '<div class="party-empty">Alone</div>' : ''}
            </div>
        `;
    }

    function generateCompanionCard(companionId) {
        const companion = COMPANIONS[companionId];
        const compState = state.companions[companionId];
        const relationship = getRelationshipLevel(companionId);

        return `
            <div class="companion-card ${compState.alive ? '' : 'deceased'}">
                <div class="card-portrait">${companion.portrait}</div>
                <div class="card-header">
                    <h3>${companion.name} <span class="name-kr">${companion.nameKR}</span></h3>
                    <span class="card-role">${companion.role.toUpperCase()}</span>
                </div>
                <p class="card-description">${companion.description}</p>
                <div class="card-relationship" style="color: ${relationship.color}">
                    ${relationship.label} (${compState.affinity})
                </div>
                <div class="card-skills">
                    ${Object.entries(companion.skills).map(([skill, level]) => `
                        <div class="skill">
                            <span class="skill-name">${skill}</span>
                            <span class="skill-dots">${'●'.repeat(level)}${'○'.repeat(5-level)}</span>
                        </div>
                    `).join('')}
                </div>
                <div class="card-quote">"${getContextualLine(companionId, 'greeting')}"</div>
            </div>
        `;
    }

    function generateCSS() {
        return `
            <style>
                .party-panel {
                    position: fixed;
                    right: 10px;
                    top: 120px;
                    background: rgba(10, 8, 8, 0.9);
                    border: 1px solid rgba(139, 0, 0, 0.3);
                    border-radius: 5px;
                    padding: 0.5rem;
                    z-index: 150;
                    min-width: 150px;
                }

                .party-header {
                    font-family: 'Space Mono', monospace;
                    font-size: 0.7rem;
                    color: var(--blood);
                    letter-spacing: 0.2em;
                    padding-bottom: 0.5rem;
                    border-bottom: 1px solid rgba(139, 0, 0, 0.2);
                    margin-bottom: 0.5rem;
                }

                .party-member {
                    display: flex;
                    gap: 0.5rem;
                    align-items: center;
                    padding: 0.3rem;
                    border-radius: 3px;
                    margin-bottom: 0.3rem;
                    cursor: pointer;
                    transition: background 0.2s;
                }

                .party-member:hover {
                    background: rgba(139, 0, 0, 0.2);
                }

                .member-portrait {
                    font-size: 1.5rem;
                }

                .member-info {
                    flex: 1;
                }

                .member-name {
                    font-size: 0.8rem;
                    color: var(--bone);
                }

                .member-affinity {
                    font-size: 0.6rem;
                    font-family: 'Space Mono', monospace;
                }

                .affinity-bar {
                    width: 100%;
                    height: 3px;
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 2px;
                    margin-top: 0.2rem;
                    overflow: hidden;
                }

                .affinity-fill {
                    height: 100%;
                    background: linear-gradient(90deg, var(--blood), #32cd32);
                    transition: width 0.3s;
                }

                .romance-indicator {
                    font-size: 0.8rem;
                }

                .party-empty {
                    color: rgba(255, 255, 255, 0.3);
                    font-style: italic;
                    font-size: 0.8rem;
                    text-align: center;
                    padding: 0.5rem;
                }

                .companion-card {
                    background: rgba(10, 8, 8, 0.95);
                    border: 1px solid rgba(139, 0, 0, 0.4);
                    border-radius: 5px;
                    padding: 1rem;
                    max-width: 300px;
                }

                .companion-card.deceased {
                    opacity: 0.5;
                    filter: grayscale(1);
                }

                .card-portrait {
                    font-size: 3rem;
                    text-align: center;
                    margin-bottom: 0.5rem;
                }

                .card-header {
                    text-align: center;
                    margin-bottom: 0.5rem;
                }

                .card-header h3 {
                    color: var(--bone);
                    margin: 0;
                }

                .name-kr {
                    color: rgba(139, 0, 0, 0.7);
                    font-size: 0.8em;
                }

                .card-role {
                    font-family: 'Space Mono', monospace;
                    font-size: 0.7rem;
                    color: rgba(255, 255, 255, 0.5);
                    letter-spacing: 0.1em;
                }

                .card-description {
                    font-size: 0.85rem;
                    color: rgba(232, 224, 213, 0.8);
                    margin-bottom: 0.5rem;
                }

                .card-relationship {
                    text-align: center;
                    font-family: 'Space Mono', monospace;
                    font-size: 0.8rem;
                    margin-bottom: 0.5rem;
                }

                .card-skills {
                    display: grid;
                    gap: 0.2rem;
                    margin-bottom: 0.5rem;
                }

                .skill {
                    display: flex;
                    justify-content: space-between;
                    font-size: 0.7rem;
                }

                .skill-name {
                    color: rgba(255, 255, 255, 0.6);
                    text-transform: capitalize;
                }

                .skill-dots {
                    color: var(--blood);
                    letter-spacing: -2px;
                }

                .card-quote {
                    font-style: italic;
                    font-size: 0.8rem;
                    color: rgba(232, 224, 213, 0.6);
                    text-align: center;
                    border-top: 1px solid rgba(139, 0, 0, 0.2);
                    padding-top: 0.5rem;
                }
            </style>
        `;
    }

    // ═══════════════════════════════════════════════════════════════════════════
    // PERSISTENCE
    // ═══════════════════════════════════════════════════════════════════════════

    function saveState() {
        localStorage.setItem('deadseoul_relationships', JSON.stringify(state));
    }

    function loadState() {
        const saved = localStorage.getItem('deadseoul_relationships');
        if (saved) {
            try {
                state = { ...state, ...JSON.parse(saved) };
            } catch (e) {
                console.warn('Could not load relationship state');
            }
        }
        initCompanionStates();
    }

    function resetState() {
        state = {
            companions: {},
            party: [],
            deceased: [],
            relationshipEvents: [],
            betrayalRisk: {},
            romanceActive: null,
            romanceHistory: []
        };
        initCompanionStates();
        saveState();
    }

    function init() {
        loadState();

        // Inject CSS
        if (!document.getElementById('relationship-css')) {
            const style = document.createElement('div');
            style.id = 'relationship-css';
            style.innerHTML = generateCSS();
            document.head.appendChild(style.querySelector('style'));
        }

        // Inject party panel
        if (!document.getElementById('party-panel')) {
            document.body.insertAdjacentHTML('beforeend', generatePartyPanel());
        }

        console.log('💕 Relationship Engine initialized');
        console.log(`   Party: ${state.party.length} members`);
        console.log(`   Romance: ${state.romanceActive || 'None'}`);
    }

    // ═══════════════════════════════════════════════════════════════════════════
    // PUBLIC API
    // ═══════════════════════════════════════════════════════════════════════════

    return {
        // State access
        get state() { return state; },
        get companions() { return COMPANIONS; },

        // Affinity
        getAffinity,
        modifyAffinity,
        getRelationshipLevel,

        // Party
        meetCompanion,
        recruitCompanion,
        dismissCompanion,
        getPartyMembers,
        getPartySkillBonus,

        // Death
        killCompanion,
        canResurrectInNGPlus,

        // Romance
        canRomance,
        initiateRomance,
        getRomanceStatus,

        // Betrayal
        checkForBetrayal,
        executeBetrayal,

        // Interaction
        getContextualLine,
        recordConversation,
        giveGift,
        shareResource,

        // UI
        generatePartyPanel,
        generateCompanionCard,

        // Lifecycle
        init,
        saveState,
        loadState,
        resetState
    };
})();

// Auto-initialize
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => RelationshipEngine.init());
} else {
    RelationshipEngine.init();
}
