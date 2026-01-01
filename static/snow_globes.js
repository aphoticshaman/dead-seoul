// ═══════════════════════════════════════════════════════════════════════════
// SNOW GLOBE COLLECTION - For Ellie, Who Collects Them Everywhere
// ═══════════════════════════════════════════════════════════════════════════
// One for every ending. One for every journey.
// Shake them and watch the world you built together.
// ═══════════════════════════════════════════════════════════════════════════

const SnowGlobeCollection = {

    // All available snow globes
    globes: {
        // ═══════════════════════════════════════════════════════════════════
        // MAIN ENDING GLOBES
        // ═══════════════════════════════════════════════════════════════════

        // Ending 1: THE REKINDLED FLAME - Kissed Minho immediately, no waiting
        rekindled: {
            id: 'rekindled',
            name: 'The Rekindled Flame',
            ending: 1,
            endingCode: 'FLAME',
            description: 'Two figures pressed against a wall in an abandoned apartment. The barricade holds. Outside, chaos. Inside, six months of silence burning away.',
            scene: 'You grabbed his collar. You didn\'t wait. The world was ending—why waste another second?',
            rarity: 'epic',
            unlockMessage: 'You took what you wanted.',
            displayText: '"I choose you. Every time. I choose you."'
        },

        // Ending 2: THE DISPATCHER - Solo path, Seoul Station radio network
        dispatcher: {
            id: 'dispatcher',
            name: 'The Dispatcher',
            ending: 2,
            endingCode: 'DSPCH',
            description: 'A radio tower rises from Seoul Station. Tiny figures huddle around it. One voice reaches them all. The snow carries signals, not silence.',
            scene: 'Mrs. Park didn\'t save you so you could save yourself. Forty-three survivors. A key. A choice to share.',
            rarity: 'legendary',
            unlockMessage: 'Your voice became their hope.',
            displayText: '"This is Dispatcher Yuna. If you can hear this, you\'re not alone."'
        },

        // Ending 3: THE SURVIVORS - Built life with Minho, led together
        survivors: {
            id: 'survivors',
            name: 'The Survivors',
            ending: 3,
            endingCode: 'SURVI',
            description: 'Two figures lead a supply run. Behind them, others follow. The safe zone grows into a city. The city grows into a nation.',
            scene: 'Together or not at all. He said it. You held him to it. You built something no apocalypse could take.',
            rarity: 'legendary',
            unlockMessage: 'You built a world worth living in.',
            displayText: '"I choose you. Forever. I choose you."'
        },

        // Ending 4: THE NEW LIFE - Escaped to Japan with Soojin
        newLife: {
            id: 'newLife',
            name: 'The New Life',
            ending: 4,
            endingCode: 'NEWLF',
            description: 'A small boat crosses dark water. Two figures. Japan\'s lights glow on the horizon. Behind them, Korea burns. Ahead, a quarantine checkpoint. A new beginning.',
            scene: 'She chose you over Soyeon. Over the woman she\'d pined for years. "Partners," she told them. It sounded right.',
            rarity: 'legendary',
            unlockMessage: 'You became her home.',
            displayText: '"I love you. I\'ve been trying to figure out how to say it."'
        },

        // Ending 5: MRS. PARK'S SACRIFICE - Stayed alone, survived
        hermit: {
            id: 'hermit',
            name: 'Mrs. Park\'s Key',
            ending: 5,
            endingCode: 'ALONE',
            description: 'A single figure in a storage unit. Supplies stacked high. A radio silent. Outside, a key hangs from the door. The snow falls on no one.',
            scene: 'You took the key. You survived. The radio calls still come. You don\'t answer.',
            rarity: 'rare',
            unlockMessage: 'Survival isn\'t always victory.',
            displayText: '"She gave you months. You gave no one else a day."'
        },

        // Ending 6: THE THROUPLE - Minho + Colonel Yoo polyamory
        throuple: {
            id: 'throuple',
            name: 'The Throuple',
            ending: 6,
            endingCode: 'THREE',
            description: 'Three figures tangled in a tent too small. One gives steadiness. One gives fire. The snow outside doesn\'t matter. Inside is warmth enough.',
            scene: '"This is insane." "Completely." "Absolutely." She kisses you. Then him. "I like insane."',
            rarity: 'mythic',
            unlockMessage: 'You chose both. They chose you back.',
            displayText: '"We chose each other. Every day. That\'s all it takes."'
        },

        // Ending 7: Jin's Ending - Together Forever (JINLV, 92)
        jinForever: {
            id: 'jinForever',
            name: 'Forever',
            ending: 92,
            endingCode: 'JINLV',
            description: 'A dreamcatcher hangs above two figures. A crystal necklace catches light—67 languages of love. Matching tattoos. Raven and orca. The snow here falls like a blessing.',
            scene: 'He gave you the dreamcatcher the day you met. The crystal came later. The tattoos came after. Forever was always the destination.',
            rarity: 'mythic',
            unlockMessage: 'This is what devotion looks like.',
            displayText: '"Mine. Completely. Forever."'
        },

        // Ending 8: Jin Lost - Betrayed or lost him
        jinLost: {
            id: 'jinLost',
            name: 'Empty Hands',
            ending: 8,
            endingCode: 'JINLS',
            description: 'A dreamcatcher lies broken on the ground. A single figure reaches for something no longer there. The red thread unraveled.',
            scene: 'You had him. You lost him. The dreamcatcher couldn\'t catch this nightmare.',
            rarity: 'rare',
            unlockMessage: 'Some choices can\'t be undone.',
            displayText: '"The space where he stood is the coldest place on earth."'
        },

        // Ending 9: Infected - Turned
        infected: {
            id: 'infected',
            name: 'The Turning',
            ending: 9,
            endingCode: 'INFCT',
            description: 'A figure mid-transformation. Fungal blooms like flowers. The knife from section 4 lies at their feet—the santoku that saved them. Until it didn\'t.',
            scene: 'You survived the hallway. The stairwell. The street. But one bite was all it took.',
            rarity: 'common',
            unlockMessage: 'Even hunters become prey.',
            displayText: '"Fear is just love holding its breath. Then stopping."'
        },

        // Ending 10: The Orca Rider Appears
        orcaRider: {
            id: 'orcaRider',
            name: 'The Rider',
            ending: 10,
            endingCode: 'ORCAM',
            description: 'A figure in black watches from the water\'s edge. An impossible silhouette beneath the waves. He was there at the marina. At the crossing. Always watching.',
            scene: 'Some guardians don\'t announce themselves. They just appear when you need them most.',
            rarity: 'mythic',
            unlockMessage: 'The Orca Rider reveals himself to those who endure.',
            displayText: '"Apex predators protect their own."'
        },

        // Ending 11: The Betrayer
        betrayer: {
            id: 'betrayer',
            name: 'The Betrayer',
            ending: 11,
            endingCode: 'BETRY',
            description: 'A figure walks away from a fallen body. Safe zone gates close behind them. The snow here is red, then white, then nothing.',
            scene: 'You traded them for safety. You got in. They didn\'t.',
            rarity: 'rare',
            unlockMessage: 'You lived. But at what cost?',
            displayText: '"The price of survival was everything that made it worth surviving."'
        },

        // Ending 12: HEA with Jin - Garden ending
        trueEnding: {
            id: 'trueEnding',
            name: 'After the Storm',
            ending: 12,
            endingCode: 'TRUEE',
            description: 'Two figures on a porch. A garden grows. Jin\'s guitar plays something soft. The dreamcatcher sways. The crystal catches sunset. Twenty years later, still together.',
            scene: 'The world ended. Then it began again. You were there for both. Together.',
            rarity: 'mythic',
            unlockMessage: 'This is what loyalty earns.',
            displayText: '"And they lived. Simply lived. That was enough."'
        },

        // ═══════════════════════════════════════════════════════════════════
        // SECRET GLOBES - Hidden achievements
        // ═══════════════════════════════════════════════════════════════════

        // Find all TLOU easter eggs
        firefly: {
            id: 'firefly',
            name: 'Look for the Light',
            secret: true,
            requirement: 'Find 10 hidden references',
            description: 'A firefly trapped in glass. It glows, even now. The snow around it sparkles with its light.',
            scene: 'For those who get the references.',
            rarity: 'secret',
            unlockMessage: 'Endure and survive.',
            displayText: '"When you\'re lost in the darkness, look for the light."'
        },

        // Max loyalty
        loyalHeart: {
            id: 'loyalHeart',
            name: 'The Loyal Heart',
            secret: true,
            requirement: 'Reach maximum loyalty score',
            description: 'A heart, anatomically correct, beats slowly in the center. It never stops. The snow pulses with each beat.',
            scene: 'You showed up. Every time.',
            rarity: 'secret',
            unlockMessage: 'Loyalty is not a feeling. It is a choice made daily.',
            displayText: '"Show up for those who show up for you. Ruthlessly. Consistently."'
        },

        // Play through 5 times
        eternal: {
            id: 'eternal',
            name: 'The Eternal Return',
            secret: true,
            requirement: 'Complete 5 playthroughs',
            description: 'The same scene, layered five times. Each layer slightly different. All leading to the same truth.',
            scene: 'You keep coming back. That means something.',
            rarity: 'secret',
            unlockMessage: 'Some stories are worth living again.',
            displayText: '"Every cycle reveals something new."'
        },

        // Jin trust maxed
        jinDevoted: {
            id: 'jinDevoted',
            name: 'Completely His',
            secret: true,
            requirement: 'Maximum Jin trust',
            description: 'Two figures intertwined so tightly you cannot tell where one ends and the other begins. The snow falls around them like a blessing.',
            scene: 'He would burn the world for you. You would let him.',
            rarity: 'secret',
            unlockMessage: 'This is what obsessive devotion looks like.',
            displayText: '"Mine. Completely. Forever."'
        },

        // Speed run
        speedrunner: {
            id: 'speedrunner',
            name: 'Lightning Path',
            secret: true,
            requirement: 'Reach any ending in under 5 minutes',
            description: 'A blurred figure races through a frozen world. Everything moves. Nothing stops them.',
            scene: 'You knew exactly what you wanted.',
            rarity: 'secret',
            unlockMessage: 'Decisiveness is its own virtue.',
            displayText: '"No hesitation. No regret."'
        },

        // Read every section
        completionist: {
            id: 'completionist',
            name: 'The Archivist',
            secret: true,
            requirement: 'Visit every section at least once',
            description: 'A library frozen in glass. Every book open. Every story read.',
            scene: 'You wanted to know everything.',
            rarity: 'secret',
            unlockMessage: 'Every path has been walked.',
            displayText: '"Knowledge is survival."'
        },

        // The mongoose itself
        mongoose: {
            id: 'mongoose',
            name: 'Dedicated Mongoose',
            secret: true,
            requirement: 'Unknown',
            description: 'A small mongoose stands alert in the snow. It watches. It waits. It is loyal beyond measure.',
            scene: 'For those who understand the operation.',
            rarity: 'mythic',
            unlockMessage: 'You found the mongoose. The mongoose found you.',
            displayText: '"Dedicated. Relentless. Yours."'
        },

        // For E specifically
        ellie: {
            id: 'ellie',
            name: 'DEAD SEOUL',
            secret: true,
            requirement: 'Be Ellie',
            description: 'Seoul in ruins. The skyline from the K-dramas, but broken. Burning. Beautiful in the way only endings can be. Tiny flakes of ash instead of snow.',
            scene: 'He found it in the rubble. Cleaned the glass with his sleeve. "For your collection," he said. Like the world wasn\'t ending. Like it mattered. Like you mattered.',
            rarity: 'mythic',
            unlockMessage: 'Welcome to Dead Seoul, baby.',
            displayText: '"This is where we begin."'
        }
    },

    // Player's collection
    collection: [],

    // ═══════════════════════════════════════════════════════════════════════
    // COLLECTION MANAGEMENT
    // ═══════════════════════════════════════════════════════════════════════

    init() {
        this.loadCollection();
    },

    // Award a globe
    award(globeId) {
        if (this.collection.includes(globeId)) return false;

        const globe = this.globes[globeId];
        if (!globe) return false;

        this.collection.push(globeId);
        this.saveCollection();

        // Show award notification
        this.showAwardNotification(globe);

        // Track analytics
        if (typeof Analytics !== 'undefined') {
            Analytics.send('globe_collected', {
                globe: globeId,
                name: globe.name,
                total: this.collection.length
            });
        }

        return true;
    },

    // Check if player has a globe
    has(globeId) {
        return this.collection.includes(globeId);
    },

    // Get collection stats
    getStats() {
        const total = Object.keys(this.globes).length;
        const collected = this.collection.length;
        const mainEndings = Object.values(this.globes).filter(g => g.ending && !g.secret).length;
        const mainCollected = this.collection.filter(id => {
            const g = this.globes[id];
            return g && g.ending && !g.secret;
        }).length;
        const secrets = Object.values(this.globes).filter(g => g.secret).length;
        const secretsCollected = this.collection.filter(id => {
            const g = this.globes[id];
            return g && g.secret;
        }).length;

        return {
            total,
            collected,
            percentage: Math.floor((collected / total) * 100),
            mainEndings,
            mainCollected,
            secrets,
            secretsCollected
        };
    },

    // ═══════════════════════════════════════════════════════════════════════
    // UI COMPONENTS
    // ═══════════════════════════════════════════════════════════════════════

    // Show award notification
    showAwardNotification(globe) {
        const notification = document.createElement('div');
        notification.className = 'globe-notification';
        notification.innerHTML = `
            <div class="globe-award-content">
                <div class="globe-icon">${this.getGlobeEmoji(globe.rarity)}</div>
                <div class="globe-info">
                    <div class="globe-new">NEW SNOW GLOBE</div>
                    <div class="globe-name">${globe.name}</div>
                    <div class="globe-rarity ${globe.rarity}">${globe.rarity.toUpperCase()}</div>
                </div>
            </div>
            <div class="globe-description">${globe.description}</div>
            <div class="globe-quote">${globe.displayText}</div>
        `;

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => notification.classList.add('visible'), 100);

        // Remove after display
        setTimeout(() => {
            notification.classList.remove('visible');
            setTimeout(() => notification.remove(), 500);
        }, 6000);
    },

    getGlobeEmoji(rarity) {
        const emojis = {
            common: '🔮',
            rare: '✨',
            epic: '💎',
            legendary: '🌟',
            mythic: '👁️',
            secret: '🔒'
        };
        return emojis[rarity] || '🔮';
    },

    // Render collection display
    renderCollection() {
        const container = document.createElement('div');
        container.className = 'globe-collection';
        container.id = 'globe-collection';

        const stats = this.getStats();

        container.innerHTML = `
            <div class="globe-collection-header">
                <h2>🌐 SNOW GLOBE COLLECTION</h2>
                <div class="globe-stats">
                    ${stats.collected}/${stats.total} Collected (${stats.percentage}%)
                </div>
                <button class="globe-close" onclick="SnowGlobeCollection.hideCollection()">×</button>
            </div>

            <div class="globe-section">
                <h3>ENDING GLOBES (${stats.mainCollected}/${stats.mainEndings})</h3>
                <div class="globe-grid">
                    ${this.renderGlobeGrid(false)}
                </div>
            </div>

            <div class="globe-section">
                <h3>SECRET GLOBES (${stats.secretsCollected}/${stats.secrets})</h3>
                <div class="globe-grid">
                    ${this.renderGlobeGrid(true)}
                </div>
            </div>
        `;

        return container;
    },

    renderGlobeGrid(secretsOnly) {
        return Object.values(this.globes)
            .filter(g => secretsOnly ? g.secret : !g.secret)
            .map(globe => {
                const collected = this.has(globe.id);
                return `
                    <div class="globe-item ${collected ? 'collected' : 'locked'} ${globe.rarity}"
                         onclick="SnowGlobeCollection.showGlobeDetail('${globe.id}')">
                        <div class="globe-visual">
                            ${collected ? this.getGlobeEmoji(globe.rarity) : '❓'}
                        </div>
                        <div class="globe-item-name">
                            ${collected ? globe.name : '???'}
                        </div>
                    </div>
                `;
            }).join('');
    },

    showGlobeDetail(globeId) {
        const globe = this.globes[globeId];
        if (!globe || !this.has(globeId)) return;

        const detail = document.createElement('div');
        detail.className = 'globe-detail-overlay';
        detail.innerHTML = `
            <div class="globe-detail">
                <div class="globe-detail-visual">
                    <div class="globe-sphere ${globe.rarity}">
                        <div class="globe-snow"></div>
                        <div class="globe-scene">${globe.scene}</div>
                    </div>
                </div>
                <div class="globe-detail-info">
                    <div class="globe-detail-rarity ${globe.rarity}">${globe.rarity.toUpperCase()}</div>
                    <h2>${globe.name}</h2>
                    <p class="globe-detail-description">${globe.description}</p>
                    <p class="globe-detail-quote">${globe.displayText}</p>
                    ${globe.ending ? `<div class="globe-ending">Ending #${globe.ending}</div>` : ''}
                </div>
                <button class="globe-detail-close" onclick="this.parentElement.parentElement.remove()">
                    CLOSE
                </button>
            </div>
        `;

        document.body.appendChild(detail);
        setTimeout(() => detail.classList.add('visible'), 10);
    },

    showCollection() {
        const existing = document.getElementById('globe-collection');
        if (existing) existing.remove();

        const container = this.renderCollection();
        document.body.appendChild(container);
        setTimeout(() => container.classList.add('visible'), 10);
    },

    hideCollection() {
        const container = document.getElementById('globe-collection');
        if (container) {
            container.classList.remove('visible');
            setTimeout(() => container.remove(), 300);
        }
    },

    // ═══════════════════════════════════════════════════════════════════════
    // TRIGGERS
    // ═══════════════════════════════════════════════════════════════════════

    // Called when an ending is reached
    onEnding(endingNumber, endingCode) {
        // Find matching globe
        const globe = Object.values(this.globes).find(g =>
            g.ending === endingNumber || g.endingCode === endingCode
        );

        if (globe) {
            this.award(globe.id);
        }

        // Check for secret unlocks
        this.checkSecretUnlocks();
    },

    // Check for secret globe unlocks
    checkSecretUnlocks() {
        // Check loyalty globe
        if (typeof MongooseEngine !== 'undefined') {
            if (MongooseEngine.state.loyalty >= 20) {
                this.award('loyalHeart');
            }
            if (MongooseEngine.state.jinTrust >= 15) {
                this.award('jinDevoted');
            }
            if (MongooseEngine.state.playthrough >= 5) {
                this.award('eternal');
            }
        }
    },

    // ═══════════════════════════════════════════════════════════════════════
    // PERSISTENCE
    // ═══════════════════════════════════════════════════════════════════════

    saveCollection() {
        localStorage.setItem('mongoose_globes', JSON.stringify(this.collection));
    },

    loadCollection() {
        const saved = localStorage.getItem('mongoose_globes');
        if (saved) {
            this.collection = JSON.parse(saved);
        }
    },

    // Export collection as shareable code
    exportCollection() {
        const data = {
            c: this.collection,
            t: Date.now()
        };
        return 'GLOBE-' + btoa(JSON.stringify(data));
    },

    // Import collection from code
    importCollection(code) {
        try {
            if (!code.startsWith('GLOBE-')) return false;
            const data = JSON.parse(atob(code.substring(6)));
            data.c.forEach(id => {
                if (this.globes[id] && !this.collection.includes(id)) {
                    this.collection.push(id);
                }
            });
            this.saveCollection();
            return true;
        } catch (e) {
            return false;
        }
    }
};

// ═══════════════════════════════════════════════════════════════════════════
// STYLES
// ═══════════════════════════════════════════════════════════════════════════

const globeStyles = document.createElement('style');
globeStyles.textContent = `
    /* Award Notification */
    .globe-notification {
        position: fixed;
        top: 20px;
        right: -400px;
        width: 350px;
        background: linear-gradient(135deg, rgba(20, 20, 30, 0.98), rgba(10, 10, 20, 0.98));
        border: 2px solid rgba(100, 150, 255, 0.5);
        border-radius: 12px;
        padding: 20px;
        z-index: 10000;
        transition: right 0.5s ease;
        box-shadow: 0 0 30px rgba(100, 150, 255, 0.3);
        font-family: 'Space Mono', monospace;
    }

    .globe-notification.visible {
        right: 20px;
    }

    .globe-award-content {
        display: flex;
        align-items: center;
        gap: 15px;
        margin-bottom: 15px;
    }

    .globe-icon {
        font-size: 3em;
        animation: globePulse 2s ease infinite;
    }

    @keyframes globePulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
    }

    .globe-new {
        font-size: 0.7em;
        color: #88f;
        letter-spacing: 2px;
    }

    .globe-name {
        font-size: 1.2em;
        color: #fff;
        font-weight: bold;
    }

    .globe-rarity {
        font-size: 0.7em;
        padding: 2px 8px;
        border-radius: 4px;
        display: inline-block;
        margin-top: 5px;
    }

    .globe-rarity.common { background: #666; }
    .globe-rarity.rare { background: #4488ff; }
    .globe-rarity.epic { background: #aa44ff; }
    .globe-rarity.legendary { background: linear-gradient(90deg, #ff8800, #ffcc00); }
    .globe-rarity.mythic { background: linear-gradient(90deg, #ff0066, #ff00ff, #6600ff); }
    .globe-rarity.secret { background: #222; border: 1px solid #888; }

    .globe-description {
        font-size: 0.85em;
        color: #aab;
        line-height: 1.5;
        margin-bottom: 10px;
    }

    .globe-quote {
        font-style: italic;
        color: #88aaff;
        font-size: 0.8em;
    }

    /* Collection Display */
    .globe-collection {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(5, 5, 15, 0.98);
        z-index: 9999;
        overflow-y: auto;
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .globe-collection.visible {
        opacity: 1;
    }

    .globe-collection-header {
        text-align: center;
        padding: 30px;
        border-bottom: 1px solid rgba(100, 150, 255, 0.3);
        position: relative;
    }

    .globe-collection-header h2 {
        font-family: 'Cinzel', serif;
        font-size: 2em;
        color: #fff;
        margin: 0 0 10px 0;
    }

    .globe-stats {
        color: #88f;
        font-family: 'Space Mono', monospace;
    }

    .globe-close {
        position: absolute;
        top: 20px;
        right: 20px;
        background: none;
        border: none;
        color: #fff;
        font-size: 2em;
        cursor: pointer;
    }

    .globe-section {
        padding: 20px 40px;
    }

    .globe-section h3 {
        color: #aab;
        font-family: 'Space Mono', monospace;
        margin-bottom: 20px;
        padding-bottom: 10px;
        border-bottom: 1px solid rgba(255,255,255,0.1);
    }

    .globe-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
        gap: 20px;
    }

    .globe-item {
        text-align: center;
        padding: 15px;
        border-radius: 10px;
        background: rgba(255,255,255,0.05);
        border: 1px solid rgba(255,255,255,0.1);
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .globe-item.collected:hover {
        transform: translateY(-5px);
        border-color: rgba(100, 150, 255, 0.5);
        box-shadow: 0 5px 20px rgba(100, 150, 255, 0.2);
    }

    .globe-item.locked {
        opacity: 0.4;
        cursor: not-allowed;
    }

    .globe-visual {
        font-size: 2.5em;
        margin-bottom: 10px;
    }

    .globe-item-name {
        font-size: 0.75em;
        color: #aab;
    }

    /* Globe Detail */
    .globe-detail-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10001;
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .globe-detail-overlay.visible {
        opacity: 1;
    }

    .globe-detail {
        background: linear-gradient(180deg, rgba(20,20,40,0.95), rgba(10,10,30,0.95));
        border: 2px solid rgba(100, 150, 255, 0.4);
        border-radius: 20px;
        padding: 40px;
        max-width: 500px;
        text-align: center;
    }

    .globe-sphere {
        width: 200px;
        height: 200px;
        margin: 0 auto 30px;
        border-radius: 50%;
        background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.2), transparent 50%),
                    radial-gradient(circle, rgba(100,150,255,0.3), rgba(50,50,100,0.5));
        border: 3px solid rgba(255,255,255,0.3);
        position: relative;
        overflow: hidden;
        box-shadow: 0 0 40px rgba(100, 150, 255, 0.3),
                    inset 0 0 60px rgba(0,0,0,0.5);
    }

    .globe-snow {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image:
            radial-gradient(circle, #fff 1px, transparent 1px),
            radial-gradient(circle, #fff 1px, transparent 1px);
        background-size: 20px 20px, 30px 30px;
        background-position: 0 0, 15px 15px;
        animation: snowFall 3s linear infinite;
        opacity: 0.6;
    }

    @keyframes snowFall {
        0% { transform: translateY(-100%); }
        100% { transform: translateY(100%); }
    }

    .globe-scene {
        position: absolute;
        bottom: 20px;
        left: 10px;
        right: 10px;
        font-size: 0.7em;
        color: rgba(255,255,255,0.7);
    }

    .globe-detail-rarity {
        display: inline-block;
        padding: 5px 15px;
        border-radius: 20px;
        font-size: 0.75em;
        margin-bottom: 15px;
    }

    .globe-detail h2 {
        color: #fff;
        font-family: 'Cinzel', serif;
        margin: 0 0 15px 0;
    }

    .globe-detail-description {
        color: #aab;
        line-height: 1.6;
        margin-bottom: 15px;
    }

    .globe-detail-quote {
        color: #88aaff;
        font-style: italic;
        margin-bottom: 20px;
    }

    .globe-ending {
        color: #666;
        font-size: 0.8em;
    }

    .globe-detail-close {
        background: transparent;
        border: 1px solid rgba(100, 150, 255, 0.5);
        color: #88f;
        padding: 10px 30px;
        font-family: 'Space Mono', monospace;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .globe-detail-close:hover {
        background: rgba(100, 150, 255, 0.2);
    }
`;
document.head.appendChild(globeStyles);

// Initialize
SnowGlobeCollection.init();

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SnowGlobeCollection };
}
