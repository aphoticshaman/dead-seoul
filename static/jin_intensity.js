// ═══════════════════════════════════════════════════════════════════════════
// JIN INTENSITY ENGINE - The Heat Before the Fade
// ═══════════════════════════════════════════════════════════════════════════
// Dark romance energy. Possessive. Claiming. Obsessive devotion.
// The tension that breaks you. The almost that destroys you.
// ═══════════════════════════════════════════════════════════════════════════

const JinIntensity = {

    // Trust unlocks intensity tiers
    tiers: {
        guarded: { min: 0, max: 2 },      // He watches. He waits.
        interested: { min: 3, max: 5 },    // He's decided something.
        possessive: { min: 6, max: 8 },    // You're his. You just don't know it yet.
        obsessed: { min: 9, max: 12 },     // He'd burn cities for you.
        claimed: { min: 13, max: 99 }      // There is no you without him anymore.
    },

    // Get current tier based on Jin trust
    getCurrentTier(jinTrust) {
        for (const [tier, range] of Object.entries(this.tiers)) {
            if (jinTrust >= range.min && jinTrust <= range.max) return tier;
        }
        return 'claimed';
    },

    // ═══════════════════════════════════════════════════════════════════════
    // INTENSITY MOMENTS - Scenes that escalate with trust
    // ═══════════════════════════════════════════════════════════════════════

    moments: {
        // GUARDED - He's watching
        guarded: [
            {
                id: 'first_look',
                trigger: 'eye_contact',
                content: `
                    <p class="narrative jin-moment">Jin's eyes find yours across the room. He doesn't look away.</p>
                    <p class="narrative">Most people look away. He doesn't. He holds your gaze until you're the one who breaks.</p>
                    <p class="narrative">When you glance back, he's still watching. A ghost of a smile on his lips.</p>
                `
            },
            {
                id: 'proximity',
                trigger: 'close_quarters',
                content: `
                    <p class="narrative jin-moment">The space is small. Jin is close. Closer than he needs to be.</p>
                    <p class="narrative">"Sorry," he says, but he doesn't move. His voice is low. "Tight fit."</p>
                    <p class="narrative">He's not sorry. You both know it.</p>
                `
            }
        ],

        // INTERESTED - He's decided
        interested: [
            {
                id: 'deliberate_touch',
                trigger: 'contact',
                content: `
                    <p class="narrative jin-moment">Jin's hand brushes yours. Once could be accident. Twice is coincidence.</p>
                    <p class="narrative">The third time, his fingers linger. Trace across your knuckles. Slow. Deliberate.</p>
                    <p class="narrative">"You should be more careful," he murmurs. But his touch says he'll catch you every time.</p>
                `
            },
            {
                id: 'name_drop',
                trigger: 'conversation',
                content: `
                    <p class="narrative jin-moment">"Say my name," Jin says. It's not a request.</p>
                    <p class="narrative">You do. He closes his eyes. Something shifts in his expression—darker, hungrier.</p>
                    <p class="narrative">"Again."</p>
                    <p class="narrative">You obey before you realize you've chosen to.</p>
                `
            },
            {
                id: 'possessive_stance',
                trigger: 'threat_nearby',
                content: `
                    <p class="narrative jin-moment">Someone looks at you too long. Jin notices.</p>
                    <p class="narrative">He doesn't say anything. He just... shifts. Places himself between you and them. His hand finds the small of your back. Stays there.</p>
                    <p class="narrative">The stranger looks away. Jin's hand doesn't move.</p>
                    <p class="narrative">"Problem?" you ask.</p>
                    <p class="narrative">"Not anymore."</p>
                `
            }
        ],

        // POSSESSIVE - You're his
        possessive: [
            {
                id: 'the_wall',
                trigger: 'confrontation',
                content: `
                    <p class="narrative jin-moment">You've pushed too far. Said something. Done something.</p>
                    <p class="narrative">Jin moves. Fast. Your back hits the wall before you can blink. His hands cage you on either side.</p>
                    <p class="narrative">"Don't," he breathes, and his voice is wrecked. "Don't do that again."</p>
                    <p class="narrative">His forehead drops to yours. His breath shakes. "I can't—" He stops. Swallows hard.</p>
                    <p class="narrative">"I can't lose you. Do you understand? I won't survive it."</p>
                `
            },
            {
                id: 'the_claim',
                trigger: 'jealousy',
                content: `
                    <p class="narrative jin-moment">"Who was that?" Jin's voice is too calm. Too controlled.</p>
                    <p class="narrative">"No one. Just—"</p>
                    <p class="narrative">"Don't." He steps close. Tilts your chin up with two fingers. Forces you to meet his eyes. "Don't lie to me. Not you."</p>
                    <p class="narrative">His thumb traces your lower lip. Slow. Possessive. "You're mine," he says quietly. "Tell me you know that."</p>
                    <p class="narrative">Your voice comes out smaller than you intended. "I know."</p>
                    <p class="narrative">"Good girl."</p>
                `
            },
            {
                id: 'marked',
                trigger: 'intimate',
                content: `
                    <p class="narrative jin-moment">Jin's lips find your neck. Not a kiss—a brand. He stays there, breathing you in.</p>
                    <p class="narrative">"I want everyone to know," he murmurs against your skin. "I want them to see you and know you belong to someone. To me."</p>
                    <p class="narrative">His teeth graze. Just enough to make you gasp.</p>
                    <p class="narrative">"Can I?" he asks. Always asks. Even when his control is hanging by a thread.</p>
                `
            },
            {
                id: 'night_protection',
                trigger: 'sleep',
                content: `
                    <p class="narrative jin-moment">You wake to find Jin awake. Watching you.</p>
                    <p class="narrative">"How long have you been—"</p>
                    <p class="narrative">"Doesn't matter." He pulls you closer. His arm around you is iron. "Go back to sleep."</p>
                    <p class="narrative">"Jin—"</p>
                    <p class="narrative">"I like watching you sleep." His voice is rough. "You look peaceful. Safe. I want to keep you that way."</p>
                    <p class="narrative">His lips brush your hair. "Nothing touches you while I'm here. Nothing."</p>
                `
            }
        ],

        // OBSESSED - He'd burn cities
        obsessed: [
            {
                id: 'almost',
                trigger: 'tension_peak',
                content: `
                    <p class="narrative jin-moment">His mouth hovers over yours. Close enough to feel his breath. Not close enough to taste.</p>
                    <p class="narrative">"Tell me to stop," Jin says. His voice is gravel and smoke. "Tell me to stop and I will."</p>
                    <p class="narrative">You don't tell him to stop.</p>
                    <p class="narrative">His hand fists in your hair. Tilts your head back. Exposes your throat.</p>
                    <p class="narrative">"Last chance." His lips brush yours as he speaks. Barely there. Devastating.</p>
                    <p class="narrative">You close the distance yourself.</p>
                `
            },
            {
                id: 'the_confession',
                trigger: 'vulnerable',
                content: `
                    <p class="narrative jin-moment">"I knew," Jin says into the darkness. "From the first moment. I knew you'd ruin me."</p>
                    <p class="narrative">His hand finds yours. Interlaces. Holds on like you might disappear.</p>
                    <p class="narrative">"I should have walked away. Kept my distance. Protected you from... this." He laughs, broken. "From me."</p>
                    <p class="narrative">"But I couldn't. I saw you and I was done. There was no choice. There was never a choice."</p>
                    <p class="narrative">He turns to face you. Even in the dark, his eyes burn.</p>
                    <p class="narrative">"You are the only thing I want to survive for. The only thing worth surviving."</p>
                `
            },
            {
                id: 'violence_for_you',
                trigger: 'threat_direct',
                content: `
                    <p class="narrative jin-moment">They made a mistake. They touched you.</p>
                    <p class="narrative">Jin doesn't yell. Doesn't threaten. He just... moves.</p>
                    <p class="narrative">When it's over—and it's over fast—he comes back to you. His knuckles are split. There's blood on his shirt. His hands shake as he cups your face.</p>
                    <p class="narrative">"Are you hurt?" His voice cracks. "Did they hurt you?"</p>
                    <p class="narrative">"Jin, you—"</p>
                    <p class="narrative">"I don't care what I did." His forehead presses to yours. "I would do it again. I would do worse. Anyone who touches you dies. That's not a threat. That's just... how it is now."</p>
                `
            },
            {
                id: 'worship',
                trigger: 'soft_moment',
                content: `
                    <p class="narrative jin-moment">Jin traces patterns on your skin. Slow. Reverent.</p>
                    <p class="narrative">"You don't know what you are," he murmurs. "What you do to me."</p>
                    <p class="narrative">His lips follow where his fingers lead. Your shoulder. Your collarbone. The hollow of your throat.</p>
                    <p class="narrative">"I would worship you," he breathes against your skin. "If you let me. I would spend the rest of my life on my knees for you."</p>
                    <p class="narrative">He looks up at you. Waiting. Always giving you the choice.</p>
                    <p class="narrative">"Let me."</p>
                `
            }
        ],

        // CLAIMED - There is no you without him
        claimed: [
            {
                id: 'the_edge',
                trigger: 'peak_intimacy',
                content: `
                    <p class="narrative jin-moment">Jin's control snaps.</p>
                    <p class="narrative">One moment he's holding back, always holding back. The next his mouth is on yours like he's drowning and you're air.</p>
                    <p class="narrative">He walks you backward. Hands everywhere. Claiming. Demanding.</p>
                    <p class="narrative">"I tried," he growls against your lips. "I tried to be patient. To be good."</p>
                    <p class="narrative">He lifts you like you weigh nothing. Your legs wrap around him on instinct.</p>
                    <p class="narrative">"I'm done being good."</p>
                `
            },
            {
                id: 'the_taking',
                trigger: 'explicit',
                content: `
                    <p class="narrative jin-moment">He talks the entire time. That's what ruins you.</p>
                    <p class="narrative">Not rough silence. Not wordless taking. His voice in your ear, low and wrecked, telling you exactly what he's doing. What he's going to do. How you feel around him.</p>
                    <p class="narrative">"That's it," he breathes, filling you inch by inch, agonizingly slow. "Take all of me. Every. Single. Inch."</p>
                    <p class="narrative">You moan. Can't help it. He swallows the sound with his mouth.</p>
                    <p class="narrative">"You're so perfect," he growls. "Made for me. Only for me."</p>
                    <p class="narrative">He sets a pace that's devastating. Deep. Relentless.</p>
                    <p class="narrative">"Say my name." A command. "I want to hear it."</p>
                    <p class="narrative">You do. Again. And again. Until it's the only word you remember.</p>
                `
            },
            {
                id: 'complete_possession',
                trigger: 'climax',
                content: `
                    <p class="narrative jin-moment">"Look at me." Jin's hand grips your chin. Forces your eyes to his. "I want to watch you fall apart."</p>
                    <p class="narrative">He doesn't let up. Harder. Deeper. Hitting that spot that makes you see stars.</p>
                    <p class="narrative">"You're close," he says. It's not a question. He knows your body better than you do. "I can feel you."</p>
                    <p class="narrative">His thumb finds where you need him most. Circles. Presses.</p>
                    <p class="narrative">"Come for me." His voice is gravel. "Now."</p>
                    <p class="narrative">You shatter. He follows you over the edge with your name on his lips like a prayer.</p>
                    <p class="narrative">After, he holds you like you might disappear. Kisses your shoulder. Your neck. The curve of your ear.</p>
                    <p class="narrative">"Mine," he whispers. Satisfied. Possessive. Complete.</p>
                `
            },
            {
                id: 'against_the_wall',
                trigger: 'urgent',
                content: `
                    <p class="narrative jin-moment">There's no time. No patience. Just need.</p>
                    <p class="narrative">Jin has you against the wall before you can breathe. Your clothes disappear—torn, pushed aside, he doesn't care. Neither do you.</p>
                    <p class="narrative">"Legs around me." His voice is command and desperation. "Now."</p>
                    <p class="narrative">You obey. He enters you in one thrust and you both groan.</p>
                    <p class="narrative">"Fuck." He holds still. Forehead against yours. Shaking with restraint. "You feel—god, you feel—"</p>
                    <p class="narrative">He moves. Hard. Fast. Your back scrapes against the wall and you don't care.</p>
                    <p class="narrative">"Louder." His teeth on your ear. "I want everyone to know who's making you scream."</p>
                `
            },
            {
                id: 'slow_worship',
                trigger: 'tender_explicit',
                content: `
                    <p class="narrative jin-moment">Tonight, Jin takes his time.</p>
                    <p class="narrative">His mouth maps every inch of you. Learns you. Worships you.</p>
                    <p class="narrative">"Beautiful," he murmurs against your stomach. Your hip. Lower. "Every part of you."</p>
                    <p class="narrative">When his tongue finds your center, you arch off the bed. He presses you back down. Holds you there.</p>
                    <p class="narrative">"Stay still." Command and promise. "Let me take care of you."</p>
                    <p class="narrative">He brings you to the edge. Backs off. Again. And again. Until you're begging.</p>
                    <p class="narrative">"Please, Jin—"</p>
                    <p class="narrative">"Please what?" He looks up at you, lips wet, eyes dark. "Use your words."</p>
                    <p class="narrative">You tell him. Explicitly. He grins like the devil himself and gives you exactly what you asked for.</p>
                `
            },
            {
                id: 'the_morning_after',
                trigger: 'wake',
                content: `
                    <p class="narrative jin-moment">Morning light. Jin is already awake, tracing lazy circles on your hip.</p>
                    <p class="narrative">"How are you feeling?" he asks. His voice is soft but his eyes are anything but.</p>
                    <p class="narrative">"Sore," you admit.</p>
                    <p class="narrative">He grins. Actually grins. Smug and satisfied and devastating.</p>
                    <p class="narrative">"Good." He pulls you closer. Kisses your shoulder. Your neck. The marks he left there. "That was the goal."</p>
                    <p class="narrative">"You're terrible."</p>
                    <p class="narrative">"You weren't complaining last night." His hand slides lower. "In fact, you were saying my name quite a lot."</p>
                `
            },
            {
                id: 'the_promise',
                trigger: 'commitment',
                content: `
                    <p class="narrative jin-moment">"Marry me."</p>
                    <p class="narrative">It's not a question. Jin is on his knees but there's nothing submissive about him. He looks like a man making a vow. A threat. A promise.</p>
                    <p class="narrative">"I know we might die tomorrow. I know the world is ending. I don't care."</p>
                    <p class="narrative">He holds up a ring. Where he found it, you don't know. It's perfect.</p>
                    <p class="narrative">"Marry me. Be mine. Let me be yours. For however long we have—a day, a year, a lifetime."</p>
                    <p class="narrative">His voice breaks on the next words.</p>
                    <p class="narrative">"I can't do this without you. I won't."</p>
                `
            },
            {
                id: 'forever',
                trigger: 'ending',
                content: `
                    <p class="narrative jin-moment">Years from now, Jin still looks at you the same way.</p>
                    <p class="narrative">Like you're a miracle. Like he can't believe you're real. Like he'd still burn the world for you and consider it a bargain.</p>
                    <p class="narrative">"What?" you ask, catching him staring.</p>
                    <p class="narrative">"Nothing." He pulls you close. "Just... remembering that first look. When I knew."</p>
                    <p class="narrative">"Knew what?"</p>
                    <p class="narrative">"That you were going to destroy me." He kisses your temple. "And I was going to let you."</p>
                    <p class="narrative">"Any regrets?"</p>
                    <p class="narrative">His laugh is warm. Content. Complete.</p>
                    <p class="narrative">"Not a single one."</p>
                `
            }
        ]
    },

    // ═══════════════════════════════════════════════════════════════════════
    // DYNAMIC DIALOGUE - Jin's voice changes with intensity
    // ═══════════════════════════════════════════════════════════════════════

    getDialogueFlavor(tier) {
        const flavors = {
            guarded: {
                nicknames: ["you", "survivor"],
                tone: "controlled, watching",
                commands: false
            },
            interested: {
                nicknames: ["beautiful", "you"],
                tone: "warm but measured",
                commands: false
            },
            possessive: {
                nicknames: ["mine", "beautiful", "baby"],
                tone: "low, intense, barely controlled",
                commands: true
            },
            obsessed: {
                nicknames: ["my heart", "mine", "everything"],
                tone: "wrecked, desperate, devoted",
                commands: true
            },
            claimed: {
                nicknames: ["wife", "my love", "my everything", "good girl"],
                tone: "warm, possessive, permanent",
                commands: true
            }
        };
        return flavors[tier] || flavors.guarded;
    },

    // Get a random moment for the current tier
    getMoment(jinTrust, trigger = null) {
        const tier = this.getCurrentTier(jinTrust);
        const moments = this.moments[tier];

        if (trigger) {
            const triggered = moments.find(m => m.trigger === trigger);
            if (triggered) return triggered;
        }

        return moments[Math.floor(Math.random() * moments.length)];
    },

    // Should we inject an intensity moment? (20% chance per qualifying section)
    shouldInject(jinTrust, sectionContent) {
        if (jinTrust < 3) return false; // Need some trust first

        const lower = sectionContent.toLowerCase();
        const hasJin = lower.includes('jin');
        const isIntimate = lower.includes('alone') || lower.includes('quiet') ||
                          lower.includes('night') || lower.includes('close');

        if (!hasJin) return false;
        if (!isIntimate && Math.random() > 0.1) return false; // 10% for non-intimate
        if (isIntimate && Math.random() > 0.3) return false;  // 30% for intimate

        return true;
    },

    // Inject intensity into section content
    injectIntensity(content, jinTrust) {
        if (!this.shouldInject(jinTrust, content)) return content;

        const moment = this.getMoment(jinTrust);

        // Insert after first paragraph
        return content.replace(
            /<\/p>/,
            '</p>' + moment.content
        );
    },

    // ═══════════════════════════════════════════════════════════════════════
    // TENSION BUILDERS - Lead-up to the fade
    // ═══════════════════════════════════════════════════════════════════════

    tensionBuilders: [
        {
            phase: 1,
            content: `His eyes drop to your lips. Just for a second. He looks away.`
        },
        {
            phase: 2,
            content: `"We shouldn't," he says. But he steps closer, not away.`
        },
        {
            phase: 3,
            content: `His hand cups your face. Thumb traces your cheekbone. He's shaking.`
        },
        {
            phase: 4,
            content: `"Tell me to stop." His voice is barely a whisper. "Please. Tell me to stop."<br><br>You don't.`
        },
        {
            phase: 5,
            content: `[The world narrows to just this. Just him. Just the heat between you.]<br><br>[Fade to black—but you both know what comes next.]`
        }
    ],

    // Build tension across a scene
    buildTension(currentPhase) {
        const phases = this.tensionBuilders.filter(t => t.phase <= currentPhase);
        return phases.map(p => `<p class="narrative tension-${p.phase}">${p.content}</p>`).join('');
    }
};

