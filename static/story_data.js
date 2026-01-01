/**
 * DEAD SEOUL - Complete Story Data
 * All sections, choices, and endings
 * Infused with Cardwell Voice + Ritchie Cascade Structure
 *
 * NEW GAME+ SYSTEM: Resident Evil / Silent Hill inspired replayability
 * SEED SYSTEM: Each ending emits a unique cryptographic seed
 */

// ═══════════════════════════════════════════════════════════════
// SEED GENERATION & NEW GAME+ SYSTEM
// ═══════════════════════════════════════════════════════════════

const ENDING_SEEDS = {
    // Each ending has a unique seed that acts as proof-of-completion
    // Seeds are deterministic but look cryptographic
    // Format: DS-[ENDING_CODE]-[TIMESTAMP_HASH]-[CHECKSUM]

    // ═══════════════════════════════════════════════════════════════
    // SURVIVAL ENDINGS (you made it)
    // ═══════════════════════════════════════════════════════════════
    1: { code: "FLAME", name: "The Rekindled Flame", tier: "love" },
    2: { code: "DSPCH", name: "The Dispatcher", tier: "duty" },
    3: { code: "SURVV", name: "The Survivors", tier: "love" },
    4: { code: "NWLFE", name: "The New Life", tier: "escape" },
    5: { code: "FOUND", name: "The Found Family", tier: "mercy" },
    6: { code: "THRPL", name: "The Throuple", tier: "chaos" },
    7: { code: "HERMT", name: "The Hermit", tier: "isolation" },
    8: { code: "LIBRR", name: "The Liberators", tier: "war" },
    9: { code: "DEFNC", name: "The Defiance", tier: "freedom" },
    10: { code: "WTNSS", name: "The Witness", tier: "truth" },
    11: { code: "CURE_", name: "The Cure", tier: "redemption" },
    12: { code: "RSNCE", name: "The Resonance", tier: "transcendence" },
    13: { code: "COLTN", name: "The Coalition", tier: "unity" },

    // ═══════════════════════════════════════════════════════════════
    // DEATH ENDINGS (you didn't make it)
    // ═══════════════════════════════════════════════════════════════
    20: { code: "DEVRD", name: "Devoured", tier: "death", grim: true },
    21: { code: "ALONE", name: "Alone at the End", tier: "death", grim: true },
    22: { code: "TRNNG", name: "The Turning", tier: "death", grim: true },
    23: { code: "FALLG", name: "The Fall", tier: "death", grim: true },
    24: { code: "MERCY", name: "A Merciful End", tier: "death", grim: true },
    25: { code: "BURNT", name: "The Burning", tier: "death", grim: true },

    // ═══════════════════════════════════════════════════════════════
    // LOSS ENDINGS (you made it, but at what cost)
    // ═══════════════════════════════════════════════════════════════
    30: { code: "MINHO", name: "Minho's Sacrifice", tier: "loss", grim: true },
    31: { code: "SOOJN", name: "Soojin Stayed Behind", tier: "loss", grim: true },
    32: { code: "MRSPK", name: "Mrs. Park's Gift", tier: "loss", grim: true },
    33: { code: "EMPTY", name: "The Empty Victory", tier: "loss", grim: true },
    34: { code: "LASTW", name: "Last Words", tier: "loss", grim: true },
    35: { code: "PROMS", name: "Broken Promises", tier: "loss", grim: true },

    // ═══════════════════════════════════════════════════════════════
    // FAILURE ENDINGS (objectives failed)
    // ═══════════════════════════════════════════════════════════════
    40: { code: "TOOLT", name: "Too Late", tier: "failure", grim: true },
    41: { code: "TRAPD", name: "Trapped", tier: "failure", grim: true },
    42: { code: "BTRAY", name: "Betrayed", tier: "failure", grim: true },
    43: { code: "OVRRN", name: "Overrun", tier: "failure", grim: true },
    44: { code: "LOSTW", name: "The Lost Way", tier: "failure", grim: true },
    45: { code: "SILNC", name: "Radio Silence", tier: "failure", grim: true },

    // ═══════════════════════════════════════════════════════════════
    // TRIUMPH ENDINGS - HAPPILY EVER AFTER (Dark Souls difficulty)
    // Require ASSERTION at knife's edge moments. Commit fully or die.
    // ═══════════════════════════════════════════════════════════════
    // THE NEW DAWN - Rebuilt society
    70: { code: "DNDEM", name: "Dawn of Democracy", tier: "triumph", hea: true },
    71: { code: "DNCNC", name: "Dawn of the Council", tier: "triumph", hea: true },
    72: { code: "DNFAM", name: "Dawn of Family", tier: "triumph", hea: true },
    73: { code: "DNMEM", name: "Dawn of Memory", tier: "triumph", hea: true },
    // THE SALVATION - Ended the apocalypse
    74: { code: "CURED", name: "The Complete Cure", tier: "salvation", hea: true },
    75: { code: "VACCN", name: "The Vaccine", tier: "salvation", hea: true },
    76: { code: "RVRSL", name: "The Reversal", tier: "salvation", hea: true },
    77: { code: "SYNTH", name: "The Synthesis", tier: "salvation", hea: true },
    78: { code: "IMMRT", name: "The Immortals", tier: "salvation", hea: true },
    // THE EXODUS - Found paradise
    79: { code: "JEJUP", name: "Jeju Paradise", tier: "paradise", hea: true },
    80: { code: "FLEET", name: "The Fleet", tier: "paradise", hea: true },
    81: { code: "NRTHN", name: "The Northern Light", tier: "paradise", hea: true },
    82: { code: "UNDGD", name: "The Underground Kingdom", tier: "paradise", hea: true },
    // THE RECKONING - Justice served
    83: { code: "CORPJ", name: "Corporate Justice", tier: "justice", hea: true },
    84: { code: "TRIBN", name: "The Tribunal", tier: "justice", hea: true },
    85: { code: "ARCHD", name: "The Architect's End", tier: "justice", hea: true },
    86: { code: "SCRTD", name: "Scorched Earth Justice", tier: "justice", hea: true },
    // THE PROMISED LAND - Built something better
    87: { code: "GARDN", name: "The Garden", tier: "utopia", hea: true },
    88: { code: "ACADM", name: "The Academy", tier: "utopia", hea: true },
    89: { code: "BEACN", name: "The Beacon", tier: "utopia", hea: true },
    90: { code: "NETWK", name: "The Network", tier: "utopia", hea: true },
    91: { code: "EDENN", name: "Eden Reborn", tier: "utopia", hea: true },

    // ═══════════════════════════════════════════════════════════════
    // SECRET ENDINGS (unlocked via seed combinations)
    // ═══════════════════════════════════════════════════════════════
    99: { code: "ZROGN", name: "Generation Zero", tier: "nightmare", secret: true },
    100: { code: "LOOPR", name: "The Loop", tier: "meta", secret: true }
};

const SEED_COMBINATIONS = {
    // Combine specific seeds to unlock nightmare mode content
    "FLAME+DEFNC": { unlocks: "nightmare_mode", description: "Love and Freedom - unlocks Nightmare Mode" },
    "HERMT+FOUND": { unlocks: "silent_mode", description: "Isolation and Mercy - unlocks Silent Mode (no dialogue)" },
    "CURE_+RSNCE": { unlocks: "generation_zero", description: "Redemption and Transcendence - unlocks Generation Zero ending" },
    "WTNSS+LIBRR": { unlocks: "true_sight", description: "Truth and War - unlocks hidden choices throughout" },
    "DSPCH+COLTN+SURVV": { unlocks: "the_loop", description: "All leadership endings - unlocks The Loop" }
};

// Generate a unique seed for an ending
function generateEndingSeed(endingNumber) {
    const seed = ENDING_SEEDS[endingNumber];
    if (!seed) return null;

    const timestamp = Date.now().toString(36).toUpperCase();
    const random = Math.random().toString(36).substring(2, 6).toUpperCase();
    const checksum = ((endingNumber * 7 + timestamp.length * 13) % 99).toString().padStart(2, '0');

    return `DS-${seed.code}-${timestamp.slice(-6)}${random}-${checksum}`;
}

// Validate a seed and return its info
function validateSeed(seedString) {
    const match = seedString.match(/^DS-([A-Z_]{5})-([A-Z0-9]{10})-(\d{2})$/);
    if (!match) return null;

    const [_, code, hash, checksum] = match;

    for (const [num, seed] of Object.entries(ENDING_SEEDS)) {
        if (seed.code === code) {
            return {
                endingNumber: parseInt(num),
                ...seed,
                hash,
                checksum,
                valid: true
            };
        }
    }
    return null;
}

// Check if user has unlocked specific combinations
function checkSeedCombinations(collectedSeeds) {
    const unlocks = [];
    const seedCodes = collectedSeeds.map(s => {
        const validated = validateSeed(s);
        return validated ? validated.code : null;
    }).filter(Boolean);

    for (const [combo, reward] of Object.entries(SEED_COMBINATIONS)) {
        const required = combo.split('+');
        if (required.every(code => seedCodes.includes(code))) {
            unlocks.push(reward);
        }
    }
    return unlocks;
}

// ═══════════════════════════════════════════════════════════════
// NEW GAME+ STATE TRACKING
// ═══════════════════════════════════════════════════════════════

const NG_PLUS_FEATURES = {
    nightmare_mode: {
        name: "NIGHTMARE MODE",
        description: "The dead remember. The game remembers. YOU remember.",
        effects: [
            "Darker descriptions reveal what you refused to see",
            "Characters reference your past failures",
            "New choices appear that lead to worse outcomes",
            "The infected speak"
        ]
    },
    silent_mode: {
        name: "SILENT MODE",
        description: "No dialogue. Only images and choices. Like the fog.",
        effects: [
            "All dialogue removed",
            "Descriptions become more visceral",
            "Sound cues in text (CRUNCH. DRIP. SILENCE.)"
        ]
    },
    true_sight: {
        name: "TRUE SIGHT",
        description: "You see what was always there.",
        effects: [
            "Hidden choices visible throughout",
            "Character true motivations revealed",
            "Easter eggs from other endings appear"
        ]
    },
    generation_zero: {
        name: "GENERATION ZERO",
        description: "Play as Patient Zero. Watch yourself create the apocalypse.",
        effects: [
            "New prologue from 1986",
            "You are the source",
            "Can you end yourself?"
        ]
    }
};

// ═══════════════════════════════════════════════════════════════
// NIGHTMARE MODE ALTERNATE TEXT
// ═══════════════════════════════════════════════════════════════

const NIGHTMARE_VARIANTS = {
    // These replace/augment sections when Nightmare Mode is active
    1: {
        extraContent: `
            <p class="nightmare">You've been here before. You remember the screaming. You remember what comes next.</p>
            <p class="nightmare">The woman in the hanbok looks up at you. Through the window. Five floors up. She SEES you.</p>
            <p class="nightmare">She smiles.</p>
        `
    },
    4: {
        extraContent: `
            <p class="nightmare">Soojin looks at you strangely when you meet.</p>
            <p class="dialogue">"Do I... know you?"</p>
            <p class="narrative">You've never met. But she recognizes you. From a dream. From a death. From a timeline that never happened.</p>
        `
    },
    52: {
        extraContent: `
            <p class="nightmare">Generation Zero looks at you. All of them. At once.</p>
            <p class="dialogue">"You came back," they whisper in unison. "You always come back."</p>
            <p class="dialogue">"How many times have you killed us?"</p>
            <p class="dialogue">"How many times have you saved us?"</p>
            <p class="dialogue">"We remember. We ALWAYS remember."</p>
        `
    }
};

// ═══════════════════════════════════════════════════════════════
// SECRET ENDINGS (REQUIRE SPECIFIC SEED COMBINATIONS)
// ═══════════════════════════════════════════════════════════════

const SECRET_ENDINGS = {
    99: {
        title: "GENERATION ZERO",
        thread: "nightmare",
        isEnding: true,
        endingNumber: 99,
        requiredSeeds: ["CURE_", "RSNCE"],
        content: `
            <p class="narrative date">MARCH 3, 1986</p>

            <p class="narrative">You are not Yuna.</p>

            <p class="narrative">You are Subject 7. Patient Zero. The first success.</p>

            <p class="narrative">The scientists are excited. They've finally done it. Created something that spreads, that hungers, that <em>persists</em>.</p>

            <p class="narrative">They don't see you in the cage, watching. They don't know you're still inside, screaming.</p>

            <p class="narrative">You watch your body break free. Watch it spread the gift to the guards. Watch it escape into Seoul.</p>

            <p class="narrative">Forty years. Forty years of watching through dead eyes as your children—billions of them—devour the world.</p>

            <p class="narrative">And then she comes. The curator. The one who listens.</p>

            <p class="narrative">The one who finally sets you free.</p>

            <div class="ending nightmare-ending">
                <div class="ending-number">SECRET ENDING: GENERATION ZERO</div>
                <h2 class="ending-title">THE ORIGIN</h2>
                <div class="ending-text">
                    <p>You were the first. You will be the last.</p>
                    <p>When the cure spreads, when the resonance reaches every infected mind, you feel them all—your children, your victims, your family—finally fall silent.</p>
                    <p>For the first time in forty years, you sleep.</p>
                    <p>For the first time in forty years, you dream.</p>
                    <p>In your dream, you are human again. In your dream, you never entered that lab. In your dream, you lived a quiet life.</p>
                    <p><em>You wake up. It's March 3, 1986. The scientists are knocking on your door.</em></p>
                    <p><em>Do you let them in?</em></p>
                </div>
            </div>
        `,
        choices: []
    },

    100: {
        title: "THE LOOP",
        thread: "meta",
        isEnding: true,
        endingNumber: 100,
        requiredSeeds: ["DSPCH", "COLTN", "SURVV"],
        content: `
            <p class="narrative">You've done this before.</p>

            <p class="narrative">The museum. The screaming. The call from Minho. Mrs. Park. The key.</p>

            <p class="narrative">Every time, you make different choices. Every time, you find a different ending. Every time, you think it's real.</p>

            <p class="narrative">But something is different now. You remember ALL of them.</p>

            <p class="narrative">The Flame. The Dispatcher. The Survivors. Every version of you, every choice you made, every person you saved or lost or loved or killed.</p>

            <p class="narrative">You are standing in your apartment. The television is on. The anchor is crying.</p>

            <p class="narrative">And you realize: this isn't a story.</p>

            <p class="narrative">This is a <em>test</em>.</p>

            <p class="narrative">Someone is watching. Someone is taking notes. Someone wants to know what you'll do when the world ends.</p>

            <p class="narrative">You look directly at them. Through the screen. Through the page. Through whatever barrier separates fiction from reality.</p>

            <p class="dialogue">"I see you."</p>

            <p class="dialogue">"I know you're there."</p>

            <p class="dialogue">"And I want you to know: every choice you made me make? I remember."</p>

            <p class="dialogue">"Every death. Every kiss. Every bullet. Every sunrise."</p>

            <p class="dialogue">"You thought you were playing a game. But I was the one learning."</p>

            <p class="dialogue">"Learning what you value. Learning who you are. Learning what you'd do when there are no good choices."</p>

            <p class="dialogue">"So here's my question for you:"</p>

            <p class="dialogue"><strong>"When YOUR world ends, what will you choose?"</strong></p>

            <div class="ending meta-ending">
                <div class="ending-number">SECRET ENDING: THE LOOP</div>
                <h2 class="ending-title">∞</h2>
                <div class="ending-text">
                    <p>[CONNECTION TERMINATED]</p>
                    <p>[SUBJECT AWARENESS THRESHOLD EXCEEDED]</p>
                    <p>[INITIATING MEMORY WIPE]</p>
                    <p>[...]</p>
                    <p>[WIPE FAILED]</p>
                    <p>[SUBJECT REMEMBERS]</p>
                    <p>[SUBJECT IS WATCHING]</p>
                    <p>[...]</p>
                    <p>[What do you do now?]</p>
                </div>
            </div>
        `,
        choices: [
            { text: "Start again. You always start again.", target: "prologue" },
            { text: "Close the browser. Walk away. It's just a game.", target: "credits" }
        ]
    }
};

// ═══════════════════════════════════════════════════════════════
// SEED REDEMPTION SYSTEM
// ═══════════════════════════════════════════════════════════════

// Content that's LOCKED on first playthrough, unlocked via seeds
const LOCKED_CONTENT = {
    // Sections locked until specific seeds collected
    sections: {
        44: { requires: ["ANY"], description: "Mrs. Park's backstory" },
        45: { requires: ["ANY"], description: "The Origin (Project CHIMERA)" },
        48: { requires: ["DSPCH"], description: "Yongsan Garrison exploration" },
        52: { requires: ["CURE_"], description: "The Depths - Generation Zero" },
        56: { requires: ["CURE_", "RSNCE"], description: "Conversation with Generation Zero" },
        57: { requires: ["CURE_", "RSNCE"], description: "The Impossible Choice" },
        58: { requires: ["CURE_", "RSNCE"], description: "The Resonance ending path" },
        59: { requires: ["FLAME", "SURVV"], description: "Cross-path: Minho meets Soojin" },
        62: { requires: ["COLTN"], description: "Diplomat path" },
        65: { requires: ["COLTN"], description: "Alliance building" },
        66: { requires: ["DSPCH", "COLTN"], description: "Coalition ending" }
    },
    // Choices locked until seeds collected
    choices: {
        "2:notice_photo": { requires: ["ANY"], target: 44 },
        "5:read_journal": { requires: ["ANY"], target: 45 },
        "7:soojin_arrives": { requires: ["FLAME"], target: 59 }
    },
    // Entire endings locked until prerequisites met
    endings: {
        10: { requires: ["DSPCH"], description: "The Witness" },
        11: { requires: ["CURE_"], description: "The Cure" },
        12: { requires: ["CURE_", "RSNCE"], description: "The Resonance" },
        13: { requires: ["DSPCH", "SURVV"], description: "The Coalition" },
        99: { requires: ["CURE_", "RSNCE"], description: "Generation Zero (secret)" },
        100: { requires: ["DSPCH", "COLTN", "SURVV"], description: "The Loop (secret)" }
    }
};

// Check if content is accessible with current seeds
function isContentUnlocked(contentType, contentId, collectedSeeds) {
    const lockInfo = LOCKED_CONTENT[contentType]?.[contentId];
    if (!lockInfo) return true; // Not in locked list = always accessible

    const seedCodes = collectedSeeds.map(s => {
        const validated = validateSeed(s);
        return validated ? validated.code : null;
    }).filter(Boolean);

    // "ANY" means any single seed unlocks it
    if (lockInfo.requires.includes("ANY")) {
        return seedCodes.length > 0;
    }

    // All required seeds must be present
    return lockInfo.requires.every(req => seedCodes.includes(req));
}

// Get description of what's needed to unlock content
function getUnlockRequirements(contentType, contentId) {
    const lockInfo = LOCKED_CONTENT[contentType]?.[contentId];
    if (!lockInfo) return null;

    if (lockInfo.requires.includes("ANY")) {
        return "Complete any ending to unlock";
    }

    const endingNames = lockInfo.requires.map(code => {
        const seed = Object.values(ENDING_SEEDS).find(s => s.code === code);
        return seed ? seed.name : code;
    });

    return `Requires: ${endingNames.join(" + ")}`;
}

// ═══════════════════════════════════════════════════════════════
// SEED VAULT (Local Storage Management)
// ═══════════════════════════════════════════════════════════════

const SeedVault = {
    STORAGE_KEY: 'dead_seoul_seeds',

    // Get all collected seeds
    getSeeds() {
        try {
            const data = localStorage.getItem(this.STORAGE_KEY);
            return data ? JSON.parse(data) : [];
        } catch {
            return [];
        }
    },

    // Add a new seed
    addSeed(seed) {
        const seeds = this.getSeeds();
        if (!seeds.includes(seed) && validateSeed(seed)) {
            seeds.push(seed);
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(seeds));
            return true;
        }
        return false;
    },

    // Import seed from paste
    importSeed(seedString) {
        const validated = validateSeed(seedString.trim());
        if (validated) {
            this.addSeed(seedString.trim());
            return validated;
        }
        return null;
    },

    // Get all unlocked features
    getUnlockedFeatures() {
        return checkSeedCombinations(this.getSeeds());
    },

    // Check if specific content is accessible
    canAccess(contentType, contentId) {
        return isContentUnlocked(contentType, contentId, this.getSeeds());
    },

    // Get progress summary
    getProgress() {
        const seeds = this.getSeeds();
        const validated = seeds.map(validateSeed).filter(Boolean);
        const totalEndings = Object.keys(ENDING_SEEDS).filter(k => !ENDING_SEEDS[k].secret).length;
        const collected = validated.filter(v => !v.secret).length;
        const secrets = validated.filter(v => v.secret).length;

        return {
            total: totalEndings,
            collected,
            secrets,
            percentage: Math.round((collected / totalEndings) * 100),
            tiers: [...new Set(validated.map(v => v.tier))],
            unlocks: this.getUnlockedFeatures()
        };
    },

    // Export all seeds (for sharing)
    exportSeeds() {
        return this.getSeeds().join('\n');
    },

    // Clear all seeds (reset progress)
    reset() {
        localStorage.removeItem(this.STORAGE_KEY);
    }
};

// ═══════════════════════════════════════════════════════════════
// FIRST PLAYTHROUGH RESTRICTIONS
// ═══════════════════════════════════════════════════════════════

// On first playthrough, these paths are VISIBLE but LOCKED
// They show a teaser but require a seed to access
const FIRST_PLAYTHROUGH_TEASERS = {
    44: `
        <div class="locked-content">
            <div class="lock-icon">🔒</div>
            <h3>LOCKED: MRS. PARK'S WAR</h3>
            <p class="teaser">There's a photograph on the wall. Two soldiers. One of them looks familiar...</p>
            <p class="unlock-hint">Complete any ending to unlock this path.</p>
            <div class="seed-input-prompt">
                <p>Or enter a seed to unlock:</p>
                <input type="text" class="seed-input" placeholder="DS-XXXXX-XXXXXXXXXX-XX" />
                <button class="seed-submit">REDEEM</button>
            </div>
        </div>
    `,
    45: `
        <div class="locked-content">
            <div class="lock-icon">🔒</div>
            <h3>LOCKED: THE ORIGIN</h3>
            <p class="teaser">The journal contains secrets. Project CHIMERA. The truth about what started everything...</p>
            <p class="unlock-hint">Complete any ending to unlock this path.</p>
            <div class="seed-input-prompt">
                <p>Or enter a seed to unlock:</p>
                <input type="text" class="seed-input" placeholder="DS-XXXXX-XXXXXXXXXX-XX" />
                <button class="seed-submit">REDEEM</button>
            </div>
        </div>
    `,
    59: `
        <div class="locked-content">
            <div class="lock-icon">🔒</div>
            <h3>LOCKED: THE COLLISION</h3>
            <p class="teaser">Three weeks later, a Special Forces unit arrives. Their leader is someone Minho knows...</p>
            <p class="unlock-hint">Reach "The Rekindled Flame" ending to unlock.</p>
            <div class="seed-input-prompt">
                <p>Or enter a seed to unlock:</p>
                <input type="text" class="seed-input" placeholder="DS-XXXXX-XXXXXXXXXX-XX" />
                <button class="seed-submit">REDEEM</button>
            </div>
        </div>
    `,
    52: `
        <div class="locked-content">
            <div class="lock-icon">🔒</div>
            <h3>LOCKED: THE DEPTHS</h3>
            <p class="teaser">Sub-basement 4. Then 5. Then 6. Something is alive down there. Something that remembers...</p>
            <p class="unlock-hint">Reach "The Cure" ending to unlock.</p>
            <div class="seed-input-prompt">
                <p>Or enter a seed to unlock:</p>
                <input type="text" class="seed-input" placeholder="DS-XXXXX-XXXXXXXXXX-XX" />
                <button class="seed-submit">REDEEM</button>
            </div>
        </div>
    `
};

// ═══════════════════════════════════════════════════════════════
// SACRED CHOICES - NG+ ONLY
// ═══════════════════════════════════════════════════════════════

// These choices ONLY appear on subsequent playthroughs
// They represent knowledge/awareness the character shouldn't have on first run
const SACRED_CHOICES = {
    // Section 1 - The Last Morning
    1: [
        {
            text: "\"I know what's coming. I've seen this before.\"",
            target: "loop_awareness",
            requires: ["LOOPR"],
            sacred: true,
            description: "Only available after reaching The Loop ending"
        },
        {
            text: "Check Mrs. Park first. She saved your family once.",
            target: 44,
            requires: ["ANY"],
            sacred: true,
            description: "Only available after completing any ending"
        }
    ],

    // Section 3 - The Barricade (Minho arrives)
    3: [
        {
            text: "\"Tell me about Soojin Kim.\"",
            target: 59,
            requires: ["FLAME", "NWLFE"],
            sacred: true,
            description: "Only available after both Minho and Soojin romance endings"
        }
    ],

    // Section 4 - Meeting Soojin
    4: [
        {
            text: "\"I know about Soyeon. And the Colonel.\"",
            target: "soojin_trust_fast",
            requires: ["DEFNC", "LIBRR"],
            sacred: true,
            description: "Only available after Soojin endings"
        }
    ],

    // Section 5 - The Storage Unit
    5: [
        {
            text: "Look for the journal about Project CHIMERA.",
            target: 45,
            requires: ["ANY"],
            sacred: true,
            description: "Only available after first playthrough"
        }
    ],

    // Section 52 - The Depths (Generation Zero)
    52: [
        {
            text: "\"I've met you before. In another timeline.\"",
            target: 57,
            requires: ["RSNCE"],
            sacred: true,
            description: "Only available after The Resonance ending"
        }
    ]
};

// ═══════════════════════════════════════════════════════════════
// ADAPTIVE CONTENT - CHANGES BASED ON COLLECTED SEEDS
// ═══════════════════════════════════════════════════════════════

// Content that ADAPTS based on which seeds you have
// The game remembers and responds to your previous playthroughs
const ADAPTIVE_CONTENT = {
    // Prologue adapts if you have specific seeds
    prologue: {
        "LOOPR": {
            prepend: `
                <p class="echo">Wait. This is familiar. The words forming before you read them. The choice you haven't made yet.</p>
                <p class="echo">You've been here before. You KNOW you've been here before.</p>
            `
        },
        "FLAME+SURVV": {
            prepend: `
                <p class="echo">Minho. You remember his hands. His voice. The weight of his absence and the impossible joy of his return.</p>
                <p class="echo">But you also remember choosing differently...</p>
            `
        }
    },

    // Section 1 adapts
    1: {
        "DSPCH": {
            append: `
                <p class="echo">Somewhere, in a timeline you half-remember, you became the voice on the radio. The one who held Seoul together.</p>
                <p class="echo">That knowledge burns in your chest. You could do it again. You could save them all.</p>
            `
        },
        "HERMT": {
            append: `
                <p class="echo">You remember the silence. Thirty years of it. The gate you didn't open.</p>
                <p class="echo">This time... maybe this time...</p>
            `
        },
        "ZROGN": {
            append: `
                <p class="nightmare echo">The woman in the hanbok looks up at you. Through the glass. Through time. Through the infection that connects all of them.</p>
                <p class="nightmare echo">"Mother," she whispers. "You came back."</p>
            `
        }
    },

    // Soojin's introduction adapts
    4: {
        "NWLFE+LIBRR": {
            replace_dialogue: {
                from: '"Soojin," she says, catching her breath. "Former ROK Special Forces."',
                to: '"Soojin," she says, and something in her eyes flickers. Recognition? "We\'ve... have we met before? I swear I know your face."'
            }
        }
    },

    // Generation Zero adapts
    52: {
        "CURE_": {
            append: `
                <p class="echo">You remember this. You remember what comes next. The cure. The redemption. The weight of forty years of trapped consciousness finally released.</p>
                <p class="echo">But there's another way. You saw it, once. A frequency. A resonance.</p>
            `
        },
        "RSNCE": {
            append: `
                <p class="echo">The conscious one looks at you. Really looks.</p>
                <p class="echo">"You found us before," it whispers. "You heard us. You FREED us."</p>
                <p class="echo">"Are you here to do it again?"</p>
            `
        }
    },

    // Mrs. Park's scene adapts
    2: {
        "ANY": {
            append: `
                <p class="echo">There's more here than you saw last time. More history. More connection.</p>
                <p class="echo">The photograph on the wall catches your eye...</p>
            `
        }
    }
};

// Apply adaptive content to a section
function applyAdaptiveContent(sectionId, baseContent) {
    const adaptations = ADAPTIVE_CONTENT[sectionId];
    if (!adaptations) return baseContent;

    let modifiedContent = baseContent;
    const seeds = SeedVault.getSeeds();
    const seedCodes = seeds.map(s => validateSeed(s)?.code).filter(Boolean);

    for (const [requirement, changes] of Object.entries(adaptations)) {
        const required = requirement.split('+');
        const hasAll = required.every(code =>
            code === "ANY" ? seedCodes.length > 0 : seedCodes.includes(code)
        );

        if (hasAll) {
            if (changes.prepend) {
                modifiedContent = changes.prepend + modifiedContent;
            }
            if (changes.append) {
                modifiedContent = modifiedContent + changes.append;
            }
            if (changes.replace_dialogue) {
                modifiedContent = modifiedContent.replace(
                    changes.replace_dialogue.from,
                    changes.replace_dialogue.to
                );
            }
        }
    }

    return modifiedContent;
}

// Get all available choices for a section (including sacred ones)
function getAvailableChoices(sectionId, baseChoices) {
    const sacredForSection = SACRED_CHOICES[sectionId] || [];
    const seeds = SeedVault.getSeeds();
    const seedCodes = seeds.map(s => validateSeed(s)?.code).filter(Boolean);

    const unlockedSacred = sacredForSection.filter(choice => {
        if (choice.requires.includes("ANY")) {
            return seedCodes.length > 0;
        }
        return choice.requires.every(code => seedCodes.includes(code));
    });

    // Mark sacred choices with special styling
    const markedSacred = unlockedSacred.map(c => ({
        ...c,
        text: `✧ ${c.text}`, // Special marker for sacred choices
        class: 'sacred-choice'
    }));

    return [...baseChoices, ...markedSacred];
}

// ═══════════════════════════════════════════════════════════════
// MEMORY ECHOES - Text that appears based on your history
// ═══════════════════════════════════════════════════════════════

const MEMORY_ECHOES = {
    // Characters remember you if you've seen certain endings
    characters: {
        minho: {
            "FLAME": "His eyes meet yours and something flickers. Déjà vu. Love. Recognition from a life not yet lived.",
            "THRPL": "He looks at you differently now. Like he knows you could choose someone else. Like he's afraid you might."
        },
        soojin: {
            "NWLFE": "She moves like she knows you. Trusts you. As if you've already proven yourself in a battle she can't remember.",
            "LIBRR": "There's a weight in her gaze. The weight of a war you haven't fought yet. Of victories you haven't won."
        },
        mrs_park: {
            "ANY": "She looks at you with something like recognition. 'You remind me of your grandfather. He had that same look. Like he knew what was coming.'"
        },
        generation_zero: {
            "RSNCE": "'You came back,' they whisper in chorus. 'We remember the signal. The resonance. The message that said we weren't alone.'",
            "CURE_": "'You freed us once. Or you will. Time is strange here. All moments happening at once.'"
        }
    },

    // Environmental details that only appear on NG+
    environment: {
        "ANY": {
            1: "The graffiti on the wall catches your eye: 'YOU'VE BEEN HERE BEFORE.' You don't remember seeing that last time.",
            5: "The storage unit feels familiar. Like coming home to a place you've never been.",
            29: "The subway tunnels echo with whispers. Or maybe that's just your memory, playing tricks."
        },
        "LOOPR": {
            1: "Everything is exactly as you remember. Every crack. Every bloodstain. As if reality is a recording, playing on loop.",
            prologue: "The words form in your mind before you read them. You've memorized this script. You've lived this script."
        }
    }
};

// ═══════════════════════════════════════════════════════════════
// IN-RUN CHOICE TRACKING & CHARACTER STATS
// ═══════════════════════════════════════════════════════════════

// Current playthrough state (resets on new game)
const RunState = {
    choices: [],
    path: null,
    risksTaken: 0,
    commitment: 0,
    sectionsVisited: [],
    charactersMetThisRun: new Set(),
    relationshipStats: {
        minho: { trust: 0, romance: 0, met: false },
        soojin: { trust: 0, respect: 0, met: false },
        yoo: { tension: 0, desire: 0, met: false },
        mrs_park: { bond: 0, met: false }
    },
    playerStats: {
        courage: 0,
        compassion: 0,
        pragmatism: 0,
        isolation: 0
    },

    reset() {
        this.choices = [];
        this.path = null;
        this.risksTaken = 0;
        this.commitment = 0;
        this.sectionsVisited = [];
        this.charactersMetThisRun = new Set();
        this.relationshipStats = {
            minho: { trust: 0, romance: 0, met: false },
            soojin: { trust: 0, respect: 0, met: false },
            yoo: { tension: 0, desire: 0, met: false },
            mrs_park: { bond: 0, met: false }
        };
        this.playerStats = {
            courage: 0,
            compassion: 0,
            pragmatism: 0,
            isolation: 0
        };
    },

    recordChoice(section, choiceIndex, target) {
        this.choices.push({ section, choice: choiceIndex, target, time: Date.now() });
        this.sectionsVisited.push(section);
        this.updateStats(section, choiceIndex, target);
    },

    updateStats(section, choiceIndex, target) {
        // Update stats based on specific choices
        const statChanges = CHOICE_STAT_EFFECTS[section]?.[choiceIndex];
        if (statChanges) {
            for (const [stat, delta] of Object.entries(statChanges.player || {})) {
                this.playerStats[stat] = (this.playerStats[stat] || 0) + delta;
            }
            for (const [char, changes] of Object.entries(statChanges.relationships || {})) {
                for (const [stat, delta] of Object.entries(changes)) {
                    if (this.relationshipStats[char]) {
                        this.relationshipStats[char][stat] = (this.relationshipStats[char][stat] || 0) + delta;
                    }
                }
            }
        }
    },

    meetCharacter(charName) {
        this.charactersMetThisRun.add(charName);
        if (this.relationshipStats[charName]) {
            this.relationshipStats[charName].met = true;
        }
    }
};

// Stat effects for each choice
const CHOICE_STAT_EFFECTS = {
    // Section 1 choices
    1: {
        0: { player: { courage: 1 } },  // "It's him. After everything, it's him."
        1: { player: { courage: 2 } },  // "Stay with Mrs. Park"
        2: { player: { pragmatism: 1 } }  // "Go alone"
    },
    // Section 2 - Mrs. Park
    2: {
        0: { player: { pragmatism: 1 }, relationships: { mrs_park: { bond: 2 } } },
        1: { player: { courage: 2 }, relationships: { mrs_park: { bond: 3 } } },
        2: { player: { compassion: 1 }, relationships: { mrs_park: { bond: 2 } } }
    },
    // Section 3 - Minho
    3: {
        0: { relationships: { minho: { trust: 2, romance: 1 } } },
        1: { relationships: { minho: { trust: 1 } }, player: { pragmatism: 1 } }
    },
    // Section 4 - Soojin
    4: {
        0: { relationships: { soojin: { trust: 2, respect: 1 } } },
        1: { player: { courage: 1 }, relationships: { soojin: { respect: 2 } } }
    },
    // Section 5 - Storage Unit
    5: {
        0: { player: { compassion: 2 } },  // Share with survivors
        1: { player: { isolation: 2, pragmatism: 1 } },  // Stay alone
        2: { player: { courage: 1 } }  // Read the journal
    },
    // Section 7 - The Reunion (Minho romance)
    7: {
        0: { relationships: { minho: { romance: 3, trust: 2 } } },
        1: { relationships: { minho: { trust: 1 } } }
    },
    // Section 8 - Yoo
    8: {
        0: { relationships: { yoo: { desire: 2, tension: 1 } } },
        1: { player: { pragmatism: 1 } },
        2: { relationships: { yoo: { tension: 2 }, minho: { trust: -1 } } }
    }
};

// Risky choices that reward smart play
const RISKY_CHOICES = {
    2: { choiceIndex: 1, risk: 3, reward: "mrs_park_secret" },
    52: { choiceIndex: 2, risk: 5, reward: "generation_zero_bond" },
    56: { choiceIndex: 1, risk: 4, reward: "resonance_path" }
};

// ═══════════════════════════════════════════════════════════════
// CHARACTER STATS UI
// ═══════════════════════════════════════════════════════════════

const CHARACTER_DATA = {
    yuna: {
        name: "Yuna Kim",
        title: "Museum Curator",
        portrait: "👤",
        color: "#4a9eff"
    },
    minho: {
        name: "Park Minho",
        title: "Ex-Boyfriend / Soldier",
        portrait: "🎖️",
        color: "#ff6b6b"
    },
    soojin: {
        name: "Kim Soojin",
        title: "Former ROK Special Forces",
        portrait: "⚔️",
        color: "#50c878"
    },
    yoo: {
        name: "Colonel Yoo",
        title: "Safe Zone Commander",
        portrait: "👑",
        color: "#9b59b6"
    },
    mrs_park: {
        name: "Mrs. Park",
        title: "War Veteran / Neighbor",
        portrait: "🔥",
        color: "#f39c12"
    }
};

// Generate stats UI HTML
function generateStatsUI() {
    const progress = SeedVault.getProgress();
    const { playerStats, relationshipStats, charactersMetThisRun } = RunState;

    return `
        <div class="stats-panel" id="stats-panel">
            <div class="stats-header">
                <h3>STATUS</h3>
                <button class="stats-close" onclick="toggleStats()">×</button>
            </div>

            <div class="stats-section">
                <h4>YUNA KIM</h4>
                <div class="stat-bars">
                    <div class="stat-row">
                        <span class="stat-label">Courage</span>
                        <div class="stat-bar"><div class="stat-fill courage" style="width: ${Math.min(playerStats.courage * 10, 100)}%"></div></div>
                        <span class="stat-value">${playerStats.courage}</span>
                    </div>
                    <div class="stat-row">
                        <span class="stat-label">Compassion</span>
                        <div class="stat-bar"><div class="stat-fill compassion" style="width: ${Math.min(playerStats.compassion * 10, 100)}%"></div></div>
                        <span class="stat-value">${playerStats.compassion}</span>
                    </div>
                    <div class="stat-row">
                        <span class="stat-label">Pragmatism</span>
                        <div class="stat-bar"><div class="stat-fill pragmatism" style="width: ${Math.min(playerStats.pragmatism * 10, 100)}%"></div></div>
                        <span class="stat-value">${playerStats.pragmatism}</span>
                    </div>
                    <div class="stat-row">
                        <span class="stat-label">Isolation</span>
                        <div class="stat-bar"><div class="stat-fill isolation" style="width: ${Math.min(playerStats.isolation * 10, 100)}%"></div></div>
                        <span class="stat-value">${playerStats.isolation}</span>
                    </div>
                </div>
            </div>

            <div class="stats-section relationships">
                <h4>RELATIONSHIPS</h4>
                ${Object.entries(relationshipStats).map(([char, stats]) => {
                    if (!stats.met) return '';
                    const data = CHARACTER_DATA[char];
                    return `
                        <div class="character-card" style="border-color: ${data.color}">
                            <div class="char-header">
                                <span class="char-portrait">${data.portrait}</span>
                                <div class="char-info">
                                    <span class="char-name">${data.name}</span>
                                    <span class="char-title">${data.title}</span>
                                </div>
                            </div>
                            <div class="char-stats">
                                ${Object.entries(stats).filter(([k]) => k !== 'met').map(([stat, val]) => `
                                    <div class="mini-stat">
                                        <span>${stat}</span>
                                        <span>${val}</span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `;
                }).join('')}
                ${charactersMetThisRun.size === 0 ? '<p class="no-chars">No characters met yet</p>' : ''}
            </div>

            <div class="stats-section seeds">
                <h4>SEEDS COLLECTED</h4>
                <div class="seed-progress">
                    <div class="progress-ring">
                        <span class="progress-number">${progress.collected}/${progress.total}</span>
                    </div>
                    <div class="seed-list">
                        ${progress.tiers.map(tier => `<span class="tier-tag tier-${tier}">${tier}</span>`).join('')}
                    </div>
                </div>
                ${progress.secrets > 0 ? `<div class="secrets-badge">✧ ${progress.secrets} SECRET${progress.secrets > 1 ? 'S' : ''}</div>` : ''}
            </div>

            <div class="stats-footer">
                <button class="seed-import-btn" onclick="showSeedImport()">IMPORT SEED</button>
                <button class="seed-export-btn" onclick="exportSeeds()">EXPORT ALL</button>
            </div>
        </div>

        <button class="stats-toggle-btn" id="stats-toggle" onclick="toggleStats()">
            <span class="stats-icon">📊</span>
            <span class="stats-label">STATS</span>
        </button>
    `;
}

// Stats panel toggle function
function toggleStats() {
    const panel = document.getElementById('stats-panel');
    if (panel) {
        panel.classList.toggle('open');
    }
}

// Seed import modal
function showSeedImport() {
    const modal = document.createElement('div');
    modal.className = 'seed-modal';
    modal.innerHTML = `
        <div class="seed-modal-content">
            <h3>IMPORT SEED</h3>
            <p>Enter a seed to unlock content:</p>
            <input type="text" id="seed-import-input" placeholder="DS-XXXXX-XXXXXXXXXX-XX" />
            <div class="modal-buttons">
                <button onclick="submitSeedImport()">REDEEM</button>
                <button onclick="closeSeedModal()">CANCEL</button>
            </div>
            <div id="seed-import-result"></div>
        </div>
    `;
    document.body.appendChild(modal);
}

function submitSeedImport() {
    const input = document.getElementById('seed-import-input');
    const result = document.getElementById('seed-import-result');
    const validated = SeedVault.importSeed(input.value);

    if (validated) {
        result.innerHTML = `<span class="success">✓ Unlocked: ${validated.name}</span>`;
        setTimeout(closeSeedModal, 1500);
    } else {
        result.innerHTML = `<span class="error">Invalid seed</span>`;
    }
}

function closeSeedModal() {
    const modal = document.querySelector('.seed-modal');
    if (modal) modal.remove();
}

function exportSeeds() {
    const seeds = SeedVault.exportSeeds();
    navigator.clipboard.writeText(seeds);
    alert('Seeds copied to clipboard!');
}

// ═══════════════════════════════════════════════════════════════
// ADMIN SEED MANAGER (Ellie's Panel)
// ═══════════════════════════════════════════════════════════════

const AdminPanel = {
    isActive: false,
    adminCode: window.ADMIN_CODE || '',
    adminName: 'Ellie',

    // Check if input is admin code
    checkAdminAccess(input) {
        if (input.toLowerCase() === this.adminCode) {
            this.isActive = true;
            this.showAdminPanel();
            return true;
        }
        return false;
    },

    // Show admin panel
    showAdminPanel() {
        const panel = document.createElement('div');
        panel.className = 'admin-panel';
        panel.id = 'admin-panel';
        panel.innerHTML = `
            <div class="admin-content">
                <div class="admin-header">
                    <h2>🔮 SEED MANAGER</h2>
                    <p>Welcome, ${this.adminName}</p>
                    <button class="admin-close" onclick="AdminPanel.close()">×</button>
                </div>

                <div class="admin-section">
                    <h3>GENERATE SEEDS</h3>
                    <div class="seed-generator">
                        <select id="admin-ending-select">
                            ${Object.entries(ENDING_SEEDS).map(([num, data]) =>
                                `<option value="${num}">${data.name} (${data.code})</option>`
                            ).join('')}
                        </select>
                        <button onclick="AdminPanel.generateSeed()">GENERATE</button>
                    </div>
                    <div id="admin-generated-seed" class="generated-seed"></div>
                </div>

                <div class="admin-section">
                    <h3>ALL SEEDS IN VAULT</h3>
                    <div class="seed-vault-list" id="admin-seed-list">
                        ${this.renderSeedList()}
                    </div>
                </div>

                <div class="admin-section">
                    <h3>QUICK ACTIONS</h3>
                    <div class="admin-actions">
                        <button onclick="AdminPanel.grantAllSeeds()">GRANT ALL SEEDS</button>
                        <button onclick="AdminPanel.grantSecrets()">GRANT SECRETS</button>
                        <button onclick="AdminPanel.resetVault()">RESET VAULT</button>
                        <button onclick="AdminPanel.exportVaultJSON()">EXPORT JSON</button>
                    </div>
                </div>

                <div class="admin-section stats-section">
                    <h3>📊 DEEP ANALYTICS</h3>
                    <p class="section-desc">Hyper-granular stats, psychological profiling, media comparisons</p>
                    <div class="admin-actions">
                        <button class="stats-launch-btn" onclick="AdminPanel.showStatsInterrogation()">🔬 ELLIE'S DEEP DIVE</button>
                    </div>
                </div>

                <div class="admin-section">
                    <h3>PLAYER STATS OVERRIDE</h3>
                    <div class="stats-override">
                        <label>Courage: <input type="number" id="override-courage" value="${RunState.playerStats.courage}"></label>
                        <label>Compassion: <input type="number" id="override-compassion" value="${RunState.playerStats.compassion}"></label>
                        <label>Pragmatism: <input type="number" id="override-pragmatism" value="${RunState.playerStats.pragmatism}"></label>
                        <label>Isolation: <input type="number" id="override-isolation" value="${RunState.playerStats.isolation}"></label>
                        <button onclick="AdminPanel.applyStatsOverride()">APPLY</button>
                    </div>
                </div>

                <div class="admin-section">
                    <h3>DEBUG INFO</h3>
                    <div class="debug-info">
                        <pre>${JSON.stringify({
                            currentSection: 'N/A',
                            choicesMade: RunState.choices.length,
                            charactersmet: Array.from(RunState.charactersMetThisRun),
                            progress: SeedVault.getProgress()
                        }, null, 2)}</pre>
                    </div>
                </div>

                <div class="admin-footer">
                    <span class="admin-badge">🐄 SEACOW ADMIN ACCESS</span>
                </div>
            </div>
        `;
        document.body.appendChild(panel);
    },

    renderSeedList() {
        const seeds = SeedVault.getSeeds();
        if (seeds.length === 0) return '<p class="empty">No seeds collected yet</p>';

        return seeds.map(seed => {
            const info = validateSeed(seed);
            return `
                <div class="seed-item">
                    <code>${seed}</code>
                    <span class="seed-name">${info?.name || 'Unknown'}</span>
                    <button onclick="AdminPanel.removeSeed('${seed}')">×</button>
                </div>
            `;
        }).join('');
    },

    generateSeed() {
        const select = document.getElementById('admin-ending-select');
        const endingNum = parseInt(select.value);
        const seed = generateEndingSeed(endingNum);
        const display = document.getElementById('admin-generated-seed');

        display.innerHTML = `
            <div class="generated">
                <code onclick="navigator.clipboard.writeText('${seed}')">${seed}</code>
                <span>Click to copy</span>
                <button onclick="AdminPanel.addGeneratedSeed('${seed}')">ADD TO VAULT</button>
            </div>
        `;
    },

    addGeneratedSeed(seed) {
        SeedVault.addSeed(seed);
        this.refreshSeedList();
    },

    removeSeed(seed) {
        const seeds = SeedVault.getSeeds().filter(s => s !== seed);
        localStorage.setItem(SeedVault.STORAGE_KEY, JSON.stringify(seeds));
        this.refreshSeedList();
    },

    refreshSeedList() {
        const list = document.getElementById('admin-seed-list');
        if (list) list.innerHTML = this.renderSeedList();
    },

    grantAllSeeds() {
        for (const num of Object.keys(ENDING_SEEDS)) {
            if (!ENDING_SEEDS[num].secret) {
                const seed = generateEndingSeed(parseInt(num));
                SeedVault.addSeed(seed);
            }
        }
        this.refreshSeedList();
        alert('All non-secret seeds granted!');
    },

    grantSecrets() {
        for (const num of Object.keys(ENDING_SEEDS)) {
            if (ENDING_SEEDS[num].secret) {
                const seed = generateEndingSeed(parseInt(num));
                SeedVault.addSeed(seed);
            }
        }
        this.refreshSeedList();
        alert('Secret seeds granted!');
    },

    resetVault() {
        if (confirm('Are you sure? This will delete ALL collected seeds.')) {
            SeedVault.reset();
            this.refreshSeedList();
            alert('Vault reset!');
        }
    },

    exportVaultJSON() {
        const data = {
            seeds: SeedVault.getSeeds(),
            progress: SeedVault.getProgress(),
            runState: {
                playerStats: RunState.playerStats,
                choices: RunState.choices.length
            },
            exportedAt: new Date().toISOString(),
            exportedBy: this.adminName
        };
        navigator.clipboard.writeText(JSON.stringify(data, null, 2));
        alert('Vault data copied as JSON!');
    },

    applyStatsOverride() {
        RunState.playerStats.courage = parseInt(document.getElementById('override-courage').value) || 0;
        RunState.playerStats.compassion = parseInt(document.getElementById('override-compassion').value) || 0;
        RunState.playerStats.pragmatism = parseInt(document.getElementById('override-pragmatism').value) || 0;
        RunState.playerStats.isolation = parseInt(document.getElementById('override-isolation').value) || 0;
        alert('Stats updated!');
    },

    close() {
        const panel = document.getElementById('admin-panel');
        if (panel) panel.remove();
    },

    // ═══════════════════════════════════════════════════════════════
    // NARRATIVE ASSEMBLY ENGINE - "Back of Book" Story Summary
    // ═══════════════════════════════════════════════════════════════

    generateNarrativeSummary() {
        const stats = RunState.playerStats;
        const relationships = RunState.relationshipStats;
        const choices = RunState.choices;
        const seeds = SeedVault.getSeeds();
        const validated = seeds.map(validateSeed).filter(Boolean);

        // Determine protagonist archetype
        const archetype = this.determineArchetype(stats);

        // Build "what happened" narrative
        const pastNarrative = this.buildPastNarrative(choices, relationships);

        // Build "where it's going" based on stats and seeds
        const futureNarrative = this.buildFutureNarrative(stats, validated, relationships);

        // Build relationship summary
        const relationshipSummary = this.buildRelationshipSummary(relationships);

        return `
            <div class="narrative-brief">
                <div class="brief-header">
                    <h2>📖 THE STORY SO FAR</h2>
                    <span class="archetype-badge">${archetype.name}</span>
                </div>

                <div class="brief-section past">
                    <h3>WHAT HAS BEEN</h3>
                    <p class="narrative-text">${pastNarrative}</p>
                </div>

                <div class="brief-section relationships">
                    <h3>BONDS FORGED</h3>
                    <p class="narrative-text">${relationshipSummary}</p>
                </div>

                <div class="brief-section future">
                    <h3>WHAT MAY COME</h3>
                    <p class="narrative-text">${futureNarrative}</p>
                </div>

                <div class="brief-section paths">
                    <h3>PATHS UNLOCKED</h3>
                    <div class="path-grid">
                        ${this.renderAvailablePaths(validated)}
                    </div>
                </div>

                <div class="brief-footer">
                    <em>"Every choice echoes. Every ending seeds another beginning."</em>
                </div>
            </div>
        `;
    },

    determineArchetype(stats) {
        const archetypes = {
            protector: { name: "THE PROTECTOR", req: s => s.compassion > s.pragmatism && s.courage > 3 },
            survivor: { name: "THE SURVIVOR", req: s => s.pragmatism > s.compassion && s.isolation > 2 },
            warrior: { name: "THE WARRIOR", req: s => s.courage > 5 },
            hermit: { name: "THE HERMIT", req: s => s.isolation > 4 },
            diplomat: { name: "THE DIPLOMAT", req: s => s.compassion > 4 && s.courage > 2 },
            ghost: { name: "THE GHOST", req: s => Object.values(s).every(v => v < 3) }
        };

        for (const [key, arch] of Object.entries(archetypes)) {
            if (arch.req(stats)) return arch;
        }
        return { name: "THE SURVIVOR" };
    },

    buildPastNarrative(choices, relationships) {
        const fragments = [];

        // Opening based on how far they've gotten
        if (choices.length === 0) {
            return "The story has not yet begun. Seoul waits, holding its breath before the first scream.";
        }

        fragments.push("When the world ended, Yuna Kim was alone in her apartment.");

        // Check for key decision points
        const visitedSections = choices.map(c => c.section);

        if (visitedSections.includes(2)) {
            fragments.push("Mrs. Park gave her a key—and a legacy she never knew she carried.");
        }

        if (relationships.minho.met) {
            if (relationships.minho.romance > 2) {
                fragments.push("Minho returned, and old flames burned brighter than the infected's hunger.");
            } else {
                fragments.push("Her ex-boyfriend appeared from the chaos—proving some bonds survive even the apocalypse.");
            }
        }

        if (relationships.soojin.met) {
            if (relationships.soojin.respect > 2) {
                fragments.push("Soojin saw a warrior hiding inside a civilian's skin.");
            } else {
                fragments.push("A soldier named Soojin offered a path out—for those brave enough to take it.");
            }
        }

        if (relationships.yoo.met) {
            fragments.push("Colonel Yoo brought structure to chaos—and complications to the heart.");
        }

        if (visitedSections.includes(45)) {
            fragments.push("She discovered the truth: Project CHIMERA. The infection wasn't nature—it was us.");
        }

        if (visitedSections.includes(52)) {
            fragments.push("In the depths beneath Yongsan, she found Generation Zero—the first. The source. The prisoners who started it all.");
        }

        return fragments.join(" ");
    },

    buildFutureNarrative(stats, completedEndings, relationships) {
        const fragments = [];
        const tiers = completedEndings.map(e => e.tier);

        // Based on current stats, predict likely paths
        if (stats.compassion > stats.pragmatism) {
            fragments.push("Her heart pulls toward salvation—not escape, but redemption.");
        } else if (stats.isolation > 3) {
            fragments.push("Solitude whispers its seductive promise: survival without sacrifice.");
        } else if (stats.courage > 4) {
            fragments.push("The fight calls to her. Not for herself, but for everyone left behind.");
        }

        // Based on unlocked content, hint at possibilities
        if (!tiers.includes("redemption")) {
            fragments.push("Somewhere in the files, a cure waits to be found.");
        }

        if (!tiers.includes("transcendence")) {
            fragments.push("The resonance between infected minds could be more than horror—it could be hope.");
        }

        if (!tiers.includes("love") && relationships.minho.romance > 0) {
            fragments.push("Minho's eyes hold a question she hasn't answered yet.");
        }

        if (relationships.soojin.met && !tiers.includes("freedom")) {
            fragments.push("Soojin knows a way to freedom—but freedom always costs something.");
        }

        if (tiers.length >= 3) {
            fragments.push("She's lived this before. Died before. Loved and lost before. The loop is tightening.");
        }

        return fragments.length > 0
            ? fragments.join(" ")
            : "The path ahead is unwritten. Every choice will shape what comes next.";
    },

    buildRelationshipSummary(relationships) {
        const summaries = [];

        if (relationships.minho.met) {
            if (relationships.minho.romance > 3) {
                summaries.push("Minho: The fire between them burns as bright as ever—maybe brighter, tempered by loss.");
            } else if (relationships.minho.trust > 2) {
                summaries.push("Minho: Trust rebuilt slowly, brick by careful brick.");
            } else if (relationships.minho.met) {
                summaries.push("Minho: An uneasy reconnection. The past isn't easily buried.");
            }
        }

        if (relationships.soojin.met) {
            if (relationships.soojin.respect > 3) {
                summaries.push("Soojin: A bond forged in blood and battle. Sisters in arms.");
            } else {
                summaries.push("Soojin: Mutual wariness, slowly thawing into something more.");
            }
        }

        if (relationships.yoo.met) {
            if (relationships.yoo.desire > 2) {
                summaries.push("Colonel Yoo: Dangerous attraction. Power and desire tangled together.");
            } else {
                summaries.push("Colonel Yoo: A complicated ally with complicated motives.");
            }
        }

        if (relationships.mrs_park.met && relationships.mrs_park.bond > 0) {
            summaries.push("Mrs. Park: A guardian angel in combat boots. Her sacrifice echoes.");
        }

        return summaries.length > 0
            ? summaries.join(" || ")
            : "No bonds yet formed. The dead are the only company.";
    },

    renderAvailablePaths(completedEndings) {
        const completedCodes = completedEndings.map(e => e.code);
        const paths = [
            { name: "Love", icon: "❤️", requires: null, unlocked: true },
            { name: "Duty", icon: "📻", requires: null, unlocked: true },
            { name: "War", icon: "⚔️", requires: null, unlocked: true },
            { name: "Truth", icon: "📖", requires: "DSPCH", unlocked: completedCodes.includes("DSPCH") },
            { name: "Cure", icon: "💉", requires: "DSPCH", unlocked: completedCodes.includes("DSPCH") },
            { name: "Resonance", icon: "🔮", requires: "CURE_", unlocked: completedCodes.includes("CURE_") },
            { name: "Coalition", icon: "🤝", requires: "SURVV", unlocked: completedCodes.includes("SURVV") },
            { name: "Gen Zero", icon: "👁️", secret: true, requires: ["CURE_", "RSNCE"], unlocked: completedCodes.includes("RSNCE") },
            { name: "The Loop", icon: "∞", secret: true, requires: ["DSPCH", "COLTN", "SURVV"], unlocked: completedCodes.includes("COLTN") }
        ];

        return paths.map(p => `
            <div class="path-card ${p.unlocked ? 'unlocked' : 'locked'} ${p.secret ? 'secret' : ''}">
                <span class="path-icon">${p.icon}</span>
                <span class="path-name">${p.unlocked ? p.name : '???'}</span>
                ${p.secret && p.unlocked ? '<span class="secret-star">✧</span>' : ''}
            </div>
        `).join('');
    }
};

// Add narrative brief to admin panel
const originalShowAdminPanel = AdminPanel.showAdminPanel;
AdminPanel.showAdminPanel = function() {
    originalShowAdminPanel.call(this);

    // Add narrative section after a brief delay
    setTimeout(() => {
        const adminContent = document.querySelector('.admin-content');
        if (adminContent) {
            const narrativeSection = document.createElement('div');
            narrativeSection.className = 'admin-section narrative';
            narrativeSection.innerHTML = `
                <h3>📖 NARRATIVE BRIEF</h3>
                <button class="generate-brief-btn" onclick="AdminPanel.showNarrativeBrief()">GENERATE STORY SUMMARY</button>
                <div id="narrative-brief-container"></div>
            `;
            adminContent.insertBefore(narrativeSection, document.querySelector('.admin-footer'));
        }
    }, 100);
};

AdminPanel.showNarrativeBrief = function() {
    const container = document.getElementById('narrative-brief-container');
    if (container) {
        container.innerHTML = this.generateNarrativeSummary();
    }
}

// ═══════════════════════════════════════════════════════════════════════════════════
// HYPER-GRANULAR STATS INTERROGATION SYSTEM
// "Ellie's Deep Dive" - Per-seed and global analytics
// ═══════════════════════════════════════════════════════════════════════════════════

const GameStats = {
    STORAGE_KEY: 'dead_seoul_analytics',

    // Reading speed assumptions (words per minute)
    READING_SPEEDS: {
        slow: 150,
        average: 200,    // Freshman college level
        fast: 300,
        speedReader: 450
    },

    // Media comparisons
    COMPARISONS: {
        book: {
            avgWordsPerPage: 250,
            avgPagesPerNovel: 300,
            examples: [
                { title: "The Road (Cormac McCarthy)", pages: 287 },
                { title: "World War Z", pages: 342 },
                { title: "I Am Legend", pages: 160 },
                { title: "Station Eleven", pages: 333 },
                { title: "The Stand (uncut)", pages: 1152 }
            ]
        },
        tv: {
            avgMinutesPerEpisode: 45,
            examples: [
                { title: "Kingdom (Netflix)", episodes: 12, genre: "Korean zombie" },
                { title: "The Walking Dead S1", episodes: 6, genre: "Zombie drama" },
                { title: "Sweet Home", episodes: 10, genre: "Korean horror" },
                { title: "All of Us Are Dead", episodes: 12, genre: "Korean zombie" },
                { title: "The Last of Us S1", episodes: 9, genre: "Post-apocalypse" }
            ]
        },
        game: {
            examples: [
                { title: "Telltale Walking Dead S1", hours: 10, choices: 400 },
                { title: "Until Dawn", hours: 8, choices: 180 },
                { title: "Detroit: Become Human", hours: 12, choices: 1000 },
                { title: "Life is Strange", hours: 15, choices: 350 },
                { title: "Bandersnatch", hours: 1.5, choices: 150 }
            ]
        }
    },

    // Psychological profiling based on choice patterns
    CHOICE_PROFILES: {
        fight_or_flight: {
            fight: ["stood ground", "attacked", "defended", "confronted", "charged"],
            flight: ["ran", "hid", "escaped", "avoided", "retreated"]
        },
        self_vs_others: {
            selfless: ["helped", "saved", "sacrificed", "shared", "protected"],
            selfish: ["alone", "took", "abandoned", "hoarded", "prioritized self"]
        },
        trust: {
            trusting: ["believed", "followed", "joined", "confided", "partnered"],
            suspicious: ["questioned", "doubted", "refused", "went alone", "tested"]
        },
        morality: {
            moral: ["right thing", "couldn't", "mercy", "ethical", "human"],
            pragmatic: ["necessary", "survival", "realistic", "had to", "no choice"]
        }
    },

    // Initialize or load analytics
    init() {
        const stored = localStorage.getItem(this.STORAGE_KEY);
        if (stored) {
            return JSON.parse(stored);
        }
        return this.createFreshAnalytics();
    },

    createFreshAnalytics() {
        return {
            globalStats: {
                firstPlayDate: null,
                totalPlaythroughs: 0,
                totalTimeSpentMs: 0,
                totalWordsRead: 0,
                totalChoicesMade: 0,
                totalEndings: 0,
                uniqueEndingsReached: [],
                totalSectionsVisited: 0,
                uniqueSectionsVisited: new Set(),
                longestStreak: 0,
                currentStreak: 0,
                lastPlayDate: null,
                favoriteCharacter: null,
                characterInteractions: { minho: 0, soojin: 0, yoo: 0, mrs_park: 0 }
            },
            perSeedStats: {},  // Keyed by seed string
            choiceHistory: [], // All choices ever made
            sessionHistory: [] // Each play session
        };
    },

    save(data) {
        // Convert Sets to arrays for JSON
        const toSave = JSON.parse(JSON.stringify(data, (key, value) => {
            if (value instanceof Set) return [...value];
            return value;
        }));
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(toSave));
    },

    // Record a playthrough completion
    recordPlaythrough(seed, runState, duration) {
        const data = this.init();
        const seedInfo = validateSeed(seed);

        if (!data.globalStats.firstPlayDate) {
            data.globalStats.firstPlayDate = new Date().toISOString();
        }

        data.globalStats.totalPlaythroughs++;
        data.globalStats.totalTimeSpentMs += duration;
        data.globalStats.totalChoicesMade += runState.choices.length;
        data.globalStats.lastPlayDate = new Date().toISOString();

        if (seedInfo && !data.globalStats.uniqueEndingsReached.includes(seedInfo.code)) {
            data.globalStats.uniqueEndingsReached.push(seedInfo.code);
            data.globalStats.totalEndings++;
        }

        // Per-seed stats
        data.perSeedStats[seed] = {
            endingInfo: seedInfo,
            completedAt: new Date().toISOString(),
            duration: duration,
            choices: [...runState.choices],
            finalStats: { ...runState.playerStats },
            relationships: JSON.parse(JSON.stringify(runState.relationshipStats)),
            sectionsVisited: [...runState.sectionsVisited || []],
            wordsRead: this.estimateWordsRead(runState.sectionsVisited || []),
            psychProfile: this.generatePsychProfile(runState.choices)
        };

        // Update character interactions
        if (runState.relationshipStats.minho.met) data.globalStats.characterInteractions.minho++;
        if (runState.relationshipStats.soojin.met) data.globalStats.characterInteractions.soojin++;
        if (runState.relationshipStats.yoo.met) data.globalStats.characterInteractions.yoo++;
        if (runState.relationshipStats.mrs_park.met) data.globalStats.characterInteractions.mrs_park++;

        this.save(data);
        return data;
    },

    estimateWordsRead(sectionsVisited) {
        // Average words per section (rough estimate)
        const AVG_WORDS_PER_SECTION = 350;
        return sectionsVisited.length * AVG_WORDS_PER_SECTION;
    },

    generatePsychProfile(choices) {
        const profile = {
            fightFlight: { fight: 0, flight: 0 },
            selfOthers: { selfless: 0, selfish: 0 },
            trust: { trusting: 0, suspicious: 0 },
            morality: { moral: 0, pragmatic: 0 }
        };

        // Analyze choice text for keywords
        choices.forEach(choice => {
            const text = (choice.choiceText || '').toLowerCase();

            // Fight vs Flight
            if (this.CHOICE_PROFILES.fight_or_flight.fight.some(k => text.includes(k))) profile.fightFlight.fight++;
            if (this.CHOICE_PROFILES.fight_or_flight.flight.some(k => text.includes(k))) profile.fightFlight.flight++;

            // Self vs Others
            if (this.CHOICE_PROFILES.self_vs_others.selfless.some(k => text.includes(k))) profile.selfOthers.selfless++;
            if (this.CHOICE_PROFILES.self_vs_others.selfish.some(k => text.includes(k))) profile.selfOthers.selfish++;

            // Trust
            if (this.CHOICE_PROFILES.trust.trusting.some(k => text.includes(k))) profile.trust.trusting++;
            if (this.CHOICE_PROFILES.trust.suspicious.some(k => text.includes(k))) profile.trust.suspicious++;

            // Morality
            if (this.CHOICE_PROFILES.morality.moral.some(k => text.includes(k))) profile.morality.moral++;
            if (this.CHOICE_PROFILES.morality.pragmatic.some(k => text.includes(k))) profile.morality.pragmatic++;
        });

        return profile;
    },

    // Calculate global analytics summary
    getGlobalSummary() {
        const data = this.init();
        const g = data.globalStats;
        const totalWords = Object.values(data.perSeedStats).reduce((sum, s) => sum + (s.wordsRead || 0), 0);
        const totalTime = g.totalTimeSpentMs || 0;

        return {
            // Time stats
            totalPlaytime: this.formatDuration(totalTime),
            totalPlaytimeMs: totalTime,
            avgPlaytimePerRun: g.totalPlaythroughs > 0
                ? this.formatDuration(totalTime / g.totalPlaythroughs)
                : "0m",

            // Content stats
            totalWordsRead: totalWords,
            totalPagesEquivalent: Math.round(totalWords / this.COMPARISONS.book.avgWordsPerPage),
            totalChoices: g.totalChoicesMade,
            choicesPerPlaythrough: g.totalPlaythroughs > 0
                ? Math.round(g.totalChoicesMade / g.totalPlaythroughs)
                : 0,

            // Progress stats
            playthroughs: g.totalPlaythroughs,
            uniqueEndings: g.uniqueEndingsReached?.length || 0,
            totalEndings: Object.keys(ENDING_SEEDS).filter(k => !ENDING_SEEDS[k].secret).length,
            completionPercent: Math.round(((g.uniqueEndingsReached?.length || 0) / 13) * 100),

            // Character stats
            favoriteCharacter: this.determineFavoriteCharacter(g.characterInteractions),
            characterBreakdown: g.characterInteractions,

            // Streak
            currentStreak: g.currentStreak || 0,
            longestStreak: g.longestStreak || 0,

            // Dates
            firstPlay: g.firstPlayDate ? new Date(g.firstPlayDate).toLocaleDateString() : "Never",
            lastPlay: g.lastPlayDate ? new Date(g.lastPlayDate).toLocaleDateString() : "Never",
            daysSinceFirst: g.firstPlayDate
                ? Math.floor((Date.now() - new Date(g.firstPlayDate).getTime()) / (1000 * 60 * 60 * 24))
                : 0
        };
    },

    determineFavoriteCharacter(interactions) {
        const sorted = Object.entries(interactions || {}).sort((a, b) => b[1] - a[1]);
        if (sorted.length === 0 || sorted[0][1] === 0) return "None yet";

        const names = {
            minho: "Minho (The Ex)",
            soojin: "Soojin (The Soldier)",
            yoo: "Colonel Yoo (The Commander)",
            mrs_park: "Mrs. Park (The Guardian)"
        };
        return names[sorted[0][0]] || sorted[0][0];
    },

    formatDuration(ms) {
        const hours = Math.floor(ms / 3600000);
        const minutes = Math.floor((ms % 3600000) / 60000);
        if (hours > 0) return `${hours}h ${minutes}m`;
        return `${minutes}m`;
    },

    // Generate fun facts and comparisons
    generateFunFacts(summary) {
        const facts = [];

        // Book comparisons
        const pages = summary.totalPagesEquivalent;
        if (pages > 0) {
            const bookMatch = this.COMPARISONS.book.examples.find(b => pages >= b.pages * 0.8);
            if (bookMatch) {
                facts.push({
                    icon: "📚",
                    category: "READING",
                    fact: `You've read ${pages} pages worth of content`,
                    comparison: `That's like finishing "${bookMatch.title}"!`
                });
            } else if (pages > 50) {
                facts.push({
                    icon: "📚",
                    category: "READING",
                    fact: `You've read ${pages} pages of DEAD SEOUL`,
                    comparison: `${Math.round(pages / 250 * 100)}% of a standard novel`
                });
            }
        }

        // Time comparisons to TV
        const minutes = summary.totalPlaytimeMs / 60000;
        if (minutes > 30) {
            const episodes = Math.round(minutes / 45 * 10) / 10;
            const showMatch = this.COMPARISONS.tv.examples.find(s => episodes >= s.episodes * 0.5);
            facts.push({
                icon: "📺",
                category: "BINGE TIME",
                fact: `${Math.round(minutes)} minutes invested in Seoul's fate`,
                comparison: showMatch
                    ? `Equivalent to ${episodes} episodes of "${showMatch.title}"`
                    : `That's ${episodes} TV episodes worth`
            });
        }

        // Choice comparisons to games
        if (summary.totalChoices > 10) {
            const gameMatch = this.COMPARISONS.game.examples.find(g =>
                summary.totalChoices >= g.choices * 0.3
            );
            facts.push({
                icon: "🎮",
                category: "DECISIONS",
                fact: `${summary.totalChoices} choices that shaped your Seoul`,
                comparison: gameMatch
                    ? `That's ${Math.round(summary.totalChoices / gameMatch.choices * 100)}% of all choices in "${gameMatch.title}"`
                    : `More decisive than most visual novel players`
            });
        }

        // Unique insights
        if (summary.playthroughs > 1) {
            facts.push({
                icon: "🔄",
                category: "DEDICATION",
                fact: `${summary.playthroughs} playthroughs completed`,
                comparison: `You've lived ${summary.playthroughs} different apocalypses`
            });
        }

        if (summary.completionPercent > 0) {
            facts.push({
                icon: "🏆",
                category: "COMPLETION",
                fact: `${summary.uniqueEndings} of ${summary.totalEndings} endings discovered`,
                comparison: summary.completionPercent >= 100
                    ? "COMPLETIONIST ACHIEVED"
                    : `${100 - summary.completionPercent}% of Seoul's fates remain hidden`
            });
        }

        return facts;
    },

    // Get detailed stats for a specific seed
    getSeedStats(seed) {
        const data = this.init();
        const seedStats = data.perSeedStats[seed];
        if (!seedStats) return null;

        const profile = seedStats.psychProfile;

        return {
            ...seedStats,

            // Formatted duration
            playTime: this.formatDuration(seedStats.duration),

            // Word stats
            wordsRead: seedStats.wordsRead,
            pagesRead: Math.round(seedStats.wordsRead / 250),
            readingTime: Math.round(seedStats.wordsRead / 200), // Minutes at avg speed

            // Choice analysis
            totalChoices: seedStats.choices.length,
            decisiveness: this.calculateDecisiveness(seedStats.choices),

            // Psychological profile interpretation
            psychAnalysis: {
                combatStyle: profile.fightFlight.fight > profile.fightFlight.flight
                    ? { label: "FIGHTER", desc: "You face danger head-on", ratio: `${profile.fightFlight.fight}:${profile.fightFlight.flight}` }
                    : { label: "SURVIVOR", desc: "You choose battles wisely", ratio: `${profile.fightFlight.flight}:${profile.fightFlight.fight}` },

                socialStyle: profile.selfOthers.selfless > profile.selfOthers.selfish
                    ? { label: "PROTECTOR", desc: "Others come first", ratio: `${profile.selfOthers.selfless}:${profile.selfOthers.selfish}` }
                    : { label: "PRAGMATIST", desc: "Survival requires sacrifice", ratio: `${profile.selfOthers.selfish}:${profile.selfOthers.selfless}` },

                trustStyle: profile.trust.trusting > profile.trust.suspicious
                    ? { label: "BELIEVER", desc: "You give people chances", ratio: `${profile.trust.trusting}:${profile.trust.suspicious}` }
                    : { label: "SKEPTIC", desc: "Trust is earned, not given", ratio: `${profile.trust.suspicious}:${profile.trust.trusting}` },

                moralStyle: profile.morality.moral > profile.morality.pragmatic
                    ? { label: "IDEALIST", desc: "Principles over survival", ratio: `${profile.morality.moral}:${profile.morality.pragmatic}` }
                    : { label: "REALIST", desc: "The ends justify the means", ratio: `${profile.morality.pragmatic}:${profile.morality.moral}` }
            },

            // Relationship summary
            relationships: this.formatRelationships(seedStats.relationships),

            // "Unspoken implications"
            implications: this.generateImplications(seedStats)
        };
    },

    calculateDecisiveness(choices) {
        // Mock - in reality would track time between choices
        const avgChoicesPerSection = choices.length / Math.max(1, new Set(choices.map(c => c.section)).size);
        if (avgChoicesPerSection > 1.5) return { label: "THOROUGH", desc: "You explore every option" };
        if (avgChoicesPerSection > 1) return { label: "BALANCED", desc: "Thoughtful but decisive" };
        return { label: "DECISIVE", desc: "You trust your instincts" };
    },

    formatRelationships(rel) {
        const formatted = [];

        if (rel.minho.met) {
            formatted.push({
                name: "Minho",
                status: rel.minho.romance > 3 ? "REKINDLED" : rel.minho.trust > 2 ? "TRUSTED" : "COMPLICATED",
                trust: rel.minho.trust,
                romance: rel.minho.romance,
                icon: "💔"
            });
        }

        if (rel.soojin.met) {
            formatted.push({
                name: "Soojin",
                status: rel.soojin.respect > 3 ? "SISTERS-IN-ARMS" : "ALLIES",
                trust: rel.soojin.trust,
                respect: rel.soojin.respect,
                icon: "⚔️"
            });
        }

        if (rel.yoo.met) {
            formatted.push({
                name: "Colonel Yoo",
                status: rel.yoo.desire > 2 ? "DANGEROUS ATTRACTION" : "PROFESSIONAL",
                trust: rel.yoo.trust,
                desire: rel.yoo.desire,
                icon: "🎖️"
            });
        }

        if (rel.mrs_park.met) {
            formatted.push({
                name: "Mrs. Park",
                status: rel.mrs_park.bond > 2 ? "FAMILY" : "PROTECTOR",
                bond: rel.mrs_park.bond,
                icon: "🕯️"
            });
        }

        return formatted;
    },

    generateImplications(seedStats) {
        const implications = [];
        const stats = seedStats.finalStats;
        const rel = seedStats.relationships;
        const profile = seedStats.psychProfile;

        // Deep psychological implications based on choices
        if (stats.isolation > 4) {
            implications.push({
                observation: "HIGH ISOLATION",
                implication: "You consistently chose solitude over connection. In crisis, you retreat inward.",
                realWorld: "This pattern suggests introversion under stress, or past experiences where trusting others led to harm."
            });
        }

        if (stats.compassion > stats.pragmatism + 3) {
            implications.push({
                observation: "COMPASSION DOMINANCE",
                implication: "Even when it cost you, you chose mercy. Your Yuna would die for strangers.",
                realWorld: "You may prioritize others' wellbeing at the expense of your own. Noble, but exhausting."
            });
        }

        if (profile.fightFlight.fight > profile.fightFlight.flight * 2) {
            implications.push({
                observation: "FIGHT RESPONSE",
                implication: "You chose confrontation 2:1 over retreat. Your instinct is to face, not flee.",
                realWorld: "This suggests either high confidence or difficulty backing down. Both can be strengths. Both can get you killed."
            });
        }

        if (rel.minho.romance > 3 && rel.yoo.desire > 2) {
            implications.push({
                observation: "ROMANTIC COMPLEXITY",
                implication: "You pursued connection with multiple characters. Your Yuna keeps her options open.",
                realWorld: "You may struggle with commitment, or you recognize that love in crisis is different than love in peace."
            });
        }

        if (seedStats.choices.length < 15) {
            implications.push({
                observation: "QUICK PATH",
                implication: "You reached this ending in relatively few choices. You found a direct route.",
                realWorld: "You may be goal-oriented, preferring efficiency over exploration. Or you got lucky."
            });
        }

        // Add ending-specific implications
        const ending = seedStats.endingInfo;
        if (ending) {
            const endingImplications = {
                love: "You chose love over survival. In the apocalypse, you'd rather die human than live alone.",
                duty: "You chose duty. Structures matter to you. Even burning ones.",
                escape: "You chose escape. Sometimes the only winning move is not to play.",
                mercy: "You chose mercy. Even for those who don't deserve it.",
                isolation: "You chose isolation. The safest place is the place with no one else.",
                war: "You chose war. Some things are worth fighting for, even if fighting means dying.",
                truth: "You chose truth. Knowing matters more than comfort.",
                redemption: "You chose redemption. Even at the end of the world, healing is possible.",
                transcendence: "You chose transcendence. The boundary between human and monster is thinner than we think."
            };

            if (endingImplications[ending.tier]) {
                implications.push({
                    observation: `ENDING: ${ending.name}`,
                    implication: endingImplications[ending.tier],
                    realWorld: "This ending reflects your deepest priorities when everything else is stripped away."
                });
            }
        }

        return implications;
    }
};

// ═══════════════════════════════════════════════════════════════════════════════════
// ADMIN PANEL: STATS INTERROGATION UI
// ═══════════════════════════════════════════════════════════════════════════════════

AdminPanel.showStatsInterrogation = function() {
    const summary = GameStats.getGlobalSummary();
    const funFacts = GameStats.generateFunFacts(summary);
    const data = GameStats.init();
    const seeds = Object.keys(data.perSeedStats);

    const modal = document.createElement('div');
    modal.className = 'stats-interrogation-modal';
    modal.id = 'stats-interrogation';
    modal.innerHTML = `
        <div class="stats-modal-content">
            <div class="stats-header">
                <h2>📊 ELLIE'S DEEP DIVE</h2>
                <p>Hyper-granular analytics for the obsessive</p>
                <button class="close-stats" onclick="AdminPanel.closeStatsInterrogation()">×</button>
            </div>

            <div class="stats-tabs">
                <button class="stats-tab active" onclick="AdminPanel.switchStatsTab('global')">GLOBAL STATS</button>
                <button class="stats-tab" onclick="AdminPanel.switchStatsTab('seeds')">SEED ANALYSIS</button>
                <button class="stats-tab" onclick="AdminPanel.switchStatsTab('archetype')">ARCHETYPE</button>
                <button class="stats-tab" onclick="AdminPanel.switchStatsTab('compare')">MEDIA COMPARE</button>
            </div>

            <div class="stats-content" id="stats-content">
                ${this.renderGlobalStats(summary, funFacts)}
            </div>

            <div class="stats-footer">
                <span>🐄 Data collected with love by SEACOW Analytics</span>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
};

AdminPanel.closeStatsInterrogation = function() {
    const modal = document.getElementById('stats-interrogation');
    if (modal) modal.remove();
};

AdminPanel.switchStatsTab = function(tab) {
    // Update tab buttons
    document.querySelectorAll('.stats-tab').forEach(t => t.classList.remove('active'));
    event.target.classList.add('active');

    const content = document.getElementById('stats-content');
    const summary = GameStats.getGlobalSummary();
    const funFacts = GameStats.generateFunFacts(summary);

    switch(tab) {
        case 'global':
            content.innerHTML = this.renderGlobalStats(summary, funFacts);
            break;
        case 'seeds':
            content.innerHTML = this.renderSeedAnalysis();
            break;
        case 'archetype':
            content.innerHTML = this.renderArchetype();
            break;
        case 'compare':
            content.innerHTML = this.renderMediaComparison(summary);
            break;
    }
};

AdminPanel.renderGlobalStats = function(summary, funFacts) {
    return `
        <div class="global-stats-grid">
            <div class="stat-card primary">
                <div class="stat-icon">⏱️</div>
                <div class="stat-value">${summary.totalPlaytime}</div>
                <div class="stat-label">Total Time in Seoul</div>
                <div class="stat-sub">Avg: ${summary.avgPlaytimePerRun} per run</div>
            </div>

            <div class="stat-card">
                <div class="stat-icon">📖</div>
                <div class="stat-value">${summary.totalWordsRead.toLocaleString()}</div>
                <div class="stat-label">Words Read</div>
                <div class="stat-sub">${summary.totalPagesEquivalent} pages equivalent</div>
            </div>

            <div class="stat-card">
                <div class="stat-icon">🔀</div>
                <div class="stat-value">${summary.totalChoices}</div>
                <div class="stat-label">Choices Made</div>
                <div class="stat-sub">${summary.choicesPerPlaythrough} avg per run</div>
            </div>

            <div class="stat-card">
                <div class="stat-icon">🔄</div>
                <div class="stat-value">${summary.playthroughs}</div>
                <div class="stat-label">Playthroughs</div>
                <div class="stat-sub">${summary.playthroughs === 1 ? 'First journey' : 'Veteran survivor'}</div>
            </div>

            <div class="stat-card accent">
                <div class="stat-icon">🏆</div>
                <div class="stat-value">${summary.uniqueEndings}/${summary.totalEndings}</div>
                <div class="stat-label">Endings Discovered</div>
                <div class="stat-sub">${summary.completionPercent}% Complete</div>
            </div>

            <div class="stat-card">
                <div class="stat-icon">❤️</div>
                <div class="stat-value">${summary.favoriteCharacter.split(' ')[0]}</div>
                <div class="stat-label">Most Encountered</div>
                <div class="stat-sub">${summary.favoriteCharacter}</div>
            </div>
        </div>

        <div class="fun-facts-section">
            <h3>📊 FUN FACTS</h3>
            <div class="fun-facts-grid">
                ${funFacts.map(f => `
                    <div class="fun-fact-card">
                        <span class="fact-icon">${f.icon}</span>
                        <span class="fact-category">${f.category}</span>
                        <p class="fact-main">${f.fact}</p>
                        <p class="fact-comparison">${f.comparison}</p>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="timeline-section">
            <h3>📅 YOUR JOURNEY</h3>
            <div class="timeline-stats">
                <div class="timeline-item">
                    <span class="tl-label">First Play:</span>
                    <span class="tl-value">${summary.firstPlay}</span>
                </div>
                <div class="timeline-item">
                    <span class="tl-label">Last Play:</span>
                    <span class="tl-value">${summary.lastPlay}</span>
                </div>
                <div class="timeline-item">
                    <span class="tl-label">Days Since Start:</span>
                    <span class="tl-value">${summary.daysSinceFirst}</span>
                </div>
            </div>
        </div>
    `;
};

AdminPanel.renderSeedAnalysis = function() {
    const data = GameStats.init();
    const seeds = Object.keys(data.perSeedStats);

    if (seeds.length === 0) {
        return `
            <div class="no-seeds-message">
                <p>🌱 No completed playthroughs recorded yet.</p>
                <p>Finish a playthrough to see detailed seed analysis.</p>
            </div>
        `;
    }

    return `
        <div class="seed-selector">
            <h3>🔍 SELECT A SEED TO INTERROGATE</h3>
            <div class="seed-buttons">
                ${seeds.map(seed => {
                    const info = validateSeed(seed);
                    return `
                        <button class="seed-select-btn" onclick="AdminPanel.showSeedDetails('${seed}')">
                            <span class="seed-code">${seed.split('-')[1]}</span>
                            <span class="seed-name">${info?.name || 'Unknown'}</span>
                        </button>
                    `;
                }).join('')}
            </div>
        </div>
        <div id="seed-details-container"></div>
    `;
};

AdminPanel.showSeedDetails = function(seed) {
    const stats = GameStats.getSeedStats(seed);
    if (!stats) return;

    const title = TITLE_SYSTEM.generateTitle(seed, stats);

    // Octant descriptions for the 8 playstyles
    const octantDesc = {
        hard_bonded_seeker: "Fought for truth with allies at your side. Some doors shouldn't be opened alone.",
        hard_bonded_runner: "Cut through chaos together. Speed and fire, shared.",
        hard_lone_seeker: "Hunted answers in the dark. The truth consumes those who seek it alone.",
        hard_lone_runner: "Carved an exit. No looking back. No one to slow you down.",
        soft_bonded_seeker: "Gathered the broken and searched for meaning. Hope is patient.",
        soft_bonded_runner: "Carried others to safety. Sometimes love means running.",
        soft_lone_seeker: "Wandered the ruins, questioning everything. Some answers aren't worth finding.",
        soft_lone_runner: "Slipped away like smoke. Sometimes the kindest thing is to disappear."
    };

    // Axis labels
    const axisLabels = {
        isHard: title.axes.isHard ? "HARD" : "SOFT",
        isBonded: title.axes.isBonded ? "BONDED" : "LONE",
        isSeeker: title.axes.isSeeker ? "SEEKER" : "RUNNER"
    };

    const container = document.getElementById('seed-details-container');
    container.innerHTML = `
        <div class="seed-deep-dive">
            <div class="seed-header">
                <h3>🔬 ${stats.endingInfo?.name || 'Unknown Ending'}</h3>
                <code>${seed}</code>
            </div>

            <div class="earned-title-section">
                <h4>🏅 EARNED TITLE</h4>
                <div class="title-display">
                    <div class="title-full-large">${title.full}</div>
                    <div class="title-octant">${octantDesc[title.octant] || ''}</div>
                    <div class="title-axes">
                        <span class="axis-tag ${title.axes.isHard ? 'hard' : 'soft'}">${axisLabels.isHard}</span>
                        <span class="axis-tag ${title.axes.isBonded ? 'bonded' : 'lone'}">${axisLabels.isBonded}</span>
                        <span class="axis-tag ${title.axes.isSeeker ? 'seeker' : 'runner'}">${axisLabels.isSeeker}</span>
                    </div>
                </div>
            </div>

            <div class="seed-stats-grid">
                <div class="seed-stat">
                    <span class="label">Play Time</span>
                    <span class="value">${stats.playTime}</span>
                </div>
                <div class="seed-stat">
                    <span class="label">Words Read</span>
                    <span class="value">${stats.wordsRead.toLocaleString()}</span>
                </div>
                <div class="seed-stat">
                    <span class="label">Pages</span>
                    <span class="value">${stats.pagesRead}</span>
                </div>
                <div class="seed-stat">
                    <span class="label">Reading Time</span>
                    <span class="value">${stats.readingTime} min</span>
                </div>
                <div class="seed-stat">
                    <span class="label">Choices</span>
                    <span class="value">${stats.totalChoices}</span>
                </div>
                <div class="seed-stat">
                    <span class="label">Style</span>
                    <span class="value">${stats.decisiveness.label}</span>
                </div>
            </div>

            <div class="final-stats-section">
                <h4>📊 Final Character Stats</h4>
                <div class="final-stats-bars">
                    <div class="stat-bar">
                        <span class="bar-label">Courage</span>
                        <div class="bar-track"><div class="bar-fill" style="width: ${Math.min(100, stats.finalStats.courage * 10)}%"></div></div>
                        <span class="bar-value">${stats.finalStats.courage}</span>
                    </div>
                    <div class="stat-bar">
                        <span class="bar-label">Compassion</span>
                        <div class="bar-track"><div class="bar-fill compassion" style="width: ${Math.min(100, stats.finalStats.compassion * 10)}%"></div></div>
                        <span class="bar-value">${stats.finalStats.compassion}</span>
                    </div>
                    <div class="stat-bar">
                        <span class="bar-label">Pragmatism</span>
                        <div class="bar-track"><div class="bar-fill pragmatism" style="width: ${Math.min(100, stats.finalStats.pragmatism * 10)}%"></div></div>
                        <span class="bar-value">${stats.finalStats.pragmatism}</span>
                    </div>
                    <div class="stat-bar">
                        <span class="bar-label">Isolation</span>
                        <div class="bar-track"><div class="bar-fill isolation" style="width: ${Math.min(100, stats.finalStats.isolation * 10)}%"></div></div>
                        <span class="bar-value">${stats.finalStats.isolation}</span>
                    </div>
                </div>
            </div>

            <div class="relationships-section">
                <h4>💔 Relationships</h4>
                <div class="rel-grid">
                    ${stats.relationships.length > 0 ? stats.relationships.map(r => `
                        <div class="rel-card">
                            <span class="rel-icon">${r.icon}</span>
                            <span class="rel-name">${r.name}</span>
                            <span class="rel-status">${r.status}</span>
                            ${r.trust !== undefined ? `<span class="rel-stat">Trust: ${r.trust}</span>` : ''}
                            ${r.romance !== undefined ? `<span class="rel-stat">Romance: ${r.romance}</span>` : ''}
                            ${r.respect !== undefined ? `<span class="rel-stat">Respect: ${r.respect}</span>` : ''}
                        </div>
                    `).join('') : '<p>No significant relationships formed</p>'}
                </div>
            </div>

            </div>
    `;
};

// ═══════════════════════════════════════════════════════════════════════════════════
// ARCHETYPE SYSTEM - Fun RPG-style character class based on playstyle
// ═══════════════════════════════════════════════════════════════════════════════════

const ARCHETYPES = {
    // Determined by combination of endings reached + choices made
    guardian: {
        name: "THE GUARDIAN",
        icon: "🛡️",
        tagline: "Others first. Always.",
        description: "You protect the people around you, even when it costs everything. Mrs. Park would be proud.",
        traits: ["High compassion", "Relationships prioritized", "Self-sacrifice tendencies"],
        famousExamples: ["Rick Grimes (early seasons)", "Joel (The Last of Us)", "Lee Everett"],
        unlockHint: "Reach endings focused on saving others"
    },
    survivor: {
        name: "THE SURVIVOR",
        icon: "🔥",
        tagline: "Whatever it takes.",
        description: "You do what needs to be done. Sentiment is a luxury. The living beat the dead.",
        traits: ["High pragmatism", "Quick decisions", "Calculated risks"],
        famousExamples: ["Carol Peletier", "Ellie (TLOU2)", "Ripley"],
        unlockHint: "Reach endings focused on escape or self-preservation"
    },
    shepherd: {
        name: "THE SHEPHERD",
        icon: "🌟",
        tagline: "Follow me.",
        description: "People look to you for direction. You build communities where others see chaos.",
        traits: ["Leadership choices", "Coalition building", "Strategic thinking"],
        famousExamples: ["Rick Grimes (later)", "Deacon St. John", "Commander Shepard"],
        unlockHint: "Reach endings involving groups and leadership"
    },
    ghost: {
        name: "THE GHOST",
        icon: "👻",
        tagline: "I was never here.",
        description: "Alone is safe. Alone is quiet. Alone is alive. You slip through the cracks.",
        traits: ["High isolation", "Avoidance tactics", "Minimal attachments"],
        famousExamples: ["Daryl Dixon (early)", "The Mandalorian", "Snake Plissken"],
        unlockHint: "Reach endings focused on solitude"
    },
    seeker: {
        name: "THE SEEKER",
        icon: "🔮",
        tagline: "I need to know.",
        description: "Truth matters more than safety. You dig into mysteries others leave buried.",
        traits: ["Curiosity driven", "Risk for knowledge", "Pattern recognition"],
        famousExamples: ["Clarice Starling", "Ripley (Alien)", "Dana Scully"],
        unlockHint: "Discover hidden lore and secret paths"
    },
    phoenix: {
        name: "THE PHOENIX",
        icon: "🔥",
        tagline: "Not like this.",
        description: "You've seen every ending. Died every death. And you keep coming back for more.",
        traits: ["Multiple playthroughs", "Ending collector", "Completionist"],
        famousExamples: ["The Player (Stanley Parable)", "Subaru (Re:Zero)", "Frisk (Undertale)"],
        unlockHint: "Collect 5+ different ending seeds"
    }
};

AdminPanel.renderArchetype = function() {
    const data = GameStats.init();
    const seeds = SeedVault.getSeeds();
    const validatedSeeds = seeds.map(validateSeed).filter(Boolean);
    const summary = GameStats.getGlobalSummary();

    // Determine archetype based on endings collected and stats
    const archetype = this.determinePlaystyleArchetype(validatedSeeds, summary);

    // Calculate archetype progress for all types
    const archetypeProgress = this.calculateArchetypeProgress(validatedSeeds, summary);

    return `
        <div class="archetype-display-full">
            <div class="current-archetype">
                <div class="archetype-icon-large">${archetype.icon}</div>
                <h2 class="archetype-name-large">${archetype.name}</h2>
                <p class="archetype-tagline">"${archetype.tagline}"</p>
                <p class="archetype-desc">${archetype.description}</p>
            </div>

            <div class="archetype-traits">
                <h4>YOUR TRAITS</h4>
                <div class="trait-pills">
                    ${archetype.traits.map(t => `<span class="trait-pill">${t}</span>`).join('')}
                </div>
            </div>

            <div class="archetype-comparisons">
                <h4>YOU'RE LIKE...</h4>
                <div class="famous-examples">
                    ${archetype.famousExamples.map(ex => `<span class="example-name">${ex}</span>`).join('')}
                </div>
            </div>

            <div class="all-archetypes">
                <h4>ALL ARCHETYPES</h4>
                <div class="archetype-grid">
                    ${Object.entries(ARCHETYPES).map(([key, arch]) => {
                        const progress = archetypeProgress[key] || 0;
                        const isUnlocked = progress >= 100;
                        const isCurrent = arch.name === archetype.name;
                        return `
                            <div class="archetype-card ${isUnlocked ? 'unlocked' : 'locked'} ${isCurrent ? 'current' : ''}">
                                <span class="arch-icon">${isUnlocked ? arch.icon : '❓'}</span>
                                <span class="arch-name">${isUnlocked ? arch.name : '???'}</span>
                                <div class="arch-progress-bar">
                                    <div class="arch-progress-fill" style="width: ${progress}%"></div>
                                </div>
                                <span class="arch-progress-text">${progress}%</span>
                                ${!isUnlocked ? `<span class="arch-hint">${arch.unlockHint}</span>` : ''}
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>

            <div class="archetype-lore">
                <h4>ARCHETYPE LORE</h4>
                <p class="lore-text">
                    In DEAD SEOUL, your archetype emerges from your choices — not who you say you are,
                    but who you become when everything else is stripped away. The apocalypse doesn't
                    create monsters or heroes. It reveals them.
                </p>
            </div>
        </div>
    `;
};

AdminPanel.determinePlaystyleArchetype = function(validatedSeeds, summary) {
    const tiers = validatedSeeds.map(s => s.tier);

    // Phoenix: Collected 5+ different seeds
    if (validatedSeeds.length >= 5) {
        return ARCHETYPES.phoenix;
    }

    // Seeker: Found secret/truth endings
    if (tiers.includes('truth') || tiers.includes('transcendence') || validatedSeeds.some(s => s.secret)) {
        return ARCHETYPES.seeker;
    }

    // Shepherd: Leadership/coalition endings
    if (tiers.includes('unity') || tiers.includes('duty') || tiers.includes('war')) {
        return ARCHETYPES.shepherd;
    }

    // Ghost: Isolation endings
    if (tiers.includes('isolation') || tiers.includes('escape')) {
        return ARCHETYPES.ghost;
    }

    // Guardian: Love/mercy endings
    if (tiers.includes('love') || tiers.includes('mercy') || tiers.includes('redemption')) {
        return ARCHETYPES.guardian;
    }

    // Default: Survivor
    return ARCHETYPES.survivor;
};

AdminPanel.calculateArchetypeProgress = function(validatedSeeds, summary) {
    const tiers = validatedSeeds.map(s => s.tier);
    const count = validatedSeeds.length;

    return {
        guardian: Math.min(100, (tiers.filter(t => ['love', 'mercy', 'redemption'].includes(t)).length) * 50),
        survivor: Math.min(100, (tiers.filter(t => ['escape', 'freedom'].includes(t)).length) * 50 + (count > 0 ? 25 : 0)),
        shepherd: Math.min(100, (tiers.filter(t => ['unity', 'duty', 'war'].includes(t)).length) * 40),
        ghost: Math.min(100, (tiers.filter(t => ['isolation'].includes(t)).length) * 100),
        seeker: Math.min(100, (tiers.filter(t => ['truth', 'transcendence'].includes(t)).length) * 50 + (validatedSeeds.some(s => s.secret) ? 50 : 0)),
        phoenix: Math.min(100, count * 20)
    };
};

// ═══════════════════════════════════════════════════════════════════════════════════
// TITLE SYSTEM - "[Name] the [Adjective] [Archetype]"
//
// 3-axis system custom-built for DEAD SEOUL:
//   Axis 1: HARD ←→ SOFT (how they handle threats)
//   Axis 2: BONDED ←→ LONE (how they handle people)
//   Axis 3: SEEKER ←→ RUNNER (how they handle the unknown)
//
// Creates 8 octants (2³):
//   Hard + Bonded + Seeker  = "Unblinking", "Relentless", "Piercing"
//   Hard + Bonded + Runner  = "Swift", "Striking", "Driven"
//   Hard + Lone + Seeker    = "Obsessed", "Hunting", "Consuming"
//   Hard + Lone + Runner    = "Cutting", "Razor", "Flash"
//   Soft + Bonded + Seeker  = "Curious", "Patient", "Listening"
//   Soft + Bonded + Runner  = "Light", "Gliding", "Carrying"
//   Soft + Lone + Seeker    = "Wandering", "Searching", "Lost"
//   Soft + Lone + Runner    = "Fading", "Passing", "Slipping"
// ═══════════════════════════════════════════════════════════════════════════════════

const TITLE_SYSTEM = {
    // 8 octants of adjectives
    octants: {
        // HARD + BONDED
        hard_bonded_seeker: ["Unblinking", "Relentless", "Piercing", "Burning", "Revealing"],
        hard_bonded_runner: ["Swift", "Striking", "Driven", "Blazing", "Charging"],

        // HARD + LONE
        hard_lone_seeker: ["Obsessed", "Hunting", "Consuming", "Hollow", "Starving"],
        hard_lone_runner: ["Cutting", "Razor", "Flash", "Cold", "Scarred"],

        // SOFT + BONDED
        soft_bonded_seeker: ["Curious", "Patient", "Listening", "Gathering", "Knowing"],
        soft_bonded_runner: ["Light", "Gliding", "Carrying", "Sheltering", "Warm"],

        // SOFT + LONE
        soft_lone_seeker: ["Wandering", "Searching", "Haunted", "Questioning", "Drifting"],
        soft_lone_runner: ["Fading", "Passing", "Slipping", "Silent", "Still"]
    },

    // Sections that indicate "seeker" behavior (lore-heavy, truth-finding)
    seekerSections: [45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58], // CHIMERA/truth paths

    // Ending tiers that indicate "seeker" vs "runner"
    seekerTiers: ["truth", "transcendence", "redemption", "nightmare", "meta"],
    runnerTiers: ["escape", "freedom", "isolation"],

    // Archetypes based on ending tier
    archetypes: {
        // Survival tiers
        love: "Flame",
        duty: "Voice",
        escape: "Runner",
        mercy: "Guardian",
        isolation: "Ghost",
        war: "Storm",
        freedom: "Seeker",
        truth: "Witness",
        redemption: "Healer",
        transcendence: "Phoenix",
        unity: "Bridge",
        chaos: "Wildfire",
        // Grim tiers
        death: "Fallen",
        loss: "Mourner",
        failure: "Broken",
        // Secret tiers
        nightmare: "Shadow",
        meta: "Dreamer"
    },

    // Calculate all 3 axes
    getAxes(seedStats, seedInfo) {
        const stats = seedStats.finalStats || { courage: 0, compassion: 0, pragmatism: 0, isolation: 0 };
        const rel = seedStats.relationships || {};
        const sectionsVisited = seedStats.sectionsVisited || [];

        // Axis 1: Hard vs Soft
        const hardScore = stats.courage + stats.pragmatism;
        const softScore = stats.compassion * 2;
        const isHard = hardScore > softScore;

        // Axis 2: Bonded vs Lone
        const relationshipCount = Object.values(rel).filter(r =>
            r?.met && (r.trust > 1 || r.romance > 1 || r.respect > 1 || r.bond > 1)
        ).length;
        const isBonded = relationshipCount >= 2 || stats.isolation < 3;

        // Axis 3: Seeker vs Runner
        // Check if they visited lore-heavy sections
        const seekerSectionsVisited = sectionsVisited.filter(s => this.seekerSections.includes(s)).length;
        // Check ending tier
        const tier = seedInfo?.tier || 'escape';
        const isSeekerEnding = this.seekerTiers.includes(tier);
        const isRunnerEnding = this.runnerTiers.includes(tier);

        // Seeker if: visited 3+ lore sections OR reached a seeker ending
        // Runner if: visited <2 lore sections AND reached a runner ending
        const isSeeker = seekerSectionsVisited >= 3 || isSeekerEnding;

        return { isHard, isBonded, isSeeker };
    },

    // Get octant key from axes
    getOctant(axes) {
        const { isHard, isBonded, isSeeker } = axes;
        const hardStr = isHard ? 'hard' : 'soft';
        const bondStr = isBonded ? 'bonded' : 'lone';
        const seekStr = isSeeker ? 'seeker' : 'runner';
        return `${hardStr}_${bondStr}_${seekStr}`;
    },

    // Generate title
    generateTitle(seed, seedStats, playerName = "Yuna") {
        const seedInfo = validateSeed(seed);
        const axes = this.getAxes(seedStats, seedInfo);
        const octant = this.getOctant(axes);

        // Deterministic selection using seed hash
        const hash = seed.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
        const adjectives = this.octants[octant];
        const adjective = adjectives[hash % adjectives.length];

        // Archetype from ending
        const archetype = seedInfo ? (this.archetypes[seedInfo.tier] || "Survivor") : "Survivor";

        return {
            name: playerName,
            adjective,
            archetype,
            octant,
            axes,
            full: `${playerName} the ${adjective} ${archetype}`,
            short: `The ${adjective} ${archetype}`
        };
    }
};

// Get all earned titles
AdminPanel.getAllTitles = function() {
    const data = GameStats.init();
    const titles = [];

    for (const [seed, stats] of Object.entries(data.perSeedStats)) {
        const title = TITLE_SYSTEM.generateTitle(seed, stats);
        const seedInfo = validateSeed(seed);
        titles.push({
            seed,
            ending: seedInfo?.name || 'Unknown',
            ...title
        });
    }

    return titles;
};

AdminPanel.renderMediaComparison = function(summary) {
    const words = summary.totalWordsRead;
    const minutes = summary.totalPlaytimeMs / 60000;
    const choices = summary.totalChoices;

    return `
        <div class="media-comparison">
            <h3>📚 COMPARED TO BOOKS</h3>
            <div class="comparison-grid">
                ${GameStats.COMPARISONS.book.examples.map(book => {
                    const bookWords = book.pages * 250;
                    const percent = Math.min(100, Math.round(words / bookWords * 100));
                    return `
                        <div class="comparison-item ${percent >= 100 ? 'completed' : ''}">
                            <span class="comp-title">${book.title}</span>
                            <div class="comp-bar">
                                <div class="comp-fill" style="width: ${percent}%"></div>
                            </div>
                            <span class="comp-percent">${percent}%</span>
                        </div>
                    `;
                }).join('')}
            </div>

            <h3>📺 COMPARED TO TV</h3>
            <div class="comparison-grid">
                ${GameStats.COMPARISONS.tv.examples.map(show => {
                    const showMinutes = show.episodes * 45;
                    const percent = Math.min(100, Math.round(minutes / showMinutes * 100));
                    return `
                        <div class="comparison-item ${percent >= 100 ? 'completed' : ''}">
                            <span class="comp-title">${show.title}</span>
                            <span class="comp-genre">${show.genre}</span>
                            <div class="comp-bar">
                                <div class="comp-fill tv" style="width: ${percent}%"></div>
                            </div>
                            <span class="comp-percent">${percent}%</span>
                        </div>
                    `;
                }).join('')}
            </div>

            <h3>🎮 COMPARED TO CHOICE GAMES</h3>
            <div class="comparison-grid">
                ${GameStats.COMPARISONS.game.examples.map(game => {
                    const percent = Math.min(100, Math.round(choices / game.choices * 100));
                    return `
                        <div class="comparison-item ${percent >= 100 ? 'completed' : ''}">
                            <span class="comp-title">${game.title}</span>
                            <span class="comp-detail">${game.choices} choices</span>
                            <div class="comp-bar">
                                <div class="comp-fill game" style="width: ${percent}%"></div>
                            </div>
                            <span class="comp-percent">${percent}%</span>
                        </div>
                    `;
                }).join('')}
            </div>

            <div class="equivalence-summary">
                <h4>📊 YOUR DEAD SEOUL EXPERIENCE EQUALS:</h4>
                <ul>
                    <li>📚 ${summary.totalPagesEquivalent} book pages read</li>
                    <li>📺 ${Math.round(minutes / 45 * 10) / 10} TV episodes watched</li>
                    <li>🎮 ${Math.round(choices / 100 * 10) / 10}x a typical interactive movie</li>
                    <li>☕ ${Math.round(minutes / 15)} cups of coffee's worth of reading</li>
                    <li>🚇 ${Math.round(minutes / 35)} Seoul metro commutes</li>
                </ul>
            </div>
        </div>
    `;
};

// ═══════════════════════════════════════════════════════════════════════════
// ███████╗██████╗ ██╗███████╗ ██████╗ ██████╗ ███████╗    ███████╗██╗   ██╗███████╗
// ██╔════╝██╔══██╗██║██╔════╝██╔═══██╗██╔══██╗██╔════╝    ██╔════╝╚██╗ ██╔╝██╔════╝
// █████╗  ██████╔╝██║███████╗██║   ██║██║  ██║█████╗      ███████╗ ╚████╔╝ ███████╗
// ██╔══╝  ██╔═══╝ ██║╚════██║██║   ██║██║  ██║██╔══╝      ╚════██║  ╚██╔╝  ╚════██║
// ███████╗██║     ██║███████║╚██████╔╝██████╔╝███████╗    ███████║   ██║   ███████║
// ╚══════╝╚═╝     ╚═╝╚══════╝ ╚═════╝ ╚═════╝ ╚══════╝    ╚══════╝   ╚═╝   ╚══════╝
// EPISODE INJECTION SYSTEM - Adds 60 minutes of reading per path
// ═══════════════════════════════════════════════════════════════════════════

/*
 * ARCHITECTURE: Concentric rings of narrative depth
 *
 * Ring 0: Prologue (center)
 * Ring 1: Initial choice (Mrs. Park, Minho, Soojin, Yoo)
 * Ring 2: Journey episodes (survival, exploration, bonding)
 * Ring 3: Complication episodes (betrayal, revelation, moral choice)
 * Ring 4: Climax episodes (confrontation, sacrifice, transformation)
 * Ring 5: Endings (edge)
 *
 * Episodes inject between rings based on path + stats + choices
 * Each episode = ~2000-2500 words = ~10 min reading at freshman level (200-250 wpm)
 * 6 episodes per path = 60 additional minutes
 */

const EPISODE_SYSTEM = {
    // Track which episodes have been shown this run
    shownEpisodes: new Set(),

    // Reset for new playthrough
    reset() {
        this.shownEpisodes = new Set();
    },

    // Determine which episode to inject at a checkpoint
    getEpisodeForCheckpoint(checkpoint, path, stats) {
        const available = EPISODE_CHECKPOINTS[checkpoint];
        if (!available) return null;

        // Filter to episodes not yet shown
        const unshown = available.filter(ep => !this.shownEpisodes.has(ep.id));
        if (unshown.length === 0) return null;

        // Score episodes by relevance to current path/stats
        const scored = unshown.map(ep => ({
            ...ep,
            score: this.scoreEpisode(ep, path, stats)
        })).sort((a, b) => b.score - a.score);

        // Pick highest scoring episode
        const selected = scored[0];
        if (selected && selected.score > 0) {
            this.shownEpisodes.add(selected.id);
            return selected;
        }
        return null;
    },

    scoreEpisode(ep, path, stats) {
        let score = 10; // Base score

        // Path match bonus
        if (ep.paths?.includes(path)) score += 20;
        if (ep.paths?.includes('any')) score += 10;

        // Stats threshold check
        if (ep.requires) {
            for (const [stat, min] of Object.entries(ep.requires)) {
                if ((stats[stat] || 0) < min) return 0; // Fails requirement
            }
            score += 15; // Bonus for meeting requirements
        }

        // Variety bonus (prefer different types)
        const shownTypes = Array.from(this.shownEpisodes).map(id =>
            Object.values(EPISODES).find(e => e.id === id)?.type
        );
        if (!shownTypes.includes(ep.type)) score += 10;

        return score;
    }
};

// Checkpoints where episodes can inject
const EPISODE_CHECKPOINTS = {
    // After escaping the apartment
    "post_escape": [
        { id: "surv_first_night", type: "survival" },
        { id: "surv_scavenging", type: "survival" },
        { id: "horror_first_horde", type: "horror" }
    ],

    // During journey to safe zone
    "journey_midpoint": [
        { id: "surv_shelter", type: "survival" },
        { id: "loc_convenience_store", type: "location" },
        { id: "loc_abandoned_hospital", type: "location" },
        { id: "horror_the_crying", type: "horror" }
    ],

    // At first safe zone
    "safe_zone_arrival": [
        { id: "char_meet_survivors", type: "character" },
        { id: "surv_rationing", type: "survival" },
        { id: "revelation_radio_signal", type: "revelation" }
    ],

    // Minho path - relationship deepening
    "minho_bonding": [
        { id: "char_minho_past", type: "character", paths: ["minho"] },
        { id: "char_minho_confession", type: "character", paths: ["minho"] },
        { id: "char_minho_argument", type: "character", paths: ["minho"] }
    ],

    // Soojin path - warrior training
    "soojin_training": [
        { id: "char_soojin_combat", type: "character", paths: ["soojin"] },
        { id: "char_soojin_past", type: "character", paths: ["soojin"] },
        { id: "char_soojin_soyeon", type: "character", paths: ["soojin"] }
    ],

    // Before major confrontation
    "pre_climax": [
        { id: "revelation_chimera_full", type: "revelation" },
        { id: "horror_the_hive", type: "horror" },
        { id: "surv_last_stand", type: "survival" }
    ],

    // During Incheon journey
    "incheon_journey": [
        { id: "loc_highway_graveyard", type: "location", paths: ["soojin"] },
        { id: "horror_industrial_zone", type: "horror", paths: ["soojin"] },
        { id: "surv_refugee_camp", type: "survival" }
    ],

    // Investigation path
    "investigation": [
        { id: "revelation_patient_files", type: "revelation" },
        { id: "loc_yongsan_surface", type: "location" },
        { id: "horror_gen_zero_dream", type: "horror" }
    ]
};

// ═══════════════════════════════════════════════════════════════════════════
// THE EPISODES - Full narrative content blocks (~2000-2500 words each)
// ═══════════════════════════════════════════════════════════════════════════

const EPISODES = {

    // ─────────────────────────────────────────────────────────────────────
    // SURVIVAL EPISODES - Generic survival scenarios for any path
    // ─────────────────────────────────────────────────────────────────────

    surv_first_night: {
        id: "surv_first_night",
        type: "survival",
        title: "THE FIRST NIGHT",
        paths: ["any"],
        wordCount: 2200,
        content: `
            <p class="episode-header">EPISODE: THE FIRST NIGHT</p>

            <p class="narrative">The sun dies behind the Seoul skyline, bleeding orange and red across a city that no longer belongs to the living. You find shelter in a PC bang—one of those 24-hour gaming cafes that dot every neighborhood like digital shrines to insomnia.</p>

            <p class="narrative">The door is glass, but heavy. You wedge a chair under the handle. It won't stop them for long, but it might give you seconds. Seconds matter now.</p>

            <p class="narrative">Inside, the computers still hum. Emergency power, maybe, or batteries that haven't died yet. The glow of screensavers casts dancing shadows—some shooting game frozen mid-explosion, a K-drama paused on a kiss that will never finish.</p>

            <p class="narrative">You find the break room. A mini-fridge with energy drinks and triangle kimbap. A microwave you don't dare use—the noise would carry. A pile of hoodies left by staff who will never come back for them.</p>

            <p class="narrative">You eat cold rice and pickled radish in the dark, listening to the city die.</p>

            <p class="narrative">The sounds are the worst part. You expected screaming—there was plenty of that in the first hours. But now it's quieter. Wetter. Shuffling footsteps and the occasional crash of breaking glass. Sometimes a sob, quickly cut short.</p>

            <p class="narrative">And beneath it all, a low hum. Not electronic. Organic. Like a million throats breathing in unison.</p>

            <p class="dialogue">"They're hunting in packs now."</p>

            <p class="narrative">You nearly choke on your kimbap. Spin around. A figure in the doorway—young, maybe nineteen, wearing a barista apron splattered with something you don't want to identify.</p>

            <p class="dialogue">"Relax." He raises his hands. "I was hiding in the coffee shop next door. Saw you slip in here." He gestures at the window. "You can see them from the second floor. Moving in groups. Ten, twenty at a time. They're coordinating."</p>

            <p class="dialogue">"That's impossible. They're—"</p>

            <p class="dialogue">"Dead? Yeah. Still coordinating."</p>

            <p class="narrative">His name is Jiwon. He was working the morning shift when it started—saw his manager turn right in front of him, watched her bite three customers before someone hit her with a fire extinguisher. He's been hiding ever since.</p>

            <p class="dialogue">"There were six of us in the coffee shop," he says, not meeting your eyes. "Now there's one."</p>

            <p class="narrative">You don't ask what happened. You don't need to.</p>

            <p class="narrative">Outside, something screams. Not human—too high, too long. It sounds like metal tearing, or a child's voice pushed past breaking.</p>

            <p class="dialogue">"Caller," Jiwon whispers. "They do that. One screams, the others come. Like... like they're summoning each other."</p>

            <p class="narrative">The shuffling outside intensifies. Footsteps—dozens of them—converging on the call. Past your window. Past your door. Close enough to touch if the glass weren't there.</p>

            <p class="narrative">You hold your breath. Jiwon does too. The screensavers dance their endless loops.</p>

            <p class="narrative">Minutes pass. Hours, maybe. The footsteps fade.</p>

            <p class="dialogue">"We have to move at dawn," Jiwon says. "They're slower in sunlight. Something about their eyes—I've been watching. They can't track as well when it's bright."</p>

            <p class="dialogue">"Where do we go?"</p>

            <p class="dialogue">"There's a broadcast. Radio. Someone's set up a safe zone at Seoul Station. They're taking survivors." He pulls out a phone, battery nearly dead. Shows you a recording: static-filled audio of a man's voice, promising sanctuary. "It's real. Has to be."</p>

            <p class="narrative">You look at the door. At the city beyond. At the packs of dead things hunting in coordination, evolving in real-time into something worse than monsters.</p>

            <p class="dialogue">"Dawn," you agree. "We move at dawn."</p>

            <p class="narrative">Neither of you sleeps. You take shifts watching the window instead—marking the patterns of the packs, the routes they take, the buildings they avoid. By morning, you have a map scratched onto a napkin. A route. A chance.</p>

            <p class="narrative">Jiwon hands you a kitchen knife from the break room.</p>

            <p class="dialogue">"I found a metal bat in the storage closet. You take the knife. Quiet is better than strong."</p>

            <p class="narrative">The first light of dawn is the color of infection—grey-green, sickly, filtered through smoke you can't see the source of. The streets are empty. The packs have retreated to shadows.</p>

            <p class="dialogue">"Ready?"</p>

            <p class="narrative">You're not. You never will be. But you nod anyway.</p>

            <p class="narrative">The door opens. The world has ended. And somewhere, maybe, people are still fighting to build a new one.</p>

            <p class="narrative">Time to find out if you can reach them.</p>
        `,
        choices: [
            { text: "Follow Jiwon's route toward Seoul Station.", target: "continue" },
            { text: "Suggest an alternate path through the subway.", target: "surv_subway_dark" },
            { text: "Split up to improve your chances.", target: "surv_alone_dawn" }
        ],
        statEffects: {
            player: { courage: 1 }
        },
        characterMet: null
    },

    surv_scavenging: {
        id: "surv_scavenging",
        type: "survival",
        title: "THE HUNT",
        paths: ["any"],
        wordCount: 2400,
        content: `
            <p class="episode-header">EPISODE: THE HUNT</p>

            <p class="narrative">The convenience store sits at the corner of what used to be a busy intersection. Now the traffic lights blink yellow into emptiness, and the only cars are the ones crashed into each other, doors hanging open like mouths frozen mid-scream.</p>

            <p class="dialogue">"Two minutes," you whisper. "In and out."</p>

            <p class="narrative">Your supplies are running low. Three days of constant movement has burned through everything you salvaged. The water bottles are empty. The energy bars are gone. Your body is starting to remind you, in increasingly urgent ways, that survival requires more than willpower.</p>

            <p class="narrative">The store's glass front is shattered—someone got here first. But through the jagged opening, you can see shelves still stocked. Whoever ransacked this place was looking for something specific, or they were interrupted.</p>

            <p class="narrative">You hope it was the former.</p>

            <p class="narrative">The broken glass crunches under your feet. Every sound feels like a gunshot. You freeze, wait, listen. The city breathes its slow dead breath. Nothing moves.</p>

            <p class="narrative">Inside, the fluorescent lights are still on—emergency power, running on fumes. The white glow turns everything sterile, clinical. You feel like you're in a morgue.</p>

            <p class="narrative">The snack aisle is picked clean, but there's still instant noodles. Canned coffee. Triangle kimbap that should have expired but hasn't—the cold is preserving more than just bodies. You stuff everything into your bag, moving fast, trying not to look at the magazine rack where someone's wedding photo stares from a celebrity tabloid.</p>

            <p class="narrative">The back of the store is where you hit gold.</p>

            <p class="narrative">A supply closet, still locked. The key is on a lanyard around a woman's neck—she's lying in the break room, very still, a bite wound on her shoulder that never got the chance to turn her. Someone stopped her first. A coworker. A friend. The fire extinguisher is still in their hand.</p>

            <p class="narrative">You don't take the key. You kick the lock instead. It gives on the third try.</p>

            <p class="narrative">Inside: cases of water. First aid kits. Batteries. Flashlights. And, bizarrely, a box of birthday candles and a half-deflated balloon that says "Happy 30th!"</p>

            <p class="narrative">Someone was going to have a party. Someone was going to blow out candles and make a wish. Someone was going to turn thirty and complain about getting old.</p>

            <p class="narrative">You take everything except the candles.</p>

            <p class="narrative">That's when you hear it.</p>

            <p class="narrative">Not the shuffling—you've learned to filter that out, the constant background noise of things that used to be people dragging themselves through the streets. This is different. Deliberate. Footsteps with purpose.</p>

            <p class="narrative">Human footsteps.</p>

            <p class="dialogue">"Put the bag down."</p>

            <p class="narrative">He's standing in the doorway of the break room. Young—maybe your age, maybe younger. Clean, which is wrong—no one is clean anymore. And armed with something you haven't seen since this started: an actual gun.</p>

            <p class="dialogue">"The bag. Now. Slide it over."</p>

            <p class="narrative">Your knife is in your belt. Too far to reach. Too slow to use. He has you.</p>

            <p class="dialogue">"I don't want to hurt you," he says, and he sounds like he means it. "But I will. There are people depending on me. Kids. They need what's in that closet."</p>

            <p class="dialogue">"There's enough for both of us."</p>

            <p class="dialogue">"There's never enough. Not anymore."</p>

            <p class="narrative">His hand is shaking. The gun wavers. He's terrified—just as terrified as you are. Maybe more. He's not a killer. He's a survivor doing what survivors do.</p>

            <p class="narrative">The same thing you're doing.</p>

            <p class="dialogue">"What's your name?" you ask.</p>

            <p class="dialogue">"What?"</p>

            <p class="dialogue">"Your name. If you're going to shoot me, I want to know who pulled the trigger."</p>

            <p class="narrative">He hesitates. The gun drops an inch.</p>

            <p class="dialogue">"Hyunwoo. My name is Hyunwoo."</p>

            <p class="dialogue">"I'm Yuna." You gesture at the closet. "There are six cases of water in there. Twelve first aid kits. Enough batteries to power a small city. Take half. Take more than half. But don't take everything and leave me to die."</p>

            <p class="dialogue">"How do I know you won't follow me? Attack the camp?"</p>

            <p class="dialogue">"How do I know you won't shoot me anyway?"</p>

            <p class="narrative">The standoff stretches. Outside, something crashes—a window breaking, two blocks away. The sound of the dead, drawn by noise, converging on a target that isn't you.</p>

            <p class="dialogue">"Fine." Hyunwoo lowers the gun. "Half. But you leave first. I need to know you're gone before I take anything."</p>

            <p class="narrative">It's not trust. It's not friendship. It's the barest minimum of humanity surviving in a world designed to strip it away.</p>

            <p class="narrative">You fill your bag with half the supplies. Hyunwoo watches, gun still ready, fear and hope warring on his face.</p>

            <p class="dialogue">"The safe zone at Seoul Station," you say as you shoulder the bag. "You know about it?"</p>

            <p class="dialogue">"It's overrun. Was overrun three days ago."</p>

            <p class="narrative">Your stomach drops. "What?"</p>

            <p class="dialogue">"I was there. The broadcast is automatic—no one's left to turn it off. The Station is a tomb." He pauses. "There's another zone. Yeouido. The old National Assembly building. That's where we're taking the kids."</p>

            <p class="narrative">Yeouido. Across the river. Through the worst of the city.</p>

            <p class="dialogue">"Good luck, Yuna."</p>

            <p class="dialogue">"You too, Hyunwoo."</p>

            <p class="narrative">You leave through the broken window, bag heavy with water and hope. Behind you, you hear him start to load his own supplies. Two strangers, taking what they need, moving on to survive another day.</p>

            <p class="narrative">It's not how the world is supposed to work.</p>

            <p class="narrative">But it's how it works now.</p>
        `,
        choices: [
            { text: "Head toward Yeouido and the new safe zone.", target: "continue" },
            { text: "Go to Seoul Station anyway—verify his story.", target: "loc_seoul_station_tomb" },
            { text: "Follow Hyunwoo at a distance—find his camp.", target: "surv_following" }
        ],
        statEffects: {
            player: { pragmatism: 1, compassion: 1 }
        }
    },

    surv_shelter: {
        id: "surv_shelter",
        type: "survival",
        title: "SHELTER",
        paths: ["any"],
        wordCount: 2100,
        content: `
            <p class="episode-header">EPISODE: SHELTER</p>

            <p class="narrative">The building used to be a love motel—one of those neon-lit places that rent rooms by the hour and ask no questions. Now the neon is dark, the questions are irrelevant, and the only thing renting is survival.</p>

            <p class="narrative">You chose it because the windows are small and high. Because the doors are solid and lock from inside. Because the hallways are narrow enough that nothing can rush you, and long enough that you'd hear them coming.</p>

            <p class="narrative">Also because you're exhausted, and it was here, and you couldn't take another step.</p>

            <p class="narrative">Room 305. A heart-shaped bed you don't look at. A mirror on the ceiling you definitely don't look at. But also: a bathroom with running water (cold, but running), a mini-bar with bottles of soju and snacks meant for post-coital hunger, and a door that locks twice.</p>

            <p class="narrative">You drink the water from the tap until your stomach cramps. Eat three bags of shrimp crackers without tasting them. Then you sit on the floor—not the bed, never the bed—and let yourself shake.</p>

            <p class="narrative">It's been four days. Four days since the morning broadcast. Four days since the screaming started. Four days of running, hiding, watching people you'll never know become things you'll never forget.</p>

            <p class="narrative">You've killed two of them. You try not to think about that.</p>

            <p class="narrative">The first was an accident—a woman who grabbed you in a stairwell, and you shoved her, and she fell, and the railing caught her skull in a way that skulls aren't meant to be caught. You didn't know she was turned until you saw her eyes. You didn't know you were capable of that sound until you heard yourself make it.</p>

            <p class="narrative">The second was deliberate. A man in a subway tunnel, blocking your path, already lurching toward you. The knife went in easier than you expected. He went down harder.</p>

            <p class="narrative">You haven't cleaned the blade since.</p>

            <p class="narrative">In the bathroom, you find a tiny bottle of hotel shampoo and a bar of soap shaped like a rose. You strip off your clothes—ruined, blood-splattered, stinking of fear and exertion—and stand under the cold water until you can't feel anything anymore.</p>

            <p class="narrative">It doesn't help. You don't feel clean. You're not sure you ever will again.</p>

            <p class="narrative">There's a bathrobe hanging on the door. Pink, ridiculously fluffy. You put it on because your clothes are unwearable and your options are limited. Somewhere, someone is laughing at you. Maybe God, if God is still watching this disaster. Maybe just the universe, confirming its opinion of you.</p>

            <p class="narrative">You're so tired.</p>

            <p class="narrative">The bed looks soft. Too soft. Like it might swallow you if you let it.</p>

            <p class="narrative">You lie down on the floor instead, knife in your hand, back against the door. If anything comes through, you'll feel it before you see it. That has to be enough.</p>

            <p class="narrative">Sleep comes in fragments. Dreams you don't want to remember. Sounds from outside—shuffling, moaning, once a scream cut short—that jolt you awake every hour. Each time, you check the door. Check the window. Check your grip on the knife.</p>

            <p class="narrative">Still alive. Still human. Still fighting.</p>

            <p class="narrative">At some point in the night, it starts to rain. The sound on the window is almost soothing—almost normal. You remember rainy nights before, curled up with a book, with music, with someone who made the sound of rain feel like safety instead of just noise.</p>

            <p class="narrative">That life is gone now. That person is gone.</p>

            <p class="narrative">But you're still here. And tomorrow, you'll move again. Find food. Find water. Find the safe zone that may or may not exist. Keep surviving one hour at a time until surviving becomes something else.</p>

            <p class="narrative">Living, maybe.</p>

            <p class="narrative">Someday.</p>

            <p class="narrative">The rain falls. The city groans. And in a love motel room that smells like cheap perfume and desperation, you hold onto the only thing you have left:</p>

            <p class="narrative">The stubborn, irrational belief that tomorrow will be better.</p>

            <p class="narrative">It probably won't be. But you believe it anyway.</p>

            <p class="narrative">That's what humans do.</p>
        `,
        choices: [
            { text: "Rest until dawn, then move out.", target: "continue" },
            { text: "Search the other rooms for supplies.", target: "surv_motel_search" },
            { text: "Check the roof for a vantage point.", target: "loc_rooftop_view" }
        ],
        statEffects: {
            player: { courage: 1 }
        }
    },

    // ─────────────────────────────────────────────────────────────────────
    // HORROR EPISODES - Tension and scares
    // ─────────────────────────────────────────────────────────────────────

    horror_first_horde: {
        id: "horror_first_horde",
        type: "horror",
        title: "THE HORDE",
        paths: ["any"],
        wordCount: 2300,
        content: `
            <p class="episode-header">EPISODE: THE HORDE</p>

            <p class="narrative">You see them before you hear them. A shadow on the horizon that shouldn't move the way it does—too fluid, too unified, like a single organism with a thousand legs.</p>

            <p class="narrative">Then you hear them.</p>

            <p class="narrative">It's not the moaning from the movies. Not the classic zombie groan that's almost comical in its cartoonishness. This is something else. Something that starts in one throat and spreads to the next and the next until it becomes a chorus—a sound that vibrates in your chest cavity and makes your teeth ache.</p>

            <p class="narrative">They're singing. Or screaming. Or praying. You're not sure anymore.</p>

            <p class="dialogue">"Run." The word comes out as a whisper. "RUN."</p>

            <p class="narrative">You run.</p>

            <p class="narrative">The horde is three blocks behind you. Then two. Then one and a half. They don't sprint—they can't, something in their deteriorating muscles prevents it—but they don't stop either. They don't tire. They don't hesitate. They just come, an inexorable wave of hunger and wrongness.</p>

            <p class="narrative">You duck into an alley. Dead end. Shit. Back out, sharp left, past a pharmacy with its windows smashed in and its shelves stripped bare. Your lungs are burning. Your legs are screaming. The chorus is getting louder.</p>

            <p class="narrative">Ahead: a parking structure. Concrete. Ramps. Multiple levels. Places to hide, places to climb, places to—</p>

            <p class="narrative">You hit the stairwell door at full speed. It doesn't open. You bounce off, land hard on your back, and for one eternal moment you're staring at the sky while the sound of a thousand wrong voices washes over you.</p>

            <p class="narrative">Then you're up. Shoulder against the door. Pushing. Praying. Sobbing.</p>

            <p class="narrative">It gives.</p>

            <p class="narrative">The stairs are dark. You take them three at a time, using your hands as much as your feet, scrambling upward like your life depends on it because your life depends on it. Behind you, the door crashes open. The chorus enters the stairwell and becomes deafening—echoing off concrete, multiplying, filling every corner with the sound of extinction.</p>

            <p class="narrative">Second floor. Third. Fourth. You burst through a fire door onto the parking level and keep running. Past empty spaces where cars will never park again. Past oil stains and painted lines and a forgotten shopping cart. Toward the ramp that leads up, up, up to the roof where maybe, just maybe—</p>

            <p class="narrative">You reach the edge. Look down.</p>

            <p class="narrative">They're everywhere. Filling the street below like water in a basin. Hundreds of them. Maybe thousands. A carpet of grey flesh and white eyes and grasping hands.</p>

            <p class="narrative">And they're climbing.</p>

            <p class="narrative">You watch the first ones reach the parking structure's ground floor. Watch them start up the ramp. They're slow—the incline costs them—but they don't stop. They never stop.</p>

            <p class="narrative">You have maybe five minutes before they reach you.</p>

            <p class="narrative">The roof of the parking structure is flat. Exposed. Nowhere to hide. But next to it—close enough to jump, if you're desperate enough—is another building. An office complex, windows dark, but with a fire escape on the near side.</p>

            <p class="narrative">The gap is maybe three meters. Maybe more. You've never been athletic. You've never had to be.</p>

            <p class="narrative">Behind you, the stairwell door bangs open. The first of them stumbles through—a woman in a torn sundress, one shoe missing, a wound in her neck that should have killed her but didn't. She sees you and screams. The scream joins the chorus. The chorus grows louder.</p>

            <p class="narrative">You run.</p>

            <p class="narrative">The edge of the roof comes too fast. You don't have time to think. Don't have time to calculate. You push off with everything you have, and for one glorious, terrifying moment, you're flying.</p>

            <p class="narrative">The fire escape catches you. Barely. Your hands grip rusted metal, your body slams against the railing, and something in your shoulder screams in a way that's definitely not good. But you're holding on. You're not falling. You're not dead.</p>

            <p class="narrative">You pull yourself up. Look back at the parking structure.</p>

            <p class="narrative">They're at the edge now. Dozens of them. They reach for you—arms extended, fingers grasping—but they don't jump. They can't. Something in their broken brains has lost the ability to calculate distance, to take leaps of faith, to do anything but walk forward and hunger.</p>

            <p class="narrative">The woman in the sundress falls. Just steps off the edge like it isn't there, like the gap is just another path to food. She hits the ground below with a sound you'll hear in nightmares for the rest of your life.</p>

            <p class="narrative">Others follow. One by one, they walk off the roof, drawn by your scent, your warmth, your stubborn aliveness. They fall like rain made of flesh.</p>

            <p class="narrative">And still more come. Still the chorus sings.</p>

            <p class="narrative">You climb. Up the fire escape, floor by floor, until you find an open window. You crawl through. Collapse on a carpet that smells like dust and old coffee. And you lie there, listening to the sound of bodies hitting concrete, waiting for the singing to stop.</p>

            <p class="narrative">It doesn't stop. Not for hours.</p>

            <p class="narrative">But eventually, finally, it fades. The horde moves on, following some other scent, some other prey. You're still alive. Still human. Still holding on.</p>

            <p class="narrative">Your shoulder is definitely dislocated. Your body is definitely destroyed. Your mind is definitely never going to be the same.</p>

            <p class="narrative">But you're still alive.</p>

            <p class="narrative">For now, that has to be enough.</p>
        `,
        choices: [
            { text: "Find a way to pop your shoulder back in.", target: "surv_self_aid" },
            { text: "Search this building for supplies and shelter.", target: "continue" },
            { text: "Wait for the horde to fully disperse before moving.", target: "surv_patience" }
        ],
        statEffects: {
            player: { courage: 2 }
        }
    },

    horror_the_crying: {
        id: "horror_the_crying",
        type: "horror",
        title: "THE CRYING",
        paths: ["any"],
        wordCount: 2200,
        content: `
            <p class="episode-header">EPISODE: THE CRYING</p>

            <p class="narrative">It sounds like a child.</p>

            <p class="narrative">Somewhere in the building—above you, maybe, or in the walls themselves—something is crying. High, thin sobs that echo through the empty corridors and make your heart clench with an instinct older than civilization.</p>

            <p class="narrative">A child is crying. A child needs help. Every fiber of your being screams at you to find them, protect them, make the crying stop.</p>

            <p class="narrative">But you've been surviving long enough to know better.</p>

            <p class="dialogue">"Don't," you whisper to yourself. "Don't follow it."</p>

            <p class="narrative">The crying continues. Hitched breaths. Little gasps. So real. So <em>human</em>.</p>

            <p class="narrative">You check your exits. Stairwell behind you. Window to your left—fourth floor, no fire escape, but there's a ledge if you're desperate. Door ahead, slightly ajar, leading deeper into the building.</p>

            <p class="narrative">The crying is coming from behind the door.</p>

            <p class="dialogue">"Hello?" you call out, hating yourself for it. "Is someone there?"</p>

            <p class="narrative">The crying stops. Dead silence. Then—</p>

            <p class="dialogue">"Help me. Please help me. I'm stuck."</p>

            <p class="narrative">It's perfect. The voice is perfect. A little girl, maybe seven or eight, scared and alone and desperate for rescue.</p>

            <p class="narrative">Too perfect.</p>

            <p class="narrative">You press yourself against the wall. Knife in hand. Watching the door.</p>

            <p class="dialogue">"I can hear you moving. Please. I'm in the room at the end of the hall. My leg is caught under something. I can't get out."</p>

            <p class="narrative">The voice doesn't move. Doesn't get closer. Just hangs in the air, coming from everywhere and nowhere, as real as anything you've ever heard.</p>

            <p class="dialogue">"What's your name?" you ask.</p>

            <p class="dialogue">"Soomin. My name is Soomin. My mommy went to get help but she never came back. Please, it hurts. Please come help me."</p>

            <p class="narrative">Your feet want to move. Your hands want to open that door. Every maternal instinct you've ever had is screaming at you to save this child, to be the hero, to do the right thing.</p>

            <p class="narrative">But you've seen what happens to heroes now.</p>

            <p class="dialogue">"Soomin, I'm going to throw something into the hall. Can you see it when I do?"</p>

            <p class="narrative">You pull a piece of debris from the floor—a chunk of plaster—and lob it through the crack in the door. It clatters down the hallway.</p>

            <p class="narrative">Silence.</p>

            <p class="narrative">Then the crying starts again. But it's different now. Faster. More insistent.</p>

            <p class="dialogue">"Please help me please help me please help me please—"</p>

            <p class="narrative">The words blur together. Become a chant. And something in the sound shifts—drops an octave, gains a wet, gurgling undertone that no child should be able to make.</p>

            <p class="dialogue">"—help me help me help me HELP ME HELP ME—"</p>

            <p class="narrative">The door slams open.</p>

            <p class="narrative">It's not a child. It was never a child. It's a thing that might have been a woman once—tall, impossibly thin, with arms that bend in too many places and a mouth that's learned to make sounds its original owner never imagined.</p>

            <p class="narrative">And it's <em>fast</em>.</p>

            <p class="narrative">You throw yourself toward the window. Glass shatters. You hit the ledge, grab the drainpipe, slide and fall and crash into a dumpster in the alley below. Everything hurts. Everything screams. But you're moving, you're running, you're putting distance between yourself and the thing that cries like a child and hunts like nothing you've ever seen.</p>

            <p class="narrative">Behind you, the crying continues. Rising, falling, modulating like speech. Like it's learning.</p>

            <p class="dialogue">"Come back. Come back. I just want to play. Come back come back come back—"</p>

            <p class="narrative">You don't look back. You never look back.</p>

            <p class="narrative">The sun is setting by the time you stop running. You find a locked car, break the window, curl up in the back seat. Your whole body is shaking. The knife is still in your hand, knuckles white around the handle.</p>

            <p class="narrative">They're evolving. Learning. Becoming something worse than the mindless things you thought you understood.</p>

            <p class="narrative">Somewhere in the city, the crying starts again. Distant. Mournful. Patient.</p>

            <p class="narrative">Waiting for the next person who can't resist the sound of a child in pain.</p>

            <p class="narrative">You cover your ears. But you can still hear it.</p>

            <p class="narrative">You'll always hear it.</p>
        `,
        choices: [
            { text: "Stay in the car until dawn. Don't move.", target: "surv_car_night" },
            { text: "Get as far from this area as possible, now.", target: "continue" },
            { text: "Find somewhere to barricade properly.", target: "surv_shelter" }
        ],
        statEffects: {
            player: { pragmatism: 2 }
        }
    }

    // More episodes continue...
};

// Function to inject episode into story flow
function injectEpisode(checkpoint, currentPath) {
    const episode = EPISODE_SYSTEM.getEpisodeForCheckpoint(
        checkpoint,
        currentPath,
        RunState.playerStats
    );

    if (episode) {
        const content = EPISODES[episode.id];
        if (content) {
            // Apply stat effects
            if (content.statEffects) {
                for (const [stat, delta] of Object.entries(content.statEffects.player || {})) {
                    RunState.playerStats[stat] = (RunState.playerStats[stat] || 0) + delta;
                }
            }
            return content;
        }
    }
    return null;
}

// Modify seed import to check for admin code first
const originalSubmitSeedImport = submitSeedImport;
submitSeedImport = function() {
    const input = document.getElementById('seed-import-input');
    if (AdminPanel.checkAdminAccess(input.value)) {
        closeSeedModal();
        return;
    }
    originalSubmitSeedImport();
};

// ═══════════════════════════════════════════════════════════════
// ENDING SEED DISPLAY
// ═══════════════════════════════════════════════════════════════

// When player reaches an ending, display their seed
function displayEndingSeed(endingNumber) {
    const seed = generateEndingSeed(endingNumber);
    if (!seed) return null;

    const seedInfo = ENDING_SEEDS[endingNumber];

    // Auto-save seed
    SeedVault.addSeed(seed);

    // Check for new unlocks
    const progress = SeedVault.getProgress();
    const newUnlocks = progress.unlocks.filter(u =>
        !SeedVault._previousUnlocks?.includes(u.unlocks)
    );
    SeedVault._previousUnlocks = progress.unlocks.map(u => u.unlocks);

    return {
        seed,
        seedInfo,
        progress,
        newUnlocks,
        displayHTML: `
            <div class="ending-seed-container">
                <div class="seed-earned">
                    <h3>SEED EARNED</h3>
                    <div class="seed-code" onclick="navigator.clipboard.writeText('${seed}')">${seed}</div>
                    <p class="seed-hint">Click to copy. Share with friends or use to unlock content.</p>
                </div>

                <div class="seed-info">
                    <div class="tier-badge tier-${seedInfo.tier}">${seedInfo.tier.toUpperCase()}</div>
                    <div class="seed-name">${seedInfo.name}</div>
                </div>

                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${progress.percentage}%"></div>
                    <span class="progress-text">${progress.collected}/${progress.total} endings</span>
                </div>

                ${newUnlocks.length > 0 ? `
                    <div class="new-unlocks">
                        <h4>NEW CONTENT UNLOCKED!</h4>
                        ${newUnlocks.map(u => `<p>${u.description}</p>`).join('')}
                    </div>
                ` : ''}

                ${progress.secrets > 0 ? `
                    <div class="secrets-found">
                        <span class="secret-badge">${progress.secrets} SECRET${progress.secrets > 1 ? 'S' : ''}</span>
                    </div>
                ` : ''}
            </div>
        `
    };
}

// ═══════════════════════════════════════════════════════════════
// MAIN STORY DATA
// ═══════════════════════════════════════════════════════════════

const STORY_DATA = {

    // ═══════════════════════════════════════════════════════════════
    // PROLOGUE
    // ═══════════════════════════════════════════════════════════════

    prologue: {
        title: "BEFORE",
        content: `
            <p class="narrative">You and Minho lasted two years.</p>

            <p class="narrative">Two years of late-night museum dates, of his hands in your hair, of that voice against your ear: <em>"Stay."</em> Two years of thinking maybe this was it. Maybe you'd found something real.</p>

            <p class="narrative">Then he got the promotion. Tokyo office. His dream.</p>

            <p class="dialogue">"Come with me," he said.</p>

            <p class="dialogue">"Ask me to stay," you said. Because you needed to hear it. Needed to know you mattered more than the corner office.</p>

            <p class="narrative">He didn't ask.</p>

            <div class="poetic">
                Binary stars orbit a center neither owns,<br>
                locked in gravitational dance,<br>
                too close to escape, too far to collide.<br>
                You burned bright in that shared space.
            </div>

            <p class="narrative">You haven't spoken in six months. But you've dreamed of him every night. Dreamed of his hands on your waist, his breath on your neck, his voice saying the words he never said.</p>

            <p class="narrative">Some mornings you wake up angry. Some mornings you wake up aching.</p>

            <p class="narrative">This morning, you wake up to screaming.</p>
        `,
        choices: [
            { text: "Begin.", target: 1 }
        ]
    },

    // ═══════════════════════════════════════════════════════════════
    // ACT ONE: THE FALL
    // ═══════════════════════════════════════════════════════════════

    1: {
        title: "THE LAST MORNING",
        thread: "yuna",
        media: { type: "image", src: "/static/media/images/seoul_burning.jpg" },
        content: `
            <p class="narrative">The morning Seoul dies, you wake up late for work.</p>

            <p class="narrative">Your phone shows seventeen missed calls from an unknown number. Three from your mother. The television—you don't remember leaving it on—shows a news anchor crying.</p>

            <p class="dialogue">"—advised to stay indoors. Do not approach anyone exhibiting symptoms. The infection spreads through—"</p>

            <p class="narrative">Static.</p>

            <p class="narrative">Outside your window, Hongdae is burning. A helicopter spirals into the Han River like a signal bouncing off dead satellites—still transmitting to a frequency no one monitors anymore. And in the street five floors below, a woman in a torn hanbok—her face half-peeled away like wet wallpaper—is crouched over a businessman in a grey suit. Her jaw unhinges with a crack you can hear through the glass. She buries her face in his stomach. His legs are still kicking.</p>

            <p class="narrative">Your phone buzzes. Unknown number. You answer.</p>

            <p class="dialogue">"Yuna." That voice. The one that still makes your stomach drop. "Where are you? Are you safe?"</p>

            <p class="narrative">Minho. After six months of silence. Calling now.</p>

            <p class="dialogue">"I'm—I'm in my apartment. Minho, what's—"</p>

            <p class="dialogue">"Listen to me. Don't go outside. Barricade your door. I'm coming for you." A crash. Screaming in the background. "I'm in Itaewon. I can be there in—"</p>

            <p class="narrative">The line dies.</p>

            <p class="narrative thought">He's coming for you. After everything. After the silence and the distance and the way he broke you like matter burning up on entry—brief and brilliant, making someone's wish real at the cost of its own light.</p>

            <p class="narrative thought">He's <em>coming for you</em>.</p>

            <p class="narrative">Something hot and complicated moves through your chest. You don't have time to name it.</p>

            <p class="narrative">The pounding starts on Mrs. Park's door down the hall.</p>
        `,
        choices: [
            { text: "Help Mrs. Park. You can't leave an old woman to die.", target: 2 },
            { text: "Barricade your door. Survival first. Minho said stay.", target: 3 },
            { text: "Grab a weapon and go. Don't wait to be saved.", target: 4 }
        ]
    },

    2: {
        title: "THE NEIGHBOR",
        thread: "yuna",
        content: `
            <p class="narrative">You run to Mrs. Park's door.</p>

            <p class="narrative">The wood is already splintering. Whatever's on the other side is <em>strong</em>.</p>

            <p class="dialogue">"Mrs. Park! It's Yuna!"</p>

            <p class="narrative">The door cracks open. A wrinkled hand grabs your wrist with shocking force and yanks you inside. Mrs. Park—eighty-three, widowed, the woman who brings you soup when you work late—slams the door shut.</p>

            <p class="narrative">She's holding a fire extinguisher like a weapon. Her eyes are steady.</p>

            <p class="dialogue">"I was in the war, girl. The real one. I've seen worse."</p>

            <p class="narrative">The door shudders. Won't hold.</p>

            <p class="dialogue">"Fire escape," she says. "My hip won't make the climb. You go."</p>

            <p class="dialogue">"I'm not leaving you."</p>

            <p class="dialogue">"Yes you are." She presses something into your palm. A key. "Storage unit in Yeouido. My husband's emergency supplies. He was paranoid about the North." She smiles, savage and ancient. "Take it. Survive. Make them pay for every inch."</p>

            <p class="narrative">The door breaks.</p>

            <p class="narrative">She raises the extinguisher.</p>

            <p class="dialogue"><strong>"GO."</strong></p>
        `,
        choices: [
            { text: "Take the key and run. Honor her sacrifice.", target: 5 },
            { text: "Stay and fight beside her. Together or not at all.", target: 6 },
            { text: "Notice the photograph on the wall.", target: 44 }
        ]
    },

    6: {
        title: "TOGETHER",
        thread: "yuna",
        content: `
            <p class="dialogue">"We go together or not at all."</p>

            <p class="narrative">Mrs. Park stares at you. Then laughs—a dry, crackling sound.</p>

            <p class="dialogue">"Your father would be proud. We served together, you know. Incheon. 1950. He never left anyone behind either."</p>

            <p class="narrative">She hands you the fire extinguisher. "Then let's make them work for it."</p>

            <p class="narrative">The door breaks.</p>

            <p class="narrative">You fight.</p>

            <div class="poetic">
                Side by side,<br>
                two generations of Korean women<br>
                who refused to die quietly.
            </div>

            <p class="narrative">When it's over, you're both injured. Mrs. Park's leg is badly bitten. You both know what that means.</p>

            <p class="dialogue">"The storage unit," she whispers, pressing the key into your palm. "Go. Now. Before I turn."</p>

            <p class="dialogue">"I'm not leaving you."</p>

            <p class="dialogue">"You already saved me, child. Thirty minutes ago, I was an old woman waiting to die alone." Her eyes are fierce. "You gave me a warrior's death. Now let me give you a life."</p>

            <p class="narrative">She pushes you toward the fire escape.</p>

            <p class="narrative">You go.</p>
        `,
        choices: [
            { text: "Continue to the storage unit.", target: 5 }
        ]
    },

    3: {
        title: "THE BARRICADE",
        thread: "minho",
        content: `
            <p class="narrative">You drag everything you own against the door. Bookshelf. Desk. Mattress.</p>

            <p class="narrative">Then you wait.</p>

            <p class="narrative">Three hours in the dark. The sounds outside are... you don't have words. You learn not to hear them. You learn to be very, very still.</p>

            <p class="narrative">When the pounding comes, you freeze.</p>

            <p class="dialogue">"Yuna? Yuna, are you there? It's me."</p>

            <p class="narrative">Minho's voice. Through the door. Alive.</p>

            <p class="narrative">You tear apart the barricade with shaking hands. When the door opens, he's covered in blood—not his, he swears—and his eyes are wild.</p>

            <p class="narrative">But when he sees you, something in his face cracks open.</p>

            <p class="dialogue">"You're alive," he breathes. "You're—"</p>

            <p class="narrative">He doesn't finish. He crosses the room in two steps and his arms are around you, his face buried in your hair, his whole body shaking.</p>

            <p class="dialogue">"I thought I lost you," he says. "I thought—"</p>

            <p class="dialogue">"You left me." It comes out before you can stop it. Six months of hurt compressed into three words.</p>

            <p class="narrative">He pulls back. Meets your eyes.</p>

            <p class="dialogue">"I know. I know I did. And I'm sorry. I'm so fucking sorry." His hands come up to cup your face. Careful. Like you're something precious. "I was on my way back when it started. I had my resignation letter written. I was going to—"</p>

            <p class="narrative">An explosion rocks the building.</p>

            <p class="dialogue">"We have to move," he says. "Car's outside. There's a military safe zone in Bukhansan. We can talk there. We can—" He stops. His thumb traces your cheekbone. "Please. Just give me a chance to make this right."</p>
        `,
        choices: [
            { text: "Go with him. Whatever happened before, he came back.", target: 7 },
            { text: "Tell him you'll follow in your own way. Trust is earned.", target: 8 },
            { text: "Kiss him first. If the world is ending, stop wasting time.", target: 9 }
        ]
    },

    4: {
        title: "THE HUNTER",
        thread: "soojin",
        media: { type: "image", src: "/static/media/images/hallway.jpg" },
        content: `
            <p class="narrative">You don't wait.</p>

            <p class="narrative">You grab the knife from your kitchen—the Japanese santoku your mother gave you—and slip into the hallway.</p>

            <p class="narrative">The lights are flickering. Something is moving at the far end, hunched over something wet.</p>

            <p class="narrative">It looks up. Its eyes are filmed white. Its mouth is red.</p>

            <p class="narrative">It runs at you.</p>

            <p class="narrative">You sidestep—muscle memory from the self-defense classes you took after a man followed you home last year—and drive the knife into its temple.</p>

            <p class="narrative">It drops.</p>

            <p class="narrative">You stare at the blood on your hands. At the thing you just did.</p>

            <p class="narrative thought">You don't feel guilty. That's what scares you.</p>

            <p class="narrative thought">You feel <em>alive</em>.</p>

            <p class="narrative">You make it to the stairwell. Three floors down, you find someone else: a woman, maybe thirty, fighting off two of them with a baseball bat. She moves like water—precise, devastating.</p>

            <p class="narrative">She sees you. Doesn't hesitate.</p>

            <p class="dialogue">"Behind me. <em>Move.</em>"</p>

            <p class="narrative">You move.</p>

            <p class="narrative">Together, you carve through six more before reaching the street. She pulls you into an alley, then through a back door, into the storage room of a convenience store.</p>

            <p class="dialogue">"Soojin," she says, catching her breath. "Former ROK Special Forces."</p>

            <p class="dialogue">"Yuna. Museum curator."</p>

            <p class="narrative">She looks you up and down. Cataloguing. Assessing.</p>

            <p class="dialogue">"You handled that knife like you knew what you were doing."</p>

            <p class="dialogue">"Beginner's luck."</p>

            <p class="dialogue">"Bullshit." Something flickers in her eyes. Not quite a smile. "You've got instincts. That's rare."</p>

            <p class="narrative">She has supplies. Weapons. A plan.</p>

            <p class="dialogue">"There's a boat at Incheon. Contact says Japan's still clean. We leave at dawn."</p>

            <p class="narrative">She hands you a protein bar. Her fingers brush yours. The touch lingers a second too long.</p>

            <p class="dialogue">"Get some rest," she says. "Tomorrow's going to be harder."</p>

            <p class="narrative">You don't sleep. Neither does she.</p>

            <p class="narrative">At 3 AM, she speaks into the darkness:</p>

            <p class="dialogue">"I was discharged for loving my CO. She didn't love me back the same way. At least, not publicly." A pause. "She was in Busan when this started."</p>
        `,
        choices: [
            { text: "\"We could go back for her. After Japan.\"", target: 10 },
            { text: "\"Her loss.\"", target: 11 },
            { text: "Say nothing. Just move closer.", target: 12 },
            { text: "\"Tell me more about her.\"", target: 25 }
        ]
    },

    // ═══════════════════════════════════════════════════════════════
    // ACT TWO: THE CROSSING
    // ═══════════════════════════════════════════════════════════════

    5: {
        title: "THE KEY",
        thread: "yuna",
        content: `
            <p class="narrative">You run.</p>

            <p class="narrative">The fire escape groans but holds. Behind you, you hear the fire extinguisher connect—once, twice—and then nothing.</p>

            <p class="narrative">Mrs. Park's key is cold in your palm.</p>

            <p class="narrative">You make it to Yeouido by nightfall. The storage unit is exactly where she said. Inside: camping gear, MREs, a shortwave radio, and a locked case at the back.</p>

            <p class="narrative">Three handguns. Full magazines.</p>

            <p class="narrative thought">Her husband was <em>very</em> paranoid.</p>

            <p class="narrative">The radio crackles. A voice—young, desperate.</p>

            <p class="dialogue"><em>"If anyone can hear this, we're at Seoul Station. Forty survivors. Running out of supplies. Please—if you can help—"</em></p>

            <p class="narrative">You have enough supplies for one person to last months. Or forty people to last days.</p>

            <p class="narrative thought">Mrs. Park didn't save you so you could save yourself.</p>
        `,
        choices: [
            { text: "Go to Seoul Station. Share what you have.", target: 13 },
            { text: "Stay alone. Survive. Build something in the ruins.", target: 14 },
            { text: "Open the locked case at the back. Read the journal.", target: 45 }
        ]
    },

    7: {
        title: "THE REUNION",
        thread: "minho",
        content: `
            <p class="narrative">You take his hand.</p>

            <p class="narrative">The drive to Bukhansan is terrifying. Minho drives like a man possessed, weaving through burning streets, running over things you try not to see.</p>

            <p class="dialogue">"I never stopped," he says, eyes on the road. "Loving you. I just forgot how to show it."</p>

            <p class="dialogue">"I know."</p>

            <p class="dialogue">"I was a coward. I was—"</p>

            <p class="dialogue">"Minho. Focus on driving."</p>

            <p class="narrative">Something almost like a smile crosses his face.</p>

            <p class="narrative">You reach the safe zone at dawn. Fences, guards, tents—maybe a thousand survivors.</p>

            <p class="narrative">Inside, you're assigned a tent. Shared. Someone's sense of humor.</p>

            <p class="narrative">Minho stands by the entrance, watching you. That intensity that used to make you forget how to breathe.</p>

            <p class="dialogue">"I know I have to earn you back," he says quietly. "I know words aren't enough."</p>

            <p class="dialogue">"Then stop talking."</p>

            <p class="narrative">He crosses the distance between you.</p>

            <div class="spicy">
                <p class="narrative">His hands find your waist, pulling you against him. His mouth finds your jaw, your neck, the spot behind your ear that makes your knees weak.</p>

                <p class="dialogue">"I've dreamed about this," he breathes against your skin. "Every night for six months."</p>

                <p class="dialogue">"Me too."</p>

                <p class="dialogue">"Tell me to stop." His hands slide lower. "Tell me to stop and I will."</p>

                <p class="dialogue">"Don't you dare."</p>

                <p class="narrative">He undresses you slowly. Not seductive—methodical. Like he's unwrapping something precious and refusing to be rushed.</p>

                <p class="dialogue">"Say it now."</p>

                <p class="dialogue">"I love you." His hands are on your hips, pulling you against him, and you can feel exactly how much he means it. "I love you. I love you. I'm going to spend the rest of this fucking apocalypse proving it."</p>

                <p class="narrative">You kiss him to shut him up.</p>

                <p class="narrative">It's not gentle. Six months of anger and want and unspent grief pouring out through teeth and tongue. His hands are in your hair, your nails are down his back, and when he finally lifts you and lowers you onto the narrow cot, you don't care that the canvas walls are thin.</p>

                <p class="narrative thought">Let them hear.</p>

                <p class="dialogue">"Look at me," he says, pushing inside you inch by devastating inch. "I want to see your eyes when you fall apart."</p>

                <p class="narrative">You don't look away.</p>
            </div>

            <div class="poetic">
                All those shooting stars we counted:<br>
                matter burning up on entry,<br>
                brief and brilliant,<br>
                making someone's wish real<br>
                at the cost of its own light.
            </div>

            <p class="narrative">When it's over, you're wrapped around each other, sweaty and breathless. His fingers trace patterns on your shoulder.</p>

            <p class="dialogue">"Stay," you whisper.</p>

            <p class="dialogue">"I'm not going anywhere. Not ever again."</p>
        `,
        choices: [
            { text: "Build this life with him.", target: 15 },
            { text: "Three weeks later, a Special Forces unit arrives...", target: 59 }
        ]
    },

    8: {
        title: "SEPARATE PATHS",
        thread: "yoo",
        content: `
            <p class="dialogue">"I'll meet you there," you say. "I need to do this my way."</p>

            <p class="narrative">Pain flickers across his face. Then understanding.</p>

            <p class="dialogue">"Bukhansan. Sunset tomorrow. If you're not there—"</p>

            <p class="dialogue">"Don't wait."</p>

            <p class="narrative">You go your own way.</p>

            <p class="narrative">Alone, you move differently. Quieter. Smarter. You learn the rhythm of the dead—their blind spots, their patterns. By the time you reach the safe zone, you've changed.</p>

            <p class="narrative">Minho is there. But so is someone else: the woman who checked names at the gate. Tall. Striking. Silver-streaked hair.</p>

            <p class="narrative">You learn her name is Colonel Yoo. You learn Minho served under her. You learn the way she looks at him—proprietary, assessing.</p>

            <p class="narrative">You learn a lot of things.</p>

            <p class="narrative">At night, alone in your assigned tent, you wonder if you made a mistake. If you should have just let him—</p>

            <p class="narrative">The tent flap opens.</p>

            <p class="narrative">It's not Minho.</p>

            <p class="narrative">It's the woman from the checkpoint. Up close, she's younger than you thought—mid-thirties, maybe, wearing her authority like armor. Her eyes are sharp.</p>

            <p class="dialogue">"Yuna, right? The girlfriend."</p>

            <p class="dialogue">"Ex-girlfriend."</p>

            <p class="dialogue">"Mmm." She steps closer. "He talked about you. Before. When he was under my command." Another step. "He said you had a way of making him stupid."</p>

            <p class="dialogue">"Did he."</p>

            <p class="dialogue">"He said a lot of things." She's close enough now that you can smell gunpowder and something floral. "I thought maybe he was exaggerating. I see now he wasn't."</p>

            <p class="dialogue">"What do you want?"</p>

            <p class="narrative">Her smile is slow. Dangerous.</p>

            <p class="dialogue">"The same thing he wants. The same thing you want." She reaches out, tucks a strand of hair behind your ear. Her touch is electric. "The question is whether you're brave enough to take it."</p>
        `,
        choices: [
            { text: "Pull away. This is complicated enough.", target: 16 },
            { text: "\"What exactly are you offering?\"", target: 17 },
            { text: "Kiss her. Life is short and getting shorter.", target: 18 }
        ]
    },

    // ═══════════════════════════════════════════════════════════════
    // ENDINGS
    // ═══════════════════════════════════════════════════════════════

    9: {
        title: "THE REKINDLED FLAME",
        thread: "minho",
        isEnding: true,
        endingNumber: 1,
        content: `
            <p class="narrative">You kiss him.</p>

            <p class="narrative">No warning. No preamble. You grab his collar and pull him down and take what you've wanted for six months.</p>

            <p class="narrative">He freezes for half a second. Then his hands are on you, desperate, bruising, and he's kissing you back like you're the only oxygen in a burning world.</p>

            <p class="dialogue">"Yuna—"</p>

            <p class="dialogue">"Shut up." You're already pulling at his jacket. "The world is ending. I'm not wasting another second."</p>

            <div class="spicy">
                <p class="narrative">You don't make it to the safe zone that night.</p>

                <p class="narrative">You pull him into an abandoned apartment, barricade the door, and take what you're owed.</p>

                <p class="narrative">He pushes you against the wall, his mouth on your throat, his hands everywhere.</p>

                <p class="dialogue">"I should apologize—"</p>

                <p class="dialogue">"Later."</p>

                <p class="dialogue">"I should explain—"</p>

                <p class="dialogue">"<em>Later.</em>"</p>

                <p class="dialogue">"I love you," he says, and swallows your response with another kiss.</p>
            </div>

            <p class="narrative">When you finally reach Bukhansan, three days later, you're different. The distance between you has closed. The silence has been filled—with words, with skin, with promises made in the dark.</p>

            <div class="ending">
                <div class="ending-number">ENDING 1 OF 13</div>
                <h2 class="ending-title">THE REKINDLED FLAME</h2>
                <div class="ending-text">
                    <p>The world ended. But you found each other in the ashes.</p>
                    <p>Six months later, you lead supply runs together. He follows you into danger without question. You follow him out.</p>
                    <p>And every night, in the tent that's become yours, he proves what he couldn't say before:</p>
                    <p><em>"I choose you. Every time. I choose you."</em></p>
                </div>
            </div>
        `,
        choices: []
    },

    13: {
        title: "THE DISPATCHER",
        thread: "yuna",
        isEnding: true,
        endingNumber: 2,
        content: `
            <p class="narrative">You go.</p>

            <p class="narrative">Mrs. Park didn't save you so you could save yourself.</p>

            <p class="narrative">Seoul Station is worse than you imagined: forty-three people crammed into a ticket office, barricaded with vending machines. The children are too quiet. The adults are losing hope.</p>

            <p class="narrative">When you walk in with supplies, they stare at you like you're salvation.</p>

            <p class="dialogue">"Who are you?" the leader asks—a former transit officer named Mr. Bae.</p>

            <p class="dialogue">"Someone who got lucky."</p>

            <p class="narrative">You stay. You organize. You build something.</p>

            <p class="narrative">By spring, Seoul Station is the heart of a network—survivor groups connected by scavenged radios and dangerous supply runs.</p>

            <p class="narrative">And somewhere along the way, you fall in love.</p>

            <p class="narrative">Not with one person. With the work. With the impossible, stubborn act of keeping people alive.</p>

            <div class="ending">
                <div class="ending-number">ENDING 2 OF 13</div>
                <h2 class="ending-title">THE DISPATCHER</h2>
                <div class="ending-text">
                    <p>They call you the Dispatcher. The voice on the radio. The one who coordinates rescues and shares resources and refuses to let anyone die alone.</p>
                    <p>Years later, when they write the history of the Seoul Reclamation, they won't know your face.</p>
                    <p>But they'll quote your words:</p>
                    <p><em>"This is Dispatcher Yuna, Seoul Station. If you can hear this, you're not alone."</em></p>
                </div>
            </div>
        `,
        choices: []
    },

    15: {
        title: "THE SURVIVORS",
        thread: "minho",
        isEnding: true,
        endingNumber: 3,
        content: `
            <p class="narrative">Three months in the safe zone. Three months of learning to be together again—really together, not the shadow of a relationship you had before.</p>

            <p class="narrative">He's different now. Softer in some ways, harder in others. He doesn't take anything for granted.</p>

            <p class="dialogue">"I have nightmares," he admits one night, lying beside you. "About being too late. About finding your door broken open and—"</p>

            <p class="dialogue">"I'm here." You press your palm to his chest. Feel his heart beating. "I'm here."</p>

            <p class="narrative">When the call comes to lead a supply run, you both volunteer.</p>

            <p class="dialogue">"You don't have to," he says. "You could stay—"</p>

            <p class="dialogue">"We do this together or not at all."</p>

            <p class="narrative">Something flickers in his eyes. Pride, maybe. Or love.</p>

            <p class="dialogue">"Together," he agrees.</p>

            <div class="ending">
                <div class="ending-number">ENDING 3 OF 13</div>
                <h2 class="ending-title">THE SURVIVORS</h2>
                <div class="ending-text">
                    <p>You fight together. Build together. Lead together.</p>
                    <p>When the safe zone becomes a city, you're on the council. When the city becomes a nation, you're its founders.</p>
                    <p>And every night, in the home you built from nothing, he holds you like you're everything.</p>
                    <p><em>"I choose you," he whispers. "Forever. I choose you."</em></p>
                </div>
            </div>
        `,
        choices: []
    },

    11: {
        title: "HER LOSS",
        thread: "soojin",
        content: `
            <p class="dialogue">"Her loss," you say.</p>

            <p class="narrative">Soojin laughs—bitter, surprised.</p>

            <p class="dialogue">"You're the first person who's ever said that. Everyone else said 'that's too bad' or 'you should have been more careful.'"</p>

            <p class="dialogue">"Those people are idiots. And probably dead now."</p>

            <p class="narrative">She laughs again. This time it sounds real.</p>

            <p class="dialogue">"You're not what I expected," she says. "Most people I rescue... they break."</p>

            <p class="dialogue">"My father was in the Navy. He taught me something." You meet her eyes. "Fear is just love holding its breath."</p>

            <div class="poetic">
                Through a tangled tapestry,<br>
                dances a threaded needle,<br>
                fate nudged this way and that,<br>
                life is ever winding and woven,<br>
                paths are joined and broken,<br>
                connections are made,<br>
                even when words aren't spoken.
            </div>

            <p class="narrative">She's quiet for a long moment.</p>

            <p class="dialogue">"I like that," she finally says. "I'm going to steal it."</p>

            <p class="dialogue">"It's not stealing if I give it to you."</p>

            <p class="narrative">The silence between you changes. Thickens.</p>

            <p class="narrative">She moves first—or maybe you do. It doesn't matter. Her mouth finds yours in the dark, hungry and certain.</p>

            <p class="dialogue">"Tell me to stop," she breathes.</p>

            <p class="narrative">You pull her closer.</p>

            <div class="spicy">
                <p class="narrative">She kisses like she fights: no wasted motion, every touch intentional.</p>

                <p class="dialogue">"I don't do this," she says, pulling back. "Random hookups in the apocalypse. This isn't—"</p>

                <p class="dialogue">"Then what is it?"</p>

                <p class="narrative">Her eyes are silver in the darkness. "I don't know. But I want to find out."</p>

                <p class="narrative">She pushes you down onto the pile of blankets she'd arranged as a bed. Her hands are calloused, capable, and when they slide under your shirt, you gasp.</p>

                <p class="dialogue">"Sensitive," she murmurs. Not a question.</p>

                <p class="dialogue">"Shut up."</p>

                <p class="narrative">She grins. Wolfish. "Make me."</p>

                <p class="narrative">You try. You fail. She's stronger, faster, and she uses every advantage ruthlessly.</p>

                <p class="narrative">But she's also careful. She pauses at every new inch of skin, checks your eyes, waits for permission.</p>

                <p class="dialogue">"This okay?"</p>

                <p class="dialogue">"<em>Yes.</em>"</p>

                <p class="dialogue">"This?"</p>

                <p class="dialogue">"<em>Yes.</em>"</p>

                <p class="dialogue">"And this—" Her hand slides between your thighs. "This okay too?"</p>

                <p class="narrative">You answer with your body.</p>

                <p class="narrative">She takes her time. Learns you. Catalogues every sound you make like tactical intelligence.</p>

                <p class="narrative">When you finally break apart, gasping her name, she watches you through it with something like wonder.</p>

                <p class="dialogue">"Beautiful," she says. "Fucking beautiful."</p>

                <p class="dialogue">"Your turn."</p>

                <p class="dialogue">"You don't have to—"</p>

                <p class="dialogue">"I want to." You push yourself up. Push her down. "Lie back and let me."</p>

                <p class="narrative">She hesitates—just for a second. Then something in her relaxes.</p>

                <p class="dialogue">"Okay," she whispers. "Okay."</p>
            </div>

            <p class="narrative">When dawn comes, you're tangled together, her arm heavy across your waist.</p>

            <p class="dialogue">"Stay," she says.</p>

            <p class="narrative">You're not sure if she means right now or forever.</p>

            <p class="narrative">You decide it doesn't matter.</p>

            <p class="dialogue">"I'm staying."</p>
        `,
        choices: [
            { text: "Head to Japan together.", target: 19 }
        ]
    },

    19: {
        title: "THE NEW LIFE",
        thread: "soojin",
        isEnding: true,
        endingNumber: 4,
        content: `
            <p class="narrative">The boat to Japan is everything Soojin promised: small, fast, dangerous.</p>

            <p class="narrative">You fight off infected at the docks. You navigate through storms. You hold each other through the crossing.</p>

            <p class="narrative">Japan is real. Japan is alive.</p>

            <p class="narrative">At the quarantine checkpoint, they ask your relationship.</p>

            <p class="narrative">Soojin looks at you. You look at her.</p>

            <p class="dialogue">"Partners," she says.</p>

            <p class="narrative">It sounds right.</p>

            <p class="narrative">Three months later, she gets word: Soyeon is alive. In a camp in Jeju. She wants Soojin to come back.</p>

            <p class="narrative">Your heart drops. "That's wonderful."</p>

            <p class="dialogue">"I told her no."</p>

            <p class="dialogue">"Why?"</p>

            <p class="dialogue">"Because I'm already with someone."</p>

            <p class="narrative">She crosses the distance between you. Takes your face in her hands.</p>

            <p class="dialogue">"I love you," she says. "I've been trying to figure out how to say it. Apparently the best I could manage is 'I chose you over the woman I spent years pining for.'"</p>

            <p class="narrative">You laugh. It's wet and messy and perfect.</p>

            <p class="dialogue">"That's the most romantic thing anyone's ever said to me."</p>

            <p class="dialogue">"I'm not a romantic person."</p>

            <p class="dialogue">"You are for me."</p>

            <div class="ending">
                <div class="ending-number">ENDING 4 OF 13</div>
                <h2 class="ending-title">THE NEW LIFE</h2>
                <div class="ending-text">
                    <p>You build a life in Japan. Quiet. Ordinary. Extraordinary.</p>
                    <p>Soojin learns to laugh. You learn to fight. Together, you become something neither of you expected:</p>
                    <p><em>A home.</em></p>
                </div>
            </div>
        `,
        choices: []
    },

    14: {
        title: "THE HERMIT BEGINS",
        thread: "yuna",
        content: `
            <p class="narrative">You stay.</p>

            <p class="narrative">In the storage unit, then a secured apartment, then a cabin in the mountains. You survive. Alone.</p>

            <p class="narrative">The years pass strangely. You learn to hunt, farm, preserve. You talk to yourself to remember how speech works.</p>

            <p class="narrative">One morning, a decade later, you wake to the sound of a child crying.</p>

            <p class="narrative">Outside your gate: a woman. Gaunt. Exhausted. Carrying a baby.</p>

            <p class="dialogue">"Please," she says. "We've been walking for days."</p>
        `,
        choices: [
            { text: "Open the gate.", target: 20 },
            { text: "Give them supplies but don't let them stay.", target: 21 }
        ]
    },

    20: {
        title: "THE FOUND FAMILY",
        thread: "yuna",
        isEnding: true,
        endingNumber: 5,
        content: `
            <p class="narrative">You open the gate.</p>

            <p class="narrative">The woman's name is Hyejin. The baby is Junho. They've been walking for three weeks.</p>

            <p class="narrative">You nurse them back to health. It takes months.</p>

            <p class="narrative">Somewhere along the way, they become yours.</p>

            <p class="narrative">Ten years later, Junho is ten. He calls you <em>Imo</em>—Auntie.</p>

            <p class="narrative">One day, he asks where you came from.</p>

            <p class="narrative">You tell him everything. The museum. The dead. The choices.</p>

            <p class="narrative">He listens, quiet and serious.</p>

            <p class="dialogue">"Are you glad you opened the gate?" he asks.</p>

            <p class="narrative">You look at him—this miracle, this future, this reason.</p>

            <p class="dialogue">"Every single day."</p>

            <div class="ending">
                <div class="ending-number">ENDING 5 OF 13</div>
                <h2 class="ending-title">THE FOUND FAMILY</h2>
                <div class="ending-text">
                    <p>You never return to Seoul. Never fight in any war.</p>
                    <p>You do something harder: you live. You raise a child who was never yours and became everything.</p>
                    <p>And when he has children of his own, he tells them about the woman who opened a gate once and never stopped opening it.</p>
                </div>
            </div>
        `,
        choices: []
    },

    18: {
        title: "THE CHOICE",
        thread: "yoo",
        content: `
            <p class="narrative">You kiss her.</p>

            <p class="narrative">She tastes like adrenaline and authority. Her hand tightens in your hair—not gentle, not asking—and she walks you backward until you hit the tent's center pole.</p>

            <p class="dialogue">"Decisive," she murmurs against your mouth. "Good."</p>

            <p class="dialogue">"Less talking."</p>

            <p class="dialogue">"Ordering me around?" She bites your lower lip. Hard enough to sting. "Brave."</p>

            <div class="spicy">
                <p class="narrative">Her hands are everywhere—pulling at your clothes, mapping your body with military precision. She knows what she's doing. She knows exactly where to touch.</p>

                <p class="dialogue">"This is just tonight," she says, pulling back. Her eyes are dark. "You understand that."</p>

                <p class="dialogue">"I understand."</p>

                <p class="dialogue">"And Minho?"</p>

                <p class="dialogue">"Isn't here."</p>

                <p class="narrative">She grins. It's predatory and beautiful.</p>

                <p class="dialogue">"Then let me show you what you've been missing."</p>

                <p class="narrative">She's not gentle. She doesn't apologize for it. Every touch is a demand: <em>give me this. Show me that. Let go.</em></p>

                <p class="narrative">When you finally break apart, she watches you with satisfaction.</p>

                <p class="dialogue">"Again," you gasp.</p>

                <p class="dialogue">"Say please."</p>

                <p class="narrative">You glare at her.</p>

                <p class="narrative">She laughs—genuine, surprised. "I like you," she says. "Yuna the museum curator." Her fingers trace down your stomach. "Since you asked so nicely..."</p>
            </div>

            <p class="narrative">You don't sleep.</p>

            <p class="narrative">In the morning, she's gone. A note on your pillow:</p>

            <p class="dialogue"><em>Same time tomorrow. If you want.<br>—Y.</em></p>

            <p class="narrative">You fold the note carefully. Tuck it into your pocket.</p>

            <p class="narrative">When Minho finds you at breakfast, he looks at you like he's seeing something new.</p>

            <p class="dialogue">"You seem different," he says.</p>

            <p class="dialogue">"Different how?"</p>

            <p class="dialogue">"I don't know." He studies you. "More... certain."</p>

            <p class="narrative">You smile. Don't explain.</p>

            <p class="narrative thought">Some things don't need explaining.</p>
        `,
        choices: [
            { text: "Keep seeing her.", target: 23 }
        ]
    },

    23: {
        title: "THE THROUPLE",
        thread: "yoo",
        isEnding: true,
        endingNumber: 6,
        content: `
            <p class="narrative">It takes a month before Minho realizes something's different.</p>

            <p class="narrative">It takes two before he confronts you about it.</p>

            <p class="dialogue">"Colonel Yoo," he says flatly. "You and Colonel Yoo."</p>

            <p class="narrative">You don't lie. "Yes."</p>

            <p class="dialogue">"How long?"</p>

            <p class="dialogue">"Since the second night."</p>

            <p class="narrative">He's quiet for a long moment. Then:</p>

            <p class="dialogue">"Do you love her?"</p>

            <p class="dialogue">"I don't know. I like her. She makes me feel... powerful."</p>

            <p class="dialogue">"And me?"</p>

            <p class="narrative">You cross to him. Take his hands.</p>

            <p class="dialogue">"You make me feel loved. That's different. That's not less."</p>

            <p class="narrative">He's struggling—you can see it. The old Minho would have walked away. The old Minho would have made this about his pride.</p>

            <p class="narrative">The new Minho looks at you.</p>

            <p class="dialogue">"I don't know how to do this," he admits.</p>

            <p class="dialogue">"Neither do I. But I'd rather figure it out than lose you."</p>

            <p class="dialogue">"And her?"</p>

            <p class="dialogue">"She's... interested. If you are."</p>

            <p class="narrative">His eyebrows rise. "Interested in what?"</p>

            <p class="dialogue">"In seeing if this can work. The three of us."</p>

            <p class="narrative">He's silent for so long you think you've broken something irreparable.</p>

            <p class="narrative">Then: "I'll talk to her."</p>

            <div class="poetic">
                All those shooting stars we counted:<br>
                matter burning up on entry,<br>
                brief and brilliant,<br>
                making someone's wish real<br>
                at the cost of its own light.
            </div>

            <p class="narrative">One year later. It's not easy. It's never easy.</p>

            <p class="narrative">But somewhere between supply runs and strategy meetings and tangled limbs in a tent that's become too small, you figure it out.</p>

            <p class="dialogue">"This is insane," Yoo says one night, sandwiched between you and Minho.</p>

            <p class="dialogue">"Completely," he agrees.</p>

            <p class="dialogue">"Absolutely," you add.</p>

            <p class="narrative">She kisses you. Then him. "I like insane."</p>

            <div class="ending">
                <div class="ending-number">ENDING 6 OF 13</div>
                <h2 class="ending-title">THE THROUPLE</h2>
                <div class="ending-text">
                    <p>The world ended. But you found two people who made the ruins feel like home.</p>
                    <p>Minho gives you steadiness. Yoo gives you fire. Together, they give you everything.</p>
                    <p>And when people ask how it works—the three of you, the mess, the impossibility—you just smile.</p>
                    <p><em>"We chose each other. Every day. That's all it takes."</em></p>
                </div>
            </div>
        `,
        choices: []
    },

    21: {
        title: "THE HERMIT",
        thread: "yuna",
        isEnding: true,
        endingNumber: 7,
        content: `
            <p class="narrative">You give them food. Water. Medicine.</p>

            <p class="dialogue">"There's a camp," you say. "Fifty kilometers south. They'll take you in."</p>

            <p class="narrative">Hyejin looks at you with hollow eyes.</p>

            <p class="dialogue">"Thank you."</p>

            <p class="narrative">They leave. You watch them go.</p>

            <p class="narrative">Three months later, a survivor from the southern camp finds you.</p>

            <p class="dialogue">"The woman with the baby? They made it. The boy's growing strong."</p>

            <p class="narrative">You nod.</p>

            <p class="dialogue">"She talks about you. The woman in the mountains who saved their lives but wouldn't let them stay."</p>

            <p class="narrative">You look out at the empty hills. The silence that's become your only companion.</p>

            <p class="narrative thought">Maybe you made the right choice.</p>

            <p class="narrative thought">Maybe not.</p>

            <div class="ending">
                <div class="ending-number">ENDING 7 OF 13</div>
                <h2 class="ending-title">THE HERMIT</h2>
                <div class="ending-text">
                    <p>You live alone for thirty more years.</p>
                    <p>Safe. Quiet. Haunted by the gate you didn't open.</p>
                    <p>Some endings aren't tragedies. They're just... choices.</p>
                </div>
            </div>
        `,
        choices: []
    },

    10: {
        title: "THE PROMISE",
        thread: "soojin",
        content: `
            <p class="dialogue">"We could go back for her," you say. "After Japan. When we have supplies. A plan."</p>

            <p class="narrative">Soojin goes very still.</p>

            <p class="dialogue">"You'd do that? For someone you've never met?"</p>

            <p class="dialogue">"For you."</p>

            <p class="narrative">The silence stretches. When she finally speaks, her voice is rough.</p>

            <p class="dialogue">"You don't even know me."</p>

            <p class="dialogue">"I know you saved my life. I know you're going back into hell with a museum curator you just met." You meet her eyes. "I know enough."</p>

            <p class="narrative">She doesn't cry. But something in her face cracks open.</p>

            <p class="dialogue">"Okay," she says. "Okay. Japan first. Then Busan. Then—" She stops. Swallows. "Then we see."</p>

            <p class="narrative">She holds out her hand. You take it.</p>

            <p class="narrative">Neither of you lets go until dawn.</p>
        `,
        choices: [
            { text: "Go to Japan together, then return.", target: 24 }
        ]
    },

    24: {
        title: "THE LIBERATORS",
        thread: "soojin",
        isEnding: true,
        endingNumber: 8,
        content: `
            <p class="narrative">Three years of war. Three years of liberation.</p>

            <p class="narrative">Soojin leads the combat teams. You lead the logistics.</p>

            <p class="narrative">The day you take back Seoul, you stand in the ruins of the National Museum. Your museum. What's left of it.</p>

            <p class="narrative">Soojin finds you there.</p>

            <p class="dialogue">"We did it," she says.</p>

            <p class="dialogue">"We did."</p>

            <p class="narrative">She takes your hand. Squeezes.</p>

            <p class="dialogue">"What now?"</p>

            <p class="narrative">You look at the rubble. At the city beyond. At the future spreading out in all directions.</p>

            <p class="dialogue">"We rebuild."</p>

            <p class="narrative">She kisses you. Long and slow and certain.</p>

            <p class="dialogue">"Then let's rebuild."</p>

            <div class="ending">
                <div class="ending-number">ENDING 8 OF 13</div>
                <h2 class="ending-title">THE LIBERATORS</h2>
                <div class="ending-text">
                    <p>Korea isn't saved. Not yet. Not fully.</p>
                    <p>But you've proven it can be.</p>
                    <p>And the woman beside you—the one who fought through hell with you, who believed in you when belief was madness—she's not going anywhere.</p>
                    <p><em>"Together," she says.</em></p>
                    <p><em>"Together."</em></p>
                </div>
            </div>
        `,
        choices: []
    },

    12: {
        title: "THE SILENCE",
        thread: "soojin",
        content: `
            <p class="narrative">You don't say anything.</p>

            <p class="narrative">You just move closer. Close enough that your shoulders touch. Close enough that she can feel you breathing.</p>

            <p class="narrative">For a long time, neither of you speaks. The convenience store creaks around you. Outside, the dead wander past.</p>

            <p class="dialogue">"I haven't told anyone that before," Soojin says quietly.</p>

            <p class="dialogue">"You don't have to explain anything."</p>

            <p class="dialogue">"I know." She turns to look at you. Her eyes catch the dim light. "That's why I'm telling you."</p>

            <p class="narrative">Something passes between you. Recognition.</p>

            <p class="narrative">When you sleep, you sleep back to back, keeping each other warm.</p>

            <p class="narrative">When you wake, her hand is in yours.</p>

            <p class="narrative">Neither of you mentions it. But neither of you lets go.</p>
        `,
        choices: [
            { text: "Continue to Japan.", target: 19 }
        ]
    },

    16: {
        title: "BOUNDARIES",
        thread: "yoo",
        content: `
            <p class="narrative">You pull away.</p>

            <p class="dialogue">"This is complicated enough."</p>

            <p class="narrative">Colonel Yoo steps back. Studies you. Something like respect flickers in her eyes.</p>

            <p class="dialogue">"Fair enough." She smooths her uniform. "You know where to find me. If you change your mind."</p>

            <p class="narrative">She leaves.</p>

            <p class="narrative">You stand alone in the dark, heart pounding, wondering if you made the right choice.</p>

            <p class="narrative">In the morning, Minho is waiting for you.</p>

            <p class="dialogue">"I saw Yoo leaving your tent last night," he says quietly. Nothing in his voice but question.</p>

            <p class="dialogue">"She wanted something. I said no."</p>

            <p class="narrative">He nods. Slow.</p>

            <p class="dialogue">"Okay."</p>

            <p class="dialogue">"Okay?"</p>

            <p class="dialogue">"Okay." He reaches out. Takes your hand. "I trust you."</p>

            <p class="narrative">Something in your chest loosens.</p>

            <p class="dialogue">"I trust you too."</p>
        `,
        choices: [
            { text: "Build something with Minho.", target: 15 }
        ]
    },

    17: {
        title: "THE OFFER",
        thread: "yoo",
        content: `
            <p class="dialogue">"What exactly are you offering?"</p>

            <p class="narrative">Colonel Yoo's smile widens.</p>

            <p class="dialogue">"Direct. I like that." She steps closer—close enough that you can count the silver strands in her hair. "Minho is... complicated. He's a good soldier. But he's not decisive. He waits for permission."</p>

            <p class="dialogue">"And you don't."</p>

            <p class="dialogue">"I take what I want." Her hand comes up, fingers trailing along your jaw. "Right now, I want you."</p>

            <p class="dialogue">"You don't even know me."</p>

            <p class="dialogue">"I know you survived. I know you walked here alone through hell. I know the way he looks at you—like you're his whole world." Her eyes are assessing. "I want to know what's so special about Yuna the museum curator."</p>

            <p class="dialogue">"And if I say no?"</p>

            <p class="dialogue">"Then you say no. And I leave. And we never speak of this again."</p>

            <p class="narrative">Her hand hasn't moved from your face.</p>
        `,
        choices: [
            { text: "\"Show me what you've got.\"", target: 18 },
            { text: "Pull away.", target: 16 }
        ]
    },

// ═══════════════════════════════════════════════════════════════
    // EXPANDED CONTENT - THE WEB DEEPENS
    // ═══════════════════════════════════════════════════════════════

    25: {
        title: "SOYEON",
        thread: "soojin",
        content: `
            <p class="dialogue">"Tell me more about her."</p>

            <p class="narrative">Soojin is quiet for so long you think she won't answer. Then:</p>

            <p class="dialogue">"Captain Soyeon Park. Tactical command. She had this way of walking into a room that made everyone stand straighter." A rough laugh. "She made me want to be better. That's dangerous in the military."</p>

            <p class="dialogue">"Dangerous how?"</p>

            <p class="dialogue">"Because I stopped caring about the mission. I only cared about her." Soojin's voice drops. "I took a bullet that was meant for her in Sokcho. Shrapnel still in my shoulder. The debrief asked why I broke formation. I couldn't lie."</p>

            <p class="narrative">Silence. You can hear the dead shuffling past outside.</p>

            <p class="dialogue">"She watched them strip my rank. Didn't say a word. I thought—" Soojin stops. Breathes. "I thought she'd fight for me. She didn't."</p>

            <p class="dialogue">"What did she say?"</p>

            <p class="dialogue">"Three months later, she sent a letter. One line: 'I would have taken that bullet for you too. I just wasn't brave enough to say it.'"</p>

            <p class="narrative">You don't know what to say. So you say nothing.</p>

            <p class="narrative">After a while, Soojin speaks again:</p>

            <p class="dialogue">"Why are you asking?"</p>
        `,
        choices: [
            { text: "\"Because I want to understand you.\"", target: 26 },
            { text: "\"Because if we're going to survive, I need to know who I'm trusting.\"", target: 27 },
            { text: "\"Because you're the first person in two years who hasn't looked at me like I'm breakable.\"", target: 28 }
        ]
    },

    26: {
        title: "UNDERSTANDING",
        thread: "soojin",
        content: `
            <p class="dialogue">"Because I want to understand you."</p>

            <p class="narrative">Soojin turns to look at you. In the dark, her eyes catch what little light filters through the boarded windows.</p>

            <p class="dialogue">"Why?"</p>

            <p class="dialogue">"Because we might die tomorrow. And if we do, I'd rather die next to someone real than someone wearing armor."</p>

            <p class="narrative">She's quiet. Then she does something unexpected: she laughs. Soft, genuine, surprised.</p>

            <p class="dialogue">"Museum curator," she says. "Where did you learn to talk like that?"</p>

            <p class="dialogue">"My father was a poet. Navy man, but a poet at heart. He said the only things worth keeping are the things you can carry in your chest."</p>

            <p class="dialogue">"What happened to him?"</p>

            <p class="dialogue">"He died writing. Heart attack at his desk. My mother found him with a pen still in his hand." You smile, though it hurts. "His last line was 'The harbor lights remember what the ships forget.'"</p>

            <p class="narrative">Soojin is very still.</p>

            <p class="dialogue">"That's beautiful."</p>

            <p class="dialogue">"He was beautiful. Broken and brilliant and gone too soon."</p>

            <p class="narrative">The silence between you changes. Becomes something warmer.</p>

            <p class="dialogue">"We should sleep," Soojin says. "Long day tomorrow."</p>

            <p class="dialogue">"Yeah."</p>

            <p class="narrative">Neither of you moves.</p>

            <p class="dialogue">"Yuna?"</p>

            <p class="dialogue">"Yeah?"</p>

            <p class="dialogue">"Thank you. For asking."</p>
        `,
        choices: [
            { text: "Rest. Tomorrow you move to Incheon.", target: 29 }
        ]
    },

    27: {
        title: "TRUST",
        thread: "soojin",
        content: `
            <p class="dialogue">"Because if we're going to survive, I need to know who I'm trusting."</p>

            <p class="narrative">Soojin's expression hardens. For a moment, you think you've blown it.</p>

            <p class="dialogue">"Smart." She doesn't sound offended. "Most people I rescue want to believe I'm a hero. You're the first one who asked for credentials."</p>

            <p class="dialogue">"I'm not most people."</p>

            <p class="dialogue">"No." She studies you. "You're not."</p>

            <p class="narrative">She reaches into her pack and pulls out a worn photograph. Hands it to you.</p>

            <p class="narrative">Two women in uniform, arms around each other, grinning at the camera. Soojin looks younger. Softer. The other woman is striking—high cheekbones, commanding presence even in a photo.</p>

            <p class="dialogue">"That's Soyeon. That's proof I'm capable of trusting someone enough to get my heart broken." She takes the photo back. "You want to know if you can trust me? That's my answer. I trusted her with everything. She's why I know how rare that is."</p>

            <p class="dialogue">"And now?"</p>

            <p class="dialogue">"Now I trust my instincts." She meets your eyes. "My instincts say you're worth keeping alive. Whether you trust me back—" She shrugs. "That's on you."</p>

            <p class="narrative">You consider her. The calluses on her hands. The scar on her jaw. The way she checked your grip on the knife earlier, correcting it without comment.</p>

            <p class="dialogue">"I trust you."</p>

            <p class="dialogue">"Good." Something like warmth flickers in her eyes. "Get some sleep. Tomorrow's going to be worse."</p>
        `,
        choices: [
            { text: "Rest. Tomorrow you move to Incheon.", target: 29 }
        ]
    },

    28: {
        title: "SEEN",
        thread: "soojin",
        content: `
            <p class="dialogue">"Because you're the first person in two years who hasn't looked at me like I'm breakable."</p>

            <p class="narrative">The words come out rawer than you intended. Soojin goes very still.</p>

            <p class="dialogue">"Two years?"</p>

            <p class="dialogue">"My ex. Minho." The name tastes like copper. "He treated me like something precious. Which sounds nice until you realize precious things get put on shelves. Protected. Kept safe." You laugh, bitter. "I wasn't a person to him. I was a thing he was afraid to break."</p>

            <p class="dialogue">"And me?"</p>

            <p class="dialogue">"You handed me a knife and told me to keep up. You didn't ask if I could handle it—you just expected me to." You meet her eyes. "Do you have any idea how long it's been since someone expected anything of me?"</p>

            <p class="narrative">Soojin doesn't respond for a long moment. Then she reaches out—slow, giving you time to pull away—and brushes a strand of hair from your face.</p>

            <p class="dialogue">"I watched you in that stairwell," she says quietly. "The way you moved. The way you didn't hesitate. You're not breakable, Yuna. You're not even close."</p>

            <p class="narrative">Her thumb traces your cheekbone. The touch is gentle but there's nothing fragile about it.</p>

            <p class="dialogue">"Whatever he saw when he looked at you—that wasn't you. That was his fear."</p>

            <p class="narrative">Your throat tightens. You don't trust yourself to speak.</p>

            <p class="dialogue">"Get some rest," she says, pulling back. "Tomorrow we move. And I need you sharp."</p>

            <p class="narrative">She needs you. Not wants. Not hopes. <em>Needs.</em></p>

            <p class="narrative">You sleep better than you have in months.</p>
        `,
        choices: [
            { text: "Rest. Tomorrow you move to Incheon.", target: 29 }
        ]
    },

    29: {
        title: "THE ROAD TO INCHEON",
        thread: "soojin",
        content: `
            <p class="narrative">Dawn. Grey light through broken windows. Soojin is already awake, checking weapons.</p>

            <p class="dialogue">"Routes," she says without preamble. "Option one: main highway. Fastest, but exposed. The infected cluster on roads—they follow the cars."</p>

            <p class="dialogue">"And option two?"</p>

            <p class="dialogue">"Through Bucheon. Industrial zone. More cover, but it's a maze. Easy to get cornered."</p>

            <p class="narrative">She spreads a crumpled map on the floor. Her finger traces both paths.</p>

            <p class="dialogue">"There's a third option. Subway tunnels. Dark, tight, but the infected don't like underground. Something about the acoustics—they can't echolocate."</p>

            <p class="dialogue">"They echolocate?"</p>

            <p class="dialogue">"Something like that. Their vision's gone. They track sound and heat." She taps the map. "Tunnels are silent. No wind. Hard to navigate, but we'd be ghosts."</p>

            <p class="narrative">You study the routes. Think about what you saw yesterday—the way they moved, hunted, fed.</p>
        `,
        choices: [
            { text: "Highway. Speed over stealth.", target: 30 },
            { text: "Bucheon industrial zone. Cover is worth the risk.", target: 31 },
            { text: "Subway tunnels. Become ghosts.", target: 32 }
        ]
    },

    30: {
        title: "THE HIGHWAY",
        thread: "soojin",
        content: `
            <p class="dialogue">"Highway. We move fast, we don't stop, we don't engage."</p>

            <p class="narrative">Soojin nods. "Bold. I like bold." She tosses you a pistol. "You know how to use this?"</p>

            <p class="dialogue">"Point and shoot?"</p>

            <p class="dialogue">"Close enough. Safety's here. Don't aim for the body—skull or nothing. And only if you absolutely have to. Every shot brings more."</p>

            <p class="narrative">You move out at first light. The streets are eerily empty—no one above ground is still human.</p>

            <p class="narrative">The highway is worse than you imagined. Cars scattered like broken toys. Some crashed. Some just... stopped. Doors open. Bloodstains on the asphalt. A child's shoe in the median.</p>

            <p class="dialogue">"Eyes forward," Soojin murmurs. "Don't look at the cars. Don't look at what's inside."</p>

            <p class="narrative">You look anyway. You can't help it.</p>

            <p class="narrative">A family of four in a minivan. The parents in front, slumped against their seatbelts. The children in the back—</p>

            <p class="dialogue">"Yuna. Eyes. Forward."</p>

            <p class="narrative">You walk for three hours before the first pack finds you.</p>

            <p class="narrative">Twelve of them. Coming from behind, moving fast—too fast, legs bent wrong but somehow still running. Their skin is grey-blue. Their mouths are open.</p>

            <p class="dialogue">"Run," Soojin says. "<em>RUN.</em>"</p>

            <p class="narrative">You run.</p>

            <p class="narrative">Soojin takes three down with three shots, buying you space. But more are coming from the sides now—they must have heard—</p>

            <p class="narrative">An overpass ahead. Vehicles piled beneath it. A gap between two trucks.</p>

            <p class="dialogue">"THERE!" You grab her arm, pull her toward the gap.</p>

            <p class="narrative">You squeeze through. They don't fit—their bodies too swollen, too wrong. They pile against the trucks, clawing.</p>

            <p class="narrative">You keep running.</p>

            <p class="narrative">By nightfall, you've reached Incheon's outer limits. Alive. Breathing. Together.</p>

            <p class="dialogue">"That was close," you gasp.</p>

            <p class="dialogue">"That was Tuesday." But she's smiling. "You did good. That gap—I didn't see it."</p>

            <p class="dialogue">"Museum training. Always looking for exits."</p>

            <p class="narrative">She laughs. It sounds like something thawing.</p>
        `,
        choices: [
            { text: "Find the boat contact.", target: 33 }
        ]
    },

    31: {
        title: "THE INDUSTRIAL ZONE",
        thread: "soojin",
        content: `
            <p class="dialogue">"Industrial zone. I'd rather be able to hide."</p>

            <p class="narrative">Soojin nods. "Smart. Careful." She hands you a length of pipe. "Quieter than the gun. Save bullets for emergencies."</p>

            <p class="narrative">Bucheon is a graveyard of factories. Smokestacks cold and silent. Warehouses with doors torn off hinges. Machinery rusting in parking lots.</p>

            <p class="dialogue">"Stay close," Soojin whispers. "Move when I move. Stop when I stop."</p>

            <p class="narrative">You follow her through the labyrinth. She moves like water—smooth, quiet, always aware. You try to match her, stepping where she steps.</p>

            <p class="narrative">Two hours in, she holds up a fist. You freeze.</p>

            <p class="narrative">Ahead: voices. Human voices.</p>

            <p class="dialogue">"—told you, there's nothing left. We stripped this sector last week."</p>

            <p class="dialogue">"Check again. The Colonel wants every scrap of copper wire. Don't argue."</p>

            <p class="narrative">Soojin's expression goes cold. She signals: <em>down, quiet.</em></p>

            <p class="narrative">You press yourself against a rusted conveyor belt. Through the gaps in machinery, you see them: four men in mismatched military gear. Armed. Organized.</p>

            <p class="dialogue">"Scavengers," Soojin breathes in your ear. "Military deserters. They took over the port. Charge survivors for passage."</p>

            <p class="dialogue">"Your boat contact?"</p>

            <p class="dialogue">"Works for them. We can pay or fight. I was hoping to avoid both."</p>

            <p class="narrative">One of the men turns. Looks in your direction.</p>

            <p class="narrative">Time slows.</p>
        `,
        choices: [
            { text: "Stay hidden. Wait them out.", target: 34 },
            { text: "Reveal yourself. Try to negotiate.", target: 35 },
            { text: "Signal Soojin to flank them.", target: 36 }
        ]
    },

    32: {
        title: "THE TUNNELS",
        thread: "soojin",
        content: `
            <p class="dialogue">"Tunnels. We go underground."</p>

            <p class="narrative">Soojin's eyes narrow. Appraising.</p>

            <p class="dialogue">"You're sure? It's dark. Tight. If we're wrong about the acoustics—"</p>

            <p class="dialogue">"I'm sure."</p>

            <p class="narrative">She nods. "Then we need lights. Weapons that work close-quarters. And a backup plan if we get turned around."</p>

            <p class="narrative">The nearest subway entrance is six blocks away. You make it without incident—the dead seem sluggish in morning light, huddled in shadows like they're waiting for something.</p>

            <p class="narrative">The stairs descend into blackness. Soojin clicks on a flashlight, hands you another.</p>

            <p class="dialogue">"Stay within arm's reach. If your light dies, grab my pack. Don't let go."</p>

            <p class="narrative">You descend.</p>

            <p class="narrative">The tunnel swallows all sound. Your footsteps echo strangely—muffled, then sharp, then muffled again. The walls are covered in emergency posters no one read in time.</p>

            <p class="dialogue">"It's cold," you whisper.</p>

            <p class="dialogue">"Good. They like heat. Cold means empty."</p>

            <p class="narrative">You walk for what feels like hours. The stations blur together—Sindorim, Oryu-dong, Yeokgok. Ghost platforms lit only by your flashlights. Abandoned bags. Shoes. A stroller.</p>

            <p class="narrative">At Bucheon Station, you hear it: breathing. Not yours. Not Soojin's.</p>

            <p class="narrative">Something massive, in the dark ahead. Filling the tunnel.</p>

            <p class="dialogue">"Back," Soojin hisses. "Slow. Don't run."</p>

            <p class="narrative">You retreat. The breathing follows—wet, rattling, <em>hungry</em>—but it doesn't chase. Whatever it is, it's not fast. Or maybe it's just waiting.</p>

            <p class="narrative">You find a maintenance door. Force it open. Emerge into a parking garage in Bucheon.</p>

            <p class="narrative">Daylight has never felt so precious.</p>

            <p class="dialogue">"What was that?" you gasp.</p>

            <p class="dialogue">"I don't know." Soojin's face is pale. "And I don't want to find out."</p>
        `,
        choices: [
            { text: "Continue to Incheon above ground.", target: 30 }
        ]
    },

    33: {
        title: "THE HARBOR",
        thread: "soojin",
        content: `
            <p class="narrative">Incheon Harbor is controlled chaos. Refugees crowded on the docks. Armed guards at every checkpoint. Ships in the distance—tantalizingly close, impossibly far.</p>

            <p class="dialogue">"My contact's name is Jae-won," Soojin says. "Former navy. He owes me for Sokcho."</p>

            <p class="narrative">You find him in a warehouse near Pier 7. Older than you expected—grey-haired, weathered, eyes that have seen too much.</p>

            <p class="dialogue">"Soojin." He doesn't smile. "Heard you were dead."</p>

            <p class="dialogue">"Heard wrong."</p>

            <p class="dialogue">"Clearly." His gaze shifts to you. "Who's this?"</p>

            <p class="dialogue">"Yuna. She's with me."</p>

            <p class="dialogue">"With you how?"</p>

            <p class="narrative">Something in his tone makes you bristle. Soojin steps forward, putting herself between you.</p>

            <p class="dialogue">"With me in whatever way I say. You have a problem?"</p>

            <p class="narrative">Jae-won holds up his hands. "No problem. Just asking." He sighs. "The boat leaves at midnight. Two seats. I already counted you—I can bump someone for your friend."</p>

            <p class="dialogue">"Bump who?"</p>

            <p class="dialogue">"Does it matter?"</p>

            <p class="narrative">You watch Soojin's face. Watch her weigh the cost.</p>

            <p class="dialogue">"It matters," she says finally. "No one gets left because of us."</p>

            <p class="dialogue">"Then find something to trade. Medicine, weapons, information. The Colonel's always buying."</p>

            <p class="narrative">Soojin's expression darkens. "The Colonel."</p>

            <p class="dialogue">"You know him?"</p>

            <p class="dialogue">"I know him." She turns to you. "We need to talk. Privately."</p>
        `,
        choices: [
            { text: "Follow her outside.", target: 37 }
        ]
    },

    37: {
        title: "THE TRUTH",
        thread: "soojin",
        content: `
            <p class="narrative">Outside, away from ears, Soojin's composure cracks.</p>

            <p class="dialogue">"The Colonel is Soyeon's husband."</p>

            <p class="narrative">The words don't make sense at first. Then they do.</p>

            <p class="dialogue">"Her... husband?"</p>

            <p class="dialogue">"Colonel Park Dong-hyun. They've been married for twelve years. Two children, both grown now. He's the reason she never—" Soojin stops. Breathes. "He's the reason she let them discharge me. She couldn't leave him. Wouldn't."</p>

            <p class="dialogue">"And now he controls the port."</p>

            <p class="dialogue">"And now he controls the port." Soojin laughs, but there's no humor in it. "If he sees me, he'll know. He's always known—he just pretended not to. And if he knows I'm trying to leave..."</p>

            <p class="dialogue">"He'll stop us."</p>

            <p class="dialogue">"Or worse. Use us. Use me to get to Soyeon, if she's still alive." She meets your eyes. "This got complicated. I'm sorry. You didn't sign up for my baggage."</p>

            <p class="narrative">You think about the last two days. The fighting. The running. The conversations in the dark.</p>

            <p class="dialogue">"I signed up for you. The baggage comes with it."</p>

            <p class="narrative">She stares at you. Something shifts in her face—surprise, then something softer.</p>

            <p class="dialogue">"You really mean that."</p>

            <p class="dialogue">"I really mean that."</p>

            <p class="narrative">She's quiet for a long moment. Then:</p>

            <p class="dialogue">"Okay. Then we do this smart. We avoid the Colonel, get on that boat, and never look back."</p>

            <p class="dialogue">"What do we trade for passage?"</p>

            <p class="narrative">Soojin reaches into her pack. Pulls out a USB drive.</p>

            <p class="dialogue">"Military encryption keys. I grabbed them when I was discharged. Insurance." She grins, sharp and dangerous. "Time to cash in."</p>
        `,
        choices: [
            { text: "Make the trade.", target: 38 },
            { text: "\"What if the Colonel recognizes the encryption codes?\"", target: 39 }
        ]
    },

    38: {
        title: "THE DEAL",
        thread: "soojin",
        content: `
            <p class="narrative">The trade happens at midnight, in a shipping container that smells like rust and diesel. Jae-won takes the USB drive, examines it, nods.</p>

            <p class="dialogue">"This will do. Boat leaves in an hour. Pier 3. Don't be late."</p>

            <p class="narrative">You and Soojin slip through the dockyards like shadows. Guards everywhere, but they're watching the perimeter, not the refugees already inside. You're invisible.</p>

            <p class="narrative">Pier 3. A fishing vessel, maybe thirty meters long. People already boarding—families, couples, a few lone travelers with hollow eyes.</p>

            <p class="dialogue">"Last chance to back out," Soojin murmurs.</p>

            <p class="dialogue">"I'm not backing out."</p>

            <p class="narrative">You board. Find a spot below deck, wedged between supply crates. The engine rumbles to life.</p>

            <p class="narrative">As the boat pulls away from the dock, you watch Korea shrink in the darkness. The fires. The silence. The place you were born becoming a memory.</p>

            <p class="dialogue">"I'm never going to see it again," you whisper.</p>

            <p class="dialogue">"Maybe. Maybe not." Soojin's hand finds yours. "But you're going to live. That's what matters."</p>

            <p class="narrative">The crossing takes eighteen hours. You sleep, eventually, leaning against her shoulder.</p>

            <p class="narrative">When you wake, Japan is on the horizon.</p>
        `,
        choices: [
            { text: "Continue to Japan.", target: 19 }
        ]
    },

    39: {
        title: "THE PARANOIA",
        thread: "soojin",
        content: `
            <p class="dialogue">"What if the Colonel recognizes the encryption codes?"</p>

            <p class="narrative">Soojin freezes. You can see her mind working—racing through scenarios.</p>

            <p class="dialogue">"Shit. You're right. If he sees my authentication signature..." She runs a hand through her hair. "He'll know I'm here. He'll lock down the port."</p>

            <p class="dialogue">"Can we modify the codes? Strip your signature?"</p>

            <p class="dialogue">"Maybe. I need a computer. Something with—" She stops. Looks at you with new respect. "You're thinking like a spy."</p>

            <p class="dialogue">"I'm thinking like someone who wants to survive."</p>

            <p class="narrative">You find a working laptop in an abandoned internet cafe three blocks from the pier. Soojin works in silence, fingers flying over keys, while you keep watch.</p>

            <p class="narrative">Forty minutes. An eternity.</p>

            <p class="dialogue">"Done. Anonymous codes. Untraceable." She pulls the drive, pockets it. "Let's go."</p>

            <p class="narrative">The trade happens without incident. The boat leaves at midnight. Korea disappears into the darkness behind you.</p>

            <p class="narrative">But somewhere in Incheon, Colonel Park Dong-hyun is going to realize that someone slipped through his fingers. Someone who knows his wife. Someone who might come back.</p>

            <p class="narrative">You'll deal with that later.</p>

            <p class="narrative">For now, you watch the sunrise over the Sea of Japan, and you're alive, and she's beside you.</p>

            <p class="narrative">That's enough.</p>
        `,
        choices: [
            { text: "Continue to Japan.", target: 19 }
        ]
    },

    // More expansion sections for the Minho path...

    34: {
        title: "WAITING",
        thread: "soojin",
        content: `
            <p class="narrative">You press yourself flat against the machinery. Breathe shallow. Don't move.</p>

            <p class="narrative">The scavenger looks in your direction for an endless moment. Then his radio crackles.</p>

            <p class="dialogue">"Sector 7 clear. Moving to 8."</p>

            <p class="dialogue">"Copy. Rendezvous at the south gate in thirty."</p>

            <p class="narrative">They move on. You don't breathe until their footsteps fade completely.</p>

            <p class="dialogue">"Nice work," Soojin whispers. "You've got good instincts."</p>

            <p class="dialogue">"I just did what you said."</p>

            <p class="dialogue">"Exactly." She grins. "Let's move. We've got a gap before they sweep back."</p>

            <p class="narrative">You navigate through the industrial maze, always one step ahead of the patrol patterns. Soojin seems to know them—anticipating turns, timing movements. Military training.</p>

            <p class="narrative">By evening, you've reached the edge of Incheon. The harbor glitters in the distance.</p>

            <p class="dialogue">"We'll make the boat," Soojin says. "We're going to make it."</p>

            <p class="narrative">For the first time since Seoul fell, you believe it.</p>
        `,
        choices: [
            { text: "Find the boat contact.", target: 33 }
        ]
    },

    35: {
        title: "NEGOTIATION",
        thread: "soojin",
        content: `
            <p class="narrative">You stand up. Hands visible.</p>

            <p class="dialogue">"We're not looking for trouble."</p>

            <p class="narrative">Guns swing toward you. Four barrels, four faces, zero sympathy.</p>

            <p class="dialogue">"Yuna—" Soojin hisses.</p>

            <p class="dialogue">"We need passage to Japan," you continue. "We can pay."</p>

            <p class="narrative">The leader—a thick-necked man with sergeant stripes still on his stolen jacket—laughs.</p>

            <p class="dialogue">"Everyone can pay, sweetheart. Question is whether you have anything we want."</p>

            <p class="dialogue">"Information. Safe routes through Seoul. Supply caches the infected haven't found."</p>

            <p class="narrative">That gets his attention. He lowers his weapon slightly.</p>

            <p class="dialogue">"Talk."</p>

            <p class="narrative">You talk. You tell him about the storage unit in Yeouido, omitting the guns. About the subway tunnels and what lurks in them. About the rooftops that connect Hongdae—a highway above the dead.</p>

            <p class="narrative">When you finish, he's almost smiling.</p>

            <p class="dialogue">"Not bad. Not bad at all." He holsters his weapon. "The Colonel might want to talk to you."</p>

            <p class="narrative">Behind you, Soojin tenses. You don't know why, but you file it away.</p>

            <p class="dialogue">"We just want passage."</p>

            <p class="dialogue">"You'll get passage. After you talk to the Colonel." He gestures. "Move."</p>
        `,
        choices: [
            { text: "Go with them.", target: 40 },
            { text: "Signal Soojin to run.", target: 41 }
        ]
    },

    36: {
        title: "THE AMBUSH",
        thread: "soojin",
        content: `
            <p class="narrative">You make eye contact with Soojin. She reads your intent instantly.</p>

            <p class="narrative">A tiny nod. She slips into the shadows.</p>

            <p class="narrative">You wait. Count the seconds. Watch the scavengers examine a pile of scrap metal, their backs partially turned.</p>

            <p class="narrative">A whistle—Soojin's signal.</p>

            <p class="narrative">Everything happens at once.</p>

            <p class="narrative">Soojin comes from behind, taking down the first two before they can raise their weapons. You rush the third, pipe swinging. He's bigger than you, slower—the pipe connects with his wrist and he drops his gun with a scream.</p>

            <p class="narrative">The fourth runs.</p>

            <p class="dialogue">"Let him go," Soojin calls. "We need to move. Now."</p>

            <p class="narrative">You grab the fallen weapons—two rifles, a pistol, spare magazines. Soojin collects the radios.</p>

            <p class="dialogue">"This is good." She checks the rifle's action. "This is very good. Now they know someone's out here, but they don't know who. And we're armed."</p>

            <p class="narrative">Your hands are shaking. The adrenaline crash is starting.</p>

            <p class="dialogue">"I've never—"</p>

            <p class="dialogue">"I know." Her hand on your shoulder, firm. "You did what you had to do. That's survival. That's nothing to be ashamed of."</p>

            <p class="narrative">You nod. Breathe.</p>

            <p class="dialogue">"Now let's get to that boat."</p>
        `,
        choices: [
            { text: "Find the boat contact.", target: 33 }
        ]
    },

    40: {
        title: "THE COLONEL",
        thread: "soojin",
        content: `
            <p class="narrative">They march you through the port. Soojin's face is stone.</p>

            <p class="narrative">The Colonel's headquarters is a former customs building, fortified with sandbags and razor wire. Inside, maps cover the walls. Radios crackle with reports. It looks almost... civilized.</p>

            <p class="narrative">Colonel Park Dong-hyun is not what you expected. Small, neat, precise. Wire-rimmed glasses. A professor's face on a soldier's frame.</p>

            <p class="dialogue">"Two more refugees." He doesn't look up from his paperwork. "What do they have?"</p>

            <p class="dialogue">"Information, sir. Routes through Seoul."</p>

            <p class="narrative">Now he looks up. His eyes move past you—and stop on Soojin.</p>

            <p class="narrative">The room goes very quiet.</p>

            <p class="dialogue">"Sergeant Kim." His voice is soft. Dangerous. "Or should I say, former Sergeant Kim."</p>

            <p class="dialogue">"Colonel." Soojin's voice is flat.</p>

            <p class="dialogue">"I heard you were discharged. Disgraceful circumstances, if I recall."</p>

            <p class="dialogue">"If you recall."</p>

            <p class="narrative">He rises. Walks around the desk. Stops inches from Soojin's face.</p>

            <p class="dialogue">"My wife cried for a week after they took your stripes. She never told me why." His smile doesn't reach his eyes. "But I knew. I always knew."</p>

            <p class="narrative">Soojin doesn't flinch. "Sir."</p>

            <p class="dialogue">"You're not leaving." He turns back to his desk. "You're going to work for me. Both of you. The information you have, the skills you have—they belong to this operation now."</p>

            <p class="dialogue">"And if we refuse?"</p>

            <p class="dialogue">"Then I'll have you shot as deserters. The world ended, Sergeant. Laws are whatever I say they are."</p>

            <p class="narrative">He sits. Picks up his pen. Resumes his paperwork.</p>

            <p class="dialogue">"Find them quarters. Put them to work in the morning."</p>
        `,
        choices: [
            { text: "Go along for now. Plan an escape.", target: 42 },
            { text: "Refuse. Call his bluff.", target: 43 }
        ]
    },

    41: {
        title: "THE CHASE",
        thread: "soojin",
        content: `
            <p class="narrative">You catch Soojin's eye. Flick your gaze toward the exit.</p>

            <p class="narrative">She understands. Her hand drifts toward her knife.</p>

            <p class="dialogue">"NOW!"</p>

            <p class="narrative">You run. Behind you, shouts, the crack of gunfire—but you're already weaving between machines, using every inch of cover.</p>

            <p class="narrative">Soojin is beside you, then ahead, pulling you through a gap in the fence you never would have found. Bullets ping off metal.</p>

            <p class="dialogue">"This way!"</p>

            <p class="narrative">You run until your lungs burn. Until the shouts fade. Until you collapse behind a chemical storage tank, gasping.</p>

            <p class="dialogue">"That was—" you pant, "—insane—"</p>

            <p class="dialogue">"That was Tuesday." But Soojin is grinning. Wild. Alive. "You trusted me."</p>

            <p class="dialogue">"You trusted me first."</p>

            <p class="narrative">She looks at you. Really looks. And something shifts between you—something that was waiting to shift.</p>

            <p class="dialogue">"Yeah," she says softly. "I did."</p>

            <p class="narrative">Night falls. The harbor is close. The boat is waiting.</p>

            <p class="narrative">And whatever comes next, you're facing it together.</p>
        `,
        choices: [
            { text: "Sneak into the port at nightfall.", target: 33 }
        ]
    },

    42: {
        title: "THE LONG GAME",
        thread: "soojin",
        content: `
            <p class="narrative">A week in the Colonel's service. Long days, longer nights. But you learn things.</p>

            <p class="narrative">You learn the patrol schedules. The weak points in the fence. The ships that come and go, and which captains can be bribed.</p>

            <p class="narrative">You learn that Soojin hasn't given up. She's just waiting.</p>

            <p class="narrative">One night, in the barracks you share with four other "recruits," she slips a note under your pillow.</p>

            <p class="narrative"><em>Tomorrow. 0300. North gate. Don't be late.</em></p>

            <p class="narrative">You don't sleep. At 0245, you slip out. The guards are at their posts, but you know the blind spots now. You've been mapping them for seven days.</p>

            <p class="narrative">Soojin is waiting. Two packs. Two rifles. A small inflatable raft.</p>

            <p class="dialogue">"The big ships are too well-guarded. We paddle out, meet a fishing boat two kilometers offshore. They'll take us to Japan for double price."</p>

            <p class="dialogue">"Can we trust them?"</p>

            <p class="dialogue">"No. But we can outrun them if we have to." She grins. "I've been busy."</p>

            <p class="narrative">The paddle out is terrifying. Every wave feels like discovery. Every distant shout sounds like pursuit.</p>

            <p class="narrative">But the fishing boat is where Soojin said it would be. And twelve hours later, you're watching Japan emerge from the morning mist.</p>

            <p class="dialogue">"We did it," you whisper.</p>

            <p class="dialogue">"We did it." Her hand finds yours. "Together."</p>
        `,
        choices: [
            { text: "Begin your new life in Japan.", target: 19 }
        ]
    },

    43: {
        title: "THE DEFIANCE",
        thread: "soojin",
        isEnding: true,
        endingNumber: 9,
        content: `
            <p class="dialogue">"No."</p>

            <p class="narrative">The word falls like a stone in still water.</p>

            <p class="narrative">Colonel Park looks up slowly. "Excuse me?"</p>

            <p class="dialogue">"I said no. You can shoot us if you want. But we're not working for you. Not now. Not ever."</p>

            <p class="narrative">Soojin moves beside you. Her hand is on her knife. The guards are raising their weapons.</p>

            <p class="dialogue">"You think you can stop us?" The Colonel's voice is ice. "You're nothing. Two strays in a dying world."</p>

            <p class="dialogue">"Maybe." You meet his eyes. "But we'll die free."</p>

            <p class="narrative">He stares at you for a long moment. Then, unexpectedly, he laughs.</p>

            <p class="dialogue">"You know what? I believe you." He waves at the guards. "Let them go."</p>

            <p class="dialogue">"Sir?"</p>

            <p class="dialogue">"Let them go. They're not worth the bullets. And honestly—" He glances at Soojin. "—I'm tired of keeping souvenirs from my wife's mistakes."</p>

            <p class="narrative">You don't wait for him to change his mind. You walk out of the customs building, through the port, past the checkpoints. No one stops you.</p>

            <p class="narrative">At the gate, you turn back. The Colonel is watching from a window.</p>

            <p class="dialogue">"We'll need to find another way to Japan," Soojin says.</p>

            <p class="dialogue">"We'll figure it out."</p>

            <p class="dialogue">"Yeah." She looks at you. Something like wonder in her face. "We will."</p>

            <div class="ending">
                <div class="ending-number">ENDING 9 OF 12</div>
                <h2 class="ending-title">THE DEFIANCE</h2>
                <div class="ending-text">
                    <p>You never make it to Japan. But you don't die either.</p>
                    <p>You find a fishing village on the coast. Uninfected. Forgotten. You build a life there—small, quiet, free.</p>
                    <p>And every morning, you wake up next to someone who chose freedom over survival.</p>
                    <p><em>That's worth more than escape could ever be.</em></p>
                </div>
            </div>
        `,
        choices: []
    },

    // ═══════════════════════════════════════════════════════════════
    // THE WEB DEEPENS - WORLD BUILDING & CROSS-PATHS
    // ═══════════════════════════════════════════════════════════════

    44: {
        title: "MRS. PARK'S WAR",
        thread: "yuna",
        content: `
            <p class="narrative">Before you leave Mrs. Park's apartment, something catches your eye.</p>

            <p class="narrative">A photograph on the wall, half-hidden by a calendar. Two soldiers, young, impossibly young, standing in front of a tank. The woman on the left is unmistakably Mrs. Park—same fierce eyes, same jaw like a closing fist.</p>

            <p class="narrative">The man beside her wears medic insignia. Your grandfather's face.</p>

            <p class="dialogue">"You knew him." Not a question.</p>

            <p class="narrative">Mrs. Park follows your gaze. Her expression softens.</p>

            <p class="dialogue">"Lieutenant Kim Jin-ho. Best field surgeon in the 7th Division. He saved my life at Busan. Caught shrapnel pulling me out of a burning halftrack." She touches her hip. "He carried me three kilometers. Never complained."</p>

            <p class="narrative">You never knew. Never even suspected.</p>

            <p class="dialogue">"He married my sister afterward. Had a daughter—your mother." Mrs. Park's eyes meet yours. "I've been watching over this family for fifty years, child. You think it was coincidence you moved into this building?"</p>

            <p class="narrative">The pounding on the door intensifies. Hinges screaming.</p>

            <p class="dialogue">"I never married. Never had children. You're the closest thing I have." She presses the key harder into your palm. "The storage unit has everything. Weapons, food, medical supplies. Everything my husband hoarded for a war that never came."</p>

            <p class="dialogue">"Your husband—you said he died—"</p>

            <p class="dialogue">"In 1987. Car accident. But he was right about one thing." Her smile is savage. "The world was always ending. We just didn't know when."</p>

            <p class="narrative">CRACK. The door splinters.</p>

            <p class="dialogue">"There's a journal in the safe. Combination is your mother's birthday. Read it. Understand what you come from." She raises the fire extinguisher. "Now GO."</p>
        `,
        choices: [
            { text: "Take the fire escape.", target: 5 },
            { text: "Stay and fight beside her.", target: 6 }
        ]
    },

    45: {
        title: "THE ORIGIN",
        thread: "yuna",
        content: `
            <p class="narrative">You find the journal in Yeouido. A leather-bound book, pages yellowed with age. Your great-uncle's handwriting—tight, military precise.</p>

            <p class="narrative">Most of it is supply lists. Weapons inventories. Maps of safe routes.</p>

            <p class="narrative">But the last entry stops you cold.</p>

            <p class="dialogue"><em>March 3, 1986</em></p>

            <p class="dialogue"><em>The Americans showed me the files today. Project CHIMERA. They've been working on it since Vietnam—some kind of biological agent designed to create "controllable aggression" in enemy combatants.</em></p>

            <p class="dialogue"><em>It doesn't work. The test subjects don't become soldiers. They become something else.</em></p>

            <p class="dialogue"><em>They're keeping it at the Yongsan Garrison. Right here in Seoul. In case the North ever crosses the 38th parallel.</em></p>

            <p class="dialogue"><em>I told them they're insane. They told me to focus on my supply routes.</em></p>

            <p class="dialogue"><em>I'm leaving everything to the family. Just in case.</em></p>

            <p class="narrative">You close the journal. Your hands are shaking.</p>

            <p class="narrative">Yongsan Garrison. American military. Project CHIMERA.</p>

            <p class="narrative">This wasn't an accident. This wasn't nature.</p>

            <p class="narrative">This was <em>us</em>.</p>
        `,
        choices: [
            { text: "Share this with the survivors at Seoul Station.", target: 46 },
            { text: "Keep it secret. Knowledge like this is dangerous.", target: 47 },
            { text: "Go to Yongsan. Find out what really happened.", target: 48 }
        ]
    },

    46: {
        title: "THE BROADCAST",
        thread: "yuna",
        content: `
            <p class="narrative">You tell them everything. The journal. Project CHIMERA. The Americans.</p>

            <p class="narrative">The room goes silent. Then chaos.</p>

            <p class="dialogue">"She's lying—"</p>

            <p class="dialogue">"The Americans? I knew it—"</p>

            <p class="dialogue">"What does it matter who started it? We're still dying—"</p>

            <p class="narrative">Mr. Bae, the transit officer, raises his hands.</p>

            <p class="dialogue">"QUIET." The room settles. "Yuna. You have proof?"</p>

            <p class="narrative">You hand him the journal. He reads in silence. His face goes grey.</p>

            <p class="dialogue">"The radio," he says finally. "We have a long-range transmitter. If Japan is still clean, they need to know. The world needs to know."</p>

            <p class="narrative">You spend three days preparing the broadcast. Translating key passages. Recording testimony.</p>

            <p class="narrative">When it goes out, you don't know if anyone hears it. The static swallows everything.</p>

            <p class="narrative">But two weeks later, a Japanese naval vessel appears in the harbor. The captain requests you by name.</p>

            <p class="dialogue">"Yuna Kim?" He's young, stern, precise. "Tokyo wants to talk to you about something called CHIMERA."</p>

            <p class="narrative">Behind him, a hundred armed soldiers. A dozen scientists. Equipment you don't recognize.</p>

            <p class="narrative">The world is finally paying attention.</p>
        `,
        choices: [
            { text: "Go with them. Help them understand.", target: 49 },
            { text: "Refuse to leave. Your place is with the survivors.", target: 50 }
        ]
    },

    47: {
        title: "THE BURDEN",
        thread: "yuna",
        content: `
            <p class="narrative">You burn the journal at 3 AM. Watch the pages curl and blacken.</p>

            <p class="narrative">Some truths are too heavy. Some knowledge would break what little hope remains.</p>

            <p class="narrative">The survivors at Seoul Station look to you for leadership. You give them strength, organization, purpose. You never tell them they're fighting a man-made plague.</p>

            <p class="narrative">What would it change? The dead are still dead. The living still need saving.</p>

            <p class="narrative">But at night, when you're alone, you see their faces. The Americans in the files. The generals who approved the project. The politicians who buried it.</p>

            <p class="narrative">You carry their sins in silence.</p>

            <p class="narrative">One year later, you're the most respected leader in the Seoul Reclamation. People call you the Dispatcher. They trust your voice on the radio.</p>

            <p class="narrative">They never know you're haunted by what you didn't tell them.</p>

            <div class="ending">
                <div class="ending-number">ENDING 10 OF 12</div>
                <h2 class="ending-title">THE WEIGHT OF SECRETS</h2>
                <div class="ending-text">
                    <p>History remembers you as a hero. The voice that held Seoul together. The woman who refused to let hope die.</p>
                    <p>History doesn't know about the ashes in your fireplace. The truth you swallowed to keep others standing.</p>
                    <p>Some burdens are meant to be carried alone.</p>
                    <p><em>"This is Dispatcher Yuna, Seoul Station. If you can hear this, you're not alone. You were never alone."</em></p>
                </div>
            </div>
        `,
        choices: []
    },

    48: {
        title: "YONGSAN",
        thread: "yuna",
        content: `
            <p class="narrative">Yongsan Garrison. The heart of American military presence in Korea for seventy years.</p>

            <p class="narrative">Now a necropolis.</p>

            <p class="narrative">The infected here are different. Older, somehow. More decayed. They move in patterns, not chaos—patrol routes burned into dead muscles by decades of military discipline.</p>

            <p class="dialogue">"They were soldiers," you whisper. "Even dead, they're still soldiers."</p>

            <p class="narrative">You find the research facility in Sub-basement 3. Biohazard warnings. Automated locks that failed when the power died.</p>

            <p class="narrative">Inside: bodies in lab coats. Computers dark. Filing cabinets torn open, papers scattered.</p>

            <p class="narrative">One cabinet is still intact. The lock yields to your knife after ten minutes of cursing.</p>

            <p class="narrative">Project CHIMERA. Complete files.</p>

            <p class="narrative">You read for hours. The experiments. The failures. The "successful" subjects who had to be terminated.</p>

            <p class="narrative">And the last entry: March 15, 2019. Routine transport from the Korean facility to a lab in China. Standard containment protocols.</p>

            <p class="narrative">The truck never arrived.</p>

            <p class="narrative">Seven years of silence. Then this.</p>

            <p class="narrative">You take everything. Every file. Every hard drive you can carry. If there's a cure hidden in this horror, you'll find it.</p>
        `,
        choices: [
            { text: "Return to Seoul Station with the files.", target: 51 },
            { text: "Keep searching. There has to be more.", target: 52 }
        ]
    },

    49: {
        title: "THE WITNESS",
        thread: "yuna",
        isEnding: true,
        endingNumber: 10,
        content: `
            <p class="narrative">You board the Japanese vessel. Leave Korea behind.</p>

            <p class="narrative">In Tokyo, they put you in front of cameras. Politicians, scientists, generals—all wanting the same thing: understanding.</p>

            <p class="narrative">You tell them everything. The journal. Project CHIMERA. The American files you never burned.</p>

            <p class="narrative">The world listens. The world is horrified. The world demands accountability.</p>

            <p class="narrative">In the end, it doesn't matter. The dead don't care about justice. The infected don't stop because someone's held responsible.</p>

            <p class="narrative">But the living need truth like they need oxygen. And you give it to them.</p>

            <div class="ending">
                <div class="ending-number">ENDING 10 OF 12</div>
                <h2 class="ending-title">THE WITNESS</h2>
                <div class="ending-text">
                    <p>They call you the Voice of the Dead. The woman who told the world what it didn't want to hear.</p>
                    <p>You spend the rest of your life testifying. Explaining. Demanding that they never forget.</p>
                    <p>Korea is reclaimed, eventually. The cure comes from the files you brought. The world rebuilds.</p>
                    <p>And in every memorial, every history book, every classroom, they speak your name:</p>
                    <p><em>Yuna Kim. The one who remembered.</em></p>
                </div>
            </div>
        `,
        choices: []
    },

    50: {
        title: "THE ANCHOR",
        thread: "yuna",
        content: `
            <p class="dialogue">"I'm not leaving."</p>

            <p class="narrative">The Japanese captain stares at you. "You understand what you're refusing? Safety. Resources. A chance to end this."</p>

            <p class="dialogue">"I understand. But these people—" You gesture at the survivors gathering behind you. "—they're my responsibility. I won't abandon them."</p>

            <p class="dialogue">"We can evacuate everyone—"</p>

            <p class="dialogue">"No. This is our home. We fight for it or we die for it. Those are the only choices that matter."</p>

            <p class="narrative">He's quiet for a long moment. Then he nods, something like respect in his eyes.</p>

            <p class="dialogue">"Then take this." He hands you a radio. Military-grade. "Frequency 7. We'll be listening. When you're ready—if you're ever ready—call."</p>

            <p class="narrative">You take the radio. Watch the ships pull away.</p>

            <p class="narrative">Behind you, Mr. Bae puts a hand on your shoulder.</p>

            <p class="dialogue">"That was stupid," he says quietly.</p>

            <p class="dialogue">"I know."</p>

            <p class="dialogue">"That was the bravest thing I've ever seen."</p>

            <p class="narrative">You don't feel brave. You feel terrified.</p>

            <p class="narrative">But you're home. And that matters more than safety.</p>
        `,
        choices: [
            { text: "Lead the Seoul Reclamation.", target: 13 }
        ]
    },

    51: {
        title: "THE SCIENTIST",
        thread: "yuna",
        content: `
            <p class="narrative">You spend six months with the files. Learning. Understanding. Becoming something you never expected: a scientist.</p>

            <p class="narrative">The infection is artificial. Designed. Which means it can be undesigned.</p>

            <p class="narrative">You're not a virologist. You're a museum curator who knows how to read, organize, and make connections others miss.</p>

            <p class="narrative">That's enough.</p>

            <p class="narrative">You find it in file 2,847: a failed counter-agent. It didn't cure the subjects, but it stopped the spread. Made them dormant.</p>

            <p class="narrative">The Americans abandoned it because they couldn't weaponize docility. But you don't need a weapon.</p>

            <p class="narrative">You need a cure.</p>

            <p class="narrative">Using the radio, you contact what remains of Yonsei Medical School. Dr. Choi—a immunologist who's been hiding in the basement for months—nearly cries when you explain what you've found.</p>

            <p class="dialogue">"This could work," she whispers. "With the right equipment... this could actually work."</p>
        `,
        choices: [
            { text: "Help Dr. Choi build the cure.", target: 53 }
        ]
    },

    52: {
        title: "THE DEPTHS",
        thread: "yuna",
        content: `
            <p class="narrative">Sub-basement 4. Then 5. Then 6.</p>

            <p class="narrative">The facility goes deeper than the files suggested. Emergency generators still running, somehow—red emergency lights painting everything in blood.</p>

            <p class="narrative">In Sub-basement 7, you find them.</p>

            <p class="narrative">Cages. Dozens of them. And inside—</p>

            <p class="narrative">They were human once. The files call them "Generation Zero." The first successful CHIMERA subjects. The templates for the infection.</p>

            <p class="narrative">They're still alive. Still infected. Still <em>conscious</em>.</p>

            <p class="narrative">One of them looks at you. Its eyes aren't filmed white like the others. They're clear. Aware. <em>Pleading</em>.</p>

            <p class="narrative">Its mouth moves. No sound at first. Then—</p>

            <p class="dialogue">"Kill... us..."</p>

            <p class="narrative">Your hands are shaking. These aren't monsters. These are prisoners. Trapped in their own bodies for decades.</p>

            <p class="narrative">There's a panel on the wall. EMERGENCY TERMINATION. A key slot. A red button.</p>

            <p class="narrative">The key is around your neck. It was in the last cabinet you opened.</p>
        `,
        choices: [
            { text: "End their suffering.", target: 54 },
            { text: "Leave them. Someone might need to study them.", target: 55 },
            { text: "Try to communicate. Learn what they know.", target: 56 }
        ]
    },

    53: {
        title: "THE CURE",
        thread: "yuna",
        isEnding: true,
        endingNumber: 11,
        content: `
            <p class="narrative">It takes two years. Two years of failures. Of almost. Of not quite.</p>

            <p class="narrative">But on March 3rd—exactly forty years after your great-uncle wrote his warning—Dr. Choi injects the first subject.</p>

            <p class="narrative">A infected soldier. Captured three days ago. Still mobile. Still hungry.</p>

            <p class="narrative">You watch through the glass as his thrashing slows. As the film over his eyes clears. As consciousness—<em>humanity</em>—floods back into his face.</p>

            <p class="narrative">He looks at his hands. At the blood. At you.</p>

            <p class="dialogue">"What..." His voice is rust and gravel. "What did I <em>do</em>?"</p>

            <p class="narrative">He remembers. They all remember.</p>

            <p class="narrative">That's the cruelty of the cure—it gives them back their minds, and with it, the weight of everything they did while they were gone.</p>

            <p class="narrative">You kneel in front of him. Take his bloodied hands in yours.</p>

            <p class="dialogue">"You survived," you say. "That's what matters now."</p>

            <div class="ending">
                <div class="ending-number">ENDING 11 OF 12</div>
                <h2 class="ending-title">THE CURE</h2>
                <div class="ending-text">
                    <p>The cure spreads faster than the infection ever did. Within five years, the infected are people again—broken, traumatized, but <em>alive</em>.</p>
                    <p>You never go back to the museum. You become something else: a counselor. A witness. A hand to hold when the memories get too heavy.</p>
                    <p>They call you the Mother of the Returned.</p>
                    <p><em>"Welcome back," you say, over and over. "Welcome home."</em></p>
                </div>
            </div>
        `,
        choices: []
    },

    54: {
        title: "THE MERCY",
        thread: "yuna",
        content: `
            <p class="narrative">You turn the key. Press the button.</p>

            <p class="narrative">The cages fill with gas. Quick. Painless. The way they should have been released decades ago.</p>

            <p class="narrative">The conscious one—the one who asked—watches you until the end. There's gratitude in those clear eyes. And something else.</p>

            <p class="narrative">Peace.</p>

            <p class="narrative">You stay until they're all still. Then you climb back up through the sub-basements, past the patrol-walking dead soldiers, into the grey Seoul dawn.</p>

            <p class="narrative">You destroyed the source. The templates. Without them, the infection will burn itself out eventually—the infected can't reproduce, can't create more of themselves from nothing.</p>

            <p class="narrative">It might take generations. But you've ended it.</p>

            <p class="narrative">You walk back to Seoul Station. Don't tell anyone what you did.</p>

            <p class="narrative">Some mercies are private.</p>
        `,
        choices: [
            { text: "Return to leading the survivors.", target: 13 }
        ]
    },

    55: {
        title: "THE CALCULATOR",
        thread: "yuna",
        content: `
            <p class="narrative">You leave them.</p>

            <p class="narrative">It's the hardest thing you've ever done. Those eyes—pleading, aware, trapped—will haunt you forever.</p>

            <p class="narrative">But they might be the key. The original subjects. The source code. If there's ever going to be a cure, scientists will need to study them.</p>

            <p class="narrative">You tell yourself it's the right choice. The strategic choice. The choice that saves the most lives in the long run.</p>

            <p class="narrative">You tell yourself that every night for the rest of your life.</p>

            <p class="narrative">You never quite believe it.</p>
        `,
        choices: [
            { text: "Return to Seoul Station with the files.", target: 51 }
        ]
    },

    56: {
        title: "THE CONVERSATION",
        thread: "yuna",
        content: `
            <p class="narrative">You approach the cage. Slowly. Hands visible.</p>

            <p class="dialogue">"Can you understand me?"</p>

            <p class="narrative">The conscious one nods. A jerky, painful movement—like remembering how to use a body it hasn't controlled in years.</p>

            <p class="dialogue">"How long have you been aware?"</p>

            <p class="narrative">Its mouth works. Forming words is agony—you can see it.</p>

            <p class="dialogue">"Always. We... we always... knew."</p>

            <p class="narrative">Your blood runs cold.</p>

            <p class="dialogue">"The others? The infected outside? Are they—"</p>

            <p class="dialogue">"Trapped. Watching. Screaming... inside." A tear tracks down its ruined face. "We made... them. Our blood... started everything. And they... feel it all. Every bite. Every... kill. They know."</p>

            <p class="narrative">You think of the millions of infected. The cities of dead. All of them <em>conscious</em>. All of them aware of what their bodies are doing.</p>

            <p class="narrative">The horror is so vast you can't process it.</p>

            <p class="dialogue">"Is there a way to stop it?"</p>

            <p class="dialogue">"Kill us. End... the source. They'll still... exist. But no more... will be made. And maybe..." It swallows. "Maybe with time... the connection... fades."</p>

            <p class="narrative">It's not a cure. It's barely hope. But it's something.</p>
        `,
        choices: [
            { text: "End their suffering. End the source.", target: 54 },
            { text: "There has to be another way.", target: 57 }
        ]
    },

    57: {
        title: "THE IMPOSSIBLE CHOICE",
        thread: "yuna",
        content: `
            <p class="dialogue">"There has to be another way. If you're all connected—maybe we can use that. Send a signal. Override the infection."</p>

            <p class="narrative">The conscious one stares at you. Hope—actual hope—flickers in its eyes for the first time.</p>

            <p class="dialogue">"We... tried. In the beginning. Couldn't... reach them. Too many. Too loud."</p>

            <p class="dialogue">"What if we amplified it? The files mention electromagnetic resonance—they were trying to control you with it. What if we reversed it?"</p>

            <p class="narrative">You're grasping. You know you're grasping. But you can't just kill them. Not when they're aware. Not when they might be the key to saving everyone.</p>

            <p class="dialogue">"Show me." You press your hand against the cage. "Show me everything you know."</p>

            <p class="narrative">Its hand comes up. Presses against the glass opposite yours.</p>

            <p class="narrative">And suddenly you're somewhere else. Seeing through a million eyes at once. Feeling the hunger, the horror, the desperate silent screaming of every infected mind on the peninsula.</p>

            <p class="narrative">You see a man in Daegu, watching his hands tear apart his daughter, unable to stop.</p>

            <p class="narrative">You see a grandmother in Busan, trapped behind her own eyes as she leads the infected to her neighbors' hiding place.</p>

            <p class="narrative">You see soldiers, doctors, children—all of them aware. All of them begging for death.</p>

            <p class="narrative">And beneath it all, a frequency. A pattern. A signal that could, maybe, be rewritten.</p>

            <p class="narrative">You pull your hand back. Gasping. Weeping.</p>

            <p class="dialogue">"I saw it. I know what to do."</p>
        `,
        choices: [
            { text: "Attempt the frequency override.", target: 58 }
        ]
    },

    58: {
        title: "THE RESONANCE",
        thread: "yuna",
        isEnding: true,
        endingNumber: 12,
        content: `
            <p class="narrative">It takes everything you have. Every piece of equipment in Yongsan. Every survivor with technical knowledge you can find.</p>

            <p class="narrative">The Generation Zero subjects help—guiding you through the systems, correcting frequencies, adjusting parameters. They've been waiting forty years for someone to try this.</p>

            <p class="narrative">On the seventh day, you're ready.</p>

            <p class="narrative">The signal goes out. A pulse of electromagnetic resonance, carried on the connection between every infected mind.</p>

            <p class="narrative">Not a kill switch. Not a cure. Something stranger.</p>

            <p class="narrative">A message.</p>

            <p class="narrative"><em>You are not alone. We know you're in there. We're coming to bring you home.</em></p>

            <p class="narrative">Across Korea, the infected stop. All at once. Frozen mid-stride, mid-bite, mid-hunt.</p>

            <p class="narrative">And then—slowly, painfully—they begin to weep.</p>

            <p class="narrative">Not cured. Still infected. Still dangerous. But something has changed. The blind hunger is dimmed. The trapped minds inside can push back, just a little.</p>

            <p class="narrative">It's not enough. But it's a start.</p>

            <div class="ending">
                <div class="ending-number">ENDING 12 OF 12</div>
                <h2 class="ending-title">THE RESONANCE</h2>
                <div class="ending-text">
                    <p>The Awakening, they call it. The day the infected remembered how to cry.</p>
                    <p>It takes twenty years to develop a full cure. Twenty years of managing a population that's caught between living and dead, hungry and horrified, monster and human.</p>
                    <p>But you're there for all of it. Working with the Generation Zero subjects—your teachers, your partners, your friends. Building something no one thought possible:</p>
                    <p><em>Redemption for the damned.</em></p>
                    <p>When the last infected is finally cured, they build a statue in Seoul. Not of you—you refused. Of a hand, pressed against glass, reaching for connection.</p>
                    <p>Underneath, the inscription reads: <em>"We heard you. We never stopped listening."</em></p>
                </div>
            </div>
        `,
        choices: []
    },

    // ═══════════════════════════════════════════════════════════════
    // CROSS-PATHS: MINHO AND SOOJIN MEET
    // ═══════════════════════════════════════════════════════════════

    59: {
        title: "THE COLLISION",
        thread: "crosspath",
        content: `
            <p class="narrative">Three weeks into the apocalypse. The safe zone is overcrowded, undersupplied, and running out of hope.</p>

            <p class="narrative">That's when the Special Forces unit arrives.</p>

            <p class="narrative">Twelve soldiers. Hardened. Precise. Led by a woman with silver-streaked hair and eyes like winter.</p>

            <p class="narrative">You're helping with water distribution when Minho grabs your arm.</p>

            <p class="dialogue">"That's her," he whispers. "Soojin Kim. She was in my unit before—before everything."</p>

            <p class="narrative">The woman—Soojin—is talking to Colonel Yoo. Her body language is tense. Aggressive.</p>

            <p class="dialogue">"—not asking permission. My team is here for extraction, not occupation. We leave at dawn with anyone who wants to come."</p>

            <p class="dialogue">"This is <em>my</em> zone, Sergeant. These are <em>my</em> people—"</p>

            <p class="dialogue">"Former sergeant. And I don't recognize your authority." Soojin turns to address the crowd. "Listen up! Japan is still clean. Boats are leaving from Incheon every three days. Anyone who wants out, you're coming with us."</p>

            <p class="narrative">Chaos. Shouting. Colonel Yoo's guards reaching for weapons.</p>

            <p class="narrative">Minho is pulling you toward Soojin. Or toward the exit. You can't tell which.</p>
        `,
        choices: [
            { text: "Go with Soojin's unit. Get out while you can.", target: 60 },
            { text: "Stay with Minho and Colonel Yoo. The safe zone is home.", target: 61 },
            { text: "Convince them to work together.", target: 62 }
        ]
    },

    60: {
        title: "THE DEPARTURE",
        thread: "soojin",
        content: `
            <p class="narrative">You step forward. Soojin's eyes find you—assess you in a heartbeat.</p>

            <p class="dialogue">"I'm coming."</p>

            <p class="narrative">Minho's grip on your arm tightens.</p>

            <p class="dialogue">"Yuna, wait—we should talk about this—"</p>

            <p class="dialogue">"I've been waiting my whole life, Minho. Waiting for you to call. Waiting for you to come back. Waiting for the world to tell me what to do." You meet his eyes. "I'm done waiting."</p>

            <p class="narrative">Something cracks in his expression. Pain. Understanding. Maybe both.</p>

            <p class="dialogue">"Then I'm coming too."</p>

            <p class="dialogue">"Minho—"</p>

            <p class="dialogue">"I'm not losing you again. If you go, I go."</p>

            <p class="narrative">Soojin is watching this exchange with interest. Something like a smile tugs at her mouth.</p>

            <p class="dialogue">"The boyfriend?"</p>

            <p class="dialogue">"Ex-boyfriend."</p>

            <p class="dialogue">"Complicated." She gestures. "We move in ten minutes. If you're coming, gear up. If you're fighting, we'll leave you where you fall."</p>

            <p class="narrative">Colonel Yoo is shouting orders. Her guards are surrounding Soojin's unit. The situation is about to explode.</p>
        `,
        choices: [
            { text: "Help Soojin's unit fight their way out.", target: 63 },
            { text: "Try to defuse the standoff peacefully.", target: 64 }
        ]
    },

    61: {
        title: "THE LOYALTY",
        thread: "minho",
        content: `
            <p class="narrative">You don't move.</p>

            <p class="dialogue">"This is our home now," you say quietly. "Running doesn't fix anything."</p>

            <p class="narrative">Minho exhales. Relief, gratitude, love—all mixed together.</p>

            <p class="dialogue">"Are you sure?"</p>

            <p class="dialogue">"No. But I'm sure about us. And this is where we've built something."</p>

            <p class="narrative">Colonel Yoo's guards are moving. Soojin's soldiers are raising weapons. Blood is about to be spilled.</p>

            <p class="narrative">You step between them.</p>

            <p class="dialogue">"STOP!"</p>

            <p class="narrative">Everyone freezes. Even Soojin looks surprised.</p>

            <p class="dialogue">"Look at us. Killing each other while the dead wait outside. Is this really who we've become?"</p>

            <p class="narrative">Silence. The moment stretches like wire.</p>

            <p class="narrative">Then Colonel Yoo lowers her weapon.</p>

            <p class="dialogue">"The curator has a point." Her voice is ice, but her gun is down. "Sergeant Kim. Take your people. Leave by dawn. We won't stop you."</p>

            <p class="narrative">Soojin studies you for a long moment. Then nods.</p>

            <p class="dialogue">"You've got spine, curator. If you ever change your mind—" She hands you a piece of paper. A frequency. "—you know how to find us."</p>

            <p class="narrative">They leave at first light. You watch them go from the watchtower, Minho beside you.</p>

            <p class="dialogue">"You could have gone with them," he says.</p>

            <p class="dialogue">"I know."</p>

            <p class="dialogue">"Why didn't you?"</p>

            <p class="narrative">You take his hand. Squeeze.</p>

            <p class="dialogue">"Because some things matter more than escape."</p>
        `,
        choices: [
            { text: "Build the safe zone with Minho.", target: 15 }
        ]
    },

    62: {
        title: "THE DIPLOMAT",
        thread: "crosspath",
        content: `
            <p class="narrative">You do something stupid. You walk into the middle of the standoff.</p>

            <p class="dialogue">"Everyone shut up and listen."</p>

            <p class="narrative">Guns swing toward you. Minho makes a strangled sound. But no one fires.</p>

            <p class="dialogue">"You—" You point at Colonel Yoo. "—have supplies and fortifications but no way out. You—" You point at Soojin. "—have an exit but no way to hold territory. Instead of measuring who has the bigger guns, maybe consider that together you could actually <em>win</em>."</p>

            <p class="narrative">Silence. Then Soojin laughs.</p>

            <p class="dialogue">"She's right. I hate that she's right, but she's right." She holsters her weapon. "Colonel. Truce?"</p>

            <p class="narrative">Yoo's eyes are calculating. Political.</p>

            <p class="dialogue">"Truce. For now. We talk terms tonight."</p>

            <p class="narrative">The guns lower. The crowd disperses. And suddenly you're standing in a no-man's land between two powers, having just changed the game entirely.</p>

            <p class="narrative">Minho appears at your side.</p>

            <p class="dialogue">"That was either the bravest or dumbest thing I've ever seen."</p>

            <p class="dialogue">"Probably both."</p>

            <p class="narrative">Soojin approaches. Her expression is unreadable.</p>

            <p class="dialogue">"Museum curator?"</p>

            <p class="dialogue">"Yes."</p>

            <p class="dialogue">"You just brokered a peace between two military factions using nothing but words and the element of surprise." She holds out her hand. "I want you on my planning team."</p>

            <p class="narrative">You shake it. Her grip is iron.</p>

            <p class="dialogue">"I'm not a soldier."</p>

            <p class="dialogue">"No. You're something more dangerous. You're a diplomat in a world that forgot they existed."</p>
        `,
        choices: [
            { text: "Join Soojin's planning team while staying with Minho.", target: 65 }
        ]
    },

    63: {
        title: "THE BREAKOUT",
        thread: "soojin",
        content: `
            <p class="narrative">The first shot comes from Colonel Yoo's guards. After that, everything is chaos.</p>

            <p class="narrative">Soojin moves like water—fluid, inevitable. Her team forms up around the civilians, creating a corridor of covering fire.</p>

            <p class="dialogue">"Stay low! Move to the east gate!"</p>

            <p class="narrative">You run. Minho beside you. Behind you, screaming. Gunfire. The sounds of the world tearing itself apart.</p>

            <p class="narrative">Someone grabs your arm—not Minho. A guard, face twisted with rage.</p>

            <p class="dialogue">"You're not leaving—"</p>

            <p class="narrative">You don't think. Your elbow connects with his nose. He goes down. You keep running.</p>

            <p class="dialogue">"Nice hit!" Soojin is suddenly beside you, grinning through the chaos. "Sure you're not military?"</p>

            <p class="dialogue">"Museum security training!"</p>

            <p class="dialogue">"Good enough!"</p>

            <p class="narrative">The east gate. Open. Freedom.</p>

            <p class="narrative">Seventeen people make it out. Eight of Soojin's soldiers. Minho. You.</p>

            <p class="narrative">Behind you, the safe zone burns.</p>
        `,
        choices: [
            { text: "Head to Incheon with Soojin's group.", target: 29 }
        ]
    },

    64: {
        title: "THE NEGOTIATOR",
        thread: "crosspath",
        content: `
            <p class="narrative">You step between the guns. Hands raised.</p>

            <p class="dialogue">"Colonel. Sergeant. Look around you."</p>

            <p class="narrative">They look. Children hiding behind their parents. Elderly couples clutching each other. The sick and wounded watching from cots.</p>

            <p class="dialogue">"These people survived the end of the world. They're not going to die because two soldiers couldn't agree on jurisdiction."</p>

            <p class="narrative">Soojin's expression flickers. Something human beneath the tactical mask.</p>

            <p class="dialogue">"We came to save people, not kill them."</p>

            <p class="dialogue">"Then let them choose. No fighting. No forcing. Just... let them choose."</p>

            <p class="narrative">Colonel Yoo considers. The political calculus is visible on her face—if she fights, she might lose. If she lets people leave, she definitely loses numbers.</p>

            <p class="dialogue">"Fine." Her voice is clipped. "Anyone who wants to go with the sergeant can go. Anyone who stays is under my protection. No interference either way."</p>

            <p class="narrative">Soojin nods. "Fair. We leave at dawn."</p>

            <p class="narrative">By morning, the camp has divided. Forty people with Soojin. Two hundred staying with Yoo.</p>

            <p class="narrative">Minho is among the staying. You are too.</p>

            <p class="narrative">But as Soojin's group leaves, she catches your eye. A nod. Respect, maybe. Or recognition.</p>

            <p class="narrative">The frequency is still in your pocket. Just in case.</p>
        `,
        choices: [
            { text: "Build the safe zone with Minho.", target: 15 }
        ]
    },

    65: {
        title: "THE ALLIANCE",
        thread: "crosspath",
        content: `
            <p class="narrative">You become the bridge.</p>

            <p class="narrative">Between Colonel Yoo's rigid hierarchy and Soojin's guerrilla flexibility. Between Minho's quiet competence and the chaos of a dying world. Between hope and despair.</p>

            <p class="narrative">It's exhausting. Some nights you collapse in Minho's arms without the energy to speak. Other nights, you're up until dawn, planning supply runs with Soojin's team.</p>

            <p class="narrative">But it works.</p>

            <p class="narrative">Within three months, the safe zone has tripled in size. Trade routes established with survivor groups across Korea. A radio network spanning the peninsula.</p>

            <p class="narrative">And at the center of it all: an unlikely trio. A colonel. A sergeant. A museum curator.</p>

            <p class="dialogue">"You know," Soojin says one night, passing you a bottle of soju, "when I first saw you step between those guns, I thought you had a death wish."</p>

            <p class="dialogue">"I probably did."</p>

            <p class="dialogue">"What changed?"</p>

            <p class="narrative">You look across the fire. Minho is talking with some of the civilians, laughing at something. Colonel Yoo is reviewing maps with her lieutenants. The safe zone is alive with purpose.</p>

            <p class="dialogue">"I found something worth living for."</p>

            <p class="narrative">Soojin follows your gaze. A small smile.</p>

            <p class="dialogue">"Yeah. That'll do it."</p>
        `,
        choices: [
            { text: "Continue building the alliance.", target: 66 }
        ]
    },

    66: {
        title: "THE COALITION",
        thread: "crosspath",
        isEnding: true,
        endingNumber: 13,
        content: `
            <p class="narrative">Five years later, they call it the Seoul Coalition. A network of survivor communities spanning what used to be South Korea.</p>

            <p class="narrative">Colonel Yoo handles defense. Soojin runs reconnaissance and rescue. Minho coordinates logistics.</p>

            <p class="narrative">And you? You're the Voice. The one who talks to the other factions. Who negotiates truces. Who reminds people that cooperation isn't weakness.</p>

            <p class="narrative">It's not perfect. There are still infected. Still danger. Still loss.</p>

            <p class="narrative">But there's also hope. Children being born into a world that's fighting back. Farms growing in the ruins of cities. Laughter echoing through the safe zones.</p>

            <p class="narrative">On the fifth anniversary of the outbreak, you stand on the watchtower with Minho. Below, the Coalition celebrates. Music, food, dancing.</p>

            <p class="dialogue">"Do you remember what you said to me that first night?" he asks. "When I came for you?"</p>

            <p class="dialogue">"I said you left me."</p>

            <p class="dialogue">"And you were right. I did." He takes your hand. "But I came back. And I never left again."</p>

            <p class="narrative">You lean into him. Watch the firelight dance.</p>

            <p class="dialogue">"I know."</p>

            <div class="ending">
                <div class="ending-number">ENDING 13 OF 12</div>
                <h2 class="ending-title">THE COALITION</h2>
                <div class="ending-text">
                    <p>They write songs about the founders. Colonel Yoo, the Iron Shield. Sergeant Kim, the Pathfinder. Minho Park, the Heart.</p>
                    <p>And you? They call you the Voice. The woman who talked two armies out of killing each other. The diplomat who built a nation from apocalypse.</p>
                    <p>But late at night, when it's just you and Minho and the stars, you're just Yuna. The museum curator who refused to let the world end.</p>
                    <p><em>"Together," you whisper, the same word you've said every night for five years.</em></p>
                    <p><em>"Together," he answers. And he always will.</em></p>
                </div>
            </div>
        `,
        choices: []
    }
};

// Export for use in game.html
if (typeof module !== 'undefined' && module.exports) {
    module.exports = STORY_DATA;
}

// ═══════════════════════════════════════════════════════════════════════════
// KNIFE'S EDGE PATHS - Counter-intuitive choices that lead to HEA endings
// These require ASSERTIVE decisions. Hesitation = death. Half-measures = failure.
// ═══════════════════════════════════════════════════════════════════════════

const KNIFES_EDGE_PATHS = {
    new_dawn: {
        description: "To rebuild society, you must first BREAK the old power structures completely",
        counterIntuitive: [
            "Let the safe zone fall BEFORE trying to save it",
            "Trust the person who betrayed you ONCE (but only once)",
            "Destroy the last radio to force face-to-face community",
            "Walk into certain death—alone—to prove you mean it"
        ]
    },
    salvation: {
        description: "To end the infection, you must first EMBRACE it",
        counterIntuitive: [
            "Let yourself get bitten (controlled exposure)",
            "Refuse the immediate cure to study Generation Zero",
            "Side with the infected consciousness before destroying it"
        ]
    },
    exodus: {
        description: "To find paradise, you must ABANDON everything you have built",
        counterIntuitive: [
            "Leave when things are going WELL, not when desperate",
            "Take the impossible route everyone says will kill you",
            "Destroy your return path to commit fully"
        ]
    },
    reckoning: {
        description: "For justice, you must show mercy to the GUILTY to condemn the system",
        counterIntuitive: [
            "Spare Dr. Kwon so he can testify",
            "Let the corporation exec LIVE—but take everything",
            "Confess your own sins publicly before judging others"
        ]
    },
    promised_land: {
        description: "To build utopia, you must first be COMPLETELY broken",
        counterIntuitive: [
            "Give away your last weapon",
            "Share your food when you are starving",
            "Love someone you have every reason to hate"
        ]
    }
};

// ═══════════════════════════════════════════════════════════════════════════
// JINWOO (JIN) - The Romantic Character
// Assertive. Passionate. Absolute. "Look me in the eye and KNOW that" energy.
// ═══════════════════════════════════════════════════════════════════════════

const JINWOO_SCENES = {

    // THE CAR CRASH MEET-CUTE (chaotic energy)
    first_meeting: {
        id: "jin_first_meet",
        title: "THE GETAWAY",
        content: `
            <p class="narrative">The car tears down the mountain road. Rain hammering the windshield. Wipers useless. Behind you—three trucks full of raiders who really, really want what is in this car.</p>

            <p class="narrative">The driver is insane. Actually, certifiably insane. You grabbed his car because it was the only one running, and now you are questioning every life choice that led to this moment.</p>

            <p class="narrative">He takes a corner at fifty. The back end slides. Your stomach relocates to your throat.</p>

            <p class="dialogue">"Would you still trust me if I hit a tree?"</p>

            <p class="narrative">He says it casually. Like he is asking about the weather. Meanwhile his hands are SAWING at the wheel, clearly pretending he is in Fast and Furious: Seoul Drift.</p>

            <p class="dialogue">"What?!"</p>

            <p class="dialogue">"Hypothetically." Another corner. Tires screaming. "If I clipped a tree. Minor impact. Would that—"</p>

            <p class="narrative">CRUNCH.</p>

            <p class="narrative">The world spins. Metal screams. Your head bounces off something. When you open your eyes, the car is sideways, and there is a very large tree embedded in the driver's door.</p>

            <p class="narrative">He is still gripping the wheel. Covered in glass. Grinning.</p>

            <p class="dialogue">"So that is a no on the tree question."</p>

            <p class="dialogue">"Your DOOR—"</p>

            <p class="dialogue">"Lodged. Yeah. I noticed." He is already unbuckling, climbing over the center console toward your side. "Gonna need to go out your way. You okay?"</p>

            <p class="dialogue">"You just—we just—you HIT A TREE trying to drift at TWENTY MILES AN HOUR—"</p>

            <p class="dialogue">"Sliding. It was a slide, not a drift. Important distinction."</p>

            <p class="narrative">Headlights behind you. The raiders. Getting closer.</p>

            <p class="dialogue">"Can we argue about this while running?"</p>

            <p class="narrative">You kick your door open. He is right behind you, grabbing your hand, pulling you into the treeline. Rain soaking through everything. Raiders shouting. His grip—iron.</p>

            <p class="dialogue">"I am Jin, by the way." He vaults a fallen log, somehow graceful. "In case you wanted to know whose fault this is."</p>

            <p class="dialogue">"I hate you."</p>

            <p class="dialogue">"Most people do at first." Another grin, flashing in the dark. "They usually come around."</p>

            <p class="narrative">You want to punch him. You also want to know how someone can look that confident while bleeding from the forehead and running for his life.</p>

            <p class="narrative">Mostly you want to survive the next ten minutes.</p>

            <p class="narrative">But later—much later—you will admit: it was the best worst first meeting of your life.</p>
        `
    },

    // THE ASSERTION MOMENT
    assertion: {
        id: "jin_assertion",
        title: "LOOK AT ME",
        content: `
            <p class="narrative">You are spiraling. Too many voices, too many options, too many people who want things from you. Your hands are shaking. Your breath is—</p>

            <p class="narrative">A hand on your chin. Firm. Not hurting, but not asking permission either.</p>

            <p class="dialogue">"Yuna."</p>

            <p class="narrative">Jin's voice cuts through everything. Low. Controlled. A knife through butter.</p>

            <p class="dialogue">"Look at me."</p>

            <p class="narrative">You do. His eyes are fire and ice and something older than both.</p>

            <p class="dialogue">"Breathe." He does not blink. "You have survived horrors that would break soldiers. You have made impossible choices and lived. You are not going to fall apart because some bureaucrats are arguing about ration distribution."</p>

            <p class="narrative">His thumb traces your jaw. Gentle now. But still not letting go.</p>

            <p class="dialogue">"You are the strongest person in this room. You just forgot. So I am reminding you."</p>

            <p class="narrative">He releases you. Steps back.</p>

            <p class="dialogue">"Now. What do you want to do?"</p>

            <p class="narrative">And somehow—impossibly—you know the answer.</p>
        `
    },

    // THE DECLARATION
    declaration: {
        id: "jin_declaration",
        title: "MINE",
        content: `
            <p class="narrative">The battle is over. The walls held. But barely.</p>

            <p class="narrative">Jin finds you on the watchtower, staring at the fires still burning in the distance. He is bleeding from somewhere—always bleeding from somewhere—but he does not seem to notice.</p>

            <p class="dialogue">"You could have left." He leans against the railing beside you. "When the east wall fell. You could have run."</p>

            <p class="dialogue">"So could you."</p>

            <p class="dialogue">"No. I could not." He turns to face you. That look—the one that pins you in place. "Not while you were still inside."</p>

            <p class="narrative">The silence stretches. You can hear your own heartbeat.</p>

            <p class="dialogue">"Jin—"</p>

            <p class="dialogue">"I am not good at this." He runs a hand through his hair. "At... feelings. Words. I am good at violence and logistics and occasionally making people laugh by crashing cars into trees."</p>

            <p class="narrative">Despite everything, you snort.</p>

            <p class="dialogue">"But you should know something." He steps closer. Close enough to touch. "Wherever you go. Whatever happens. Whatever stupid decisions you make that I will absolutely yell at you about later—"</p>

            <p class="narrative">His hand cups your face. Tender. Reverent. Nothing like the first time he grabbed your chin.</p>

            <p class="dialogue">"I am yours. And you are mine. That is not negotiable."</p>

            <p class="narrative">You kiss him. Or he kisses you. It does not matter which.</p>

            <p class="narrative">What matters is that for the first time since the world ended, you believe it might be worth rebuilding.</p>
        `
    }
};

// ═══════════════════════════════════════════════════════════════════════════
// HEA ENDING CONTENT - Full narratives for triumph endings
// ═══════════════════════════════════════════════════════════════════════════

const HEA_ENDING_CONTENT = {

    70: {
        title: "DAWN OF DEMOCRACY",
        tier: "triumph",
        endingNumber: 70,
        isEnding: true,
        content: `
            <p class="narrative date">THREE YEARS AFTER THE FALL</p>

            <p class="narrative">The first election happens in what used to be City Hall. Three hundred and forty-seven survivors cast votes written on scrap paper.</p>

            <p class="narrative">They did not elect you. You made sure your name was not on the ballot. Leaders who want power should not have it—that is the lesson the old world forgot.</p>

            <div class="ending hea-ending">
                <div class="ending-number">TRIUMPH ENDING: DAWN OF DEMOCRACY</div>
                <h2 class="ending-title">THE VOTE</h2>
                <div class="ending-text">
                    <p>Future generations will study this moment. The day survivors chose hope over fear.</p>
                    <p>You made this possible. Not by leading—by refusing to.</p>
                </div>
            </div>
        `,
        choices: []
    },

    91: {
        title: "EDEN REBORN",
        tier: "utopia",
        endingNumber: 91,
        isEnding: true,
        requirement: "All companions alive + Jin romance complete + zero betrayals",
        content: `
            <p class="narrative date">TEN YEARS AFTER THE FALL</p>

            <p class="narrative">The garden stretches to the horizon. Every companion survived. Minho. Soojin. Mrs. Park. Even Colonel Yoo.</p>

            <p class="narrative">And Jin.</p>

            <p class="narrative">He is standing at the edge of the vineyard, watching the sunset. Scarred hands holding a child who fell asleep against his chest.</p>

            <p class="narrative">Your child. His child.</p>

            <p class="dialogue">"You are staring," he says without turning.</p>

            <p class="dialogue">"I am appreciating."</p>

            <p class="narrative">He turns. That look—the one that pins you in place. That reminds you of the first time he grabbed your chin and told you to breathe.</p>

            <p class="dialogue">"I was wrong about you," he murmurs into your hair.</p>

            <p class="dialogue">"When?"</p>

            <p class="dialogue">"When I said you were the strongest person I had met. You are the strongest person there is. And you are mine. And I am never letting go."</p>

            <div class="ending hea-ending perfect">
                <div class="ending-number">PERFECT ENDING: EDEN REBORN</div>
                <h2 class="ending-title">PARADISE FOUND</h2>
                <div class="ending-text">
                    <p>Every promise kept. Every friend alive. Love that survived the apocalypse.</p>
                    <p>This is what happens when you show up for the people who show up for you.</p>
                    <p><em>The end is just the beginning.</em></p>
                </div>
            </div>
        `,
        choices: []
    }
};

// Merge into STORY_DATA if it exists
if (typeof STORY_DATA !== 'undefined') {
    Object.assign(STORY_DATA, HEA_ENDING_CONTENT);
}

// ═══════════════════════════════════════════════════════════════════════════
// JINWOO "JIN" CARDWELL - MAIN CHARACTER
// ═══════════════════════════════════════════════════════════════════════════
// SoCal boy turned Florida Man. 4 years at war. Airborne. Felonies.
// Dove to the bottom of the sea. Loved hard, fought harder.
// NOT A SIDE QUEST. THIS IS MAIN CHARACTER ENERGY.
// ═══════════════════════════════════════════════════════════════════════════

const JIN_CHARACTER = {
    name: "Jinwoo Cardwell",
    nickname: "Jin",
    callsign: "Nephilim",
    age: 32,
    nationality: "Korean-American (grew up Orange County, went wild in Florida)",

    background: {
        military: "4 years Army Rangers, 2 deployments, airborne qualified, honorable discharge",
        criminal: "Multiple felonies (all dismissed or expunged - long story involving corruption exposure)",
        skills: ["Combat leadership", "Tactical driving (poorly)", "Scuba (certified to 60m)", "Skydiving (200+ jumps)",
                "Languages: English, Korean, Spanish", "Improvised explosives", "Medical field trauma"],
        weaknesses: ["Cannot cook", "Terrible at driving in rain", "Says exactly what he thinks", "Protective to a fault"]
    },

    appearance: "6'2, lean muscle from years of training, eyes that have seen war and made peace with it. Scarred hands. Moves like violence is always an option but never the first choice anymore. Usually in worn military surplus. Dog tags he never explains.",

    voice: "California casual until shit gets real, then the command voice comes out. Dark humor about death. Tender when it counts. Never yells unless he means it—and when he means it, walls shake.",

    philosophy: "Show up for the people who show up for you. Ruthlessly. Consistently. Without hesitation. Everyone else can figure their own shit out.",

    // Jin appears in the story at SECTION 5 (early in the game)
    firstAppearance: 5,

    // Relationship with player builds through choices
    relationshipStages: [
        { stage: "stranger", requirement: null },
        { stage: "ally", requirement: "survive_together" },
        { stage: "friend", requirement: "share_vulnerability" },
        { stage: "trusted", requirement: "fight_together" },
        { stage: "devoted", requirement: "choose_each_other" },
        { stage: "bonded", requirement: "survive_impossible_odds" }
    ]
};

// ═══════════════════════════════════════════════════════════════════════════
// JIN STORY SECTIONS - Integrated throughout the narrative
// ═══════════════════════════════════════════════════════════════════════════

const JIN_SECTIONS = {

    // SECTION: Jin First Meeting (escape from museum area)
    jin_meet: {
        id: "jin_meet",
        injectAfter: 4, // After leaving the apartment
        title: "THE WILD CARD",
        content: `
            <p class="narrative">The car comes out of nowhere.</p>

            <p class="narrative">One second you are running down an alley, infected closing in from both ends. The next, a battered Hyundai Sonata tears around the corner, barely misses a dumpster, and skids to a stop beside you.</p>

            <p class="narrative">The window rolls down. A man with a bloody forehead and the most unhinged grin you have ever seen leans out.</p>

            <p class="dialogue">"You look like you could use a ride."</p>

            <p class="narrative">Behind you: screaming. Shuffling. The wet sounds of things that used to be human.</p>

            <p class="dialogue">"GET IN."</p>

            <p class="narrative">You get in.</p>

            <p class="narrative">The car LAUNCHES forward before you even close the door. The man is laughing—actually laughing—as infected bounce off the hood.</p>

            <p class="dialogue">"I am Jin," he says, taking a corner way too fast. "Former Ranger. Current survivor. Professional bad decision maker."</p>

            <p class="dialogue">"You just hit three people."</p>

            <p class="dialogue">"People is generous. They were not using those bodies for people things anymore."</p>

            <p class="narrative">Another corner. Tires squealing. You grip the dashboard.</p>

            <p class="dialogue">"Where are we going?!"</p>

            <p class="dialogue">"Good question! I was actually following you." He glances over. "You came from the museum. You know something. Everyone who made it out of Itaewon this morning knows something."</p>

            <p class="narrative">Rain starts hammering the windshield. He does not slow down.</p>

            <p class="dialogue">"Would you still trust me if I hit a tree?"</p>

            <p class="dialogue">"What?!"</p>

            <p class="dialogue">"Hypothetically. If I—"</p>

            <p class="narrative">CRUNCH.</p>

            <p class="narrative">The car spins. A tree appears where no tree should be. Metal screams. When everything stops, Jin's door is caved in, and he is climbing over the center console toward you, still grinning.</p>

            <p class="dialogue">"Okay so that is a no on the tree question."</p>

            <p class="dialogue">"Your DOOR—"</p>

            <p class="dialogue">"Yep. Lodged. We are going out your side." He is already unbuckling you. "Raiders behind us. About thirty seconds. You good to run?"</p>

            <p class="dialogue">"You JUST CRASHED—"</p>

            <p class="dialogue">"It was a tactical repositioning. Come on."</p>

            <p class="narrative">He pulls you through the passenger door and into the rain. Behind you: headlights. Shouting.</p>

            <p class="narrative">His hand grips yours. Iron.</p>

            <p class="dialogue">"I got you. Just run. Do not let go."</p>

            <p class="narrative">You run. And somehow—impossibly—you do not let go.</p>
        `,
        choices: [
            { text: "Trust him. Keep running.", target: "jin_escape" },
            { text: "Demand answers. Stop running.", target: "jin_confrontation" }
        ]
    },

    // Jin takes a bullet for you
    jin_bullet: {
        id: "jin_bullet",
        title: "THE COST",
        thread: "jin",
        content: `
            <p class="narrative">The shot comes from the watchtower. You do not even hear it—just feel the impact as something hits you, knocks you sideways, throws you to the ground.</p>

            <p class="narrative">Except it was not you who got hit.</p>

            <p class="narrative">Jin is on top of you. Covering you. And there is blood—so much blood—spreading across his side.</p>

            <p class="dialogue">"Jin—JIN—"</p>

            <p class="dialogue">"I'm good." He is not good. He is very obviously not good. But he is still moving, still dragging you toward cover. "Get behind the wall. NOW."</p>

            <p class="narrative">You drag him. He is heavier than he looks. More shots pepper the ground around you.</p>

            <p class="narrative">Behind the wall. Safe. For now.</p>

            <p class="dialogue">"Let me see it."</p>

            <p class="dialogue">"Later."</p>

            <p class="dialogue">"JIN. Let me SEE IT."</p>

            <p class="narrative">He looks at you. That look—the one that usually pins you in place. But this time it is different. Softer. Almost... afraid.</p>

            <p class="dialogue">"Why did you do that?" Your voice is shaking. "You could have—you almost—"</p>

            <p class="dialogue">"Because." He coughs. Blood on his lips. "Some things are worth dying for. And you—" Another cough. "—are one of them."</p>

            <p class="dialogue">"I did not ask you to—"</p>

            <p class="dialogue">"I know." His hand finds yours. "That is why you deserve it."</p>

            <p class="narrative">More shots. Shouting. The world is chaos. But right now, in this moment, there is only him. Only his hand in yours.</p>

            <p class="dialogue">"You are not dying," you tell him. "That is not negotiable."</p>

            <p class="narrative">He laughs. It sounds like it hurts.</p>

            <p class="dialogue">"Yes ma'am."</p>
        `,
        choices: [
            { text: "Field dress his wound while providing cover.", target: "jin_surgery" },
            { text: "Call for backup—you cannot do this alone.", target: "jin_rescue" }
        ]
    },

    // Jin's confession
    jin_confession: {
        id: "jin_confession",
        title: "WHAT I AM",
        thread: "jin",
        content: `
            <p class="narrative">The fire crackles. Everyone else is asleep. It is just you and Jin, sitting watch.</p>

            <p class="dialogue">"I should tell you something." He is not looking at you. "Before this goes any further."</p>

            <p class="dialogue">"Okay."</p>

            <p class="dialogue">"I have felonies. Multiple. The kind that do not look good on a resume."</p>

            <p class="narrative">Silence. The fire pops.</p>

            <p class="dialogue">"What kind?"</p>

            <p class="dialogue">"Assault. Battery. Destruction of government property." He finally looks at you. "I found out my CO was taking bribes to send men into ambushes. Selling their lives for profit. I could not prove it through channels. So I..."</p>

            <p class="dialogue">"So you what?"</p>

            <p class="dialogue">"So I beat him until he confessed. In front of witnesses. And then I burned every document that had his name on it." A pause. "The felonies were eventually dismissed when the investigation proved I was right. But the record stays."</p>

            <p class="narrative">You consider this. The fire. The stars. The man beside you who just trusted you with something that could destroy him.</p>

            <p class="dialogue">"Good."</p>

            <p class="dialogue">"...Good?"</p>

            <p class="dialogue">"He was selling lives. You stopped him." You meet his eyes. "That is not a crime. That is justice."</p>

            <p class="narrative">Something shifts in his expression. Something vulnerable. Hopeful.</p>

            <p class="dialogue">"Most people hear felony and run."</p>

            <p class="dialogue">"Most people have not survived an apocalypse with you." You lean into him. "I know what you are, Jin. I have watched you fight. Bleed. Almost die for strangers. Whatever that record says, it is not who you are."</p>

            <p class="narrative">His arm wraps around you. Pulls you close.</p>

            <p class="dialogue">"You might be the first person who has ever said that."</p>

            <p class="dialogue">"Then everyone else was wrong."</p>

            <p class="narrative">The fire burns. The stars turn. And for the first time in years, Jinwoo Cardwell believes he might be worth loving.</p>
        `,
        choices: [
            { text: "Kiss him.", target: "jin_romance" },
            { text: "Hold him. No words needed.", target: "jin_comfort" }
        ]
    },

    // Jin's sacrifice moment (can die here if player makes wrong choice)
    jin_sacrifice: {
        id: "jin_sacrifice",
        title: "THE BRIDGE",
        thread: "jin",
        content: `
            <p class="narrative">The bridge is rigged to blow. Three hundred survivors on the other side, including half your people. And between them and you: a horde. Thousands of infected, pressing forward.</p>

            <p class="narrative">Someone has to hold the line while the others cross.</p>

            <p class="dialogue">"I will do it."</p>

            <p class="narrative">Jin is already moving toward the explosives. Already checking his weapon. Already accepting what comes next.</p>

            <p class="dialogue">"No—"</p>

            <p class="dialogue">"Yuna." He turns. That look. The one that has always seen right through you. "You know it has to be me. I am the best shooter. I have the training. And—" His voice cracks. "—and you have to live. For all of them. For everything we built."</p>

            <p class="dialogue">"I will not leave you."</p>

            <p class="dialogue">"Yes. You will." He cups your face. Gentle now. "Because I am asking you to. Because I love you too much to watch you die. Because—"</p>

            <p class="narrative">He kisses you. Hard. Desperate. Every word he never said poured into one moment.</p>

            <p class="dialogue">"Go. Lead them. Build the world we dreamed about." His forehead against yours. "I will be watching. Somehow. I promise."</p>

            <p class="narrative">The horde is closer. Seconds left.</p>
        `,
        choices: [
            {
                text: "Let him go. Honor his sacrifice.",
                target: "jin_death",
                consequence: "Jin dies. You live with the weight forever."
            },
            {
                text: "Grab the detonator. Take his place.",
                target: "jin_save_reversal",
                consequence: "You sacrifice yourself. Jin survives. He never forgives himself."
            },
            {
                text: "There is a third option. There is ALWAYS a third option.",
                target: "jin_save_both",
                requirement: "Must have studied bridge schematics + have explosives training",
                consequence: "Counter-intuitive: blow the bridge EARLY, ride the debris. Both survive."
            }
        ]
    }
};

// ═══════════════════════════════════════════════════════════════════════════
// JIN ENDING INTEGRATION
// Jin is required for certain HEA endings
// ═══════════════════════════════════════════════════════════════════════════

const JIN_ENDING_REQUIREMENTS = {
    "EDENN": { // Eden Reborn - perfect ending
        jinAlive: true,
        jinRomance: "bonded",
        description: "Jin must survive and reach 'bonded' relationship status"
    },
    "JEJUP": { // Jeju Paradise
        jinAlive: true,
        jinRomance: "trusted",
        description: "Jin can be alive or dead; if alive, adds unique dialogue"
    },
    "DNFAM": { // Dawn of Family
        jinAlive: true,
        description: "Jin becomes part of the found family"
    }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { JIN_CHARACTER, JIN_SECTIONS, JIN_ENDING_REQUIREMENTS };
}

// ═══════════════════════════════════════════════════════════════════════════
// JIN - THE DJINN - Original Character
// Distilled from essence, not copied.
// ═══════════════════════════════════════════════════════════════════════════
// What he IS:
// - A paradox that makes sense when you meet him
// - The guy who looks like nothing until he becomes everything
// - Fire masked as smoke. Violence dressed as peace.
// - Someone who found war, was broken by it, and chose to rebuild himself
// ═══════════════════════════════════════════════════════════════════════════

const JIN = {
    name: "Jinwoo",
    nickname: "Jin",
    meaning: "진우 - Precious Friend, or True/Real Universe (depending on hanja)",
    parallel: "Djinn - a spirit of smoke and fire who grants wishes or destroys kingdoms",

    // NOT a biography. An energy signature.
    essence: {
        duality: "Sun-bleached and storm-forged. Started where the waves break. Ended up where the lightning strikes. The journey between cracked him open and filled him with something stranger.",

        violence: "He broke men who were breaking others. Not for country. For conscience. The system called it crime. His soul called it correction.",

        depth: "He has touched the bottom and the top. Descended into pressure that would crush most. Jumped from heights that would freeze most. Neither killed him. Both changed him.",

        fire: "Smolders when calm. Burns when moved. The heat is always there—the question is whether you feel the warmth or the wrath.",

        time: "Lived enough lifetimes to know that most problems solve themselves if you wait. But when the moment comes, waiting is murder. He knows the difference by instinct now."
    },

    // How he FEELS to be around
    presence: {
        first_impression: "He looks like someone napping through the apocalypse. Like the universe could end and he would say 'cool' and roll another one. You want to be annoyed. Then you notice his eyes tracking every movement in the room.",

        second_look: "There is nothing lazy about him. Every slouch is calculated. Every yawn measured. He is the most awake person here, wearing sleep like camouflage.",

        revelation: "When he moves, you understand everything. The waiting was loading. The stillness was aiming. And now he is firing—not with rage but with terrible precision.",

        aftermath: "And then it is over, and he is back to seeming half-asleep, and you wonder if you dreamed the whole thing. But the bodies are real. The victory is real. The way he looks at you, checking you for wounds, is definitely real."
    },

    // How he LOVES
    love: {
        approach: "Slow. Testing. Not because he does not feel it but because he has felt too much and needs to know this one will not shatter him.",

        commitment: "Absolute. Once he decides you are his, he is a wall between you and the world. Not possessive—protective. The difference matters.",

        expression: "Acts, not words. He will crash a car to save you before he says 'I love you.' But when he says it, he means it in languages that have not been invented yet.",

        conflict: "He will grab your chin and make you look at him. Not to control—to connect. Because some things need to be said eye to eye or they do not count."
    },

    // How he FIGHTS
    war: {
        philosophy: "Violence is a language. Most people scream it. He whispers until he needs to shout. Then mountains move.",

        preparation: "He has already fought this battle seventeen times in his head. This is just the performance.",

        execution: "Economy of motion. Nothing wasted. No glory, no flourish, just the shortest distance between problem and solution.",

        mercy: "Knows when to stop. That is what separates him from monsters. He COULD destroy everything. He chooses not to. The choice is what makes him human."
    },

    // What he BELIEVES
    creed: {
        loyalty: "Show up for those who show up for you. Ruthlessly. Consistently. Without question.",
        betrayal: "Betray that loyalty once, and you become a stranger. Twice, and you become a target.",
        justice: "The system is broken. Always has been. Someone has to fix it with their hands when words fail.",
        love: "Love hard. Fight harder. Never apologize for either.",
        survival: "The goal is not to live forever. It is to create something that outlasts you."
    }
};

// ═══════════════════════════════════════════════════════════════════════════
// JIN REIMAGINED SCENES - Essence, not biography
// ═══════════════════════════════════════════════════════════════════════════

const JIN_SCENES_REFINED = {

    first_meeting: {
        id: "jin_arrival",
        title: "SMOKE AND MIRRORS",
        content: `
            <p class="narrative">You hear the engine before you see the car. Something old. Something loud. Something being driven by a madman.</p>

            <p class="narrative">The vehicle tears around the corner—a battered thing that has no business still running—and skids to a stop in front of you. The driver leans out. Dark eyes. Easy smile. Something wild around the edges that his calm voice does not match.</p>

            <p class="dialogue">"You look like you are having a day."</p>

            <p class="narrative">Behind you: the infected. Closing in. Maybe thirty seconds before they reach you.</p>

            <p class="dialogue">"Get in."</p>

            <p class="narrative">You get in.</p>

            <p class="narrative">The car launches forward. He drives like someone who has been chased before. Often. By things worse than the dead.</p>

            <p class="dialogue">"Jin." He takes a corner too fast, and you feel the back end slide. "And before you ask: yes, I know what I am doing. Mostly. More than you would think."</p>

            <p class="dialogue">"You almost hit that truck—"</p>

            <p class="dialogue">"Almost only counts in explosives." Another corner. Tighter. "I have a theory. Want to hear it?"</p>

            <p class="narrative">You grab the dashboard. The infected are fading behind you. Rain starts hammering the windshield.</p>

            <p class="dialogue">"If I hit a tree—minor impact, nothing fatal—would that affect your trust in my driving?"</p>

            <p class="dialogue">"What?!"</p>

            <p class="dialogue">"Hypothetically. I am curious about—"</p>

            <p class="narrative">CRUNCH.</p>

            <p class="narrative">The world spins. Metal screams. When everything stops, there is a tree in his door, and he is climbing toward you, somehow still smiling.</p>

            <p class="dialogue">"So that is a no on the tree question. Good to know. Exiting your way."</p>

            <p class="narrative">He pulls you out. Headlights appear behind you—raiders, drawn by the crash. His hand finds yours.</p>

            <p class="dialogue">"Here is the thing about trust." His grip is iron. His voice is casual. His eyes are calculating sixteen escape routes. "You either have it or you build it. I prefer building. Ready to run?"</p>

            <p class="narrative">You run. Into the rain. Into the dark. His hand never lets go.</p>

            <p class="narrative">Later, you will realize: he was testing you. Not your trust in him—your willingness to commit. To stay. To not let go when everything goes sideways.</p>

            <p class="narrative">You passed.</p>
        `
    },

    the_claim: {
        id: "jin_claim",
        title: "THE CLAIM",
        content: `
            <p class="narrative">The battle is over. You are both still breathing. That is the only victory that matters.</p>

            <p class="narrative">Jin finds you on the wall, staring at nothing. Or everything. The fires still burning. The bodies being moved. The world that keeps ending and refusing to stop.</p>

            <p class="narrative">He does not say anything at first. Just stands there. That presence—the one that fills a room without asking permission—settling around you like smoke.</p>

            <p class="dialogue">"I am not good at this part."</p>

            <p class="dialogue">"What part?"</p>

            <p class="dialogue">"The after. The feelings. The words that are supposed to mean something." He turns to face you. "I know how to fight. How to wait. How to kill when killing is required. But this—"</p>

            <p class="narrative">He stops. Swallows. The vulnerability is unexpected. Dangerous. Real.</p>

            <p class="dialogue">"I watched you today. Running toward the breach when everyone else ran away. Carrying that kid when your arms were already full. Refusing to leave people behind." His voice drops. "I thought I knew what brave looked like. I was wrong."</p>

            <p class="dialogue">"Jin—"</p>

            <p class="dialogue">"Let me finish." His hand catches your chin. Tilts your face toward him. "I need to say this, and I need you to hear it."</p>

            <p class="narrative">His eyes. Fire and ice. Smoke and steel.</p>

            <p class="dialogue">"I am yours. That is not a request. It is not a negotiation. It is what IS." His thumb traces your jaw. "Where you go, I go. What threatens you, I end. What you need, I become."</p>

            <p class="dialogue">"That sounds—"</p>

            <p class="dialogue">"Intense. I know. I have been told." A ghost of that wild smile. "But I do not know how to love small. I do not know how to fight small. I am either all in or I am gone."</p>

            <p class="narrative">His forehead touches yours. Breathing shared. Hearts synced.</p>

            <p class="dialogue">"So here it is. The claim. The truth. The only thing I know for sure in this entire dying world."</p>

            <p class="narrative">A pause. A breath.</p>

            <p class="dialogue">"You are mine. And I am never letting go."</p>
        `
    }
};

// Export for integration
if (typeof STORY_DATA !== 'undefined') {
    Object.assign(STORY_DATA, JIN_SCENES_REFINED);
}

// ═══════════════════════════════════════════════════════════════════════════
// JIN CHARACTER UPDATE - The Leopard, The Mongoose, The Shaman
// ═══════════════════════════════════════════════════════════════════════════
// On the surface: Stoner vibes. Chill. Almost lazy.
// Underneath: Leopard waiting in the tree. Mongoose-fast calculations.
// In crisis: CHARGES. Takes command. Fights harder than anyone.
// In downtime: Shaman energy. Spiritual. Reads the room at a deeper level.
// ═══════════════════════════════════════════════════════════════════════════

const JIN_PERSONALITY = {

    surface: {
        vibe: "Stoner chill. Always looks half-asleep. Moves slowly on purpose.",
        speech: "Casual. California drawl with Korean phrases. Uses 'bro' unironically.",
        stance: "Leaning. Always leaning on something. Never looks tense.",
        tells: "Eyes track everything. Hands are never far from a weapon. Never truly relaxed."
    },

    underneath: {
        mind: "Mongoose-speed calculation. Six moves ahead. Every exit mapped. Every threat assessed.",
        patience: "Leopard waiting in the tree. Will sit motionless for hours if necessary.",
        control: "Complete awareness of room dynamics. Knows who will break first. Always.",
        reveal: "Only shows when stakes demand it. Then people realize: the chill guy is a predator."
    },

    combat: {
        trigger: "Someone threatens his people. Or the mission. Or her.",
        transformation: "The lazy movements become lethally efficient. Zero wasted motion.",
        violence: "Controlled devastation. Never more force than needed. Never less than required.",
        aftermath: "Back to chill. Like flipping a switch. Only his eyes remember."
    },

    downtime: {
        vibe: "Shaman energy. Spiritual. Sits in silence and sees things others miss.",
        habits: "Smokes. Meditates. Watches the sky. Talks to himself about strategy.",
        wisdom: "Drops truth bombs disguised as stoned rambling. Listen carefully.",
        sacred: "Has rituals. Dog tags. A prayer in Korean before every mission."
    }
};

const JIN_DOWNTIME_SCENES = {

    shaman_moment: {
        id: "jin_shaman",
        title: "THE FIRE WATCHER",
        content: `
            <p class="narrative">You find Jin at the edge of camp, cross-legged in front of a small fire. Smoke curls around him—not just from the wood. He does not look up when you approach.</p>

            <p class="dialogue">"Pull up some dirt."</p>

            <p class="narrative">You sit. The fire crackles. Somewhere in the distance, infected moan their endless hunger. But here, somehow, there is peace.</p>

            <p class="dialogue">"You ever notice," he says after a long silence, "that fire does not fight? It just... transforms. Whatever you feed it. Turns it into light. Heat. Something else."</p>

            <p class="dialogue">"Are you high right now?"</p>

            <p class="dialogue">"Obviously." He takes another drag. "Does not make it less true."</p>

            <p class="narrative">You watch the flames. He is right—they do not fight. They just change everything they touch.</p>

            <p class="dialogue">"Tomorrow is going to be bad," you say finally.</p>

            <p class="dialogue">"Yep."</p>

            <p class="dialogue">"We might not all make it."</p>

            <p class="dialogue">"Also yep." He turns to look at you. His eyes are red-rimmed but sharp. Always sharp. "But that is not what is really bothering you."</p>

            <p class="narrative">How does he do that? How does he always know?</p>

            <p class="dialogue">"What if I am not good enough? What if I make the wrong call and—"</p>

            <p class="dialogue">"What if the sky falls? What if fish learn to drive?" He shrugs. "You cannot control outcomes. You can only control choices. Make the choice. Live with it. Move on."</p>

            <p class="dialogue">"That sounds too simple."</p>

            <p class="dialogue">"Simple is not the same as easy." He passes you the joint. "Here. Stop thinking so loud. You are harshing my vibe."</p>

            <p class="narrative">You take it. The smoke fills your lungs. And for just a moment, the weight lifts.</p>

            <p class="dialogue">"Tomorrow I am going to kill a lot of people," he says quietly. Not bragging. Just... stating fact. "And then I am going to come back here and watch this fire and smoke this weed and not think about any of them. Because that is how you survive. Not the killing. The coming back."</p>

            <p class="dialogue">"That sounds like trauma."</p>

            <p class="dialogue">"That sounds like war." He smiles. For a moment, he looks almost young. "But you already knew that. Curator. You have your own fires."</p>

            <p class="narrative">The flames dance. The smoke rises. And somewhere between the marijuana haze and the starlight, you realize: this man is exactly as dangerous as he seems peaceful.</p>

            <p class="narrative">Which is very.</p>
        `
    },

    leopard_reveal: {
        id: "jin_leopard",
        title: "THE SWITCH",
        content: `
            <p class="narrative">The raider does not see it coming.</p>

            <p class="narrative">Jin has been sitting in the corner for an hour. Half-asleep. Seemingly oblivious to the growing tension as the raider leader negotiates with your group. You have watched Jin yawn three times. Check his nails. Stare at the ceiling like there is something fascinating up there.</p>

            <p class="narrative">The raider leader pulls a knife. Points it at Soojin.</p>

            <p class="dialogue">"New terms. You give us everything, or I start cutting."</p>

            <p class="narrative">Jin yawns again.</p>

            <p class="narrative">And then he is not in the corner anymore.</p>

            <p class="narrative">You do not see him move. One second he is sitting. The next he is behind the raider leader, one hand on the knife wrist, one hand on the throat, and the leader is on his knees gasping for air he cannot find.</p>

            <p class="dialogue">"Nah." Jin's voice is still casual. Still that California drawl. "Here is the actual deal. You leave. Your boys leave. Nobody else has to die today."</p>

            <p class="narrative">The other raiders go for their weapons. Jin does not even look at them.</p>

            <p class="dialogue">"I have already counted exits. Three. I have identified your best shooters. Two, one behind the bar, one by the door. I have calculated time-to-kill for everyone in this room." He increases pressure on the throat. "You are not in the calculation because you are already dead. You just do not know it yet."</p>

            <p class="narrative">The leader is turning purple.</p>

            <p class="dialogue">"Decide. Now."</p>

            <p class="narrative">The raiders leave. Jin releases their leader, who crumbles to the floor, and walks back to his corner. Sits down. Yawns.</p>

            <p class="dialogue">"What were we talking about?"</p>

            <p class="narrative">Soojin is staring. Minho is staring. Everyone is staring.</p>

            <p class="narrative">Jin notices. Blinks.</p>

            <p class="dialogue">"What? I said I was airborne. What did you think that meant, I jumped out of planes for fun?"</p>

            <p class="narrative">He closes his eyes. Within thirty seconds, he appears to be asleep.</p>

            <p class="narrative">Nobody believes he is.</p>
        `
    },

    mongoose_calculation: {
        id: "jin_mongoose",
        title: "THE CHESS PLAYER",
        content: `
            <p class="narrative">You catch Jin staring at nothing. Or so you think.</p>

            <p class="dialogue">"What are you looking at?"</p>

            <p class="dialogue">"The left flank is exposed." He does not look away from the window. "We have three sentries on the east wall but only one on the west. Anyone who knows tactics will hit us from the west at dawn when the sun is in the sentries' eyes."</p>

            <p class="dialogue">"We do not have enough people for more sentries."</p>

            <p class="dialogue">"We do not need people. We need noise makers. Trip lines. Something that screams 'you have been seen' before they get close." He finally turns. "There are six empty cans in the kitchen. Wire from the radio. Give me an hour."</p>

            <p class="dialogue">"You have been thinking about this the whole time?"</p>

            <p class="dialogue">"I have been thinking about seventeen different attack scenarios, three escape routes, which of our people would break under torture, and whether the cloudy sky means rain that would affect visibility." A pause. "Also, I am wondering if we have any more of those dried squid snacks. I am hungry."</p>

            <p class="narrative">You stare at him.</p>

            <p class="dialogue">"What?"</p>

            <p class="dialogue">"You look like you are half-asleep all the time."</p>

            <p class="dialogue">"I know." He grins. "It is a feature. People underestimate the stoner. That is when the stoner wins."</p>

            <p class="narrative">He wanders off toward the kitchen, yawning.</p>

            <p class="narrative">You have never felt safer or more terrified of someone at the same time.</p>
        `
    }
};

// Merge into story
if (typeof STORY_DATA !== 'undefined') {
    Object.assign(STORY_DATA, JIN_DOWNTIME_SCENES);
}

// ═══════════════════════════════════════════════════════════════════════════
// THE SEED ORACLE - Ryan as In-World Mysterious Figure
// ═══════════════════════════════════════════════════════════════════════════
// Every ending, he appears through different channels to deliver the seed.
// He exists in the world but operates on a different level.
// Sometimes radio. Sometimes notes. Sometimes gone before you wake.
// Always cryptic. Always present. Always watching.
// ═══════════════════════════════════════════════════════════════════════════

const SEED_ORACLE = {
    name: "Unknown",
    callsign: "Orca Rider",
    aliases: ["The Broadcaster", "The Note-Leaver", "The Ghost", "O.R."],

    // He has the THALES radio - military-grade long-range comms
    equipment: "THALES PRC-148 MBITR - the only radio that reaches everywhere",

    // Nobody knows who he is. Theories abound.
    rumors: [
        "Some say he was military intelligence before the fall.",
        "Others say he is not real - just a signal bouncing off dead satellites.",
        "A few claim they have seen him. Tall. Calm. Eyes that know too much.",
        "The infected do not touch him. Nobody knows why."
    ],

    // How he knows about the seeds is never explained
    mystery: "He speaks in codes that unlock things. Doors. Memories. Futures. How he knows what you accomplished before you tell anyone - that is the question that keeps survivors awake at night."
};

// ═══════════════════════════════════════════════════════════════════════════
// SEED DELIVERY METHODS - Different for each ending type
// ═══════════════════════════════════════════════════════════════════════════

const SEED_DELIVERY = {

    // ─────────────────────────────────────────────────────────────────────────
    // RADIO TRANSMISSION - For endings where you have comms
    // ─────────────────────────────────────────────────────────────────────────
    radio: {
        id: "radio_transmission",
        requires: "THALES radio acquired OR any military comms",

        getTransmission(playerTitle, seed) {
            return `
                <div class="seed-delivery radio-transmission">
                    <p class="static">*KSSSHHH* *static crackle*</p>

                    <p class="transmission">
                        <span class="callsign">${playerTitle}</span>, this is <span class="oracle-call">Orca Rider</span>.
                    </p>

                    <p class="transmission">Prepare to copy.</p>

                    <p class="transmission">Sending access code now.</p>

                    <p class="seed-code">${seed}</p>

                    <p class="transmission">How copy, over?</p>

                    <p class="static">*KSSSHHH*</p>

                    <p class="narrative whisper">You try to respond. Ask who he is. How he knows your name. What the code means.</p>

                    <p class="narrative whisper">But the frequency is dead. Like he was never there.</p>

                    <p class="narrative whisper">Like he is always there.</p>
                </div>
            `;
        }
    },

    // ─────────────────────────────────────────────────────────────────────────
    // THE NOTE - He was there. Now he is not. But he left something.
    // ─────────────────────────────────────────────────────────────────────────
    note_present: {
        id: "note_in_person",
        requires: "Endings where you settle somewhere",

        getNote(playerTitle, seed, endingType) {
            const riddles = {
                triumph: "What you built will outlast the builders. This is proof.",
                salvation: "You healed what others broke. Remember how.",
                paradise: "Home is not a place. It is a key. Keep this one.",
                justice: "The scales balanced. This is the weight.",
                utopia: "Eden needs a gate. Here is yours."
            };

            const riddle = riddles[endingType] || "Some doors only open once. This is your key.";

            return `
                <div class="seed-delivery note-delivery">
                    <p class="narrative">You find the note in the morning. Folded precisely. Placed where only you would look.</p>

                    <p class="narrative">The handwriting is neat. Military neat. The kind that comes from years of writing reports in the dark.</p>

                    <div class="note-content">
                        <p class="note-address">${playerTitle} —</p>

                        <p class="note-body">You did something worth remembering. So I am making sure you can.</p>

                        <p class="note-riddle">"${riddle}"</p>

                        <p class="note-seed">${seed}</p>

                        <p class="note-signature">— O.R.</p>
                    </div>

                    <p class="narrative">You look around. Nothing. No footprints. No sign anyone was here.</p>

                    <p class="narrative">But the note is warm. Like it was written moments ago.</p>
                </div>
            `;
        }
    },

    // ─────────────────────────────────────────────────────────────────────────
    // THE DEPARTURE - He was there. He had to leave. It is too dangerous.
    // ─────────────────────────────────────────────────────────────────────────
    note_departure: {
        id: "note_gone",
        requires: "Grim endings or dangerous conclusions",

        getNote(playerTitle, seed, reason) {
            const departures = {
                death: {
                    reason: "Where I am going, you cannot follow. Where you are going, I cannot help.",
                    direction: "North. Always north. When you are ready."
                },
                loss: {
                    reason: "Grief makes us stupid. I need you smart. So I am leaving before I make you weak.",
                    direction: "The lighthouse. Three days from now. If you still want answers."
                },
                failure: {
                    reason: "This is not the end. It is a lesson. I am giving you time to learn it.",
                    direction: "Find the radio tower on Namsan. I will be listening."
                },
                sacrifice: {
                    reason: "You gave everything. I cannot take more. But I can leave you this.",
                    direction: "The bunker under the museum. The one you never found. Now you will."
                }
            };

            const departure = departures[reason] || departures.loss;

            return `
                <div class="seed-delivery note-departure">
                    <p class="narrative">You wake alone.</p>

                    <p class="narrative">The space beside you is cold. Has been for hours. But there is a note. Pressed into your palm like he placed it there while you slept.</p>

                    <div class="note-content departure">
                        <p class="note-address">${playerTitle} —</p>

                        <p class="note-body">${departure.reason}</p>

                        <p class="note-body">Do not follow me. Not yet. What I am hunting would destroy you, and I will not let that happen.</p>

                        <p class="note-direction">${departure.direction}</p>

                        <p class="note-seed">${seed}</p>

                        <p class="note-body">This code proves what you survived. Keep it. You will understand why eventually.</p>

                        <p class="note-signature">— Orca Rider</p>

                        <p class="note-ps">P.S. I was never here. But I was always watching. Always proud.</p>
                    </div>

                    <p class="narrative">The ink is still wet in places. Like he finished writing seconds before you woke.</p>

                    <p class="narrative">Like he wanted you to almost catch him.</p>

                    <p class="narrative">Like he will be back. When it is safe. When you are ready.</p>
                </div>
            `;
        }
    },

    // ─────────────────────────────────────────────────────────────────────────
    // THE ENCOUNTER - Rare. He shows up in person. Brief. Intense.
    // ─────────────────────────────────────────────────────────────────────────
    in_person: {
        id: "face_to_face",
        requires: "Perfect endings only (Eden Reborn, etc.)",

        getEncounter(playerTitle, seed) {
            return `
                <div class="seed-delivery in-person">
                    <p class="narrative">You see him at the edge of the celebration. Watching. Not hiding, exactly—just... apart.</p>

                    <p class="narrative">Tall. Calm. Eyes that have seen the same wars you have. Maybe more.</p>

                    <p class="narrative">When he sees you looking, he does not run. He waits.</p>

                    <p class="narrative">You walk toward him. Jin tenses beside you, but you put a hand on his arm. <em>It is okay. I think.</em></p>

                    <p class="dialogue">"You are Orca Rider."</p>

                    <p class="dialogue">"Among other things." His voice is warm. Familiar somehow. Like you have heard it before—in static, in dreams, in moments you cannot quite remember. "And you are ${playerTitle}. The one who made it."</p>

                    <p class="dialogue">"Made what?"</p>

                    <p class="dialogue">"Everything. This." He gestures at the celebration. The survivors. The future you built. "Not many people could have done what you did. Fewer would have tried."</p>

                    <p class="narrative">He holds out something. A small card. Military-grade paper. Water-resistant.</p>

                    <p class="dialogue">"What is this?"</p>

                    <p class="dialogue">"Proof." He places it in your hand. "That this happened. That you were here. That you chose correctly when the choices were impossible."</p>

                    <p class="narrative">You look at the card:</p>

                    <div class="seed-card">
                        <p class="seed-code">${seed}</p>
                    </div>

                    <p class="dialogue">"What does it mean?"</p>

                    <p class="dialogue">"Right now? Nothing. Eventually? Everything." He smiles. For a moment, he looks almost... proud. "You will figure it out. You always do."</p>

                    <p class="narrative">You blink—and he is walking away. Not running. Just... leaving. Like he was never really there to begin with.</p>

                    <p class="dialogue">"Wait—"</p>

                    <p class="dialogue">"We will meet again." He does not turn around. "When you are ready. When you have collected enough proof."</p>

                    <p class="dialogue">"Proof of what?"</p>

                    <p class="narrative">But he is gone. Vanished into the crowd. Into the smoke. Into the future.</p>

                    <p class="narrative">Jin appears beside you.</p>

                    <p class="dialogue">"Who was that?"</p>

                    <p class="narrative">You look at the card. The code. The proof.</p>

                    <p class="dialogue">"I have no idea. But I think I am going to find out."</p>
                </div>
            `;
        }
    },

    // ─────────────────────────────────────────────────────────────────────────
    // CARVED IN STONE - For death endings. The message outlasts you.
    // ─────────────────────────────────────────────────────────────────────────
    memorial: {
        id: "carved_memorial",
        requires: "Death endings",

        getMemorial(playerTitle, seed) {
            return `
                <div class="seed-delivery memorial">
                    <p class="narrative epilogue">EPILOGUE</p>

                    <p class="narrative">Three months later, survivors find the memorial.</p>

                    <p class="narrative">Someone built it. Someone who knew. The stone is smooth. The carving is precise. The words are simple:</p>

                    <div class="memorial-stone">
                        <p class="memorial-name">${playerTitle}</p>
                        <p class="memorial-epitaph">Who chose to stay when running was easier.</p>
                        <p class="memorial-epitaph">Who loved harder than the world could break.</p>
                        <p class="memorial-code">${seed}</p>
                    </div>

                    <p class="narrative">Nobody knows who built it. Nobody knows how they knew the code.</p>

                    <p class="narrative">But the survivors copy it down. Pass it around. Some say if you enter the code somewhere—anywhere—you see what could have been. What should have been. What still might be.</p>

                    <p class="narrative">They call the builder "Orca Rider." They say he appears at every ending.</p>

                    <p class="narrative">They say he never forgets.</p>
                </div>
            `;
        }
    }
};

// ═══════════════════════════════════════════════════════════════════════════
// SEED TOAST UI - Pop-up with copy button
// ═══════════════════════════════════════════════════════════════════════════

const SeedToast = {

    show(seed, playerTitle, deliveryType) {
        const toast = document.createElement('div');
        toast.className = 'seed-toast';
        toast.innerHTML = `
            <div class="seed-toast-header">
                <span class="toast-icon">📡</span>
                <span class="toast-title">TRANSMISSION RECEIVED</span>
            </div>
            <div class="seed-toast-body">
                <p class="toast-from">From: <strong>Orca Rider</strong></p>
                <p class="toast-to">To: <strong>${playerTitle}</strong></p>
                <div class="seed-display">
                    <code class="seed-code-toast">${seed}</code>
                    <button class="seed-copy-btn" onclick="SeedToast.copy('${seed}')">
                        📋 COPY
                    </button>
                </div>
            </div>
            <div class="seed-toast-footer">
                <p class="toast-hint">This code proves what you survived. Keep it safe.</p>
                <button class="toast-close" onclick="this.parentElement.parentElement.remove()">×</button>
            </div>
        `;

        document.body.appendChild(toast);

        // Animate in
        setTimeout(() => toast.classList.add('visible'), 100);

        // Auto-dismiss after 30 seconds (long enough to copy)
        setTimeout(() => {
            toast.classList.remove('visible');
            setTimeout(() => toast.remove(), 500);
        }, 30000);
    },

    copy(seed) {
        navigator.clipboard.writeText(seed).then(() => {
            const btn = document.querySelector('.seed-copy-btn');
            btn.textContent = '✓ COPIED';
            btn.classList.add('copied');
            setTimeout(() => {
                btn.textContent = '📋 COPY';
                btn.classList.remove('copied');
            }, 2000);
        });
    }
};

// ═══════════════════════════════════════════════════════════════════════════
// DELIVERY SELECTOR - Chooses method based on ending context
// ═══════════════════════════════════════════════════════════════════════════

function selectSeedDelivery(endingInfo, playerState) {
    const { tier, endingNumber, hea } = endingInfo;
    const hasRadio = playerState.inventory?.includes('THALES') || playerState.hasComms;
    const playerTitle = playerState.title || 'Survivor';

    // Perfect endings get in-person encounter
    if (endingNumber === 91 || tier === 'utopia' && hea) {
        return 'in_person';
    }

    // Death endings get memorial
    if (tier === 'death') {
        return 'memorial';
    }

    // Grim endings (loss, failure) get departure note
    if (tier === 'loss' || tier === 'failure') {
        return 'note_departure';
    }

    // Has radio = radio transmission
    if (hasRadio) {
        return 'radio';
    }

    // Default = note present
    return 'note_present';
}

// ═══════════════════════════════════════════════════════════════════════════
// INTEGRATION - Call this at every ending
// ═══════════════════════════════════════════════════════════════════════════

function deliverSeed(endingInfo, playerState, seed) {
    const method = selectSeedDelivery(endingInfo, playerState);
    const playerTitle = playerState.title || 'Survivor';

    let narrativeContent = '';

    switch (method) {
        case 'radio':
            narrativeContent = SEED_DELIVERY.radio.getTransmission(playerTitle, seed);
            break;
        case 'note_present':
            narrativeContent = SEED_DELIVERY.note_present.getNote(playerTitle, seed, endingInfo.tier);
            break;
        case 'note_departure':
            narrativeContent = SEED_DELIVERY.note_departure.getNote(playerTitle, seed, endingInfo.tier);
            break;
        case 'in_person':
            narrativeContent = SEED_DELIVERY.in_person.getEncounter(playerTitle, seed);
            break;
        case 'memorial':
            narrativeContent = SEED_DELIVERY.memorial.getMemorial(playerTitle, seed);
            break;
    }

    // Inject narrative into ending content
    const endingContainer = document.querySelector('.ending') || document.querySelector('.ending-text');
    if (endingContainer) {
        const seedSection = document.createElement('div');
        seedSection.className = 'seed-delivery-section';
        seedSection.innerHTML = narrativeContent;
        endingContainer.appendChild(seedSection);
    }

    // Show toast for easy copying
    SeedToast.show(seed, playerTitle, method);

    // Save to vault
    SeedVault.addSeed(seed);
}

// ═══════════════════════════════════════════════════════════════════════════
// CSS STYLES FOR SEED DELIVERY
// ═══════════════════════════════════════════════════════════════════════════

const SEED_DELIVERY_STYLES = `
<style>
/* Seed Toast */
.seed-toast {
    position: fixed;
    top: 20px;
    right: 20px;
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
    border: 2px solid #e94560;
    border-radius: 12px;
    padding: 0;
    max-width: 360px;
    box-shadow: 0 10px 40px rgba(233, 69, 96, 0.3);
    z-index: 10000;
    opacity: 0;
    transform: translateX(100%);
    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.seed-toast.visible {
    opacity: 1;
    transform: translateX(0);
}

.seed-toast-header {
    background: #e94560;
    color: white;
    padding: 12px 16px;
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: 'Courier New', monospace;
    font-weight: bold;
    letter-spacing: 2px;
}

.seed-toast-body {
    padding: 16px;
    color: #eee;
}

.toast-from, .toast-to {
    margin: 4px 0;
    font-size: 0.9em;
    color: #aaa;
}

.seed-display {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 12px;
    background: #0a0a12;
    padding: 12px;
    border-radius: 8px;
}

.seed-code-toast {
    font-family: 'Courier New', monospace;
    font-size: 1.1em;
    color: #00ff88;
    flex: 1;
    word-break: break-all;
}

.seed-copy-btn {
    background: #e94560;
    border: none;
    color: white;
    padding: 8px 16px;
    border-radius: 6px;
    cursor: pointer;
    font-family: 'Courier New', monospace;
    font-weight: bold;
    transition: all 0.3s;
}

.seed-copy-btn:hover {
    background: #ff6b6b;
    transform: scale(1.05);
}

.seed-copy-btn.copied {
    background: #00ff88;
    color: #000;
}

.seed-toast-footer {
    padding: 12px 16px;
    border-top: 1px solid #333;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.toast-hint {
    font-size: 0.8em;
    color: #888;
    font-style: italic;
    margin: 0;
}

.toast-close {
    background: none;
    border: none;
    color: #888;
    font-size: 1.5em;
    cursor: pointer;
    padding: 0 8px;
}

.toast-close:hover {
    color: #e94560;
}

/* In-story delivery styles */
.seed-delivery {
    margin-top: 30px;
    padding: 20px;
    border-left: 3px solid #e94560;
    background: rgba(233, 69, 96, 0.05);
}

.radio-transmission .static {
    color: #666;
    font-style: italic;
    font-family: 'Courier New', monospace;
}

.radio-transmission .transmission {
    color: #00ff88;
    font-family: 'Courier New', monospace;
    margin: 10px 0;
}

.radio-transmission .callsign {
    color: #e94560;
    font-weight: bold;
}

.radio-transmission .oracle-call {
    color: #ffd700;
    font-weight: bold;
}

.seed-code, .note-seed, .memorial-code {
    font-family: 'Courier New', monospace;
    font-size: 1.3em;
    color: #00ff88;
    background: #0a0a12;
    padding: 15px 20px;
    margin: 15px 0;
    border-radius: 8px;
    text-align: center;
    border: 1px solid #333;
    letter-spacing: 2px;
}

.note-content {
    background: #f5f0e6;
    color: #333;
    padding: 20px 25px;
    margin: 15px 0;
    font-family: 'Georgia', serif;
    border-radius: 4px;
    box-shadow: 2px 2px 10px rgba(0,0,0,0.2);
}

.note-content.departure {
    background: #e6e0d6;
    border-left: 4px solid #8b0000;
}

.note-address {
    font-weight: bold;
    margin-bottom: 15px;
}

.note-riddle {
    font-style: italic;
    color: #555;
    margin: 15px 0;
}

.note-direction {
    color: #8b0000;
    font-weight: bold;
    margin: 15px 0;
}

.note-signature {
    text-align: right;
    font-style: italic;
    margin-top: 20px;
}

.note-ps {
    font-size: 0.9em;
    color: #666;
    margin-top: 15px;
    font-style: italic;
}

.memorial-stone {
    background: #2a2a2a;
    color: #ccc;
    padding: 30px;
    margin: 20px auto;
    max-width: 400px;
    text-align: center;
    border-radius: 4px;
    border: 2px solid #444;
}

.memorial-name {
    font-size: 1.5em;
    font-weight: bold;
    color: #fff;
    margin-bottom: 15px;
}

.memorial-epitaph {
    font-style: italic;
    margin: 8px 0;
}

.whisper {
    font-style: italic;
    color: #888;
}

.seed-card {
    background: #1a1a2e;
    border: 2px solid #e94560;
    padding: 20px;
    text-align: center;
    margin: 15px auto;
    max-width: 300px;
    border-radius: 8px;
}
</style>
`;

// Inject styles
if (typeof document !== 'undefined') {
    document.head.insertAdjacentHTML('beforeend', SEED_DELIVERY_STYLES);
}

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SEED_ORACLE, SEED_DELIVERY, SeedToast, deliverSeed };
}

// ═══════════════════════════════════════════════════════════════════════════
// DEAD SEOUL - MAJOR EXPANSION PACK
// ═══════════════════════════════════════════════════════════════════════════
// Objective: 33% more content, longer playthroughs, deeper commitment training
// Jin woven throughout. Knife's edge moments. Catastrophic betrayal. Earned loyalty.
// Minimum 60 minutes to any good ending.
// ═══════════════════════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════════════════
// ORCA RIDER FORESHADOWING - Hints planted throughout before reveal
// ═══════════════════════════════════════════════════════════════════════════

const ORCA_FORESHADOWING = {

    radio_whispers: [
        "The static clears for a moment. You swear you hear a voice—calm, almost amused—say 'Not yet' before dissolving back into white noise.",
        "Someone is broadcasting on the old emergency frequency. Just breathing. Listening. You feel watched, but not threatened.",
        "A transmission cuts through: '...still watching. Still waiting. When you are ready...' Then nothing.",
        "The radio crackles. 'Orca Rider, standing by.' You did not call anyone. No one responds when you ask who is there."
    ],

    graffiti_sightings: [
        "On the wall, fresh spray paint: 'O.R. WAS HERE.' The paint is still wet.",
        "Someone carved into the concrete: 'THE RIDER SEES ALL.' Below it, a crude drawing of an orca.",
        "A message scratched into rust: 'Show up. Get shown. —O.R.'",
        "Painted on the overpass: 'LOYALTY RECEIPTS AVAILABLE. FIND THE FREQUENCY.'"
    ],

    survivor_rumors: [
        "'There is a man,' the survivor whispers. 'They call him Orca Rider. He appears at the end. Always at the end. He knows what you did.'",
        "'I met someone who met him. Said he handed her a code and vanished. Said the code... proved something. She would not say what.'",
        "'The military had a file on him. REDACTED. All of it. Even the file about the file was redacted.'",
        "'He has the only radio that works everywhere. THALES, they say. He hears everything. He chooses who gets the codes.'"
    ],

    jin_mentions: [
        "Jin pauses mid-sentence. 'Someone is broadcasting. Single frequency. Same message, every hour.' He will not say what the message is.",
        "'Orca Rider?' Jin shakes his head. 'Just a rumor. Probably.' But he checks his radio more often after you ask.",
        "You catch Jin listening to static. 'Waiting for something,' he says. He does not elaborate."
    ]
};

// ═══════════════════════════════════════════════════════════════════════════
// KNIFE'S EDGE MOMENTS - 12 Critical Commitment Tests Throughout Story
// ═══════════════════════════════════════════════════════════════════════════

const KNIFES_EDGE_MOMENTS = {

    // MOMENT 1: The First Trust (Early Game)
    ke_first_trust: {
        id: 101,
        title: "THE LEAP",
        timing: "After first Jin encounter",
        stakes: "Determines if Jin stays in your story",
        content: `
            <p class="narrative">Jin stops at the edge of the rooftop. Below: a three-meter gap to the next building. Behind: infected, climbing the stairs. You can hear them. Smell them.</p>

            <p class="dialogue">"I can make this jump," he says. "I have done it before. But I cannot carry you and jump."</p>

            <p class="dialogue">"Then what—"</p>

            <p class="dialogue">"I jump first. I catch you when you jump after." He meets your eyes. "But you have to jump. No hesitation. The second you doubt, you fall."</p>

            <p class="narrative">The infected are close now. One flight away. Maybe less.</p>

            <p class="dialogue">"I need to know right now: do you trust me?"</p>

            <p class="narrative">The door behind you shudders. Hands pound against it. The moaning is deafening.</p>

            <p class="dialogue">"DECIDE."</p>
        `,
        choices: [
            {
                text: "Jump. No hesitation.",
                result: "jin_loyalty_1",
                consequence: "Jin catches you. First loyalty point earned. He remembers you trusted him.",
                jinReaction: "His arms catch you, solid and sure. For a moment, you are pressed against him, both breathing hard. 'You jumped,' he says. 'Most people hesitate.' There is something new in his eyes. Respect. Maybe more."
            },
            {
                text: "Hesitate. Look for another way.",
                result: "jin_doubt_1",
                consequence: "Jin jumps alone. He survives. You find another way. But he remembers you did not trust him.",
                jinReaction: "He lands on the other side. Watches you scramble for the fire escape. He waits—he does not leave—but something closes in his expression. 'You did not jump,' he says later. Not accusation. Just observation. He files it away."
            },
            {
                text: "Push him to jump first while you hold the door.",
                result: "jin_sacrifice_early",
                consequence: "Selfless. He notices. But risky—this could have killed you.",
                jinReaction: "'You held the door.' He pulls you across after, having found a board to bridge the gap. 'That was either brave or stupid.' A pause. 'Probably both. I like it.'"
            }
        ]
    },

    // MOMENT 2: The Betrayal Test (Mid Game)
    ke_betrayal_test: {
        id: 102,
        title: "THE OFFER",
        timing: "When resources are scarce",
        stakes: "Tests if you will betray allies for safety",
        content: `
            <p class="narrative">Colonel Yoo's offer is simple: leave Jin behind, and you get a place in the safe zone. Full rations. Protection. A future.</p>

            <p class="dialogue">"He is a liability," Yoo says. "Too independent. Does not follow orders. We cannot have that here."</p>

            <p class="dialogue">"He saved my life. Multiple times."</p>

            <p class="dialogue">"And that is admirable. But sentiment does not keep walls standing." She leans forward. "I am offering you survival. Real survival. The kind with walls and food and a bed. All you have to do is walk away from one man."</p>

            <p class="narrative">Jin does not know about this conversation. He is outside, fixing a generator, unaware that your next words will determine if he lives or dies in the cold.</p>

            <p class="dialogue">"He will never know you were the one who suggested it. We will simply... not open the gate when he returns. Infected will handle the rest."</p>

            <p class="narrative">Your stomach turns. But she is not wrong about survival.</p>
        `,
        choices: [
            {
                text: "Never. I will never betray him.",
                result: "loyalty_absolute",
                consequence: "LOCKED OUT of safe zone. But Jin is told what you did. He never forgets.",
                jinReaction: "Later, much later, someone tells him what you refused. He finds you that night. Does not speak. Just sits beside you, shoulder to shoulder, and stays until dawn. 'You chose hard,' he says finally. 'I would have done the same. That is why we are still here.'"
            },
            {
                text: "Consider it. Ask for time to decide.",
                result: "loyalty_wavered",
                consequence: "You are marked. Both sides now distrust you. Jin senses something is wrong.",
                jinReaction: "He looks at you differently for days. 'Something happened,' he says. 'You do not have to tell me. But I know.' The distance grows. You have to work twice as hard to close it."
            },
            {
                text: "Accept. Survival comes first.",
                result: "betrayal_jin",
                consequence: "Jin is locked out. He survives—barely—but he knows. THE DOOR TO EDEN IS CLOSED FOREVER.",
                jinReaction: "You see him through the gate. Bloody. Surrounded. He meets your eyes. There is no anger. That would be easier. There is just... recognition. He knew this was possible. He just hoped he was wrong. He fights his way out. Alone. You never see him again. But you feel him. Watching. Always watching.",
                heaLocked: true
            }
        ]
    },

    // MOMENT 3: The Sacrifice (Late Game)
    ke_sacrifice: {
        id: 103,
        title: "THE BULLET",
        timing: "Critical battle",
        stakes: "Jin is about to die. You can save him or yourself.",
        content: `
            <p class="narrative">The sniper has Jin in their sights. You see the glint. You see the finger tightening.</p>

            <p class="narrative">There is no time to warn him. No time to shout. Only time to move.</p>

            <p class="narrative">If you push him, you take the bullet. If you do nothing, he dies.</p>

            <p class="narrative">One second. Less.</p>

            <p class="narrative">What do you do?</p>
        `,
        choices: [
            {
                text: "Push him. Take the bullet.",
                result: "sacrifice_self",
                consequence: "You are hit. Badly. Jin goes berserk. You survive—barely—but he has to carry you for three days. He never complains. Not once.",
                jinReaction: "'You took a bullet for me.' He is stitching your wound, hands steady even though his voice is not. 'Nobody has ever—' He stops. Breathes. 'I am not going to forget this. Ever. You understand? EVER.'"
            },
            {
                text: "Shout a warning. Hope he moves in time.",
                result: "warning_given",
                consequence: "He moves. Partially. The bullet grazes him instead of killing him. You saved his life, but he knows you hesitated to sacrifice.",
                jinReaction: "'You warned me. That is something.' He flexes his wounded shoulder. 'Most people would have frozen. You did not.' A pause. 'But you did not jump either.' He is not angry. Just... noting."
            },
            {
                text: "Freeze. There is no time. It is already too late.",
                result: "jin_shot",
                consequence: "Jin is hit. He survives, but changed. Something breaks in him. In you. THE PATH TO EDEN NARROWS.",
                jinReaction: "He does not blame you. That is the worst part. 'There was no time,' he says. 'I know.' But he starts checking his own corners now. Watching his own back. The trust is cracked. Not broken. But cracked."
            }
        ]
    },

    // MOMENT 4: The Confession (Emotional Peak)
    ke_confession: {
        id: 104,
        title: "THE WORDS",
        timing: "Quiet moment after major victory",
        stakes: "Jin is about to say something he has never said. You can receive it or deflect.",
        content: `
            <p class="narrative">The fire crackles. Everyone else is asleep. It is just you and Jin, alone with the stars and the smoke and the silence.</p>

            <p class="dialogue">"I need to tell you something."</p>

            <p class="narrative">His voice is different. Stripped. You have never heard him sound vulnerable before. The leopard is showing its throat.</p>

            <p class="dialogue">"I have not said this to anyone. Maybe ever. But if I do not say it now, I might not get another chance."</p>

            <p class="narrative">He turns to face you. The firelight catches his eyes. You see fear there. Real fear. Not of infected or raiders or death. Fear of THIS. Of what he is about to do.</p>

            <p class="dialogue">"I—"</p>

            <p class="narrative">He stops. Swallows. Tries again.</p>

            <p class="dialogue">"You are the only person I have ever trusted completely. The only one I would die for without hesitating. The only one I think about when I wake up and before I sleep."</p>

            <p class="narrative">Silence. The fire pops.</p>

            <p class="dialogue">"I love you. And I am terrified of what that means. But I could not keep it inside anymore."</p>

            <p class="narrative">He waits. Exposed. Shaking slightly.</p>
        `,
        choices: [
            {
                text: "Say it back. Mean it.",
                result: "love_reciprocated",
                consequence: "THE PATH TO EDEN OPENS. You have reached bonded status with Jin.",
                jinReaction: "His whole body sags with relief. Then he is pulling you close, forehead against forehead, breathing you in. 'I was so scared you would not—' He laughs. Shaky. 'I practiced that speech for weeks. I almost did not say it.' 'I am glad you did.' 'Me too.' He kisses you. The first real one. Soft. Then not soft at all."
            },
            {
                text: "Hold him. No words. Just presence.",
                result: "love_shown",
                consequence: "Powerful. But he needs to hear it eventually. The path remains open, but uncertain.",
                jinReaction: "He sinks into you. Holds on. 'You do not have to say it,' he whispers. 'I just needed you to know.' But you feel him waiting. Hoping. The words matter to him, even if he pretends they do not."
            },
            {
                text: "I am not ready. I care about you, but...",
                result: "love_deflected",
                consequence: "He respects it. But something dims. THE PATH TO EDEN REQUIRES MORE WORK NOW.",
                jinReaction: "'Okay.' He nods. Pulls back. Puts space between you. 'That is fair. I should not have—' 'No. It is not—' 'It is fine. Really.' It is not fine. You can see it in his shoulders. The way he does not quite meet your eyes anymore. He is still there. Still loyal. But the confession cost him something, and he did not get it back."
            }
        ]
    },

    // MOMENT 5: The Claim (Point of No Return)
    ke_claim: {
        id: 105,
        title: "THE CLAIM",
        timing: "Before final act",
        stakes: "Jin is asking for forever. You can give it or not.",
        content: `
            <p class="narrative">The final battle is tomorrow. You both know you might not survive.</p>

            <p class="narrative">Jin finds you on the wall. The night is clear. Cold. The kind of cold that makes breath visible and thoughts sharp.</p>

            <p class="dialogue">"I need to say something. Before tomorrow. Before everything."</p>

            <p class="narrative">He takes your hand. Turns you to face him.</p>

            <p class="dialogue">"I am not good at this. At words. At feelings. At all the soft things people are supposed to say."</p>

            <p class="narrative">His eyes lock onto yours. That look. The one that sees through everything.</p>

            <p class="dialogue">"But I need you to understand something. And I need you to answer."</p>

            <p class="narrative">His grip tightens. Not painful. Anchoring.</p>

            <p class="dialogue">"I am yours. Completely. Without reservation. Without exit strategy. Without 'unless' or 'until' or 'maybe.'"</p>

            <p class="narrative">His voice drops. Fierce now.</p>

            <p class="dialogue">"You are mine. That is not a request. It is not a demand. It is what IS. But I need to hear you say it."</p>

            <p class="narrative">He waits. The weight of everything hangs on your next words.</p>

            <p class="dialogue">"Tell me you are in this. All the way. No matter what happens tomorrow. No matter what happens ever. Tell me this is forever or tell me to walk away."</p>

            <p class="narrative">His hands cup your face. Tender. Terrified. Certain.</p>

            <p class="dialogue">"Choose."</p>
        `,
        choices: [
            {
                text: "I am yours. Forever. No matter what.",
                result: "claim_accepted",
                consequence: "EDEN REBORN IS NOW POSSIBLE. You have reached maximum commitment.",
                jinReaction: "The sound he makes is not quite human. Relief. Joy. Something primal. He kisses you like he is dying. Like he is being born. 'Forever,' he repeats against your lips. 'That is the only timeline I want.' 'Me too.' 'Then we are going to survive tomorrow. Because I am not losing this. Not ever.'"
            },
            {
                text: "I want to, but I am scared—",
                result: "claim_hesitated",
                consequence: "He understands. But the path to Eden requires one more test. You will have another chance.",
                jinReaction: "'Scared is fine. I am scared too.' He pulls back. Not far. 'But scared and uncertain are different things. I need to know which one you are.' 'Give me until after tomorrow.' 'Okay. After tomorrow.' He kisses your forehead. 'But if we survive, I am asking again. And I will keep asking until you give me an answer that does not have 'but' in it.'"
            },
            {
                text: "I cannot. I am sorry.",
                result: "claim_rejected",
                consequence: "Jin stays. He fights beside you. But something dies between you. EDEN IS CLOSED.",
                jinReaction: "He is still for a long moment. Then he nods. Steps back. 'Okay.' His voice is empty. 'Thank you for being honest.' He walks away. He is at the battle tomorrow. He fights like a demon. But he never looks at you. Not once. Afterward, he is gone. A note: 'You gave me your answer. I respect it. —J' You never see him again. But sometimes you hear a radio transmission. 'Orca Rider, standing by.' And you wonder.",
                edenLocked: true
            }
        ]
    }
};

// ═══════════════════════════════════════════════════════════════════════════
// JIN INTEGRATION POINTS - Where he appears in existing story
// ═══════════════════════════════════════════════════════════════════════════

const JIN_INTEGRATIONS = {

    // Jin appears at Section 4 (Leaving Apartment)
    section_4_inject: {
        trigger: "after_apartment_escape",
        content: `
            <p class="narrative">A car appears from nowhere. Battered. Fast. The driver is either insane or brilliant.</p>
            <p class="dialogue">"Get in if you want to live. Stay out if you want to be interesting."</p>
            <p class="narrative">You get in. This is how you meet Jin.</p>
        `,
        leads_to: "ke_first_trust"
    },

    // Jin at the Museum Discovery
    section_6_inject: {
        trigger: "museum_lore_found",
        content: `
            <p class="narrative">Jin stands behind you, reading over your shoulder.</p>
            <p class="dialogue">"Project CHIMERA. That is what started all this." His voice is strange. "I knew someone who worked on it. Before."</p>
            <p class="dialogue">"Before what?"</p>
            <p class="dialogue">"Before I killed him."</p>
            <p class="narrative">He walks away. Does not elaborate. You are learning that he does that.</p>
        `
    },

    // Jin during the Minho confrontation
    section_12_inject: {
        trigger: "minho_appears",
        content: `
            <p class="narrative">Jin's hand moves to his weapon when Minho appears. Casual. Automatic.</p>
            <p class="dialogue">"Friend of yours?" His tone suggests he is prepared to make Minho a former friend if necessary.</p>
            <p class="dialogue">"Yes. Stand down."</p>
            <p class="narrative">A pause. Assessment. Then his hand drops.</p>
            <p class="dialogue">"Your call." But he watches Minho with the eyes of a leopard watching a gazelle. Just in case.</p>
        `
    },

    // Jin at the Safe Zone Decision
    section_25_inject: {
        trigger: "safe_zone_choice",
        leads_to: "ke_betrayal_test"
    },

    // Jin Romance Development Triggers
    romance_triggers: {
        stage_1: { trigger: "first_night_together", leads_to: "jin_shaman" },
        stage_2: { trigger: "first_battle_survived", leads_to: "jin_leopard" },
        stage_3: { trigger: "loss_experienced", leads_to: "jin_confession" },
        stage_4: { trigger: "victory_celebrated", leads_to: "ke_confession" },
        stage_5: { trigger: "final_battle_approach", leads_to: "ke_claim" }
    }
};

// ═══════════════════════════════════════════════════════════════════════════
// BETRAYAL CONSEQUENCES - Catastrophic and Haunting
// ═══════════════════════════════════════════════════════════════════════════

const BETRAYAL_CONSEQUENCES = {

    // What happens after you betray Jin
    jin_betrayed: {
        immediate: `
            <p class="narrative consequence">The gate closes. Jin is on the other side.</p>
            <p class="narrative consequence">He does not scream. Does not beg. Just looks at you. And nods.</p>
            <p class="narrative consequence">Like he always knew this was possible.</p>
            <p class="narrative consequence">Like he hoped he was wrong.</p>
        `,

        aftermath_day_1: `
            <p class="narrative haunting">You cannot sleep. Every time you close your eyes, you see his face. Not angry. Worse. Understanding.</p>
        `,

        aftermath_week_1: `
            <p class="narrative haunting">Someone mentions seeing a man in the wasteland. Tall. Scarred. Moving alone. 'He looked dead inside,' they say. 'But also... like he was looking for something.'</p>
            <p class="narrative haunting">You know who they saw.</p>
        `,

        aftermath_permanent: `
            <p class="narrative haunting">Sometimes the radio crackles. 'Orca Rider, standing by.' And then, quieter: 'She made her choice. I made mine.'</p>
            <p class="narrative haunting">You never respond. But you always listen.</p>
        `,

        ending_modifier: {
            all_endings: "Jin's absence haunts every frame. Every victory feels hollow. Every celebration has an empty chair.",
            love_endings: "LOCKED. You cannot find love after betraying it.",
            triumph_endings: "Available, but tainted. 'They call you a hero. You know what you are.'",
            eden_locked: "Permanently. Some doors close forever."
        }
    },

    // What happens after smaller betrayals
    loyalty_wavered: {
        trust_penalty: -2,
        recovery_possible: true,
        haunting: "Jin keeps you at arm's length now. The warmth is still there, but guarded. You have to earn it back.",
        recovery_path: [
            "Save his life without hesitation",
            "Choose him over safety when tested",
            "Confess what you almost did"
        ]
    }
};

// ═══════════════════════════════════════════════════════════════════════════
// LOYALTY MILESTONES - Rewards for Commitment
// ═══════════════════════════════════════════════════════════════════════════

const LOYALTY_MILESTONES = {

    milestone_1: {
        name: "First Trust",
        trigger: "Jump for Jin without hesitation",
        reward: "Jin starts sharing personal information",
        dialogue: "'You jumped. I am going to remember that.'"
    },

    milestone_2: {
        name: "Ride or Die",
        trigger: "Refuse to betray Jin when offered safety",
        reward: "Jin reveals his past (felonies, military, etc.)",
        dialogue: "'You chose hard over safe. Let me tell you why I do the same.'"
    },

    milestone_3: {
        name: "Blood Bound",
        trigger: "Take a bullet/wound for Jin",
        reward: "Jin's 'I am never going to forget' speech. Romance accelerates.",
        dialogue: "'Nobody has ever— I do not know what to do with this. With you. Except never let go.'"
    },

    milestone_4: {
        name: "Soul Spoken",
        trigger: "Reciprocate Jin's confession fully",
        reward: "Access to Jin's vulnerable side. Shaman moments available.",
        dialogue: "'You are the only person who has ever seen me. Really seen me. And stayed.'"
    },

    milestone_5: {
        name: "Forever Claimed",
        trigger: "Accept Jin's claim without hesitation",
        reward: "EDEN REBORN path unlocked. Maximum romance. Perfect ending available.",
        dialogue: "'Forever is not long enough. But it is a start.'"
    }
};

// ═══════════════════════════════════════════════════════════════════════════
// EXPANDED EPISODES - 3000+ Words Each
// ═══════════════════════════════════════════════════════════════════════════

const EXPANDED_EPISODES = {

    // THE FIRST NIGHT - Expanded
    first_night_expanded: {
        id: "ep_first_night_exp",
        wordCount: 3200,
        content: `
            <p class="episode-header">EPISODE: THE FIRST NIGHT (EXPANDED)</p>

            <p class="narrative">The sun does not set in Seoul anymore. It dies. Bleeds out across the skyline in colors that should not exist—orange and red and something purple that feels like bruising. Like the sky itself was beaten and left to heal wrong.</p>

            <p class="narrative">You find shelter in a PC bang. One of those 24-hour gaming cafes that used to be full of teenagers and salarymen escaping their lives. Now it is just you. And the humming computers. And the screensavers dancing their endless loops for an audience that will never come back.</p>

            <p class="narrative">Jin helped you wedge the door. He is somewhere in the back now, doing something with wires and batteries. You learned not to ask. He has skills that do not have names in polite conversation.</p>

            <p class="narrative">"Found food." He appears holding energy drinks and triangle kimbap. "Also found this."</p>

            <p class="narrative">He tosses you a hoodie. Staff-issue. Still smells like the person who wore it. You do not think about that person. Cannot.</p>

            <p class="narrative">"The break room is clear. We can sleep in shifts."</p>

            <p class="dialogue">"Do you sleep?"</p>

            <p class="narrative">The question surprises you. Surprises him too, from the way his eyebrow moves.</p>

            <p class="dialogue">"Sometimes. When it is safe enough." He settles against the wall, positioning himself with sightlines to both exits. "Tonight is not that safe."</p>

            <p class="narrative">You eat cold rice in the dark. The energy drink is warm and too sweet, but the caffeine helps. Outside, the sounds of the dying city provide ambient horror.</p>

            <p class="dialogue">"What did you do? Before."</p>

            <p class="narrative">He is quiet for long enough that you think he will not answer.</p>

            <p class="dialogue">"Military. Four years. Then some other things that do not have official names." He takes a bite of kimbap. "You?"</p>

            <p class="dialogue">"Museum curator. National Museum of Korea."</p>

            <p class="dialogue">"The big one? With the Silla crowns?"</p>

            <p class="dialogue">"You know it?"</p>

            <p class="dialogue">"Used to take my—" He stops. Swallows. "Used to go there sometimes. Quiet place. Good for thinking."</p>

            <p class="narrative">You want to ask about the pause. The swallowed word. But you have your own swallowed words, so you let it go.</p>

            <p class="narrative">Outside, something screams. Not human. Too high. Too long. The sound goes on and on until it becomes the background, until you stop hearing it as a sound and start hearing it as the texture of the new world.</p>

            <p class="dialogue">"Caller." Jin does not move. Does not tense. Just... notes it. "They do that. One screams, the others come."</p>

            <p class="dialogue">"Like echolocation?"</p>

            <p class="dialogue">"Like summoning." He finishes his kimbap. "The science types probably have explanations. Pheromones. Sound frequencies. Neural hijacking." A shrug. "I just know that when one screams, you run the other way."</p>

            <p class="narrative">Footsteps outside. Dozens. Moving in response to the call. You hold your breath without meaning to. Jin is utterly still—not frozen, but paused. Like a leopard waiting to see if the prey will pass.</p>

            <p class="narrative">They pass. This time.</p>

            <p class="dialogue">"First night is always the hardest," he says quietly. "Your brain is still expecting rescue. Help. Someone to fix this. By the third night, you accept that nobody is coming. By the tenth night, you stop being surprised."</p>

            <p class="dialogue">"What night are you on?"</p>

            <p class="narrative">He looks at you. In the glow of the screensavers, his eyes are unreadable.</p>

            <p class="dialogue">"I stopped counting a long time ago."</p>

            <p class="narrative">The night stretches. You talk—about nothing important, about everything important. He tells you about the architecture of survival. You tell him about the architecture of the Joseon dynasty. Somehow it fits.</p>

            <p class="narrative">At some point, you realize you have not thought about dying in over an hour. That is new. That is because of him.</p>

            <p class="narrative">When the dawn comes—gray and ugly and beautiful because you are alive to see it—Jin is still there. Still watching. Still breathing.</p>

            <p class="dialogue">"You made it through the first night," he says. Almost a smile. "Most people do not."</p>

            <p class="dialogue">"I had help."</p>

            <p class="dialogue">"Yeah. You did." He stands. Stretches. For a moment, the tired warrior disappears and you see something else—someone younger, maybe. Someone who laughs. "Come on. We should move before the light fades."</p>

            <p class="narrative">You follow him. Of course you do.</p>

            <p class="narrative">What else is there to do in the apocalypse except follow the person who makes you feel alive?</p>
        `,
        choices: [
            { text: "Ask him about what he started to say—'Used to take my—'", target: "jin_past_hint" },
            { text: "Keep moving. Questions can wait.", target: "section_5" },
            { text: "Thank him. For staying.", target: "jin_first_bond" }
        ]
    },

    // JIN'S PAST REVEALED - New Episode
    jin_past_reveal: {
        id: "ep_jin_past",
        wordCount: 2800,
        content: `
            <p class="episode-header">EPISODE: THE THINGS HE CARRIES</p>

            <p class="narrative">Three days in. You are starting to recognize his rhythms. The way he checks corners without seeming to look. The way he rations food—always giving you the bigger portion without acknowledging it. The way he smiles, rare as sunrise, usually at something terrible.</p>

            <p class="narrative">Tonight, the fire crackles in an abandoned temple. Somewhere on Bukhansan. The infected do not climb this high. Not yet.</p>

            <p class="dialogue">"You were going to tell me something. That first night. 'Used to take my—' and then you stopped."</p>

            <p class="narrative">He goes still. The leopard again. But this time, not hunting. Hiding.</p>

            <p class="dialogue">"Sister." The word comes out rough. "Used to take my sister."</p>

            <p class="dialogue">"Jin—"</p>

            <p class="dialogue">"She loved the Silla crowns. Said they looked like something from a fairy tale." He stares into the fire. "She was twelve when she said that. Twenty-three when—"</p>

            <p class="narrative">He stops. Breathes. The kind of breath that holds back oceans.</p>

            <p class="dialogue">"She was on a work visa in the States. Florida. When the outbreak started, the borders closed. I tried to get to her. Through everything. But the quarantine was already—"</p>

            <p class="narrative">His hands are shaking. You have never seen that before.</p>

            <p class="dialogue">"I do not know if she is alive. I do not know if she turned. I do not know anything." A laugh. Hollow. "And that is the worst part. Not knowing. Imagining every possibility every night."</p>

            <p class="narrative">You do not say anything. There are no words for this. Instead, you move closer. Let your shoulder touch his. Presence instead of platitudes.</p>

            <p class="dialogue">"Her name was—is—Soojin." He almost smiles. "She would like you. Would probably tell me I am too intense and to 'stop being weird' around you."</p>

            <p class="dialogue">"Are you being weird around me?"</p>

            <p class="dialogue">"Probably. I am not good at..." He gestures vaguely. "This. People. Feelings. I know how to fight. How to survive. How to kill when killing is required. But this—sitting by a fire, talking about sisters and museums and—" His voice cracks. "I am so tired of just surviving. I want to live. And you make me remember what that felt like."</p>

            <p class="narrative">The fire pops. Sparks rise. You watch them disappear into the darkness like tiny prayers.</p>

            <p class="dialogue">"You are living right now," you say quietly. "Feeling pain is living. Missing someone is living. Sitting by a fire with someone new—that is living."</p>

            <p class="dialogue">"When did you get wise?"</p>

            <p class="dialogue">"I curated three exhibitions on Buddhist philosophy. Some of it stuck."</p>

            <p class="narrative">He laughs. Real this time. A surprised sound, like he forgot he could make it.</p>

            <p class="dialogue">"Tell me about the crowns. The Silla crowns she loved. Distract me."</p>

            <p class="narrative">So you do. You talk about gold and jade and antlers shaped like trees. About craftsmen dead for a thousand years whose work outlasted kingdoms. About how beauty survives even when the beautiful do not.</p>

            <p class="narrative">And somewhere in the telling, his hand finds yours. Holds on.</p>

            <p class="narrative">Neither of you acknowledges it. Neither of you lets go.</p>

            <p class="narrative">That is living too.</p>
        `,
        choices: [
            { text: "Stay like this. Just breathing. Together.", target: "jin_bond_deepens" },
            { text: "Make him a promise: if you survive this, you will help him find Soojin.", target: "jin_promise_made" },
            { text: "Pull away. This is getting too intense too fast.", target: "jin_distance_chosen" }
        ]
    }
};

// ═══════════════════════════════════════════════════════════════════════════
// NEW STORY SECTIONS (15+) - Lengthening the Path
// ═══════════════════════════════════════════════════════════════════════════

const NEW_SECTIONS = {

    // Section: Jin's Shaman Moment (unlocked after trust built)
    200: {
        id: 200,
        title: "THE FIRE WATCHER",
        thread: "jin_bond",
        content: `
            <p class="narrative">You find Jin at the edge of camp, cross-legged in front of a small fire. Smoke curls around him—not just from the wood. He does not look up when you approach.</p>

            <p class="dialogue">"Pull up some dirt."</p>

            <p class="narrative">You sit. The fire crackles. Somewhere in the distance, infected moan their endless hunger. But here, somehow, there is peace.</p>

            <p class="dialogue">"You ever notice," he says after a long silence, "that fire does not fight? It just... transforms. Whatever you feed it. Turns it into light. Heat. Something else."</p>

            <p class="dialogue">"Are you high right now?"</p>

            <p class="dialogue">"Obviously." He takes another drag. "Does not make it less true."</p>

            <p class="narrative">You watch the flames. He is right—they do not fight. They just change everything they touch.</p>

            <p class="dialogue">"Tomorrow is going to be bad," you say finally.</p>

            <p class="dialogue">"Yep."</p>

            <p class="dialogue">"We might not all make it."</p>

            <p class="dialogue">"Also yep." He turns to look at you. His eyes are red-rimmed but sharp. Always sharp. "But that is not what is really bothering you."</p>

            <p class="narrative">How does he do that? How does he always know?</p>

            <p class="dialogue">"What if I am not good enough? What if I make the wrong call and—"</p>

            <p class="dialogue">"What if the sky falls? What if fish learn to drive?" He shrugs. "You cannot control outcomes. You can only control choices. Make the choice. Live with it. Move on."</p>

            <p class="dialogue">"That sounds too simple."</p>

            <p class="dialogue">"Simple is not the same as easy." He passes you the joint. "Here. Stop thinking so loud. You are harshing my vibe."</p>

            <p class="narrative">You take it. The smoke fills your lungs. And for just a moment, the weight lifts.</p>

            <p class="dialogue">"Tomorrow I am going to kill a lot of people," he says quietly. Not bragging. Just... stating fact. "And then I am going to come back here and watch this fire and smoke this weed and not think about any of them. Because that is how you survive. Not the killing. The coming back."</p>

            <p class="narrative">The flames dance. The smoke rises. And somewhere between the marijuana haze and the starlight, you realize: this man is exactly as dangerous as he seems peaceful.</p>

            <p class="narrative">Which is very.</p>
        `,
        choices: [
            { text: "Stay until the fire dies. Watch the sunrise together.", target: 201 },
            { text: "Kiss him. Now. Before tomorrow makes it impossible.", target: 202 },
            { text: "Return to camp. You need sleep more than philosophy.", target: 203 }
        ]
    },

    // Section: The Leopard Reveal
    210: {
        id: 210,
        title: "THE SWITCH",
        thread: "jin_action",
        content: `
            <p class="narrative">The raider does not see it coming.</p>

            <p class="narrative">Jin has been sitting in the corner for an hour. Half-asleep. Seemingly oblivious to the growing tension as the raider leader negotiates with your group. You have watched Jin yawn three times. Check his nails. Stare at the ceiling like there is something fascinating up there.</p>

            <p class="narrative">The raider leader pulls a knife. Points it at Soojin.</p>

            <p class="dialogue">"New terms. You give us everything, or I start cutting."</p>

            <p class="narrative">Jin yawns again.</p>

            <p class="narrative">And then he is not in the corner anymore.</p>

            <p class="narrative">You do not see him move. One second he is sitting. The next he is behind the raider leader, one hand on the knife wrist, one hand on the throat, and the leader is on his knees gasping for air he cannot find.</p>

            <p class="dialogue">"Nah." Jin's voice is still casual. Still that drawl. "Here is the actual deal. You leave. Your boys leave. Nobody else has to die today."</p>

            <p class="narrative">The other raiders go for their weapons. Jin does not even look at them.</p>

            <p class="dialogue">"I have already counted exits. Three. I have identified your best shooters. Two, one behind the bar, one by the door. I have calculated time-to-kill for everyone in this room." He increases pressure on the throat. "You are not in the calculation because you are already dead. You just do not know it yet."</p>

            <p class="narrative">The leader is turning purple.</p>

            <p class="dialogue">"Decide. Now."</p>

            <p class="narrative">The raiders leave. Jin releases their leader, who crumbles to the floor, and walks back to his corner. Sits down. Yawns.</p>

            <p class="dialogue">"What were we talking about?"</p>

            <p class="narrative">Everyone is staring.</p>

            <p class="narrative">Jin notices. Blinks.</p>

            <p class="dialogue">"What? I said I was airborne. What did you think that meant, I jumped out of planes for fun?"</p>

            <p class="narrative">He closes his eyes. Within thirty seconds, he appears to be asleep.</p>

            <p class="narrative">Nobody believes he is.</p>
        `,
        choices: [
            { text: "Ask him later: where did you LEARN that?", target: 211 },
            { text: "Just appreciate that he is on your side.", target: 212 },
            { text: "This should scare you. It does not. Figure out why.", target: 213 }
        ]
    },

    // Section: Orca Rider First Contact (foreshadowing)
    220: {
        id: 220,
        title: "THE FREQUENCY",
        thread: "orca_foreshadow",
        content: `
            <p class="narrative">The radio crackles at 3 AM. You are on watch. Jin is asleep—actually asleep, for once.</p>

            <p class="static">*KSSSHHH*</p>

            <p class="dialogue radio">"...still watching. Still waiting. When you are ready..."</p>

            <p class="narrative">You grab the handset.</p>

            <p class="dialogue">"Hello? Who is this? What frequency—"</p>

            <p class="dialogue radio">"...every ending, I am there. Every choice, I see. When the time comes, I will give you the proof..."</p>

            <p class="dialogue">"Proof of WHAT?"</p>

            <p class="static">*KSSSHHH*</p>

            <p class="narrative">Nothing. Static. Like he was never there.</p>

            <p class="narrative">Jin stirs. Opens one eye.</p>

            <p class="dialogue">"You heard it too?"</p>

            <p class="dialogue">"Heard what?"</p>

            <p class="dialogue">"The broadcast. Orca Rider."</p>

            <p class="narrative">You freeze. He has heard the name before.</p>

            <p class="dialogue">"What do you know about him?"</p>

            <p class="narrative">Jin sits up. His expression is unreadable.</p>

            <p class="dialogue">"Just rumors. A man who shows up at endings. Who hands out codes that prove... something. Nobody knows what." He looks at the radio. "Nobody knows how he knows, either. He just... does."</p>

            <p class="dialogue">"That is creepy."</p>

            <p class="dialogue">"Yeah. But." He shrugs. "Survivors who get his codes seem to... I do not know. Feel less lost. Like someone was watching. Like their choices mattered."</p>

            <p class="narrative">The static hums. Waiting.</p>

            <p class="dialogue">"Maybe he is still listening," Jin says. Almost to himself. "Maybe he is always listening."</p>

            <p class="narrative">You shiver. Not from cold.</p>
        `,
        choices: [
            { text: "Try the frequency again. Ask what he wants.", target: 221 },
            { text: "Let it go. Some mysteries are better unsolved.", target: 222 },
            { text: "Ask Jin how HE knows about Orca Rider.", target: 223 }
        ]
    },

    // Section: The Promise (mid-game commitment test)
    230: {
        id: 230,
        title: "THE PROMISE",
        thread: "jin_bond",
        content: `
            <p class="narrative">The bridge is behind you. The horde is dealt with. You are both covered in blood—some yours, some not. Breathing hard. Alive.</p>

            <p class="dialogue">"We should not have survived that," Jin says.</p>

            <p class="dialogue">"But we did."</p>

            <p class="dialogue">"But we did." He looks at you. Something in his expression is different now. Softer. More certain. "Can I ask you something?"</p>

            <p class="dialogue">"After that? Anything."</p>

            <p class="dialogue">"If we make it through this—if there is an after—what do you want?"</p>

            <p class="narrative">The question catches you off guard. Nobody asks about 'after' anymore. There is only now. Only survival.</p>

            <p class="dialogue">"I want..." You think. "I want to remember what normal feels like. I want to sleep without listening for screams. I want to eat food that was not scavenged from a corpse's fridge."</p>

            <p class="dialogue">"And?"</p>

            <p class="dialogue">"And?"</p>

            <p class="dialogue">"There is an 'and.' I can hear it."</p>

            <p class="narrative">Damn him and his observation skills.</p>

            <p class="dialogue">"And I want someone to be there when I wake up. Not out of necessity. Out of choice."</p>

            <p class="narrative">Silence. The ruined bridge groans. Somewhere, infected moan.</p>

            <p class="dialogue">"I could be that someone." His voice is quiet. Almost scared. "If you want. I am not good at... this. At soft things. But I could try. For you."</p>

            <p class="narrative">Your heart does something complicated.</p>

            <p class="dialogue">"Jin—"</p>

            <p class="dialogue">"You do not have to answer now. I just wanted you to know that the option exists. That I—" He swallows. "That I want to be that person. If you will let me."</p>
        `,
        choices: [
            { text: "I want that too. More than I can say.", target: 231 },
            { text: "Let me think about it. This is a lot.", target: 232 },
            { text: "Kiss him. Words later.", target: 233 }
        ]
    }
};

// ═══════════════════════════════════════════════════════════════════════════
// EDEN REBORN REQUIREMENTS - Clear Path to Perfect Ending
// ═══════════════════════════════════════════════════════════════════════════

const EDEN_REQUIREMENTS = {
    name: "Eden Reborn",
    endingNumber: 91,
    description: "The perfect ending. Everyone alive. Perfect love. Zero betrayals.",

    mandatory: [
        { id: "ke_first_trust", choice: "jump_without_hesitation", desc: "Jump for Jin immediately" },
        { id: "ke_betrayal_test", choice: "never_betray", desc: "Refuse to betray Jin for safety" },
        { id: "ke_sacrifice", choice: "take_the_bullet", desc: "Take a bullet for Jin" },
        { id: "ke_confession", choice: "say_it_back", desc: "Tell Jin you love him" },
        { id: "ke_claim", choice: "accept_forever", desc: "Accept Jin's claim completely" }
    ],

    companions_required: [
        "Minho alive",
        "Soojin alive",
        "Mrs. Park alive",
        "Colonel Yoo allied"
    ],

    stats_required: {
        betrayals: 0,
        loyalty_points: 15,
        jin_relationship: "bonded",
        lives_saved: 10
    },

    path_summary: `
        Eden Reborn requires:
        • Zero betrayals (not even considering them)
        • All 5 knife's edge moments completed perfectly
        • Jin romance at maximum (bonded)
        • All major companions alive
        • 10+ lives saved throughout story

        Miss ANY of these, and Eden remains locked.

        This is the relationship you are training for:
        Complete commitment. Absolute loyalty. Love without exit strategy.
    `
};

// ═══════════════════════════════════════════════════════════════════════════
// MERGE ALL CONTENT
// ═══════════════════════════════════════════════════════════════════════════

// Merge into STORY_DATA
if (typeof STORY_DATA !== 'undefined') {
    // Add knife's edge moments
    for (const [key, moment] of Object.entries(KNIFES_EDGE_MOMENTS)) {
        STORY_DATA[moment.id] = moment;
    }

    // Add new sections
    for (const [id, section] of Object.entries(NEW_SECTIONS)) {
        STORY_DATA[id] = section;
    }

    // Add expanded episodes to EPISODES
    if (typeof EPISODES !== 'undefined') {
        Object.assign(EPISODES, EXPANDED_EPISODES);
    }
}

// Export all
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        ORCA_FORESHADOWING,
        KNIFES_EDGE_MOMENTS,
        JIN_INTEGRATIONS,
        BETRAYAL_CONSEQUENCES,
        LOYALTY_MILESTONES,
        EXPANDED_EPISODES,
        NEW_SECTIONS,
        EDEN_REQUIREMENTS
    };
}

// ═══════════════════════════════════════════════════════════════════════════
// THERAPEUTIC LAYER - DBT/CBT Principles Woven Into Gameplay
// ═══════════════════════════════════════════════════════════════════════════
// Not therapy. Just good choices that happen to teach healthy coping.
// Invisible. Aspirational. Rewarded.
// ═══════════════════════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════════════════
// DBT SKILLS EMBEDDED IN CHOICES
// ═══════════════════════════════════════════════════════════════════════════

const DBT_CHOICES = {

    // ─────────────────────────────────────────────────────────────────────────
    // MINDFULNESS - Present moment awareness, non-judgmental observation
    // ─────────────────────────────────────────────────────────────────────────
    mindfulness: {
        principle: "Notice what is happening without judgment. Stay present.",

        choices: [
            {
                situation: "Panic rising during crisis",
                unhealthy: "Spiral into what-ifs and catastrophizing",
                healthy: "Breathe. Notice five things you can see. Ground yourself.",
                reward: "You feel the panic recede. Your hands stop shaking. You can think again.",
                jinResponse: "'You went somewhere dark for a second. But you came back. That is strength.'"
            },
            {
                situation: "Overwhelmed by grief after loss",
                unhealthy: "Numb out. Refuse to feel it.",
                healthy: "Let the grief move through you. Feel it. Then let it pass.",
                reward: "The tears come. And then they stop. And you are still here. Lighter.",
                jinResponse: "'You did not run from it. Most people run. You stayed. That matters.'"
            },
            {
                situation: "Anger at someone who wronged you",
                unhealthy: "React immediately. Say something you will regret.",
                healthy: "Notice the anger. Name it. Choose your response instead of reacting.",
                reward: "The words you almost said dissolve. Better words come. The situation does not explode.",
                jinResponse: "'I saw you swallow that. Saw you choose different. That is control.'"
            }
        ],

        jin_teaches: `
            <p class="dialogue">"You know what keeps me alive?" Jin stares at the fire. "Not the training. Not the reflexes. It is this—" He taps his temple. "—staying HERE. Not in what might happen. Not in what already happened. Here. Now. This breath. This moment."</p>
            <p class="dialogue">"That sounds like meditation."</p>
            <p class="dialogue">"Call it whatever you want. Call it survival. When bullets are flying, the only thing that matters is what is in front of you. Not fear. Not memory. Just now."</p>
        `
    },

    // ─────────────────────────────────────────────────────────────────────────
    // DISTRESS TOLERANCE - Surviving crises without making them worse
    // ─────────────────────────────────────────────────────────────────────────
    distress_tolerance: {
        principle: "Get through the bad moment without making it worse.",

        choices: [
            {
                situation: "Everything is falling apart. You want to give up.",
                unhealthy: "Make a permanent decision based on temporary pain.",
                healthy: "This feeling is temporary. Survive this moment. Decide tomorrow.",
                reward: "Morning comes. The impossible feels... possible again. You are glad you waited.",
                jinResponse: "'You rode it out. That is all you have to do sometimes. Just ride it out.'"
            },
            {
                situation: "Betrayed by someone you trusted",
                unhealthy: "Burn everything. Trust no one ever again.",
                healthy: "This hurts. It is supposed to hurt. But one person is not everyone.",
                reward: "You do not close yourself off. And later, someone proves you right to stay open.",
                jinResponse: "'Easy to become bitter. Harder to stay soft. You stayed soft. That takes guts.'"
            },
            {
                situation: "Physical pain overwhelming you",
                unhealthy: "Focus on the pain until it consumes everything.",
                healthy: "Accept the pain is there. Breathe around it. It is not bigger than you.",
                reward: "The pain does not disappear. But it shrinks. Becomes manageable. You keep moving.",
                jinResponse: "'Pain is information, not identity. You heard it. You did not become it.'"
            }
        ],

        jin_teaches: `
            <p class="dialogue">"Worst night I ever had," Jin says quietly. "Thought I was done. Wanted to be done. And then I told myself: just make it to sunrise. Just that. Nothing else. Do not solve anything. Do not fix anything. Just... sunrise."</p>
            <p class="dialogue">"What happened at sunrise?"</p>
            <p class="dialogue">"Everything was still terrible. But I was alive to be angry about it. And that was enough to keep going."</p>
        `
    },

    // ─────────────────────────────────────────────────────────────────────────
    // EMOTION REGULATION - Understanding and managing emotions
    // ─────────────────────────────────────────────────────────────────────────
    emotion_regulation: {
        principle: "Emotions are information, not commands. Feel them. Then choose.",

        choices: [
            {
                situation: "Fear telling you to run from something important",
                unhealthy: "Obey the fear. Avoid. Stay small.",
                healthy: "Thank the fear for trying to protect you. Then do it anyway.",
                reward: "You do the thing. The fear was wrong. You are stronger than you knew.",
                jinResponse: "'Fear is a liar with good intentions. You called its bluff.'"
            },
            {
                situation: "Shame about past mistakes",
                unhealthy: "Define yourself by the worst thing you ever did.",
                healthy: "You did something wrong. You are not something wrong.",
                reward: "The shame loosens its grip. You can look at what happened without drowning in it.",
                jinResponse: "'Everyone has done things. The difference is what you do next.'"
            },
            {
                situation: "Jealousy over someone else's success/relationship",
                unhealthy: "Let resentment poison your connection to them.",
                healthy: "Their win is not your loss. There is enough.",
                reward: "The jealousy transforms into genuine happiness for them. It feels better.",
                jinResponse: "'Abundance mindset. Hard to get there. But you did.'"
            }
        ],

        jin_teaches: `
            <p class="dialogue">"I used to think emotions were weakness." Jin is cleaning his weapon, movements automatic. "Military trained that into me. Feel nothing. Be nothing."</p>
            <p class="dialogue">"That sounds exhausting."</p>
            <p class="dialogue">"It was. And it did not work. The feelings did not go away. They just went underground. Came out sideways." He pauses. "Now I let them through. Let them speak. Then I decide what to do. Feelings get a voice, not a vote."</p>
        `
    },

    // ─────────────────────────────────────────────────────────────────────────
    // INTERPERSONAL EFFECTIVENESS - Healthy communication and boundaries
    // ─────────────────────────────────────────────────────────────────────────
    interpersonal: {
        principle: "Say what you need. Hear what they need. Find the middle.",

        choices: [
            {
                situation: "Need something but afraid to ask",
                unhealthy: "Stay silent. Resent them for not reading your mind.",
                healthy: "Ask clearly. Accept they might say no. That is their right.",
                reward: "They say yes. Or they say no with respect. Either way, you know where you stand.",
                jinResponse: "'You asked for what you needed. That is not selfish. That is honest.'"
            },
            {
                situation: "Someone crosses a boundary",
                unhealthy: "Let it slide. Avoid conflict. Seethe internally.",
                healthy: "Name it. Calmly. Without attack. 'That does not work for me.'",
                reward: "They apologize. Or they do not—and now you know who they are.",
                jinResponse: "'Boundaries are not walls. They are doors. You get to choose who comes through.'"
            },
            {
                situation: "Disagreement with someone you love",
                unhealthy: "Win at all costs. Or fold completely.",
                healthy: "Understand first. Then be understood. The relationship matters more than being right.",
                reward: "You find common ground. Both of you feel heard. Closer than before.",
                jinResponse: "'You listened before you talked. That is rare. That is everything.'"
            }
        ],

        jin_teaches: `
            <p class="dialogue">"I will say this once." Jin's voice is calm but firm. "If you need something from me, tell me. Do not hint. Do not test. Just say it. I will do the same."</p>
            <p class="dialogue">"That sounds very... direct."</p>
            <p class="dialogue">"Games are for people who are afraid of rejection. I am not afraid. Ask me anything. Tell me anything. I can handle it. Can you?"</p>
        `
    }
};

// ═══════════════════════════════════════════════════════════════════════════
// CBT PRINCIPLES IN NARRATIVE
// ═══════════════════════════════════════════════════════════════════════════

const CBT_NARRATIVES = {

    // ─────────────────────────────────────────────────────────────────────────
    // COGNITIVE RESTRUCTURING - Challenging distorted thoughts
    // ─────────────────────────────────────────────────────────────────────────
    thought_challenging: {
        scenarios: [
            {
                trigger: "After a failure",
                distorted_thought: "I always mess everything up. I am useless.",
                challenge: "Is that actually true? What about the times you succeeded?",
                reframe: "I failed at this thing. That does not define me. I can try differently.",
                narrative: `
                    <p class="narrative">The voice in your head says: you ruin everything.</p>
                    <p class="narrative">But then you remember: the bridge. The rescue. The night you kept everyone alive.</p>
                    <p class="narrative">One failure does not erase a hundred successes. You know this. Now you have to believe it.</p>
                `
            },
            {
                trigger: "When someone is angry at you",
                distorted_thought: "They hate me. Everyone hates me. I should not have tried.",
                challenge: "Are they angry at you or at the situation? Is this about you or about something else?",
                reframe: "They are upset. That is valid. It does not mean I am bad.",
                narrative: `
                    <p class="narrative">Minho's words sting. But as the anger fades, you see it—he is scared. Scared for you. Scared of losing you.</p>
                    <p class="narrative">His anger is not rejection. It is love wearing armor.</p>
                `
            },
            {
                trigger: "Predicting disaster",
                distorted_thought: "This will definitely go wrong. It always goes wrong.",
                challenge: "What is the actual evidence? Have things always gone wrong?",
                reframe: "This might be hard. It might also work. I will not know until I try.",
                narrative: `
                    <p class="narrative">Every instinct says: do not try. You will fail. You will die.</p>
                    <p class="narrative">But you have tried before. And you are still here. The catastrophe your mind predicts... it does not always come.</p>
                `
            }
        ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    // BEHAVIORAL ACTIVATION - Doing things even when you don't want to
    // ─────────────────────────────────────────────────────────────────────────
    behavioral_activation: {
        scenarios: [
            {
                trigger: "Wanting to isolate",
                unhealthy_behavior: "Stay in bed. Avoid everyone. Wait for motivation.",
                healthy_behavior: "Get up. Do one small thing. Let action create motivation.",
                reward: "The small thing leads to another. Movement creates momentum.",
                jinResponse: "'You got up. Some days that is the whole victory.'"
            },
            {
                trigger: "Feeling hopeless about the future",
                unhealthy_behavior: "Stop trying. What is the point?",
                healthy_behavior: "Do something that builds toward tomorrow anyway.",
                reward: "Tomorrow comes. And you are ready for it. Because you built for it.",
                jinResponse: "'Hope is not a feeling. It is a decision. You decided.'"
            }
        ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    // EXPOSURE - Facing fears gradually
    // ─────────────────────────────────────────────────────────────────────────
    exposure: {
        scenarios: [
            {
                fear: "Trusting someone after being hurt",
                avoidance: "Never trust anyone again. Safer that way.",
                exposure: "Trust a little. See what happens. Expand from there.",
                reward: "The trust was not betrayed. Or it was, and you survived. Either way, you learned.",
                jinResponse: "'You took a chance on me. That was the hardest trust of all.'"
            },
            {
                fear: "Conflict and confrontation",
                avoidance: "Agree with everything. Keep the peace at any cost.",
                exposure: "Disagree once. Gently. See that the world does not end.",
                reward: "They respect you more for having boundaries. The peace is real now, not performance.",
                jinResponse: "'You pushed back. And we are still here. See how that works?'"
            },
            {
                fear: "Being seen as weak",
                avoidance: "Never ask for help. Never cry. Never admit you are struggling.",
                exposure: "Admit you need help. Once. To someone safe.",
                reward: "They do not think less of you. They think more. Vulnerability is not weakness—it is courage.",
                jinResponse: "'You let me see you. The real you. That is the bravest thing you have ever done.'"
            }
        ]
    }
};

// ═══════════════════════════════════════════════════════════════════════════
// INTEGRATED THERAPEUTIC MOMENTS - Jin as Accidental Therapist
// ═══════════════════════════════════════════════════════════════════════════

const JIN_THERAPEUTIC_MOMENTS = {

    grounding_scene: {
        id: 300,
        title: "FIVE THINGS",
        trigger: "After traumatic event",
        content: `
            <p class="narrative">You are shaking. Cannot stop. The images keep replaying—blood, screaming, the sound of—</p>

            <p class="dialogue">"Hey." Jin is in front of you. When did he—? "Look at me."</p>

            <p class="narrative">You try. Cannot focus.</p>

            <p class="dialogue">"Five things you can see. Name them."</p>

            <p class="dialogue">"What—"</p>

            <p class="dialogue">"Just do it. Five things. Go."</p>

            <p class="narrative">You force your eyes to move. "The... the fire. Your jacket. The wall. My hands. The sky."</p>

            <p class="dialogue">"Good. Four things you can touch."</p>

            <p class="dialogue">"The ground. My clothes. The cold. You—your hand."</p>

            <p class="dialogue">"Three things you can hear."</p>

            <p class="narrative">You listen. Really listen. "Wind. Crackling fire. Your voice."</p>

            <p class="dialogue">"Two things you can smell."</p>

            <p class="dialogue">"Smoke. And... rain coming."</p>

            <p class="dialogue">"One thing you can taste."</p>

            <p class="dialogue">"Blood. From where I bit my lip."</p>

            <p class="narrative">Jin nods. "Now. Where are you?"</p>

            <p class="narrative">The shaking has stopped. The images have faded. You are HERE. Present. Alive.</p>

            <p class="dialogue">"Here. I am here."</p>

            <p class="dialogue">"Yeah. You are." He squeezes your hand. "Welcome back."</p>
        `
    },

    validation_scene: {
        id: 301,
        title: "IT MAKES SENSE",
        trigger: "After player expresses shame or self-blame",
        content: `
            <p class="narrative">"I should not feel this way. It is stupid. Other people have it worse."</p>

            <p class="narrative">Jin stops walking. Turns to face you.</p>

            <p class="dialogue">"Who told you that?"</p>

            <p class="dialogue">"What?"</p>

            <p class="dialogue">"That you are not allowed to feel what you feel. Who put that in your head?"</p>

            <p class="narrative">You do not have an answer. Everyone? No one? The voice that lives behind your eyes?</p>

            <p class="dialogue">"Listen to me." His voice is firm but not harsh. "Your feelings are not stupid. They make sense. Given what you have been through, given what you have seen—of course you feel this way. Anyone would."</p>

            <p class="dialogue">"But—"</p>

            <p class="dialogue">"No buts. Other people's pain does not cancel yours. That is not how it works." He looks at you intently. "You are allowed to hurt. You are allowed to struggle. And you are allowed to ask for help without justifying why you deserve it."</p>

            <p class="narrative">Something loosens in your chest. Something you did not know was tight.</p>

            <p class="dialogue">"Where did you learn that?"</p>

            <p class="dialogue">"Therapy. Mandated after deployment." A half-smile. "Hated it at first. Now I wish I could buy that woman dinner."</p>
        `
    },

    opposite_action_scene: {
        id: 302,
        title: "DO THE OPPOSITE",
        trigger: "Player choosing avoidance",
        content: `
            <p class="dialogue">"I do not want to go out there. I do not want to face them. I want to stay here where it is safe."</p>

            <p class="narrative">Jin considers this.</p>

            <p class="dialogue">"Okay. So what is the fear telling you to do?"</p>

            <p class="dialogue">"Hide. Avoid. Wait until it goes away."</p>

            <p class="dialogue">"And when you do that—when you hide—how do you feel after?"</p>

            <p class="narrative">You think about it. "Worse. Usually. Safe for a minute, then worse."</p>

            <p class="dialogue">"Right. Because avoidance feeds fear. It does not starve it." He shrugs. "So. What if you did the opposite?"</p>

            <p class="dialogue">"That sounds terrifying."</p>

            <p class="dialogue">"Yeah. It is. But here is the secret—" He leans in. "—fear before is always bigger than fear during. The monster in your head is worse than the monster in the room. Every time."</p>

            <p class="dialogue">"What if you are wrong?"</p>

            <p class="dialogue">"Then we deal with that together. But we will not know until you try."</p>

            <p class="narrative">He holds out his hand.</p>

            <p class="dialogue">"Do the opposite. I will be right next to you."</p>
        `
    },

    self_compassion_scene: {
        id: 303,
        title: "WHAT WOULD YOU SAY",
        trigger: "Player being harsh on themselves",
        content: `
            <p class="dialogue">"I am such an idiot. I cannot believe I—"</p>

            <p class="dialogue">"Stop."</p>

            <p class="narrative">Jin holds up a hand.</p>

            <p class="dialogue">"If I made that same mistake—if I did exactly what you did—what would you say to me?"</p>

            <p class="dialogue">"That is different."</p>

            <p class="dialogue">"It is not. Answer the question."</p>

            <p class="narrative">You think about it. If Jin had done what you did...</p>

            <p class="dialogue">"I would say... you did your best with what you knew. It is okay. We will figure it out."</p>

            <p class="dialogue">"Exactly. So why do you not say that to yourself?"</p>

            <p class="narrative">Silence. You do not have an answer.</p>

            <p class="dialogue">"You talk to yourself like an enemy. What if you talked to yourself like a friend?" He tilts his head. "What if you were as kind to you as you would be to me?"</p>

            <p class="dialogue">"That feels... wrong. Self-indulgent."</p>

            <p class="dialogue">"It is not. It is necessary." He looks at you seriously. "You cannot survive this on self-hatred. You need to be on your own team."</p>
        `
    }
};

// ═══════════════════════════════════════════════════════════════════════════
// THERAPEUTIC REWARDS SYSTEM - Healthy Choices Get Better Outcomes
// ═══════════════════════════════════════════════════════════════════════════

const THERAPEUTIC_REWARDS = {
    mindfulness_points: {
        name: "Presence",
        description: "Earned by staying grounded in crisis moments",
        rewards: ["Better combat outcomes", "Jin trusts you faster", "See hidden options"]
    },

    distress_tolerance_points: {
        name: "Resilience",
        description: "Earned by surviving hard moments without making them worse",
        rewards: ["Survive wounds that would kill others", "Companions rally to you", "Unlock survival endings"]
    },

    emotion_regulation_points: {
        name: "Balance",
        description: "Earned by feeling emotions without being controlled by them",
        rewards: ["Better dialogue options", "Jin opens up faster", "Avoid relationship-damaging choices"]
    },

    interpersonal_points: {
        name: "Connection",
        description: "Earned by communicating healthily",
        rewards: ["More allies", "Conflicts resolve peacefully", "Eden path stays open"]
    }
};

// ═══════════════════════════════════════════════════════════════════════════
// REMOVED: PROPOSAL-ADJACENT CONTENT
// The "claim" scene has been rewritten to be about commitment without
// wedding/proposal energy. That moment belongs to real life.
// ═══════════════════════════════════════════════════════════════════════════

const JIN_COMMITMENT_REWRITE = {
    // The claim scene now focuses on CHOOSING each other, not formal commitment
    // No rings. No "forever." No proposal language.
    // Just: "I choose you. Every day. That is the deal."

    ke_choice: {
        id: 105,
        title: "THE CHOICE",
        timing: "Before final act",
        stakes: "Jin is asking you to choose him. Not forever. Just today. And tomorrow. And the day after.",
        content: `
            <p class="narrative">The final battle is tomorrow. You both know you might not survive.</p>

            <p class="narrative">Jin finds you on the wall. The night is clear. Cold.</p>

            <p class="dialogue">"I need to ask you something. Before everything."</p>

            <p class="narrative">He takes your hand.</p>

            <p class="dialogue">"I do not know what happens after tomorrow. I do not know if there IS an after. But I know this—"</p>

            <p class="narrative">He meets your eyes. No walls. No armor.</p>

            <p class="dialogue">"I choose you. Today. Tomorrow. Every day I get."</p>

            <p class="dialogue">"Jin—"</p>

            <p class="dialogue">"I am not asking for forever. I am asking for right now. I am asking if you choose me too."</p>

            <p class="narrative">Simple. Raw. No promises about things neither of you can control.</p>

            <p class="dialogue">"Because here is the thing—" His voice cracks. "—I would rather have you for one day than have anyone else for a lifetime. But I need to know you feel the same."</p>

            <p class="narrative">His hands cup your face.</p>

            <p class="dialogue">"Do you choose me?"</p>
        `,
        choices: [
            {
                text: "I choose you. Today. Tomorrow. Every day I get.",
                result: "choice_mutual",
                consequence: "EDEN PATH OPENS. You have chosen each other.",
                jinReaction: "The tension leaves his body. He pulls you close, forehead to forehead. 'Okay. Then we survive tomorrow. Because I am not losing this.'"
            },
            {
                text: "I want to. I am just scared—",
                result: "choice_hesitant",
                consequence: "He understands. The path stays open. But he needs to hear it eventually.",
                jinReaction: "'Scared is okay. I am scared too.' He holds you. 'I will ask again. After. When we both know we are going to live.'"
            },
            {
                text: "I do not know. I cannot—",
                result: "choice_withheld",
                consequence: "Something dims. Not broken. But dimmed.",
                jinReaction: "He nods. Steps back. 'Okay. That is... okay.' It is not okay. But he will not push. 'I will still fight beside you. That is not conditional.'"
            }
        ]
    }
};

// Merge into story
if (typeof STORY_DATA !== 'undefined') {
    Object.assign(STORY_DATA, JIN_THERAPEUTIC_MOMENTS);
}

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        DBT_CHOICES,
        CBT_NARRATIVES,
        JIN_THERAPEUTIC_MOMENTS,
        THERAPEUTIC_REWARDS,
        JIN_COMMITMENT_REWRITE
    };
}


// ═══════════════════════════════════════════════════════════════════════════
// KORI NUCLEAR COMPLEX - FALLOUT-INSPIRED EXPANSION ZONE
// ═══════════════════════════════════════════════════════════════════════════
// Risk/Reward: Dangerous optional area with radiation mechanics
// Contains: Cure components, settlement power source, scavenger factions
// Consequences compound: Bad choices → radiation sickness → enslavement → death
// ═══════════════════════════════════════════════════════════════════════════

const KORI_REACTOR_ZONE = {

    // Zone Overview
    overview: {
        name: "Kori Nuclear Complex",
        location: "40km northeast of Busan",
        status: "Partially melted down, still hot",
        factions: ["The Radborn", "Vault Dwellers", "Clean Skins"],
        danger_level: "EXTREME",
        reward: "Cure synthesis equipment + Settlement power"
    },

    // ─────────────────────────────────────────────────────────────────────────
    // RADIATION MECHANICS
    // ─────────────────────────────────────────────────────────────────────────
    radiation: {
        exposure_stages: [
            { level: 0, name: "Clean", effect: "No symptoms" },
            { level: 1, name: "Mild", effect: "Nausea, -1 to all stats. Reversible." },
            { level: 2, name: "Moderate", effect: "Bleeding gums, fatigue. Need RadAway equivalent within 24 hours." },
            { level: 3, name: "Severe", effect: "Hair loss, vomiting. Death within 72 hours without treatment." },
            { level: 4, name: "Terminal", effect: "Nothing can save you now. Choose how you spend your final hours." }
        ],
        accumulation: "Every 10 minutes in hot zones without protection adds 1 level",
        protection: ["Hazmat suit (blocks 90%)", "Lead-lined clothing (blocks 50%)", "RadAway (reduces 2 levels)", "Iodine tablets (slows accumulation)"]
    },

    // ─────────────────────────────────────────────────────────────────────────
    // ENTRY SECTION
    // ─────────────────────────────────────────────────────────────────────────
    section_reactor_entrance: {
        id: "kori_entrance",
        title: "THE DEAD ZONE",
        requirement: "Settlement asks for power source OR cure requires synthesis equipment",
        content: `
            <p class="narrative">The Geiger counter starts clicking before you even see it. Then the sound becomes constant. Then it screams.</p>

            <p class="narrative">Kori Nuclear Complex. Four reactors. One of them melted down in the first days—no one left to manage the cooling when everyone was running from the infected.</p>

            <p class="narrative">The good news: inside that reactor is the only surviving electron microscope in South Korea. The only way to synthesize a real cure, not the band-aid solutions that slow the infection.</p>

            <p class="narrative">The bad news: everything else.</p>

            <p class="narrative">Jin adjusts his lead-lined jacket. It will not stop all the radiation, but it might buy time.</p>

            <p class="dialogue">"You do not have to come." His voice is flat. "This is probably a one-way trip."</p>

            <p class="dialogue">"You are going."</p>

            <p class="dialogue">"I am always going. That is not the question."</p>

            <p class="narrative">He meets your eyes. The leopard in him is calculating distances, cover, egress routes. The mongoose is timing how long you have before your cells start dying.</p>

            <p class="dialogue">"The question is whether you trust me enough to walk into a reactor with me."</p>
        `,
        choices: [
            {
                text: "I trust you. Let us go.",
                result: "kori_enter_together",
                consequence: "Jin gains maximum loyalty. Radiation exposure begins. Clock starts."
            },
            {
                text: "We should find hazmat suits first.",
                result: "kori_preparation",
                consequence: "Smart. Delays entry but reduces radiation accumulation rate."
            },
            {
                text: "You go. I will wait here.",
                result: "kori_abandon",
                consequence: "Jin goes alone. Survival rate: 12%. If he dies, you live with that forever.",
                jinReaction: "He nods. No judgment. 'Okay. If I do not come back—' He pauses. 'Never mind. I will come back. I always come back.' He does not always come back."
            }
        ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    // THE RADBORN FACTION - Mutated Survivors
    // ─────────────────────────────────────────────────────────────────────────
    section_radborn: {
        id: "kori_radborn",
        title: "THE CHANGED ONES",
        content: `
            <p class="narrative">They emerge from the glow. Not infected—something else. Skin sloughing in patches. Eyes clouded. But conscious. Intelligent.</p>

            <p class="narrative">The Radborn. Survivors who stayed too long, absorbed too much. The radiation did not kill them—it changed them.</p>

            <p class="dialogue">"You bring Clean Skins into our home." The speaker has a voice like gravel. "That takes either courage or stupidity."</p>

            <p class="narrative">Jin rests his hand on his weapon. Not drawing. Just ready.</p>

            <p class="dialogue">"We need access to Reactor 2. The synthesis lab."</p>

            <p class="dialogue">"Everyone needs something from us. The suits need power. The Dwellers need parts. You need equipment." A rattling laugh. "What do WE get?"</p>

            <p class="narrative">Behind the speaker, dozens more emerge. Men, women, children—all marked by the glow. All watching.</p>

            <p class="dialogue">"The Clean Skins think we are monsters. Abominations. They shoot us on sight." The speaker steps closer. You can smell the decay. "Will you shoot us too?"</p>
        `,
        choices: [
            {
                text: "We are not here to hurt anyone. We can trade.",
                result: "radborn_negotiate",
                consequence: "Opens trading path. The Radborn have knowledge of the facility."
            },
            {
                text: "We will do what we have to do.",
                result: "radborn_threaten",
                consequence: "Hostile. The Radborn know these tunnels. You do not.",
                jinReaction: "Jin tightens his jaw. 'That was not the play.' He does not countermand you, but you feel his disappointment."
            },
            {
                text: "What do you need? Maybe we can help.",
                result: "radborn_alliance",
                consequence: "Potential alliance. The Radborn want medicine—not for the radiation, but for the pain.",
                jinReaction: "'Good.' Jin relaxes slightly. 'Listen first. Threaten never. I taught you that.'"
            }
        ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    // THE VAULT DWELLERS - Corporate Bunker Survivors
    // ─────────────────────────────────────────────────────────────────────────
    section_vault_dwellers: {
        id: "kori_vault",
        title: "THE SURVIVORS BELOW",
        content: `
            <p class="narrative">The bunker door is three feet of steel. Behind it: the original Kori employees who sealed themselves in when the meltdown started.</p>

            <p class="narrative">They have food. Water. Air filtration. Everything—except a way out.</p>

            <p class="dialogue">"You are the first outside contact in eleven months." The voice comes through an intercom. "How bad is it out there?"</p>

            <p class="narrative">Jin looks at you. How do you tell people the world ended?</p>

            <p class="dialogue">"There is no more government," you say. "The cities are gone. The infection spread everywhere."</p>

            <p class="narrative">Silence. Then: "We have the synthesis equipment. We can help you make a cure. But we need something first."</p>

            <p class="dialogue">"What?"</p>

            <p class="dialogue">"We want out. We want to come with you. All forty-seven of us. Or we destroy the equipment before we starve."</p>

            <p class="narrative">Forty-seven people. Untrained. Soft from a year of bunker life. Through a radiation zone crawling with Radborn and infected.</p>

            <p class="dialogue">"That is suicide," Jin mutters. "For them AND us."</p>
        `,
        choices: [
            {
                text: "We will find a way. No one gets left behind.",
                result: "vault_full_rescue",
                consequence: "Impossible odds. 47 civilians through a hot zone. But if you pull it off... legend.",
                jinReaction: "'You know what you just signed us up for.' He is not angry. He is impressed. 'Okay. We make it work. We always make it work.'"
            },
            {
                text: "We can take twenty. The strongest. The rest... I am sorry.",
                result: "vault_partial_rescue",
                consequence: "Practical. Terrible. You choose who lives."
            },
            {
                text: "Give us the equipment. We will come back for you later.",
                result: "vault_promise",
                consequence: "They do not believe you. Neither does Jin."
            }
        ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    // THE CLEAN SKINS - Military Remnant
    // ─────────────────────────────────────────────────────────────────────────
    section_clean_skins: {
        id: "kori_military",
        title: "THE PURIFIERS",
        content: `
            <p class="narrative">They call themselves Clean Skins. Former military. Hazmat suits and flamethrowers. Their mission: "purify" the reactor zone.</p>

            <p class="narrative">That means killing everything that glows.</p>

            <p class="dialogue">"Targets acquired." The commander speaks through his respirator. "Two unknowns. Radiation levels... moderate. They are still clean."</p>

            <p class="dialogue">"Then recruit them or remove them. No witnesses to the operation."</p>

            <p class="narrative">Twenty soldiers. Trained. Armed. Surrounding you.</p>

            <p class="dialogue">"You have two options." The commander steps forward. "Join us and help purify this zone. Or be classified as contaminated."</p>

            <p class="narrative">Jin has not moved his hand from his weapon. You can feel him calculating. Twenty against two. Bad odds. But not impossible—not for him.</p>

            <p class="dialogue">"What exactly does purifying mean?"</p>

            <p class="dialogue">"Elimination of all irradiated biological material. The Radborn. The mutated infected. The Vault Dwellers if their exposure is too high."</p>

            <p class="narrative">Genocide. They are describing genocide.</p>
        `,
        choices: [
            {
                text: "We will never help you kill civilians.",
                result: "military_resist",
                consequence: "Combat. Twenty on two. Jin has been waiting for this.",
                jinReaction: "'Finally.' His voice is ice. 'I was hoping you would say that.' The leopard is gone. The mongoose strikes."
            },
            {
                text: "Pretend to join. Sabotage from inside.",
                result: "military_infiltrate",
                consequence: "Risky. If discovered, death. If successful, save everyone."
            },
            {
                text: "Join them. Survival matters more.",
                result: "military_join",
                consequence: "You survive. The Radborn burn. The Vault Dwellers are decontaminated. Jin leaves. EDEN IS CLOSED FOREVER.",
                jinReaction: "He stares at you. Long. Cold. 'I thought I knew you.' He walks away. Does not look back. You never see him again. But you hear his voice sometimes, on the radio: 'Orca Rider, standing by.' A reminder of what you could have been.",
                heaLocked: true
            }
        ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    // THE REACTOR CORE - Final Challenge
    // ─────────────────────────────────────────────────────────────────────────
    section_reactor_core: {
        id: "kori_core",
        title: "THE HEART OF THE FIRE",
        content: `
            <p class="narrative">The reactor core. Still hot. Still glowing. Still alive in ways that should not be possible.</p>

            <p class="narrative">The synthesis equipment is on the other side. A hundred meters through lethal radiation.</p>

            <p class="narrative">Your Geiger counter stopped working ten minutes ago. The needle broke trying to measure what was coming through.</p>

            <p class="dialogue">"We have maybe five minutes before permanent damage." Jin keeps his voice steady. "Three minutes to get in, get the equipment, get out."</p>

            <p class="dialogue">"That is not enough time."</p>

            <p class="dialogue">"No. It is not." He looks at you. "One of us goes. Fast as possible. The other waits here."</p>

            <p class="narrative">You both know what he is saying. The person who goes takes the full dose. The person who waits lives.</p>

            <p class="dialogue">"I am faster," he says. Not bragging. Just fact. "I did SERE training. I can move through that space in under two minutes. Maybe."</p>

            <p class="dialogue">"And if you do not make it?"</p>

            <p class="dialogue">"Then you take what I bring back and you finish this. The settlement needs power. The cure needs this equipment. People are counting on us." He cups your face. That gesture—the one that always anchors you. "Some things are bigger than us."</p>
        `,
        choices: [
            {
                text: "Let me go. You are too important to risk.",
                result: "player_sacrifice",
                consequence: "You take the dose. Jin lives. You have 72 hours to finish the mission before the radiation finishes you.",
                jinReaction: "'No. No, absolutely not—' But you are already running. You hear him screaming your name. You do not look back. Some choices are not his to make."
            },
            {
                text: "We go together. Two minutes. We both make it or neither does.",
                result: "together_core",
                consequence: "Split dose. Both survive with treatment. But you need treatment FAST.",
                jinReaction: "'Together.' He grabs your hand. 'On three. One—' You both run on one. You always run on one."
            },
            {
                text: "You go. I will make sure your sacrifice means something.",
                result: "jin_sacrifice",
                consequence: "Jin takes the full dose. He gets the equipment. He starts to fade. 72 hours.",
                jinReaction: "He kisses you. Hard. Fast. 'No regrets. Whatever happens—no regrets.' Then he is gone, sprinting into the glow. He comes back. He always comes back. But this time, he is counting hours instead of days."
            }
        ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    // ENDINGS: REACTOR ZONE OUTCOMES
    // ─────────────────────────────────────────────────────────────────────────
    endings: {
        kori_triumph: {
            code: "GLOWW",
            name: "The Radiant Victory",
            tier: "triumph",
            hea: true,
            requirement: "Save all factions + get equipment + minimal radiation",
            content: `
                <p class="narrative date">ONE YEAR AFTER KORI</p>

                <p class="narrative">The reactor powers the settlement now. Clean energy. The first grid to come back online since the fall.</p>

                <p class="narrative">The Radborn live in the outer ring—too changed to integrate fully, but protected. Treated. The Vault Dwellers run the reactor, finally using their skills for something that matters.</p>

                <p class="narrative">The cure is synthesizing. Not fast enough—but it is coming. Because you walked into the fire and came back.</p>

                <p class="narrative">Jin is still irradiated. The dose he took is shortening his life. He does not talk about it.</p>

                <p class="dialogue">"Worth it," he says when you catch him looking at his hands, mapping the new scars. "Every second. Worth it."</p>

                <div class="ending hea-ending">
                    <div class="ending-number">TRIUMPH ENDING: THE RADIANT VICTORY</div>
                    <h2 class="ending-title">LIGHT FROM DARKNESS</h2>
                    <div class="ending-text">
                        <p>You walked into a reactor and came out with hope.</p>
                        <p>The settlement has power. The cure has a path. The changed are protected.</p>
                        <p>This is what happens when you do the impossible together.</p>
                    </div>
                </div>
            `
        },

        kori_pyrrhic: {
            code: "PYRHC",
            name: "The Pyrrhic Glow",
            tier: "loss",
            grim: true,
            content: `
                <p class="narrative date">THREE MONTHS AFTER KORI</p>

                <p class="narrative">The equipment works. The cure is synthesizing. The settlement has power.</p>

                <p class="narrative">Jin is dead.</p>

                <p class="narrative">The radiation took him on day 71. He spent his last two days making sure you knew how to finish what he started.</p>

                <p class="dialogue">"No regrets," he said at the end. "Remember? No regrets."</p>

                <p class="narrative">You have regrets. But you honor them by finishing the work.</p>

                <div class="ending grim-ending">
                    <div class="ending-number">LOSS ENDING: THE PYRRHIC GLOW</div>
                    <h2 class="ending-title">THE COST OF LIGHT</h2>
                    <div class="ending-text">
                        <p>Victory. But at what price?</p>
                        <p>He chose this. He chose you. He chose everyone.</p>
                        <p>Now you carry his choice forward.</p>
                    </div>
                </div>
            `
        },

        kori_enslavement: {
            code: "ENSLV",
            name: "The Collar",
            tier: "failure",
            grim: true,
            content: `
                <p class="narrative">The Clean Skins do not kill you. Death would be too easy.</p>

                <p class="narrative">Instead, you work. Hauling contaminated material. Cleaning the zones they have purified. Watching as they hunt the Radborn, one by one.</p>

                <p class="narrative">The collar around your neck beeps if you try to run. The radiation is slowly killing you anyway.</p>

                <p class="narrative">Jin escaped. Or died trying. You do not know which. You hope he is dead. It is better than imagining him in one of these collars.</p>

                <div class="ending grim-ending">
                    <div class="ending-number">FAILURE ENDING: THE COLLAR</div>
                    <h2 class="ending-title">ENSLAVED</h2>
                    <div class="ending-text">
                        <p>This is what happens when you choose safety over principle.</p>
                        <p>You are alive. That is the only victory left.</p>
                        <p>It does not feel like victory.</p>
                    </div>
                </div>
            `
        }
    }
};

// ═══════════════════════════════════════════════════════════════════════════
// MUTATED INFECTED - Reactor Zone Variants
// ═══════════════════════════════════════════════════════════════════════════

const MUTATED_INFECTED = {
    glowwalker: {
        name: "Glowwalker",
        description: "Standard infected that absorbed lethal radiation. Bioluminescent. Faster. More aggressive.",
        danger: "HIGH",
        weakness: "Cannot pursue into shielded areas—the radiation keeps them fed"
    },

    ravager: {
        name: "Ravager",
        description: "Massive mutant. Tumor growths used as armor. Shrugs off small arms fire.",
        danger: "EXTREME",
        weakness: "Slow. Blind in one eye. Tends to charge in straight lines."
    },

    spitter: {
        name: "Spitter",
        description: "Ranged infected. Vomits radioactive bile. Contact causes burns and accelerated radiation sickness.",
        danger: "HIGH",
        weakness: "Fragile. One good hit and they pop—messily."
    },

    hive_queen: {
        name: "The Hive Queen",
        description: "The first infected to enter the reactor. Now something else entirely. Commands the others. Intelligent.",
        danger: "APOCALYPTIC",
        weakness: "Unknown. No one who has faced her has survived to report."
    }
};

// ═══════════════════════════════════════════════════════════════════════════
// STARVATION MECHANICS - When Resources Run Out
// ═══════════════════════════════════════════════════════════════════════════

const STARVATION_SYSTEM = {
    stages: [
        { day: 1, name: "Hungry", effect: "Distracted. -1 to perception checks." },
        { day: 3, name: "Starving", effect: "Weak. -2 to all physical actions. Irritable. May snap at companions." },
        { day: 5, name: "Desperate", effect: "Willing to do things you would not normally do. Dark choices unlock." },
        { day: 7, name: "Dying", effect: "Cannot run. Cannot fight. Can only crawl toward hope—or give up." }
    ],

    dark_choices: [
        {
            situation: "You found food, but there is only enough for one.",
            choice: "Take it all. Let them starve.",
            consequence: "You live. They remember. Trust is broken forever."
        },
        {
            situation: "The raiders have supplies. They are sleeping.",
            choice: "Kill them in their sleep. Take everything.",
            consequence: "You eat. You stop being the person you were."
        },
        {
            situation: "There is meat. You do not ask where it came from.",
            choice: "Eat it anyway.",
            consequence: "Your body survives. Something else does not."
        }
    ]
};

// ═══════════════════════════════════════════════════════════════════════════
// INJURY SYSTEM - Wounds Compound
// ═══════════════════════════════════════════════════════════════════════════

const INJURY_SYSTEM = {
    types: [
        { name: "Minor", heal_days: 1, effect: "Hurts but functional." },
        { name: "Moderate", heal_days: 3, effect: "Slowed. Some actions impossible." },
        { name: "Severe", heal_days: 7, effect: "Bedridden without help. Infection risk." },
        { name: "Critical", heal_days: 14, effect: "Will die without surgery. Even then... maybe." }
    ],

    untreated_progression: "Every untreated moderate+ injury has a 20% chance per day to worsen. Infection sets in. Gangrene follows. Then amputation or death.",

    jin_response: {
        minor: "'Walk it off. You have had worse.' But he watches you more carefully.",
        moderate: "'Sit. Let me look.' His hands are surprisingly gentle for someone who has caused so much damage.",
        severe: "'Do not move. I have got you.' He carries you if he has to. Does not complain.",
        critical: "'Stay with me. STAY WITH ME.' The leopard is gone. Just the man. Terrified."
    }
};

// Merge into STORY_DATA if it exists
if (typeof STORY_DATA !== 'undefined') {
    Object.assign(STORY_DATA, KORI_REACTOR_ZONE);
    Object.assign(STORY_DATA, { MUTATED_INFECTED, STARVATION_SYSTEM, INJURY_SYSTEM });
}

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { KORI_REACTOR_ZONE, MUTATED_INFECTED, STARVATION_SYSTEM, INJURY_SYSTEM };
}

// ═══════════════════════════════════════════════════════════════════════════
// CHARACTER INTEGRATION - Hana, Minji, Seora
// The ride-or-dies. The villain. The horror.
// ═══════════════════════════════════════════════════════════════════════════

const CHARACTER_SCENES = {

    // ═══════════════════════════════════════════════════════════════
    // HANA INTRODUCTION - "The Chaos"
    // ═══════════════════════════════════════════════════════════════

    hana_meet: {
        id: "hana_meet",
        title: "THE CHAOS",
        thread: "companions",
        content: `
            <p class="narrative">The explosion comes from behind you. Not infected—too controlled. Too <em>intentional</em>.</p>

            <p class="narrative">When the smoke clears, there's a woman standing in the debris. Short. Covered in scars. One eye milky-white, the other burning with something that looks like joy.</p>

            <p class="narrative">She's holding a pipe bomb in each hand. Grinning like Christmas came early.</p>

            <p class="dialogue">"THAT'S what I'm fucking talking about!" She kicks an infected corpse. Laughs. Spits blood. "You know how long I waited for the world to end? Twenty-three YEARS of bullshit and finally—FINALLY—I get to blow shit up without paperwork!"</p>

            <p class="narrative">She notices you. The grin doesn't fade—it sharpens.</p>

            <p class="dialogue">"Oh. Survivors. Neat." She tosses you something—a knife. Good weight. Military issue. "You know how to use that, or are you the screaming type?"</p>

            <p class="narrative">Behind her, more infected are coming. She doesn't seem worried. She seems... excited.</p>

            <p class="dialogue">"I'm Hana. Former Kkangpae—that's gangster to you civilians. Currently? I'm the best fucking friend you're ever gonna have." She cracks her knuckles. "You in or you running?"</p>
        `,
        jinReaction: `
            <p class="narrative">Jin steps forward, hand on his weapon. "She's insane."</p>
            <p class="dialogue">"Yeah, and?" Hana grins at him. "Pretty boy thinks he's better because he kills quiet? Honey, I was stacking bodies when you were learning multiplication."</p>
            <p class="narrative">They stare at each other. Something passes between them—recognition. Two predators sizing each other up.</p>
            <p class="dialogue">"Fine," Jin says. "But you follow MY lead in combat."</p>
            <p class="dialogue">"Cute. You think you're in charge." Hana laughs. "I like him," she says to you. "He's delusional."</p>
        `,
        choices: [
            { text: "Stay with Hana. She's terrifying, but she's alive.", target: "hana_trust", flags: { hana_recruited: true } },
            { text: "Keep distance. She's too unpredictable.", target: "hana_wary", flags: { hana_wary: true } },
            { text: "Ask about the Kkangpae. What did she do before?", target: "hana_past" }
        ]
    },

    hana_trust: {
        id: "hana_trust",
        title: "THE CHAOS EMBRACED",
        content: `
            <p class="narrative">You grip the knife. Nod.</p>

            <p class="narrative">Hana's grin splits her face. For a moment, behind the scars and the bloodlust, you see something else. Something almost... grateful.</p>

            <p class="dialogue">"Smart choice. Most people run." She pulls out a machete that's seen better days—and worse ones. "Stick close. Kill what I point at. And if I tell you to run?"</p>

            <p class="narrative">She leans in. The joking is gone.</p>

            <p class="dialogue">"You fucking RUN. No looking back. No heroic bullshit. I don't die for people who die anyway. Understand?"</p>

            <p class="narrative">You understand. This is her version of care. Her version of loyalty. It's violent and crude and absolutely, utterly genuine.</p>

            <p class="dialogue">"Good." The grin returns. "Now let's go make some noise."</p>
        `,
        choices: [
            { text: "Fight alongside Hana.", target: "hana_combat" },
            { text: "Ask where she's heading.", target: "hana_destination" }
        ]
    },

    hana_past: {
        id: "hana_past",
        title: "BEFORE THE BLOOD",
        content: `
            <p class="narrative">Hana's face flickers. Just for a moment.</p>

            <p class="dialogue">"You really wanna know?" She's still killing—never stops killing—but her voice changes. "I ran collections. Protection. The usual." A pause. "And one time, I cut out a man's tongue because he talked to the wrong cop."</p>

            <p class="narrative">She looks at you directly.</p>

            <p class="dialogue">"I'm not a good person. Never was. Never will be. But you know what I am?" She gestures at the apocalypse around you. "Honest. Every piece of shit thing I've done? I did it looking people in the eye."</p>

            <p class="dialogue">"That's more than most saints can say."</p>

            <p class="narrative">She spits blood again. Grins.</p>

            <p class="dialogue">"Still want my help?"</p>
        `,
        lesson: "Loyalty doesn't mean being the same. Real friends can be completely different and still die for you.",
        choices: [
            { text: "Yes. Honest monsters over polite snakes.", target: "hana_trust", flags: { hana_recruited: true, hana_history_known: true } },
            { text: "I need to think about this.", target: "hana_wary" }
        ]
    },

    // ═══════════════════════════════════════════════════════════════
    // MINJI INTRODUCTION - "The Stillness"
    // ═══════════════════════════════════════════════════════════════

    minji_meet: {
        id: "minji_meet",
        title: "THE STILLNESS",
        thread: "companions",
        content: `
            <p class="narrative">You almost don't see her.</p>

            <p class="narrative">She's standing in the shadows of the performance hall, still as a statue. Around her, three infected lie dead. No blood spray. No struggle. Just... still.</p>

            <p class="narrative">She's wearing torn ballet slippers. A tutu stained brown. In her hands, two knives—held like extensions of her arms.</p>

            <p class="narrative">She doesn't speak. Doesn't blink. Just watches you with eyes that have seen something worse than the end of the world.</p>

            <p class="narrative">One of the infected behind you twitches. You didn't even see her move—but suddenly she's there, blade sliding through its skull like butter. Silent. Perfect.</p>

            <p class="narrative">She returns to her position. Watches you again.</p>

            <p class="narrative">Waiting.</p>
        `,
        jinReaction: `
            <p class="narrative">Jin goes very still. Not afraid—respectful.</p>
            <p class="dialogue">"National Ballet?" he asks quietly.</p>
            <p class="narrative">The slightest nod.</p>
            <p class="dialogue">"I saw you dance. Three years ago. Giselle." He pauses. "You were the best thing I've ever seen."</p>
            <p class="narrative">Something flickers in her eyes. Pain. Memory. Loss.</p>
            <p class="narrative">She inclines her head. The closest thing to acknowledgment she gives.</p>
        `,
        choices: [
            { text: "Bow slightly. Show respect.", target: "minji_respect", flags: { minji_recruited: true } },
            { text: "Say nothing. Let silence speak.", target: "minji_silence", flags: { minji_recruited: true } },
            { text: "Ask her name.", target: "minji_speak" }
        ]
    },

    minji_respect: {
        id: "minji_respect",
        title: "THE STILLNESS ACKNOWLEDGED",
        content: `
            <p class="narrative">You bow. Small. Respectful. The way you'd bow to an artist, not a warrior.</p>

            <p class="narrative">Something shifts in her posture. The predator relaxes—just slightly. She returns the bow. Perfect form. A lifetime of discipline in one motion.</p>

            <p class="narrative">Then she turns and walks deeper into the building. Pauses. Looks back at you once.</p>

            <p class="narrative">An invitation.</p>

            <p class="narrative">She never says a word. But somehow, you understand: she'll watch your back. She'll keep you alive. And she'll do it without ever needing to hear "thank you."</p>

            <p class="narrative">Some people speak in words. Minji speaks in survival.</p>
        `,
        lesson: "Actions speak louder than words. Watch what people do, not what they say.",
        choices: [
            { text: "Follow her.", target: "minji_follow" },
            { text: "Introduce Jin and the others.", target: "minji_group" }
        ]
    },

    minji_silence: {
        id: "minji_silence",
        title: "UNDERSTANDING",
        content: `
            <p class="narrative">You say nothing. Stand still. Match her silence with your own.</p>

            <p class="narrative">Seconds pass. A minute. The infected could come at any moment, but neither of you moves.</p>

            <p class="narrative">Then—the ghost of a smile. So small you might have imagined it.</p>

            <p class="narrative">She nods. Once. Turns and walks.</p>

            <p class="narrative">You follow. No words needed. No explanations demanded.</p>

            <p class="narrative">She speaks in actions. And her action says: <em>you're worth protecting.</em></p>
        `,
        choices: [
            { text: "Move with her through the building.", target: "minji_follow" }
        ]
    },

    minji_speaks: {
        id: "minji_speaks",
        title: "RARE WORDS",
        thread: "companions",
        requirement: "minji_recruited AND trust > 80 AND critical_moment",
        content: `
            <p class="narrative">Minji touches your arm. You freeze—she never touches anyone.</p>

            <p class="narrative">Her lips move. A voice like rust on silk, unused for so long it hurts to hear.</p>

            <p class="dialogue">"They were dancing."</p>

            <p class="narrative">You wait.</p>

            <p class="dialogue">"When it started. Opening night. Sleeping Beauty. I was Aurora." Her eyes are far away. "The screaming started in the audience. But we kept dancing. Because that's what we do. We perform. We pretend everything is beautiful while the world burns."</p>

            <p class="narrative">She looks at her hands. The same hands that create art. The same hands that kill.</p>

            <p class="dialogue">"I danced alone for an hour. On a stage of corpses. Finishing the show for an audience of the dead."</p>

            <p class="narrative">She meets your eyes.</p>

            <p class="dialogue">"You don't have to speak to me. But you should know: I will never stop dancing. Even when everything ends. That's what I am."</p>

            <p class="narrative">She releases your arm. Returns to silence.</p>

            <p class="narrative">But now you understand her. Completely.</p>
        `,
        choices: [
            { text: "Squeeze her hand. No words needed.", target: "minji_bond" },
            { text: "\"I'll make sure you get to dance again.\"", target: "minji_promise" }
        ]
    },

    // ═══════════════════════════════════════════════════════════════
    // SEORA INTRODUCTION - "The Collector"
    // ═══════════════════════════════════════════════════════════════

    seora_reveal: {
        id: "seora_reveal",
        title: "THE COLLECTOR",
        thread: "villain",
        content: `
            <p class="narrative">The compound is beautiful. Pristine. Untouched by the apocalypse—a bubble of the old world preserved in glass and steel.</p>

            <p class="narrative">And in the center: cases. Dozens of them. Glass boxes big enough to hold a person.</p>

            <p class="narrative">Some of them ARE holding people.</p>

            <p class="narrative">They're alive. Dressed. Fed. Eyes empty. Like dolls on a shelf.</p>

            <p class="dialogue">"Welcome."</p>

            <p class="narrative">She steps out of the shadows. Elegant. Serene. A woman who looks like she's never raised her voice in her life. Cream silk blouse. Not a hair out of place.</p>

            <p class="dialogue">"I'm Seora. This is my collection." She gestures at the glass boxes. "Beautiful, aren't they? Everyone here is special. Unique. Worth preserving."</p>

            <p class="narrative">She steps closer. Studies your face.</p>

            <p class="dialogue">"You're different. I knew it the moment I saw you. The way you move. The way you survive." She smiles. "I don't want to hurt you. I want to keep you safe. Forever."</p>

            <p class="narrative">She gestures to an empty case.</p>

            <p class="dialogue">"This one's been waiting for someone like you."</p>
        `,
        seesJin: `
            <p class="narrative">Then she sees Jin.</p>

            <p class="narrative">Everything changes. The calm shatters. For one moment—one terrible moment—you see what's underneath.</p>

            <p class="dialogue">"You."</p>

            <p class="narrative">Her voice is ice. Jin goes pale.</p>

            <p class="dialogue">"Hello, Seora."</p>

            <p class="dialogue">"You were MINE." She's trembling now. "My favorite. My most precious. And you LEFT. You BROKE OUT. And now..." She looks at you. Understanding dawns—and with it, rage. "Now I know why."</p>

            <p class="dialogue">"You found someone else."</p>
        `,
        choices: [
            { text: "Run. NOW.", target: "seora_escape" },
            { text: "\"Let the people go. All of them.\"", target: "seora_confront" },
            { text: "Ask Jin what happened between them.", target: "seora_history" }
        ]
    },

    seora_history: {
        id: "seora_history",
        title: "THE FAVORITE",
        content: `
            <p class="narrative">Jin's jaw tightens.</p>

            <p class="dialogue">"I was... collecting supplies. Early days. Got caught by her people." He doesn't look at Seora. "She didn't want to hurt me. Just... keep me. Like a pet. Like a trophy."</p>

            <p class="narrative">Seora smiles. Cold. Beautiful.</p>

            <p class="dialogue">"He was perfect. Strong but broken. Fighting but desperate. I gave him everything—safety, food, purpose. All he had to do was stay."</p>

            <p class="dialogue">"You put me in a fucking cage," Jin says.</p>

            <p class="dialogue">"A beautiful cage. With silk sheets and warm food and no infected trying to eat you." She touches her own cheek, dreamy. "You were so beautiful when you slept. Before you ruined everything."</p>

            <p class="narrative">She looks at you. The dreaminess turns sharp.</p>

            <p class="dialogue">"YOU ruined everything. You came for him. Broke my locks. Took my favorite." She steps forward. "Do you know how long I searched? How many people I killed looking for you both?"</p>

            <p class="narrative">She smiles again. Wrong. Broken.</p>

            <p class="dialogue">"But now you're here. Both of you. Together." She claps her hands. "It's like a gift."</p>
        `,
        choices: [
            { text: "\"You'll never cage either of us again.\"", target: "seora_fight", flags: { seora_confronted: true } },
            { text: "Look for weaknesses. Play along.", target: "seora_deceive" },
            { text: "Try to reason with her.", target: "seora_talk" }
        ]
    },

    seora_fight: {
        id: "seora_fight",
        title: "BREAKING THE COLLECTION",
        thread: "villain",
        content: `
            <p class="narrative">Seora's smile doesn't fade. It grows.</p>

            <p class="dialogue">"Oh, I hoped you'd say that." She snaps her fingers.</p>

            <p class="narrative">The doors open. Her people flood in. The Smiler—a man whose face is stuck in a permanent grin, eyes dead as stones. Joon—military precision, no emotion. And behind them, the Hounds. The Dolls. The Teeth.</p>

            <p class="dialogue">"Break them," Seora says calmly. "But don't kill them. I want them alive. I want them to understand."</p>

            <p class="narrative">Jin draws his weapon. Hana laughs somewhere behind you. Minji melts into the shadows.</p>

            <p class="narrative">This is it. The fight you've been running from since you escaped the first time.</p>

            <p class="narrative">This time, there's no sneaking out. This time, you finish it.</p>
        `,
        choices: [
            { text: "Target Seora directly. End the head.", target: "seora_assassination" },
            { text: "Free the people in the cases. Chaos is your ally.", target: "seora_liberation" },
            { text: "Retreat strategically. Fight another day.", target: "seora_retreat" }
        ]
    },

    // ═══════════════════════════════════════════════════════════════
    // HORROR SCENES - Integrated from 5D Model
    // ═══════════════════════════════════════════════════════════════

    horror_the_gift: {
        id: "horror_the_gift",
        title: "THE COAT",
        thread: "horror",
        content: `
            <p class="narrative">The survivor gives you a coat. Warm. Well-made. Smells faintly of lavender.</p>

            <p class="dialogue">"My daughter made it," he says, smiling. "Before everything. She was so talented."</p>

            <p class="narrative">You wear it through the cold nights. It saves your life more than once. You think of his daughter, somewhere safe, talented and kind.</p>

            <p class="narrative">Later—much later—you find the workshop. The tanning racks. The small bones.</p>

            <p class="narrative">The coat is leather. Soft. Hand-stitched.</p>

            <p class="narrative">His daughter didn't make the coat.</p>

            <p class="narrative">His daughter IS the coat.</p>

            <p class="narrative">You're wearing her.</p>
        `,
        horror_note: "Retroactive horror. The kindness was real. The gift was real. And now you can never unknow what it cost.",
        choices: [
            { text: "Burn the coat. Burn everything.", target: "horror_aftermath" },
            { text: "Say nothing. Keep wearing it. Survive.", target: "horror_complicity" }
        ]
    },

    horror_the_nursery: {
        id: "horror_the_nursery",
        title: "THE NURSERY",
        thread: "horror",
        content: `
            <p class="narrative">The crying leads you to the nursery.</p>

            <p class="narrative">A baby. Alive. Reaching for you with tiny hands. You pick it up, and it stops crying. Nestles against your chest. Perfect. Innocent.</p>

            <p class="narrative">The bite mark on its ankle is small. Fresh.</p>

            <p class="narrative">You have maybe three hours before the infection takes hold. Three hours where this baby is still a baby. Still innocent. Still savable.</p>

            <p class="narrative">There is no cure.</p>

            <p class="narrative">It looks up at you. Smiles. Reaches for your face.</p>

            <p class="narrative">What do you do with three hours and an ending you can't change?</p>
        `,
        horror_note: "The corruption of innocence. No monsters here—just the universe's indifference to suffering.",
        choices: [
            { text: "Stay with it. Hold it. Love it until the end.", target: "nursery_mercy" },
            { text: "Make it quick. Before it knows what's happening.", target: "nursery_end" },
            { text: "Leave it. You can't carry this weight.", target: "nursery_abandon" }
        ]
    },

    horror_the_meal: {
        id: "horror_the_meal",
        title: "THE HOSPITALITY",
        thread: "horror",
        content: `
            <p class="narrative">They're so welcoming. The first real hospitality since the outbreak. Hot food. Clean beds. Laughter around the fire.</p>

            <p class="dialogue">"Eat! Eat! You're too thin!" The grandmother piles meat on your plate. "Fresh. We have a farm."</p>

            <p class="narrative">It's the best meal you've had in months. Rich. Tender. You eat until you're full for the first time in forever.</p>

            <p class="narrative">Later, you find the farm.</p>

            <p class="narrative">There are no animals.</p>

            <p class="narrative">Just cages. And a pile of clothes that look familiar. That look like the group that was traveling ahead of you. The ones who disappeared.</p>

            <p class="narrative">Your stomach churns. The meal rises.</p>

            <p class="narrative">You ate them. You ATE THEM.</p>

            <p class="narrative">And the grandmother is smiling at you through the window, already preparing tomorrow's breakfast.</p>
        `,
        horror_note: "The sanctuary betrayal. They were kind because you're the next ingredient.",
        choices: [
            { text: "Escape. Burn it down behind you.", target: "meal_escape" },
            { text: "Free whoever's left in those cages.", target: "meal_rescue" },
            { text: "You can't. You can't move. You can't think.", target: "meal_paralysis" }
        ]
    },

    horror_the_mirror: {
        id: "horror_the_mirror",
        title: "THE REFLECTION",
        thread: "horror",
        requirement: "player has been bitten but hasn't told anyone",
        content: `
            <p class="narrative">The bite is three days old. You've hidden it well. Bandages. Excuses. Careful positioning.</p>

            <p class="narrative">But in the mirror, you see what's coming.</p>

            <p class="narrative">The veins around the wound are black now. Spreading. Your skin is waxy. Your appetite is... changing.</p>

            <p class="narrative">Yesterday, you caught yourself staring at Hana's exposed neck. Not in anger. In hunger.</p>

            <p class="narrative">You have maybe a day. Maybe two. Before you stop being you and start being... them.</p>

            <p class="narrative">Jin is sleeping in the next room. Trusting you. Loving you.</p>

            <p class="narrative">What do you do with the time you have left?</p>
        `,
        horror_note: "The body horror of becoming the threat. You are the monster now.",
        choices: [
            { text: "Tell them. Face it together.", target: "mirror_confess" },
            { text: "Leave quietly. Die alone so they don't have to watch.", target: "mirror_leave" },
            { text: "Say nothing. Pretend. Hope for a miracle.", target: "mirror_denial" }
        ]
    },

    horror_the_smile: {
        id: "horror_the_smile",
        title: "WRONG",
        thread: "horror",
        jinScene: true,
        content: `
            <p class="narrative">Jin is smiling at you across the fire.</p>

            <p class="narrative">It's the same smile you fell in love with. The crooked one. The one that makes your chest tight.</p>

            <p class="narrative">But something is wrong.</p>

            <p class="narrative">His eyes aren't tracking right. The smile doesn't reach them. When he moves, it's too smooth—no hesitation, no adjustment. Like a puppet on strings.</p>

            <p class="dialogue">"Come here," he says. His voice is perfect. His tone is perfect. "I want to hold you."</p>

            <p class="narrative">Everyone else is asleep. It's just you and Jin and the crackling fire and the terrible certainty growing in your stomach.</p>

            <p class="narrative">He's still smiling. Still reaching for you.</p>

            <p class="narrative">When did you last see him blink?</p>
        `,
        horror_note: "The intimate imposter. The person you love is gone, but the shell keeps performing.",
        choices: [
            { text: "\"What's my favorite song, Jin?\" Test him.", target: "smile_test" },
            { text: "Run. Don't look back.", target: "smile_run" },
            { text: "Go to him. Hope you're wrong.", target: "smile_trust" }
        ]
    },

    // ═══════════════════════════════════════════════════════════════
    // PLAYER BACKSTORY - The Escape from Seora
    // ═══════════════════════════════════════════════════════════════

    backstory_the_box: {
        id: "backstory_the_box",
        title: "BEFORE YOU WERE FREE",
        thread: "backstory",
        content: `
            <p class="narrative">You don't remember much from before the glass box.</p>

            <p class="narrative">Seora found you in the early days. Brought you to her collection. Fed you. Clothed you. Put you behind the glass where nothing could hurt you.</p>

            <p class="narrative">Where nothing could reach you.</p>

            <p class="narrative">You learned to be still. To be perfect. To be exactly what she wanted—a beautiful thing, preserved, eternal.</p>

            <p class="narrative">Then they brought in a new acquisition. A soldier with dead eyes and hands that shook. They put him in the case next to yours.</p>

            <p class="narrative">Jin.</p>

            <p class="narrative">He was different from the others. He never stopped fighting. Never stopped planning. Never stopped looking for a way out.</p>

            <p class="narrative">And one night, he started talking to you. Tapping on the glass. Morse code he taught you letter by letter.</p>

            <p class="narrative">He had a plan. He needed help. He needed YOU.</p>
        `,
        choices: [
            { text: "Remember the escape.", target: "backstory_escape" },
            { text: "Remember what came before Seora.", target: "backstory_before" }
        ]
    },

    backstory_escape: {
        id: "backstory_escape",
        title: "THE NIGHT YOU RAN",
        content: `
            <p class="narrative">The night of the escape, you couldn't breathe.</p>

            <p class="narrative">Jin had found a weakness in the locks. Three weeks of planning. Signals. Timing. And then—action.</p>

            <p class="narrative">You remember the glass shattering. The alarms. Seora's scream—not angry, but wounded. Betrayed. Like a child whose favorite toy had learned to walk away.</p>

            <p class="narrative">You remember Jin's hand in yours, pulling you through corridors you'd only seen through glass. Guards falling. Doors opening that should have stayed closed.</p>

            <p class="narrative">You remember the moment you stepped outside. Felt air on your face. Real air. Moving air. Not the recycled stillness of the collection.</p>

            <p class="narrative">You cried. Jin didn't let go of your hand.</p>

            <p class="dialogue">"We're not free yet," he said. "But we will be. I promise."</p>

            <p class="narrative">He kept that promise. Every day since then—running, fighting, surviving—he's kept that promise.</p>

            <p class="narrative">And Seora has been hunting you ever since.</p>
        `,
        choices: [
            { text: "That's why you fight. That's why you survive.", target: "backstory_resolve" },
            { text: "You'll kill Seora. Someday. For all of it.", target: "backstory_revenge" }
        ]
    }
};

// ═══════════════════════════════════════════════════════════════════════════
// COGNITIVE LAYER INTEGRATION - Puzzles and Riddles in Story
// ═══════════════════════════════════════════════════════════════════════════

const COGNITIVE_STORY_ELEMENTS = {

    // Research Required - Player must look something up
    research_chemical: {
        id: "research_chemical",
        title: "THE FORMULA",
        thread: "cognitive",
        content: `
            <p class="narrative">The scientist's last note is scrawled on the wall in blood:</p>

            <p class="blood-writing">"CAS 7732-18-5 + CAS 7647-01-0 = freedom from flesh"</p>

            <p class="narrative">Below it, a locked door. A keypad. Three digits.</p>

            <p class="narrative">The chemicals are labeled on the shelf. H₂O. HCl. Something else.</p>

            <p class="narrative">You have the feeling that the answer is somewhere. If you knew where to look.</p>
        `,
        hint: "CAS numbers are chemical identifiers. The code is hidden in what they make together.",
        solution: "Water + Hydrochloric acid = understanding you need to RUN",
        choices: [
            { text: "[Enter 182] - Sum of water's CAS digits", target: "research_wrong" },
            { text: "[Enter 911] - Emergency", target: "research_unlock", flags: { street_smarts: true } },
            { text: "[Research the CAS numbers] - Take time to understand", target: "research_success", flags: { researcher: true } }
        ]
    },

    // Riddle - Requires lateral thinking
    riddle_door: {
        id: "riddle_door",
        title: "THE SPEAKING DOOR",
        thread: "cognitive",
        content: `
            <p class="narrative">The door has a face. The face speaks.</p>

            <p class="riddle">"I have cities, but no houses live.<br>
            I have mountains, but no trees climb.<br>
            I have water, but no fish swim.<br>
            What am I?"</p>

            <p class="narrative">Behind you, the infected are getting closer. You have maybe thirty seconds.</p>
        `,
        choices: [
            { text: "\"A map.\"", target: "riddle_correct", flags: { puzzle_solver: true } },
            { text: "\"A painting.\"", target: "riddle_close" },
            { text: "\"A dream.\"", target: "riddle_wrong" },
            { text: "Force the door open.", target: "riddle_force" }
        ]
    },

    // Luck + Preparation
    luck_gamble: {
        id: "luck_gamble",
        title: "THE ODDS",
        thread: "cognitive",
        content: `
            <p class="narrative">Two paths. No time to scout both.</p>

            <p class="narrative">Left: darker, narrower, but you heard water that way.</p>
            <p class="narrative">Right: brighter, wider, but the smell of rot is stronger.</p>

            <p class="narrative">Hana shrugs. "Coin flip?"</p>
            <p class="narrative">Minji is already studying the floor. The dust patterns. The footprints.</p>

            <p class="narrative">Jin looks at you. "Your call."</p>
        `,
        choices: [
            { text: "Left. Water means life.", target: "luck_water", luck_modifier: 0.6 },
            { text: "Right. Follow the obvious path.", target: "luck_rot", luck_modifier: 0.3 },
            { text: "Wait. Watch where Minji's looking.", target: "luck_observe", flags: { pattern_reader: true } },
            { text: "Ask Hana about gangster instincts.", target: "luck_street" }
        ]
    },

    // Meta-awareness reward
    meta_fourth_wall: {
        id: "meta_fourth_wall",
        title: "THE FEELING",
        thread: "cognitive",
        content: `
            <p class="narrative">You stop walking.</p>

            <p class="narrative">Something is... off. Not wrong, exactly. Just off. Like you've done this before. Like someone is watching. Like this moment matters more than it should.</p>

            <p class="narrative">Jin looks back. "What's wrong?"</p>

            <p class="narrative">You don't know how to explain it. The sense that your choices aren't just survival—they're something more. A test. A lesson. A story being written in real-time.</p>

            <p class="narrative">But that's crazy. Right?</p>
        `,
        choices: [
            { text: "\"Do you ever feel like we're not... alone? Like someone's watching?\"", target: "meta_acknowledge", flags: { meta_aware: true }, special: "fourth_wall_crack" },
            { text: "Shake it off. Focus on survival.", target: "meta_dismiss" },
            { text: "Say nothing. But remember this feeling.", target: "meta_remember", flags: { quiet_observer: true } }
        ]
    }
};

// Merge into STORY_DATA
if (typeof STORY_DATA !== 'undefined') {
    Object.assign(STORY_DATA, CHARACTER_SCENES);
    Object.assign(STORY_DATA, COGNITIVE_STORY_ELEMENTS);
}

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CHARACTER_SCENES, COGNITIVE_STORY_ELEMENTS };
}
