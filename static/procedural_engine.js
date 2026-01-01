// ═══════════════════════════════════════════════════════════════════════════
// PROCEDURAL ENGINE - Seed System
// ═══════════════════════════════════════════════════════════════════════════
// Seeds encode history. Runs are unique. Death has meaning.
// ═══════════════════════════════════════════════════════════════════════════

const ProceduralEngine = {

    // ═══════════════════════════════════════════════════════════════════════
    // SEED ENCODING/DECODING - The DNA of a playthrough
    // ═══════════════════════════════════════════════════════════════════════

    // Encode player state into a seed
    encodeSeed(state) {
        const data = {
            e: state.endingCode || 'NONE',           // Ending reached
            l: Math.min(99, Math.max(0, state.loyalty || 0)),  // Loyalty (0-99)
            j: Math.min(99, Math.max(0, state.jinTrust || 0)), // Jin trust (0-99)
            b: Math.min(9, state.betrayals || 0),    // Betrayals (0-9)
            p: Math.min(99, state.playthrough || 1), // Playthrough #
            t: Math.floor((state.timeSpent || 0) / 60), // Minutes played
            k: this.encodeKeyChoices(state.keyChoices || []), // Key decisions
            c: state.companions || 'MSJY',           // Companions alive (Minho, Soojin, Jin, Yoo)
            r: Date.now() % 100000                   // Random seed component
        };

        // Create the seed string: DS-[ENDING]-[ENCODED_DATA]-[CHECKSUM]
        const encoded = btoa(JSON.stringify(data)).replace(/=/g, '').substring(0, 10);
        const checksum = this.calculateChecksum(data);

        return `DS-${data.e}-${encoded}-${checksum}`;
    },

    // Decode a seed back into state
    decodeSeed(seedString) {
        try {
            const parts = seedString.split('-');
            if (parts.length !== 4 || parts[0] !== 'DS') return null;

            const endingCode = parts[1];
            const encoded = parts[2];
            const checksum = parts[3];

            // Pad for base64
            let padded = encoded;
            while (padded.length % 4 !== 0) padded += '=';

            const data = JSON.parse(atob(padded));

            // Verify checksum
            if (this.calculateChecksum(data) !== checksum) {
                console.warn('Seed checksum mismatch - may be modified');
            }

            return {
                endingCode: data.e,
                loyalty: data.l,
                jinTrust: data.j,
                betrayals: data.b,
                playthrough: data.p,
                timeSpent: data.t * 60,
                keyChoices: this.decodeKeyChoices(data.k),
                companions: data.c,
                randomSeed: data.r,
                isValid: true
            };
        } catch (e) {
            console.error('Seed decode failed:', e);
            return null;
        }
    },

    // Encode key choices as compact string
    encodeKeyChoices(choices) {
        // Each key choice is encoded as a character
        const map = {
            'helped_mrs_park': 'H',
            'barricaded': 'B',
            'went_alone': 'A',
            'trusted_jin': 'T',
            'hesitated': 'E',
            'sacrificed': 'S',
            'betrayed_jin': 'X',
            'chose_minho': 'M',
            'chose_soojin': 'O',
            'chose_yoo': 'Y',
            'found_cure': 'C',
            'built_settlement': 'L',
            'reached_eden': 'D'
        };
        return choices.map(c => map[c] || '?').join('');
    },

    decodeKeyChoices(encoded) {
        const reverseMap = {
            'H': 'helped_mrs_park',
            'B': 'barricaded',
            'A': 'went_alone',
            'T': 'trusted_jin',
            'E': 'hesitated',
            'S': 'sacrificed',
            'X': 'betrayed_jin',
            'M': 'chose_minho',
            'O': 'chose_soojin',
            'Y': 'chose_yoo',
            'C': 'found_cure',
            'L': 'built_settlement',
            'D': 'reached_eden'
        };
        return encoded.split('').map(c => reverseMap[c] || 'unknown');
    },

    calculateChecksum(data) {
        const str = JSON.stringify(data);
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = ((hash << 5) - hash) + str.charCodeAt(i);
            hash = hash & hash;
        }
        return Math.abs(hash % 100).toString().padStart(2, '0');
    },

    // ═══════════════════════════════════════════════════════════════════════
    // WORLD GENERATION - Seeded procedural content
    // ═══════════════════════════════════════════════════════════════════════

    // Generate world state from imported seeds
    generateWorld(importedSeeds = []) {
        const worldState = {
            difficulty: 1,
            unlockedPaths: [],
            jinState: 'neutral',
            playthrough: 1
        };

        // Each imported seed modifies the world
        importedSeeds.forEach(seed => {
            const decoded = this.decodeSeed(seed);
            if (!decoded) return;

            // Endings unlock new paths
            if (decoded.endingCode === 'EDENN') {
                worldState.unlockedPaths.push('eden_shortcut', 'jin_true_ending');
            }
            if (decoded.endingCode === 'CURED') {
                worldState.unlockedPaths.push('cure_knowledge');
            }

            // High loyalty runs make Jin warmer
            if (decoded.loyalty >= 15) {
                worldState.jinState = 'devoted';
            }

            // Track playthrough count
            worldState.playthrough = Math.max(worldState.playthrough, decoded.playthrough || 1);
        });

        return worldState;
    },

    // ═══════════════════════════════════════════════════════════════════════
    // PROCEDURAL ENCOUNTERS - Random events based on state
    // ═══════════════════════════════════════════════════════════════════════

    encounterPool: {
        // Random survivor encounters
        survivors: [
            {
                id: 'desperate_family',
                content: `<p class="narrative">A family huddles in a doorway. The father holds a pipe. The mother holds a baby. They are deciding whether you are threat or salvation.</p>`,
                choices: [
                    { text: "Share your food.", loyalty: 2, outcome: "They join your network. One more safe house." },
                    { text: "Keep walking.", loyalty: -1, outcome: "You hear the baby cry for hours in your dreams." },
                    { text: "Ask Jin what to do.", jin: 1, outcome: "He shares his rations. 'Some things matter more than survival.'" }
                ]
            },
            {
                id: 'injured_soldier',
                content: `<p class="narrative">A soldier from the fallen safe zone. He knows things. But he is dying.</p>`,
                choices: [
                    { text: "Stay with him until the end.", loyalty: 2, outcome: "He tells you about Kori. About the cure. About the Orca Rider." },
                    { text: "Take his supplies and go.", loyalty: -2, outcome: "His eyes follow you. Judging. Forever." },
                    { text: "Mercy kill.", courage: 1, outcome: "'Thank you,' he whispers. Then silence." }
                ]
            }
        ],

        // Jin-specific encounters (unlock with trust)
        jin: [
            {
                id: 'jin_nightmare',
                requiresJinTrust: 5,
                content: `<p class="narrative">You wake to Jin shaking in his sleep. Whimpering. Whatever he is dreaming, it is worse than reality.</p>`,
                choices: [
                    { text: "Wake him gently.", jin: 2, outcome: "He grabs your hand. Holds on. 'Stay. Please just stay.'" },
                    { text: "Let him sleep through it.", jin: -1, outcome: "Morning comes. He does not mention it. A wall between you." },
                    { text: "Hold him without waking.", jin: 3, outcome: "He calms. In the morning, he looks at you differently. Softer." }
                ]
            },
            {
                id: 'jin_confession',
                requiresJinTrust: 8,
                content: `<p class="narrative">"I killed them," Jin says, staring at the fire. "My squad. I had to. They were turning." His voice cracks. "I had to."</p>`,
                choices: [
                    { text: "You did what you had to.", jin: 2, outcome: "'Maybe. But I see their faces.' He leans into you. 'You are the only face that helps.'" },
                    { text: "Tell me their names.", jin: 3, outcome: "He does. All of them. And for the first time since you met him, he cries." },
                    { text: "Stay silent. Just be present.", jin: 2, outcome: "Sometimes words are not what is needed. You understand that now." }
                ]
            }
        ],

        // Betrayal consequences (appear if you betrayed)
        haunting: [
            {
                id: 'jin_ghost',
                requiresBetrayal: true,
                content: `<p class="narrative">You see him. Across the street. For a moment you think—but no. It is just a man with his build. His walk. His...</p><p class="narrative">He turns. Looks at you. It IS him.</p><p class="narrative">Then he is gone. A trick of the light. A ghost of what you threw away.</p>`,
                choices: [
                    { text: "Call out.", outcome: "No answer. Just wind." },
                    { text: "Follow.", outcome: "Empty streets. He was never there. Or he was, and he chose to vanish." }
                ]
            }
        ]
    },

    // Get random encounter based on state
    getRandomEncounter(playerState, worldState) {
        const candidates = [];

        // Add basic survivors
        this.encounterPool.survivors.forEach(e => candidates.push(e));

        // Add Jin encounters if trust is high enough
        this.encounterPool.jin.forEach(e => {
            if (playerState.jinTrust >= (e.requiresJinTrust || 0)) {
                candidates.push(e);
            }
        });

        // Add haunting encounters if betrayed
        if (playerState.betrayals > 0) {
            this.encounterPool.haunting.forEach(e => candidates.push(e));
        }

        // Pick one randomly
        const rng = this.seededRandom(playerState.seed + Date.now());
        return candidates[Math.floor(rng * candidates.length)];
    },

    // ═══════════════════════════════════════════════════════════════════════
    // UTILITY
    // ═══════════════════════════════════════════════════════════════════════

    seededRandom(seed) {
        const x = Math.sin(seed) * 10000;
        return x - Math.floor(x);
    }
};

