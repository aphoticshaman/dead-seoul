// ═══════════════════════════════════════════════════════════════════════════
// RECURSIVE BRANCHES - True Tree Structure
// Every choice splits. No convergence. Show don't tell.
// ═══════════════════════════════════════════════════════════════════════════

const RECURSIVE_BRANCHES = {

    // ═══════════════════════════════════════════════════════════════════════
    // BRANCH A: MRS. PARK PATH
    // Choice: "Help Mrs. Park" from section 1
    // ═══════════════════════════════════════════════════════════════════════

    // Override section 2 with richer content and more branches
    2: {
        title: "THE NEIGHBOR",
        thread: "yuna",
        content: `
            <p class="narrative">The hallway stretches forever. Twenty steps. Maybe thirty. The screaming from Mrs. Park's apartment makes your legs move before your brain catches up.</p>

            <p class="narrative">Her door is shaking. Something on the other side hits it again. Again. The wood splinters around the lock—cheap apartment construction, built for profit not survival.</p>

            <p class="narrative">You grab the fire extinguisher from the wall mount. Heavy. Red. Cold in your hands.</p>

            <p class="narrative">The door gives.</p>

            <p class="narrative">What comes through used to be Mr. Cho from 4B. Accountant. Liked to complain about your music. Now his jaw hangs loose, connected by strings of meat. His eyes are wrong—filmed over, but tracking. Hungry.</p>

            <p class="narrative">Behind him, Mrs. Park is pressed against her kitchen counter. Blood on her hands. A broken vase at her feet. She's eighty-three years old and she's not screaming anymore. She's waiting.</p>

            <p class="narrative">Mr. Cho turns toward you. His head cocks. Recognition? Hunger? You'll never know.</p>
        `,
        choices: [
            { text: "Swing the extinguisher at his head. Hard.", target: "2_attack" },
            { text: "Spray him in the face. Blind him.", target: "2_spray" },
            { text: "Scream. Draw his attention away from Mrs. Park.", target: "2_distract" }
        ]
    },

    "2_attack": {
        title: "THE SWING",
        thread: "yuna",
        content: `
            <p class="narrative">The extinguisher connects with Mr. Cho's temple. The sound—wet, crunching, final—will live in your dreams forever.</p>

            <p class="narrative">He drops. Doesn't get up.</p>

            <p class="narrative">Your hands won't stop shaking. You just killed your neighbor. You just killed—</p>

            <p class="dialogue">"He was already dead."</p>

            <p class="narrative">Mrs. Park's voice. Steady. She's pressing a kitchen towel to her arm. Red blooming through white cotton.</p>

            <p class="dialogue">"Bit me before you came. Maybe ten minutes ago."</p>

            <p class="narrative">Her eyes meet yours. Clear. Knowing.</p>

            <p class="dialogue">"We both know what that means, girl. I've been watching the news all morning. Now—" She nods toward her bedroom. "There's a lockbox under my bed. Combination is 1950. My husband's supplies from the war. Take them. Take my car keys too—blue Hyundai in the garage. And go."</p>

            <p class="narrative">Her hand finds yours. Squeezes once.</p>

            <p class="dialogue">"Thank you for not letting me die alone with... that thing."</p>
        `,
        choices: [
            { text: "Get the supplies. Honor her wish.", target: "2_attack_supplies" },
            { text: "\"I'm not leaving you. We can find help—\"", target: "2_attack_stay" },
            { text: "\"How long? How long do you have?\"", target: "2_attack_time" }
        ]
    },

    "2_attack_supplies": {
        title: "THE LOCKBOX",
        thread: "yuna",
        content: `
            <p class="narrative">The bedroom smells like lavender and old books. Photos on the wall—Mrs. Park young, beautiful, in military uniform. Her husband beside her. A Korea that doesn't exist anymore.</p>

            <p class="narrative">Under the bed: a metal lockbox. Heavy. You dial 1950.</p>

            <p class="narrative">Inside: a Daewoo K5 pistol, three magazines, a first aid kit, water purification tablets, a compass, a photograph of two young soldiers kissing in front of a tank.</p>

            <p class="narrative">Her husband's emergency supplies. For a war that ended seventy years ago. For a moment like this.</p>

            <p class="narrative">You take everything. The weight feels right.</p>

            <p class="narrative">When you come back to the living room, Mrs. Park is sitting in her chair. The good one. The one by the window where she watches the street.</p>

            <p class="dialogue">"Go," she says. Doesn't look at you. Watching the fires. "The garage elevator might still work. If not, stairs to B2. Blue Hyundai. Keys are on the hook by the door."</p>

            <p class="narrative">Her hand is on her chest. Over her heart.</p>

            <p class="dialogue">"I'm going to sit here and watch Seoul burn. Just for a little while. Then I'll handle... things."</p>
        `,
        choices: [
            { text: "Leave. She made her choice.", target: "2_supplies_garage" },
            { text: "Sit with her. Just for a moment.", target: "2_supplies_sit" },
            { text: "\"Let me... let me do it for you. So you don't have to.\"", target: "2_supplies_offer" }
        ]
    },

    "2_supplies_garage": {
        title: "THE DESCENT",
        thread: "yuna",
        content: `
            <p class="narrative">The elevator is dead. Of course it is.</p>

            <p class="narrative">The stairwell to B2 stretches down into darkness. Emergency lights flicker—red, then nothing, then red. Your phone flashlight catches graffiti, old blood, a single shoe.</p>

            <p class="narrative">You descend.</p>

            <p class="narrative">Fifteen floors of stairs. Each landing could hide something. Your feet echo. Your breath echoes. The pistol in your hand doesn't make you feel safe—it makes you feel like prey that might have a chance.</p>

            <p class="narrative">B2. The garage door creaks open.</p>

            <p class="narrative">The garage is chaos. Crashed cars. Abandoned luggage. Someone's child seat, empty, buckled tight. The exit ramp is blocked by a flipped delivery truck.</p>

            <p class="narrative">The blue Hyundai is there. Right where she said. Untouched.</p>

            <p class="narrative">But between you and the car—three figures. Standing still. Not moving. Not breathing. Waiting.</p>
        `,
        choices: [
            { text: "Go around. Quietly. Between the pillars.", target: "2_garage_sneak" },
            { text: "Three bullets. Three targets. You can make it.", target: "2_garage_shoot" },
            { text: "Find another car. Closer. Less risk.", target: "2_garage_other" }
        ]
    },

    "2_garage_sneak": {
        title: "THE PILLARS",
        thread: "yuna",
        content: `
            <p class="narrative">Concrete pillars. Every ten feet. Shadows between them deep enough to hide in.</p>

            <p class="narrative">You move. One pillar. Two. The three figures don't react. Their backs are to you. Hunched over something. Wet sounds. Eating sounds.</p>

            <p class="narrative">Don't look. Don't look. Don't—</p>

            <p class="narrative">You look.</p>

            <p class="narrative">A security guard. His name tag says KIM. His face is gone. They're taking turns with what's left.</p>

            <p class="narrative">Your foot catches a bottle. It doesn't fall. It rolls. The sound is impossibly loud in the concrete cavern.</p>

            <p class="narrative">One of them stops eating. Tilts its head. Sniffs.</p>

            <p class="narrative">The blue Hyundai is twenty feet away. The keys are in your pocket. Your hand is on the gun.</p>
        `,
        choices: [
            { text: "Freeze. Don't move. Don't breathe. Let it lose interest.", target: "2_sneak_freeze" },
            { text: "Sprint for the car. You're close enough.", target: "2_sneak_run" },
            { text: "Throw something. Draw them away. Then move.", target: "2_sneak_distract" }
        ]
    },

    "2_sneak_freeze": {
        title: "STILL",
        thread: "yuna",
        content: `
            <p class="narrative">Every muscle locks. Your lungs burn but you don't dare exhale.</p>

            <p class="narrative">The thing sniffs again. Takes a step toward you. Another.</p>

            <p class="narrative">It used to be a woman. Young. Pretty, probably. Now its jaw distends, testing the air. Five feet away. Four.</p>

            <p class="narrative">The other two haven't noticed. Still feeding.</p>

            <p class="narrative">It reaches the pillar. Sniffs the concrete where you were standing three seconds ago. Your back is pressed against cold cement. If it comes around—</p>

            <p class="narrative">It doesn't.</p>

            <p class="narrative">A car alarm erupts across the garage. Something triggered it. The three of them jerk, snap toward the sound, and sprint—fast, too fast—toward the noise.</p>

            <p class="narrative">You have maybe thirty seconds.</p>
        `,
        choices: [
            { text: "To the Hyundai. Now. Don't waste this.", target: "2_freeze_car" },
            { text: "Wait. Make sure they're far enough.", target: "2_freeze_wait" },
            { text: "Someone triggered that alarm. Find them.", target: "2_freeze_investigate" }
        ]
    },

    "2_freeze_car": {
        title: "IGNITION",
        thread: "yuna",
        content: `
            <p class="narrative">Key in the lock. Door open. Slide in. Key in the ignition.</p>

            <p class="narrative">The engine turns over. Catches. The dashboard lights up—half a tank, check engine light on, 47,000 kilometers.</p>

            <p class="narrative">The garage exit is blocked. But the entrance ramp—</p>

            <p class="narrative">You reverse. Tires scream on polished concrete. The three things hear. Turn. Start running toward you.</p>

            <p class="narrative">Gear shift. Drive. Floor it.</p>

            <p class="narrative">The entrance ramp spirals up. You take the curves too fast, scraping the wall, sparks flying. Behind you, feet on concrete. Getting closer.</p>

            <p class="narrative">Daylight. You burst onto the street and—</p>

            <p class="narrative">Seoul is burning. The Han River reflects orange and black. Helicopters spiral in the distance. The roads are chaos—abandoned cars, running figures, things that chase them.</p>

            <p class="narrative">Where do you go?</p>
        `,
        choices: [
            { text: "Minho said Itaewon. Go find him.", target: "2_car_itaewon" },
            { text: "The storage unit. Mrs. Park's key. Yeouido.", target: "2_car_yeouido" },
            { text: "Away. Just away. Drive until the city ends.", target: "2_car_escape" },
            { text: "Someone's waving. On the sidewalk. A survivor.", target: "2_car_survivor" }
        ]
    },

    "2_car_itaewon": {
        title: "TOWARD FIRE",
        thread: "minho",
        content: `
            <p class="narrative">Itaewon is northwest. Uphill. Through the heart of the chaos.</p>

            <p class="narrative">You drive through things that used to be people. The bumps stop feeling like anything after the third one. The Hyundai's hood is streaked red and black.</p>

            <p class="narrative">Namsan Tower burns on the mountain. A beacon for the end of the world.</p>

            <p class="narrative">The roads narrow. Itaewon's famous streets—bars, clubs, restaurants that served fusion food to tourists—are now corridors of fire and broken glass.</p>

            <p class="narrative">Your phone buzzes. Still has signal. Still working.</p>

            <p class="narrative">MINHO: where are you</p>
            <p class="narrative">MINHO: im at the hamilton hotel</p>
            <p class="narrative">MINHO: rooftop</p>
            <p class="narrative">MINHO: hurry</p>

            <p class="narrative">The Hamilton Hotel. You can see it from here. Six blocks. The street is... dense. Bodies moving. Not all of them wrong. Some just running.</p>
        `,
        choices: [
            { text: "Drive as close as you can. Then run.", target: "2_itaewon_drive" },
            { text: "Park here. Six blocks on foot is safer than driving into that.", target: "2_itaewon_walk" },
            { text: "Call him. Make sure it's really him.", target: "2_itaewon_call" }
        ]
    },

    "2_car_survivor": {
        title: "THE WAVING MAN",
        thread: "yuna",
        content: `
            <p class="narrative">He's young. Twenties. White shirt stained brown and red. Waving both arms. Screaming something you can't hear over the engine.</p>

            <p class="narrative">Behind him—three, four, five of them, closing in.</p>

            <p class="narrative">You slow. Just a little. See his face clearly now.</p>

            <p class="narrative">Terrified. Crying. Human.</p>

            <p class="narrative">The first one reaches him. He stumbles, falls. They're on him.</p>

            <p class="narrative">No. Not on him. Past him. Running toward the car. Toward the noise. Toward you.</p>

            <p class="narrative">He scrambles up. Runs toward your passenger door.</p>

            <p class="narrative">You have maybe three seconds to decide.</p>
        `,
        choices: [
            { text: "Unlock the door. Let him in.", target: "2_survivor_save" },
            { text: "Accelerate. You can't save everyone.", target: "2_survivor_leave" },
            { text: "Open the door, but keep moving. He has to jump.", target: "2_survivor_moving" }
        ]
    },

    "2_survivor_save": {
        title: "THE PASSENGER",
        thread: "yuna",
        content: `
            <p class="narrative">Click. The lock disengages.</p>

            <p class="narrative">He yanks the door open, throws himself inside. You floor it before he's fully in—his legs still hanging out, door swinging.</p>

            <p class="narrative">Something grabs his shoe. He kicks. Screams. The shoe comes off but he's in, he's alive, slamming the door just as teeth crack against the window.</p>

            <p class="narrative">You drive. He pants. For a moment, neither of you speaks.</p>

            <p class="dialogue">"Thank you." His voice cracks. "Thank you thank you thank—"</p>

            <p class="dialogue">"Are you bit?"</p>

            <p class="narrative">He freezes. Checks himself. Shirt. Arms. Legs. Neck.</p>

            <p class="dialogue">"No. I don't—no. I don't think so."</p>

            <p class="narrative">You glance at him. He's young. Handsome, in a boyish way. Office worker clothes—the white shirt was probably expensive once.</p>

            <p class="dialogue">"I'm Park Jungwoo. I was supposed to get married next week."</p>

            <p class="narrative">His voice breaks on the last word.</p>
        `,
        choices: [
            { text: "\"Where's your fiancée?\"", target: "2_jungwoo_fiancee" },
            { text: "\"We need to keep moving. Where were you trying to go?\"", target: "2_jungwoo_destination" },
            { text: "Say nothing. Focus on driving.", target: "2_jungwoo_silent" }
        ]
    },

    // ═══════════════════════════════════════════════════════════════════════
    // BRANCH A CONTINUED: Mrs. Park alternate paths
    // ═══════════════════════════════════════════════════════════════════════

    "2_spray": {
        title: "THE FOAM",
        thread: "yuna",
        content: `
            <p class="narrative">You squeeze the trigger. White foam blasts into Mr. Cho's face—into his eyes, his mouth, his ruined throat.</p>

            <p class="narrative">He staggers. Claws at his face. Makes a sound that isn't quite a scream.</p>

            <p class="narrative">It buys three seconds. Maybe four.</p>

            <p class="narrative">Mrs. Park is already moving. Eighty-three years old and she vaults the kitchen counter like she's done it a thousand times. Grabs a knife—the big one, the one for cutting whole fish.</p>

            <p class="dialogue">"DOWN!"</p>

            <p class="narrative">You drop. The knife goes over your head. Into Mr. Cho's eye socket. All the way to the handle.</p>

            <p class="narrative">He drops.</p>

            <p class="narrative">Mrs. Park stands over him, breathing hard. Blood on her hands. On her face. Her eyes are somewhere else—somewhere decades away.</p>

            <p class="dialogue">"Incheon," she whispers. "I was a nurse. Incheon, 1950. This isn't my first war."</p>
        `,
        choices: [
            { text: "\"Are you okay? Are you hurt?\"", target: "2_spray_check" },
            { text: "\"We need to move. More might be coming.\"", target: "2_spray_move" },
            { text: "Just stare at her. This grandmother. This warrior.", target: "2_spray_stare" }
        ]
    },

    "2_distract": {
        title: "THE SCREAM",
        thread: "yuna",
        content: `
            <p class="narrative">You scream. Raw. Primal. Every ounce of terror you've been swallowing since you woke up to the news anchor crying.</p>

            <p class="narrative">Mr. Cho turns. His head cocks—that wrong angle, that animal curiosity. He takes a step toward you.</p>

            <p class="narrative">Behind him, Mrs. Park moves. Fast. Silent. The soju bottle in her hand comes down on the back of his skull.</p>

            <p class="narrative">He stumbles. Doesn't fall.</p>

            <p class="narrative">She hits him again. Again. Glass shatters on the third blow. He's on his knees now, still reaching toward you, still trying to—</p>

            <p class="narrative">You bring the extinguisher down on his head.</p>

            <p class="narrative">Together. You killed him together.</p>

            <p class="narrative">Mrs. Park looks at you. Blood on her cardigan. Glass in her palm. Her eyes are bright. Alive.</p>

            <p class="dialogue">"Well." She almost smiles. "That was a first."</p>
        `,
        choices: [
            { text: "Laugh. You can't help it. The absurdity.", target: "2_distract_laugh" },
            { text: "Check the hallway. More could come.", target: "2_distract_hall" },
            { text: "Collapse against the wall. Shake. Process.", target: "2_distract_shake" }
        ]
    },

    "2_attack_stay": {
        title: "THE REFUSAL",
        thread: "yuna",
        content: `
            <p class="dialogue">"I'm not leaving you. We can find help. A hospital. Something—"</p>

            <p class="narrative">Mrs. Park's hand closes around your wrist. Strong. Stronger than an eighty-three-year-old hand should be.</p>

            <p class="dialogue">"Listen to me." Her eyes bore into yours. "I have watched people turn. This morning. On the news. Then out my window. It takes hours. Sometimes minutes. I have maybe—" she checks the clock "—an hour if I'm lucky."</p>

            <p class="narrative">She pulls you closer. Her breath smells like green tea and blood.</p>

            <p class="dialogue">"I'm not afraid to die, girl. I've been ready since my husband passed. But I will NOT become one of those things. And I will NOT let you throw your life away watching me become one."</p>

            <p class="narrative">She presses the lockbox key into your palm.</p>

            <p class="dialogue">"There's a gun in there. You take it. You survive. And if I'm still moving when you come back this way—"</p>

            <p class="narrative">She doesn't finish the sentence. She doesn't have to.</p>
        `,
        choices: [
            { text: "\"I'll come back. I promise.\"", target: "2_stay_promise" },
            { text: "\"Tell me about your husband. Before I go.\"", target: "2_stay_husband" },
            { text: "Take the key. Leave without another word. Words are useless now.", target: "2_attack_supplies" }
        ]
    },

    "2_attack_time": {
        title: "THE CLOCK",
        thread: "yuna",
        content: `
            <p class="dialogue">"How long? How long do you have?"</p>

            <p class="narrative">Mrs. Park checks the wound on her arm. Pulls back the kitchen towel. The bite is ragged—Mr. Cho's teeth weren't sharp, just persistent. The skin around it is already darkening. Veins spreading like cracks in ice.</p>

            <p class="dialogue">"The news said... varied. Some turned in minutes. Some took hours. The younger ones seemed faster."</p>

            <p class="narrative">She looks at her own hands. Wrinkled. Spotted. Old.</p>

            <p class="dialogue">"I'm hoping my stubborn old body is too slow to give up quickly." A dry laugh. "First time I've been grateful for arthritis."</p>

            <p class="narrative">She walks to the kitchen. Opens a drawer. Pulls out a small revolver—snub-nosed, well-oiled, loved.</p>

            <p class="dialogue">"My husband taught me to shoot in 1952. I've kept this loaded ever since. Just in case the North ever came." She sets it on the counter. "I'll handle things. When the time comes."</p>

            <p class="narrative">Her eyes meet yours.</p>

            <p class="dialogue">"Now. Will you stay and help me count down? Or will you run while you can?"</p>
        `,
        choices: [
            { text: "Stay. She shouldn't be alone for this.", target: "2_time_stay" },
            { text: "\"Is there anyone I should call? Family?\"", target: "2_time_family" },
            { text: "Take the supplies. Go. She made her choice.", target: "2_attack_supplies" }
        ]
    },

    // ═══════════════════════════════════════════════════════════════════════
    // BRANCH B: BARRICADE PATH
    // Choice: "Barricade your door" from section 1
    // ═══════════════════════════════════════════════════════════════════════

    3: {
        title: "THE BARRICADE",
        thread: "minho",
        content: `
            <p class="narrative">You barricade the door. Bookshelf first—heavy oak, inherited from your grandmother. Then the desk. Then the mattress, because why not, if they get through the first two you're dead anyway.</p>

            <p class="narrative">The window faces the street. You don't look. You can't look. The sounds are enough.</p>

            <p class="narrative">Hours pass. Maybe. Time stops meaning anything when the world ends.</p>

            <p class="narrative">Your phone is at 23%. You've refreshed the news until it stopped loading. The last update said the government was evacuating Gangnam. That was two hours ago.</p>

            <p class="narrative">Minho hasn't texted again. The call dropped. You've tried seventeen times. Straight to voicemail every time.</p>

            <p class="narrative">Then—</p>

            <p class="narrative">A knock. Not the frenzied pounding from before. Three precise raps. Patient. Human.</p>

            <p class="dialogue">"Yuna? Yuna, are you there?"</p>

            <p class="narrative">His voice. Through the door.</p>
        `,
        choices: [
            { text: "Tear down the barricade. It's him.", target: "3_open_fast" },
            { text: "\"How do I know it's really you?\"", target: "3_verify" },
            { text: "Stay silent. Watch the door. Wait.", target: "3_silent" }
        ]
    },

    "3_verify": {
        title: "THE TEST",
        thread: "minho",
        content: `
            <p class="narrative">Your hand hovers over the bookshelf. Ready to push. Not pushing yet.</p>

            <p class="dialogue">"How do I know it's really you?"</p>

            <p class="narrative">A pause. Then, through the door:</p>

            <p class="dialogue">"You cried the first time we made love. You were embarrassed about it. I said it was the most beautiful thing I'd ever seen. You told me to shut up."</p>

            <p class="narrative">Your breath catches.</p>

            <p class="dialogue">"Your favorite movie is Eternal Sunshine, but you tell people it's Parasite because you don't want them to think you're basic. You hate the taste of soju but drink it anyway because you want to fit in. And the night before I left for Tokyo—"</p>

            <p class="dialogue">"Stop."</p>

            <p class="narrative">Your voice breaks. You're already pulling at the bookshelf.</p>

            <p class="dialogue">"It's me, Yuna. Please. Open the door."</p>
        `,
        choices: [
            { text: "Open it. It's him. No one else knows those things.", target: "3_open_verified" },
            { text: "\"Are you bit? Tell me the truth.\"", target: "3_ask_bit" },
            { text: "\"Why did you call? After all this time?\"", target: "3_ask_why" }
        ]
    },

    "3_open_fast": {
        title: "THE REUNION",
        thread: "minho",
        content: `
            <p class="narrative">You tear down the barricade. Mattress. Desk. Bookshelf scraping the floor. Your grandmother's books spilling everywhere.</p>

            <p class="narrative">The door opens.</p>

            <p class="narrative">Minho stands in the hallway, covered in blood that isn't his. His face is pale. His eyes are wet. He's shaking.</p>

            <p class="dialogue">"Yuna—"</p>

            <p class="narrative">You pull him inside. Slam the door. Check the hallway—empty, for now—and start rebuilding the barricade.</p>

            <p class="narrative">He just stands there. Watching you. Shaking.</p>

            <p class="dialogue">"I came back."</p>

            <p class="narrative">His voice cracks.</p>

            <p class="dialogue">"I came back for you. The whole city is—and I just—I had to—"</p>

            <p class="narrative">He breaks. Right there in your apartment. Six months of silence and then the end of the world and he's sobbing against your shoulder like a child.</p>

            <p class="narrative">You hold him. What else can you do?</p>
        `,
        choices: [
            { text: "\"It's okay. You're here now. That's what matters.\"", target: "3_comfort" },
            { text: "\"We need to move. We can't stay here.\"", target: "3_plan" },
            { text: "Hold him. Say nothing. Let him break.", target: "3_hold" }
        ]
    },

    "3_silent": {
        title: "THE WAITING",
        thread: "minho",
        content: `
            <p class="narrative">You don't answer. Don't move. Barely breathe.</p>

            <p class="narrative">The voice on the other side waits. Then:</p>

            <p class="dialogue">"Yuna, I know you're in there. Your lights are on. I can see your shadow under the door."</p>

            <p class="narrative">Shit.</p>

            <p class="dialogue">"Look, I know you're scared. I am too. But I came halfway across the city to find you. Through... through everything. The least you can do is let me know you're alive."</p>

            <p class="narrative">His voice breaks on the last word.</p>

            <p class="dialogue">"Please. Say something. Anything. I need to know you're okay."</p>

            <p class="narrative">The silence stretches. Outside, somewhere distant, something screams.</p>

            <p class="narrative">Then—footsteps in the hallway. Not from Minho. Something else. Getting closer.</p>

            <p class="dialogue">"Yuna? Yuna, there's something coming. Please—"</p>
        `,
        choices: [
            { text: "Whisper through the door: \"Hide. Now.\"", target: "3_silent_warn" },
            { text: "Open the door. Fast. Pull him in.", target: "3_silent_rescue" },
            { text: "Stay silent. He led them here. This is his problem.", target: "3_silent_abandon" }
        ]
    },

    // ═══════════════════════════════════════════════════════════════════════
    // BRANCH C: GO ARMED PATH
    // Choice: "Grab a weapon and go" from section 1
    // ═══════════════════════════════════════════════════════════════════════

    4: {
        title: "THE ARMORY",
        thread: "yuna",
        content: `
            <p class="narrative">You don't wait. You don't hide. You arm up.</p>

            <p class="narrative">Kitchen drawer. The good knife—the one you bought at Namdaemun Market, that the ajumma swore was sharp enough to cut bone. You hope she was right.</p>

            <p class="narrative">Under the bed. The baseball bat from college. You never played—bought it for protection after that guy followed you home once. Never needed it. Until now.</p>

            <p class="narrative">Front pocket. Your phone. 34% battery. Minho's last words echoing: <em>I'm coming for you.</em></p>

            <p class="narrative">You stand at your door. Behind it: the hallway. Mrs. Park. The pounding that stopped ten minutes ago. The silence that's worse than the screaming.</p>

            <p class="narrative">You take a breath. Then another. Then you open the door.</p>

            <p class="narrative">The hallway is empty. Almost. At the far end—the elevator—something is slumped against the wall. Not moving. Beyond it, the stairwell door hangs open.</p>

            <p class="narrative">Down leads to the street. Up leads to the roof.</p>
        `,
        choices: [
            { text: "Down. Through the slumped figure. To the streets.", target: "4_down" },
            { text: "Up. High ground. See what you're dealing with.", target: "4_up" },
            { text: "Check Mrs. Park's apartment first.", target: "4_check_park" }
        ]
    },

    "4_down": {
        title: "THE STAIRWELL",
        thread: "yuna",
        content: `
            <p class="narrative">You pass the slumped figure. It was Mr. Cho from 4B. His head is caved in. Someone already handled him. You don't look too closely at who.</p>

            <p class="narrative">The stairwell is dark. Emergency lights dead. Your phone flashlight cuts a small cone of reality into the black.</p>

            <p class="narrative">Fifteen floors down. Each landing a potential ambush. Your footsteps echo. Blood roars in your ears.</p>

            <p class="narrative">Third floor. A sound. Breathing. Heavy. Wet. Something in the shadows below.</p>

            <p class="narrative">You stop. It stops.</p>

            <p class="narrative">You shine the light down. Two flights below—a figure. Standing in the corner. Facing the wall. Shoulders moving with each ragged breath.</p>

            <p class="narrative">It hasn't noticed you. Yet.</p>
        `,
        choices: [
            { text: "Continue down. Quietly. It's just one.", target: "4_down_quiet" },
            { text: "Go back up. Find another way.", target: "4_down_retreat" },
            { text: "Throw something. Draw it out. Then kill it.", target: "4_down_attack" }
        ]
    },

    "4_up": {
        title: "THE ROOF",
        thread: "yuna",
        content: `
            <p class="narrative">The roof access door is unlocked. Strange. Usually the landlord keeps it padlocked—liability, he always said.</p>

            <p class="narrative">You push it open. Morning light blinds you for a moment. Then your eyes adjust.</p>

            <p class="narrative">Seoul burns beneath you.</p>

            <p class="narrative">From up here, you can see the scope of it. Fires spreading through Mapo. Smoke rising from Gangnam. Helicopters circling Yeouido—military, from the look of them. The Han River reflects orange and black.</p>

            <p class="narrative">The roof is empty except for the water tanks, the satellite dishes, and—</p>

            <p class="narrative">Someone is sitting on the edge. Legs dangling over the sixteen-story drop. A woman. White dress, stained red. Looking out at the apocalypse.</p>

            <p class="narrative">She hears you. Turns.</p>

            <p class="narrative">Her face is untouched. Human. Tears tracking through soot and blood. She smiles. It's the saddest thing you've ever seen.</p>

            <p class="dialogue">"Beautiful, isn't it? In a horrible way?"</p>
        `,
        choices: [
            { text: "\"Are you okay? Are you hurt?\"", target: "4_roof_concern" },
            { text: "\"What are you doing up here?\"", target: "4_roof_question" },
            { text: "Keep your distance. Watch her hands.", target: "4_roof_cautious" }
        ]
    },

    "4_check_park": {
        title: "THE DOOR",
        thread: "yuna",
        content: `
            <p class="narrative">Mrs. Park's door is open. Not broken—open. Swinging gently in a draft from somewhere.</p>

            <p class="narrative">Inside: overturned furniture. Shattered vase. Blood on the kitchen floor—a lot of it. Drag marks leading to the bedroom.</p>

            <p class="narrative">You grip the bat tighter. Step inside.</p>

            <p class="dialogue">"Mrs. Park?"</p>

            <p class="narrative">No answer. The bedroom door is closed.</p>

            <p class="narrative">You cross the living room. Photos on the wall catch your eye—Mrs. Park young, in military uniform. Her husband beside her. A Korea that doesn't exist anymore.</p>

            <p class="narrative">Your hand finds the bedroom doorknob. Cold metal. You pause.</p>

            <p class="narrative">From inside: a sound. Breathing. But wrong. Too wet. Too rhythmic.</p>

            <p class="narrative">Something is in there. Something that used to be Mrs. Park.</p>
        `,
        choices: [
            { text: "Open the door. Put her down. She'd want that.", target: "4_park_mercy" },
            { text: "Leave. She's already gone. You can't help her now.", target: "4_park_leave" },
            { text: "Search the apartment first. She mentioned supplies.", target: "4_park_search" }
        ]
    },

    // ═══════════════════════════════════════════════════════════════════════
    // LAYER 3: THIRD DIVERGENCE - A-TREE CONTINUED
    // ═══════════════════════════════════════════════════════════════════════

    "2_supplies_sit": {
        title: "THE VIGIL",
        thread: "yuna",
        content: `
            <p class="narrative">You sit beside her. The good chair—her husband's—creaks under your weight.</p>

            <p class="narrative">Seoul burns. The sky is orange and black. Somewhere below, glass shatters. Somewhere distant, a helicopter falls.</p>

            <p class="dialogue">"His name was Taehyun," she says. Not looking at you. "We met during the war. The real one. I was nineteen. A nurse. He was twenty-two. A soldier with a hole in his chest."</p>

            <p class="narrative">Her fingers trace the arm of the chair.</p>

            <p class="dialogue">"I kept him alive for three days. Against orders. They said he was gone, to focus on soldiers we could save. I ignored them." A ghost of a smile. "He married me six months later."</p>

            <p class="narrative">The veins in her arm are darker now. Spreading. She doesn't seem to notice.</p>

            <p class="dialogue">"Fifty-four years. We had fifty-four years. Two children. Five grandchildren. A good life." She finally looks at you. "That's what you fight for, girl. Not survival. Love. Time. A life worth the pain of living it."</p>

            <p class="narrative">She presses the gun into your hands. Her fingers are cold.</p>

            <p class="dialogue">"Now. Will you do an old woman one last kindness?"</p>
        `,
        flags: { mrs_park_story: true, wisdom_received: true },
        choices: [
            { text: "\"Yes.\" Take the gun. Grant her peace.", target: "2_sit_mercy", flags: { mercy_given: true } },
            { text: "\"I can't. I'm sorry. I can't.\"", target: "2_sit_refuse" },
            { text: "\"Let me stay until... until you're ready.\"", target: "2_sit_wait" }
        ]
    },

    "2_sit_mercy": {
        title: "THE GIFT",
        thread: "yuna",
        content: `
            <p class="narrative">Your hands shake. The gun feels heavier than anything you've ever held.</p>

            <p class="narrative">Mrs. Park closes her eyes. Smiles. Reaches up and touches your cheek—her fingers cold, wrong, already changing.</p>

            <p class="dialogue">"You're a good girl, Yuna. Your parents would be proud."</p>

            <p class="narrative">She folds her hands in her lap. Faces the window. The burning city. Her burning home.</p>

            <p class="dialogue">"Taehyun is waiting. I can almost see him."</p>

            <p class="narrative">You raise the gun. Your hand steadies. Strange, how calm comes when there's no other choice.</p>

            <p class="narrative">The sound is enormous in the small apartment. Then silence.</p>

            <p class="narrative">She looks peaceful. Finally. Free.</p>

            <p class="narrative">You stand there for a long moment. Then you take the car keys. The lockbox. The photograph of her and Taehyun, young and in love and alive, from the wall.</p>

            <p class="narrative">You owe her that much. To remember.</p>
        `,
        flags: { mrs_park_mercy: true, carries_photo: true },
        choices: [
            { text: "To the garage. Keep moving.", target: "2_supplies_garage" },
            { text: "Take a moment. Grieve. Then go.", target: "2_mercy_grieve" },
            { text: "Check her apartment thoroughly. She mentioned supplies.", target: "2_mercy_search" }
        ]
    },

    "2_mercy_grieve": {
        title: "THE WEIGHT",
        thread: "yuna",
        content: `
            <p class="narrative">You collapse against the wall. The gun slips from your fingers. You can't breathe.</p>

            <p class="narrative">You just killed a woman. An old woman. A kind woman who brought you soup and called you "dear" and remembered your birthday when your own mother forgot.</p>

            <p class="narrative">The tears come. Ugly, gasping sobs that shake your whole body. You press your face into your knees and scream into the fabric of your jeans.</p>

            <p class="narrative">It takes a long time. Minutes. Hours. You don't know.</p>

            <p class="narrative">When you look up, the fires have spread. The sky is darker. Night is coming.</p>

            <p class="narrative">Mrs. Park is still in her chair. Still peaceful. The apartment is quiet.</p>

            <p class="narrative">You pick up the gun. Check it. Three rounds left. You gather yourself, piece by piece, and stand.</p>

            <p class="narrative">You're alive. She wanted that. Honor it.</p>
        `,
        flags: { grieved: true, emotional_moment: true },
        choices: [
            { text: "To the garage. No more delays.", target: "2_supplies_garage" },
            { text: "Say something. A prayer. Words for the dead.", target: "2_grieve_prayer" },
            { text: "Take her wedding ring. Someone should remember.", target: "2_grieve_ring" }
        ]
    },

    "2_grieve_prayer": {
        title: "THE WORDS",
        thread: "yuna",
        content: `
            <p class="narrative">You never learned to pray. Your family wasn't religious. But words come anyway.</p>

            <p class="dialogue">"Thank you. For the soup. For the kindness. For showing me what strength looks like."</p>

            <p class="narrative">You look at her face. Peaceful. Gone.</p>

            <p class="dialogue">"I hope Taehyun was waiting. I hope you found him."</p>

            <p class="narrative">The words feel hollow. Insufficient. But they're all you have.</p>

            <p class="dialogue">"I'll survive. I promise. I'll make it worth it."</p>

            <p class="narrative">You touch her hand one last time. Cold now. Still.</p>

            <p class="narrative">Then you take the supplies, the keys, the photograph, and you leave.</p>

            <p class="narrative">The hallway is empty. The stairwell waits. The city burns.</p>

            <p class="narrative">You've made a promise. Time to keep it.</p>
        `,
        flags: { made_promise: true, spiritual_moment: true },
        choices: [
            { text: "Down to the garage. Mrs. Park's car.", target: "2_supplies_garage" },
            { text: "Check other apartments. Survivors?", target: "2_prayer_check_building" },
            { text: "The roof first. Get bearings.", target: "2_prayer_roof" }
        ]
    },

    // ═══════════════════════════════════════════════════════════════════════
    // LAYER 3: B-TREE CONTINUED (Barricade/Minho path)
    // ═══════════════════════════════════════════════════════════════════════

    "3_comfort": {
        title: "THE COMFORT",
        thread: "minho",
        content: `
            <p class="dialogue">"It's okay. You're here now. That's what matters."</p>

            <p class="narrative">The words feel hollow, but he clings to them. Clings to you. His face buried in your shoulder, tears soaking through your shirt.</p>

            <p class="narrative">Outside, something screams. Inside, you hold onto each other.</p>

            <p class="narrative">Slowly, his breathing steadies. He pulls back. Wipes his eyes. Tries to find the man he used to be—the one who left for Tokyo, who had dreams bigger than love.</p>

            <p class="dialogue">"I drove," he says. "All the way from Gangnam. The roads are... you can't imagine. I had to—"</p>

            <p class="narrative">He stops. Swallows.</p>

            <p class="dialogue">"I ran over people, Yuna. People who were already—but they looked—I just drove. I didn't stop."</p>

            <p class="narrative">His hands are shaking again.</p>

            <p class="dialogue">"What does that make me?"</p>
        `,
        flags: { minho_confession: true },
        choices: [
            { text: "\"It makes you alive. That's all that matters now.\"", target: "3_comfort_alive" },
            { text: "\"You did what you had to. Don't carry that weight.\"", target: "3_comfort_absolution" },
            { text: "Just hold him again. Words won't help.", target: "3_comfort_hold" }
        ]
    },

    "3_comfort_alive": {
        title: "THE TRUTH",
        thread: "minho",
        content: `
            <p class="dialogue">"It makes you alive. That's all that matters now."</p>

            <p class="narrative">He stares at you. Searching your face for judgment. Finding none.</p>

            <p class="dialogue">"You really believe that?"</p>

            <p class="dialogue">"I believe we're both standing here. I believe the world ended this morning and you drove through hell to find me. I believe—"</p>

            <p class="narrative">Your voice catches.</p>

            <p class="dialogue">"I believe you came back. When you didn't have to. When it would have been easier to run."</p>

            <p class="narrative">He's quiet for a long moment. Then his hand finds yours. Warm. Real.</p>

            <p class="dialogue">"I was on the flight. The last one before they closed the airports. Halfway to Tokyo." His grip tightens. "I made them turn around. Told them I had a bomb."</p>

            <p class="narrative">Your eyes widen.</p>

            <p class="dialogue">"I didn't. Obviously. But I couldn't—I couldn't just leave. Not without knowing."</p>
        `,
        flags: { minho_returned: true, minho_truth: true },
        choices: [
            { text: "\"You're insane.\" Kiss him.", target: "3_alive_kiss" },
            { text: "\"What happened to the flight?\"", target: "3_alive_flight" },
            { text: "\"We need a plan. Where do we go?\"", target: "3_alive_plan" }
        ]
    },

    "3_alive_kiss": {
        title: "THE KISS",
        thread: "minho",
        jinRelevant: true,
        content: `
            <p class="dialogue">"You're insane."</p>

            <p class="narrative">And you kiss him. Hard. Desperate. Six months of silence and grief and anger, all of it dissolving in the press of his lips against yours.</p>

            <p class="narrative">He tastes like blood and smoke and fear. He tastes like the man you loved. Still love. Always loved, even when you hated him for leaving.</p>

            <p class="narrative">When you break apart, you're both breathing hard. His forehead against yours. His hands on your waist.</p>

            <p class="dialogue">"I'm sorry," he whispers. "I'm sorry I left. I'm sorry I didn't ask you to come. I'm sorry for everything."</p>

            <p class="dialogue">"I know."</p>

            <p class="dialogue">"I should have stayed. Should have chosen you. Should have—"</p>

            <p class="dialogue">"Minho."</p>

            <p class="narrative">You put a finger on his lips.</p>

            <p class="dialogue">"Survive first. Apologize later. We need to move."</p>

            <p class="narrative">He almost smiles. The first real expression since he walked through the door.</p>

            <p class="dialogue">"There's my Yuna."</p>
        `,
        flags: { minho_kiss: true, minho_reconciliation_started: true },
        choices: [
            { text: "\"The rooftop. High ground. We can see what we're dealing with.\"", target: "3_kiss_roof" },
            { text: "\"Mrs. Park next door. She might have supplies.\"", target: "3_kiss_neighbor" },
            { text: "\"Your car. Is it still there?\"", target: "3_kiss_car" }
        ]
    },

    "3_plan": {
        title: "THE STRATEGY",
        thread: "minho",
        content: `
            <p class="dialogue">"We need to move. We can't stay here."</p>

            <p class="narrative">Minho straightens. Wipes his face. Clicks into something—the corporate mode you used to tease him about. Action. Planning. Control.</p>

            <p class="dialogue">"You're right. You're right, okay." He paces. "The military is evacuating from the stadium. I heard it on the radio before—before the signal died."</p>

            <p class="narrative">He pulls out his phone. Dead.</p>

            <p class="dialogue">"Do you have power?"</p>

            <p class="narrative">You check yours. 19%. No signal.</p>

            <p class="dialogue">"We need to get to Mapo Stadium. Or the river. They were using boats too." He's talking fast now. "But the streets are—we'll need weapons. Food. Water. Supplies."</p>

            <p class="narrative">He looks around your apartment. Cataloging. Assessing.</p>

            <p class="dialogue">"What do you have?"</p>
        `,
        flags: { minho_planning: true },
        choices: [
            { text: "\"Kitchen knife. Baseball bat. Some canned food.\"", target: "3_plan_gather" },
            { text: "\"My neighbor might have more. Mrs. Park. She mentioned emergency supplies.\"", target: "3_plan_neighbor" },
            { text: "\"What about your car? You drove here.\"", target: "3_plan_car" }
        ]
    },

    "3_hold": {
        title: "THE SILENCE",
        thread: "minho",
        content: `
            <p class="narrative">You don't answer. Just pull him close again. Let his tears soak your shoulder. Let his weight lean into you.</p>

            <p class="narrative">Words are useless. Words can't fix the world. Words can't undo what he did to survive. What you'll both have to do.</p>

            <p class="narrative">So you hold him. And he holds you. Two people in a small apartment while Seoul dies outside.</p>

            <p class="narrative">Time passes. The light changes. The fires spread.</p>

            <p class="narrative">Eventually, he pulls back. His eyes are red, but clear. Something has shifted. Settled.</p>

            <p class="dialogue">"Okay," he says. Just that. Okay.</p>

            <p class="dialogue">"Okay," you answer.</p>

            <p class="narrative">He looks at you—really looks, for the first time since he arrived.</p>

            <p class="dialogue">"You're still wearing my shirt. The one I left behind."</p>

            <p class="narrative">You'd forgotten. The oversized Oxford you stole from his side of the closet. Slept in it for weeks after he left. Still sleep in it now.</p>

            <p class="dialogue">"It's comfortable."</p>

            <p class="dialogue">"It looks better on you."</p>
        `,
        flags: { minho_quiet_moment: true, intimacy: true },
        choices: [
            { text: "\"We should move. While we can.\"", target: "3_hold_move" },
            { text: "\"Do you regret it? Leaving?\"", target: "3_hold_regret" },
            { text: "Kiss his forehead. Just once. Then stand.", target: "3_hold_gentle" }
        ]
    },

    // ═══════════════════════════════════════════════════════════════════════
    // LAYER 3: C-TREE CONTINUED (Armed path)
    // ═══════════════════════════════════════════════════════════════════════

    "4_down_quiet": {
        title: "THE DESCENT",
        thread: "yuna",
        content: `
            <p class="narrative">One step. Then another. Each footfall deliberate. Silent.</p>

            <p class="narrative">The figure in the corner doesn't move. Still breathing. Still facing the wall. Lost in whatever hell they're experiencing.</p>

            <p class="narrative">You pass. Close enough to smell it—rot and copper and something sweet, sickly. Your stomach lurches.</p>

            <p class="narrative">Keep moving. Don't stop. Don't look.</p>

            <p class="narrative">Two more flights. Then the door to the lobby—or what's left of it.</p>

            <p class="narrative">The glass doors are shattered. The security desk is overturned. Blood—so much blood—painted across the marble floor in drag marks that lead outside.</p>

            <p class="narrative">Through the broken doors: the street. Hongdae. Your neighborhood for three years. Now unrecognizable.</p>

            <p class="narrative">Cars crashed into storefronts. Bodies in the road. And moving between them—things that used to be people. Hunting. Feeding. Waiting.</p>

            <p class="narrative">Minho said he was in Itaewon. Twenty minutes by foot. If the streets were empty. If the world was normal.</p>

            <p class="narrative">Neither of those things is true anymore.</p>
        `,
        choices: [
            { text: "Go left. Toward the main road. Faster but exposed.", target: "4_lobby_main" },
            { text: "Go right. Through the alleys. Slower but covered.", target: "4_lobby_alleys" },
            { text: "Wait. Watch. Learn their patterns.", target: "4_lobby_observe" }
        ]
    },

    "4_lobby_observe": {
        title: "THE PATTERNS",
        thread: "yuna",
        content: `
            <p class="narrative">You crouch behind the security desk. Watch.</p>

            <p class="narrative">They don't wander randomly. There's a logic—primitive, but there. They follow sound. Movement. They cluster near fresh blood, then disperse when the feeding is done.</p>

            <p class="narrative">They're faster than you expected. But they're not tireless. The ones that have been moving longest are slower, stumbling. The fresh ones—newly turned—sprint like athletes.</p>

            <p class="narrative">You count. Twelve in your immediate sightline. Maybe more beyond.</p>

            <p class="narrative">A car alarm blares three blocks away. Eight of them snap toward the sound and run. The remaining four stay—older ones, or smarter. Harder to say.</p>

            <p class="narrative">The path clears. Partially. A window.</p>

            <p class="narrative">You have maybe thirty seconds before they wander back. Maybe less.</p>
        `,
        flags: { observed_infected: true, tactical_thinking: true },
        choices: [
            { text: "Sprint. Now. Toward the alleys.", target: "4_observe_sprint" },
            { text: "Create another distraction. Widen the window.", target: "4_observe_distract" },
            { text: "Wait for a better opportunity.", target: "4_observe_wait" }
        ]
    },

    "4_roof_concern": {
        title: "THE EDGE",
        thread: "yuna",
        content: `
            <p class="dialogue">"Are you okay? Are you hurt?"</p>

            <p class="narrative">The woman laughs. It's not a happy sound.</p>

            <p class="dialogue">"Hurt?" She holds up her arm. Bite marks. Deep. The skin around them already graying. "Does this count?"</p>

            <p class="narrative">Your hand tightens on the bat. She notices.</p>

            <p class="dialogue">"Relax. I'm not going to attack you." She turns back to the city. "I came up here to jump. Before I turn. Seemed like the dignified choice."</p>

            <p class="narrative">She gestures at the apocalypse below.</p>

            <p class="dialogue">"But then I started watching. And it's so... beautiful. In a horrible way. All those fires. All that chaos. Humanity eating itself."</p>

            <p class="narrative">She looks at you. Her eyes are still human. Still there.</p>

            <p class="dialogue">"I was a professor. Philosophy. Spent my whole career talking about the human condition. And now..." She laughs again. "Now I get to see it. Raw. Unfiltered."</p>
        `,
        flags: { met_professor: true },
        choices: [
            { text: "\"How long do you have?\"", target: "4_concern_time" },
            { text: "\"What have you learned? From watching?\"", target: "4_concern_wisdom" },
            { text: "\"I could... help. Make it faster. If you want.\"", target: "4_concern_offer" }
        ]
    },

    "4_concern_wisdom": {
        title: "THE LESSON",
        thread: "yuna",
        content: `
            <p class="dialogue">"What have you learned? From watching?"</p>

            <p class="narrative">She tilts her head. Considering.</p>

            <p class="dialogue">"That we're not as civilized as we pretend. The veneer—manners, laws, social contracts—it's tissue paper. One crisis and it tears."</p>

            <p class="narrative">She points toward a cluster of figures in the street below. Not infected. People. Fighting over something.</p>

            <p class="dialogue">"See them? That started as a car accident. Fender bender. Now they're killing each other over a can of gasoline. No infected involved. Just people."</p>

            <p class="narrative">Her gaze moves to another spot. A building on fire. Someone on the balcony, waving.</p>

            <p class="dialogue">"And there. No one's going to save them. Everyone's too busy saving themselves. We built a world where heroism is a liability."</p>

            <p class="narrative">She looks at you. Really looks.</p>

            <p class="dialogue">"But you came up here. To check on a stranger. Why?"</p>
        `,
        flags: { received_wisdom: true },
        choices: [
            { text: "\"I don't know. Instinct.\"", target: "4_wisdom_instinct" },
            { text: "\"Because someone should. Because it matters.\"", target: "4_wisdom_principle" },
            { text: "\"I was looking for a way out. You just happened to be here.\"", target: "4_wisdom_honest" }
        ]
    },

    "4_park_mercy": {
        title: "THE MERCY",
        thread: "yuna",
        content: `
            <p class="narrative">You open the door.</p>

            <p class="narrative">Mrs. Park is on the bed. Or what's left of her. The infection has taken everything—twisted her into something hunched and wrong. She's facing away from you, clawing at the wall, trying to reach a photograph that's just out of reach.</p>

            <p class="narrative">Her husband. The photograph. She's still trying to get to him.</p>

            <p class="narrative">She hears you. Turns. Her jaw unhinges, teeth clicking. But for just a moment—just a fraction of a second—her eyes clear. Human. Trapped.</p>

            <p class="narrative">You see her in there. Screaming. Begging.</p>

            <p class="narrative">The bat feels heavy in your hands.</p>

            <p class="narrative">You swing.</p>

            <p class="narrative">It's not clean. It's not quiet. But it's done.</p>

            <p class="narrative">She's still now. Finally still. The photograph is in her hand—you didn't notice before. She'd been holding it. The whole time.</p>
        `,
        flags: { mrs_park_mercy_late: true, witnessed_transformation: true },
        choices: [
            { text: "Take the photograph. Remember her.", target: "4_mercy_photo" },
            { text: "Search the apartment. She mentioned supplies.", target: "4_mercy_search" },
            { text: "Leave. Now. Don't look back.", target: "4_mercy_leave" }
        ]
    },

    "4_mercy_photo": {
        title: "THE MEMORY",
        thread: "yuna",
        content: `
            <p class="narrative">You pry the photograph from her stiff fingers. It's creased, worn from years of handling. Two young people in military uniforms, arms around each other, smiling at a future that seemed infinite.</p>

            <p class="narrative">Park Taehyun and Kim Soonhee. 1952. Incheon.</p>

            <p class="narrative">Their names are written on the back in faded ink. And below: <em>The day you said yes.</em></p>

            <p class="narrative">You tuck the photograph into your pocket. Next to your phone. Next to the only connection to the person who might still be looking for you.</p>

            <p class="narrative">Mrs. Park's apartment is quiet now. The scratching, the breathing, the wrongness—all gone. Just an old woman in her bed, finally at peace.</p>

            <p class="narrative">You should search the apartment. She mentioned supplies. An emergency kit. Something her husband left behind.</p>

            <p class="narrative">But first, you pull the blanket over her. Cover what remains. Give her that dignity, at least.</p>
        `,
        flags: { carries_photo: true, dignity_given: true },
        choices: [
            { text: "Search for the emergency supplies.", target: "4_photo_search" },
            { text: "Leave. You've done enough here.", target: "4_photo_leave" },
            { text: "Check the rest of the floor. Other survivors?", target: "4_photo_floor" }
        ]
    },

    // ═══════════════════════════════════════════════════════════════════════
    // MISSING SECTIONS - Layer 3/4 completions
    // ═══════════════════════════════════════════════════════════════════════

    "2_stay_promise": {
        title: "THE PROMISE",
        thread: "yuna",
        content: `
            <p class="dialogue">"I'll come back. I promise."</p>

            <p class="narrative">Mrs. Park's eyes soften. For a moment, she's not a dying woman—she's a grandmother, looking at you the way she must have looked at her own children.</p>

            <p class="dialogue">"Don't make promises you can't keep, girl." But she's smiling. "Go. Survive. And if you do come back—"</p>

            <p class="narrative">She presses the key into your palm. Cold metal. Heavy with meaning.</p>

            <p class="dialogue">"—bring flowers. Taehyun always brought me flowers."</p>

            <p class="narrative">You squeeze her hand once. Then you run—through her apartment, grabbing the lockbox, the keys, everything she offered. You don't look back. Can't look back.</p>

            <p class="narrative">The hallway is empty. The stairwell waits. Behind you, her apartment door swings shut with a soft click.</p>

            <p class="narrative">You made a promise. Now keep it.</p>
        `,
        flags: { made_promise: true, mrs_park_farewell: true },
        choices: [
            { text: "To the garage. Her car is waiting.", target: "2_supplies_garage" },
            { text: "Check the other apartments. Someone else might need help.", target: "2_promise_apartments" },
            { text: "The roof. Get your bearings first.", target: "2_promise_roof" }
        ]
    },

    "2_stay_husband": {
        title: "THE LOVE STORY",
        thread: "yuna",
        content: `
            <p class="dialogue">"Tell me about your husband. Before I go."</p>

            <p class="narrative">Mrs. Park's face transforms. The pain fades. The fear fades. For a moment, she's somewhere else entirely.</p>

            <p class="dialogue">"Taehyun." She says his name like a prayer. "We met in Incheon. 1950. I was a nurse. He was dying."</p>

            <p class="narrative">She laughs—dry, fond.</p>

            <p class="dialogue">"The doctors said he had hours. I gave him three days. Changed his bandages every hour. Read him poetry. Yelled at him when he tried to give up."</p>

            <p class="narrative">Her eyes drift to the photograph on the wall.</p>

            <p class="dialogue">"He said I was too stubborn to let him die. I said he was too handsome to waste." Her smile fades. "Fifty-four years. Not enough. Never enough."</p>

            <p class="narrative">She looks at you. Clear-eyed. Certain.</p>

            <p class="dialogue">"Find someone worth being stubborn for. That's the secret. That's everything."</p>
        `,
        flags: { heard_love_story: true, wisdom_received: true },
        choices: [
            { text: "\"Thank you. I will.\" Take the key and go.", target: "2_attack_supplies" },
            { text: "\"Was it worth it? All the pain at the end?\"", target: "2_husband_worth" },
            { text: "Stay a moment longer. Let her remember.", target: "2_husband_linger" }
        ]
    },

    "2_time_stay": {
        title: "THE WATCH",
        thread: "yuna",
        content: `
            <p class="dialogue">"I'll stay. You shouldn't be alone for this."</p>

            <p class="narrative">Mrs. Park stares at you. Something shifts in her expression—surprise, gratitude, and then a fierce, proud joy.</p>

            <p class="dialogue">"You remind me of myself. Sixty years ago." She pats the chair beside her. "Sit. We'll watch the world end together."</p>

            <p class="narrative">You sit. The city burns. Time passes in strange ways—minutes feeling like hours, hours like heartbeats.</p>

            <p class="narrative">She tells you stories. The war. Her husband. Her children who live in America now, who she'll never see again. She doesn't cry. Neither do you.</p>

            <p class="narrative">When her hand starts to shake, when the veins in her arm turn black, she reaches for the revolver.</p>

            <p class="dialogue">"It's time, dear. Will you—" She swallows. "Will you hold my hand? Just at the end?"</p>
        `,
        flags: { stayed_with_mrs_park: true, witnessed_transformation: true },
        choices: [
            { text: "Take her hand. Be there until the end.", target: "2_watch_end" },
            { text: "\"Let me do it. You shouldn't have to.\"", target: "2_watch_offer" },
            { text: "\"I can't watch. I'm sorry.\" Leave now.", target: "2_watch_flee" }
        ]
    },

    "2_time_family": {
        title: "THE CALL",
        thread: "yuna",
        content: `
            <p class="dialogue">"Is there anyone I should call? Family?"</p>

            <p class="narrative">Mrs. Park's face crumbles. Just for a moment.</p>

            <p class="dialogue">"My daughter. Minjung. She's in California with the grandchildren." She reaches for her phone with shaking hands. "I've been trying all morning. The lines..."</p>

            <p class="narrative">You take the phone. Check it. No signal. Of course.</p>

            <p class="dialogue">"If—if you make it—" She grips your wrist. "Tell her I love her. Tell her I'm with her father now. Tell her—"</p>

            <p class="narrative">Her voice breaks.</p>

            <p class="dialogue">"Tell her I'm sorry I couldn't see the children grow up."</p>

            <p class="narrative">You memorize the number. Minjung Park. California. A daughter who will never know how her mother spent her last hour.</p>
        `,
        flags: { has_message: true, minjung_number: true },
        choices: [
            { text: "\"I'll find a way. I promise.\"", target: "2_family_promise" },
            { text: "\"What should I tell her about you?\"", target: "2_family_stories" },
            { text: "Stay silent. Some promises can't be made.", target: "2_attack_supplies" }
        ]
    },

    "2_sit_refuse": {
        title: "THE REFUSAL",
        thread: "yuna",
        content: `
            <p class="dialogue">"I can't. I'm sorry. I can't."</p>

            <p class="narrative">The gun feels like poison in your hands. You set it down on the table between you.</p>

            <p class="narrative">Mrs. Park watches you. No judgment. No disappointment. Just understanding.</p>

            <p class="dialogue">"It's alright, dear. Not everyone can." She picks up the revolver. Checks it with practiced hands. "I've done harder things than this."</p>

            <p class="narrative">She nods toward the door.</p>

            <p class="dialogue">"Go. The lockbox is under my bed. Combination 1950. Take everything. The car keys are by the door."</p>

            <p class="narrative">You stand. Your legs feel like water.</p>

            <p class="dialogue">"Mrs. Park—"</p>

            <p class="dialogue">"I know." She smiles. Peaceful. Ready. "Now go, girl. Before I change my mind about being brave."</p>
        `,
        flags: { couldnt_mercy: true, left_her_alive: true },
        choices: [
            { text: "Get the supplies and leave. Honor her choice.", target: "2_attack_supplies" },
            { text: "\"Wait. Let me stay until—\"", target: "2_time_stay" },
            { text: "Run. You can't be here for what comes next.", target: "2_refuse_run" }
        ]
    },

    "2_sit_wait": {
        title: "THE VIGIL EXTENDED",
        thread: "yuna",
        content: `
            <p class="dialogue">"Let me stay until... until you're ready."</p>

            <p class="narrative">Mrs. Park exhales slowly. Relief and sorrow mixed together.</p>

            <p class="dialogue">"You're a good girl. Better than this world deserves."</p>

            <p class="narrative">You sit together. The fires spread across Seoul. The screaming fades to distant echoes. Her breathing grows ragged, then steadier, then ragged again.</p>

            <p class="narrative">She talks. About Taehyun. About the war. About the bakery they owned in the '80s. About her children's first steps. About growing old and watching everyone else grow older.</p>

            <p class="narrative">The infection creeps up her arm. She pretends not to notice. You pretend not to see.</p>

            <p class="narrative">When her words start to slur, she reaches for the gun.</p>

            <p class="dialogue">"It's time," she says. Clear. Calm. "Thank you for the company."</p>
        `,
        flags: { extended_vigil: true, deep_bond: true },
        choices: [
            { text: "\"Thank you for the stories.\" Step back. Give her space.", target: "2_wait_step_back" },
            { text: "\"I'll tell them. Your daughter. Everyone. I'll tell them who you were.\"", target: "2_wait_promise" },
            { text: "Take the gun. \"Let me.\" Quick. Merciful.", target: "2_sit_mercy" }
        ]
    },

    "2_mercy_search": {
        title: "THE SEARCH",
        thread: "yuna",
        content: `
            <p class="narrative">You search the apartment. Mrs. Park mentioned supplies—her husband's paranoia about the North. Emergency preparations that never got used.</p>

            <p class="narrative">Under the bed: the lockbox. Combination 1950. Inside: a Daewoo K5 pistol, three magazines, water purification tablets, a first aid kit, a compass.</p>

            <p class="narrative">Kitchen pantry: canned food, enough for a week. Rice. Dried noodles. A bottle of soju that looks older than you.</p>

            <p class="narrative">Hall closet: a hiking backpack, barely used. Rope. A flashlight. Batteries.</p>

            <p class="narrative">You pack everything you can carry. The backpack strains against your shoulders. The gun sits heavy on your hip.</p>

            <p class="narrative">Mrs. Park's apartment has given you everything you need to survive. Now you just have to survive.</p>
        `,
        flags: { full_supplies: true, well_equipped: true },
        choices: [
            { text: "To the garage. Time to go.", target: "2_supplies_garage" },
            { text: "Check the roof first. Scout the situation.", target: "2_search_roof" },
            { text: "Knock on other doors. Anyone else alive up here?", target: "2_search_neighbors" }
        ]
    },

    "2_grieve_ring": {
        title: "THE RING",
        thread: "yuna",
        content: `
            <p class="narrative">You kneel beside her chair. Her hands are cold. Still. Folded in her lap the way she arranged them.</p>

            <p class="narrative">The ring is simple. Gold band, worn thin by fifty-four years of wear. You can barely read the inscription inside: <em>T+S 1952</em></p>

            <p class="narrative">You hesitate. This feels wrong. Sacred. But—</p>

            <p class="narrative">She wanted to be remembered. She wanted Taehyun to be remembered. Someone should carry their story forward.</p>

            <p class="narrative">You slip the ring onto a chain from her jewelry box. Hang it around your neck. The gold is cold against your chest.</p>

            <p class="dialogue">"I'll tell them," you whisper. "Someone will know you existed. Both of you."</p>

            <p class="narrative">Her face is peaceful. You choose to believe she heard.</p>
        `,
        flags: { carries_ring: true, remembrance: true },
        choices: [
            { text: "Go. The garage. Survive.", target: "2_supplies_garage" },
            { text: "One more look around. She might have had other things.", target: "2_mercy_search" },
            { text: "The photo too. Take the photo.", target: "2_ring_photo" }
        ]
    },

    "2_spray_check": {
        title: "THE EXAMINATION",
        thread: "yuna",
        content: `
            <p class="dialogue">"Are you okay? Are you hurt?"</p>

            <p class="narrative">Mrs. Park looks down at herself. The cardigan is splattered with blood—Mr. Cho's, from the knife. Her hands shake slightly, but she examines them with clinical detachment.</p>

            <p class="dialogue">"Nothing that won't bruise." She flexes her fingers. "I was a nurse, you know. In the war. You learn what pain matters and what doesn't."</p>

            <p class="narrative">She looks at you. Really looks.</p>

            <p class="dialogue">"You're the one I'm worried about. First time?"</p>

            <p class="narrative">She means killing. You nod.</p>

            <p class="dialogue">"It gets easier." A pause. "That's not comfort. That's warning. Don't let it get too easy."</p>

            <p class="narrative">She moves toward her bedroom. Brisk. Purposeful.</p>

            <p class="dialogue">"My husband left supplies. Come. We don't have much time."</p>
        `,
        flags: { mrs_park_unbitten: true, mrs_park_mentor: true },
        choices: [
            { text: "Follow her. Take the supplies.", target: "2_check_follow" },
            { text: "\"What about the neighbors? Should we check on them?\"", target: "2_check_neighbors" },
            { text: "\"You should come with me. It's not safe here.\"", target: "2_check_invite" }
        ]
    },

    "2_spray_move": {
        title: "THE URGENCY",
        thread: "yuna",
        content: `
            <p class="dialogue">"We need to move. More might be coming."</p>

            <p class="narrative">Mrs. Park nods sharply. No argument. No hesitation.</p>

            <p class="dialogue">"The bedroom. Under the bed. Combination 1950." She's already moving as she talks. "My husband was prepared for the North. Turns out he was preparing for the wrong apocalypse."</p>

            <p class="narrative">She laughs. It sounds almost normal.</p>

            <p class="narrative">The lockbox is there. Heavy. Cold. Inside: weapons, supplies, everything you need.</p>

            <p class="dialogue">"The car keys are by the door. Blue Hyundai, B2 garage." She presses a key into your palm. "Storage unit in Yeouido. More supplies. Enough for weeks."</p>

            <p class="narrative">She's giving you everything. A survival kit. A plan. A chance.</p>

            <p class="dialogue">"Now go. Before the noise draws more of them."</p>
        `,
        flags: { quick_exit: true, has_supplies: true },
        choices: [
            { text: "\"Come with me.\"", target: "2_move_invite" },
            { text: "Take the supplies. Get to the car.", target: "2_supplies_garage" },
            { text: "\"What about you?\"", target: "2_move_what_about" }
        ]
    },

    "2_spray_stare": {
        title: "THE WARRIOR",
        thread: "yuna",
        content: `
            <p class="narrative">You stare at her. This grandmother. This warrior.</p>

            <p class="narrative">Blood drips from the knife in her hand. Her white hair is streaked with red. Her eyes—her eyes are somewhere else. Somewhere decades away.</p>

            <p class="dialogue">"You're looking at me like I'm a monster," she says. Matter-of-fact. "I'm not. I'm just old enough to remember what survival costs."</p>

            <p class="narrative">She sets down the knife. Washes her hands in the kitchen sink. The water runs pink.</p>

            <p class="dialogue">"I killed Japanese soldiers when I was sixteen. Killed Chinese soldiers at twenty. Killed a man who tried to rape my sister at twenty-two." She dries her hands. Turns to face you. "This world has always been violent. We just built pretty walls to hide it."</p>

            <p class="narrative">She gestures at the window. The burning city.</p>

            <p class="dialogue">"Now the walls are down. What are you going to do about it?"</p>
        `,
        flags: { witnessed_strength: true, mentor_moment: true },
        choices: [
            { text: "\"Survive. Whatever it takes.\"", target: "2_stare_survive" },
            { text: "\"I don't know. I've never had to—\"", target: "2_stare_admit" },
            { text: "\"Protect the people I love.\"", target: "2_stare_protect" }
        ]
    },

    "2_distract_laugh": {
        title: "THE ABSURDITY",
        thread: "yuna",
        content: `
            <p class="narrative">You laugh. You can't help it. The absurdity of everything—the apocalypse, the neighbor you just killed, the eighty-three-year-old grandmother covered in blood and broken glass—it bubbles up and out before you can stop it.</p>

            <p class="narrative">Mrs. Park stares at you. Then she laughs too. A dry, crackling sound that turns into something real.</p>

            <p class="dialogue">"When Taehyun died, I cried for a week." She wipes tears from her eyes—laughter tears now. "When the world ends, I laugh with a stranger over a corpse. Fifty-four years of marriage didn't prepare me for this."</p>

            <p class="narrative">The laughter fades. Reality settles back in. Mr. Cho is still dead on the floor. The city is still burning.</p>

            <p class="dialogue">"Well." She smooths her cardigan. "I suppose we should figure out what comes next."</p>
        `,
        flags: { shared_absurdity: true, bonded: true },
        choices: [
            { text: "\"Supplies. Escape. Survival.\"", target: "2_laugh_plan" },
            { text: "\"Are you coming with me?\"", target: "2_laugh_invite" },
            { text: "\"What do YOU think comes next?\"", target: "2_laugh_wisdom" }
        ]
    },

    "2_distract_hall": {
        title: "THE HALLWAY",
        thread: "yuna",
        content: `
            <p class="narrative">You move to the doorway. Check the hall.</p>

            <p class="narrative">Empty. The elevator light blinks—stuck between floors. The stairwell door at the end hangs open. Beyond it: darkness and the echo of distant screaming.</p>

            <p class="narrative">No more of them. For now.</p>

            <p class="narrative">Mrs. Park appears beside you. She's found the fire extinguisher, holds it ready.</p>

            <p class="dialogue">"Clear?"</p>

            <p class="dialogue">"For now."</p>

            <p class="narrative">She nods. Processing. Planning.</p>

            <p class="dialogue">"My apartment has supplies. My husband was—well, he was paranoid. Prepared for things that never came." She gestures down the hall. "We should move quickly. Before more of them come."</p>
        `,
        flags: { checked_hall: true, tactical: true },
        choices: [
            { text: "Follow her to the supplies.", target: "2_hall_supplies" },
            { text: "\"We should check the other apartments first.\"", target: "2_hall_check" },
            { text: "\"Down the stairs. Now. Every second counts.\"", target: "2_hall_run" }
        ]
    },

    "2_distract_shake": {
        title: "THE BREAKDOWN",
        thread: "yuna",
        content: `
            <p class="narrative">You collapse against the wall. Your legs give out. The fire extinguisher clatters to the floor.</p>

            <p class="narrative">You just killed a man. You just—your hands are shaking—you can't breathe—</p>

            <p class="narrative">Arms around you. Warm. Smelling of lavender and old books and blood.</p>

            <p class="dialogue">"Breathe, girl. In. Out. That's it."</p>

            <p class="narrative">Mrs. Park holds you while the world ends outside. Her voice is steady. Calm. Like she's soothed a thousand panics before.</p>

            <p class="dialogue">"The first one is always the hardest. I threw up for an hour after mine." A pause. "Of course, I was sixteen and he was a Japanese soldier, but the principle's the same."</p>

            <p class="narrative">Your breathing steadies. The shaking slows. You're still alive. Still here.</p>

            <p class="dialogue">"Better?"</p>

            <p class="narrative">You nod. Wipe your eyes. Stand.</p>

            <p class="dialogue">"Good girl. Now let's get you out of here."</p>
        `,
        flags: { broke_down: true, comforted: true },
        choices: [
            { text: "Let her lead you to the supplies.", target: "2_shake_follow" },
            { text: "\"I can do this. I can do this.\" Pull yourself together.", target: "2_shake_resolve" },
            { text: "\"Thank you. I don't even know your name.\"", target: "2_shake_name" }
        ]
    },

    // ═══════════════════════════════════════════════════════════════════════
    // GENERIC CONVERGENCE NODES - Same place, different context
    // ═══════════════════════════════════════════════════════════════════════

    "2_promise_apartments": {
        title: "THE FLOOR",
        thread: "yuna",
        content: `
            <p class="narrative">You knock on doors. Four apartments on this floor. No answer from any of them.</p>

            <p class="narrative">Mr. Cho's door is open—his apartment empty, a meal half-eaten on the counter. The Kim family next door: silence. The young couple at the end: their door is locked, but you hear something inside. Movement. Not human movement.</p>

            <p class="narrative">You back away slowly.</p>

            <p class="narrative">This floor is lost. Anyone who could leave already did. Anyone who stayed—</p>

            <p class="narrative">You don't finish the thought. You don't need to.</p>

            <p class="narrative">Mrs. Park's supplies are in your pack. Her car waits in the garage. Her voice echoes in your mind: <em>Survive.</em></p>
        `,
        flags: { checked_floor: true, alone: true },
        choices: [
            { text: "To the garage. No more delays.", target: "2_supplies_garage" },
            { text: "The roof. Get a view of what you're dealing with.", target: "2_promise_roof" },
            { text: "Down the fire escape. Avoid the internal stairs.", target: "2_promise_fire_escape" }
        ]
    },

    "2_promise_roof": {
        title: "THE VIEW",
        thread: "yuna",
        content: `
            <p class="narrative">The roof access door groans open. Morning light blinds you for a moment.</p>

            <p class="narrative">Then you see it. All of it.</p>

            <p class="narrative">Seoul is burning. Not everywhere—not yet—but the fires are spreading. Mapo. Yeongdeungpo. The smoke rises in columns that join together in a gray ceiling above the city.</p>

            <p class="narrative">Helicopters circle in the distance. Military. Some are evacuating; others are just... watching. A plane spirals toward the Han River, trailing smoke.</p>

            <p class="narrative">Below you: the streets are chaos. Cars piled against each other. People running. Things chasing them. You're too high to hear the screaming, but you can see it in the movement. The panic. The death.</p>

            <p class="narrative">Itaewon is to the north. You can see the hill, the old base, the hotels. Minho is there. Somewhere.</p>

            <p class="narrative">If he's still alive.</p>
        `,
        flags: { saw_panorama: true, knows_layout: true },
        choices: [
            { text: "To the garage. The car is the best option.", target: "2_supplies_garage" },
            { text: "Try the phone again. Maybe there's signal up here.", target: "2_roof_phone" },
            { text: "Look for a route to Itaewon. The streets look blocked.", target: "2_roof_route" }
        ]
    }
};

// Merge into STORY_DATA
if (typeof STORY_DATA !== 'undefined') {
    Object.assign(STORY_DATA, RECURSIVE_BRANCHES);
}

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { RECURSIVE_BRANCHES };
}
