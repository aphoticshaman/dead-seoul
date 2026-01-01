
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
