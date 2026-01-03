// ═══════════════════════════════════════════════════════════════════════════════
// DEAD SEOUL - MAP ENGINE
// Interactive Seoul district navigation, route planning, threat visualization
// ═══════════════════════════════════════════════════════════════════════════════

const MapEngine = (function() {
    'use strict';

    // ═══════════════════════════════════════════════════════════════════════════
    // DISTRICT COORDINATES (Relative positions for map rendering)
    // ═══════════════════════════════════════════════════════════════════════════

    const DISTRICT_COORDS = {
        bukchon:        { x: 50, y: 15 },
        jongno:         { x: 45, y: 25 },
        dongdaemun:     { x: 65, y: 30 },
        myeongdong:     { x: 50, y: 40 },
        seoul_station:  { x: 40, y: 50 },
        itaewon:        { x: 55, y: 55 },
        yongsan:        { x: 35, y: 55 },
        hongdae:        { x: 20, y: 45 },
        mapo:           { x: 25, y: 60 },
        yeouido:        { x: 30, y: 70 },
        gangnam:        { x: 60, y: 75 },
        jamsil:         { x: 80, y: 70 }
    };

    // Connection paths (for drawing lines)
    const CONNECTIONS = [
        ['bukchon', 'jongno'],
        ['jongno', 'myeongdong'],
        ['jongno', 'dongdaemun'],
        ['dongdaemun', 'myeongdong'],
        ['myeongdong', 'itaewon'],
        ['myeongdong', 'seoul_station'],
        ['seoul_station', 'yongsan'],
        ['seoul_station', 'myeongdong'],
        ['itaewon', 'yongsan'],
        ['itaewon', 'gangnam'],
        ['hongdae', 'mapo'],
        ['hongdae', 'yeouido'],
        ['mapo', 'yeouido'],
        ['mapo', 'yongsan'],
        ['yeouido', 'gangnam'],
        ['yeouido', 'yongsan'],
        ['gangnam', 'jamsil']
    ];

    // ═══════════════════════════════════════════════════════════════════════════
    // STATE
    // ═══════════════════════════════════════════════════════════════════════════

    let state = {
        mapVisible: false,
        selectedDistrict: null,
        plannedRoute: [],
        hordePositions: [],
        safeZones: [],
        lastUpdate: Date.now()
    };

    // ═══════════════════════════════════════════════════════════════════════════
    // HORDE SIMULATION
    // ═══════════════════════════════════════════════════════════════════════════

    function initHordes() {
        // Random horde spawns
        const districtIds = Object.keys(DISTRICT_COORDS);
        const numHordes = Math.floor(Math.random() * 3) + 2;

        state.hordePositions = [];
        for (let i = 0; i < numHordes; i++) {
            const districtId = districtIds[Math.floor(Math.random() * districtIds.length)];
            state.hordePositions.push({
                district: districtId,
                size: Math.floor(Math.random() * 3) + 1,  // 1-3 (small, medium, large)
                direction: Math.random() < 0.5 ? 1 : -1
            });
        }
    }

    function moveHordes() {
        // Hordes migrate between connected districts
        state.hordePositions = state.hordePositions.map(horde => {
            if (Math.random() < 0.3) {  // 30% chance to move each cycle
                const districts = SurvivalEngine?.districts || {};
                const current = districts[horde.district];
                if (current?.connections?.length > 0) {
                    const nextIndex = Math.floor(Math.random() * current.connections.length);
                    return { ...horde, district: current.connections[nextIndex] };
                }
            }
            return horde;
        });
    }

    function getDistrictThreat(districtId) {
        const baseThreat = SurvivalEngine?.districts?.[districtId]?.threatLevel || 3;
        const hordeBonus = state.hordePositions.filter(h => h.district === districtId)
            .reduce((sum, h) => sum + h.size * 2, 0);
        const timeMultiplier = SurvivalEngine?.getThreatMultiplier() || 1;

        return Math.min(10, baseThreat + hordeBonus) * timeMultiplier;
    }

    // ═══════════════════════════════════════════════════════════════════════════
    // ROUTE PLANNING
    // ═══════════════════════════════════════════════════════════════════════════

    function planRoute(fromId, toId) {
        // A* pathfinding with threat as cost
        const districts = SurvivalEngine?.districts || {};

        const openSet = [fromId];
        const cameFrom = {};
        const gScore = { [fromId]: 0 };
        const fScore = { [fromId]: heuristic(fromId, toId) };

        while (openSet.length > 0) {
            // Get node with lowest fScore
            openSet.sort((a, b) => (fScore[a] || Infinity) - (fScore[b] || Infinity));
            const current = openSet.shift();

            if (current === toId) {
                return reconstructPath(cameFrom, current);
            }

            const connections = districts[current]?.connections || [];
            for (const neighbor of connections) {
                const tentativeG = (gScore[current] || 0) + getDistrictThreat(neighbor) + 1;

                if (tentativeG < (gScore[neighbor] || Infinity)) {
                    cameFrom[neighbor] = current;
                    gScore[neighbor] = tentativeG;
                    fScore[neighbor] = tentativeG + heuristic(neighbor, toId);

                    if (!openSet.includes(neighbor)) {
                        openSet.push(neighbor);
                    }
                }
            }
        }

        return null;  // No path found
    }

    function heuristic(fromId, toId) {
        const from = DISTRICT_COORDS[fromId];
        const to = DISTRICT_COORDS[toId];
        if (!from || !to) return 100;
        return Math.abs(from.x - to.x) + Math.abs(from.y - to.y);
    }

    function reconstructPath(cameFrom, current) {
        const path = [current];
        while (cameFrom[current]) {
            current = cameFrom[current];
            path.unshift(current);
        }
        return path;
    }

    function setPlannedRoute(route) {
        state.plannedRoute = route;
    }

    function getRouteCost(route) {
        if (!route || route.length < 2) return 0;

        let totalThreat = 0;
        let totalTime = 0;

        for (let i = 1; i < route.length; i++) {
            totalThreat += getDistrictThreat(route[i]);
            totalTime += 2;  // 2 hours per district transition
        }

        return { threat: totalThreat, time: totalTime, districts: route.length - 1 };
    }

    // ═══════════════════════════════════════════════════════════════════════════
    // MAP RENDERING
    // ═══════════════════════════════════════════════════════════════════════════

    function generateMapSVG() {
        const currentDistrict = SurvivalEngine?.state?.currentDistrict || 'gangnam';
        const exploredDistricts = SurvivalEngine?.state?.exploredDistricts || [currentDistrict];
        const districts = SurvivalEngine?.districts || {};

        let svg = `
            <svg viewBox="0 0 100 100" class="seoul-map">
                <defs>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
                        <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                    <linearGradient id="dangerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style="stop-color:#2d5016"/>
                        <stop offset="50%" style="stop-color:#8b4513"/>
                        <stop offset="100%" style="stop-color:#8b0000"/>
                    </linearGradient>
                </defs>

                <!-- Han River -->
                <path d="M 0 65 Q 30 60 50 68 Q 70 75 100 70"
                      stroke="#1a3a5c" stroke-width="3" fill="none" opacity="0.5"/>

                <!-- Connections -->
                ${CONNECTIONS.map(([from, to]) => {
                    const fromCoord = DISTRICT_COORDS[from];
                    const toCoord = DISTRICT_COORDS[to];
                    const isOnRoute = state.plannedRoute.includes(from) && state.plannedRoute.includes(to) &&
                        Math.abs(state.plannedRoute.indexOf(from) - state.plannedRoute.indexOf(to)) === 1;
                    const isExplored = exploredDistricts.includes(from) && exploredDistricts.includes(to);

                    return `<line
                        x1="${fromCoord.x}" y1="${fromCoord.y}"
                        x2="${toCoord.x}" y2="${toCoord.y}"
                        stroke="${isOnRoute ? '#00ff00' : isExplored ? 'rgba(139,0,0,0.5)' : 'rgba(255,255,255,0.1)'}"
                        stroke-width="${isOnRoute ? 1 : 0.5}"
                        ${isOnRoute ? 'stroke-dasharray="2,1"' : ''}
                    />`;
                }).join('')}

                <!-- District markers -->
                ${Object.entries(DISTRICT_COORDS).map(([id, coord]) => {
                    const district = districts[id] || {};
                    const threat = getDistrictThreat(id);
                    const isExplored = exploredDistricts.includes(id);
                    const isCurrent = id === currentDistrict;
                    const isSelected = id === state.selectedDistrict;
                    const hasHorde = state.hordePositions.some(h => h.district === id);

                    const threatColor = threat <= 2 ? '#2d5016' :
                                       threat <= 4 ? '#5a6b1a' :
                                       threat <= 6 ? '#8b4513' :
                                       threat <= 8 ? '#a52a2a' : '#8b0000';

                    return `
                        <g class="district-marker ${isCurrent ? 'current' : ''} ${isExplored ? 'explored' : 'unexplored'}"
                           data-district="${id}"
                           transform="translate(${coord.x}, ${coord.y})">

                            <!-- Threat indicator ring -->
                            <circle r="${4 + threat * 0.3}"
                                    fill="none"
                                    stroke="${threatColor}"
                                    stroke-width="0.5"
                                    opacity="${isExplored ? 0.6 : 0.2}"/>

                            <!-- District dot -->
                            <circle r="2"
                                    fill="${isCurrent ? '#00ff00' : isExplored ? threatColor : '#333'}"
                                    stroke="${isSelected ? '#fff' : 'none'}"
                                    stroke-width="0.5"
                                    filter="${isCurrent ? 'url(#glow)' : 'none'}"/>

                            <!-- Horde indicator -->
                            ${hasHorde ? `
                                <text x="4" y="1" font-size="4" fill="#ff0000" class="horde-icon">☠</text>
                            ` : ''}

                            <!-- Label -->
                            <text x="0" y="6"
                                  text-anchor="middle"
                                  font-size="2.5"
                                  fill="${isExplored ? 'rgba(232,224,213,0.9)' : 'rgba(255,255,255,0.3)'}"
                                  class="district-label">
                                ${district.name?.split(' ')[0] || id.toUpperCase()}
                            </text>
                        </g>
                    `;
                }).join('')}

                <!-- Player marker -->
                <g transform="translate(${DISTRICT_COORDS[currentDistrict]?.x || 50}, ${DISTRICT_COORDS[currentDistrict]?.y || 50})">
                    <circle r="1.5" fill="#00ff00" filter="url(#glow)">
                        <animate attributeName="r" values="1.5;2;1.5" dur="1s" repeatCount="indefinite"/>
                    </circle>
                </g>
            </svg>
        `;

        return svg;
    }

    function generateMapUI() {
        const currentDistrict = SurvivalEngine?.getCurrentDistrict() || {};
        const connected = SurvivalEngine?.getConnectedDistricts() || [];

        return `
            <div class="map-overlay ${state.mapVisible ? 'visible' : ''}" id="map-overlay">
                <div class="map-container">
                    <div class="map-header">
                        <h2>서울 SEOUL</h2>
                        <span class="map-day">DAY ${SurvivalEngine?.state?.day || 1}</span>
                        <button class="map-close" onclick="MapEngine.hideMap()">×</button>
                    </div>

                    <div class="map-content">
                        <div class="map-svg-container" id="map-svg-container">
                            ${generateMapSVG()}
                        </div>

                        <div class="map-sidebar">
                            <div class="current-location">
                                <h3>📍 CURRENT</h3>
                                <div class="location-name">${currentDistrict.name || 'Unknown'}</div>
                                <div class="location-threat">
                                    Threat: ${getThreatBar(getDistrictThreat(SurvivalEngine?.state?.currentDistrict))}
                                </div>
                                <p class="location-desc">${currentDistrict.description || ''}</p>
                            </div>

                            <div class="travel-options">
                                <h3>🚶 TRAVEL TO</h3>
                                ${connected.map(d => `
                                    <button class="travel-btn ${d.explored ? '' : 'unexplored'}"
                                            onclick="MapEngine.selectDistrict('${d.id}')"
                                            data-district="${d.id}">
                                        <span class="district-name">${d.name}</span>
                                        <span class="district-threat">${getThreatBar(getDistrictThreat(d.id))}</span>
                                        ${!d.explored ? '<span class="unexplored-tag">?</span>' : ''}
                                    </button>
                                `).join('')}
                            </div>

                            ${state.selectedDistrict ? generateDistrictInfo(state.selectedDistrict) : ''}

                            <div class="map-legend">
                                <h3>LEGEND</h3>
                                <div class="legend-item"><span class="legend-dot safe"></span> Safe (1-2)</div>
                                <div class="legend-item"><span class="legend-dot moderate"></span> Moderate (3-5)</div>
                                <div class="legend-item"><span class="legend-dot danger"></span> Dangerous (6-8)</div>
                                <div class="legend-item"><span class="legend-dot deadly"></span> Deadly (9-10)</div>
                                <div class="legend-item"><span class="legend-icon">☠</span> Horde Present</div>
                            </div>
                        </div>
                    </div>

                    <div class="map-actions">
                        ${state.selectedDistrict && state.selectedDistrict !== SurvivalEngine?.state?.currentDistrict ? `
                            <button class="action-btn travel" onclick="MapEngine.travelToSelected()">
                                TRAVEL TO ${SurvivalEngine?.districts?.[state.selectedDistrict]?.name || state.selectedDistrict}
                            </button>
                        ` : ''}
                        <button class="action-btn search" onclick="MapEngine.searchCurrent()">
                            SEARCH AREA
                        </button>
                        <button class="action-btn wait" onclick="MapEngine.waitHere()">
                            WAIT (1 HOUR)
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    function generateDistrictInfo(districtId) {
        const districts = SurvivalEngine?.districts || {};
        const district = districts[districtId];
        if (!district) return '';

        const threat = getDistrictThreat(districtId);
        const route = planRoute(SurvivalEngine?.state?.currentDistrict, districtId);
        const routeCost = getRouteCost(route);

        return `
            <div class="district-info">
                <h3>📋 ${district.name}</h3>
                <p>${district.description}</p>
                <div class="district-stats">
                    <div class="stat">
                        <span class="stat-label">Threat</span>
                        <span class="stat-value">${getThreatBar(threat)}</span>
                    </div>
                    <div class="stat">
                        <span class="stat-label">Loot Quality</span>
                        <span class="stat-value">${'★'.repeat(district.lootQuality)}${'☆'.repeat(5-district.lootQuality)}</span>
                    </div>
                    ${route ? `
                        <div class="stat">
                            <span class="stat-label">Route</span>
                            <span class="stat-value">${route.length - 1} districts, ~${routeCost.time}h</span>
                        </div>
                    ` : ''}
                </div>
                ${district.special ? `<div class="district-special">⚡ ${formatSpecial(district.special)}</div>` : ''}
            </div>
        `;
    }

    function getThreatBar(threat) {
        const filled = Math.round(threat);
        const empty = 10 - filled;
        const color = threat <= 3 ? '#2d5016' : threat <= 6 ? '#8b4513' : '#8b0000';
        return `<span style="color: ${color}">${'█'.repeat(filled)}${'░'.repeat(empty)}</span>`;
    }

    function formatSpecial(special) {
        const labels = {
            rich_loot: 'High-value supplies',
            dense_infected: 'Infected hotspot',
            survivor_friendly: 'Friendly survivors',
            military_checkpoint: 'Military presence',
            medical_supplies: 'Medical cache',
            traditional_medicine: 'Herbal remedies',
            fabric_shelter: 'Makeshift shelter materials',
            military_gear: 'Weapons possible',
            horde_danger: 'Horde migration path',
            river_crossing: 'Han River access',
            safe_haven: 'Low threat zone',
            ground_zero: 'Origin point - extreme danger'
        };
        return labels[special] || special;
    }

    function generateCSS() {
        return `
            <style>
                .map-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.95);
                    z-index: 1000;
                    display: none;
                    justify-content: center;
                    align-items: center;
                }

                .map-overlay.visible {
                    display: flex;
                }

                .map-container {
                    width: 95%;
                    max-width: 1200px;
                    height: 90vh;
                    background: var(--ash);
                    border: 1px solid var(--blood);
                    border-radius: 10px;
                    display: flex;
                    flex-direction: column;
                    overflow: hidden;
                }

                .map-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1rem;
                    border-bottom: 1px solid rgba(139, 0, 0, 0.3);
                }

                .map-header h2 {
                    font-family: 'Cinzel', serif;
                    color: var(--blood);
                    margin: 0;
                    letter-spacing: 0.2em;
                }

                .map-day {
                    font-family: 'Space Mono', monospace;
                    color: rgba(255, 255, 255, 0.5);
                }

                .map-close {
                    background: none;
                    border: none;
                    color: var(--bone);
                    font-size: 1.5rem;
                    cursor: pointer;
                    padding: 0.5rem;
                }

                .map-content {
                    flex: 1;
                    display: flex;
                    overflow: hidden;
                }

                .map-svg-container {
                    flex: 2;
                    padding: 1rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .seoul-map {
                    width: 100%;
                    height: 100%;
                    max-height: 60vh;
                }

                .district-marker {
                    cursor: pointer;
                    transition: transform 0.2s;
                }

                .district-marker:hover {
                    transform: scale(1.2);
                }

                .district-marker.unexplored {
                    opacity: 0.4;
                }

                .district-label {
                    font-family: 'Space Mono', monospace;
                    pointer-events: none;
                }

                .horde-icon {
                    animation: pulse-horde 0.5s infinite;
                }

                @keyframes pulse-horde {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.5; }
                }

                .map-sidebar {
                    flex: 1;
                    padding: 1rem;
                    overflow-y: auto;
                    border-left: 1px solid rgba(139, 0, 0, 0.2);
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }

                .map-sidebar h3 {
                    font-family: 'Space Mono', monospace;
                    font-size: 0.8rem;
                    color: var(--blood);
                    letter-spacing: 0.1em;
                    margin: 0 0 0.5rem 0;
                }

                .current-location {
                    background: rgba(0, 100, 0, 0.1);
                    padding: 1rem;
                    border-radius: 5px;
                    border: 1px solid rgba(0, 100, 0, 0.3);
                }

                .location-name {
                    font-size: 1.2rem;
                    color: var(--bone);
                    margin-bottom: 0.3rem;
                }

                .location-threat {
                    font-family: 'Space Mono', monospace;
                    font-size: 0.8rem;
                    margin-bottom: 0.5rem;
                }

                .location-desc {
                    font-size: 0.85rem;
                    color: rgba(232, 224, 213, 0.7);
                    margin: 0;
                }

                .travel-options {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }

                .travel-btn {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0.75rem;
                    background: rgba(139, 0, 0, 0.1);
                    border: 1px solid rgba(139, 0, 0, 0.3);
                    border-radius: 5px;
                    color: var(--bone);
                    cursor: pointer;
                    transition: all 0.2s;
                    font-family: inherit;
                    text-align: left;
                }

                .travel-btn:hover {
                    background: rgba(139, 0, 0, 0.3);
                    border-color: var(--blood);
                }

                .travel-btn.unexplored {
                    opacity: 0.6;
                    border-style: dashed;
                }

                .district-name {
                    font-size: 0.9rem;
                }

                .district-threat {
                    font-family: 'Space Mono', monospace;
                    font-size: 0.7rem;
                }

                .unexplored-tag {
                    color: var(--blood);
                    font-weight: bold;
                }

                .district-info {
                    background: rgba(139, 0, 0, 0.1);
                    padding: 1rem;
                    border-radius: 5px;
                    border: 1px solid rgba(139, 0, 0, 0.3);
                }

                .district-stats {
                    display: flex;
                    flex-direction: column;
                    gap: 0.3rem;
                    margin: 0.5rem 0;
                }

                .stat {
                    display: flex;
                    justify-content: space-between;
                    font-size: 0.8rem;
                }

                .stat-label {
                    color: rgba(255, 255, 255, 0.6);
                }

                .stat-value {
                    font-family: 'Space Mono', monospace;
                }

                .district-special {
                    font-size: 0.8rem;
                    color: #ffd700;
                    margin-top: 0.5rem;
                }

                .map-legend {
                    font-size: 0.75rem;
                    padding-top: 1rem;
                    border-top: 1px solid rgba(139, 0, 0, 0.2);
                }

                .legend-item {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    margin-bottom: 0.3rem;
                    color: rgba(255, 255, 255, 0.6);
                }

                .legend-dot {
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                }

                .legend-dot.safe { background: #2d5016; }
                .legend-dot.moderate { background: #8b4513; }
                .legend-dot.danger { background: #a52a2a; }
                .legend-dot.deadly { background: #8b0000; }

                .legend-icon {
                    font-size: 0.9rem;
                }

                .map-actions {
                    display: flex;
                    gap: 1rem;
                    padding: 1rem;
                    border-top: 1px solid rgba(139, 0, 0, 0.3);
                    justify-content: center;
                }

                .action-btn {
                    padding: 0.75rem 1.5rem;
                    border: 1px solid rgba(139, 0, 0, 0.5);
                    border-radius: 5px;
                    background: rgba(139, 0, 0, 0.2);
                    color: var(--bone);
                    font-family: 'Space Mono', monospace;
                    font-size: 0.8rem;
                    cursor: pointer;
                    transition: all 0.2s;
                }

                .action-btn:hover {
                    background: rgba(139, 0, 0, 0.4);
                    border-color: var(--blood);
                }

                .action-btn.travel {
                    background: rgba(0, 100, 0, 0.3);
                    border-color: rgba(0, 100, 0, 0.5);
                }

                .action-btn.travel:hover {
                    background: rgba(0, 100, 0, 0.5);
                }

                /* Map button in header */
                .map-toggle-btn {
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    background: var(--blood);
                    border: none;
                    color: var(--bone);
                    font-size: 1.5rem;
                    cursor: pointer;
                    z-index: 500;
                    box-shadow: 0 4px 15px rgba(139, 0, 0, 0.5);
                    transition: transform 0.2s;
                }

                .map-toggle-btn:hover {
                    transform: scale(1.1);
                }
            </style>
        `;
    }

    // ═══════════════════════════════════════════════════════════════════════════
    // USER ACTIONS
    // ═══════════════════════════════════════════════════════════════════════════

    function showMap() {
        state.mapVisible = true;
        updateUI();
    }

    function hideMap() {
        state.mapVisible = false;
        state.selectedDistrict = null;
        updateUI();
    }

    function toggleMap() {
        state.mapVisible ? hideMap() : showMap();
    }

    function selectDistrict(districtId) {
        state.selectedDistrict = districtId;

        // Plan route
        const currentDistrict = SurvivalEngine?.state?.currentDistrict;
        if (currentDistrict && districtId !== currentDistrict) {
            const route = planRoute(currentDistrict, districtId);
            if (route) {
                state.plannedRoute = route;
            }
        }

        updateUI();
    }

    function travelToSelected() {
        if (!state.selectedDistrict) return;

        const result = SurvivalEngine?.travelTo(state.selectedDistrict);
        if (result?.success) {
            state.selectedDistrict = null;
            state.plannedRoute = [];

            // Show result
            if (result.encounter) {
                showEncounter(result.encounter);
            }

            updateUI();
        }
    }

    function searchCurrent() {
        const result = SurvivalEngine?.searchLocation();
        if (result) {
            showSearchResult(result);
            updateUI();
        }
    }

    function waitHere() {
        const result = SurvivalEngine?.advanceTime(1);
        if (result) {
            showTimeResult(result);
            updateUI();
        }
    }

    function showEncounter(encounter) {
        // Create modal for encounter
        const modal = document.createElement('div');
        modal.className = 'encounter-modal';
        modal.innerHTML = `
            <div class="encounter-content">
                <h3>⚠️ ENCOUNTER</h3>
                <p>${encounter.message}</p>
                <div class="encounter-threat">Threat Level: ${encounter.threat}</div>
                <button onclick="this.parentElement.parentElement.remove()">CONTINUE</button>
            </div>
        `;
        document.body.appendChild(modal);
    }

    function showSearchResult(result) {
        const modal = document.createElement('div');
        modal.className = 'encounter-modal';
        modal.innerHTML = `
            <div class="encounter-content">
                <h3>🔍 SEARCH RESULT</h3>
                <p>${result.message}</p>
                ${result.encounter ? `<p class="warning">⚠️ ${result.encounter.message}</p>` : ''}
                <button onclick="this.parentElement.parentElement.remove()">CONTINUE</button>
            </div>
        `;
        document.body.appendChild(modal);
    }

    function showTimeResult(result) {
        if (result.event === 'phase_change') {
            const modal = document.createElement('div');
            modal.className = 'encounter-modal';
            modal.innerHTML = `
                <div class="encounter-content">
                    <h3>🕐 TIME PASSES</h3>
                    <p>${result.message}</p>
                    <div class="time-info">Day ${result.day} - ${result.phase.toUpperCase()}</div>
                    <button onclick="this.parentElement.parentElement.remove()">CONTINUE</button>
                </div>
            `;
            document.body.appendChild(modal);
        }
    }

    // ═══════════════════════════════════════════════════════════════════════════
    // UI UPDATE
    // ═══════════════════════════════════════════════════════════════════════════

    function updateUI() {
        let overlay = document.getElementById('map-overlay');
        if (overlay) {
            overlay.outerHTML = generateMapUI();
        }

        // Re-attach click handlers to SVG districts
        setTimeout(() => {
            document.querySelectorAll('.district-marker').forEach(marker => {
                marker.addEventListener('click', () => {
                    selectDistrict(marker.dataset.district);
                });
            });
        }, 0);
    }

    // ═══════════════════════════════════════════════════════════════════════════
    // INITIALIZATION
    // ═══════════════════════════════════════════════════════════════════════════

    function init() {
        // Inject CSS
        if (!document.getElementById('map-css')) {
            const style = document.createElement('div');
            style.id = 'map-css';
            style.innerHTML = generateCSS();
            document.head.appendChild(style.querySelector('style'));

            // Add encounter modal CSS
            const modalCSS = document.createElement('style');
            modalCSS.textContent = `
                .encounter-modal {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.9);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 2000;
                }

                .encounter-content {
                    background: var(--ash);
                    border: 1px solid var(--blood);
                    padding: 2rem;
                    border-radius: 10px;
                    max-width: 400px;
                    text-align: center;
                }

                .encounter-content h3 {
                    color: var(--blood);
                    margin-bottom: 1rem;
                }

                .encounter-content p {
                    color: var(--bone);
                    margin-bottom: 1rem;
                }

                .encounter-content .warning {
                    color: #ff6600;
                }

                .encounter-threat {
                    font-family: 'Space Mono', monospace;
                    color: #ff4444;
                    margin-bottom: 1rem;
                }

                .time-info {
                    font-family: 'Space Mono', monospace;
                    color: rgba(255, 255, 255, 0.7);
                    margin-bottom: 1rem;
                }

                .encounter-content button {
                    padding: 0.75rem 2rem;
                    background: var(--blood);
                    border: none;
                    color: var(--bone);
                    cursor: pointer;
                    font-family: 'Space Mono', monospace;
                }
            `;
            document.head.appendChild(modalCSS);
        }

        // Inject map UI
        if (!document.getElementById('map-overlay')) {
            document.body.insertAdjacentHTML('beforeend', generateMapUI());
        }

        // Inject map toggle button
        if (!document.querySelector('.map-toggle-btn')) {
            const btn = document.createElement('button');
            btn.className = 'map-toggle-btn';
            btn.innerHTML = '🗺️';
            btn.title = 'Open Map';
            btn.onclick = toggleMap;
            document.body.appendChild(btn);
        }

        // Initialize hordes
        initHordes();

        // Horde movement on time advance
        if (typeof SurvivalEngine !== 'undefined') {
            const originalAdvanceTime = SurvivalEngine.advanceTime;
            SurvivalEngine.advanceTime = function(...args) {
                const result = originalAdvanceTime.apply(this, args);
                moveHordes();
                return result;
            };
        }

        console.log('🗺️ Map Engine initialized');
    }

    // ═══════════════════════════════════════════════════════════════════════════
    // PUBLIC API
    // ═══════════════════════════════════════════════════════════════════════════

    return {
        // State
        get state() { return state; },

        // Map controls
        showMap,
        hideMap,
        toggleMap,
        selectDistrict,

        // Actions
        travelToSelected,
        searchCurrent,
        waitHere,

        // Route planning
        planRoute,
        getRouteCost,
        setPlannedRoute,

        // Threat
        getDistrictThreat,

        // Hordes
        initHordes,
        moveHordes,

        // UI
        updateUI,
        generateMapSVG,

        // Lifecycle
        init
    };
})();

// Auto-initialize
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => MapEngine.init());
} else {
    MapEngine.init();
}
