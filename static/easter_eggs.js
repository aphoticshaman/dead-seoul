// ═══════════════════════════════════════════════════════════════════════════
// EASTER EGGS - For Those Who Know
// ═══════════════════════════════════════════════════════════════════════════
// References to a certain post-apocalyptic game about a man and a girl.
// Coy. Clever. For those who played it.
// ═══════════════════════════════════════════════════════════════════════════

const EasterEggs = {

    // Random environmental descriptions
    environments: [
        "Mushrooms grow in the corners. Not the normal kind. The kind that moves if you watch long enough.",
        "A pocket watch lies in the rubble. Still ticking. Still late. Always late.",
        "Someone painted a white rabbit on the wall. An arrow beneath it points down, down, down.",
        "Bottles labeled DRINK ME line the pharmacy shelf. You do not drink them.",
        "A grin painted on a door. No face. Just the grin. Watching.",
        "Playing cards scattered on the floor. All hearts. All severed.",
        "A broken mirror. Your reflection moves half a second slower than you do.",
        "A phone rings in the empty building. You don't answer. You know what happens to people who answer.",
        "Graffiti on the wall: 'WHAT'S YOUR FAVORITE APOCALYPSE?' Someone had jokes. Had.",
        "A white mask on the floor. Elongated. Screaming. You leave it where it lies.",
        "Rule one: Never say you'll be right back. Rule two: Never investigate strange noises. You've broken both.",
        "A dead radio crackles: 'DO YOU LIKE SCARY MOVIES?' Static. Then laughter. Then nothing.",
        "Someone wrote the rules for surviving on the wall. Rule seven is crossed out. You don't want to know what rule seven was.",
        "Someone spray-painted 'DANGER ZONE' on a helicopter. You don't get the joke but someone did.",
        "A small restaurant. The menu is still up. Burger of the Day: The End-of-Days Burger. Someone had a sense of humor til the end.",
        "Mathematical. Algebraic. Rhombus. Words scrawled on the wall in childish handwriting. A crown lies nearby.",
        "A tiny demon figurine on a shelf. An elf. A princess. Someone's collection of better times.",
        "A devil's trap painted on the floor. Salt in a circle. It didn't help. Nothing helps.",
        "Black wings painted on a wall. Charred at the edges. 'HELLO, DETECTIVE' written beneath.",
        "You hear clicking in the distance. Rhythmic. Searching.",
        "A car sits abandoned on the highway. Keys in the ignition. Someone wrote 'BE QUIET AND DRIVE' in the dust on the hood.",
        "Graffiti under a bridge: 'I DON'T EVER WANT TO FEEL LIKE I DID THAT DAY.' Someone else added: 'TAKE ME TO THE PLACE I LOVE.' A third hand crossed it out.",
        "An old record player. One vinyl left in the sleeve. 'HURT' by Johnny Cash. The needle still works. You don't play it. Some pain is too real.",
        "Bass drops echo from somewhere deep in the building. Impossible. The power's been dead for years. But you swear you hear 'LACRIMOSA' rattling the walls.",
        "A setlist taped to a dressing room mirror: '1. Be Quiet and Drive 2. Digital Bath 3. Change.' The show never happened.",
        "Someone spray-painted a white pony on the wall. Beneath it: 'AROUND THE FUR.' You don't know what it means. But someone did.",
        "A karaoke machine still works somehow. The last song queued: 'Under the Bridge.' High score: R.C. — 100.",
        "Poison bottles arranged carefully on a shelf. Pretty little things. Someone's collection before the end.",
        "The bass hits you before you hear it. Apashe. Someone's apocalypse playlist is still running.",
        "Someone painted 'LOOK FOR THE LIGHT' on the wall. The paint is decades old.",
        "An acoustic guitar sits in the corner, missing two strings. Someone was learning to play. Someone who never finished.",
        "There are firefly symbols everywhere. A faction that believed in tomorrow.",
        "The fungal growth covers everything. Nature's revenge, blooming beautiful and terrible.",
        "A giraffe toy lies in the rubble. Something about it makes you pause.",
        "Spores drift in the air. You hold your breath without thinking.",
        "The infected move differently here. Clicking. Echolocating. Blind hunters.",
        "Someone scrawled 'ENDURE AND SURVIVE' on a locker. A mantra for the end times.",
        "A brick sits on the shelf. Somehow, it feels important.",
        "You find a sharpened piece of metal. Not quite a knife. A shiv. It will break after one use.",
        "The infected here have been dead a long time. Armored in fungal plates. Bloaters, some called them.",
        "A university banner hangs in tatters. 'GO BIGHORNS.' The science building is that way.",
        "The dam in the distance still runs. Someone is maintaining it. Someone who survived.",
        "You pass a birthday card. 'For my baby girl.' The handwriting is steady despite everything.",
        "Listen. Stop. Listen. You learn to hear them before you see them.",
        "'Okay.' That is all she says. But it means everything.",
        "The fireflies are gone now. Their light was never found.",
        "A hunter's note: 'Check the university. The doctors there were working on something.'",
        "The winter was the worst part. What they did to survive the winter.",
        "A photo of an older man with a young girl. They look happy. Before.",
        "The hospital is overrun. Whatever hope was here died with the power.",
        "A smuggler's cache. Someone who moved things between quarantine zones.",
        "The military shot everyone who was bitten. And some who were not.",
        "Joel's Hardware - the sign is faded but readable. The owner left something behind.",
        "An old man's watch. Still ticking after all this time. Some things endure.",
        "You find a list: 'Things to teach her: 1. Guitar. 2. Swimming. 3. How to survive me.'",
        "The ladder is propped against the wall. You have seen a hundred like it. You will see a hundred more.",
        "A pun book. 'Why did the partially blind man fall into the well? He could not see that well.' Someone groaned at this.",
        "The Rattlers marked their territory here. Slavers. The lowest of the low.",
        "Santa Barbara. They say the coast is clear there. They always say that about somewhere.",
        "A guitar pick with a moth engraved on it. Someone loved this.",
        "The aquarium is dark now, but you can still hear the ocean through the walls.",

        // Fortnite references
        "A llama piñata sits untouched in the corner. Someone spray-painted 'LOOT' on the wall beside it. The joke died with its maker.",
        "Building materials stacked everywhere: wood, brick, metal. Someone thought they could build their way to safety. They couldn't.",
        "A victory royale trophy sits dust-covered on a shelf. '#1' engraved. Meaningless now.",
        "Someone scrawled 'THE STORM IS COMING' on every wall. They weren't wrong.",
        "A chest glows faintly in the abandoned house. You open it anyway. Old habit.",
        "Dance instructions taped to a wall. 'Floss.' 'Orange Justice.' 'Default.' Someone kept their humor til the end.",

        // Split Fiction references
        "Two sets of footprints in the dust. They went different directions. They always do, eventually.",
        "A manuscript lies scattered. 'CHAPTER 12: THE BETRAYAL.' The ending was never written.",
        "Someone wrote 'CO-OP MODE DISABLED' in blood on the warehouse door. Partnership has its limits.",
        "Two chairs face each other. One is overturned. The conversation did not end well.",
        "A note: 'I trusted you with my story. You wrote me as the villain.'",
        "Fiction and reality blurred here. The walls are half-written. The story never finished.",

        // Grandma's Boy references
        "A gaming chair set up in a basement. Energy drinks. Weed paraphernalia. Someone had their priorities straight til the end.",
        "A monkey plushie sits on a couch. 'PLEASE SIT ON MY FACE' written beneath in sharpie. Someone had jokes.",
        "A note: 'I can't believe you came on my mom.' Context: unknown. Probably better that way.",
        "Robot legs propped against the wall. 'ADIOS, TURD NUGGETS' spraypainted above. A legend lived here.",
        "Someone's grandma's house. Plastic on the furniture. Candy dishes. Somehow, untouched by the apocalypse.",
        "A high score board: 'DEMONIK - ALEX - 999,999,999.' The game doesn't exist anymore. Neither does Alex.",

        // Dying Light references (x10)
        "The UV lights still work here. Someone understood the night. Someone smart.",
        "A grappling hook hangs from a ledge. The perfect tool. Someone knew how to run.",
        "Volatiles came through here. You can tell by the claw marks. And the screaming that still echoes in your head.",
        "A safehouse. UV lights. Beds. Supplies. Someone built this right. Someone who understood Harran.",
        "The Tower used to be sanctuary. Now it's just another tomb.",
        "A note: 'Good Night. Good Luck.' The only rules that matter after dark.",
        "Antizin vials scattered on the floor. Not enough. Never enough.",
        "Crane was here. Or someone like him. A runner. A survivor. A monster in the making.",
        "The quarantine failed. The walls came down. The virus won. It always does.",
        "Parkour training dummies line the rooftop. Someone practiced. Someone got fast. Speed is survival.",
        "A Bolter caught in the light. Frozen. Terrified. Even monsters fear something.",
        "Night Hunter territory. You feel eyes on you. Inhuman eyes.",
        "Someone rigged explosives to car alarms. Brilliant. Desperate. Both.",
        "Rais controlled this sector. Warlords rise in chaos. Always.",
        "'BE THE ZOMBIE' spraypainted on a wall. Someone lost their humanity. Someone embraced it.",
        "The Old Town architecture. Beautiful once. Deathtraps now. Every ledge a lifeline.",
        "A blueprint for a electrified blade. Someone got creative with murder.",
        "Mother's Day. The most dangerous day. The children remember.",
        "The Following led here. The countryside was supposed to be safe. It wasn't.",
        "Aiden's mark scratched into stone. Another pilgrim passed through. Another survivor.",

        // Dying Light 2 references
        "Villedor in ruins. The city that forgot how to die.",
        "Peacekeepers or Survivors? Someone wrote 'BOTH ARE WRONG' on the faction board.",
        "The biomarker on your wrist pulses. Time matters now. Every second in darkness costs.",
        "Paraglider straps hang from a tower. Someone learned to fly before they learned to fall.",
        "Nightrunners were here. The bravest or the craziest. Same thing, really.",
        "A GRE access key. Whatever they were hiding, it wasn't a cure.",
        "Howler screech echoes. The chase begins. It always begins.",
        "Windmills on the horizon. Power. Water. Life. Someone's fighting for the basics.",
        "Lawan's tag on the wall. She was here. She survived. She always does.",
        "The fish eye. Dealer of secrets. Even information has a price in hell.",

        // Rick and Morty references
        "A portal gun sits on a workbench. Green fluid leaking. 'WUBBA LUBBA DUB DUB' scratched beneath. Someone was in great pain.",
        "Pickle jar on the counter. One pickle inside. Screaming. You close the jar.",
        "A note: 'I'M PICKLE RIIIICK!' Underneath: 'Dad, please stop. This is serious.'",
        "Szechuan sauce packets hoarded like gold. Someone had their priorities.",
        "Plumbus instructions. You still don't know what it does. No one does.",
        "Council of Ricks evacuation notice. They abandoned this dimension. Smart.",
        "A butter robot sits motionless. 'WHAT IS MY PURPOSE?' scratched into its chassis.",
        "'Get Schwifty' graffiti on the stadium. Someone faced death with nonsense. Respect.",
        "Interdimensional cable box. Still works. The channels are... disturbing.",
        "Mr. Meeseeks box. Empty. 'EXISTENCE IS PAIN' written 1000 times on the walls around it.",

        // Mac Miller - Love Lost reference
        "A record player. Mac Miller's 'Love Lost' on repeat. 'I wonder where the love has gone...' The apocalypse answered that question.",
        "Blue Slide Park poster on the wall. Someone remembered better days. Simpler days.",
        "A note: 'I been going through it, you been going through it, we been going through it.' Someone understood.",
        "'Most Dope' tagged on the overpass. Someone kept the faith.",

        // David Kushner - Daylight references
        "Graffiti on the tunnel wall: 'TELL ME WHEN I'M GONNA FEEL AGAIN.' No one answered.",
        "A note in shaky handwriting: 'I don't wanna let it show that I'm not always okay. I'm not always okay.' Someone understood the weight.",
        "Someone wrote 'DAYLIGHT' above a bricked-up window. Irony. Or hope. Hard to tell the difference anymore.",

        // Post Malone - Circles references
        "A vinyl record spins on a dead turntable. The label reads 'CIRCLES.' Someone understood the pattern. Run around in circles til we're gone.",
        "Graffiti on the highway overpass: 'WE COULDN'T BE DOWN.' Spraypainted over: 'IT'S ONLY ME WHAT YOU GOT LEFT.' Someone had a conversation here.",
        "A note tucked into a steering wheel: 'Seasons changed and our love went cold.' The car never moved again."
    ],

    // Dialogue snippets that can be injected
    dialogueSnippets: [
        {
            context: "survivor_wisdom",
            line: "You know what I've learned? Everyone I've cared for either dies or leaves. So you keep going. Endure."
        },
        {
            context: "infected_explanation",
            line: "It's a fungus. Cordyceps. Usually only infects insects. But this one... this one jumped. And when it takes you, there's nothing left of who you were."
        },
        {
            context: "trust",
            line: "If I ever get in trouble, I'm not going to rely on anyone. I'm just going to handle it myself."
        },
        {
            context: "protection",
            line: "Look, I'm not going to lie to you. If you ever let anything happen to her... I'll find you."
        },
        {
            context: "joke",
            line: "A man walks into a bar with a brick. The bartender asks 'Why the brick?' The man says 'In case things get smashing.'"
        },
        {
            context: "joke",
            line: "What's the difference between a guitar and a fish? You can't tuna fish."
        },
        {
            context: "joke",
            line: "Why did the scarecrow win an award? Because he was outstanding in his field."
        },
        {
            context: "bitter_truth",
            line: "I've killed a lot of people to get here. Some of them deserved it. Most of them... just wanted to survive."
        },
        {
            context: "hope",
            line: "When you're lost in the darkness, look for the light."
        },
        {
            context: "father_figure",
            line: "You are treading on some mighty thin ice here."
        },
        {
            context: "realization",
            line: "Swear to me. Swear to me that everything you said is true."
        },
        {
            context: "final_words",
            line: "If somehow the Lord gave me a second chance at that moment... I would do it all over again."
        },
        {
            context: "acceptance",
            line: "I think they should be terrified of you."
        },
        {
            context: "memory",
            line: "Space shuttle. Man, I always dreamed about being an astronaut."
        },
        {
            context: "survival",
            line: "We survive. We survive by any means necessary."
        },
        {
            context: "madness",
            line: "We're all mad here. You must be, or you wouldn't have come."
        },
        {
            context: "descent",
            line: "The deeper you go, the less sense it makes. That's when you know you're close."
        },
        {
            context: "time",
            line: "Time stopped meaning anything the day they fell. Now it's just before and after."
        },
        {
            context: "size",
            line: "In this world, you learn to make yourself small. Invisible. The ones who stand tall get cut down."
        },
        {
            context: "tea_party",
            line: "Found a tea set once. Sat down with three corpses at the table. Had a nice chat. They were better company than most of the living."
        },
        {
            context: "rabbit_hole",
            line: "Once you fall, you don't stop falling. You just get used to the drop."
        },
        {
            context: "bravado",
            line: "You want to know the difference between us and the monsters? We have a plan. It's a terrible plan, but we have one."
        },
        {
            context: "family",
            line: "He's my brother. After everything—after all the hell we've been through—that's all that matters."
        },
        {
            context: "desire",
            line: "Tell me. What is it you truly desire? In this broken world, what do you really want?"
        },
        {
            context: "adventure",
            line: "Sucking at something is the first step to being sorta good at something. Surviving works the same way."
        },
        {
            context: "royalty",
            line: "I'm the princess of a dead kingdom. Turns out that's about as useful as it sounds."
        },
        {
            context: "priorities",
            line: "Someone asked about my plans for the apocalypse. My answer? Same as always: Get drunk. Maybe die. We'll see."
        }
    ],

    // Character name variants
    names: {
        oldSurvivor: ["Joel", "Jacob", "Jonas", "Josiah", "Joe"],
        youngGirl: ["Ellie", "Elle", "Elena", "Elizabeth", "Ella"],
        brother: ["Tommy", "Thomas", "Tomas", "Tim"],
        hunter: ["David", "Darren", "Daniel"],
        firefly: ["Marlene", "Maria", "Miranda"],
        doctor: ["Jerry", "Gerald", "Jerome"]
    },

    // Section-specific injections
    sectionInjections: {
        // When entering dangerous areas
        danger: [
            "<p class='narrative whisper'>Click. Click. Click. Something is listening.</p>",
            "<p class='narrative whisper'>The spores are thick here. Your lungs burn.</p>",
            "<p class='narrative whisper'>You smell it before you see it. Fungal. Rotten. Alive.</p>"
        ],

        // When finding supplies
        loot: [
            "<p class='narrative'>A brick. Heavy. Satisfying. This will do.</p>",
            "<p class='narrative'>Crafting supplies: alcohol, rags, blades. You know what to make.</p>",
            "<p class='narrative'>A hunting rifle. Bolt action. Someone maintained this with love.</p>",
            "<p class='narrative'>Supplements. The labels say they enhance awareness. You don't question it.</p>"
        ],

        // When encountering infected
        infected: [
            "<p class='narrative'>They were human once. The fungus sprouting from their skulls says otherwise.</p>",
            "<p class='narrative'>Runners. Fast. Mindless. Still fresh enough to scream.</p>",
            "<p class='narrative'>A stalker. Watching. Waiting. Playing with its food.</p>",
            "<p class='narrative'>The bloated one is covered in armored fungal plates. Your bullets mean nothing.</p>"
        ],

        // When in quiet moments
        peace: [
            "<p class='narrative'>For a moment, you forget. The sun is warm. The world is still beautiful, if you know where to look.</p>",
            "<p class='narrative'>A mural of a giraffe on the wall. Something about it makes you smile.</p>",
            "<p class='narrative'>Jin picks up the guitar. His fingers find the frets. The melody is sad but hopeful.</p>",
            "<p class='narrative'>'You know what I miss? Movies. Real movies. On big screens.' Jin stares at the sky. 'And popcorn.'</p>"
        ],

        // References to factions
        factions: [
            "<p class='narrative'>The Fireflies believed in a cure. In hope. In light at the end. They found only darkness.</p>",
            "<p class='narrative'>Hunters patrol these streets. Not for infected. For people. For sport.</p>",
            "<p class='narrative'>WLF territory. Washington Liberation Front. They fight like they have nothing left to lose.</p>",
            "<p class='narrative'>Seraphites. They found God in the collapse. Their god demands blood.</p>"
        ]
    },

    // Get random environment description
    getEnvironment() {
        return this.environments[Math.floor(Math.random() * this.environments.length)];
    },

    // Get random dialogue for context
    getDialogue(context) {
        const matches = this.dialogueSnippets.filter(d => d.context === context);
        if (matches.length === 0) return null;
        return matches[Math.floor(Math.random() * matches.length)].line;
    },

    // Get section injection
    getSectionInjection(type) {
        const options = this.sectionInjections[type];
        if (!options) return null;
        return options[Math.floor(Math.random() * options.length)];
    },

    // Inject easter egg into content (10% chance)
    maybeInject(content, sectionType) {
        if (Math.random() > 0.10) return content;

        const injection = this.getSectionInjection(sectionType);
        if (!injection) return content;

        // Insert before the last paragraph
        return content.replace(
            /<\/p>(?![\s\S]*<\/p>)/,
            '</p>' + injection
        );
    },

    // Special: Generate a random "old survivor" character
    getOldSurvivor() {
        const name = this.names.oldSurvivor[Math.floor(Math.random() * this.names.oldSurvivor.length)];
        return {
            name,
            description: `An older man, maybe fifty. Lines etched deep. Hands that have done terrible things. But his eyes... there is something protective there. Fierce.`,
            dialogue: [
                `"I've been at this a long time. Longer than most. You learn to survive. You learn what matters."`,
                `"Trust me on this. When it comes down to it, you make a choice. And you live with it."`,
                `"I'm not a good man. But I'm not all bad either."`,
                `"You stick with me, you follow my rules, you might just make it."`
            ]
        };
    },

    // Generate a companion that parallels a certain relationship
    generateCompanionMoment() {
        const moments = [
            {
                setup: "Jin hands you something. A switchblade with a moth carved into the handle.",
                dialogue: "'Found this. Thought of you. The moth symbolizes transformation. Survival.'",
                significance: "It is the first gift anyone has given you since the fall."
            },
            {
                setup: "You find a record player that still works. One vinyl: an old country song.",
                dialogue: "Jin looks at you. 'Dance with me. Just... pretend, for a minute.'",
                significance: "You dance in the ruins. And for a moment, it is not the end of the world."
            },
            {
                setup: "A guitar. Two strings work. Jin plays something slow.",
                dialogue: "'I taught myself. After... everything. Music was the only thing that made sense.'",
                significance: "He plays until you fall asleep. And for once, no nightmares."
            },
            {
                setup: "The infected are gone. The path is clear. And there—impossibly—a giraffe.",
                dialogue: "'How...?' Jin stares. 'It must have escaped from the zoo.'",
                significance: "You both stand there. Watching. Some beauty survives even this."
            }
        ];

        return moments[Math.floor(Math.random() * moments.length)];
    }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { EasterEggs };
}
