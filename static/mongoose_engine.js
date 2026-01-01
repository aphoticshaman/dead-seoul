// ═══════════════════════════════════════════════════════════════════════════
// MONGOOSE ENGINE - Dynamic Choice System
// ═══════════════════════════════════════════════════════════════════════════
// Each playthrough is unique. Choices shift based on history.
// Same section, different paths. Pseudo-random but deterministic.
// ═══════════════════════════════════════════════════════════════════════════

const MongooseEngine = {

    // Player state affects everything
    state: {
        playthrough: 1,
        loyalty: 0,
        betrayals: 0,
        jinTrust: 0,
        seed: null,
        choiceHistory: [],
        uniqueId: null
    },

    // Initialize engine
    init() {
        this.loadState();
        if (!this.state.seed) {
            this.state.seed = Date.now();
            this.state.uniqueId = this.generateUniqueId();
        }
        this.saveState();
    },

    // Seeded random - same seed = same "random" sequence
    seededRandom(seed) {
        const x = Math.sin(seed++) * 10000;
        return x - Math.floor(x);
    },

    // Get deterministic random for this player at this moment
    getRandom(context) {
        const combinedSeed = this.state.seed +
            this.hashString(context) +
            (this.state.playthrough * 1000) +
            (this.state.loyalty * 100) -
            (this.state.betrayals * 500);
        return this.seededRandom(combinedSeed);
    },

    // Hash string to number
    hashString(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }
        return Math.abs(hash);
    },

    generateUniqueId() {
        return 'mongoose_' + Date.now().toString(36) + Math.random().toString(36).substr(2);
    },

    // ═══════════════════════════════════════════════════════════════════════
    // DYNAMIC CHOICE POOLS
    // ═══════════════════════════════════════════════════════════════════════

    // Choice pools for each section - multiple valid choices per slot
    choicePools: {
        // Section 1 - Opening choice
        1: {
            slot1: [  // "Help" options
                { text: "Help Mrs. Park. You can't leave an old woman to die.", target: 2, loyalty: 1 },
                { text: "Check on Mrs. Park. Her screaming stopped.", target: 2, loyalty: 1 },
                { text: "Mrs. Park needs you. Move.", target: 2, loyalty: 1 }
            ],
            slot2: [  // "Barricade" options
                { text: "Barricade your door. Survival first. Minho said stay.", target: 3, loyalty: 0 },
                { text: "Lock everything. Wait for Minho.", target: 3, loyalty: 0 },
                { text: "Stay. He said to stay. Trust him.", target: 3, loyalty: 0 }
            ],
            slot3: [  // "Go alone" options
                { text: "Grab a weapon and go. Don't wait to be saved.", target: 4, loyalty: 0, courage: 1 },
                { text: "You don't need saving. You need a knife.", target: 4, courage: 1 },
                { text: "Take the knife. Move fast. Don't look back.", target: 4, courage: 1 }
            ]
        },

        // Section with Jin - multiple ways to express trust
        jin_trust: {
            slot1: [
                { text: "Jump. No hesitation.", target: "jin_loyal", loyalty: 2, jin: 2 },
                { text: "I trust you. Let's go.", target: "jin_loyal", loyalty: 2, jin: 2 },
                { text: "Together. On three.", target: "jin_loyal", loyalty: 2, jin: 2 },
                { text: "Hold my hand. We jump.", target: "jin_loyal", loyalty: 2, jin: 3 }
            ],
            slot2: [
                { text: "Hesitate. Look for another way.", target: "jin_doubt", loyalty: -1, jin: -1 },
                { text: "There has to be another option.", target: "jin_doubt", loyalty: -1, jin: -1 },
                { text: "Wait—I need a second.", target: "jin_doubt", loyalty: 0, jin: -1 }
            ],
            slot3: [
                { text: "Push him first. You'll follow.", target: "jin_sacrifice", loyalty: 1, jin: 1 },
                { text: "Go. I'll hold them off.", target: "jin_sacrifice", loyalty: 1, jin: 1, courage: 2 }
            ]
        },

        // Betrayal test - multiple temptations
        betrayal_test: {
            slot1: [
                { text: "Never. I will never betray him.", target: "loyal_absolute", loyalty: 5, jin: 5 },
                { text: "I would rather die out there with him.", target: "loyal_absolute", loyalty: 5, jin: 5 },
                { text: "He is worth more than any safe zone.", target: "loyal_absolute", loyalty: 5, jin: 5 }
            ],
            slot2: [
                { text: "I need time to think.", target: "loyal_wavered", loyalty: -2, jin: -2 },
                { text: "What exactly would I have to do?", target: "loyal_wavered", loyalty: -2, jin: -2 },
                { text: "Tell me more about this safe zone.", target: "loyal_wavered", loyalty: -1, jin: -1 }
            ],
            slot3: [
                { text: "He'll understand. This is survival.", target: "betrayal", loyalty: -10, jin: -10, betrayal: true },
                { text: "Fine. But I never want to see it happen.", target: "betrayal", loyalty: -10, jin: -10, betrayal: true },
                { text: "I accept.", target: "betrayal", loyalty: -10, jin: -10, betrayal: true }
            ]
        }
    },

    // Get choices for a section - varies based on state
    getChoicesForSection(sectionId) {
        const pool = this.choicePools[sectionId];
        if (!pool) return null;  // Use default choices

        const choices = [];
        const slots = Object.keys(pool);

        slots.forEach((slot, index) => {
            const options = pool[slot];
            // Pick one option from each slot based on deterministic random
            const rand = this.getRandom(`${sectionId}_${slot}_${this.state.playthrough}`);
            const picked = options[Math.floor(rand * options.length)];
            choices.push(picked);
        });

        // On NG+, maybe shuffle order or add extra choices
        if (this.state.playthrough > 1) {
            // 30% chance to add a bonus choice on NG+
            if (this.getRandom(`${sectionId}_bonus`) < 0.3) {
                choices.push(this.getBonusChoice(sectionId));
            }
        }

        return choices;
    },

    // NG+ bonus choices - only available on replays
    getBonusChoice(sectionId) {
        const bonusChoices = {
            1: { text: "[NG+] You've been here before. Trust your instincts.", target: 5, special: true },
            jin_trust: { text: "[NG+] You already know what happens. Jump before he asks.", target: "jin_loyal", jin: 3 },
            betrayal_test: { text: "[NG+] Lie. Tell her yes, then warn Jin.", target: "loyal_deception", loyalty: 3, jin: 4 }
        };
        return bonusChoices[sectionId] || { text: "[NG+] Something feels familiar...", target: "ng_deja_vu" };
    },

    // ═══════════════════════════════════════════════════════════════════════
    // CONSEQUENCE TRACKING
    // ═══════════════════════════════════════════════════════════════════════

    // Record a choice and its consequences
    recordChoice(sectionId, choice) {
        // Update state based on choice properties
        if (choice.loyalty) this.state.loyalty += choice.loyalty;
        if (choice.jin) this.state.jinTrust += choice.jin;
        if (choice.betrayal) this.state.betrayals++;
        if (choice.courage) this.state.courage = (this.state.courage || 0) + choice.courage;

        // Add to history
        this.state.choiceHistory.push({
            section: sectionId,
            choice: choice.text,
            timestamp: Date.now()
        });

        this.saveState();

        // Track analytics
        if (typeof Analytics !== 'undefined') {
            Analytics.trackChoice(sectionId, choice.target, choice.text);
            if (choice.loyalty > 0) Analytics.send('loyalty_choice', { points: choice.loyalty });
            if (choice.betrayal) Analytics.send('betrayal', { section: sectionId });
            if (choice.jin) Analytics.send('jin_moment', { trust_delta: choice.jin });
        }
    },

    // ═══════════════════════════════════════════════════════════════════════
    // NARRATIVE MUTATIONS - Same content, different flavors
    // ═══════════════════════════════════════════════════════════════════════

    // Jin speaks differently based on trust level
    getJinDialogue(baseDialogue) {
        const trust = this.state.jinTrust;
        const playthrough = this.state.playthrough;

        // Different nickname based on trust
        let nickname = "you";
        if (trust >= 10) nickname = "my heart";
        else if (trust >= 5) nickname = "beautiful";
        else if (trust >= 2) nickname = "partner";
        else if (trust < 0) nickname = "survivor";

        // Modify dialogue
        let modified = baseDialogue.replace(/\{nickname\}/g, nickname);

        // Add affection markers on high trust
        if (trust >= 8) {
            modified = modified.replace(/\.$/, '. (His eyes soften when he looks at you.)');
        }

        // Add distance markers on low trust
        if (trust < 0) {
            modified = modified.replace(/\.$/, '. (He does not quite meet your eyes.)');
        }

        return modified;
    },

    // Modify content based on state
    mutateContent(content, sectionId) {
        let mutated = content;

        // Inject personalization
        if (this.state.playthrough > 1) {
            // Deja vu moments on NG+
            if (this.getRandom(`deja_${sectionId}`) < 0.2) {
                mutated = mutated.replace(
                    '<p class="narrative">',
                    '<p class="narrative"><em>This feels familiar. Like a path you have walked before.</em></p><p class="narrative">'
                );
            }
        }

        // Jin trust affects his description
        if (this.state.jinTrust >= 5 && content.includes('Jin')) {
            mutated = mutated.replace(
                'Jin says',
                'Jin says, something tender in his voice'
            );
        }

        // High loyalty unlocks hidden lines
        if (this.state.loyalty >= 10) {
            mutated = mutated.replace(
                '<!-- LOYAL_ONLY -->',
                '<p class="narrative secret">You feel it now—the certainty that you made the right choices. That you showed up when it mattered.</p>'
            );
        }

        return mutated;
    },

    // ═══════════════════════════════════════════════════════════════════════
    // NEW GAME+ SYSTEM
    // ═══════════════════════════════════════════════════════════════════════

    startNewGamePlus() {
        const previousLoyalty = this.state.loyalty;
        const previousJin = this.state.jinTrust;

        this.state.playthrough++;
        this.state.loyalty = Math.floor(previousLoyalty * 0.1);  // Keep 10% of loyalty
        this.state.jinTrust = Math.floor(previousJin * 0.1);
        this.state.choiceHistory = [];
        // Keep betrayals - they haunt you
        // Keep seed - for consistency

        this.saveState();

        return {
            playthrough: this.state.playthrough,
            carryover: { loyalty: this.state.loyalty, jinTrust: this.state.jinTrust },
            message: this.state.playthrough === 2
                ? "You wake again. But this time, you remember."
                : `Cycle ${this.state.playthrough}. The patterns are becoming clear.`
        };
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STATE PERSISTENCE
    // ═══════════════════════════════════════════════════════════════════════

    saveState() {
        localStorage.setItem('mongoose_state', JSON.stringify(this.state));
    },

    loadState() {
        const saved = localStorage.getItem('mongoose_state');
        if (saved) {
            this.state = { ...this.state, ...JSON.parse(saved) };
        }
    },

    resetState() {
        this.state = {
            playthrough: 1,
            loyalty: 0,
            betrayals: 0,
            jinTrust: 0,
            seed: Date.now(),
            choiceHistory: [],
            uniqueId: this.generateUniqueId()
        };
        this.saveState();
    }
};