// ═══════════════════════════════════════════════════════════════════════════
// DARK ROMANCE CHOICES - Options that lean into the intensity
// ═══════════════════════════════════════════════════════════════════════════

const DarkRomanceChoices = {

    // Choices that acknowledge the dynamic
    submissionChoices: [
        { text: "Let him.", jin: 3, intensity: true },
        { text: "Good girl, he said. And you wanted to be.", jin: 3, intensity: true },
        { text: "You trust him. Completely.", jin: 2, intensity: true },
        { text: "\"Yes, sir.\" The words slip out before you can stop them.", jin: 4, intensity: true }
    ],

    // Choices that push his buttons (bratty)
    bratChoices: [
        { text: "\"Make me.\"", jin: 2, intensity: true, brat: true },
        { text: "You smile. Innocent. You're anything but.", jin: 2, intensity: true, brat: true },
        { text: "Run. Make him chase you.", jin: 3, intensity: true, brat: true },
        { text: "Disobey. Just to see what he'll do.", jin: 2, intensity: true, brat: true }
    ],

    // Choices that show trust
    vulnerableChoices: [
        { text: "Let him see you. All of you.", jin: 3, intensity: true },
        { text: "\"I'm yours.\" Say it. Mean it.", jin: 4, intensity: true },
        { text: "Fall apart. Let him put you back together.", jin: 3, intensity: true },
        { text: "Tell him things you've never told anyone.", jin: 3, intensity: true }
    ],

    // Get intensity choices based on trust level
    getIntensityChoices(jinTrust, context = 'general') {
        if (jinTrust < 6) return []; // Need to earn these

        const tier = JinIntensity.getCurrentTier(jinTrust);
        let pool = [];

        if (tier === 'possessive' || tier === 'obsessed' || tier === 'claimed') {
            pool = [...this.submissionChoices, ...this.bratChoices, ...this.vulnerableChoices];
        }

        // Return 1-2 random choices
        const shuffled = pool.sort(() => Math.random() - 0.5);
        return shuffled.slice(0, Math.min(2, shuffled.length));
    }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { JinIntensity, DarkRomanceChoices };
}
