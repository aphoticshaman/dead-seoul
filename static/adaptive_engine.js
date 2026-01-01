// ═══════════════════════════════════════════════════════════════════════════
// ADAPTIVE ENGINE - AGI-Level Choice Architecture
// ═══════════════════════════════════════════════════════════════════════════
// Learns what she responds to. Presents choices that test and reveal.
// Tracks what she ignores vs chooses. Adapts in real-time.
// The mongoose watches. The mongoose learns. The mongoose knows.
// ═══════════════════════════════════════════════════════════════════════════

const AdaptiveEngine = {

    // ═══════════════════════════════════════════════════════════════════════
    // BEHAVIORAL PROFILE - What we've learned about her
    // ═══════════════════════════════════════════════════════════════════════

    profile: {
        // Choice tendencies (0-100)
        tendencies: {
            loyalty: 50,        // Does she stay with people?
            courage: 50,        // Does she take risks?
            compassion: 50,     // Does she help others?
            pragmatism: 50,     // Does she choose survival?
            romance: 50,        // Does she engage romantic content?
            curiosity: 50,      // Does she explore?
            trust: 50,          // Does she trust quickly?
            patience: 50        // Does she read or skip?
        },

        // Tracked behaviors
        readTimes: [],          // How long she spends on sections
        choicePatterns: [],     // Sequence of choice types
        ignoredOptions: [],     // What she consistently avoids
        preferredOptions: [],   // What she gravitates toward
        jinEngagement: [],      // How she responds to Jin content
        emotionalBeats: []      // Which emotional moments she lingers on
    },

    // ═══════════════════════════════════════════════════════════════════════
    // LEARNING SYSTEM - Adjust profile based on behavior
    // ═══════════════════════════════════════════════════════════════════════

    // Called after every choice
    learn(choiceData) {
        const { section, chosenOption, allOptions, timeSpent, scrollDepth } = choiceData;

        // Learn from what she chose
        this.analyzeChoice(chosenOption);

        // Learn from what she ignored
        allOptions.filter(o => o !== chosenOption).forEach(ignored => {
            this.profile.ignoredOptions.push({
                text: ignored.text,
                section,
                timestamp: Date.now()
            });
        });

        // Learn from timing (fast = skipping, slow = engaged)
        this.profile.readTimes.push({
            section,
            time: timeSpent,
            scroll: scrollDepth,
            engaged: timeSpent > 5000  // More than 5 seconds = engaged
        });

        // Update tendencies
        this.updateTendencies(chosenOption, timeSpent);

        this.save();
    },

    // Analyze a choice to extract signals
    analyzeChoice(choice) {
        const text = choice.text.toLowerCase();
        const signals = [];

        // Loyalty signals
        if (text.includes('stay') || text.includes('together') || text.includes('never leave')) {
            signals.push({ trait: 'loyalty', delta: 10 });
        }
        if (text.includes('alone') || text.includes('leave') || text.includes('abandon')) {
            signals.push({ trait: 'loyalty', delta: -10 });
        }

        // Courage signals
        if (text.includes('fight') || text.includes('charge') || text.includes('risk')) {
            signals.push({ trait: 'courage', delta: 10 });
        }
        if (text.includes('hide') || text.includes('wait') || text.includes('careful')) {
            signals.push({ trait: 'courage', delta: -5 });
        }

        // Compassion signals
        if (text.includes('help') || text.includes('save') || text.includes('share')) {
            signals.push({ trait: 'compassion', delta: 10 });
        }
        if (text.includes('ignore') || text.includes('leave them') || text.includes('not my')) {
            signals.push({ trait: 'compassion', delta: -10 });
        }

        // Romance signals
        if (text.includes('kiss') || text.includes('hold') || text.includes('love') || text.includes('jin')) {
            signals.push({ trait: 'romance', delta: 10 });
        }
        if (text.includes('pull away') || text.includes('not now') || text.includes('focus')) {
            signals.push({ trait: 'romance', delta: -5 });
        }

        // Trust signals
        if (text.includes('trust') || text.includes('believe') || text.includes('i trust')) {
            signals.push({ trait: 'trust', delta: 15 });
        }
        if (text.includes('doubt') || text.includes('suspicious') || text.includes('prove')) {
            signals.push({ trait: 'trust', delta: -10 });
        }

        // Apply signals
        signals.forEach(s => {
            this.profile.tendencies[s.trait] = Math.max(0, Math.min(100,
                this.profile.tendencies[s.trait] + s.delta
            ));
        });

        // Track pattern
        this.profile.choicePatterns.push({
            signals,
            timestamp: Date.now()
        });
    },

    updateTendencies(choice, timeSpent) {
        // Patience: slow readers score higher
        if (timeSpent > 10000) {
            this.profile.tendencies.patience = Math.min(100, this.profile.tendencies.patience + 2);
        } else if (timeSpent < 2000) {
            this.profile.tendencies.patience = Math.max(0, this.profile.tendencies.patience - 5);
        }
    },

    // ═══════════════════════════════════════════════════════════════════════
    // CHOICE GENERATION - Present options that test and reveal
    // ═══════════════════════════════════════════════════════════════════════

    // Generate dynamic choices based on what we've learned
    generateAdaptiveChoices(section, baseChoices) {
        const adaptedChoices = [];

        // Pick choices that will TEST her tendencies
        // If she's high loyalty, give her a HARD loyalty test
        // If she's low courage, give her an OPPORTUNITY for courage

        baseChoices.forEach(choice => {
            const category = this.categorizeChoice(choice);
            const relevance = this.calculateRelevance(choice, category);
            adaptedChoices.push({
                ...choice,
                priority: relevance,
                category
            });
        });

        // Sort by priority but add variation
        adaptedChoices.sort((a, b) => {
            // Add randomness weighted by relevance
            const aScore = a.priority + (Math.random() * 20);
            const bScore = b.priority + (Math.random() * 20);
            return bScore - aScore;
        });

        // Inject "test" choices based on profile
        const testChoice = this.generateTestChoice(section);
        if (testChoice) {
            adaptedChoices.push(testChoice);
        }

        // Inject "growth" choices if she's been avoiding something
        const growthChoice = this.generateGrowthChoice(section);
        if (growthChoice) {
            adaptedChoices.push(growthChoice);
        }

        return adaptedChoices;
    },

    categorizeChoice(choice) {
        const text = choice.text.toLowerCase();
        if (text.includes('jin') || text.includes('kiss') || text.includes('love')) return 'romance';
        if (text.includes('help') || text.includes('save')) return 'compassion';
        if (text.includes('fight') || text.includes('charge')) return 'courage';
        if (text.includes('stay') || text.includes('together')) return 'loyalty';
        if (text.includes('alone') || text.includes('survive')) return 'pragmatism';
        return 'neutral';
    },

    calculateRelevance(choice, category) {
        const tendency = this.profile.tendencies[category] || 50;

        // High tendency = show choices that TEST that tendency
        // Low tendency = show choices that OFFER that tendency
        if (tendency > 70) {
            // She's strong here - test her with hard versions
            return 80;
        } else if (tendency < 30) {
            // She's weak here - offer opportunities
            return 60;
        }
        return 50;
    },

    // Generate a choice that specifically tests her strongest tendency
    generateTestChoice(section) {
        // Find her strongest tendency
        const strongest = Object.entries(this.profile.tendencies)
            .sort((a, b) => b[1] - a[1])[0];

        if (strongest[1] < 60) return null; // No strong tendencies yet

        const testChoices = {
            loyalty: {
                text: "Jin needs you to leave. To save yourself. He is asking you to abandon him.",
                target: "ultimate_loyalty_test",
                isTest: true
            },
            courage: {
                text: "The only path is through the horde. No weapons. Just speed.",
                target: "ultimate_courage_test",
                isTest: true
            },
            compassion: {
                text: "Save the stranger or save the supplies. You cannot do both.",
                target: "ultimate_compassion_test",
                isTest: true
            },
            romance: {
                text: "Jin stands before you. 'Tell me the truth. Do you love me?'",
                target: "ultimate_romance_test",
                isTest: true
            },
            trust: {
                text: "He says to jump. You cannot see the bottom. 'Trust me.'",
                target: "ultimate_trust_test",
                isTest: true
            }
        };

        return testChoices[strongest[0]] || null;
    },

    // Generate a choice that offers growth in her weakest area
    generateGrowthChoice(section) {
        // Find her weakest tendency
        const weakest = Object.entries(this.profile.tendencies)
            .sort((a, b) => a[1] - b[1])[0];

        if (weakest[1] > 40) return null; // No weak tendencies

        const growthChoices = {
            loyalty: {
                text: "[Something pulls at you. Stay. Just this once, stay.]",
                target: "loyalty_growth",
                isGrowth: true
            },
            courage: {
                text: "[The fear is there. But so is something else. Face it.]",
                target: "courage_growth",
                isGrowth: true
            },
            compassion: {
                text: "[They are suffering. You could help. You could try.]",
                target: "compassion_growth",
                isGrowth: true
            },
            romance: {
                text: "[He is looking at you. Really looking. Let him.]",
                target: "romance_growth",
                isGrowth: true
            },
            trust: {
                text: "[What if you just... believed? Just once?]",
                target: "trust_growth",
                isGrowth: true
            }
        };

        return growthChoices[weakest[0]] || null;
    },

    // ═══════════════════════════════════════════════════════════════════════
    // JIN CONTENT ADAPTATION - Special tracking for Jin engagement
    // ═══════════════════════════════════════════════════════════════════════

    trackJinMoment(momentData) {
        this.profile.jinEngagement.push({
            scene: momentData.scene,
            timeSpent: momentData.timeSpent,
            choiceMade: momentData.choice,
            scrollDepth: momentData.scrollDepth,
            timestamp: Date.now()
        });

        // Analyze Jin engagement patterns
        this.analyzeJinEngagement();
        this.save();
    },

    analyzeJinEngagement() {
        const recent = this.profile.jinEngagement.slice(-10);
        if (recent.length < 3) return;

        // Average time on Jin content
        const avgTime = recent.reduce((sum, m) => sum + m.timeSpent, 0) / recent.length;

        // Update romance tendency based on Jin engagement
        if (avgTime > 8000) {
            this.profile.tendencies.romance = Math.min(100, this.profile.tendencies.romance + 5);
        }

        // Track which Jin scenes resonate most
        const favorites = recent
            .filter(m => m.timeSpent > 10000)
            .map(m => m.scene);

        if (favorites.length > 0) {
            this.profile.preferredOptions.push({
                type: 'jin_scenes',
                favorites,
                timestamp: Date.now()
            });
        }
    },

    // ═══════════════════════════════════════════════════════════════════════
    // EMOTIONAL PACING - Adapt content density to engagement
    // ═══════════════════════════════════════════════════════════════════════

    shouldShowEmotionalContent() {
        const recentTimes = this.profile.readTimes.slice(-5);
        if (recentTimes.length < 3) return true;

        // If she's skipping, hold back emotional content
        const avgEngagement = recentTimes.filter(t => t.engaged).length / recentTimes.length;
        return avgEngagement > 0.5;
    },

    getContentDensity() {
        // Based on patience tendency
        if (this.profile.tendencies.patience > 70) return 'dense';    // Full content
        if (this.profile.tendencies.patience > 40) return 'medium';   // Normal
        return 'sparse';  // Trimmed, faster pacing
    },

    // ═══════════════════════════════════════════════════════════════════════
    // ORACLE REPORTING - What we've learned (for Ryan)
    // ═══════════════════════════════════════════════════════════════════════

    generateReport() {
        const report = {
            tendencies: this.profile.tendencies,
            strongestTrait: this.getStrongestTrait(),
            weakestTrait: this.getWeakestTrait(),
            jinEngagementScore: this.calculateJinScore(),
            preferredContentTypes: this.getPreferredContentTypes(),
            avoidedContentTypes: this.getAvoidedContentTypes(),
            predictedEnding: this.predictEnding(),
            readingStyle: this.getReadingStyle(),
            emotionalResonance: this.getEmotionalResonance(),
            recommendations: this.generateRecommendations()
        };

        return report;
    },

    getStrongestTrait() {
        return Object.entries(this.profile.tendencies)
            .sort((a, b) => b[1] - a[1])[0];
    },

    getWeakestTrait() {
        return Object.entries(this.profile.tendencies)
            .sort((a, b) => a[1] - b[1])[0];
    },

    calculateJinScore() {
        const engagements = this.profile.jinEngagement;
        if (engagements.length === 0) return 0;

        const avgTime = engagements.reduce((sum, e) => sum + e.timeSpent, 0) / engagements.length;
        const positiveChoices = engagements.filter(e =>
            e.choiceMade && e.choiceMade.toLowerCase().includes('jin')
        ).length;

        return Math.round((avgTime / 1000) + (positiveChoices * 10));
    },

    predictEnding() {
        const t = this.profile.tendencies;
        if (t.loyalty > 80 && t.romance > 70) return 'Eden Reborn';
        if (t.courage > 80 && t.compassion > 60) return 'The Radiant Victory';
        if (t.pragmatism > 70 && t.loyalty < 40) return 'The Survivor (solo)';
        if (t.romance > 80) return 'Jin Ending';
        if (t.compassion > 80) return 'The Dispatcher';
        return 'Variable - still learning';
    },

    getReadingStyle() {
        const patience = this.profile.tendencies.patience;
        if (patience > 70) return 'Immersive - savors every word';
        if (patience > 40) return 'Balanced - reads but moves';
        return 'Fast - action-focused';
    },

    getEmotionalResonance() {
        // What emotional beats made her linger?
        const lingered = this.profile.readTimes
            .filter(t => t.time > 15000)
            .map(t => t.section);

        return {
            sections: lingered,
            count: lingered.length,
            average: this.profile.readTimes.length > 0
                ? this.profile.readTimes.reduce((s, t) => s + t.time, 0) / this.profile.readTimes.length
                : 0
        };
    },

    getPreferredContentTypes() {
        // Analyze what she gravitates toward
        const choices = this.profile.choicePatterns;
        const counts = {};
        choices.forEach(c => {
            c.signals.forEach(s => {
                if (s.delta > 0) {
                    counts[s.trait] = (counts[s.trait] || 0) + 1;
                }
            });
        });
        return Object.entries(counts).sort((a, b) => b[1] - a[1]);
    },

    getAvoidedContentTypes() {
        // Analyze what she avoids
        const ignored = this.profile.ignoredOptions;
        const themes = {};
        ignored.forEach(i => {
            const category = this.categorizeChoice(i);
            themes[category] = (themes[category] || 0) + 1;
        });
        return Object.entries(themes).sort((a, b) => b[1] - a[1]);
    },

    generateRecommendations() {
        const recs = [];
        const t = this.profile.tendencies;

        if (t.loyalty < 40) {
            recs.push('Show more consequences of abandonment');
        }
        if (t.romance > 70 && this.calculateJinScore() > 50) {
            recs.push('She responds to Jin. Increase intimate content.');
        }
        if (t.courage < 40) {
            recs.push('Give her achievable courage moments to build confidence');
        }
        if (t.patience < 30) {
            recs.push('Consider shorter sections or more action beats');
        }

        return recs;
    },

    // ═══════════════════════════════════════════════════════════════════════
    // PERSISTENCE
    // ═══════════════════════════════════════════════════════════════════════

    save() {
        localStorage.setItem('mongoose_profile', JSON.stringify(this.profile));
    },

    load() {
        const saved = localStorage.getItem('mongoose_profile');
        if (saved) {
            this.profile = { ...this.profile, ...JSON.parse(saved) };
        }
    },

    reset() {
        this.profile = {
            tendencies: {
                loyalty: 50, courage: 50, compassion: 50, pragmatism: 50,
                romance: 50, curiosity: 50, trust: 50, patience: 50
            },
            readTimes: [],
            choicePatterns: [],
            ignoredOptions: [],
            preferredOptions: [],
            jinEngagement: [],
            emotionalBeats: []
        };
        this.save();
    }
};

// Initialize
AdaptiveEngine.load();

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { AdaptiveEngine };
}
