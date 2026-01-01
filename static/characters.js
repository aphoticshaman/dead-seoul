// ═══════════════════════════════════════════════════════════════════════════
// CHARACTERS - The people who matter
// ═══════════════════════════════════════════════════════════════════════════

const Characters = {

    // ═══════════════════════════════════════════════════════════════════════
    // THE FRIENDS - Ride or die
    // ═══════════════════════════════════════════════════════════════════════

    hana: {
        name: "Hana",
        role: "The Chaos",
        description: "Ex-gangster. Covered in scars. Zero filter. Laughs in firefights.",

        personality: {
            loud: true,
            foulMouthed: true,
            loyal: "absolutely",
            humor: "dark, constant, sometimes inappropriate"
        },

        backstory: `Former Incheon gang enforcer. Lost her crew in the first wave.
                    Found you half-dead in an alley, dragged you to safety.
                    "You looked pathetic. Reminded me of me."`,

        relationship: {
            toPlayer: "Protective older sister who will fight anyone who looks at you wrong",
            toJin: "Roasts him constantly. 'Pretty boy thinks he's tough.' Would kill for him.",
            toMinji: "The only one who can make Minji almost-smile. Speaks for her."
        },

        quotes: [
            "Fuck subtlety. Let's go.",
            "You want me to be quiet? Sure. Right after I'm dead.",
            "Jin, if you hurt her, I'll wear your intestines as a scarf. We clear? Cool. Want ramyeon?",
            "I don't do plans. Plans are for people who think they're gonna live.",
            "She doesn't talk much. I talk enough for both of us. Balance.",
            "You survived Seora. You survived that glass box. You can survive anything.",
            "Love the guy. I mean, I'll never say it to his face. But love him."
        ],

        combatStyle: "Brutal, loud, in-your-face. Baseball bat with nails. No subtlety.",

        lesson: "Loyalty doesn't mean being the same. Real friends can be completely different and still die for you.",

        scenes: {
            introduction: {
                title: "THE LOUD ONE",
                content: `
                    <p class="narrative">The woman standing over you has more scars than smooth skin. A baseball bat—nails driven through—rests on her shoulder.</p>
                    <p class="narrative">"You alive?" She prods you with her boot. "Hello? Anybody home?"</p>
                    <p class="narrative">You groan.</p>
                    <p class="narrative">"Good enough." She grabs your arm, hauls you up. "Name's Hana. You can thank me later. Or now. Now works too."</p>
                    <p class="dialogue">"Why... why help me?"</p>
                    <p class="narrative">She grins. Missing tooth on the left side.</p>
                    <p class="dialogue">"You looked pathetic. Reminded me of me. Now move your ass—this street's gonna be crawling in ten."</p>
                `
            },
            jinRoast: {
                title: "PRETTY BOY",
                content: `
                    <p class="narrative">Hana watches Jin check his reflection in a broken window.</p>
                    <p class="dialogue">"Really? We're being hunted by a psychopath and you're fixing your hair?"</p>
                    <p class="narrative">Jin doesn't look away from the glass. "Some of us maintain standards."</p>
                    <p class="dialogue">"Some of us are gonna get eaten maintaining their standards. Minji! Back me up!"</p>
                    <p class="narrative">Minji glances at Jin. Then at Hana. Then shrugs.</p>
                    <p class="dialogue">"Traitor! Both of you! I'm surrounded by traitors and pretty boys!"</p>
                    <p class="narrative">She's smiling though. She's always smiling.</p>
                `
            },
            death: {
                title: "THE SOUND SHE MAKES",
                content: `
                    <p class="narrative">Hana is bitten.</p>
                    <p class="narrative">You watched it happen. Couldn't move fast enough. The teeth in her forearm. Her screaming—not from fear, from rage. She beat its skull in with a brick. Kept beating long after it stopped moving.</p>
                    <p class="narrative">Now she sits against the wall.</p>
                    <p class="narrative">Laughing.</p>
                    <p class="dialogue">"Fuck. Fuck fuck fuck."</p>
                    <p class="narrative">She holds out her gun. Handle toward you.</p>
                    <p class="dialogue">"Not Minji. She won't recover. And Jin—" She laughs. "Jin would hesitate. I'd get a chunk out of him first."</p>
                    <p class="narrative">The gun is heavy.</p>
                    <p class="dialogue">"Wait till I'm not me anymore, okay? You'll know when I stop making jokes."</p>
                `
            }
        }
    },

    minji: {
        name: "Minji",
        role: "The Stillness",
        description: "Barely speaks. Watches everything. When she moves, people die silently.",

        personality: {
            quiet: "almost mute",
            observant: "misses nothing",
            deadly: "absolutely",
            loyal: "shown, never spoken"
        },

        backstory: `Former ballerina. National company. The outbreak happened during a performance.
                    She was the only one who walked out.
                    Hasn't danced since. But the way she moves when she kills? That's dancing.`,

        relationship: {
            toPlayer: "Approves of you with a single nod. Disapproves with silence. Loves with presence.",
            toJin: "Studied him for weeks before deciding he was worthy. Now protects him too.",
            toHana: "Lets Hana speak for her. The silence between them is comfortable."
        },

        quotes: [
            "...",
            "*nods*",
            "No.",
            "Behind you.",
            "Trust him.",
            "*places hand on your shoulder, squeezes once, leaves*"
        ],

        combatStyle: "Silent, precise, balletic. Piano wire. Blades. You're dead before you know she's there.",

        lesson: "Actions speak louder than words. Watch what people do, not what they say.",

        scenes: {
            introduction: {
                title: "THE QUIET ONE",
                content: `
                    <p class="narrative">You don't hear her approach.</p>
                    <p class="narrative">One moment the hallway is empty. The next, a woman stands in the shadows. Small. Still. Watching you with eyes that calculate distance and angle and exactly how long it would take to close the gap.</p>
                    <p class="narrative">Hana waves. "That's Minji. She doesn't talk. Like, ever. Don't take it personal."</p>
                    <p class="narrative">Minji's gaze moves over you. Head to toe. Assessing. Judging.</p>
                    <p class="narrative">Then—barely, almost invisibly—she nods.</p>
                    <p class="dialogue">"Holy shit," Hana whispers. "She likes you. That never happens."</p>
                `
            },
            approval: {
                title: "THE NOD",
                content: `
                    <p class="narrative">You chose to stay. When running was easier, when survival said go—you stayed.</p>
                    <p class="narrative">Jin is unconscious. Hana is holding the door. And Minji...</p>
                    <p class="narrative">Minji is looking at you.</p>
                    <p class="narrative">She reaches out. Places her hand on your shoulder. Squeezes once.</p>
                    <p class="narrative">Nods.</p>
                    <p class="narrative">Then she turns and kills three infected in the time it takes you to breathe.</p>
                    <p class="narrative">From Minji, that squeeze was "I love you." That nod was "You're family."</p>
                    <p class="narrative">She'll never say it out loud. She doesn't have to.</p>
                `
            },
            speaks: {
                title: "THE WORD",
                content: `
                    <p class="narrative">It's quiet after the fight. Bodies cooling. Blood drying.</p>
                    <p class="narrative">Jin is hurt but alive. You're hurt but alive. Hana is already making jokes.</p>
                    <p class="narrative">Minji sits apart. Cleaning her blade. Silent as ever.</p>
                    <p class="narrative">Then, so soft you almost miss it:</p>
                    <p class="dialogue">"Family."</p>
                    <p class="narrative">Everyone freezes.</p>
                    <p class="dialogue">"Did she just—" Hana starts.</p>
                    <p class="narrative">Minji doesn't repeat it. Goes back to cleaning.</p>
                    <p class="narrative">But you heard it. One word. The only one that mattered.</p>
                `
            }
        }
    },

    // ═══════════════════════════════════════════════════════════════════════
    // THE VILLAIN - Seora the Collector
    // ═══════════════════════════════════════════════════════════════════════

    seora: {
        name: "Seora",
        title: "The Collector",
        role: "Primary Antagonist",
        description: "Doesn't want to kill. Wants to own. Keeps people in glass boxes until they 'understand.'",

        personality: {
            charming: "dangerously so",
            possessive: "absolutely",
            patient: "will wait years",
            cruel: "calls it love"
        },

        backstory: `Former museum curator. Obsessed with preservation even before the fall.
                    When the world ended, she saw opportunity: finally, she could collect what she really wanted.
                    People. Perfect, preserved, hers forever.`,

        philosophy: `"I don't destroy. I preserve. I take broken things and make them beautiful.
                     Make them mine. Is that so wrong? To want to keep something forever?"`,

        connectionToJin: `He was her favorite. The beautiful soldier who wandered into her territory.
                          She spent months "loving" him. Breaking him. Rebuilding him.
                          Then YOU came. And took him. And broke her perfect collection.`,

        connectionToPlayer: `You escaped her glass box. You rescued Jin. You humiliated her.
                             She doesn't hate you. Hate is too simple.
                             She's going to find you. And this time, she won't make the mistake of
                             putting you in glass. This time, she'll make you understand.`,

        quotes: [
            "I love them. Until they understand. Then I love them properly.",
            "You took my favorite. Do you know how long it took to find someone that beautiful?",
            "The glass isn't a cage. It's protection. From the world. From themselves.",
            "Come home. I promise it won't hurt. Well... not forever.",
            "Jin still dreams about me. Did he tell you? He won't. But he does.",
            "I'm not angry. I'm disappointed. There's a difference.",
            "Everyone breaks. The fun is finding out how."
        ],

        scenes: {
            collection: {
                title: "THE GLASS BOXES",
                content: `
                    <p class="narrative">She keeps them in glass.</p>
                    <p class="narrative">Not cages—actual glass rooms. Like displays. Like an exhibit.</p>
                    <p class="dialogue">"My family," Seora says. She walks you down the row. Gun at your back.</p>
                    <p class="narrative">In the first box: a man. Former soldier. Cleaning a weapon. Over and over. Eyes empty.</p>
                    <p class="dialogue">"My protector."</p>
                    <p class="narrative">Second box: a woman. Cooking. No food. Just the motions. Stirring air.</p>
                    <p class="dialogue">"My nurturer."</p>
                    <p class="narrative">Third box: a child. Drawing. The same image, repeated. A house. A sun. A family.</p>
                    <p class="dialogue">"My innocent."</p>
                    <p class="narrative">The fourth box is empty. A bed. A desk. A mirror.</p>
                    <p class="dialogue">"And this is for my favorite. When I get her back."</p>
                `
            },
            confrontation: {
                title: "SHE FINDS YOU",
                content: `
                    <p class="narrative">The door opens. Not kicked—opened. Politely.</p>
                    <p class="narrative">Seora steps through. Immaculate. Not a hair out of place. The apocalypse hasn't touched her.</p>
                    <p class="dialogue">"There you are."</p>
                    <p class="narrative">She smiles. The smile that made you trust her once. Before the glass. Before you understood.</p>
                    <p class="dialogue">"Did you really think you could run forever? I have such patience, little one. I found Jin, didn't I? I found you the first time. Did you think the second would be different?"</p>
                    <p class="narrative">She tilts her head. Studies you like a pinned butterfly.</p>
                    <p class="dialogue">"Come home. I've kept your room clean."</p>
                `
            }
        }
    },

    // ═══════════════════════════════════════════════════════════════════════
    // THE LIEUTENANTS
    // ═══════════════════════════════════════════════════════════════════════

    smiler: {
        name: "The Smiler",
        realName: "Unknown",
        role: "Seora's Interrogator",
        description: "Always grinning. Always polite. Does the 'interviews.'",

        personality: {
            polite: "excessively",
            cheerful: "wrong kind",
            cruel: "artistic about it"
        },

        quotes: [
            "Please, sit! Make yourself comfortable. This might take a while.",
            "I do apologize for any inconvenience. We'll have you processed shortly.",
            "Screaming is natural! Don't be embarrassed. Everyone screams.",
            "Mother always said I had a gift for making friends.",
            "Seora wants you whole. She didn't say anything about unmarked."
        ],

        scenes: {
            introduction: {
                title: "THE INTERVIEW",
                content: `
                    <p class="narrative">The man across the table hasn't stopped smiling.</p>
                    <p class="narrative">Not a smirk. Not a grin. A smile. Warm. Genuine. Like you're old friends catching up over coffee.</p>
                    <p class="dialogue">"I'm so glad we could finally meet properly," he says. "Seora speaks so highly of you."</p>
                    <p class="narrative">He lays out his tools. Neat rows. Like a surgeon.</p>
                    <p class="dialogue">"This is always my favorite part—getting to know someone. Really know them. What makes them tick. What makes them... talk."</p>
                    <p class="narrative">The smile never wavers.</p>
                    <p class="dialogue">"Shall we begin?"</p>
                `
            }
        }
    },

    quietProfessional: {
        name: "Joon",
        title: "The Quiet Professional",
        role: "Seora's Enforcer",
        description: "Former special forces. No personality. Just does the job.",

        personality: {
            efficient: "absolutely",
            emotionless: "apparently",
            deadly: "confirmed"
        },

        backstory: `ROK Special Warfare Command. 707th Special Mission Group.
                    What Seora offered was simpler than the chaos outside.
                    Orders. Structure. Purpose. He doesn't question. He executes.`,

        quotes: [
            "Target acquired.",
            "Resistance is inefficient.",
            "...",
            "Alive. Seora's orders."
        ],

        scenes: {
            hunt: {
                title: "HE'S COMING",
                content: `
                    <p class="narrative">Hana is watching the street through cracked blinds.</p>
                    <p class="dialogue">"Oh fuck. Fuck fuck fuck."</p>
                    <p class="narrative">"What?"</p>
                    <p class="dialogue">"Joon. The Ghost. Her fucking attack dog."</p>
                    <p class="narrative">You look. A man walks down the center of the street. Unhurried. Patient. Checking each building with methodical precision.</p>
                    <p class="dialogue">"He tracked me for six weeks once," Hana whispers. "Across three provinces. I thought I lost him in Busan. He was waiting in Seoul when I got back."</p>
                    <p class="narrative">The man stops. Looks up. Directly at your window.</p>
                    <p class="dialogue">"He knows we're here. He always knows."</p>
                `
            }
        }
    },

    // ═══════════════════════════════════════════════════════════════════════
    // THE GOONS
    // ═══════════════════════════════════════════════════════════════════════

    goons: {
        hounds: {
            name: "The Hounds",
            description: "Trackers. Hunters. They never stop following.",
            details: `Street kids, mostly. Seora took them in. Trained them.
                      Now they know every sewer, every rooftop, every bolt-hole in the city.
                      They don't capture. They corner. Then the real hunters come.`
        },

        dolls: {
            name: "The Dolls",
            description: "Broken captives turned enforcers. Dead-eyed. Obedient.",
            details: `What the player almost became. What Jin almost became.
                      They 'understood' what Seora wanted. Now they're perfect.
                      The scariest thing? Sometimes they cry while they hurt you.
                      The person is still in there. Just can't stop.`
        },

        teeth: {
            name: "The Teeth",
            description: "True believers. Inner circle. Cruel because they enjoy it.",
            details: `Unlike the Dolls, the Teeth chose this.
                      Seora doesn't break them—she reveals them.
                      The apocalypse gave them permission to be what they always were.`
        }
    }
};

// ═══════════════════════════════════════════════════════════════════════════
// PLAYER BACKSTORY
// ═══════════════════════════════════════════════════════════════════════════

const PlayerBackstory = {

    origin: `You don't remember much about before. The fall happened fast.
             What you remember is the glass box. The museum. Her voice, always patient:
             "You'll understand soon. Everyone understands eventually."`,

    escape: `The night Seora brought in a new acquisition—a soldier, beautiful and defiant—
             the guards were distracted. Watching him fight.
             You ran. First time in weeks you felt the sun.`,

    rescuingJin: `You should have kept running. You almost did.
                  But his eyes through the glass... he was still fighting. Still himself.
                  You went back. Broke the locks. Dragged him out.
                  Seora's scream echoed through the museum.
                  She's been hunting you both ever since.`,

    whatSeoraWants: `Not revenge. Possession.
                     You broke her collection. Took her favorite.
                     She'll find you. She'll put you back.
                     And this time, she'll make sure you understand.`,

    flashbackTriggers: [
        "glass",
        "museum",
        "collection",
        "understand",
        "favorite",
        "home"
    ]
};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Characters, PlayerBackstory };
}
