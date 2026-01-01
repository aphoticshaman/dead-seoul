// ═══════════════════════════════════════════════════════════════════════════
// JIN THREAD - The Core Romance
// ═══════════════════════════════════════════════════════════════════════════
// Jin appears early and unavoidably. He's the one who matters.
// This thread integrates with existing story but creates guaranteed Jin path.
// ═══════════════════════════════════════════════════════════════════════════

const JIN_THREAD = {

    // ═══════════════════════════════════════════════════════════════════════
    // JIN INTRODUCTION - Appears in Section 2 or 3, always
    // ═══════════════════════════════════════════════════════════════════════

    // This section is injected after section 1 regardless of choice
    100: {
        title: "THE STRANGER",
        thread: "jin",
        jinIntro: true,
        content: `
            <p class="narrative">The stairwell is dark. Emergency lights flicker red.</p>

            <p class="narrative">You hear footsteps. Coming up.</p>

            <p class="narrative">You press against the wall, weapon ready. Whatever's coming—</p>

            <p class="narrative">A man rounds the corner. Stops dead.</p>

            <p class="narrative">He's maybe thirty. Lean, with sharp eyes and a face that's seen too much. Military bearing, but something softer underneath. A scar runs along his jaw. His hands are raised—one holds a knife, the other is open, showing peace.</p>

            <p class="dialogue">"Not infected," he says. Low voice. Calm. "Just trying to get to the roof. Radio equipment up there."</p>

            <p class="narrative">His eyes meet yours. Dark. Deep. Something in them makes your chest tight.</p>

            <p class="narrative">He waits. Lets you decide.</p>
        `,
        choices: [
            { text: "Lower your weapon. \"I'm Yuna.\"", target: 101, jin: 2, loyalty: 1 },
            { text: "Keep it raised. \"Why should I trust you?\"", target: 102, jin: 0, loyalty: 0 },
            { text: "\"You look like you know what you're doing. I'm coming with you.\"", target: 103, jin: 1, loyalty: 1 }
        ]
    },

    101: {
        title: "FIRST MEETING",
        thread: "jin",
        jinMoment: true,
        content: `
            <p class="narrative">You lower your weapon. Something about him—you trust it. Against all logic.</p>

            <p class="dialogue">"I'm Yuna."</p>

            <p class="narrative">He doesn't smile. But his eyes warm, just slightly.</p>

            <p class="dialogue">"Jin."</p>

            <p class="narrative">He steps closer. Slowly. Giving you time to retreat if you want.</p>

            <p class="narrative">You don't.</p>

            <p class="narrative">He's close enough now that you can see the details. The way his hands are scarred. The way he's positioned himself—between you and the stairs, like he's already protecting you without being asked.</p>

            <p class="dialogue">"There's a safe route to the roof. I can show you." A pause. "Or you can go your own way. No pressure."</p>

            <p class="narrative">But there's something in his voice. Like he's hoping you'll choose to stay.</p>

            <!-- DREAMCATCHER MOMENT -->
            <p class="narrative">He reaches into his pocket. Pulls out something small, wrapped in cloth.</p>

            <p class="dialogue">"Here."</p>

            <p class="narrative">A dreamcatcher. Tiny, delicate. Crow feathers and red thread.</p>

            <p class="dialogue">"My grandmother taught me to make these," he says. "Before everything. She said nightmares get caught in the web. Only good dreams slip through."</p>

            <p class="narrative">You stare at him. At this stranger who just gave you a handmade gift in the middle of an apocalypse.</p>

            <p class="dialogue">"I can't—"</p>

            <p class="dialogue">"You look like you need it more than me." His fingers brush yours when you take it. Warm. "The nightmares here are real. Might as well catch the ones in your head."</p>
        `,
        choices: [
            { text: "\"Thank you, Jin.\" Mean it. Follow him.", target: 104, jin: 3, loyalty: 2 },
            { text: "Follow him silently. The gift says enough.", target: 104, jin: 2, loyalty: 1 },
            { text: "\"You're either crazy or the best thing that's happened today.\"", target: 104, jin: 2, loyalty: 1 }
        ],
        onEnter: function() {
            // Award dreamcatcher item
            if (typeof LifeMoments !== 'undefined') {
                LifeMoments.awardDreamcatcher();
            }
        }
    },

    102: {
        title: "EARNED TRUST",
        thread: "jin",
        content: `
            <p class="narrative">You keep your weapon raised. Smart. You don't know him.</p>

            <p class="dialogue">"Why should I trust you?"</p>

            <p class="narrative">He doesn't get offended. Doesn't posture. Just nods, like your suspicion is reasonable. Refreshing.</p>

            <p class="dialogue">"You shouldn't. Not yet." He lowers his knife. Tucks it away. "Trust is earned. But I can tell you three things."</p>

            <p class="narrative">He holds up a finger.</p>

            <p class="dialogue">"One: I'm immune. Got bit three days ago. Still standing."</p>

            <p class="narrative">Second finger.</p>

            <p class="dialogue">"Two: I was a military medic. I can help you if you get hurt."</p>

            <p class="narrative">Third finger.</p>

            <p class="dialogue">"Three: I have a working radio. And I know where there's a safe zone."</p>

            <p class="narrative">He lets his hand fall.</p>

            <p class="dialogue">"Still don't trust me? Fine. But at least let me help you get out of this building alive. After that, we go our separate ways. Deal?"</p>
        `,
        choices: [
            { text: "\"Deal. But you walk in front.\"", target: 104, jin: 1, loyalty: 1 },
            { text: "\"Immune? Prove it.\"", target: 105, jin: 0, loyalty: 0 },
            { text: "\"You had me at medic. Let's move.\"", target: 104, jin: 2, loyalty: 1 }
        ]
    },

    103: {
        title: "INSTANT ALLIANCE",
        thread: "jin",
        content: `
            <p class="narrative">You don't hesitate. In apocalypse math, competence is currency. This man has it.</p>

            <p class="dialogue">"You look like you know what you're doing. I'm coming with you."</p>

            <p class="narrative">He blinks. Wasn't expecting that.</p>

            <p class="dialogue">"Just like that?"</p>

            <p class="dialogue">"Just like that."</p>

            <p class="narrative">Something shifts in his expression. Not quite a smile, but close.</p>

            <p class="dialogue">"I'm Jin."</p>

            <p class="dialogue">"Yuna."</p>

            <p class="dialogue">"Yuna." He repeats it like he's memorizing it. Testing how it feels in his mouth. "I like that."</p>

            <p class="narrative">He turns, starts up the stairs. Pauses. Looks back.</p>

            <p class="dialogue">"Keep up. And stay close."</p>

            <p class="narrative">It sounds like an order. It feels like a promise.</p>
        `,
        choices: [
            { text: "Stay close. Exactly as he said.", target: 104, jin: 2, loyalty: 2 },
            { text: "\"Don't worry about me. Worry about yourself.\"", target: 104, jin: 1, loyalty: 1 }
        ]
    },

    104: {
        title: "THE ROOFTOP",
        thread: "jin",
        content: `
            <p class="narrative">The roof is chaos below, calm above.</p>

            <p class="narrative">Seoul burns. Smoke pillars rise from every district. You can hear screaming, distant, constant—a city's death rattle.</p>

            <p class="narrative">Jin moves to the radio tower. Expert hands adjust dials, frequencies. He's done this before.</p>

            <p class="narrative">Static. Then:</p>

            <p class="dialogue"><em>"—repeat, safe zone at Bukhansan National Park. Military protection. Supplies. All survivors proceed to—"</em></p>

            <p class="narrative">Jin looks at you.</p>

            <p class="dialogue">"Bukhansan. Two hour hike through infected territory." He pauses. "Or we could try for the coast. Boats to Jeju. Longer, but maybe safer."</p>

            <p class="narrative">He's asking. Not telling. Giving you the choice.</p>

            <p class="dialogue">"I know both routes," he adds. "Either way, I've got your back."</p>

            <p class="narrative">He says it simply. Like it's obvious. Like he's already decided.</p>
        `,
        choices: [
            { text: "\"Bukhansan. More survivors means more safety.\"", target: 106, jin: 1, loyalty: 2 },
            { text: "\"The coast. I trust smaller groups.\"", target: 107, jin: 2, loyalty: 1 },
            { text: "\"Which would YOU choose?\"", target: 108, jin: 3, loyalty: 1 }
        ]
    },

    105: {
        title: "PROOF OF IMMUNITY",
        thread: "jin",
        content: `
            <p class="narrative">"Immune? Prove it."</p>

            <p class="narrative">He doesn't argue. Just pushes up his sleeve.</p>

            <p class="narrative">A bite mark. Clearly human—the shape of a jaw. Three days old, by the healing.</p>

            <p class="narrative">No infection. No spreading rot. Just clean scar tissue forming.</p>

            <p class="dialogue">"Hospital break," he says. "Day one of the outbreak. Patient coded, then came back wrong. Caught me before I understood what was happening."</p>

            <p class="narrative">He rolls his sleeve back down.</p>

            <p class="dialogue">"Thought I was dead. Waited. Nothing happened." He meets your eyes. "I don't know why. Genetic lottery, maybe. All I know is—I can get close to them without the same risk. That's useful."</p>

            <p class="narrative">Useful. An understatement.</p>

            <p class="dialogue">"I'm not asking you to trust me," he says. "I'm asking you to let me help. After we're out, you never have to see me again."</p>

            <p class="narrative">Something in his voice makes you think he hopes that's not true.</p>
        `,
        choices: [
            { text: "\"Fine. You've earned a chance.\"", target: 104, jin: 1, loyalty: 1 },
            { text: "\"An immune medic? You might be the most valuable person in Seoul.\"", target: 104, jin: 2, loyalty: 1 }
        ]
    },

    106: {
        title: "THE MOUNTAIN PATH",
        thread: "jin",
        content: `
            <p class="narrative">Bukhansan is hell.</p>

            <p class="narrative">Infected everywhere—in the forests, on the trails, shambling through parking lots that used to hold Sunday hikers.</p>

            <p class="narrative">Jin moves like a ghost. Knows exactly where to step, when to freeze, how to redirect their attention with thrown rocks and subtle sounds.</p>

            <p class="dialogue">"Medic training," he explains in a whisper. "Learned to move quietly in combat zones. Never thought I'd use it for this."</p>

            <p class="narrative">At one point, you slip. A branch cracks. Three of them turn.</p>

            <p class="narrative">Jin grabs you. Presses you against the tree. His body covering yours. His hand over your mouth—gentle, but firm.</p>

            <p class="dialogue">"Don't move," he breathes against your ear. "I've got you."</p>

            <p class="narrative">The infected shamble past. So close you can smell the rot.</p>

            <p class="narrative">Jin doesn't move. Neither do you. His heart beats against your back. Steady. Calm.</p>

            <p class="narrative">When they're gone, he releases you. Steps back.</p>

            <p class="dialogue">"Sorry. I—"</p>

            <p class="dialogue">"Don't apologize." Your voice is steadier than you expected. "You saved us."</p>

            <p class="narrative">Something flickers in his eyes. He nods.</p>

            <p class="narrative">You keep walking. But closer now. Your shoulders almost touching.</p>
        `,
        choices: [
            { text: "\"Thank you. For keeping me safe.\"", target: 109, jin: 2, loyalty: 1 },
            { text: "Take his hand. Just for a moment.", target: 109, jin: 3, loyalty: 2 },
            { text: "Focus on the mission. No distractions.", target: 109, jin: 0, loyalty: 0 }
        ]
    },

    107: {
        title: "THE COASTAL ROUTE",
        thread: "jin",
        jinMoment: true,
        content: `
            <p class="narrative">The coast is quieter. Infected don't like the salt air—something Jin noticed early on.</p>

            <p class="narrative">You walk for hours. The sun sets over the Yellow Sea, painting the water gold and red. Somewhere else, in another life, this would be beautiful.</p>

            <p class="narrative">Jin stops at an overlook. Stares at the horizon.</p>

            <p class="dialogue">"I had a family once," he says. Not looking at you. "Parents. A sister. They were in Busan when it started."</p>

            <p class="narrative">You don't say anything. Just stand beside him.</p>

            <p class="dialogue">"I don't know if they're alive. Probably not." His jaw tightens. "I keep moving because stopping means thinking. And thinking means—"</p>

            <p class="narrative">He stops. Shakes his head.</p>

            <p class="dialogue">"Sorry. You don't need my baggage."</p>

            <p class="dialogue">"Maybe I want it."</p>

            <p class="narrative">He looks at you. Really looks. Like he's seeing you for the first time.</p>

            <p class="dialogue">"Why?"</p>

            <p class="dialogue">"Because you're the first person who's treated me like a person since this started. Not a liability. Not a victim. A partner."</p>

            <p class="narrative">Something shifts in his expression. Softens.</p>

            <p class="dialogue">"Partners, then." He holds out his hand. Not a handshake—an offer. "Whatever comes next, we face it together."</p>
        `,
        choices: [
            { text: "Take his hand. \"Together.\"", target: 109, jin: 4, loyalty: 3 },
            { text: "Nod. Words aren't necessary.", target: 109, jin: 2, loyalty: 2 },
            { text: "Hug him instead. He needs it.", target: 110, jin: 5, loyalty: 3 }
        ]
    },

    108: {
        title: "HIS CHOICE",
        thread: "jin",
        jinMoment: true,
        content: `
            <p class="narrative">"Which would you choose?"</p>

            <p class="narrative">Jin pauses. Considers.</p>

            <p class="dialogue">"Honestly? Neither."</p>

            <p class="dialogue">"Then what?"</p>

            <p class="dialogue">"There's an island. Ulleungdo. Remote, defensible, minimal population. If the infection spread by air, it would have hit everywhere. It didn't. Which means the island might still be clean."</p>

            <p class="narrative">He looks at you. Assessing.</p>

            <p class="dialogue">"It's a longer journey. More dangerous. But if we make it—we'd be safe. Really safe."</p>

            <p class="narrative">He takes a breath.</p>

            <p class="dialogue">"I've been saving this option. Wasn't sure I'd find anyone worth sharing it with."</p>

            <p class="narrative">The implication hangs in the air.</p>

            <p class="dialogue">"But you asked what I would choose. So I'm telling you." He holds your gaze. "I'd choose to take you somewhere the nightmares can't follow."</p>
        `,
        choices: [
            { text: "\"Then take me there.\" Trust him completely.", target: 111, jin: 5, loyalty: 4 },
            { text: "\"That's... a lot of trust to ask.\"", target: 109, jin: 1, loyalty: 1 },
            { text: "\"Why me? We just met.\"", target: 112, jin: 3, loyalty: 2 }
        ]
    },

    109: {
        title: "GROWING CLOSER",
        thread: "jin",
        content: `
            <p class="narrative">Days pass. Then weeks.</p>

            <p class="narrative">Jin is steady. Reliable. He takes first watch without being asked. Shares his rations when you're hungry. Patches your wounds with careful hands.</p>

            <p class="narrative">At night, by the fire, he talks. About the world before. About his grandmother's stories. About the patients he couldn't save and the ones he did.</p>

            <p class="narrative">You find yourself talking too. About your job at the museum. About the art you loved and the life you left behind. About dreams that seem impossible now.</p>

            <p class="dialogue">"Not impossible," Jin says one night. "Delayed."</p>

            <p class="dialogue">"How can you be so sure?"</p>

            <p class="dialogue">"Because I'm going to make sure you get to live them." He doesn't look at you when he says it. Like it's too honest to admit face-to-face. "Whatever it takes."</p>
        `,
        choices: [
            { text: "Move closer to him. Let him know you heard.", target: 113, jin: 3, loyalty: 2 },
            { text: "\"And what about your dreams?\"", target: 114, jin: 2, loyalty: 2 },
            { text: "Stay quiet. Let the moment speak for itself.", target: 113, jin: 1, loyalty: 1 }
        ]
    },

    110: {
        title: "THE HUG",
        thread: "jin",
        jinMoment: true,
        content: `
            <p class="narrative">You don't take his hand. You step forward and wrap your arms around him.</p>

            <p class="narrative">He freezes. Just for a second.</p>

            <p class="narrative">Then his arms come up. Circle you. Hold you like you're the only solid thing in a dissolving world.</p>

            <p class="narrative">You feel his breath shudder.</p>

            <p class="dialogue">"I—" His voice cracks. "I didn't realize how much I needed—"</p>

            <p class="narrative">He doesn't finish. He doesn't have to.</p>

            <p class="narrative">You stay like that until the sun disappears completely. Two strangers who found each other at the end of everything.</p>

            <p class="narrative">When you finally pull apart, something has changed. You can feel it. The air between you is different now.</p>

            <p class="dialogue">"Partners," he says. But the word means more now.</p>

            <p class="dialogue">"Partners," you agree.</p>
        `,
        choices: [
            { text: "Kiss his cheek before pulling away completely.", target: 113, jin: 4, loyalty: 3 },
            { text: "Take his hand and keep walking. Together.", target: 113, jin: 3, loyalty: 2 }
        ]
    },

    111: {
        title: "THE ISLAND PROMISE",
        thread: "jin",
        jinMoment: true,
        content: `
            <p class="narrative">"Then take me there."</p>

            <p class="narrative">Three words. Complete trust.</p>

            <p class="narrative">Jin stares at you. For a moment, you see everything in his eyes—surprise, hope, something that looks terrifyingly like devotion.</p>

            <p class="dialogue">"You mean that."</p>

            <p class="dialogue">"I mean that."</p>

            <p class="narrative">He takes a step closer. Then another. Until he's close enough to touch.</p>

            <p class="dialogue">"I need you to understand something." His voice is low. Intense. "If we do this—if we go to the island—I'm not letting you go. Ever."</p>

            <p class="narrative">It should sound threatening. It doesn't.</p>

            <p class="dialogue">"That's not a warning," he adds. "It's a promise. I will protect you. I will provide for you. I will—" He swallows. "I will love you until there's nothing left of me to give."</p>

            <p class="narrative">Your heart is pounding. This is insane. You just met him. The world is ending. None of this makes sense.</p>

            <p class="narrative">And yet.</p>
        `,
        choices: [
            { text: "\"Then don't let go.\"", target: 115, jin: 6, loyalty: 4 },
            { text: "Kiss him. Let your answer be action.", target: 116, jin: 7, loyalty: 5 },
            { text: "\"You barely know me.\"", target: 117, jin: 2, loyalty: 1 }
        ]
    },

    112: {
        title: "WHY YOU",
        thread: "jin",
        jinMoment: true,
        content: `
            <p class="narrative">"Why me? We just met."</p>

            <p class="narrative">Jin is quiet for a long moment.</p>

            <p class="dialogue">"My grandmother had a word for it," he says finally. "Inyon. The cosmic connection between two souls."</p>

            <p class="narrative">He turns to face you fully.</p>

            <p class="dialogue">"I've met a hundred survivors. Helped most of them. Left most of them. But when I saw you in that stairwell—" He stops. Shakes his head. "I knew. I can't explain it. I just knew."</p>

            <p class="dialogue">"Knew what?"</p>

            <p class="dialogue">"That you were the one I'd been walking toward this whole time."</p>

            <p class="narrative">The words hang in the air. Heavy with meaning.</p>

            <p class="dialogue">"That probably sounds crazy."</p>

            <p class="dialogue">"Everything is crazy now."</p>

            <p class="dialogue">"True." The ghost of a smile. "So maybe crazy is exactly what we need."</p>
        `,
        choices: [
            { text: "\"Maybe it is. Let's find out.\"", target: 113, jin: 4, loyalty: 3 },
            { text: "\"I felt it too. In the stairwell.\"", target: 115, jin: 5, loyalty: 4 },
            { text: "\"I don't believe in destiny. But I believe in you.\"", target: 113, jin: 3, loyalty: 3 }
        ]
    },

    // ═══════════════════════════════════════════════════════════════════════
    // JIN ROMANCE ARC - Middle Game
    // ═══════════════════════════════════════════════════════════════════════

    113: {
        title: "SETTLING IN",
        thread: "jin",
        content: `
            <p class="narrative">You find shelter. An abandoned cabin in the mountains. Defensible. Private.</p>

            <p class="narrative">Jin fortifies it. Sets traps. Establishes routines.</p>

            <p class="narrative">Days become weeks. Weeks become a month.</p>

            <p class="narrative">Somewhere along the way, survival becomes something more. Something that feels like home.</p>

            <p class="narrative">"I never thought I'd have this again," Jin says one morning, watching the sunrise. "Stability. Purpose."</p>

            <p class="dialogue">"Is that what I am? Purpose?"</p>

            <p class="narrative">He looks at you. Really looks.</p>

            <p class="dialogue">"You're everything."</p>
        `,
        choices: [
            { text: "\"So are you.\"", target: 118, jin: 3, loyalty: 2 },
            { text: "Kiss him. No more words needed.", target: 119, jin: 4, loyalty: 3 },
            { text: "\"We should check the perimeter.\"", target: 120, jin: 0, loyalty: 0 }
        ]
    },

    114: {
        title: "HIS DREAMS",
        thread: "jin",
        jinMoment: true,
        content: `
            <p class="narrative">"And what about your dreams?"</p>

            <p class="narrative">Jin is quiet for a long time.</p>

            <p class="dialogue">"I used to dream about saving lives," he says. "Being a doctor. Having a family. Watching my kids grow up in a world that made sense."</p>

            <p class="narrative">He stares into the fire.</p>

            <p class="dialogue">"Now I dream about you."</p>

            <p class="narrative">You stop breathing.</p>

            <p class="dialogue">"About keeping you safe. About building something together. About—" He stops. Looks at you. "I'm sorry. That's too much. We barely—"</p>

            <p class="dialogue">"It's not too much."</p>

            <p class="narrative">He searches your face. Looking for the lie. Finding none.</p>

            <p class="dialogue">"Then what is it?"</p>

            <p class="dialogue">"Honest. And I need honesty now more than anything."</p>
        `,
        choices: [
            { text: "\"Tell me more. About the dreams.\"", target: 118, jin: 3, loyalty: 2 },
            { text: "\"I dream about you too.\"", target: 119, jin: 5, loyalty: 3 },
            { text: "Move closer. Let the fire warm you both.", target: 118, jin: 2, loyalty: 2 }
        ]
    },

    115: {
        title: "THE PROMISE SEALED",
        thread: "jin",
        jinMoment: true,
        content: `
            <p class="narrative">"Then don't let go."</p>

            <p class="narrative">Jin's breath catches.</p>

            <p class="dialogue">"Never."</p>

            <p class="narrative">He pulls you close. Not demanding—offering. Giving you every chance to step back.</p>

            <p class="narrative">You step forward instead.</p>

            <p class="narrative">His arms wrap around you. Solid. Safe. Home.</p>

            <p class="dialogue">"I've got you," he murmurs into your hair. "From now on, I've always got you."</p>

            <p class="narrative">The world is ending. Cities burn. The dead walk.</p>

            <p class="narrative">And somehow, impossibly, you've found the one person worth surviving for.</p>
        `,
        choices: [
            { text: "Stay in his arms. Let the moment last.", target: 121, jin: 5, loyalty: 4 },
            { text: "\"Show me the way to the island.\"", target: 122, jin: 4, loyalty: 4 }
        ]
    },

    116: {
        title: "THE FIRST KISS",
        thread: "jin",
        jinMoment: true,
        content: `
            <p class="narrative">You don't answer with words.</p>

            <p class="narrative">You close the distance between you. Your hands find his chest—feel his heart hammering beneath your palms.</p>

            <p class="narrative">You rise on your toes. His breath stops.</p>

            <p class="narrative">And then your lips meet his.</p>

            <p class="narrative">It's not gentle. Not tentative. The world is ending and you're done being careful.</p>

            <p class="narrative">Jin makes a sound—surprise, relief, desperate want—and then he's kissing you back like you're air and he's been drowning.</p>

            <p class="narrative">His hands cup your face. Thumbs tracing your cheekbones. He pulls back just enough to look at you.</p>

            <p class="dialogue">"Say it's real," he breathes. "Tell me I'm not dreaming this."</p>

            <p class="dialogue">"It's real. We're real."</p>

            <p class="narrative">He kisses you again. Harder. Deeper.</p>

            <p class="narrative">You're done surviving. You're ready to live.</p>
        `,
        choices: [
            { text: "Don't let the kiss end.", target: 123, jin: 6, loyalty: 5 },
            { text: "\"Take me somewhere safe. Then take me.\"", target: 124, jin: 7, loyalty: 5 }
        ]
    },

    117: {
        title: "EARNING BELIEF",
        thread: "jin",
        content: `
            <p class="narrative">"You barely know me."</p>

            <p class="narrative">Jin nods. He expected this.</p>

            <p class="dialogue">"You're right. I don't." He takes a breath. "So let me learn. Give me time. Let me prove that what I feel isn't just desperation or trauma bonding or any of the hundred rational explanations."</p>

            <p class="narrative">He meets your eyes steadily.</p>

            <p class="dialogue">"I'll earn it. Your trust. Your—" He stops short. "Whatever you're willing to give, I'll earn."</p>

            <p class="dialogue">"And if you can't?"</p>

            <p class="dialogue">"Then at least you'll be safe. That's enough for me."</p>

            <p class="narrative">It shouldn't be. It's not enough for anyone sane.</p>

            <p class="narrative">But something about the way he says it...</p>

            <p class="narrative">You believe him.</p>
        `,
        choices: [
            { text: "\"Okay. Earn it.\"", target: 113, jin: 2, loyalty: 2 },
            { text: "\"You already have.\" Reach for his hand.", target: 115, jin: 4, loyalty: 3 }
        ]
    },

    // ═══════════════════════════════════════════════════════════════════════
    // JIN ENDINGS - Happily Ever After
    // ═══════════════════════════════════════════════════════════════════════

    200: {
        title: "FOREVER",
        thread: "jin",
        isEnding: true,
        endingNumber: 92,
        endingCode: "JINLV",
        heaEnding: true,
        content: `
            <p class="narrative">Years pass. The island becomes home.</p>

            <p class="narrative">You build a house with your own hands—Jin designing, you organizing, both of you working until blisters become calluses become strength.</p>

            <p class="narrative">The garden grows. The walls hold. The nightmare stays on the mainland.</p>

            <p class="narrative">And Jin—Jin is everything he promised and more.</p>

            <p class="narrative">He looks at you the same way he did that first day. Like you're a miracle. Like he can't believe you're real.</p>

            <p class="dialogue">"I love you," he says one morning, for the thousandth time. "I'll never get tired of saying it."</p>

            <p class="dialogue">"Good. Because I'll never get tired of hearing it."</p>

            <p class="narrative">His raven tattoo catches the light. You trace it with your finger.</p>

            <p class="dialogue">"Do you ever regret it?" you ask. "Choosing me?"</p>

            <p class="narrative">He looks at you like the question is absurd.</p>

            <p class="dialogue">"I would choose you in a hundred lifetimes. In a hundred worlds. In any version of reality."</p>

            <p class="narrative">He pulls you close. Your orca tattoo pressed against his heart.</p>

            <p class="dialogue">"You are the best decision I ever made. And I'll spend the rest of my life making sure you know it."</p>

            <div class="ending">
                <div class="ending-number">HAPPILY EVER AFTER</div>
                <h2 class="ending-title">TOGETHER FOREVER</h2>
                <div class="ending-text">
                    <p>The world ended. You survived. Together.</p>
                    <p>And every day, for the rest of your lives, you wake up next to the person who chose you. Who fought for you. Who loves you with everything they have.</p>
                    <p>Some endings aren't endings at all.</p>
                    <p>Some are just beginnings.</p>
                    <p><em>"I love you in 67 languages. In a hundred more. In every way a person can love."</em></p>
                    <p><em>—Jin</em></p>
                </div>
                <button class="restart-btn" onclick="restartGame()">BEGIN AGAIN</button>
            </div>
        `,
        choices: []
    }
};

