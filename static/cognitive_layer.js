// ═══════════════════════════════════════════════════════════════════════════
// COGNITIVE LAYER - Opening the Aperture
// ═══════════════════════════════════════════════════════════════════════════
// Not teaching. Opening.
// Most people leave their lens caps on.
// This shows what's visible when you actually look.
//
// The shutter: how long you let information in
// The lens: what you focus on, how close
// The tripod: your foundation, your stability
// The direction: where you point your attention
//
// The game doesn't preach. It just creates a world where
// seeing patterns helps, and not seeing hurts.
// The rest happens naturally.
// ═══════════════════════════════════════════════════════════════════════════

const CognitiveLayer = {

    // ═══════════════════════════════════════════════════════════════════════
    // RETROACTIVE HORROR - Actions that turn out Ed Gein level
    // ═══════════════════════════════════════════════════════════════════════

    retroactiveHorror: {

        // The player does something that seems fine... then learns the truth
        scenarios: [
            {
                id: "the_gift",
                setup: {
                    title: "THE KINDNESS",
                    content: `
                        <p class="narrative">The old man gives you a coat. Warm. Well-made.</p>
                        <p class="dialogue">"My daughter's. She... doesn't need it anymore."</p>
                        <p class="narrative">You thank him. The coat fits perfectly.</p>
                    `,
                    choice: "Accept the coat gratefully."
                },
                revelation: {
                    title: "THE COAT",
                    content: `
                        <p class="narrative">Three days later, you find the basement.</p>
                        <p class="narrative">His daughter is there. What's left of her.</p>
                        <p class="narrative">The coat. You check the coat. Inside, stitched carefully:</p>
                        <p class="narrative">"Made with love."</p>
                        <p class="narrative">Not leather. Never was.</p>
                        <p class="narrative">You've been wearing her.</p>
                    `,
                    playerRealization: "You accepted something beautiful made from horror."
                },
                lesson: "Gifts have origins. Question them."
            },
            {
                id: "the_water",
                setup: {
                    title: "THE WELL",
                    content: `
                        <p class="narrative">Fresh water. The settlement has a well.</p>
                        <p class="narrative">You drink deep. Everyone does. First clean water in weeks.</p>
                    `,
                    choice: "Drink. Rest. Recover."
                },
                revelation: {
                    title: "THE SOURCE",
                    content: `
                        <p class="narrative">The well is fed by groundwater.</p>
                        <p class="narrative">Groundwater from the pit. The mass grave.</p>
                        <p class="narrative">They've been drinking the dead for months.</p>
                        <p class="narrative">So have you now.</p>
                    `,
                    playerRealization: "You didn't ask where it came from."
                },
                lesson: "Trace things to their source."
            },
            {
                id: "the_medicine",
                setup: {
                    title: "THE CURE",
                    content: `
                        <p class="narrative">Jin's fever breaks. The medicine worked.</p>
                        <p class="dialogue">"Where did you get this?" he asks.</p>
                        <p class="narrative">"The doctor. The one in the subway."</p>
                        <p class="narrative">He smiles weakly. "You saved my life."</p>
                    `,
                    choice: "Hold him. He's going to be okay."
                },
                revelation: {
                    title: "THE INGREDIENTS",
                    content: `
                        <p class="narrative">The doctor's notes. Found months later.</p>
                        <p class="narrative">The "medicine" required fresh ingredients.</p>
                        <p class="narrative">Bone marrow. Spinal fluid. From living donors.</p>
                        <p class="narrative">She was very specific about freshness.</p>
                        <p class="narrative">You remember the cages in her back room.</p>
                        <p class="narrative">You didn't ask what they were for.</p>
                    `,
                    playerRealization: "Jin lives because someone else died for that medicine."
                },
                lesson: "Miracles have costs. Know what you're paying."
            }
        ]
    },

    // ═══════════════════════════════════════════════════════════════════════
    // AGENCY SURRENDER - Trusting others publicly
    // ═══════════════════════════════════════════════════════════════════════

    agencySurrender: {

        // Moments where you have to give control to someone else
        scenarios: [
            {
                id: "jin_decides",
                situation: "Two paths. One safe, one fast. Jin knows which.",
                choice: {
                    surrender: "Let Jin choose. In front of everyone.",
                    keep: "Make the call yourself.",
                },
                publicWitnesses: ["Hana", "Minji", "Survivors"],
                outcome: {
                    surrender: "He chooses right. You trusted. The group sees you trust.",
                    keep: "You might be wrong. But it's your mistake to make."
                },
                lesson: "Sometimes the strongest move is letting someone else lead."
            },
            {
                id: "hana_fight",
                situation: "Hana says she can take them. All of them. You don't think so.",
                choice: {
                    surrender: "Believe her. Let her go.",
                    keep: "Hold her back. Find another way."
                },
                publicWitnesses: ["Jin", "Minji", "The Enemy"],
                outcome: {
                    surrender: "She does it. She was right. She needed you to believe.",
                    keep: "She resents you. Maybe you saved her. Maybe you insulted her."
                },
                lesson: "Trust isn't just feeling. It's action. In front of witnesses."
            },
            {
                id: "minji_silence",
                situation: "Minji shakes her head. No words. Just no.",
                choice: {
                    surrender: "Stop. Even though you don't know why.",
                    keep: "Keep going. She needs to explain."
                },
                publicWitnesses: ["Jin", "Hana"],
                outcome: {
                    surrender: "The trap was three steps ahead. She saw it.",
                    keep: "The trap takes you. She couldn't explain in time."
                },
                lesson: "Sometimes trust means obeying without understanding."
            }
        ]
    },

    // ═══════════════════════════════════════════════════════════════════════
    // LUCK / RNG - Sometimes you just have to be lucky
    // ═══════════════════════════════════════════════════════════════════════

    luckElements: {

        // Some things can't be controlled. Preparation helps.
        scenarios: [
            {
                id: "the_door",
                situation: "Three doors. One is safe. No way to know.",
                canPrepare: true,
                preparation: "Listen. Watch. Look for signs.",
                baseOdds: 0.33,
                preparedOdds: 0.66,
                luck: "Pure chance for the rest."
            },
            {
                id: "the_scavenge",
                situation: "Searching for supplies. What you find is random.",
                canPrepare: true,
                preparation: "Know what to look for. Check hidden spots.",
                baseOdds: "Random loot table",
                preparedOdds: "Better loot table",
                luck: "The exact item? Still chance."
            },
            {
                id: "the_encounter",
                situation: "Who you meet on the road.",
                canPrepare: false,
                preparation: "None. Some things just happen.",
                luck: "Pure random. Friend or enemy. Salvation or death."
            }
        ],

        philosophy: `"Luck favors the prepared. But only so far.
                     The universe doesn't care about your plans.
                     Know when to prepare and when to pray."`
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STREET SMARTS - Practical intelligence tests
    // ═══════════════════════════════════════════════════════════════════════

    streetSmarts: {

        tests: [
            {
                id: "the_deal",
                scenario: "Trader offers too-good rates. Why?",
                smartMove: "Check for backup. Check the exits. Check what he's REALLY selling.",
                dumbMove: "Take the deal. A bargain is a bargain.",
                consequence: "The deal was bait. His friends were waiting."
            },
            {
                id: "the_shortcut",
                scenario: "They say the tunnel is faster. Much faster.",
                smartMove: "Why isn't everyone using it? What do they know?",
                dumbMove: "Faster is better. Time matters.",
                consequence: "The tunnel is faster. It's also why no one comes back."
            },
            {
                id: "the_help",
                scenario: "Someone is screaming. Sounds real. Sounds desperate.",
                smartMove: "Real or bait? How convenient is this? Who benefits?",
                dumbMove: "Someone needs help. I have to help.",
                consequence: "The scream was real. The thirty people waiting weren't rescue."
            },
            {
                id: "the_friend",
                scenario: "New person joins the group. Too helpful. Too friendly.",
                smartMove: "What do they want? No one is this nice for free.",
                dumbMove: "Finally, someone good. Trust them.",
                consequence: "They were Seora's. Mapping your defenses."
            }
        ],

        principle: "If something seems too good, it is. If something seems too convenient, it's a trap. Trust your gut."
    },

    // ═══════════════════════════════════════════════════════════════════════
    // RESEARCH REQUIREMENTS - Look shit up
    // ═══════════════════════════════════════════════════════════════════════

    researchElements: {

        // Things the player needs to actually look up
        puzzles: [
            {
                id: "the_frequency",
                clue: "The radio plays numbers. 127.3. 42. 88.7. 16.",
                answer: "Radio frequencies for emergency bands. Location coordinates.",
                howToSolve: "Look up emergency broadcast frequencies. Cross-reference.",
                reward: "Find the real safehouse."
            },
            {
                id: "the_medicine_code",
                clue: "The bottle says 'CAS 57-27-2'",
                answer: "Chemical Abstract Service number for morphine.",
                howToSolve: "Google the CAS number. Know what you're taking.",
                reward: "Realize it's a trap - the bottle is mislabeled."
            },
            {
                id: "the_military_sign",
                clue: "Painted symbol: circle with three lines through it.",
                answer: "CBRN warning - Chemical/Biological/Radiological/Nuclear hazard.",
                howToSolve: "Look up military warning symbols.",
                reward: "Don't enter the death zone."
            },
            {
                id: "the_coordinates",
                clue: "37.5665° N, 126.9780° E",
                answer: "Seoul, South Korea - city center.",
                howToSolve: "Enter coordinates in maps.",
                reward: "Understand where you are. Plan routes."
            }
        ],

        meta: "Some answers aren't in the game. They're in the world. Learn to find them."
    },

    // ═══════════════════════════════════════════════════════════════════════
    // PUZZLES AND RIDDLES
    // ═══════════════════════════════════════════════════════════════════════

    puzzles: {

        environmental: [
            {
                id: "the_safe",
                puzzle: "Safe in the pharmacy. Combination lock.",
                clues: [
                    "Photo of a child on the desk. Birthday cake with candles.",
                    "Diploma on wall. Graduation year visible.",
                    "Anniversary card in drawer. Number of years."
                ],
                solution: "Child's age + graduation year + anniversary years = combo",
                hint: "The owner used dates that mattered. Look around."
            },
            {
                id: "the_door_sequence",
                puzzle: "Bunker door. Five buttons. Wrong order = lockout.",
                clues: [
                    "Fingerprints on three buttons only.",
                    "One button more worn than others.",
                    "Note: 'Start with heart, end with home.'"
                ],
                solution: "Read the wear patterns. Heart button first, home button last.",
                hint: "People leave traces. Bodies remember patterns."
            }
        ],

        riddles: [
            {
                id: "the_gatekeeper",
                riddle: "I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I?",
                answer: "A map.",
                context: "Old man guards a route. Answers riddles or death.",
                reward: "He lets you pass. Gives you an actual map."
            },
            {
                id: "the_password",
                riddle: "The more you take, the more you leave behind. What am I?",
                answer: "Footsteps.",
                context: "Hana's old gang safehouse. Code phrase for entry.",
                reward: "Access to gang cache."
            },
            {
                id: "seora_game",
                riddle: "I can be cracked, made, told, and played. What am I?",
                answer: "A joke.",
                context: "Seora plays games with prisoners. Win and live longer.",
                reward: "She finds you 'interesting.' Buys time."
            }
        ]
    },

    // ═══════════════════════════════════════════════════════════════════════
    // META-AWARENESS - Knowing you're in a game
    // ═══════════════════════════════════════════════════════════════════════

    metaAwareness: {

        rewards: [
            {
                trigger: "Player notices UI element is a clue",
                example: "The section number '127' matches the radio frequency.",
                reward: "Secret path unlocks."
            },
            {
                trigger: "Player recognizes pattern across multiple playthroughs",
                example: "Every time Minji shakes her head, something bad is 3 choices away.",
                reward: "Learning to read Minji = survival advantage."
            },
            {
                trigger: "Player uses game mechanics as information",
                example: "The 'save' option disappears before certain choices. Those matter most.",
                reward: "Understanding the weight of irreversible decisions."
            }
        ],

        fourthWallMoments: [
            {
                id: "the_dreamer",
                content: `
                    <p class="narrative">You dream of playing yourself. From above.</p>
                    <p class="narrative">Making choices for someone who looks like you.</p>
                    <p class="narrative">You wonder if someone is playing you now.</p>
                    <p class="narrative whisper">They are.</p>
                `
            },
            {
                id: "the_reset",
                content: `
                    <p class="narrative">Jin pauses. Looks at you strangely.</p>
                    <p class="dialogue">"Have we done this before?"</p>
                    <p class="narrative">You don't answer. But you remember. The last run. The different choices.</p>
                    <p class="dialogue">"I feel like I've died before. Like I've loved you before. Like this isn't the first time."</p>
                    <p class="narrative">It isn't.</p>
                `
            }
        ]
    },

    // ═══════════════════════════════════════════════════════════════════════
    // APERTURE SETTINGS - What becomes visible when you look
    // ═══════════════════════════════════════════════════════════════════════

    apertureSettings: {

        // The game presents these patterns. Seeing them helps. Not seeing hurts.
        // No lectures. Just consequences.

        visiblePatterns: [
            {
                pattern: "Gifts have origins",
                instances: [
                    "The old woman's soup",
                    "The coat from the old man",
                    "The medicine from the doctor",
                    "The shelter that's too welcoming"
                ],
                ifSeen: "You ask questions. You survive.",
                ifMissed: "You eat. You wear. You take. You become part of it."
            },
            {
                pattern: "Silence carries weight",
                instances: [
                    "Minji's nod vs her stillness",
                    "The infected going quiet",
                    "The radio cutting out",
                    "What people DON'T say"
                ],
                ifSeen: "You read the absence. You prepare.",
                ifMissed: "The silence breaks. You weren't ready."
            },
            {
                pattern: "Words are costumes",
                instances: [
                    "Seora's 'family'",
                    "The Smiler's 'interview'",
                    "'Understanding'",
                    "'Protection'"
                ],
                ifSeen: "You hear what they mean, not what they say.",
                ifMissed: "You believe the costume. You meet what's underneath."
            },
            {
                pattern: "Preparation compounds luck",
                instances: [
                    "Those who scavenged smart",
                    "Those who read signs",
                    "Those who questioned first",
                    "Those who had exits mapped"
                ],
                ifSeen: "Same luck, better odds.",
                ifMissed: "Same luck, worse outcome."
            },
            {
                pattern: "Actions outweigh words",
                instances: [
                    "Jin's protection while you sleep",
                    "Hana's watchfulness under jokes",
                    "Minji's single nod",
                    "What people do when it costs them"
                ],
                ifSeen: "You know who's real.",
                ifMissed: "You trust the talkers. They leave first."
            }
        ],

        // Not a goal. An opening.
        philosophy: `The game doesn't make her see patterns.
                     It creates a world where patterns are THERE.
                     Some players will see them. Some won't.
                     Those who do, survive more. Understand more.
                     The lens cap comes off naturally—or it doesn't.
                     You can't force someone to look.
                     You can only make looking rewarding.`
    }
};

// ═══════════════════════════════════════════════════════════════════════════
// HORROR SCENES - The 5D Model in action
// ═══════════════════════════════════════════════════════════════════════════

const HorrorScenes = {

    theSmile: {
        id: "the_smile",
        coordinates: "Familiar-wrong × Uncertainty × Loved one × Anticipation",
        content: `
            <p class="narrative">Jin is standing by the window when you wake up.</p>
            <p class="narrative">He doesn't turn around.</p>
            <p class="dialogue">"Jin?"</p>
            <p class="dialogue">"Hmm."</p>
            <p class="narrative">His voice is right. Exactly right. But he doesn't turn around.</p>
            <p class="narrative">The morning light catches his reflection in the glass. He's smiling. Not his smile—the one that crinkles at the corners. This smile is... even. Symmetrical. Like someone described a smile and he's performing it.</p>
            <p class="dialogue">"Come back to bed."</p>
            <p class="narrative">He turns. The smile doesn't change. His eyes find you and stay there. Unblinking.</p>
            <p class="dialogue">"I was just thinking about how nice it is. Having you here. With me. Always with me."</p>
            <p class="narrative">He's walking toward you. Slow. Measured. Like he's counting steps.</p>
        `,
        choices: [
            { text: "Jin, stop. You're scaring me.", target: "smile_confront" },
            { text: "Reach for the knife under the pillow.", target: "smile_weapon" },
            { text: "Don't move. Don't breathe. Watch.", target: "smile_observe" }
        ]
    },

    theNursery: {
        id: "the_nursery",
        coordinates: "Corrupted innocence × Silence-after × Powerless witness",
        content: `
            <p class="narrative">Hana holds up her fist. Stop.</p>
            <p class="narrative">The nursery is painted yellow. Cartoon animals on the walls. Elephants. Giraffes. Happy things.</p>
            <p class="narrative">Twelve cribs. Arranged in neat rows.</p>
            <p class="narrative">Eleven are empty.</p>
            <p class="narrative">The twelfth crib is rocking. Gently. The mobile above it turning—little wooden stars, little wooden moons.</p>
            <p class="narrative">Something inside is making a sound. Not crying. Something wet. Something... content.</p>
            <p class="dialogue">"We go around," Hana whispers. Her voice is shaking. "We go around and we don't fucking look."</p>
            <p class="narrative">The rocking stops.</p>
            <p class="narrative">Silence.</p>
            <p class="narrative">Then, from the crib, in a voice that should be asking for milk, asking for mother:</p>
            <p class="dialogue whisper">"...mama?"</p>
        `,
        choices: [
            { text: "Run. Now. Don't look back.", target: "nursery_run" },
            { text: "Approach the crib. Someone has to know.", target: "nursery_look" },
            { text: "Mercy. It deserves mercy.", target: "nursery_mercy" }
        ]
    },

    theMeal: {
        id: "the_meal",
        coordinates: "Truth-too-late × Humans-worse × Complicit horror",
        content: `
            <p class="narrative">The old woman is kind.</p>
            <p class="narrative">Soup. Real soup. Vegetables, meat, warmth. You can't remember the last time you felt full.</p>
            <p class="dialogue">"Eat, eat. You're skin and bones."</p>
            <p class="narrative">Her grandson sits in the corner. Hasn't touched his bowl. Staring at you. Eyes too wide. Rocking slightly.</p>
            <p class="dialogue">"Junho was a vegetarian. Before."</p>
            <p class="narrative">You look at your bowl. The meat.</p>
            <p class="narrative">You look at the basement door. The padlock. The scratches on the inside of the frame.</p>
            <p class="narrative">Your stomach turns. But it's too late. It's already inside you. Part of you now.</p>
            <p class="narrative">The old woman sighs.</p>
            <p class="dialogue">"I do wish you'd finished."</p>
            <p class="narrative">She reaches behind her.</p>
        `,
        choices: [
            { text: "Attack first. The knife on the table.", target: "meal_fight" },
            { text: "Get it out. GET IT OUT.", target: "meal_vomit" },
            { text: "The boy. He knows something.", target: "meal_boy" }
        ]
    },

    theMirror: {
        id: "the_mirror",
        coordinates: "Self-horror × Uncertain reality × Time-dread",
        content: `
            <p class="narrative">Day 1: You check your arm. The scratch from the fence. Just a scratch. Not a bite. You're fine.</p>
            <p class="narrative">Day 2: It's red. Scratches get red. That's normal.</p>
            <p class="narrative">Day 3: Jin sees you checking. "What's that?" "Nothing."</p>
            <p class="narrative">Day 4: The fever starts. Could be anything. Exhaustion. Bad water. Not everything is the virus.</p>
            <p class="narrative">Day 5: You wake up and can't remember the last hour. You were by the window. Now you're by the door. Your hand is on the lock.</p>
            <p class="narrative">Were you leaving? Or were you locking them in?</p>
            <p class="narrative">Day 6: The mirror. Your eyes. Your mother's eyes.</p>
            <p class="narrative">Your mother turned in the first wave.</p>
            <p class="narrative">Something behind your eyes is... waiting.</p>
        `,
        choices: [
            { text: "Tell Jin. He deserves to know.", target: "mirror_confess" },
            { text: "Don't tell him. You need more time.", target: "mirror_hide" },
            { text: "There's a window. Leave now. Protect them.", target: "mirror_leave" }
        ]
    }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CognitiveLayer, HorrorScenes };
}
