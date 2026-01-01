
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
