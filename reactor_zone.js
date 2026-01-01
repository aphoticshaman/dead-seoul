

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
