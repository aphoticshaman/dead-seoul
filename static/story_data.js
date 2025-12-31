/**
 * DEAD SEOUL - Complete Story Data
 * All sections, choices, and endings
 * Infused with Cardwell Voice + Ritchie Cascade Structure
 */

const STORY_DATA = {

    // ═══════════════════════════════════════════════════════════════
    // PROLOGUE
    // ═══════════════════════════════════════════════════════════════

    prologue: {
        title: "BEFORE",
        content: `
            <p class="narrative">You and Minho lasted two years.</p>

            <p class="narrative">Two years of late-night museum dates, of his hands in your hair, of that voice against your ear: <em>"Stay."</em> Two years of thinking maybe this was it. Maybe you'd found something real.</p>

            <p class="narrative">Then he got the promotion. Tokyo office. His dream.</p>

            <p class="dialogue">"Come with me," he said.</p>

            <p class="dialogue">"Ask me to stay," you said. Because you needed to hear it. Needed to know you mattered more than the corner office.</p>

            <p class="narrative">He didn't ask.</p>

            <div class="poetic">
                Binary stars orbit a center neither owns,<br>
                locked in gravitational dance,<br>
                too close to escape, too far to collide.<br>
                You burned bright in that shared space.
            </div>

            <p class="narrative">You haven't spoken in six months. But you've dreamed of him every night. Dreamed of his hands on your waist, his breath on your neck, his voice saying the words he never said.</p>

            <p class="narrative">Some mornings you wake up angry. Some mornings you wake up aching.</p>

            <p class="narrative">This morning, you wake up to screaming.</p>
        `,
        choices: [
            { text: "Begin.", target: 1 }
        ]
    },

    // ═══════════════════════════════════════════════════════════════
    // ACT ONE: THE FALL
    // ═══════════════════════════════════════════════════════════════

    1: {
        title: "THE LAST MORNING",
        thread: "yuna",
        media: { type: "image", src: "/static/media/images/seoul_burning.jpg" },
        content: `
            <p class="narrative">The morning Seoul dies, you wake up late for work.</p>

            <p class="narrative">Your phone shows seventeen missed calls from an unknown number. Three from your mother. The television—you don't remember leaving it on—shows a news anchor crying.</p>

            <p class="dialogue">"—advised to stay indoors. Do not approach anyone exhibiting symptoms. The infection spreads through—"</p>

            <p class="narrative">Static.</p>

            <p class="narrative">Outside your window, Hongdae is burning. A helicopter spirals into the Han River like a signal bouncing off dead satellites—still transmitting to a frequency no one monitors anymore. And in the street five floors below, something that used to be a woman is doing something unspeakable to something that used to be a man.</p>

            <p class="narrative">Your phone buzzes. Unknown number. You answer.</p>

            <p class="dialogue">"Yuna." That voice. The one that still makes your stomach drop. "Where are you? Are you safe?"</p>

            <p class="narrative">Minho. After six months of silence. Calling now.</p>

            <p class="dialogue">"I'm—I'm in my apartment. Minho, what's—"</p>

            <p class="dialogue">"Listen to me. Don't go outside. Barricade your door. I'm coming for you." A crash. Screaming in the background. "I'm in Itaewon. I can be there in—"</p>

            <p class="narrative">The line dies.</p>

            <p class="narrative thought">He's coming for you. After everything. After the silence and the distance and the way he broke you like matter burning up on entry—brief and brilliant, making someone's wish real at the cost of its own light.</p>

            <p class="narrative thought">He's <em>coming for you</em>.</p>

            <p class="narrative">Something hot and complicated moves through your chest. You don't have time to name it.</p>

            <p class="narrative">The pounding starts on Mrs. Park's door down the hall.</p>
        `,
        choices: [
            { text: "Help Mrs. Park. You can't leave an old woman to die.", target: 2 },
            { text: "Barricade your door. Survival first. Minho said stay.", target: 3 },
            { text: "Grab a weapon and go. Don't wait to be saved.", target: 4 }
        ]
    },

    2: {
        title: "THE NEIGHBOR",
        thread: "yuna",
        content: `
            <p class="narrative">You run to Mrs. Park's door.</p>

            <p class="narrative">The wood is already splintering. Whatever's on the other side is <em>strong</em>.</p>

            <p class="dialogue">"Mrs. Park! It's Yuna!"</p>

            <p class="narrative">The door cracks open. A wrinkled hand grabs your wrist with shocking force and yanks you inside. Mrs. Park—eighty-three, widowed, the woman who brings you soup when you work late—slams the door shut.</p>

            <p class="narrative">She's holding a fire extinguisher like a weapon. Her eyes are steady.</p>

            <p class="dialogue">"I was in the war, girl. The real one. I've seen worse."</p>

            <p class="narrative">The door shudders. Won't hold.</p>

            <p class="dialogue">"Fire escape," she says. "My hip won't make the climb. You go."</p>

            <p class="dialogue">"I'm not leaving you."</p>

            <p class="dialogue">"Yes you are." She presses something into your palm. A key. "Storage unit in Yeouido. My husband's emergency supplies. He was paranoid about the North." She smiles, savage and ancient. "Take it. Survive. Make them pay for every inch."</p>

            <p class="narrative">The door breaks.</p>

            <p class="narrative">She raises the extinguisher.</p>

            <p class="dialogue"><strong>"GO."</strong></p>
        `,
        choices: [
            { text: "Take the key and run. Honor her sacrifice.", target: 5 },
            { text: "Stay and fight beside her. Together or not at all.", target: 6 }
        ]
    },

    6: {
        title: "TOGETHER",
        thread: "yuna",
        content: `
            <p class="dialogue">"We go together or not at all."</p>

            <p class="narrative">Mrs. Park stares at you. Then laughs—a dry, crackling sound.</p>

            <p class="dialogue">"Your father would be proud. We served together, you know. Incheon. 1950. He never left anyone behind either."</p>

            <p class="narrative">She hands you the fire extinguisher. "Then let's make them work for it."</p>

            <p class="narrative">The door breaks.</p>

            <p class="narrative">You fight.</p>

            <div class="poetic">
                Side by side,<br>
                two generations of Korean women<br>
                who refused to die quietly.
            </div>

            <p class="narrative">When it's over, you're both injured. Mrs. Park's leg is badly bitten. You both know what that means.</p>

            <p class="dialogue">"The storage unit," she whispers, pressing the key into your palm. "Go. Now. Before I turn."</p>

            <p class="dialogue">"I'm not leaving you."</p>

            <p class="dialogue">"You already saved me, child. Thirty minutes ago, I was an old woman waiting to die alone." Her eyes are fierce. "You gave me a warrior's death. Now let me give you a life."</p>

            <p class="narrative">She pushes you toward the fire escape.</p>

            <p class="narrative">You go.</p>
        `,
        choices: [
            { text: "Continue to the storage unit.", target: 5 }
        ]
    },

    3: {
        title: "THE BARRICADE",
        thread: "minho",
        content: `
            <p class="narrative">You drag everything you own against the door. Bookshelf. Desk. Mattress.</p>

            <p class="narrative">Then you wait.</p>

            <p class="narrative">Three hours in the dark. The sounds outside are... you don't have words. You learn not to hear them. You learn to be very, very still.</p>

            <p class="narrative">When the pounding comes, you freeze.</p>

            <p class="dialogue">"Yuna? Yuna, are you there? It's me."</p>

            <p class="narrative">Minho's voice. Through the door. Alive.</p>

            <p class="narrative">You tear apart the barricade with shaking hands. When the door opens, he's covered in blood—not his, he swears—and his eyes are wild.</p>

            <p class="narrative">But when he sees you, something in his face cracks open.</p>

            <p class="dialogue">"You're alive," he breathes. "You're—"</p>

            <p class="narrative">He doesn't finish. He crosses the room in two steps and his arms are around you, his face buried in your hair, his whole body shaking.</p>

            <p class="dialogue">"I thought I lost you," he says. "I thought—"</p>

            <p class="dialogue">"You left me." It comes out before you can stop it. Six months of hurt compressed into three words.</p>

            <p class="narrative">He pulls back. Meets your eyes.</p>

            <p class="dialogue">"I know. I know I did. And I'm sorry. I'm so fucking sorry." His hands come up to cup your face. Careful. Like you're something precious. "I was on my way back when it started. I had my resignation letter written. I was going to—"</p>

            <p class="narrative">An explosion rocks the building.</p>

            <p class="dialogue">"We have to move," he says. "Car's outside. There's a military safe zone in Bukhansan. We can talk there. We can—" He stops. His thumb traces your cheekbone. "Please. Just give me a chance to make this right."</p>
        `,
        choices: [
            { text: "Go with him. Whatever happened before, he came back.", target: 7 },
            { text: "Tell him you'll follow in your own way. Trust is earned.", target: 8 },
            { text: "Kiss him first. If the world is ending, stop wasting time.", target: 9 }
        ]
    },

    4: {
        title: "THE HUNTER",
        thread: "soojin",
        media: { type: "image", src: "/static/media/images/hallway.jpg" },
        content: `
            <p class="narrative">You don't wait.</p>

            <p class="narrative">You grab the knife from your kitchen—the Japanese santoku your mother gave you—and slip into the hallway.</p>

            <p class="narrative">The lights are flickering. Something is moving at the far end, hunched over something wet.</p>

            <p class="narrative">It looks up. Its eyes are filmed white. Its mouth is red.</p>

            <p class="narrative">It runs at you.</p>

            <p class="narrative">You sidestep—muscle memory from the self-defense classes you took after a man followed you home last year—and drive the knife into its temple.</p>

            <p class="narrative">It drops.</p>

            <p class="narrative">You stare at the blood on your hands. At the thing you just did.</p>

            <p class="narrative thought">You don't feel guilty. That's what scares you.</p>

            <p class="narrative thought">You feel <em>alive</em>.</p>

            <p class="narrative">You make it to the stairwell. Three floors down, you find someone else: a woman, maybe thirty, fighting off two of them with a baseball bat. She moves like water—precise, devastating.</p>

            <p class="narrative">She sees you. Doesn't hesitate.</p>

            <p class="dialogue">"Behind me. <em>Move.</em>"</p>

            <p class="narrative">You move.</p>

            <p class="narrative">Together, you carve through six more before reaching the street. She pulls you into an alley, then through a back door, into the storage room of a convenience store.</p>

            <p class="dialogue">"Soojin," she says, catching her breath. "Former ROK Special Forces."</p>

            <p class="dialogue">"Yuna. Museum curator."</p>

            <p class="narrative">She looks you up and down. Cataloguing. Assessing.</p>

            <p class="dialogue">"You handled that knife like you knew what you were doing."</p>

            <p class="dialogue">"Beginner's luck."</p>

            <p class="dialogue">"Bullshit." Something flickers in her eyes. Not quite a smile. "You've got instincts. That's rare."</p>

            <p class="narrative">She has supplies. Weapons. A plan.</p>

            <p class="dialogue">"There's a boat at Incheon. Contact says Japan's still clean. We leave at dawn."</p>

            <p class="narrative">She hands you a protein bar. Her fingers brush yours. The touch lingers a second too long.</p>

            <p class="dialogue">"Get some rest," she says. "Tomorrow's going to be harder."</p>

            <p class="narrative">You don't sleep. Neither does she.</p>

            <p class="narrative">At 3 AM, she speaks into the darkness:</p>

            <p class="dialogue">"I was discharged for loving my CO. She didn't love me back the same way. At least, not publicly." A pause. "She was in Busan when this started."</p>
        `,
        choices: [
            { text: "\"We could go back for her. After Japan.\"", target: 10 },
            { text: "\"Her loss.\"", target: 11 },
            { text: "Say nothing. Just move closer.", target: 12 }
        ]
    },

    // ═══════════════════════════════════════════════════════════════
    // ACT TWO: THE CROSSING
    // ═══════════════════════════════════════════════════════════════

    5: {
        title: "THE KEY",
        thread: "yuna",
        content: `
            <p class="narrative">You run.</p>

            <p class="narrative">The fire escape groans but holds. Behind you, you hear the fire extinguisher connect—once, twice—and then nothing.</p>

            <p class="narrative">Mrs. Park's key is cold in your palm.</p>

            <p class="narrative">You make it to Yeouido by nightfall. The storage unit is exactly where she said. Inside: camping gear, MREs, a shortwave radio, and a locked case at the back.</p>

            <p class="narrative">Three handguns. Full magazines.</p>

            <p class="narrative thought">Her husband was <em>very</em> paranoid.</p>

            <p class="narrative">The radio crackles. A voice—young, desperate.</p>

            <p class="dialogue"><em>"If anyone can hear this, we're at Seoul Station. Forty survivors. Running out of supplies. Please—if you can help—"</em></p>

            <p class="narrative">You have enough supplies for one person to last months. Or forty people to last days.</p>

            <p class="narrative thought">Mrs. Park didn't save you so you could save yourself.</p>
        `,
        choices: [
            { text: "Go to Seoul Station. Share what you have.", target: 13 },
            { text: "Stay alone. Survive. Build something in the ruins.", target: 14 }
        ]
    },

    7: {
        title: "THE REUNION",
        thread: "minho",
        content: `
            <p class="narrative">You take his hand.</p>

            <p class="narrative">The drive to Bukhansan is terrifying. Minho drives like a man possessed, weaving through burning streets, running over things you try not to see.</p>

            <p class="dialogue">"I never stopped," he says, eyes on the road. "Loving you. I just forgot how to show it."</p>

            <p class="dialogue">"I know."</p>

            <p class="dialogue">"I was a coward. I was—"</p>

            <p class="dialogue">"Minho. Focus on driving."</p>

            <p class="narrative">Something almost like a smile crosses his face.</p>

            <p class="narrative">You reach the safe zone at dawn. Fences, guards, tents—maybe a thousand survivors.</p>

            <p class="narrative">Inside, you're assigned a tent. Shared. Someone's sense of humor.</p>

            <p class="narrative">Minho stands by the entrance, watching you. That intensity that used to make you forget how to breathe.</p>

            <p class="dialogue">"I know I have to earn you back," he says quietly. "I know words aren't enough."</p>

            <p class="dialogue">"Then stop talking."</p>

            <p class="narrative">He crosses the distance between you.</p>

            <div class="spicy">
                <p class="narrative">His hands find your waist, pulling you against him. His mouth finds your jaw, your neck, the spot behind your ear that makes your knees weak.</p>

                <p class="dialogue">"I've dreamed about this," he breathes against your skin. "Every night for six months."</p>

                <p class="dialogue">"Me too."</p>

                <p class="dialogue">"Tell me to stop." His hands slide lower. "Tell me to stop and I will."</p>

                <p class="dialogue">"Don't you dare."</p>

                <p class="narrative">He undresses you slowly. Not seductive—methodical. Like he's unwrapping something precious and refusing to be rushed.</p>

                <p class="dialogue">"Say it now."</p>

                <p class="dialogue">"I love you." His hands are on your hips, pulling you against him, and you can feel exactly how much he means it. "I love you. I love you. I'm going to spend the rest of this fucking apocalypse proving it."</p>

                <p class="narrative">You kiss him to shut him up.</p>

                <p class="narrative">It's not gentle. Six months of anger and want and unspent grief pouring out through teeth and tongue. His hands are in your hair, your nails are down his back, and when he finally lifts you and lowers you onto the narrow cot, you don't care that the canvas walls are thin.</p>

                <p class="narrative thought">Let them hear.</p>

                <p class="dialogue">"Look at me," he says, pushing inside you inch by devastating inch. "I want to see your eyes when you fall apart."</p>

                <p class="narrative">You don't look away.</p>
            </div>

            <div class="poetic">
                All those shooting stars we counted:<br>
                matter burning up on entry,<br>
                brief and brilliant,<br>
                making someone's wish real<br>
                at the cost of its own light.
            </div>

            <p class="narrative">When it's over, you're wrapped around each other, sweaty and breathless. His fingers trace patterns on your shoulder.</p>

            <p class="dialogue">"Stay," you whisper.</p>

            <p class="dialogue">"I'm not going anywhere. Not ever again."</p>
        `,
        choices: [
            { text: "Build this life with him.", target: 15 }
        ]
    },

    8: {
        title: "SEPARATE PATHS",
        thread: "yoo",
        content: `
            <p class="dialogue">"I'll meet you there," you say. "I need to do this my way."</p>

            <p class="narrative">Pain flickers across his face. Then understanding.</p>

            <p class="dialogue">"Bukhansan. Sunset tomorrow. If you're not there—"</p>

            <p class="dialogue">"Don't wait."</p>

            <p class="narrative">You go your own way.</p>

            <p class="narrative">Alone, you move differently. Quieter. Smarter. You learn the rhythm of the dead—their blind spots, their patterns. By the time you reach the safe zone, you've changed.</p>

            <p class="narrative">Minho is there. But so is someone else: the woman who checked names at the gate. Tall. Striking. Silver-streaked hair.</p>

            <p class="narrative">You learn her name is Colonel Yoo. You learn Minho served under her. You learn the way she looks at him—proprietary, assessing.</p>

            <p class="narrative">You learn a lot of things.</p>

            <p class="narrative">At night, alone in your assigned tent, you wonder if you made a mistake. If you should have just let him—</p>

            <p class="narrative">The tent flap opens.</p>

            <p class="narrative">It's not Minho.</p>

            <p class="narrative">It's the woman from the checkpoint. Up close, she's younger than you thought—mid-thirties, maybe, wearing her authority like armor. Her eyes are sharp.</p>

            <p class="dialogue">"Yuna, right? The girlfriend."</p>

            <p class="dialogue">"Ex-girlfriend."</p>

            <p class="dialogue">"Mmm." She steps closer. "He talked about you. Before. When he was under my command." Another step. "He said you had a way of making him stupid."</p>

            <p class="dialogue">"Did he."</p>

            <p class="dialogue">"He said a lot of things." She's close enough now that you can smell gunpowder and something floral. "I thought maybe he was exaggerating. I see now he wasn't."</p>

            <p class="dialogue">"What do you want?"</p>

            <p class="narrative">Her smile is slow. Dangerous.</p>

            <p class="dialogue">"The same thing he wants. The same thing you want." She reaches out, tucks a strand of hair behind your ear. Her touch is electric. "The question is whether you're brave enough to take it."</p>
        `,
        choices: [
            { text: "Pull away. This is complicated enough.", target: 16 },
            { text: "\"What exactly are you offering?\"", target: 17 },
            { text: "Kiss her. Life is short and getting shorter.", target: 18 }
        ]
    },

    // ═══════════════════════════════════════════════════════════════
    // ENDINGS
    // ═══════════════════════════════════════════════════════════════

    9: {
        title: "THE REKINDLED FLAME",
        thread: "minho",
        isEnding: true,
        endingNumber: 1,
        content: `
            <p class="narrative">You kiss him.</p>

            <p class="narrative">No warning. No preamble. You grab his collar and pull him down and take what you've wanted for six months.</p>

            <p class="narrative">He freezes for half a second. Then his hands are on you, desperate, bruising, and he's kissing you back like you're the only oxygen in a burning world.</p>

            <p class="dialogue">"Yuna—"</p>

            <p class="dialogue">"Shut up." You're already pulling at his jacket. "The world is ending. I'm not wasting another second."</p>

            <div class="spicy">
                <p class="narrative">You don't make it to the safe zone that night.</p>

                <p class="narrative">You pull him into an abandoned apartment, barricade the door, and take what you're owed.</p>

                <p class="narrative">He pushes you against the wall, his mouth on your throat, his hands everywhere.</p>

                <p class="dialogue">"I should apologize—"</p>

                <p class="dialogue">"Later."</p>

                <p class="dialogue">"I should explain—"</p>

                <p class="dialogue">"<em>Later.</em>"</p>

                <p class="dialogue">"I love you," he says, and swallows your response with another kiss.</p>
            </div>

            <p class="narrative">When you finally reach Bukhansan, three days later, you're different. The distance between you has closed. The silence has been filled—with words, with skin, with promises made in the dark.</p>

            <div class="ending">
                <div class="ending-number">ENDING 1 OF 8</div>
                <h2 class="ending-title">THE REKINDLED FLAME</h2>
                <div class="ending-text">
                    <p>The world ended. But you found each other in the ashes.</p>
                    <p>Six months later, you lead supply runs together. He follows you into danger without question. You follow him out.</p>
                    <p>And every night, in the tent that's become yours, he proves what he couldn't say before:</p>
                    <p><em>"I choose you. Every time. I choose you."</em></p>
                </div>
            </div>
        `,
        choices: []
    },

    13: {
        title: "THE DISPATCHER",
        thread: "yuna",
        isEnding: true,
        endingNumber: 2,
        content: `
            <p class="narrative">You go.</p>

            <p class="narrative">Mrs. Park didn't save you so you could save yourself.</p>

            <p class="narrative">Seoul Station is worse than you imagined: forty-three people crammed into a ticket office, barricaded with vending machines. The children are too quiet. The adults are losing hope.</p>

            <p class="narrative">When you walk in with supplies, they stare at you like you're salvation.</p>

            <p class="dialogue">"Who are you?" the leader asks—a former transit officer named Mr. Bae.</p>

            <p class="dialogue">"Someone who got lucky."</p>

            <p class="narrative">You stay. You organize. You build something.</p>

            <p class="narrative">By spring, Seoul Station is the heart of a network—survivor groups connected by scavenged radios and dangerous supply runs.</p>

            <p class="narrative">And somewhere along the way, you fall in love.</p>

            <p class="narrative">Not with one person. With the work. With the impossible, stubborn act of keeping people alive.</p>

            <div class="ending">
                <div class="ending-number">ENDING 2 OF 8</div>
                <h2 class="ending-title">THE DISPATCHER</h2>
                <div class="ending-text">
                    <p>They call you the Dispatcher. The voice on the radio. The one who coordinates rescues and shares resources and refuses to let anyone die alone.</p>
                    <p>Years later, when they write the history of the Seoul Reclamation, they won't know your face.</p>
                    <p>But they'll quote your words:</p>
                    <p><em>"This is Dispatcher Yuna, Seoul Station. If you can hear this, you're not alone."</em></p>
                </div>
            </div>
        `,
        choices: []
    },

    15: {
        title: "THE SURVIVORS",
        thread: "minho",
        isEnding: true,
        endingNumber: 3,
        content: `
            <p class="narrative">Three months in the safe zone. Three months of learning to be together again—really together, not the shadow of a relationship you had before.</p>

            <p class="narrative">He's different now. Softer in some ways, harder in others. He doesn't take anything for granted.</p>

            <p class="dialogue">"I have nightmares," he admits one night, lying beside you. "About being too late. About finding your door broken open and—"</p>

            <p class="dialogue">"I'm here." You press your palm to his chest. Feel his heart beating. "I'm here."</p>

            <p class="narrative">When the call comes to lead a supply run, you both volunteer.</p>

            <p class="dialogue">"You don't have to," he says. "You could stay—"</p>

            <p class="dialogue">"We do this together or not at all."</p>

            <p class="narrative">Something flickers in his eyes. Pride, maybe. Or love.</p>

            <p class="dialogue">"Together," he agrees.</p>

            <div class="ending">
                <div class="ending-number">ENDING 3 OF 8</div>
                <h2 class="ending-title">THE SURVIVORS</h2>
                <div class="ending-text">
                    <p>You fight together. Build together. Lead together.</p>
                    <p>When the safe zone becomes a city, you're on the council. When the city becomes a nation, you're its founders.</p>
                    <p>And every night, in the home you built from nothing, he holds you like you're everything.</p>
                    <p><em>"I choose you," he whispers. "Forever. I choose you."</em></p>
                </div>
            </div>
        `,
        choices: []
    },

    11: {
        title: "HER LOSS",
        thread: "soojin",
        content: `
            <p class="dialogue">"Her loss," you say.</p>

            <p class="narrative">Soojin laughs—bitter, surprised.</p>

            <p class="dialogue">"You're the first person who's ever said that. Everyone else said 'that's too bad' or 'you should have been more careful.'"</p>

            <p class="dialogue">"Those people are idiots. And probably dead now."</p>

            <p class="narrative">She laughs again. This time it sounds real.</p>

            <p class="dialogue">"You're not what I expected," she says. "Most people I rescue... they break."</p>

            <p class="dialogue">"My father was in the Navy. He taught me something." You meet her eyes. "Fear is just love holding its breath."</p>

            <div class="poetic">
                Through a tangled tapestry,<br>
                dances a threaded needle,<br>
                fate nudged this way and that,<br>
                life is ever winding and woven,<br>
                paths are joined and broken,<br>
                connections are made,<br>
                even when words aren't spoken.
            </div>

            <p class="narrative">She's quiet for a long moment.</p>

            <p class="dialogue">"I like that," she finally says. "I'm going to steal it."</p>

            <p class="dialogue">"It's not stealing if I give it to you."</p>

            <p class="narrative">The silence between you changes. Thickens.</p>

            <p class="narrative">She moves first—or maybe you do. It doesn't matter. Her mouth finds yours in the dark, hungry and certain.</p>

            <p class="dialogue">"Tell me to stop," she breathes.</p>

            <p class="narrative">You pull her closer.</p>

            <div class="spicy">
                <p class="narrative">She kisses like she fights: no wasted motion, every touch intentional.</p>

                <p class="dialogue">"I don't do this," she says, pulling back. "Random hookups in the apocalypse. This isn't—"</p>

                <p class="dialogue">"Then what is it?"</p>

                <p class="narrative">Her eyes are silver in the darkness. "I don't know. But I want to find out."</p>

                <p class="narrative">She pushes you down onto the pile of blankets she'd arranged as a bed. Her hands are calloused, capable, and when they slide under your shirt, you gasp.</p>

                <p class="dialogue">"Sensitive," she murmurs. Not a question.</p>

                <p class="dialogue">"Shut up."</p>

                <p class="narrative">She grins. Wolfish. "Make me."</p>

                <p class="narrative">You try. You fail. She's stronger, faster, and she uses every advantage ruthlessly.</p>

                <p class="narrative">But she's also careful. She pauses at every new inch of skin, checks your eyes, waits for permission.</p>

                <p class="dialogue">"This okay?"</p>

                <p class="dialogue">"<em>Yes.</em>"</p>

                <p class="dialogue">"This?"</p>

                <p class="dialogue">"<em>Yes.</em>"</p>

                <p class="dialogue">"And this—" Her hand slides between your thighs. "This okay too?"</p>

                <p class="narrative">You answer with your body.</p>

                <p class="narrative">She takes her time. Learns you. Catalogues every sound you make like tactical intelligence.</p>

                <p class="narrative">When you finally break apart, gasping her name, she watches you through it with something like wonder.</p>

                <p class="dialogue">"Beautiful," she says. "Fucking beautiful."</p>

                <p class="dialogue">"Your turn."</p>

                <p class="dialogue">"You don't have to—"</p>

                <p class="dialogue">"I want to." You push yourself up. Push her down. "Lie back and let me."</p>

                <p class="narrative">She hesitates—just for a second. Then something in her relaxes.</p>

                <p class="dialogue">"Okay," she whispers. "Okay."</p>
            </div>

            <p class="narrative">When dawn comes, you're tangled together, her arm heavy across your waist.</p>

            <p class="dialogue">"Stay," she says.</p>

            <p class="narrative">You're not sure if she means right now or forever.</p>

            <p class="narrative">You decide it doesn't matter.</p>

            <p class="dialogue">"I'm staying."</p>
        `,
        choices: [
            { text: "Head to Japan together.", target: 19 }
        ]
    },

    19: {
        title: "THE NEW LIFE",
        thread: "soojin",
        isEnding: true,
        endingNumber: 4,
        content: `
            <p class="narrative">The boat to Japan is everything Soojin promised: small, fast, dangerous.</p>

            <p class="narrative">You fight off infected at the docks. You navigate through storms. You hold each other through the crossing.</p>

            <p class="narrative">Japan is real. Japan is alive.</p>

            <p class="narrative">At the quarantine checkpoint, they ask your relationship.</p>

            <p class="narrative">Soojin looks at you. You look at her.</p>

            <p class="dialogue">"Partners," she says.</p>

            <p class="narrative">It sounds right.</p>

            <p class="narrative">Three months later, she gets word: Soyeon is alive. In a camp in Jeju. She wants Soojin to come back.</p>

            <p class="narrative">Your heart drops. "That's wonderful."</p>

            <p class="dialogue">"I told her no."</p>

            <p class="dialogue">"Why?"</p>

            <p class="dialogue">"Because I'm already with someone."</p>

            <p class="narrative">She crosses the distance between you. Takes your face in her hands.</p>

            <p class="dialogue">"I love you," she says. "I've been trying to figure out how to say it. Apparently the best I could manage is 'I chose you over the woman I spent years pining for.'"</p>

            <p class="narrative">You laugh. It's wet and messy and perfect.</p>

            <p class="dialogue">"That's the most romantic thing anyone's ever said to me."</p>

            <p class="dialogue">"I'm not a romantic person."</p>

            <p class="dialogue">"You are for me."</p>

            <div class="ending">
                <div class="ending-number">ENDING 4 OF 8</div>
                <h2 class="ending-title">THE NEW LIFE</h2>
                <div class="ending-text">
                    <p>You build a life in Japan. Quiet. Ordinary. Extraordinary.</p>
                    <p>Soojin learns to laugh. You learn to fight. Together, you become something neither of you expected:</p>
                    <p><em>A home.</em></p>
                </div>
            </div>
        `,
        choices: []
    },

    14: {
        title: "THE HERMIT BEGINS",
        thread: "yuna",
        content: `
            <p class="narrative">You stay.</p>

            <p class="narrative">In the storage unit, then a secured apartment, then a cabin in the mountains. You survive. Alone.</p>

            <p class="narrative">The years pass strangely. You learn to hunt, farm, preserve. You talk to yourself to remember how speech works.</p>

            <p class="narrative">One morning, a decade later, you wake to the sound of a child crying.</p>

            <p class="narrative">Outside your gate: a woman. Gaunt. Exhausted. Carrying a baby.</p>

            <p class="dialogue">"Please," she says. "We've been walking for days."</p>
        `,
        choices: [
            { text: "Open the gate.", target: 20 },
            { text: "Give them supplies but don't let them stay.", target: 21 }
        ]
    },

    20: {
        title: "THE FOUND FAMILY",
        thread: "yuna",
        isEnding: true,
        endingNumber: 5,
        content: `
            <p class="narrative">You open the gate.</p>

            <p class="narrative">The woman's name is Hyejin. The baby is Junho. They've been walking for three weeks.</p>

            <p class="narrative">You nurse them back to health. It takes months.</p>

            <p class="narrative">Somewhere along the way, they become yours.</p>

            <p class="narrative">Ten years later, Junho is ten. He calls you <em>Imo</em>—Auntie.</p>

            <p class="narrative">One day, he asks where you came from.</p>

            <p class="narrative">You tell him everything. The museum. The dead. The choices.</p>

            <p class="narrative">He listens, quiet and serious.</p>

            <p class="dialogue">"Are you glad you opened the gate?" he asks.</p>

            <p class="narrative">You look at him—this miracle, this future, this reason.</p>

            <p class="dialogue">"Every single day."</p>

            <div class="ending">
                <div class="ending-number">ENDING 5 OF 8</div>
                <h2 class="ending-title">THE FOUND FAMILY</h2>
                <div class="ending-text">
                    <p>You never return to Seoul. Never fight in any war.</p>
                    <p>You do something harder: you live. You raise a child who was never yours and became everything.</p>
                    <p>And when he has children of his own, he tells them about the woman who opened a gate once and never stopped opening it.</p>
                </div>
            </div>
        `,
        choices: []
    },

    18: {
        title: "THE CHOICE",
        thread: "yoo",
        content: `
            <p class="narrative">You kiss her.</p>

            <p class="narrative">She tastes like adrenaline and authority. Her hand tightens in your hair—not gentle, not asking—and she walks you backward until you hit the tent's center pole.</p>

            <p class="dialogue">"Decisive," she murmurs against your mouth. "Good."</p>

            <p class="dialogue">"Less talking."</p>

            <p class="dialogue">"Ordering me around?" She bites your lower lip. Hard enough to sting. "Brave."</p>

            <div class="spicy">
                <p class="narrative">Her hands are everywhere—pulling at your clothes, mapping your body with military precision. She knows what she's doing. She knows exactly where to touch.</p>

                <p class="dialogue">"This is just tonight," she says, pulling back. Her eyes are dark. "You understand that."</p>

                <p class="dialogue">"I understand."</p>

                <p class="dialogue">"And Minho?"</p>

                <p class="dialogue">"Isn't here."</p>

                <p class="narrative">She grins. It's predatory and beautiful.</p>

                <p class="dialogue">"Then let me show you what you've been missing."</p>

                <p class="narrative">She's not gentle. She doesn't apologize for it. Every touch is a demand: <em>give me this. Show me that. Let go.</em></p>

                <p class="narrative">When you finally break apart, she watches you with satisfaction.</p>

                <p class="dialogue">"Again," you gasp.</p>

                <p class="dialogue">"Say please."</p>

                <p class="narrative">You glare at her.</p>

                <p class="narrative">She laughs—genuine, surprised. "I like you," she says. "Yuna the museum curator." Her fingers trace down your stomach. "Since you asked so nicely..."</p>
            </div>

            <p class="narrative">You don't sleep.</p>

            <p class="narrative">In the morning, she's gone. A note on your pillow:</p>

            <p class="dialogue"><em>Same time tomorrow. If you want.<br>—Y.</em></p>

            <p class="narrative">You fold the note carefully. Tuck it into your pocket.</p>

            <p class="narrative">When Minho finds you at breakfast, he looks at you like he's seeing something new.</p>

            <p class="dialogue">"You seem different," he says.</p>

            <p class="dialogue">"Different how?"</p>

            <p class="dialogue">"I don't know." He studies you. "More... certain."</p>

            <p class="narrative">You smile. Don't explain.</p>

            <p class="narrative thought">Some things don't need explaining.</p>
        `,
        choices: [
            { text: "Keep seeing her.", target: 23 }
        ]
    },

    23: {
        title: "THE THROUPLE",
        thread: "yoo",
        isEnding: true,
        endingNumber: 6,
        content: `
            <p class="narrative">It takes a month before Minho realizes something's different.</p>

            <p class="narrative">It takes two before he confronts you about it.</p>

            <p class="dialogue">"Colonel Yoo," he says flatly. "You and Colonel Yoo."</p>

            <p class="narrative">You don't lie. "Yes."</p>

            <p class="dialogue">"How long?"</p>

            <p class="dialogue">"Since the second night."</p>

            <p class="narrative">He's quiet for a long moment. Then:</p>

            <p class="dialogue">"Do you love her?"</p>

            <p class="dialogue">"I don't know. I like her. She makes me feel... powerful."</p>

            <p class="dialogue">"And me?"</p>

            <p class="narrative">You cross to him. Take his hands.</p>

            <p class="dialogue">"You make me feel loved. That's different. That's not less."</p>

            <p class="narrative">He's struggling—you can see it. The old Minho would have walked away. The old Minho would have made this about his pride.</p>

            <p class="narrative">The new Minho looks at you.</p>

            <p class="dialogue">"I don't know how to do this," he admits.</p>

            <p class="dialogue">"Neither do I. But I'd rather figure it out than lose you."</p>

            <p class="dialogue">"And her?"</p>

            <p class="dialogue">"She's... interested. If you are."</p>

            <p class="narrative">His eyebrows rise. "Interested in what?"</p>

            <p class="dialogue">"In seeing if this can work. The three of us."</p>

            <p class="narrative">He's silent for so long you think you've broken something irreparable.</p>

            <p class="narrative">Then: "I'll talk to her."</p>

            <div class="poetic">
                All those shooting stars we counted:<br>
                matter burning up on entry,<br>
                brief and brilliant,<br>
                making someone's wish real<br>
                at the cost of its own light.
            </div>

            <p class="narrative">One year later. It's not easy. It's never easy.</p>

            <p class="narrative">But somewhere between supply runs and strategy meetings and tangled limbs in a tent that's become too small, you figure it out.</p>

            <p class="dialogue">"This is insane," Yoo says one night, sandwiched between you and Minho.</p>

            <p class="dialogue">"Completely," he agrees.</p>

            <p class="dialogue">"Absolutely," you add.</p>

            <p class="narrative">She kisses you. Then him. "I like insane."</p>

            <div class="ending">
                <div class="ending-number">ENDING 6 OF 8</div>
                <h2 class="ending-title">THE THROUPLE</h2>
                <div class="ending-text">
                    <p>The world ended. But you found two people who made the ruins feel like home.</p>
                    <p>Minho gives you steadiness. Yoo gives you fire. Together, they give you everything.</p>
                    <p>And when people ask how it works—the three of you, the mess, the impossibility—you just smile.</p>
                    <p><em>"We chose each other. Every day. That's all it takes."</em></p>
                </div>
            </div>
        `,
        choices: []
    },

    21: {
        title: "THE HERMIT",
        thread: "yuna",
        isEnding: true,
        endingNumber: 7,
        content: `
            <p class="narrative">You give them food. Water. Medicine.</p>

            <p class="dialogue">"There's a camp," you say. "Fifty kilometers south. They'll take you in."</p>

            <p class="narrative">Hyejin looks at you with hollow eyes.</p>

            <p class="dialogue">"Thank you."</p>

            <p class="narrative">They leave. You watch them go.</p>

            <p class="narrative">Three months later, a survivor from the southern camp finds you.</p>

            <p class="dialogue">"The woman with the baby? They made it. The boy's growing strong."</p>

            <p class="narrative">You nod.</p>

            <p class="dialogue">"She talks about you. The woman in the mountains who saved their lives but wouldn't let them stay."</p>

            <p class="narrative">You look out at the empty hills. The silence that's become your only companion.</p>

            <p class="narrative thought">Maybe you made the right choice.</p>

            <p class="narrative thought">Maybe not.</p>

            <div class="ending">
                <div class="ending-number">ENDING 7 OF 8</div>
                <h2 class="ending-title">THE HERMIT</h2>
                <div class="ending-text">
                    <p>You live alone for thirty more years.</p>
                    <p>Safe. Quiet. Haunted by the gate you didn't open.</p>
                    <p>Some endings aren't tragedies. They're just... choices.</p>
                </div>
            </div>
        `,
        choices: []
    },

    10: {
        title: "THE PROMISE",
        thread: "soojin",
        content: `
            <p class="dialogue">"We could go back for her," you say. "After Japan. When we have supplies. A plan."</p>

            <p class="narrative">Soojin goes very still.</p>

            <p class="dialogue">"You'd do that? For someone you've never met?"</p>

            <p class="dialogue">"For you."</p>

            <p class="narrative">The silence stretches. When she finally speaks, her voice is rough.</p>

            <p class="dialogue">"You don't even know me."</p>

            <p class="dialogue">"I know you saved my life. I know you're going back into hell with a museum curator you just met." You meet her eyes. "I know enough."</p>

            <p class="narrative">She doesn't cry. But something in her face cracks open.</p>

            <p class="dialogue">"Okay," she says. "Okay. Japan first. Then Busan. Then—" She stops. Swallows. "Then we see."</p>

            <p class="narrative">She holds out her hand. You take it.</p>

            <p class="narrative">Neither of you lets go until dawn.</p>
        `,
        choices: [
            { text: "Go to Japan together, then return.", target: 24 }
        ]
    },

    24: {
        title: "THE LIBERATORS",
        thread: "soojin",
        isEnding: true,
        endingNumber: 8,
        content: `
            <p class="narrative">Three years of war. Three years of liberation.</p>

            <p class="narrative">Soojin leads the combat teams. You lead the logistics.</p>

            <p class="narrative">The day you take back Seoul, you stand in the ruins of the National Museum. Your museum. What's left of it.</p>

            <p class="narrative">Soojin finds you there.</p>

            <p class="dialogue">"We did it," she says.</p>

            <p class="dialogue">"We did."</p>

            <p class="narrative">She takes your hand. Squeezes.</p>

            <p class="dialogue">"What now?"</p>

            <p class="narrative">You look at the rubble. At the city beyond. At the future spreading out in all directions.</p>

            <p class="dialogue">"We rebuild."</p>

            <p class="narrative">She kisses you. Long and slow and certain.</p>

            <p class="dialogue">"Then let's rebuild."</p>

            <div class="ending">
                <div class="ending-number">ENDING 8 OF 8</div>
                <h2 class="ending-title">THE LIBERATORS</h2>
                <div class="ending-text">
                    <p>Korea isn't saved. Not yet. Not fully.</p>
                    <p>But you've proven it can be.</p>
                    <p>And the woman beside you—the one who fought through hell with you, who believed in you when belief was madness—she's not going anywhere.</p>
                    <p><em>"Together," she says.</em></p>
                    <p><em>"Together."</em></p>
                </div>
            </div>
        `,
        choices: []
    },

    12: {
        title: "THE SILENCE",
        thread: "soojin",
        content: `
            <p class="narrative">You don't say anything.</p>

            <p class="narrative">You just move closer. Close enough that your shoulders touch. Close enough that she can feel you breathing.</p>

            <p class="narrative">For a long time, neither of you speaks. The convenience store creaks around you. Outside, the dead wander past.</p>

            <p class="dialogue">"I haven't told anyone that before," Soojin says quietly.</p>

            <p class="dialogue">"You don't have to explain anything."</p>

            <p class="dialogue">"I know." She turns to look at you. Her eyes catch the dim light. "That's why I'm telling you."</p>

            <p class="narrative">Something passes between you. Recognition.</p>

            <p class="narrative">When you sleep, you sleep back to back, keeping each other warm.</p>

            <p class="narrative">When you wake, her hand is in yours.</p>

            <p class="narrative">Neither of you mentions it. But neither of you lets go.</p>
        `,
        choices: [
            { text: "Continue to Japan.", target: 19 }
        ]
    },

    16: {
        title: "BOUNDARIES",
        thread: "yoo",
        content: `
            <p class="narrative">You pull away.</p>

            <p class="dialogue">"This is complicated enough."</p>

            <p class="narrative">Colonel Yoo steps back. Studies you. Something like respect flickers in her eyes.</p>

            <p class="dialogue">"Fair enough." She smooths her uniform. "You know where to find me. If you change your mind."</p>

            <p class="narrative">She leaves.</p>

            <p class="narrative">You stand alone in the dark, heart pounding, wondering if you made the right choice.</p>

            <p class="narrative">In the morning, Minho is waiting for you.</p>

            <p class="dialogue">"I saw Yoo leaving your tent last night," he says quietly. Nothing in his voice but question.</p>

            <p class="dialogue">"She wanted something. I said no."</p>

            <p class="narrative">He nods. Slow.</p>

            <p class="dialogue">"Okay."</p>

            <p class="dialogue">"Okay?"</p>

            <p class="dialogue">"Okay." He reaches out. Takes your hand. "I trust you."</p>

            <p class="narrative">Something in your chest loosens.</p>

            <p class="dialogue">"I trust you too."</p>
        `,
        choices: [
            { text: "Build something with Minho.", target: 15 }
        ]
    },

    17: {
        title: "THE OFFER",
        thread: "yoo",
        content: `
            <p class="dialogue">"What exactly are you offering?"</p>

            <p class="narrative">Colonel Yoo's smile widens.</p>

            <p class="dialogue">"Direct. I like that." She steps closer—close enough that you can count the silver strands in her hair. "Minho is... complicated. He's a good soldier. But he's not decisive. He waits for permission."</p>

            <p class="dialogue">"And you don't."</p>

            <p class="dialogue">"I take what I want." Her hand comes up, fingers trailing along your jaw. "Right now, I want you."</p>

            <p class="dialogue">"You don't even know me."</p>

            <p class="dialogue">"I know you survived. I know you walked here alone through hell. I know the way he looks at you—like you're his whole world." Her eyes are assessing. "I want to know what's so special about Yuna the museum curator."</p>

            <p class="dialogue">"And if I say no?"</p>

            <p class="dialogue">"Then you say no. And I leave. And we never speak of this again."</p>

            <p class="narrative">Her hand hasn't moved from your face.</p>
        `,
        choices: [
            { text: "\"Show me what you've got.\"", target: 18 },
            { text: "Pull away.", target: 16 }
        ]
    }
};

// Export for use in game.html
if (typeof module !== 'undefined' && module.exports) {
    module.exports = STORY_DATA;
}