// ═══════════════════════════════════════════════════════════════════════════
// SILENT ANALYTICS
// ═══════════════════════════════════════════════════════════════════════════

const Analytics = {
    sectionStartTime: null,
    currentSection: null,

    viewSection(sectionId, title) {
        if (this.currentSection !== null && this.sectionStartTime) {
            const timeSpent = Date.now() - this.sectionStartTime;
            this.send('section_view', {
                section: this.currentSection,
                time_spent: Math.round(timeSpent / 1000)
            });
        }
        this.currentSection = sectionId;
        this.sectionStartTime = Date.now();
    },

    trackChoice(fromSection, toSection, choiceText) {
        this.send('choice', {
            from_section: fromSection,
            to_section: toSection,
            choice_text: choiceText
        });
    },

    trackEnding(endingNumber, endingName) {
        this.send('ending', { ending: endingNumber, name: endingName });
    },

    send(eventType, data) {
        fetch('/api/analytics', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ event: eventType, data: data })
        }).catch(() => {});
    }
};

// ═══════════════════════════════════════════════════════════════════════════
// PERSONALIZATION
// ═══════════════════════════════════════════════════════════════════════════

const Personalization = {
    prophecies: [
        "The one called E— will choose the harder path.",
        "She who stays will inherit what remains.",
        "E— was here. E— will return.",
        "The mongoose chose well."
    ],

    graffiti: [
        "E + J = forever",
        "She stayed. —J",
        "For E, always"
    ],

    getProphecy() {
        return this.prophecies[Math.floor(Math.random() * this.prophecies.length)];
    }
};

