// ═══════════════════════════════════════════════════════════════════════════
// AUDIO ENGINE - Emotional Soundscape
// ═══════════════════════════════════════════════════════════════════════════
// Music triggers on key moments. The right song at the right time.
// Operation Dedicated Mongoose - the sounds that stay with you.
// ═══════════════════════════════════════════════════════════════════════════

const AudioEngine = {

    // Track registry - songs that matter
    tracks: {
        // Primary emotional tracks
        babyBlue: {
            name: "Baby Blue",
            artist: "Cigarettes After Sex",
            url: null,  // Set externally or via Spotify embed
            spotifyId: "5FbrH4vMGaIBXqjt0jzNkz",
            trigger: "jin_intimate",
            mood: "intimate",
            fadeIn: 3000,
            fadeOut: 5000
        },

        perfectDance: {
            name: "Perfect",
            artist: "Ed Sheeran",
            url: null,
            spotifyId: "0tgVpDi06FyKpA1z0VMD4v",
            trigger: "jin_dance",
            mood: "romantic",
            fadeIn: 2000,
            fadeOut: 3000
        },

        thinkingOutLoud: {
            name: "Thinking Out Loud",
            artist: "Ed Sheeran",
            url: null,
            spotifyId: "34gCuhDGsG4bRPIf9bb02f",
            trigger: "jin_declaration",
            mood: "love",
            fadeIn: 2000,
            fadeOut: 4000
        },

        // Ambient tracks
        apocalypseAmbient: {
            name: "Apocalypse",
            artist: "Cigarettes After Sex",
            url: null,
            spotifyId: "0yc6Gst2xkRu0eMLeRMGCX",
            trigger: "ending",
            mood: "melancholy",
            fadeIn: 5000,
            fadeOut: 8000
        },

        // Tension tracks
        tension: {
            name: "Tension Ambient",
            url: "/static/audio/tension.mp3",  // Local ambient track
            trigger: "danger",
            mood: "tense",
            loop: true,
            volume: 0.3
        }
    },

    // State
    currentTrack: null,
    audioElement: null,
    isEnabled: true,
    volume: 0.7,

    // Initialize
    init() {
        this.loadPreferences();
        this.createAudioElement();
    },

    createAudioElement() {
        this.audioElement = document.createElement('audio');
        this.audioElement.id = 'mongoose-audio';
        this.audioElement.style.display = 'none';
        document.body.appendChild(this.audioElement);
    },

    // ═══════════════════════════════════════════════════════════════════════
    // PLAYBACK CONTROL
    // ═══════════════════════════════════════════════════════════════════════

    play(trackId) {
        if (!this.isEnabled) return;

        const track = this.tracks[trackId];
        if (!track) return;

        // If same track, don't restart
        if (this.currentTrack === trackId) return;

        // Fade out current
        if (this.currentTrack) {
            this.fadeOut(() => this.startTrack(trackId, track));
        } else {
            this.startTrack(trackId, track);
        }
    },

    startTrack(trackId, track) {
        this.currentTrack = trackId;

        if (track.url) {
            // Direct audio file
            this.audioElement.src = track.url;
            this.audioElement.loop = track.loop || false;
            this.audioElement.volume = 0;
            this.audioElement.play().catch(() => {});
            this.fadeIn(track.fadeIn || 2000);
        } else if (track.spotifyId) {
            // Show Spotify embed suggestion
            this.suggestSpotify(track);
        }

        // Track for analytics
        if (typeof Analytics !== 'undefined') {
            Analytics.send('audio_played', {
                track: track.name,
                artist: track.artist,
                trigger: track.trigger
            });
        }
    },

    fadeIn(duration) {
        const targetVolume = this.volume;
        const step = targetVolume / (duration / 50);
        let current = 0;

        const fade = setInterval(() => {
            current += step;
            if (current >= targetVolume) {
                this.audioElement.volume = targetVolume;
                clearInterval(fade);
            } else {
                this.audioElement.volume = current;
            }
        }, 50);
    },

    fadeOut(callback) {
        const step = this.audioElement.volume / 40;

        const fade = setInterval(() => {
            if (this.audioElement.volume - step <= 0) {
                this.audioElement.volume = 0;
                this.audioElement.pause();
                clearInterval(fade);
                if (callback) callback();
            } else {
                this.audioElement.volume -= step;
            }
        }, 50);
    },

    stop() {
        this.fadeOut(() => {
            this.currentTrack = null;
        });
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SPOTIFY INTEGRATION
    // ═══════════════════════════════════════════════════════════════════════

    suggestSpotify(track) {
        // Create a non-intrusive suggestion
        const suggestion = document.createElement('div');
        suggestion.className = 'audio-suggestion';
        suggestion.innerHTML = `
            <div class="audio-suggestion-content">
                <span class="audio-icon">🎵</span>
                <span class="audio-text">Play "${track.name}" by ${track.artist}?</span>
                <a href="https://open.spotify.com/track/${track.spotifyId}"
                   target="_blank" class="audio-link">Open in Spotify</a>
                <button class="audio-dismiss" onclick="this.parentElement.parentElement.remove()">×</button>
            </div>
        `;
        suggestion.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: rgba(0, 0, 0, 0.9);
            border: 1px solid rgba(139, 0, 0, 0.5);
            padding: 15px 20px;
            border-radius: 8px;
            z-index: 9999;
            animation: slideIn 0.3s ease;
            font-family: 'Space Mono', monospace;
            color: #e8e0d5;
        `;

        document.body.appendChild(suggestion);

        // Auto-dismiss after 10 seconds
        setTimeout(() => suggestion.remove(), 10000);
    },

    // ═══════════════════════════════════════════════════════════════════════
    // TRIGGER SYSTEM - Music plays based on story events
    // ═══════════════════════════════════════════════════════════════════════

    onSectionEnter(sectionId, content) {
        const lower = content.toLowerCase();

        // Jin intimate moments -> Baby Blue
        if (lower.includes('jin') && (
            lower.includes('kiss') ||
            lower.includes('touch') ||
            lower.includes('lips') ||
            lower.includes('skin')
        )) {
            this.play('babyBlue');
            return;
        }

        // Jin declarations of love -> Thinking Out Loud
        if (lower.includes('jin') && (
            lower.includes('i love you') ||
            lower.includes('i am yours') ||
            lower.includes('choose you')
        )) {
            this.play('thinkingOutLoud');
            return;
        }

        // Dance or soft romantic scenes -> Perfect
        if (lower.includes('dance') || (
            lower.includes('jin') &&
            lower.includes('hold') &&
            lower.includes('gentle')
        )) {
            this.play('perfectDance');
            return;
        }

        // Endings -> Apocalypse
        if (lower.includes('ending') || lower.includes('years later')) {
            this.play('apocalypseAmbient');
            return;
        }

        // Danger scenes -> Tension ambient
        if (lower.includes('infected') ||
            lower.includes('running') ||
            lower.includes('scream')
        ) {
            this.play('tension');
            return;
        }
    },

    // ═══════════════════════════════════════════════════════════════════════
    // JIN-SPECIFIC TRIGGERS
    // ═══════════════════════════════════════════════════════════════════════

    onJinMoment(momentType) {
        const triggers = {
            'first_kiss': 'babyBlue',
            'confession': 'thinkingOutLoud',
            'intimate': 'babyBlue',
            'dance': 'perfectDance',
            'declaration': 'thinkingOutLoud',
            'claim': 'babyBlue',
            'reunion': 'apocalypseAmbient'
        };

        if (triggers[momentType]) {
            this.play(triggers[momentType]);
        }
    },

    // ═══════════════════════════════════════════════════════════════════════
    // PREFERENCES
    // ═══════════════════════════════════════════════════════════════════════

    toggle() {
        this.isEnabled = !this.isEnabled;
        if (!this.isEnabled) this.stop();
        this.savePreferences();
        return this.isEnabled;
    },

    setVolume(level) {
        this.volume = Math.max(0, Math.min(1, level));
        if (this.audioElement) {
            this.audioElement.volume = this.volume;
        }
        this.savePreferences();
    },

    savePreferences() {
        localStorage.setItem('mongoose_audio', JSON.stringify({
            enabled: this.isEnabled,
            volume: this.volume
        }));
    },

    loadPreferences() {
        const saved = localStorage.getItem('mongoose_audio');
        if (saved) {
            const prefs = JSON.parse(saved);
            this.isEnabled = prefs.enabled !== false;
            this.volume = prefs.volume || 0.7;
        }
    }
};

// Add styles
const audioStyles = document.createElement('style');
audioStyles.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }

    .audio-suggestion-content {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .audio-icon {
        font-size: 1.2em;
    }

    .audio-text {
        font-size: 0.85em;
    }

    .audio-link {
        color: #8b0000;
        text-decoration: none;
        font-size: 0.8em;
        padding: 5px 10px;
        border: 1px solid #8b0000;
        border-radius: 4px;
        transition: all 0.3s;
    }

    .audio-link:hover {
        background: #8b0000;
        color: #fff;
    }

    .audio-dismiss {
        background: none;
        border: none;
        color: #666;
        cursor: pointer;
        font-size: 1.2em;
        padding: 0 5px;
    }

    .audio-dismiss:hover {
        color: #fff;
    }

    /* Audio toggle button */
    .audio-toggle {
        position: fixed;
        bottom: 60px;
        right: 20px;
        background: rgba(0, 0, 0, 0.8);
        border: 1px solid rgba(139, 0, 0, 0.3);
        color: #e8e0d5;
        padding: 10px 15px;
        border-radius: 8px;
        cursor: pointer;
        font-family: 'Space Mono', monospace;
        font-size: 0.8em;
        z-index: 1000;
        transition: all 0.3s;
    }

    .audio-toggle:hover {
        border-color: #8b0000;
    }

    .audio-toggle.muted {
        opacity: 0.5;
    }
`;
document.head.appendChild(audioStyles);

// Initialize
AudioEngine.init();

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { AudioEngine };
}