// ═══════════════════════════════════════════════════════════════════════════
// SEED MANAGER - Import/Export/Validate
// ═══════════════════════════════════════════════════════════════════════════

const SeedManager = {
    // All imported seeds
    seeds: [],

    // Import a seed
    import(seedString) {
        const decoded = ProceduralEngine.decodeSeed(seedString);
        if (!decoded) {
            return { success: false, error: 'Invalid seed format' };
        }

        // Check for duplicates
        if (this.seeds.includes(seedString)) {
            return { success: false, error: 'Seed already imported' };
        }

        this.seeds.push(seedString);
        this.save();

        return {
            success: true,
            data: decoded,
            message: this.getImportMessage(decoded)
        };
    },

    // Generate message based on what the seed unlocks
    getImportMessage(decoded) {
        const messages = [];

        if (decoded.endingCode === 'EDENN') {
            messages.push('Eden path recognized. New routes available.');
        }
        if (decoded.loyalty >= 15) {
            messages.push('High loyalty detected. Jin remembers...');
        }
        if (decoded.betrayals > 0) {
            messages.push('Betrayal detected. The world knows what you did.');
        }
        if (decoded.playthrough > 3) {
            messages.push('Veteran traveler. The cycles reveal themselves.');
        }

        return messages.join(' ') || 'Seed imported successfully.';
    },

    // Get all imported seeds
    getAll() {
        return this.seeds;
    },

    // Save to localStorage
    save() {
        localStorage.setItem('mongoose_seeds', JSON.stringify(this.seeds));
    },

    // Load from localStorage
    load() {
        const saved = localStorage.getItem('mongoose_seeds');
        if (saved) {
            this.seeds = JSON.parse(saved);
        }
    },

    // Generate current playthrough's seed
    generateCurrent(gameState) {
        return ProceduralEngine.encodeSeed(gameState);
    }
};

// Initialize
SeedManager.load();

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ProceduralEngine, SeedManager };
}