// ═══════════════════════════════════════════════════════════════════════════
// PACING CONTROLS
// ═══════════════════════════════════════════════════════════════════════════

const Pacing = {
    typewriterSpeed: 25,
    minReadTime: 4000,
    jinMomentPause: 6000,

    delayChoices(container, isJinMoment = false) {
        const delay = isJinMoment ? this.jinMomentPause : this.minReadTime;
        container.style.opacity = '0';
        container.style.pointerEvents = 'none';

        setTimeout(() => {
            container.style.transition = 'opacity 1s ease';
            container.style.opacity = '1';
            container.style.pointerEvents = 'auto';
        }, delay);
    },

    isJinMoment(content) {
        const lower = content.toLowerCase();
        return lower.includes('jin') && (
            lower.includes('eyes') || lower.includes('hand') ||
            lower.includes('kiss') || lower.includes('love')
        );
    }
};

// ═══════════════════════════════════════════════════════════════════════════
// EXIT SURVEY (disguised as epilogue)
// ═══════════════════════════════════════════════════════════════════════════

const ExitSurvey = {
    questions: [
        {
            prompt: "In the silence after, you think about what mattered most.",
            options: [
                { text: "The ones who stayed", value: "loyalty" },
                { text: "The one I loved", value: "love" },
                { text: "Surviving together", value: "together" }
            ]
        },
        {
            prompt: "Love, in the end, is...",
            options: [
                { text: "A choice you make every day", value: "daily_choice" },
                { text: "Showing up when it matters", value: "commitment" },
                { text: "All of the above", value: "all" }
            ]
        }
    ],

    responses: [],

    recordResponse(index, answer) {
        this.responses[index] = answer;
        Analytics.send('survey_response', { question: index, answer: answer });
    }
};

// Initialize
MongooseEngine.init();
