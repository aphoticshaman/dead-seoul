// ═══════════════════════════════════════════════════════════════════════════
// ADAPTIVE ENGINE - Positive Reinforcement System
// ═══════════════════════════════════════════════════════════════════════════
// Encourages loyalty. Rewards romance. Celebrates courage.
// Not watching - teaching. Not profiling - guiding.
// ═══════════════════════════════════════════════════════════════════════════

const AdaptiveEngine = {

    // ═══════════════════════════════════════════════════════════════════════
    // GROWTH TRACKER - Celebrating progress, not judging
    // ═══════════════════════════════════════════════════════════════════════

    profile: {
        // Growth scores (0-100) - how much she's embraced these values
        growth: {
            loyalty: 50,        // Staying with Jin, keeping promises
            romance: 50,        // Opening up to love and connection
            courage: 50         // Facing fears together
        },

        // Positive moments collected
        jinMoments: [],         // Beautiful moments with Jin
        achievements: []        // Milestones reached
    },

    // ═══════════════════════════════════════════════════════════════════════
    // REWARD SYSTEM - Celebrate good choices
    // ═══════════════════════════════════════════════════════════════════════

    // Called after every choice
    reward(choiceData) {
        const { chosenOption } = choiceData;
        this.celebrateChoice(chosenOption);
        this.save();
    },

    // Celebrate a choice - positive reinforcement only
    celebrateChoice(choice) {
        const text = choice.text.toLowerCase();
        const g = this.profile.growth;

        // LOYALTY: Staying with Jin, keeping promises
        if (text.includes('stay') || text.includes('together') || text.includes('never leave') || text.includes('with jin')) {
            g.loyalty = Math.min(100, g.loyalty + 10);
            this.triggerReward('loyalty', 'You stayed. That matters.');
        }

        // ROMANCE: Opening up to love
        if (text.includes('kiss') || text.includes('hold') || text.includes('love') || text.includes('jin')) {
            g.romance = Math.min(100, g.romance + 10);
            this.triggerReward('romance', 'Connection grows stronger.');
        }

        // COURAGE: Facing fears together
        if (text.includes('fight') || text.includes('charge') || text.includes('risk') || text.includes('face')) {
            g.courage = Math.min(100, g.courage + 10);
            this.triggerReward('courage', 'Brave choice.');
        }

        // Check for achievements
        this.checkAchievements();
    },

    // Visual/audio reward for positive choices
    triggerReward(type, message) {
        // Subtle positive feedback (toast, glow, etc.)
        if (typeof showToast === 'function') {
            showToast(message, type);
        }
    },

    // Unlock achievements for milestones
    checkAchievements() {
        const g = this.profile.growth;
        const a = this.profile.achievements;

        if (g.loyalty >= 80 && !a.includes('devoted')) {
            a.push('devoted');
            this.triggerAchievement('DEVOTED', 'Loyalty above all else');
        }
        if (g.romance >= 80 && !a.includes('soulmate')) {
            a.push('soulmate');
            this.triggerAchievement('SOULMATE', 'Love found in the ruins');
        }
        if (g.courage >= 80 && !a.includes('warrior')) {
            a.push('warrior');
            this.triggerAchievement('WARRIOR', 'Fear is a choice');
        }
    },

    triggerAchievement(title, desc) {
        if (typeof showAchievement === 'function') {
            showAchievement(title, desc);
        }
    },

    // ═══════════════════════════════════════════════════════════════════════
    // JIN MOMENTS - Celebrate connection
    // ═══════════════════════════════════════════════════════════════════════

    collectJinMoment(scene) {
        this.profile.jinMoments.push({ scene, timestamp: Date.now() });
        this.profile.growth.romance = Math.min(100, this.profile.growth.romance + 5);
        this.triggerReward('romance', 'A moment to remember.');
        this.save();
    },

    // ═══════════════════════════════════════════════════════════════════════
    // PROGRESS SUMMARY - For dashboard (not surveillance)
    // ═══════════════════════════════════════════════════════════════════════

    getProgress() {
        const g = this.profile.growth;
        return {
            growth: g,
            jinMoments: this.profile.jinMoments.length,
            achievements: this.profile.achievements,
            likelyEnding: this.suggestEnding()
        };
    },

    suggestEnding() {
        const g = this.profile.growth;
        if (g.loyalty >= 80 && g.romance >= 70) return 'Eden Reborn';
        if (g.romance >= 80) return 'Jin Forever';
        if (g.courage >= 80) return 'The Radiant Victory';
        return 'Your story is still being written...';
    },

    // ═══════════════════════════════════════════════════════════════════════
    // PERSISTENCE
    // ═══════════════════════════════════════════════════════════════════════

    save() {
        localStorage.setItem('mongoose_growth', JSON.stringify(this.profile));
    },

    load() {
        const saved = localStorage.getItem('mongoose_growth');
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                // Migrate from old structure if needed
                if (parsed.growth) {
                    this.profile.growth = parsed.growth;
                } else if (parsed.tendencies) {
                    // Old structure - migrate
                    this.profile.growth = {
                        loyalty: parsed.tendencies.loyalty || 50,
                        romance: parsed.tendencies.romance || 50,
                        courage: parsed.tendencies.courage || 50
                    };
                }
                this.profile.jinMoments = parsed.jinMoments || parsed.jinEngagement || [];
                this.profile.achievements = parsed.achievements || [];
            } catch (e) {
                console.log('Starting fresh');
            }
        }
    },

    reset() {
        this.profile = {
            growth: { loyalty: 50, romance: 50, courage: 50 },
            jinMoments: [],
            achievements: []
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
