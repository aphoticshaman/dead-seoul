// ═══════════════════════════════════════════════════════════════════════════
// LIFE MOMENTS - The Beautiful Between
// ═══════════════════════════════════════════════════════════════════════════
// Jet-skis on dead lakes. Hot springs under stars.
// The professions that rebuild a world. The dreamcatcher that started it all.
// ═══════════════════════════════════════════════════════════════════════════

const LifeMoments = {

    // ═══════════════════════════════════════════════════════════════════════
    // THE DREAMCATCHER - First Meeting with Jin
    // ═══════════════════════════════════════════════════════════════════════

    dreamcatcher: {
        id: 'jin_first_meeting',
        trigger: 'first_jin_encounter',
        content: `
            <p class="narrative jin-moment">He's sitting alone when you find him. Back against the wall. Eyes closed. In his hands, he's weaving something—thread and feathers and what looks like sinew.</p>

            <p class="narrative">A dreamcatcher.</p>

            <p class="narrative">He doesn't look up when you approach, but his fingers pause. "My grandmother taught me," he says, as if you'd asked. "Before everything. She said the nightmares get caught in the web. Only good dreams slip through."</p>

            <p class="narrative">He ties off the last thread. Looks at it. Then, without ceremony, holds it out to you.</p>

            <p class="narrative">"Here."</p>

            <p class="narrative">"I can't take—"</p>

            <p class="narrative">"You look like you need it more than me." His eyes meet yours for the first time. Dark. Deep. Something in them that makes your chest tight. "The nightmares here are real. Might as well catch the ones in your head."</p>

            <p class="narrative">His fingers brush yours when you take it. He doesn't pull away.</p>

            <p class="narrative">"I'm Jin."</p>

            <p class="narrative">The dreamcatcher is warm in your hands. The feathers are crow-black. The thread is red.</p>

            <p class="narrative">You tell him your name. He repeats it, testing how it feels in his mouth.</p>

            <p class="narrative">"I'll remember that," he says. And somehow, you know he will. Forever.</p>
        `,
        item: {
            name: "Jin's Dreamcatcher",
            description: "Crow feathers and red thread. Made by hands that would later learn to hold you like you were sacred.",
            effect: "Reduces nightmare encounters. Increases Jin trust gain."
        }
    },

    // ═══════════════════════════════════════════════════════════════════════
    // JET-SKI MOMENTS
    // ═══════════════════════════════════════════════════════════════════════

    jetski: {
        discovery: {
            id: 'jetski_discovery',
            content: `
                <p class="narrative">The marina is abandoned but not destroyed. And there, bobbing gently in the green water—jet-skis. Two of them. The fuel gauge on one still shows half full.</p>

                <p class="narrative">"No way." Jin's voice is almost boyish. You've never heard him sound like that. "Do they work?"</p>

                <p class="narrative">He's already climbing onto one before you can answer. The engine coughs. Sputters. Then roars to life.</p>

                <p class="narrative">Jin laughs. Actually laughs. The sound does something to your chest.</p>

                <p class="narrative">"Get on!"</p>
            `
        },

        ride: {
            id: 'jetski_ride',
            content: `
                <p class="narrative">The water is glass. The sky is fire—sunset bleeding across the horizon. And you are flying.</p>

                <p class="narrative">Jin takes the lead, carving through the water like he was born to it. You chase him, spray in your face, wind stealing your breath, screaming just because you can.</p>

                <p class="narrative">He slows. You pull alongside him. Both of you panting, grinning, more alive than you've felt in months.</p>

                <p class="narrative">"Race you to the island?" He nods at a small outcropping in the distance.</p>

                <p class="narrative">"What do I get if I win?"</p>

                <p class="narrative">His smile turns wicked. "Whatever you want."</p>

                <p class="narrative">"And if you win?"</p>

                <p class="narrative">"Same deal." He guns the engine. "Better catch up!"</p>
            `
        },

        aftermath: {
            id: 'jetski_after',
            jinWins: `
                <p class="narrative jin-moment">He beats you by seconds. When you pull up to the rocky shore, he's already off his jet-ski, waiting with that infuriating smirk.</p>

                <p class="narrative">"I win," he says simply.</p>

                <p class="narrative">"What do you want?"</p>

                <p class="narrative">He steps close. Cups your face in his wet hands. His eyes search yours.</p>

                <p class="narrative">"A kiss. Just one. Just to know what it feels like."</p>

                <p class="narrative">The sun sinks into the water behind him. You give him what he asked for.</p>

                <p class="narrative">He lied. It's not just one.</p>
            `,
            playerWins: `
                <p class="narrative jin-moment">You beat him by a hair. He pulls up laughing, shaking water from his hair like a dog.</p>

                <p class="narrative">"Okay, okay. You won." He holds up his hands. "What do you want?"</p>

                <p class="narrative">You think about it. All the things you could ask for. All the things you want.</p>

                <p class="narrative">"Stay," you say. "When this is over. When we find somewhere safe. Stay with me."</p>

                <p class="narrative">His expression shifts. Softens. He steps off his jet-ski and into the shallow water, closing the distance between you.</p>

                <p class="narrative">"That's all?" His voice is rough. "You win a bet and that's what you ask for?"</p>

                <p class="narrative">"It's all I want."</p>

                <p class="narrative">"Then you had it before you won." He pulls you into his arms, wet clothes and all. "You had it before the race even started."</p>
            `
        }
    },

    // ═══════════════════════════════════════════════════════════════════════
    // HOT SPRINGS
    // ═══════════════════════════════════════════════════════════════════════

    hotspring: {
        discovery: {
            id: 'hotspring_find',
            content: `
                <p class="narrative">Steam rises through the mountain pines. The smell of sulfur, faint but unmistakable. And then—a clearing. A pool carved by nature into dark stone, water so clear you can count the pebbles at the bottom.</p>

                <p class="narrative">"Is that..." Jin stops beside you.</p>

                <p class="narrative">"A hot spring." You haven't bathed properly in weeks. The water calls to you like a siren.</p>

                <p class="narrative">Jin scans the perimeter. Tactical, even here. "Seems clear. No tracks. No signs of habitation."</p>

                <p class="narrative">"So we can..."</p>

                <p class="narrative">"We should conserve time." But he's already unbuttoning his shirt. "Wash the gear. Clean up. Strategically sound."</p>

                <p class="narrative">You hide your smile. "Strategically sound. Right."</p>
            `
        },

        intimate: {
            id: 'hotspring_together',
            content: `
                <p class="narrative jin-moment">The water is perfect. Hot enough to sting, then relax every muscle you'd forgotten you had. Steam curls around you both like a veil.</p>

                <p class="narrative">Jin keeps his distance. At first. Respectful. Eyes anywhere but on you.</p>

                <p class="narrative">"You can look," you say finally. "I want you to."</p>

                <p class="narrative">His jaw tightens. His eyes find yours. Then, slowly, deliberately, they travel down. His breath catches.</p>

                <p class="narrative">"Come here," he says. It's not a request.</p>

                <p class="narrative">You drift toward him through the crystalline water. The stars are coming out above. The steam hides everything and nothing.</p>

                <p class="narrative">His hands find your waist beneath the surface. Pull you against him. You feel exactly how much he wants you.</p>

                <p class="narrative">"Beautiful," he murmurs against your neck. "Every inch of you. Perfect."</p>

                <p class="narrative">The hot spring keeps its secrets. So do you.</p>
            `
        },

        explicit: {
            id: 'hotspring_explicit',
            content: `
                <p class="narrative jin-moment">He lifts you like the water makes it effortless. Your legs wrap around him. His mouth finds yours—hungry, desperate, tasting of mineral water and want.</p>

                <p class="narrative">"Here?" you gasp.</p>

                <p class="narrative">"Here. Now. I can't—" He breaks off, pressing his forehead to yours. "I've wanted you for so long. I can't wait anymore."</p>

                <p class="narrative">The water laps at your joined bodies. Steam rises around you like a curtain. He enters you slowly, watching your face the entire time.</p>

                <p class="narrative">"Look at me," he demands. "I want to see everything. Every reaction. Every sound you make is mine."</p>

                <p class="narrative">He moves. The water moves with him. Stars wheel overhead, and you forget about the apocalypse, forget about survival, forget everything except the man holding you like you're the only thing left worth saving.</p>

                <p class="narrative">When you come apart, he follows you. Holds you through the aftershocks. Doesn't let go.</p>

                <p class="narrative">"We're never leaving this spring," he mumbles into your hair. "New plan. We live here forever."</p>

                <p class="narrative">"Strategically sound?"</p>

                <p class="narrative">"The soundest."</p>
            `
        }
    },

    // ═══════════════════════════════════════════════════════════════════════
    // POST-APOCALYPTIC PROFESSIONS - Sub-endings within community endings
    // ═══════════════════════════════════════════════════════════════════════

    professions: {
        // Available when reaching settlement/community endings
        available: [
            {
                id: 'medic',
                name: 'Combat Medic',
                description: 'You learned to heal under fire. Now you teach others.',
                content: `
                    <p class="narrative">The infirmary is always busy. Broken bones, infected wounds, the occasional bite that turned out clean. You've seen it all.</p>
                    <p class="narrative">Jin watches from the doorway sometimes. Proud. "You save more lives than I ever could," he tells you. "With a gun, I can only end things. You give them second chances."</p>
                    <p class="narrative">The children call you Doc. It fits.</p>
                `,
                jinVariant: `Jin assists you when he's not on patrol. "Steady hands," you tell him. He looks at his scarred knuckles and laughs. But he's gentler than anyone expects.`
            },
            {
                id: 'scout',
                name: 'Scout / Pathfinder',
                description: 'You map the dead world. Find safe routes. Lead others home.',
                content: `
                    <p class="narrative">The territory beyond the walls is yours. You know every road, every shortcut, every infected nest to avoid. Supply runs that took days now take hours because of your maps.</p>
                    <p class="narrative">Jin insists on accompanying you. "Not because you need protection," he says quickly. "Because I can't stand waiting for you to come back."</p>
                `,
                jinVariant: `You scout together. Two shadows moving through the ruins. He covers your back. You chart the path. A perfect team.`
            },
            {
                id: 'farmer',
                name: 'Agronomist',
                description: 'You make things grow in dead soil. Feed the community.',
                content: `
                    <p class="narrative">The greenhouse is your kingdom. Tomatoes, peppers, beans—life from nothing. Seeds from before, carefully hoarded and coaxed into abundance.</p>
                    <p class="narrative">Jin brings you coffee in the mornings. Real coffee, from a trade run. He sits in the dirt and watches you work. "Peaceful," he says. "This is what we're fighting for."</p>
                `,
                jinVariant: `He builds you raised beds. Irrigation systems. A scarecrow that looks suspiciously like Colonel Yoo. "For the crows," he claims. You both know better.`
            },
            {
                id: 'teacher',
                name: 'Teacher',
                description: 'You preserve knowledge. Raise the next generation.',
                content: `
                    <p class="narrative">The schoolroom is a converted storage unit. Twelve children, ages six to sixteen. You teach them reading, writing, history—and survival. How to suture a wound. Which plants are safe to eat. The math of rationing.</p>
                    <p class="narrative">"The next generation won't repeat our mistakes," you tell Jin.</p>
                    <p class="narrative">"They'll make new ones," he says. "But at least they'll be alive to make them."</p>
                `,
                jinVariant: `Jin teaches self-defense on Tuesdays. The kids adore him. He pretends to be annoyed. You catch him making up songs to help them remember pressure points.`
            },
            {
                id: 'engineer',
                name: 'Engineer',
                description: 'You rebuild. Walls, generators, water systems—the bones of civilization.',
                content: `
                    <p class="narrative">The power station hums again. It took six months, countless scavenging runs, and three near-electrocutions, but lights flicker in windows at night.</p>
                    <p class="narrative">Jin finds you elbow-deep in a solar panel array. "You're a miracle worker," he says.</p>
                    <p class="narrative">"I'm an engineer."</p>
                    <p class="narrative">"Same thing, these days."</p>
                `,
                jinVariant: `He becomes your assistant. Holds tools. Fetches parts. Complains about everything. But when the lights come on, he kisses you like you hung the stars themselves.`
            },
            {
                id: 'defender',
                name: 'Wall Guard',
                description: 'You stand watch. Protect what matters.',
                content: `
                    <p class="narrative">The night shift is cold and long. But from the wall, you can see everything—approaching threats, the community sleeping safely below, the stars above.</p>
                    <p class="narrative">Jin joins you most nights. "Can't sleep without you," he admits. "Might as well be useful."</p>
                    <p class="narrative">You keep each other warm between patrols.</p>
                `,
                jinVariant: `You and Jin take alternating shifts. When they overlap, you're unstoppable. The others call you The Pair. Threats that approach your section don't approach twice.`
            },
            {
                id: 'diplomat',
                name: 'Diplomat / Trader',
                description: 'You negotiate with other settlements. Build alliances.',
                content: `
                    <p class="narrative">Trade routes now stretch across three territories. Alliances with settlements who were enemies months ago. You've talked down more conflicts than Jin has shot.</p>
                    <p class="narrative">"You're terrifying," he tells you after watching you negotiate. "In the best way. You could talk an infected into a vegetarian diet."</p>
                `,
                jinVariant: `He's your silent threat. Stands behind you at negotiations, arms crossed, face blank. Everyone assumes he's the muscle. They're not wrong. But you're the weapon.`
            },
            {
                id: 'artisan',
                name: 'Artisan / Crafter',
                description: 'You make beautiful things. Remind people life is worth living.',
                content: `
                    <p class="narrative">The workshop smells of sawdust and possibility. You make furniture. Jewelry. Toys for the children. Art from scrap metal. Things that have no survival value except making people smile.</p>
                    <p class="narrative">"Why do you bother?" someone asks.</p>
                    <p class="narrative">Jin answers before you can. "Because surviving isn't the same as living."</p>
                `,
                jinVariant: `He learns to whittle. Makes you something new every week—a bird, a flower, a tiny dreamcatcher to match the first one he gave you. Your shelf is crowded with love.`
            }
        ],

        // Get profession selection content
        getSelection(communityName) {
            return `
                <div class="profession-selection">
                    <p class="narrative">${communityName} thrives. But a community needs more than walls. It needs purpose.</p>
                    <p class="narrative">Jin turns to you. "What do you want to be? Here, in this new world—who do you want to become?"</p>
                    <p class="choice-header">CHOOSE YOUR PATH</p>
                </div>
            `;
        },

        // Get profession epilogue
        getEpilogue(professionId, hasMaxJin) {
            const prof = this.available.find(p => p.id === professionId);
            if (!prof) return '';

            let content = prof.content;
            if (hasMaxJin && prof.jinVariant) {
                content += `<p class="narrative jin-moment">${prof.jinVariant}</p>`;
            }

            return `
                <div class="profession-epilogue">
                    <h3>${prof.name}</h3>
                    ${content}
                </div>
            `;
        }
    },

    // ═══════════════════════════════════════════════════════════════════════
    // ADDITIONAL LIFE MOMENTS
    // ═══════════════════════════════════════════════════════════════════════

    bonusMoments: {
        // Found car with working radio
        carRadio: {
            id: 'car_radio',
            content: `
                <p class="narrative">The car won't start, but the radio works. Static, mostly. Then—music. Actual music. A song from before, crackling through the speakers.</p>
                <p class="narrative">Jin goes still. Then, slowly, he holds out his hand.</p>
                <p class="narrative">"Dance with me."</p>
                <p class="narrative">"Here? Now?"</p>
                <p class="narrative">"When else? The apocalypse doesn't take requests. Dance with me while we can."</p>
                <p class="narrative">You do. In the ruins of a parking lot, to a song neither of you knows, you dance like the world isn't ending. Because for this moment, it isn't.</p>
            `
        },

        // Stargazing
        stargazing: {
            id: 'stargazing',
            content: `
                <p class="narrative">No light pollution anymore. The Milky Way spills across the sky like glitter on velvet. You've never seen so many stars.</p>
                <p class="narrative">"That's Orion," Jin points. "And there—the Big Dipper. My grandmother taught me."</p>
                <p class="narrative">"The same grandmother who taught you dreamcatchers?"</p>
                <p class="narrative">"The same." He's quiet for a moment. "She would have liked you."</p>
                <p class="narrative">You curl into his side. The stars wheel slowly overhead. For once, the silence feels like peace.</p>
            `
        },

        // Cooking together
        cooking: {
            id: 'cooking',
            content: `
                <p class="narrative">Jin is terrible at cooking. Hopeless. He once burned water.</p>
                <p class="narrative">But he insists on helping. Stands behind you while you prepare the rabbit he caught, chin on your shoulder, arms around your waist.</p>
                <p class="narrative">"I'm supervising," he claims.</p>
                <p class="narrative">"You're distracting."</p>
                <p class="narrative">"Multi-tasking." His lips brush your neck. "I'm very efficient."</p>
                <p class="narrative">Dinner is late. Neither of you complains.</p>
            `
        },

        // Rainstorm shelter
        rainstorm: {
            id: 'rainstorm',
            content: `
                <p class="narrative">The storm comes from nowhere. You barely make it to the abandoned gas station before the sky opens up.</p>
                <p class="narrative">Rain pounds the roof like fists. Lightning cracks. Inside, it's almost cozy—dusty shelves, a broken cooler, and Jin pressed against your back for warmth.</p>
                <p class="narrative">"We should wait it out," he says.</p>
                <p class="narrative">"Obviously."</p>
                <p class="narrative">"Could be hours." His voice drops. "Need something to pass the time."</p>
                <p class="narrative">You turn in his arms. "What did you have in mind?"</p>
                <p class="narrative">He shows you. The storm rages outside. Inside, you make your own thunder.</p>
            `
        }
    },

    // ═══════════════════════════════════════════════════════════════════════
    // THE CRYSTAL NECKLACE - 67 Languages
    // ═══════════════════════════════════════════════════════════════════════

    crystalNecklace: {
        id: 'crystal_necklace_gift',
        trigger: 'high_jin_trust',
        requiresJinTrust: 8,

        discovery: {
            content: `
                <p class="narrative">You find it in the ruins of a jewelry store. Everything else is smashed, looted, worthless. But this—somehow untouched in a velvet box behind the counter.</p>

                <p class="narrative">A crystal pendant. Tiny. Maybe 8 millimeters across, 11 tall. The surface is convex, smooth as water. At first you think it's empty.</p>

                <p class="narrative">Then you hold it up. Close to your eye—about two inches away. And you see them.</p>

                <p class="narrative">Words. Hundreds of words, laser-engraved on the flat bottom of the crystal, so small they're invisible to the naked eye. The convex surface magnifies them, makes them readable.</p>

                <p class="narrative"><em>I love you.</em></p>

                <p class="narrative">In English. In Korean. In Japanese. In Spanish, French, German, Mandarin, Arabic, Hindi, Russian, Portuguese, Italian, Greek, Hebrew, Swahili...</p>

                <p class="narrative">You count. Sixty-seven languages. Sixty-seven ways to say the same thing.</p>

                <p class="narrative">Your hands shake. You think of Jin.</p>
            `,
            choices: [
                {
                    text: "Keep it. Save it for him. For the right moment.",
                    outcome: "keep",
                    loyalty: 1
                },
                {
                    text: "This is too precious. Leave it for someone else to find.",
                    outcome: "leave",
                    loyalty: 0
                }
            ]
        },

        giving: {
            content: `
                <p class="narrative jin-moment">You wait for the right moment. When it comes, it's nothing special—just Jin sitting by the fire, cleaning his knife, guard down for once.</p>

                <p class="narrative">"I found something," you say. "For you."</p>

                <p class="narrative">He looks up. Curious. You press the tiny crystal into his palm.</p>

                <p class="narrative">"It's... a pendant?"</p>

                <p class="narrative">"Hold it up. Close to your eye. About this far." You show him.</p>

                <p class="narrative">He does. You watch his face change. The confusion. Then the squint of focus. Then—</p>

                <p class="narrative">His breath catches.</p>

                <p class="narrative">"Is this..." His voice cracks. He lowers the crystal. His eyes are wet. "How many languages?"</p>

                <p class="narrative">"Sixty-seven."</p>

                <p class="narrative">"Sixty-seven ways to say..."</p>

                <p class="narrative">"I love you." You say it out loud, finally. "In case one wasn't enough."</p>

                <p class="narrative">He stares at you. At the crystal. Back at you. Then he's moving, pulling you into his arms so hard it almost hurts.</p>

                <p class="narrative">"I don't need sixty-seven languages," he says into your hair, voice wrecked. "I just need you to say it once. In yours. Looking at me."</p>

                <p class="narrative">You pull back. Meet his eyes.</p>

                <p class="narrative">"I love you, Jin."</p>

                <p class="narrative">He kisses you like the world is ending. It is. It doesn't matter.</p>

                <p class="narrative">He wears the crystal every day after. Never takes it off. Sometimes you catch him holding it up to his eye, reading the words, smiling like a man who found treasure in the ashes.</p>

                <p class="narrative">One night, by firelight, he discovers something else.</p>

                <p class="narrative">"Look." He holds the crystal between the flame and the wall. The light passes through, and there—projected on the crumbling plaster—the words. All sixty-seven languages, scattered across the surface like stars.</p>

                <p class="narrative">"It's a projector too," you realize.</p>

                <p class="narrative">"It's everything." He pulls you against him, both of you watching the wall covered in love in every human tongue. "You gave me everything."</p>
            `
        },

        projection: {
            content: `
                <p class="narrative jin-moment">Jin holds up the crystal to the morning light streaming through the window. The words scatter across the floor, the walls, your skin.</p>

                <p class="narrative">"Te amo," he reads from your arm. "Ich liebe dich." From the wall. "사랑해." From the ceiling.</p>

                <p class="narrative">"You're obsessed with that thing," you say, smiling.</p>

                <p class="narrative">"I'm obsessed with you." He moves the crystal, making the words dance. "This is just the proof. Sixty-seven languages worth of proof that what I feel isn't crazy. That people have felt this way since the beginning of time. In every corner of the world."</p>

                <p class="narrative">He sets the crystal down. Pulls you into his lap.</p>

                <p class="narrative">"Sixty-eight now," he murmurs against your lips. "I'm inventing my own. Just for you."</p>
            `
        },

        item: {
            name: "Crystal of 67 Languages",
            description: "8mm diameter. 11mm tall. Convex surface. Hold it 1.75 inches from your eye and read sixty-seven ways to say what matters most.",
            effect: "Jin's trust cannot decrease while he wears this.",
            jinDialogue: [
                "\"I looked at it again today. Found a language I missed. Icelandic. Ég elska þig.\"",
                "\"Sixty-seven languages and none of them are enough.\"",
                "\"My grandmother would have called this magic. She would have been right.\"",
                "\"I keep finding new ones. Yoruba. Swahili. Welsh. Every one of them means you.\"",
                "\"Some days I hold it up just to remember. That someone loved me enough to say it in every way humans know how.\""
            ]
        },

        // Random dialogue when Jin has the necklace
        getRandomDialogue() {
            const dialogues = this.item.jinDialogue;
            return dialogues[Math.floor(Math.random() * dialogues.length)];
        }
    },

    // ═══════════════════════════════════════════════════════════════════════
    // THE TATTOOS - Raven & Orca
    // ═══════════════════════════════════════════════════════════════════════

    tattoos: {
        id: 'corresponding_tattoos',
        trigger: 'high_commitment',
        requiresJinTrust: 12,

        discovery: {
            content: `
                <p class="narrative">The settlement has a tattoo artist. Before everything, she worked in Hongdae. Now she works with homemade ink and sterilized needles, marking the survivors who want to remember.</p>

                <p class="narrative">Jin finds you staring at her work. Flash sheets pinned to the wall—traditional Korean designs, animals, symbols of the new world.</p>

                <p class="narrative">"Thinking about it?" he asks.</p>

                <p class="narrative">"Maybe." You trace a finger over a design. An orca, stylized, powerful. Apex predator. King of the ocean.</p>

                <p class="narrative">Jin is quiet for a moment. Then: "I want a raven."</p>

                <p class="narrative">You look at him. "Why a raven?"</p>

                <p class="narrative">"Because." His eyes find yours. Dark. Intense. "It reminds me of you. The way you move. The way you watch. The way you survived."</p>

                <p class="narrative">Your heart does something complicated.</p>

                <p class="narrative">"Corresponding tattoos," you say slowly. "You know what that means."</p>

                <p class="narrative">"I know exactly what it means." He takes your hand. "I want everyone to know. I want it permanent. I want it on my skin forever."</p>
            `,
            choices: [
                {
                    text: "Get the orca. Let him get the raven. Permanent.",
                    outcome: "both_tattoo",
                    jin: 5,
                    loyalty: 3
                },
                {
                    text: "\"We should think about this. It's forever.\"",
                    outcome: "hesitate",
                    jin: 0,
                    loyalty: 0
                }
            ]
        },

        gettingInked: {
            content: `
                <p class="narrative jin-moment">The needle buzzes. Jin goes first—insists on it. The raven takes shape on his forearm, stylized, wings spread, eyes sharp. Watching. Protecting.</p>

                <p class="narrative">"Your turn, little bird," he says when it's done. The words slip out like he's said them a thousand times. Like it's your name.</p>

                <p class="narrative">Little bird. You didn't know you needed to be called that until he said it.</p>

                <p class="narrative">The orca curves along your ribcage. Black and white. Apex predator. The one thing in the ocean that fears nothing. That protects its own.</p>

                <p class="narrative">"Why an orca?" the artist asks.</p>

                <p class="narrative">You glance at Jin. He's smiling—that rare, soft smile reserved only for you.</p>

                <p class="narrative">"Because he's mine," you say. "And he's the most dangerous thing in the water."</p>

                <p class="narrative">Jin laughs. Actually laughs. "I'm a seacow at best."</p>

                <p class="narrative">"You're benthic," you counter. "Deep. Steady. The foundation everything else rests on."</p>

                <p class="narrative">His eyes go soft. He understands. The words mean more than words.</p>

                <p class="narrative">Later, when the ink is fresh and burning, he traces the orca with gentle fingers.</p>

                <p class="narrative">"Permanent," he says.</p>

                <p class="narrative">"Permanent," you agree.</p>

                <p class="narrative">"Good." He kisses the tender skin beside it. "I was always going to be permanent. Now it's just official."</p>
            `
        },

        jinRavenMoments: [
            {
                trigger: 'looking_at_tattoo',
                content: `
                    <p class="narrative jin-moment">Jin catches you staring at his raven tattoo while he sleeps. The wings seem to move with his breathing.</p>
                    <p class="narrative">He opens one eye. "Creep."</p>
                    <p class="narrative">"Your creep."</p>
                    <p class="narrative">"Yeah." He pulls you down against him. "My little bird."</p>
                `
            },
            {
                trigger: 'protective',
                content: `
                    <p class="narrative jin-moment">"Touch her again," Jin says quietly, "and I'll show you what the raven means."</p>
                    <p class="narrative">The threat doesn't land. Your orca tattoo does—right in the man's jaw.</p>
                    <p class="narrative">Jin blinks. Then grins. "That works too."</p>
                `
            },
            {
                trigger: 'intimate',
                content: `
                    <p class="narrative jin-moment">His mouth traces the orca's curve. Each kiss deliberate. Worshipful.</p>
                    <p class="narrative">"Mine," he murmurs against the ink. "This says you're mine."</p>
                    <p class="narrative">Your fingers find his raven. "And this says you're mine."</p>
                    <p class="narrative">"Always was. Just took you a while to claim me."</p>
                `
            }
        ],

        littleBirdMoments: [
            "\"Come here, little bird. Let me see you.\"",
            "\"Fly if you want. I'll always find you.\"",
            "\"My little bird. My raven. My everything.\"",
            "\"You're not caged. You're home. There's a difference.\"",
            "\"Sing for me, little bird.\" His voice drops. \"Scream for me.\""
        ],

        // Get random little bird dialogue
        getLittleBirdMoment() {
            return this.littleBirdMoments[Math.floor(Math.random() * this.littleBirdMoments.length)];
        }
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SAFEWORD SYSTEM - For the dynamic
    // ═══════════════════════════════════════════════════════════════════════

    safewords: {
        danger: 'seacow',      // Slow down
        safe: 'benthic',       // Full stop

        // Scene where this comes up
        establishment: {
            content: `
                <p class="narrative jin-moment">Jin stops. Pulls back. His eyes search yours.</p>

                <p class="narrative">"We need words," he says. "Before this goes further. I need to know you can stop me."</p>

                <p class="narrative">"You'd stop if I asked."</p>

                <p class="narrative">"I'd stop if you <em>told</em> me." His jaw tightens. "But in the moment—when things get intense—I need something clear. Something I can't misread."</p>

                <p class="narrative">You think. "Seacow. If I need you to slow down."</p>

                <p class="narrative">He almost smiles. "Seacow?"</p>

                <p class="narrative">"It's ridiculous enough I'll never say it by accident."</p>

                <p class="narrative">"And if you need me to stop completely?"</p>

                <p class="narrative">"Benthic."</p>

                <p class="narrative">Now he does smile. "The ocean floor?"</p>

                <p class="narrative">"The foundation," you correct. "The deepest, safest place. Where everything is still."</p>

                <p class="narrative">He kisses your forehead. Gentle. Reverent. "Seacow to slow. Benthic to stop. I'll remember. I'll always remember."</p>

                <p class="narrative">"I know you will."</p>

                <p class="narrative">"Good." His voice drops, darkens. "Because now that I know how to stop—I'm going to test exactly how far we can go."</p>
            `
        },

        // Using the danger word
        dangerWordScene: {
            content: `
                <p class="narrative jin-moment">His intensity is overwhelming. Too much, too fast, too—</p>

                <p class="narrative">"Seacow," you breathe.</p>

                <p class="narrative">Jin freezes instantly. His hands gentle. His breathing ragged but controlled.</p>

                <p class="narrative">"I've got you." His voice is soft now, the edge gone. "I'm here. What do you need?"</p>

                <p class="narrative">"Just... slower. Please."</p>

                <p class="narrative">"Slower." He kisses your temple. Your cheek. The corner of your mouth. "I can do slower. I can do anything you need."</p>

                <p class="narrative">He does. And when you're ready, when you nod, he continues—gentler this time. Reading every reaction. Checking in with his eyes.</p>

                <p class="narrative">"Thank you for telling me," he says after. "Always tell me. Promise."</p>

                <p class="narrative">"I promise."</p>
            `
        },

        // The safeword as protection
        safeWordScene: {
            content: `
                <p class="narrative jin-moment">It's too much. All of it. The world, the fear, the—</p>

                <p class="narrative">"Benthic."</p>

                <p class="narrative">Everything stops. Jin's hands move from claiming to cradling. He wraps around you like a shield.</p>

                <p class="narrative">"I've got you. It's okay. We're done. We're completely done."</p>

                <p class="narrative">No questions. No disappointment. Just safety. Just him.</p>

                <p class="narrative">"I'm sorry—"</p>

                <p class="narrative">"Don't." His voice is fierce. "Never apologize for that word. That word is sacred. That word means you trust me enough to use it."</p>

                <p class="narrative">He holds you until your breathing steadies. Strokes your hair. Murmurs reassurances you can barely hear but feel in your bones.</p>

                <p class="narrative">"The foundation," he says quietly. "The deepest, safest place. That's what you are to me too."</p>
            `
        }
    },

    // ═══════════════════════════════════════════════════════════════════════
    // UTILITY FUNCTIONS
    // ═══════════════════════════════════════════════════════════════════════

    // Get random life moment based on context
    getRandomMoment(context = 'general') {
        const moments = Object.values(this.bonusMoments);
        return moments[Math.floor(Math.random() * moments.length)];
    },

    // Check if dreamcatcher should trigger
    shouldGiveDreamcatcher(sectionId, isFirstJinMeeting) {
        return isFirstJinMeeting && !localStorage.getItem('mongoose_dreamcatcher_given');
    },

    // Award dreamcatcher
    awardDreamcatcher() {
        localStorage.setItem('mongoose_dreamcatcher_given', 'true');
        return this.dreamcatcher;
    }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { LifeMoments };
}
