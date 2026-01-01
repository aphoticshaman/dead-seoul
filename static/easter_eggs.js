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
        "You hear clicking in the distance. Rhythmic. Searching.",
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
        "The aquarium is dark now, but you can still hear the ocean through the walls."
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