// ═══════════════════════════════════════════════════════════════════════════
// INTEGRATION - Merge Jin thread into STORY_DATA
// ═══════════════════════════════════════════════════════════════════════════

// Add Jin ending to ENDING_SEEDS
if (typeof ENDING_SEEDS !== 'undefined') {
    ENDING_SEEDS[92] = { code: "JINLV", name: "Together Forever", tier: "love", hea: true };
}

// Merge Jin thread into STORY_DATA if it exists
if (typeof STORY_DATA !== 'undefined') {
    Object.assign(STORY_DATA, JIN_THREAD);
}

// ═══════════════════════════════════════════════════════════════════════════
// INJECTION POINTS - Force Jin encounter in early game
// ═══════════════════════════════════════════════════════════════════════════

const JinInjector = {
    // Sections where Jin should appear if not yet met
    injectionPoints: [2, 3, 4, 5],

    // Check if player has met Jin
    hasMetJin() {
        return localStorage.getItem('mongoose_met_jin') === 'true';
    },

    // Get Jin intro section
    getIntroSection() {
        return 100; // JIN_THREAD section 100
    },

    // Modify choices to include Jin path
    injectJinChoice(choices) {
        if (this.hasMetJin()) return choices;

        // Add Jin encounter as a choice
        const jinChoice = {
            text: "[NEW] Investigate the sound from the stairwell.",
            target: 100,
            special: true,
            jin: true
        };

        return [...choices, jinChoice];
    }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { JIN_THREAD, JinInjector };
}
