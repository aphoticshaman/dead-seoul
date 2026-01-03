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

    "2_search_roof": {
        title: "THE VIEW",
        thread: "yuna",
        content: `
            <p class="narrative">The roof access door groans open. Cold morning air hits your face, carrying smoke and something else—something chemical, acrid.</p>

            <p class="narrative">Seoul spreads out below you like a wound.</p>

            <p class="narrative">Fires burn in Mapo, in Yeongdeungpo, in the direction of Gangnam. The smoke rises in columns that merge into a gray ceiling, blotting out the sun. Helicopters circle in the distance—military, you think—some landing, some just... watching.</p>

            <p class="narrative">The Han River is dotted with boats. People fleeing by water. Smart.</p>

            <p class="narrative">Closer: the streets around your building are chaos. Overturned cars. Bodies. Things that move wrong, that shamble, that don't look up. The infected don't seem to notice the roof. They hunt by sound, by movement. Up here, you're invisible.</p>

            <p class="narrative">Itaewon is to the north. You can see the old base, the hotels. Minho is there. Somewhere. If he's still alive.</p>

            <p class="narrative">The garage entrance is clear. For now. But you can see a group of them milling near the convenience store across the street. Maybe ten. Maybe more.</p>

            <p class="narrative">You have a decision to make.</p>
        `,
        flags: { scouted_roof: true, knows_layout: true },
        choices: [
            { text: "To the garage. The car is the best option.", target: "2_supplies_garage" },
            { text: "Wait for them to move on. Patience.", target: "2_roof_wait" },
            { text: "Look for another way down. Fire escape?", target: "2_roof_escape" }
        ]
    },

    "2_search_neighbors": {
        title: "THE DOORS",
        thread: "yuna",
        content: `
            <p class="narrative">You knock on doors. Four apartments on this floor besides Mrs. Park's.</p>

            <p class="narrative">Mr. Cho's apartment: door ajar. Inside, a meal half-eaten on the counter. No sign of him. No blood. Just... absence.</p>

            <p class="narrative">The Kim family: silence. Their door is locked. You press your ear to it and hear nothing. They might have evacuated early. Or—</p>

            <p class="narrative">The young couple at the end: their door is unlocked. You push it open slowly. The smell hits you first—copper and rot. Something moves in the darkness of their bedroom. A wet, rhythmic sound.</p>

            <p class="narrative">You back away. Close the door. Don't look.</p>

            <p class="narrative">Last apartment. The old man who never talks to anyone. You knock softly.</p>

            <p class="dialogue">"Go away." His voice, through the door. "I have a shotgun and I know how to use it."</p>

            <p class="narrative">At least someone else is alive.</p>

            <p class="narrative">This floor is lost. Anyone who could leave already did. Anyone who stayed is either hiding or hunting.</p>
        `,
        flags: { checked_neighbors: true, floor_lost: true },
        choices: [
            { text: "To the garage. No more delays.", target: "2_supplies_garage" },
            { text: "Try to convince the old man to come with you.", target: "2_neighbor_convince" },
            { text: "Check the roof. Get a view of what you're dealing with.", target: "2_search_roof" }
        ]
    },

    "2_roof_wait": {
        title: "PATIENCE",
        thread: "yuna",
        content: `
            <p class="narrative">You wait.</p>

            <p class="narrative">The infected mill around the convenience store for what feels like hours. One of them keeps walking into a glass door, over and over, like a broken machine. Another crouches over something in the street—you don't look too closely.</p>

            <p class="narrative">Eventually, a car alarm goes off three blocks away. They turn. They shamble toward it. Slow. Relentless.</p>

            <p class="narrative">The path to the garage is clear. For now.</p>

            <p class="narrative">You move.</p>
        `,
        flags: { waited_patiently: true, tactical: true },
        choices: [
            { text: "To the garage. Now.", target: "2_supplies_garage" }
        ]
    },

    "2_roof_escape": {
        title: "THE FIRE ESCAPE",
        thread: "yuna",
        content: `
            <p class="narrative">The fire escape is on the east side of the building. Old iron, rusted but solid. It leads down to the alley behind the building—away from the main street, away from the group near the convenience store.</p>

            <p class="narrative">You test the first step. It groans but holds.</p>

            <p class="narrative">Five floors down. One step at a time. The alley below is empty—for now. The garage entrance is around the corner.</p>

            <p class="narrative">This might work.</p>
        `,
        flags: { used_fire_escape: true, stealthy: true },
        choices: [
            { text: "Descend carefully. One floor at a time.", target: "2_supplies_garage" },
            { text: "Wait. Listen first. Make sure it's clear.", target: "2_roof_wait" }
        ]
    },

    "2_neighbor_convince": {
        title: "THE REFUSAL",
        thread: "yuna",
        content: `
            <p class="dialogue">"Please. You can't stay here. The building isn't safe."</p>

            <p class="narrative">A long silence from behind the door.</p>

            <p class="dialogue">"I've been waiting to die for fifteen years, girl. My wife is buried in Bundang. My son stopped calling in 2019."</p>

            <p class="narrative">The voice is tired. Not afraid. Just... done.</p>

            <p class="dialogue">"This is my home. If something comes through that door, I'll give it both barrels. But I'm not running. Not anymore."</p>

            <p class="narrative">You want to argue. You want to break down the door and drag him out. But you can't save everyone. You can't even save yourself yet.</p>

            <p class="dialogue">"Good luck," you say. It sounds hollow.</p>

            <p class="dialogue">"You too, girl. Survive. Someone should."</p>
        `,
        flags: { tried_to_help: true, compassionate: true },
        choices: [
            { text: "To the garage. You've done what you can.", target: "2_supplies_garage" },
            { text: "Leave him some supplies. He'll need them.", target: "2_neighbor_supplies" }
        ]
    },

    "2_neighbor_supplies": {
        title: "THE GIFT",
        thread: "yuna",
        content: `
            <p class="narrative">You set down a can of soup and a bottle of water outside his door.</p>

            <p class="narrative">A long pause. Then: the sound of locks disengaging. The door opens a crack. An old face peers out—weathered, suspicious, but with eyes that soften when they see what you've left.</p>

            <p class="dialogue">"You're a fool," he says. But his voice is gentler now.</p>

            <p class="dialogue">"Maybe."</p>

            <p class="dialogue">"The garage exit is clear. I've been watching from my window. Go now, before the group near the store comes back."</p>

            <p class="narrative">He takes the supplies. Nods once.</p>

            <p class="dialogue">"Kindness will get you killed in this world. But—" A pause. "Thank you. For trying."</p>

            <p class="narrative">The door closes. The locks engage.</p>

            <p class="narrative">You go.</p>
        `,
        flags: { generous: true, karma_positive: true, intel_garage: true },
        choices: [
            { text: "To the garage. He said it's clear.", target: "2_supplies_garage" }
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
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // GENERATED SECTIONS - Missing Act 2 branches
    // ═══════════════════════════════════════════════════════════════════════════

    "2_ring_photo": {
        title: "THE PHOTOGRAPH",
        thread: "yuna",
        content: `
            <p class="narrative">The photograph sits on the dresser. Black and white, faded at the edges. Two young people in military uniforms—her and him, Taehyun, before fifty-four years of marriage.</p>
            <p class="narrative">She's smiling. He's not—too nervous, maybe, or too aware of what was coming. The Korean War was weeks away.</p>
            <p class="narrative">You slip the photo into your pack, next to the ring. Two pieces of a love story that outlasted everything except this.</p>
            <p class="narrative">Time to go.</p>
        `,
        flags: { has_photo: true, carries_ring: true, full_remembrance: true },
        choices: [
            { text: "To the garage. Honor their memory by surviving.", target: "2_supplies_garage" }
        ]
    },

    "2_check_follow": {
        title: "THE SUPPLIES",
        thread: "yuna",
        content: `
            <p class="narrative">You follow Mrs. Park to her bedroom. Under the bed: a lockbox. She spins the combination. 1950.</p>
            <p class="narrative">Inside: a Daewoo K5 pistol. Three magazines. Water purification tablets. First aid kit. Compass.</p>
            <p class="dialogue">"Taehyun always said they'd come eventually." She laughs—dry, sad. "He was right. Just not about who."</p>
            <p class="narrative">She presses the gun into your hands.</p>
            <p class="dialogue">"You know how to use this?"</p>
        `,
        flags: { has_gun: true, mrs_park_supplies: true },
        choices: [
            { text: "I'll learn.", target: "2_supplies_garage" },
            { text: "Come with me. Please.", target: "2_check_invite" }
        ]
    },

    "2_check_invite": {
        title: "THE INVITATION",
        thread: "yuna",
        content: `
            <p class="dialogue">"Come with me. Please."</p>
            <p class="narrative">Mrs. Park's face softens—then hardens.</p>
            <p class="dialogue">"My hip won't make it. I'd slow you down."</p>
            <p class="narrative">She touches your face.</p>
            <p class="dialogue">"You have a boy waiting. Go find him. Live the years I already had."</p>
            <p class="narrative">She pushes you toward the door.</p>
        `,
        flags: { mrs_park_farewell: true },
        choices: [
            { text: "Go. Honor her wish.", target: "2_supplies_garage" }
        ]
    },

    "2_check_neighbors": {
        title: "THE QUESTION",
        thread: "yuna",
        content: `
            <p class="dialogue">"What about the neighbors?"</p>
            <p class="narrative">Mrs. Park's face goes still.</p>
            <p class="dialogue">"Mr. Cho didn't answer this morning. I heard... sounds."</p>
            <p class="dialogue">"The Kims evacuated. The young couple..." She shakes her head. "Blood on the threshold."</p>
            <p class="dialogue">"Focus on what you can save, child."</p>
        `,
        flags: { knows_floor_status: true },
        choices: [
            { text: "She's right. Focus on survival.", target: "2_check_follow" },
            { text: "Check anyway.", target: "2_search_neighbors" }
        ]
    },

    "2_roof_phone": {
        title: "THE SIGNAL",
        thread: "yuna",
        content: `
            <p class="narrative">One bar. Flickering. You dial Minho.</p>
            <p class="narrative">It rings. Once. Twice. Then—</p>
            <p class="dialogue">"Yuna?" His voice. Alive.</p>
            <p class="dialogue">"I'm coming. Where are you exactly?"</p>
            <p class="dialogue">"Hamilton Hotel. Room 317. The lobby is—" Static. "—careful. They're everywhere."</p>
            <p class="narrative">The call drops. But you have a location.</p>
        `,
        flags: { minho_contact: true, knows_location: true },
        choices: [
            { text: "To the garage. The Hamilton awaits.", target: "2_supplies_garage" }
        ]
    },

    "2_roof_route": {
        title: "THE PATH",
        thread: "yuna",
        content: `
            <p class="narrative">From up here, you can trace routes through the chaos. The main roads are blocked—too many cars, too many bodies. But the back streets...</p>
            <p class="narrative">There. Through Hannam, cutting behind the old market. It loops around the worst of it. Maybe twenty minutes if you drive fast.</p>
            <p class="narrative">If you drive at all. If the car starts. If the garage is clear.</p>
            <p class="narrative">One thing at a time.</p>
        `,
        flags: { planned_route: true, tactical: true },
        choices: [
            { text: "To the garage. You have a route.", target: "2_supplies_garage" }
        ]
    },

    "2_itaewon_drive": {
        title: "THE APPROACH",
        thread: "yuna",
        content: `
            <p class="narrative">You push the Hyundai as close as you dare. Three blocks from the Hamilton.</p>
            <p class="narrative">A group of infected mill around a delivery truck. They haven't noticed you.</p>
            <p class="narrative">You kill the engine. Three blocks. An eternity.</p>
            <p class="narrative">Your phone buzzes. MINHO: where are you</p>
        `,
        flags: { near_hamilton: true },
        choices: [
            { text: "Run for it. Now.", target: "conv_hamilton_approach" },
            { text: "Wait for an opening.", target: "2_itaewon_wait" }
        ]
    },

    "2_itaewon_walk": {
        title: "THE LONG WAY",
        thread: "yuna",
        content: `
            <p class="narrative">Six blocks on foot. You know the back ways—the shortcuts tourists never see.</p>
            <p class="narrative">You move quiet and quick. Three blocks in, you see the Hamilton. Lights on the third floor.</p>
            <p class="narrative">He's in there. Waiting.</p>
        `,
        flags: { stealthy_approach: true },
        choices: [
            { text: "Keep moving. Almost there.", target: "conv_hamilton_approach" }
        ]
    },

    "2_itaewon_call": {
        title: "THE VOICE",
        thread: "yuna",
        content: `
            <p class="dialogue">"Yuna?" His voice. Scared.</p>
            <p class="dialogue">"I'm close. Where exactly are you?"</p>
            <p class="dialogue">"Third floor. Room 317. The lobby—there's something in the lobby."</p>
            <p class="narrative">Something crashes on his end.</p>
            <p class="dialogue">"They're at the door—"</p>
            <p class="narrative">The line goes dead.</p>
        `,
        flags: { minho_danger: true },
        choices: [
            { text: "Run. Now.", target: "conv_hamilton_approach" }
        ]
    },

    "2_itaewon_wait": {
        title: "PATIENCE",
        thread: "yuna",
        content: `
            <p class="narrative">You wait. Watch them shuffle and mill.</p>
            <p class="narrative">A car alarm goes off to the north. They turn. They shamble toward it.</p>
            <p class="narrative">The street clears. Now or never.</p>
        `,
        flags: { waited: true },
        choices: [
            { text: "Move. Fast and quiet.", target: "conv_hamilton_approach" }
        ]
    },

    "2_promise_fire_escape": {
        title: "THE DESCENT",
        thread: "yuna",
        content: `
            <p class="narrative">The fire escape groans under your weight. Old iron, rusted but solid.</p>
            <p class="narrative">Five floors down. One step at a time. The alley below is empty—for now.</p>
            <p class="narrative">You reach the bottom. The garage entrance is around the corner.</p>
        `,
        flags: { used_fire_escape: true },
        choices: [
            { text: "To the garage.", target: "2_supplies_garage" }
        ]
    },

    "2_car_escape": {
        title: "THE ESCAPE",
        thread: "yuna",
        content: `
            <p class="narrative">The Hyundai roars to life. You floor it.</p>
            <p class="narrative">Behind you, the garage fills with shambling figures. Too slow. Too late.</p>
            <p class="narrative">You're out. The streets are chaos, but you're moving. Alive.</p>
            <p class="narrative">Itaewon is north. Minho is waiting.</p>
        `,
        flags: { escaped_building: true },
        choices: [
            { text: "Drive to Itaewon.", target: "conv_itaewon_arrive" }
        ]
    },

    "2_car_yeouido": {
        title: "THE DECISION",
        thread: "yuna",
        content: `
            <p class="narrative">Yeouido or Itaewon. The safe zone or Minho.</p>
            <p class="narrative">The choice shouldn't be this hard. The safe zone means survival. Minho means... Minho.</p>
            <p class="narrative">You grip the steering wheel. Take a breath.</p>
        `,
        flags: { at_crossroads: true },
        choices: [
            { text: "Itaewon. Find Minho first.", target: "conv_itaewon_arrive" },
            { text: "Yeouido. Survival first.", target: "conv_yeouido_approach" }
        ]
    },

    "2_garage_shoot": {
        title: "THE SHOT",
        thread: "yuna",
        content: `
            <p class="narrative">You raise the gun. Center mass—Mrs. Park's lesson.</p>
            <p class="narrative">The infected turns. Sees you. Starts to move.</p>
            <p class="narrative">You squeeze the trigger.</p>
            <p class="narrative">The sound is enormous. The kick surprises you. But it falls—stays down.</p>
            <p class="narrative">Your hands are shaking. But the path to the car is clear.</p>
        `,
        flags: { first_kill: true, gun_used: true },
        choices: [
            { text: "To the car. Go.", target: "2_car_escape" }
        ]
    },

    "2_garage_other": {
        title: "THE SURVIVOR",
        thread: "yuna",
        content: `
            <p class="narrative">The figure steps into the light. Human. Alive. A man in his thirties, clutching a tire iron.</p>
            <p class="dialogue">"You have a car?" His voice is desperate. "Please. My daughter—she's in the stairwell. We need to get out."</p>
            <p class="narrative">Behind him, a little girl peers around the corner. Maybe six years old.</p>
        `,
        flags: { found_survivors: true },
        choices: [
            { text: "Get in. Both of you.", target: "2_garage_rescue" },
            { text: "I can't. I'm sorry.", target: "2_garage_leave" }
        ]
    },

    "2_garage_rescue": {
        title: "THE RESCUE",
        thread: "yuna",
        content: `
            <p class="narrative">They pile into the back seat. The girl is silent—shock, maybe. The father keeps saying "thank you" over and over.</p>
            <p class="narrative">You start the car. The engine catches.</p>
            <p class="dialogue">"Where are you going?" he asks.</p>
            <p class="dialogue">"Itaewon first. Then Yeouido. The safe zone."</p>
            <p class="narrative">He nods. He doesn't argue. Survival doesn't leave room for arguments.</p>
        `,
        flags: { rescued_family: true, has_passengers: true },
        choices: [
            { text: "Drive.", target: "2_car_escape" }
        ]
    },

    "2_garage_leave": {
        title: "THE CHOICE",
        thread: "yuna",
        content: `
            <p class="narrative">His face falls. The girl starts to cry.</p>
            <p class="dialogue">"Please—"</p>
            <p class="narrative">You don't answer. You get in the car. Start the engine. Drive.</p>
            <p class="narrative">In the rearview mirror, they shrink. Disappear. You tell yourself you had no choice.</p>
            <p class="narrative">You tell yourself a lot of things.</p>
        `,
        flags: { abandoned_survivors: true, guilt: true },
        choices: [
            { text: "Drive. Don't look back.", target: "2_car_escape" }
        ]
    },

    "2_hall_check": {
        title: "THE HALLWAY",
        thread: "yuna",
        content: `
            <p class="narrative">The hallway is dark. Emergency lighting only—dim red pools every few meters.</p>
            <p class="narrative">Something moves at the far end. A figure, hunched. It hasn't seen you yet.</p>
            <p class="narrative">The stairs are to your left. The elevator—useless now—to your right.</p>
        `,
        flags: { in_hallway: true },
        choices: [
            { text: "Stairs. Quiet and quick.", target: "2_hall_stairs" },
            { text: "Wait. See if it moves.", target: "2_hall_wait" }
        ]
    },

    "2_hall_run": {
        title: "THE SPRINT",
        thread: "yuna",
        content: `
            <p class="narrative">You run. Footsteps echo—yours and something else's.</p>
            <p class="narrative">The stairwell door. You hit it hard, stumble through, slam it behind you.</p>
            <p class="narrative">Something thuds against the other side. Once. Twice. Then silence.</p>
            <p class="narrative">You're through. Down the stairs. Keep moving.</p>
        `,
        flags: { chased: true, escaped: true },
        choices: [
            { text: "To the garage.", target: "2_supplies_garage" }
        ]
    },

    "2_hall_supplies": {
        title: "THE CACHE",
        thread: "yuna",
        content: `
            <p class="narrative">The supply closet. Cleaning chemicals, mops, buckets—and there, in the corner, a first aid kit. Batteries. A flashlight.</p>
            <p class="narrative">You stuff what you can into your pack. Every bit helps.</p>
        `,
        flags: { extra_supplies: true },
        choices: [
            { text: "Keep moving. To the garage.", target: "2_supplies_garage" }
        ]
    },

    "2_hall_stairs": {
        title: "THE STAIRS",
        thread: "yuna",
        content: `
            <p class="narrative">The stairwell is clear. Your footsteps echo as you descend—one floor, two floors, three.</p>
            <p class="narrative">B1. Parking level. The door is heavy, cold. You push through.</p>
            <p class="narrative">The garage. Dark. Silent. The Hyundai is there, exactly where Mrs. Park said it would be.</p>
        `,
        flags: { reached_garage: true },
        choices: [
            { text: "To the car.", target: "2_supplies_garage" }
        ]
    },

    "2_hall_wait": {
        title: "THE STILLNESS",
        thread: "yuna",
        content: `
            <p class="narrative">You freeze. Control your breathing. Become invisible.</p>
            <p class="narrative">The figure at the end of the hall shuffles, turns, moves into an apartment. The door closes behind it.</p>
            <p class="narrative">The path is clear. For now.</p>
        `,
        flags: { patient: true, stealthy: true },
        choices: [
            { text: "Move. Quietly.", target: "2_hall_stairs" }
        ]
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // CONVERGENCE NODES - Critical path points
    // ═══════════════════════════════════════════════════════════════════════════

    "conv_hamilton_approach": {
        title: "THE HAMILTON",
        thread: "minho",
        content: `
            <p class="narrative">The Hamilton Hotel rises before you. Glass doors shattered. Bodies in the lobby—some still, some not.</p>
            <p class="narrative">Third floor. Room 317. Minho is up there. Waiting. Alive—you have to believe he's still alive.</p>
            <p class="narrative">The stairwell door hangs open. Dark inside. But it's the only way up.</p>
        `,
        flags: { at_hamilton: true, reunion_imminent: true },
        choices: [
            { text: "Go up. Find him.", target: 7 }
        ]
    },

    "conv_itaewon_arrive": {
        title: "ITAEWON",
        thread: "minho",
        content: `
            <p class="narrative">Itaewon. The foreigner's district. Bars, clubs, restaurants—all dark now, windows broken, streets littered with the remnants of a night that never ended.</p>
            <p class="narrative">The Hamilton is ahead. You can see it. So close.</p>
        `,
        flags: { reached_itaewon: true },
        choices: [
            { text: "To the Hamilton.", target: "conv_hamilton_approach" }
        ]
    },

    "conv_yeouido_approach": {
        title: "THE SAFE ZONE",
        thread: "yuna",
        content: `
            <p class="narrative">Yeouido. The financial district. And now, apparently, humanity's last stand in Seoul.</p>
            <p class="narrative">Military barricades ring the island. Soldiers with rifles. Checkpoints. Order, in a world that's forgotten what order means.</p>
            <p class="narrative">But Minho isn't here. Minho is in Itaewon. Waiting.</p>
            <p class="narrative">Unless he's not waiting anymore.</p>
        `,
        flags: { at_yeouido: true },
        choices: [
            { text: "Enter the safe zone.", target: 9 },
            { text: "Turn around. Go back for Minho.", target: "conv_itaewon_arrive" }
        ]
    },

    "conv_rooftop_survey": {
        title: "THE ROOFTOP",
        thread: "yuna",
        content: `
            <p class="narrative">The roof access door opens to chaos below. Seoul burns. The Han River reflects fire.</p>
            <p class="narrative">From here you can see everything—the blocked roads, the safe corridors, the Hamilton Hotel in Itaewon where Minho waits.</p>
            <p class="narrative">You have a map now. A mental one. The path forward is clearer.</p>
        `,
        flags: { scouted: true, has_intel: true },
        choices: [
            { text: "To the garage. You know the way now.", target: "2_supplies_garage" }
        ]
    },

    "conv_building_trapped": {
        title: "THE TRAPPED",
        thread: "yuna",
        content: `
            <p class="narrative">Knocking on doors. Most are silent. Some answer with sounds you don't want to identify.</p>
            <p class="narrative">But one opens. A woman, thirties, clutching a kitchen knife. Behind her, two children.</p>
            <p class="dialogue">"Are you... are you real? Are you alive?"</p>
            <p class="narrative">She's crying. The children are silent. Shock.</p>
        `,
        flags: { found_family: true },
        choices: [
            { text: "Come with me. I have a car.", target: "2_garage_rescue" },
            { text: "Stay here. Barricade the door. Help is coming.", target: "conv_leave_them" }
        ]
    },

    "conv_leave_them": {
        title: "THE LIE",
        thread: "yuna",
        content: `
            <p class="narrative">You don't know if help is coming. You doubt it is.</p>
            <p class="narrative">But she believes you. Or she wants to. Her face relaxes. The knife lowers.</p>
            <p class="dialogue">"Thank you. Thank you."</p>
            <p class="narrative">You nod. You leave. You tell yourself it was the right choice.</p>
            <p class="narrative">The car only has so much room. The road only has so much time.</p>
        `,
        flags: { lied_to_family: true, guilt: true },
        choices: [
            { text: "To the garage.", target: "2_supplies_garage" }
        ]
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // ACT 2 REMAINING - Fill gaps
    // ═══════════════════════════════════════════════════════════════════════════

    "2_family_promise": {
        title: "THE PROMISE",
        thread: "yuna",
        content: `
            <p class="narrative">The family in the car. Father. Daughter. Silent with fear.</p>
            <p class="dialogue">"Where will you take us?" he asks.</p>
            <p class="dialogue">"Yeouido. The safe zone. After I find someone."</p>
            <p class="dialogue">"Someone?"</p>
            <p class="dialogue">"Someone important."</p>
            <p class="narrative">He doesn't ask more. He understands.</p>
        `,
        flags: { made_promise: true },
        choices: [
            { text: "Drive.", target: "conv_itaewon_arrive" }
        ]
    },

    "2_family_stories": {
        title: "THE STORY",
        thread: "yuna",
        content: `
            <p class="narrative">The girl speaks for the first time.</p>
            <p class="dialogue">"Is mommy coming?"</p>
            <p class="narrative">The father's face crumbles. Then rebuilds.</p>
            <p class="dialogue">"Mommy had to go somewhere else, remember? She's going to meet us."</p>
            <p class="narrative">A lie. You recognize it. You've been telling them to yourself all morning.</p>
        `,
        flags: { shared_grief: true },
        choices: [
            { text: "Focus on the road.", target: "conv_itaewon_arrive" }
        ]
    },

    "2_freeze_investigate": {
        title: "THE SOUND",
        thread: "yuna",
        content: `
            <p class="narrative">A noise. Behind the dumpsters. Something moving.</p>
            <p class="narrative">You raise the gun. Wait. Listen.</p>
            <p class="narrative">A cat. Just a cat. It hisses and runs.</p>
            <p class="narrative">Your heart is pounding. This is what survival feels like—every shadow a threat.</p>
        `,
        flags: { investigated: true, on_edge: true },
        choices: [
            { text: "Keep moving.", target: "2_supplies_garage" }
        ]
    },

    "2_freeze_wait": {
        title: "THE PAUSE",
        thread: "yuna",
        content: `
            <p class="narrative">You wait. Count to ten. Twenty. Thirty.</p>
            <p class="narrative">Nothing moves. The sound doesn't repeat.</p>
            <p class="narrative">Maybe you imagined it. Maybe it's already gone. Either way, you can't wait forever.</p>
        `,
        flags: { waited: true, cautious: true },
        choices: [
            { text: "Move on.", target: "2_supplies_garage" }
        ]
    },

    "2_husband_linger": {
        title: "THE MEMORY",
        thread: "yuna",
        content: `
            <p class="narrative">You linger in Mrs. Park's apartment. Looking at the photos. The memories. Fifty-four years of life, reduced to silence.</p>
            <p class="narrative">Taehyun in his military uniform. Their wedding. Their children. Grandchildren you'll never meet.</p>
            <p class="narrative">She wanted you to remember. So you do.</p>
        `,
        flags: { honored_memory: true },
        choices: [
            { text: "Go. Carry their story forward.", target: "2_supplies_garage" }
        ]
    },

    "2_husband_worth": {
        title: "THE WORTH",
        thread: "yuna",
        content: `
            <p class="narrative">His supplies. His paranoia. His love for her—prepared for a disaster he never lived to see.</p>
            <p class="narrative">You hope, wherever he is, he knows it mattered. That his preparation saved someone, even if it wasn't her.</p>
        `,
        flags: { grateful: true },
        choices: [
            { text: "Take what you need. Honor the gift.", target: "2_supplies_garage" }
        ]
    },

    "2_jungwoo_destination": {
        title: "THE DESTINATION",
        thread: "yuna",
        content: `
            <p class="narrative">Jungwoo—the man from the garage—points ahead.</p>
            <p class="dialogue">"My brother has a boat. Yeouido. If we can get there..."</p>
            <p class="narrative">A boat. Out of the city. It's not a bad plan.</p>
        `,
        flags: { has_plan: true, jungwoo_ally: true },
        choices: [
            { text: "Yeouido then. After Itaewon.", target: "conv_itaewon_arrive" },
            { text: "You go. I have somewhere else to be.", target: "2_jungwoo_part" }
        ]
    },

    "2_jungwoo_fiancee": {
        title: "THE QUESTION",
        thread: "yuna",
        content: `
            <p class="dialogue">"This person you're looking for. Boyfriend?"</p>
            <p class="narrative">You hesitate.</p>
            <p class="dialogue">"Ex. It's... complicated."</p>
            <p class="dialogue">"Complicated enough to risk your life?"</p>
            <p class="narrative">You don't answer. The answer is obvious.</p>
        `,
        flags: { revealed_motivation: true },
        choices: [
            { text: "Focus on driving.", target: "conv_itaewon_arrive" }
        ]
    },

    "2_jungwoo_silent": {
        title: "THE SILENCE",
        thread: "yuna",
        content: `
            <p class="narrative">Neither of you speak. The radio is static. The streets are chaos. Words feel inadequate.</p>
            <p class="narrative">Somewhere, a building collapses. The sound is distant, final.</p>
            <p class="narrative">You keep driving.</p>
        `,
        flags: { silent_journey: true },
        choices: [
            { text: "Drive on.", target: "conv_itaewon_arrive" }
        ]
    },

    "2_jungwoo_part": {
        title: "THE PARTING",
        thread: "yuna",
        content: `
            <p class="narrative">You stop at an intersection. Yeouido is south. Itaewon is north.</p>
            <p class="dialogue">"This is where we split."</p>
            <p class="narrative">Jungwoo looks at you. Understanding.</p>
            <p class="dialogue">"Good luck finding him."</p>
            <p class="dialogue">"Good luck with the boat."</p>
            <p class="narrative">He gets out. Takes his daughter. Disappears south.</p>
        `,
        flags: { parted_ways: true, alone_again: true },
        choices: [
            { text: "North. To Minho.", target: "conv_itaewon_arrive" }
        ]
    },

    "2_laugh_invite": {
        title: "THE INVITE",
        thread: "yuna",
        content: `
            <p class="narrative">Mrs. Park laughs—a dry, crackling sound.</p>
            <p class="dialogue">"You remind me of myself. Stubborn. Foolish. Brave."</p>
            <p class="narrative">She pats your cheek.</p>
            <p class="dialogue">"Go find your boy. Tell him an old woman says he's lucky."</p>
        `,
        flags: { mrs_park_blessing: true },
        choices: [
            { text: "Go.", target: "2_supplies_garage" }
        ]
    },

    "2_laugh_plan": {
        title: "THE PLAN",
        thread: "yuna",
        content: `
            <p class="dialogue">"What's your plan?" Mrs. Park asks.</p>
            <p class="dialogue">"Get to Itaewon. Find Minho. Get to the safe zone."</p>
            <p class="dialogue">"Simple. I like it." She pauses. "Plans never survive contact with the dead, you know."</p>
            <p class="dialogue">"I know."</p>
        `,
        flags: { shared_plan: true },
        choices: [
            { text: "Go.", target: "2_supplies_garage" }
        ]
    },

    "2_laugh_wisdom": {
        title: "THE WISDOM",
        thread: "yuna",
        content: `
            <p class="dialogue">"One last thing," Mrs. Park says. "Trust your gut. Not your heart. Hearts get you killed."</p>
            <p class="dialogue">"And if my gut says to save my heart?"</p>
            <p class="narrative">She smiles.</p>
            <p class="dialogue">"Then maybe they're both right."</p>
        `,
        flags: { received_wisdom: true },
        choices: [
            { text: "Go.", target: "2_supplies_garage" }
        ]
    },

    "2_move_invite": {
        title: "THE URGING",
        thread: "yuna",
        content: `
            <p class="dialogue">"Come with me. Please."</p>
            <p class="narrative">Mrs. Park shakes her head slowly.</p>
            <p class="dialogue">"My place is here. With him."</p>
            <p class="narrative">She gestures to the photo of Taehyun on the wall.</p>
            <p class="dialogue">"We said we'd never be apart. I'm not starting now."</p>
        `,
        flags: { invitation_refused: true },
        choices: [
            { text: "Respect her choice.", target: "2_supplies_garage" }
        ]
    },

    "2_move_what_about": {
        title: "THE QUESTION",
        thread: "yuna",
        content: `
            <p class="dialogue">"What about you? What will you do?"</p>
            <p class="narrative">Mrs. Park looks around her apartment. Her home. Her life.</p>
            <p class="dialogue">"Make tea. Wait. See what comes."</p>
            <p class="narrative">She's not afraid. You envy her that.</p>
        `,
        flags: { asked_about_park: true },
        choices: [
            { text: "Go.", target: "2_supplies_garage" }
        ]
    },

    "2_prayer_check_building": {
        title: "THE BUILDING",
        thread: "yuna",
        content: `
            <p class="narrative">The building is a tomb. Every floor a new horror, or a new silence. You don't know which is worse.</p>
            <p class="narrative">But you're through it now. The garage awaits.</p>
        `,
        flags: { survived_building: true },
        choices: [
            { text: "To the car.", target: "2_supplies_garage" }
        ]
    },

    "2_prayer_roof": {
        title: "THE PRAYER",
        thread: "yuna",
        content: `
            <p class="narrative">On the roof, you pause. Look at the city. Say something—maybe a prayer, maybe just words.</p>
            <p class="narrative">For the dead. For the living. For yourself.</p>
            <p class="narrative">Then you move on. There's no time for prayers in the apocalypse.</p>
        `,
        flags: { moment_of_peace: true },
        choices: [
            { text: "Go.", target: "2_supplies_garage" }
        ]
    },

    "2_refuse_run": {
        title: "THE RUN",
        thread: "yuna",
        content: `
            <p class="narrative">You run. Don't think. Don't stop. Just run.</p>
            <p class="narrative">The stairwell blurs. Footsteps echo—yours, or something else's. Doesn't matter. Keep moving.</p>
            <p class="narrative">You burst into the garage. The car is there. Salvation on four wheels.</p>
        `,
        flags: { ran_for_life: true },
        choices: [
            { text: "Get in. Drive.", target: "2_car_escape" }
        ]
    },

    "2_shake_follow": {
        title: "THE FOLLOWING",
        thread: "yuna",
        content: `
            <p class="narrative">You follow Mrs. Park deeper into her apartment. Her movements are sure, practiced. A woman who knows exactly where everything is.</p>
            <p class="narrative">The lockbox. The supplies. The gun.</p>
            <p class="narrative">She's been ready for this longer than she knew.</p>
        `,
        flags: { following_park: true },
        choices: [
            { text: "Take the supplies.", target: "2_check_follow" }
        ]
    },

    "2_shake_name": {
        title: "THE NAME",
        thread: "yuna",
        content: `
            <p class="dialogue">"I never properly introduced myself," Mrs. Park says. "Sunhee. My name is Sunhee."</p>
            <p class="dialogue">"I know. I've seen your mail."</p>
            <p class="narrative">She laughs. Even now, she can laugh.</p>
            <p class="dialogue">"Nosy neighbor. I always knew I liked you."</p>
        `,
        flags: { knows_park_name: true },
        choices: [
            { text: "Take the supplies. Honor her name.", target: "2_check_follow" }
        ]
    },

    "2_shake_resolve": {
        title: "THE RESOLVE",
        thread: "yuna",
        content: `
            <p class="narrative">You steel yourself. There's no room for weakness now.</p>
            <p class="narrative">Mrs. Park sees it in your face. Nods approvingly.</p>
            <p class="dialogue">"There's the survivor. I knew she was in there."</p>
        `,
        flags: { resolved: true },
        choices: [
            { text: "Get the supplies. Get moving.", target: "2_check_follow" }
        ]
    },

    "2_sneak_distract": {
        title: "THE DISTRACTION",
        thread: "yuna",
        content: `
            <p class="narrative">You throw a bottle. It shatters against the far wall. The infected turn toward the sound.</p>
            <p class="narrative">You move. Fast. Quiet. Through the gap they left.</p>
            <p class="narrative">It works. You're through.</p>
        `,
        flags: { used_distraction: true, clever: true },
        choices: [
            { text: "Keep moving.", target: "2_supplies_garage" }
        ]
    },

    "2_sneak_run": {
        title: "THE DASH",
        thread: "yuna",
        content: `
            <p class="narrative">No time for stealth. You run.</p>
            <p class="narrative">They see you. They follow. But you're faster. Adrenaline makes you faster than you've ever been.</p>
            <p class="narrative">The car. Get to the car.</p>
        `,
        flags: { spotted: true, escaped: true },
        choices: [
            { text: "To the car!", target: "2_car_escape" }
        ]
    },

    "2_stare_admit": {
        title: "THE ADMISSION",
        thread: "yuna",
        content: `
            <p class="narrative">You admit it. To yourself. To the empty air.</p>
            <p class="dialogue">"I'm scared."</p>
            <p class="narrative">Saying it doesn't make it less true. But it makes it real. Something you can carry instead of something carrying you.</p>
        `,
        flags: { self_aware: true },
        choices: [
            { text: "Move on. Fear and all.", target: "2_supplies_garage" }
        ]
    },

    "2_stare_protect": {
        title: "THE PROTECTION",
        thread: "yuna",
        content: `
            <p class="narrative">You check the gun. Safety off. Chamber loaded. Ready.</p>
            <p class="narrative">You've never shot anyone before. You hope you won't have to. But if you do...</p>
            <p class="narrative">You'll do what you have to do.</p>
        `,
        flags: { prepared: true },
        choices: [
            { text: "Move on.", target: "2_supplies_garage" }
        ]
    },

    "2_stare_survive": {
        title: "THE MANTRA",
        thread: "yuna",
        content: `
            <p class="narrative">Survive. That's all that matters. Survive.</p>
            <p class="narrative">Mrs. Park said it. Minho implied it. Your own body screams it with every heartbeat.</p>
            <p class="narrative">Survive. Then worry about everything else.</p>
        `,
        flags: { survival_focus: true },
        choices: [
            { text: "Survive.", target: "2_supplies_garage" }
        ]
    },

    "2_supplies_offer": {
        title: "THE OFFER",
        thread: "yuna",
        content: `
            <p class="narrative">You offer to share your supplies. The man hesitates.</p>
            <p class="dialogue">"You don't have to—"</p>
            <p class="dialogue">"Take it. You have a daughter to feed."</p>
            <p class="narrative">He takes it. The gratitude in his eyes is almost painful.</p>
        `,
        flags: { shared_supplies: true, generous: true },
        choices: [
            { text: "Drive on.", target: "conv_itaewon_arrive" }
        ]
    },

    "2_survivor_leave": {
        title: "THE LEAVING",
        thread: "yuna",
        content: `
            <p class="narrative">You leave them behind. The father, the daughter. It's not your responsibility. You can't save everyone.</p>
            <p class="narrative">You tell yourself this. Over and over. Until you almost believe it.</p>
        `,
        flags: { left_survivors: true, guilt: true },
        choices: [
            { text: "Drive.", target: "conv_itaewon_arrive" }
        ]
    },

    "2_survivor_moving": {
        title: "THE MOVING",
        thread: "yuna",
        content: `
            <p class="narrative">The car moves. The city passes. Every block is a story you'll never know—lives ended, escapes made, horrors witnessed.</p>
            <p class="narrative">You focus on the road. On Minho. On the only story that matters right now.</p>
        `,
        flags: { in_motion: true },
        choices: [
            { text: "Keep driving.", target: "conv_itaewon_arrive" }
        ]
    },

    "2_wait_promise": {
        title: "THE WAIT",
        thread: "yuna",
        content: `
            <p class="narrative">You wait. Count the seconds. The infected pass without seeing you.</p>
            <p class="narrative">Patience. Mrs. Park would be proud.</p>
        `,
        flags: { patient: true },
        choices: [
            { text: "Move when it's clear.", target: "2_supplies_garage" }
        ]
    },

    "2_wait_step_back": {
        title: "THE RETREAT",
        thread: "yuna",
        content: `
            <p class="narrative">You step back. Into the shadows. They don't see you.</p>
            <p class="narrative">The path clears. You move on.</p>
        `,
        flags: { tactical_retreat: true },
        choices: [
            { text: "Continue.", target: "2_supplies_garage" }
        ]
    },

    "2_watch_end": {
        title: "THE END",
        thread: "yuna",
        content: `
            <p class="narrative">You watch from the window. The city dying. The world ending.</p>
            <p class="narrative">It's strangely beautiful. Terrible and beautiful.</p>
            <p class="narrative">You don't have time for beauty. You have to move.</p>
        `,
        flags: { witnessed_end: true },
        choices: [
            { text: "Move.", target: "2_supplies_garage" }
        ]
    },

    "2_watch_flee": {
        title: "THE FLEEING",
        thread: "yuna",
        content: `
            <p class="narrative">Through the window, you see others fleeing. Running. Some make it. Some don't.</p>
            <p class="narrative">You should be running too.</p>
        `,
        flags: { saw_others: true },
        choices: [
            { text: "Run.", target: "2_supplies_garage" }
        ]
    },

    "2_watch_offer": {
        title: "THE OBSERVATION",
        thread: "yuna",
        content: `
            <p class="narrative">You watch the street. Count the infected. Time their movements.</p>
            <p class="narrative">There's a pattern. There's always a pattern. Survival means seeing it.</p>
        `,
        flags: { observed: true, tactical: true },
        choices: [
            { text: "Go when it's clear.", target: "2_supplies_garage" }
        ]
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // META SECTIONS - Fourth wall moments
    // ═══════════════════════════════════════════════════════════════════════════

    "meta_acknowledge": {
        title: "THE AWARENESS",
        thread: "cognitive",
        content: `
            <p class="dialogue">"Do you ever feel like we're not alone? Like someone's watching?"</p>
            <p class="narrative">Jin stops. Looks at you. Something flickers in her eyes—recognition, maybe. Or fear.</p>
            <p class="dialogue">"You feel it too?"</p>
            <p class="narrative">The world feels thin. Like paper. Like something you could tear through if you pushed hard enough.</p>
        `,
        flags: { meta_aware: true, fourth_wall_crack: true },
        choices: [
            { text: "What is this place? Really?", target: "meta_deeper" },
            { text: "Shake it off. Focus on survival.", target: "meta_dismiss" }
        ]
    },

    "meta_dismiss": {
        title: "THE DISMISSAL",
        thread: "cognitive",
        content: `
            <p class="narrative">You shake it off. Stress. Trauma. The mind plays tricks when the world is ending.</p>
            <p class="narrative">Focus on what's real. The road. The infected. The people who need you.</p>
            <p class="narrative">Everything else is just noise.</p>
        `,
        flags: { grounded: true },
        choices: [
            { text: "Keep moving.", target: 7 }
        ]
    },

    "meta_remember": {
        title: "THE MEMORY",
        thread: "cognitive",
        content: `
            <p class="narrative">You say nothing. But you remember.</p>
            <p class="narrative">The feeling of being watched. The sense that your choices matter in ways you can't quite articulate. The strange certainty that you've done this before—or will do it again.</p>
            <p class="narrative">You file it away. For later. When you have time to think.</p>
        `,
        flags: { quiet_observer: true, remembering: true },
        choices: [
            { text: "Continue.", target: 7 }
        ]
    },

    "meta_deeper": {
        title: "THE QUESTION",
        thread: "cognitive",
        content: `
            <p class="narrative">Jin looks at you for a long moment.</p>
            <p class="dialogue">"I think... I think we're being told. Like a story. Like we're in a story."</p>
            <p class="narrative">She laughs. It sounds wrong.</p>
            <p class="dialogue">"But that's crazy, right? That's completely crazy."</p>
            <p class="narrative">You don't answer. Because you're not sure it is.</p>
        `,
        flags: { deep_awareness: true },
        choices: [
            { text: "Let's just keep moving.", target: 7 }
        ]
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // ACT 3 - THE REUNION
    // ═══════════════════════════════════════════════════════════════════════════

    "3_alive_flight": {
        title: "THE FLIGHT",
        thread: "minho",
        content: `
            <p class="narrative">You run together. Through the hotel. Down the stairs. Into the chaos of Itaewon.</p>
            <p class="narrative">His hand in yours. Warm. Real. Alive.</p>
            <p class="narrative">The car is blocks away. The streets are hell. But you're together now.</p>
        `,
        flags: { reunited: true, fleeing: true },
        choices: [
            { text: "Keep running.", target: 9 }
        ]
    },

    "3_alive_plan": {
        title: "THE PLAN",
        thread: "minho",
        content: `
            <p class="dialogue">"Yeouido," Minho says. "The safe zone. Can you get us there?"</p>
            <p class="dialogue">"I have a car. Two blocks east."</p>
            <p class="dialogue">"Then we go. Now. Before more come."</p>
            <p class="narrative">He's already moving. You follow. Like you always did. Like you always will.</p>
        `,
        flags: { has_plan: true },
        choices: [
            { text: "To the car.", target: 9 }
        ]
    },

    "3_ask_bit": {
        title: "THE QUESTION",
        thread: "minho",
        content: `
            <p class="dialogue">"Are you bit? Scratched? Anything?"</p>
            <p class="narrative">You check yourself. Arms. Legs. Neck. Nothing.</p>
            <p class="dialogue">"I'm clean."</p>
            <p class="dialogue">"Me too." He exhales. "For now."</p>
        `,
        flags: { checked_bites: true },
        choices: [
            { text: "Let's move.", target: 9 }
        ]
    },

    "3_ask_why": {
        title: "WHY",
        thread: "minho",
        content: `
            <p class="dialogue">"Why did you call? After six months of nothing—why now?"</p>
            <p class="narrative">Minho stops. Looks at you.</p>
            <p class="dialogue">"Because when the world ended, you were the only person I wanted to save."</p>
            <p class="narrative">You don't know what to say. So you don't say anything.</p>
        `,
        flags: { asked_why: true, emotional_moment: true },
        choices: [
            { text: "Keep moving.", target: 9 }
        ]
    },

    "3_comfort_absolution": {
        title: "ABSOLUTION",
        thread: "minho",
        content: `
            <p class="dialogue">"I should have stayed. I should have asked you to come with me."</p>
            <p class="dialogue">"You did ask."</p>
            <p class="dialogue">"I should have asked harder."</p>
            <p class="narrative">You touch his face. Feel the stubble. The warmth.</p>
            <p class="dialogue">"We're here now. That's what matters."</p>
        `,
        flags: { forgiveness: true },
        choices: [
            { text: "Move on.", target: 9 }
        ]
    },

    "3_comfort_hold": {
        title: "THE HOLD",
        thread: "minho",
        content: `
            <p class="narrative">He holds you. In the middle of hell, he holds you like the world isn't ending.</p>
            <p class="narrative">It only lasts a moment. But it's enough.</p>
        `,
        flags: { embraced: true },
        choices: [
            { text: "We need to go.", target: 9 }
        ]
    },

    "3_hold_gentle": {
        title: "GENTLE",
        thread: "minho",
        content: `
            <p class="narrative">His touch is gentle. Careful. Like he's afraid you'll break.</p>
            <p class="narrative">You won't break. Not anymore. Not after today.</p>
        `,
        flags: { tender_moment: true },
        choices: [
            { text: "Let's go.", target: 9 }
        ]
    },

    "3_hold_move": {
        title: "MOVE",
        thread: "minho",
        content: `
            <p class="dialogue">"We can do this later. The feelings. The talking. All of it."</p>
            <p class="dialogue">"Later?"</p>
            <p class="dialogue">"When we're safe. I promise."</p>
            <p class="narrative">Later. A promise of a future. It's more than you had this morning.</p>
        `,
        flags: { promised_later: true },
        choices: [
            { text: "Move.", target: 9 }
        ]
    },

    "3_hold_regret": {
        title: "REGRET",
        thread: "minho",
        content: `
            <p class="dialogue">"I'm sorry. For Tokyo. For leaving. For all of it."</p>
            <p class="narrative">You've waited six months to hear those words.</p>
            <p class="dialogue">"I know."</p>
        `,
        flags: { apology_received: true },
        choices: [
            { text: "Let's go.", target: 9 }
        ]
    },

    "3_kiss_car": {
        title: "THE KISS",
        thread: "minho",
        content: `
            <p class="narrative">In the car, before you start the engine, he kisses you.</p>
            <p class="narrative">It's desperate. Hungry. Six months of silence poured into a single moment.</p>
            <p class="narrative">Then it's over. And you drive.</p>
        `,
        flags: { kissed: true, romantic: true },
        choices: [
            { text: "Drive to Yeouido.", target: 9 }
        ]
    },

    "3_kiss_neighbor": {
        title: "NOT NOW",
        thread: "minho",
        content: `
            <p class="narrative">He leans in. You pull back.</p>
            <p class="dialogue">"Not now. Not here."</p>
            <p class="narrative">He nods. Understands. Later.</p>
        `,
        flags: { restrained: true },
        choices: [
            { text: "Focus on survival.", target: 9 }
        ]
    },

    "3_kiss_roof": {
        title: "ROOFTOP",
        thread: "minho",
        content: `
            <p class="narrative">On the rooftop of the Hamilton, looking at Seoul burning, he kisses you.</p>
            <p class="narrative">The world is ending. You don't care.</p>
        `,
        flags: { rooftop_kiss: true, romantic: true },
        choices: [
            { text: "We should go.", target: 9 }
        ]
    },

    "3_open_verified": {
        title: "VERIFIED",
        thread: "minho",
        content: `
            <p class="narrative">You check each other. No bites. No scratches. Clean.</p>
            <p class="dialogue">"We made it."</p>
            <p class="dialogue">"We made it."</p>
        `,
        flags: { both_clean: true },
        choices: [
            { text: "To the safe zone.", target: 9 }
        ]
    },

    "3_plan_car": {
        title: "THE CAR",
        thread: "minho",
        content: `
            <p class="dialogue">"I have a car. Two blocks."</p>
            <p class="dialogue">"Can we make it?"</p>
            <p class="narrative">You look at the street. Infected milling. Fires burning. Chaos.</p>
            <p class="dialogue">"We have to."</p>
        `,
        flags: { car_plan: true },
        choices: [
            { text: "Run for it.", target: 9 }
        ]
    },

    "3_plan_gather": {
        title: "GATHER",
        thread: "minho",
        content: `
            <p class="dialogue">"Do you have supplies?"</p>
            <p class="narrative">You show him your pack. The gun. The food. Mrs. Park's legacy.</p>
            <p class="dialogue">"You came prepared."</p>
            <p class="dialogue">"Someone taught me well."</p>
        `,
        flags: { showed_supplies: true },
        choices: [
            { text: "Let's go.", target: 9 }
        ]
    },

    "3_plan_neighbor": {
        title: "NEIGHBOR",
        thread: "minho",
        content: `
            <p class="dialogue">"There might be others. In the hotel."</p>
            <p class="dialogue">"We can't save everyone."</p>
            <p class="narrative">He's right. You hate that he's right.</p>
        `,
        flags: { pragmatic: true },
        choices: [
            { text: "Focus on us.", target: 9 }
        ]
    },

    "3_silent_abandon": {
        title: "ABANDON",
        thread: "minho",
        content: `
            <p class="narrative">You hear them. Survivors, somewhere in the hotel. Screaming for help.</p>
            <p class="narrative">You keep moving. There's nothing you can do. Nothing.</p>
        `,
        flags: { abandoned_others: true, guilt: true },
        choices: [
            { text: "Get to the car.", target: 9 }
        ]
    },

    "3_silent_rescue": {
        title: "RESCUE",
        thread: "minho",
        content: `
            <p class="dialogue">"Wait. I hear someone."</p>
            <p class="narrative">A child. Crying. Behind a locked door.</p>
            <p class="narrative">You can't leave a child.</p>
        `,
        flags: { heard_child: true },
        choices: [
            { text: "Break down the door.", target: "3_rescue_child" },
            { text: "We can't. Keep moving.", target: 9 }
        ]
    },

    "3_silent_warn": {
        title: "WARNING",
        thread: "minho",
        content: `
            <p class="dialogue">"The stairwell. Something's coming up."</p>
            <p class="narrative">You hear it. Shuffling. Groaning. Getting closer.</p>
            <p class="dialogue">"Run."</p>
        `,
        flags: { danger_approaching: true },
        choices: [
            { text: "Run.", target: 9 }
        ]
    },

    "3_rescue_child": {
        title: "THE CHILD",
        thread: "minho",
        content: `
            <p class="narrative">The door gives. Inside: a boy, maybe eight years old. Alone.</p>
            <p class="dialogue">"Come with us. We're getting out."</p>
            <p class="narrative">He takes your hand. Doesn't say a word.</p>
        `,
        flags: { rescued_child: true, has_child: true },
        choices: [
            { text: "To the car. All three of us.", target: 9 }
        ]
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // ACT 4 - THE ESCAPE
    // ═══════════════════════════════════════════════════════════════════════════

    "4_concern_offer": {
        title: "THE OFFER",
        thread: "yuna",
        content: `
            <p class="dialogue">"You look exhausted. Want me to drive?"</p>
            <p class="narrative">Minho's voice. Concerned.</p>
            <p class="dialogue">"I'm fine."</p>
            <p class="dialogue">"You're not. But I understand."</p>
        `,
        flags: { offered_help: true },
        choices: [
            { text: "Keep driving.", target: 9 }
        ]
    },

    "4_concern_time": {
        title: "TIME",
        thread: "yuna",
        content: `
            <p class="dialogue">"How long until the safe zone?"</p>
            <p class="dialogue">"Twenty minutes. Maybe less if the roads are clear."</p>
            <p class="narrative">The roads won't be clear. They both know it.</p>
        `,
        flags: { time_check: true },
        choices: [
            { text: "Drive faster.", target: 9 }
        ]
    },

    "4_down_attack": {
        title: "ATTACK",
        thread: "yuna",
        content: `
            <p class="narrative">They come from nowhere. A swarm. Surrounding the car.</p>
            <p class="narrative">You floor it. The Hyundai lurches. Bodies thud against metal.</p>
            <p class="narrative">You don't look back.</p>
        `,
        flags: { survived_swarm: true },
        choices: [
            { text: "Keep driving.", target: 9 }
        ]
    },

    "4_down_retreat": {
        title: "RETREAT",
        thread: "yuna",
        content: `
            <p class="narrative">The road is blocked. Too many infected. Too many wrecks.</p>
            <p class="dialogue">"Turn around. Find another way."</p>
            <p class="narrative">You reverse. Find a side street. Keep moving.</p>
        `,
        flags: { detoured: true },
        choices: [
            { text: "Find another route.", target: 9 }
        ]
    },

    "4_lobby_alleys": {
        title: "ALLEYS",
        thread: "yuna",
        content: `
            <p class="narrative">The main roads are death. You take the alleys. Narrow. Dark. But empty.</p>
            <p class="narrative">The car barely fits. Mirrors scrape against walls. But you're moving.</p>
        `,
        flags: { took_alleys: true },
        choices: [
            { text: "Keep going.", target: 9 }
        ]
    },

    "4_lobby_main": {
        title: "MAIN ROAD",
        thread: "yuna",
        content: `
            <p class="narrative">The main road. Faster, but more dangerous.</p>
            <p class="narrative">You weave between wrecks. Avoid the shambling figures. Don't stop.</p>
        `,
        flags: { main_road: true },
        choices: [
            { text: "Almost there.", target: 9 }
        ]
    },

    "4_mercy_leave": {
        title: "LEAVE",
        thread: "yuna",
        content: `
            <p class="narrative">Someone waves from a building. Begging for help.</p>
            <p class="narrative">You don't stop. Can't stop. The car is full. The time is short.</p>
        `,
        flags: { passed_survivor: true, guilt: true },
        choices: [
            { text: "Keep driving.", target: 9 }
        ]
    },

    "4_mercy_search": {
        title: "SEARCH",
        thread: "yuna",
        content: `
            <p class="narrative">A pharmacy. Intact. You stop.</p>
            <p class="dialogue">"Two minutes. Grab what we need."</p>
            <p class="narrative">Antibiotics. Painkillers. Bandages. Survival.</p>
        `,
        flags: { raided_pharmacy: true },
        choices: [
            { text: "Back to the car.", target: 9 }
        ]
    },

    "4_observe_distract": {
        title: "DISTRACT",
        thread: "yuna",
        content: `
            <p class="dialogue">"I'll draw them off. You drive past."</p>
            <p class="dialogue">"No. We stay together."</p>
            <p class="dialogue">"We don't have a choice."</p>
        `,
        flags: { distraction_plan: true },
        choices: [
            { text: "Together or not at all.", target: 9 },
            { text: "Do it. I'll pick you up on the other side.", target: "4_observe_split" }
        ]
    },

    "4_observe_sprint": {
        title: "SPRINT",
        thread: "yuna",
        content: `
            <p class="narrative">You sprint. Through the gap. Past the infected. To the car.</p>
            <p class="narrative">Engine on. Door open. Minho dives in.</p>
            <p class="narrative">You drive.</p>
        `,
        flags: { sprinted: true },
        choices: [
            { text: "Go.", target: 9 }
        ]
    },

    "4_observe_wait": {
        title: "WAIT",
        thread: "yuna",
        content: `
            <p class="narrative">You wait. Watch. Time their movements.</p>
            <p class="narrative">There. A gap. Now.</p>
        `,
        flags: { timed_escape: true },
        choices: [
            { text: "Move.", target: 9 }
        ]
    },

    "4_observe_split": {
        title: "SPLIT",
        thread: "yuna",
        content: `
            <p class="narrative">Minho runs. The infected follow. You drive.</p>
            <p class="narrative">Two blocks. Three. You see him running. Pick him up.</p>
            <p class="dialogue">"Never again," he says, breathless. "We stay together."</p>
        `,
        flags: { split_reunited: true },
        choices: [
            { text: "Never again.", target: 9 }
        ]
    },

    "4_park_leave": {
        title: "LEAVE",
        thread: "yuna",
        content: `
            <p class="narrative">You pass a park. Bodies everywhere. Some still moving.</p>
            <p class="narrative">You don't stop. Can't stop.</p>
        `,
        flags: { saw_horror: true },
        choices: [
            { text: "Focus on the road.", target: 9 }
        ]
    },

    "4_park_search": {
        title: "SEARCH",
        thread: "yuna",
        content: `
            <p class="narrative">An abandoned car. Keys still in the ignition. Gas still in the tank.</p>
            <p class="narrative">A backup. Just in case.</p>
        `,
        flags: { found_backup_car: true },
        choices: [
            { text: "Note the location. Keep moving.", target: 9 }
        ]
    },

    "4_photo_floor": {
        title: "FLOOR",
        thread: "yuna",
        content: `
            <p class="narrative">A photograph on the ground. A family. Smiling. Before.</p>
            <p class="narrative">You don't pick it up. Some memories should stay where they fall.</p>
        `,
        flags: { saw_photo: true },
        choices: [
            { text: "Move on.", target: 9 }
        ]
    },

    "4_photo_leave": {
        title: "LEAVE IT",
        thread: "yuna",
        content: `
            <p class="narrative">You leave the photo. Leave the memories. Leave everything behind.</p>
            <p class="narrative">Forward. Only forward.</p>
        `,
        flags: { left_past: true },
        choices: [
            { text: "Forward.", target: 9 }
        ]
    },

    "4_photo_search": {
        title: "TAKE IT",
        thread: "yuna",
        content: `
            <p class="narrative">You take the photo. Slip it into your pocket.</p>
            <p class="narrative">Someone should remember them.</p>
        `,
        flags: { collected_memory: true },
        choices: [
            { text: "Keep moving.", target: 9 }
        ]
    },

    "4_roof_cautious": {
        title: "CAUTIOUS",
        thread: "yuna",
        content: `
            <p class="narrative">The bridge ahead. The only way to Yeouido.</p>
            <p class="narrative">It looks clear. Too clear.</p>
            <p class="dialogue">"Slowly. Watch for ambush."</p>
        `,
        flags: { cautious_approach: true },
        choices: [
            { text: "Cross slowly.", target: 9 }
        ]
    },

    "4_roof_question": {
        title: "QUESTION",
        thread: "yuna",
        content: `
            <p class="dialogue">"What if the safe zone is gone? What if it never existed?"</p>
            <p class="dialogue">"Then we keep driving. Until we find something. Or until we don't."</p>
        `,
        flags: { questioned_hope: true },
        choices: [
            { text: "Keep driving.", target: 9 }
        ]
    },

    "4_wisdom_honest": {
        title: "HONEST",
        thread: "yuna",
        content: `
            <p class="dialogue">"I don't know if we're going to make it."</p>
            <p class="narrative">Minho looks at you. Nods.</p>
            <p class="dialogue">"I know. But we try anyway."</p>
        `,
        flags: { honesty: true },
        choices: [
            { text: "We try.", target: 9 }
        ]
    },

    "4_wisdom_instinct": {
        title: "INSTINCT",
        thread: "yuna",
        content: `
            <p class="narrative">Your gut says go left. The map says go right.</p>
            <p class="narrative">You go left. The right path is blocked two minutes later.</p>
            <p class="narrative">Trust your instincts.</p>
        `,
        flags: { trusted_gut: true },
        choices: [
            { text: "Keep following your gut.", target: 9 }
        ]
    },

    "4_wisdom_principle": {
        title: "PRINCIPLE",
        thread: "yuna",
        content: `
            <p class="narrative">Survive. That's the only principle that matters now.</p>
            <p class="narrative">Everything else—morality, kindness, love—comes after survival.</p>
            <p class="narrative">Or maybe survival means nothing without those things.</p>
        `,
        flags: { philosophical: true },
        choices: [
            { text: "Keep moving.", target: 9 }
        ]
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // JIN THREAD - The Mysterious Survivor
    // ═══════════════════════════════════════════════════════════════════════════

    "jin_bond_deepens": {
        title: "BOND",
        thread: "jin",
        content: `
            <p class="narrative">Jin looks at you differently now. Trust, maybe. Or something like it.</p>
            <p class="dialogue">"You didn't have to help me back there."</p>
            <p class="dialogue">"Yes I did."</p>
        `,
        flags: { jin_trust_up: true },
        choices: [
            { text: "Continue together.", target: 11 }
        ]
    },

    "jin_comfort": {
        title: "COMFORT",
        thread: "jin",
        content: `
            <p class="narrative">Jin is crying. Silently. Tears running down her face.</p>
            <p class="narrative">You sit beside her. Don't speak. Just... be there.</p>
        `,
        flags: { comforted_jin: true },
        choices: [
            { text: "Stay with her.", target: 11 }
        ]
    },

    "jin_confrontation": {
        title: "CONFRONTATION",
        thread: "jin",
        content: `
            <p class="dialogue">"You've been lying to me. About who you are. What you know."</p>
            <p class="narrative">Jin's face hardens.</p>
            <p class="dialogue">"Everyone lies to survive. Even you."</p>
        `,
        flags: { confronted_jin: true },
        choices: [
            { text: "What are you hiding?", target: "jin_reveal" },
            { text: "Fine. Keep your secrets.", target: 11 }
        ]
    },

    "jin_death": {
        title: "GOODBYE",
        thread: "jin",
        content: `
            <p class="narrative">Jin is bitten. You both know what it means.</p>
            <p class="dialogue">"Go. Before I turn."</p>
            <p class="dialogue">"I can't leave you."</p>
            <p class="dialogue">"You have to."</p>
        `,
        flags: { jin_dying: true, tragic: true },
        choices: [
            { text: "Stay with her until the end.", target: "jin_end_stay" },
            { text: "Go. Honor her wish.", target: "jin_end_leave" }
        ]
    },

    "jin_distance_chosen": {
        title: "DISTANCE",
        thread: "jin",
        content: `
            <p class="narrative">Jin keeps her distance. Always watching. Never fully trusting.</p>
            <p class="narrative">You understand. Trust is a luxury in the apocalypse.</p>
        `,
        flags: { jin_distant: true },
        choices: [
            { text: "Give her space.", target: 11 }
        ]
    },

    "jin_doubt": {
        title: "DOUBT",
        thread: "jin",
        content: `
            <p class="dialogue">"Why are you helping me? What do you want?"</p>
            <p class="narrative">Jin's eyes are hard. Suspicious.</p>
            <p class="dialogue">"I don't want anything. Except to survive."</p>
        `,
        flags: { jin_suspicious: true },
        choices: [
            { text: "Prove yourself through action.", target: 11 }
        ]
    },

    "jin_escape": {
        title: "ESCAPE",
        thread: "jin",
        content: `
            <p class="narrative">You and Jin run together. Through the chaos. Toward something like hope.</p>
            <p class="narrative">She's fast. Efficient. A survivor, like you.</p>
        `,
        flags: { escaping_with_jin: true },
        choices: [
            { text: "Keep running.", target: 11 }
        ]
    },

    "jin_first_bond": {
        title: "FIRST BOND",
        thread: "jin",
        content: `
            <p class="narrative">Jin shares her water. Her food. A small act of trust.</p>
            <p class="dialogue">"You saved my life. This is the least I can do."</p>
        `,
        flags: { jin_shared: true },
        choices: [
            { text: "Accept.", target: 11 }
        ]
    },

    "jin_loyal": {
        title: "LOYAL",
        thread: "jin",
        content: `
            <p class="narrative">Jin stands with you. Against the odds. Against the infected.</p>
            <p class="dialogue">"Together," she says. And means it.</p>
        `,
        flags: { jin_loyal: true },
        choices: [
            { text: "Together.", target: 11 }
        ]
    },

    "jin_past_hint": {
        title: "PAST",
        thread: "jin",
        content: `
            <p class="dialogue">"I wasn't always like this. Before... I was different."</p>
            <p class="narrative">She doesn't elaborate. You don't ask.</p>
        `,
        flags: { jin_hint: true },
        choices: [
            { text: "We all were.", target: 11 }
        ]
    },

    "jin_promise_made": {
        title: "PROMISE",
        thread: "jin",
        content: `
            <p class="dialogue">"If I turn... promise me you won't let me become one of them."</p>
            <p class="narrative">A heavy promise. But you make it.</p>
            <p class="dialogue">"I promise."</p>
        `,
        flags: { jin_promise: true },
        choices: [
            { text: "Keep moving.", target: 11 }
        ]
    },

    "jin_rescue": {
        title: "RESCUE",
        thread: "jin",
        content: `
            <p class="narrative">Jin is surrounded. You don't think. You act.</p>
            <p class="narrative">Gunshots. Screams. And then silence.</p>
            <p class="dialogue">"You came back for me."</p>
        `,
        flags: { saved_jin: true },
        choices: [
            { text: "Of course I did.", target: 11 }
        ]
    },

    "jin_romance": {
        title: "ROMANCE",
        thread: "jin",
        content: `
            <p class="narrative">In the quiet moments, between horrors, something grows.</p>
            <p class="narrative">Jin's hand finds yours. You don't pull away.</p>
        `,
        flags: { jin_romance: true },
        choices: [
            { text: "Accept the moment.", target: 11 }
        ]
    },

    "jin_save_both": {
        title: "SAVE BOTH",
        thread: "jin",
        content: `
            <p class="narrative">Minho or Jin. The infected closing in.</p>
            <p class="narrative">You can't choose. So you don't.</p>
            <p class="narrative">You save them both. Somehow.</p>
        `,
        flags: { saved_both: true, heroic: true },
        choices: [
            { text: "Let's go.", target: 11 }
        ]
    },

    "jin_save_reversal": {
        title: "REVERSAL",
        thread: "jin",
        content: `
            <p class="narrative">This time, Jin saves you.</p>
            <p class="dialogue">"Now we're even."</p>
        `,
        flags: { jin_saved_you: true },
        choices: [
            { text: "Thank you.", target: 11 }
        ]
    },

    "jin_surgery": {
        title: "SURGERY",
        thread: "jin",
        content: `
            <p class="narrative">Jin is hurt. Badly. You have to operate.</p>
            <p class="narrative">You're not a doctor. But you're all she has.</p>
        `,
        flags: { emergency_surgery: true },
        choices: [
            { text: "Do what you have to do.", target: 11 }
        ]
    },

    "jin_reveal": {
        title: "REVEAL",
        thread: "jin",
        content: `
            <p class="narrative">Jin's shoulders drop. The mask falls away.</p>
            <p class="dialogue">"I was a researcher. At Gentech. I know how this started. I know what they did."</p>
            <p class="narrative">The truth. Finally.</p>
        `,
        flags: { jin_revealed: true, knows_truth: true },
        choices: [
            { text: "Tell me everything.", target: 52 }
        ]
    },

    "jin_end_stay": {
        title: "STAY",
        thread: "jin",
        content: `
            <p class="narrative">You stay. Hold her hand. Watch the light fade from her eyes.</p>
            <p class="dialogue">"Thank you," she whispers. "For not letting me die alone."</p>
            <p class="narrative">When it's over, you do what must be done. And then you move on.</p>
        `,
        flags: { jin_death_witnessed: true },
        choices: [
            { text: "Move on.", target: 11 }
        ]
    },

    "jin_end_leave": {
        title: "LEAVE",
        thread: "jin",
        content: `
            <p class="narrative">You go. Her last gift to you—your survival.</p>
            <p class="narrative">You hear the gunshot a minute later. She did it herself.</p>
            <p class="narrative">Strong until the end.</p>
        `,
        flags: { jin_self_ended: true },
        choices: [
            { text: "Survive. For her.", target: 11 }
        ]
    },

    // ========== BACKSTORY SECTIONS ==========
    "backstory_choice": {
        title: "MEMORIES",
        thread: "minho",
        content: `
            <p class="narrative">The quiet moment stretches. Minho looks at you—really looks.</p>
            <p class="dialogue">"Tell me something. Something from before."</p>
            <p class="narrative">Before the outbreak. Before the blood. When you were just... you.</p>
        `,
        flags: { backstory_moment: true },
        choices: [
            { text: "Talk about your childhood.", target: "backstory_childhood" },
            { text: "Talk about how you met.", target: "backstory_meeting" },
            { text: "Stay silent.", target: 11 }
        ]
    },

    "backstory_childhood": {
        title: "CHILDHOOD",
        thread: "minho",
        content: `
            <p class="narrative">You tell him about the apartment in Busan. The sound of the ocean. Your mother's cooking.</p>
            <p class="narrative">Simple things. Beautiful things. Things that feel impossible now.</p>
            <p class="dialogue">"I'd like to see it someday," Minho says. "After."</p>
            <p class="narrative">After. That word again. You hold onto it.</p>
        `,
        flags: { shared_childhood: true },
        choices: [
            { text: "Continue.", target: 11 }
        ]
    },

    "backstory_meeting": {
        title: "HOW WE MET",
        thread: "minho",
        content: `
            <p class="narrative">The coffee shop. The spilled latte. His terrible jokes.</p>
            <p class="dialogue">"You hated me at first," he laughs.</p>
            <p class="dialogue">"I still hate you," you say. But you're smiling.</p>
            <p class="narrative">Some things survive even the end of the world.</p>
        `,
        flags: { shared_meeting: true },
        choices: [
            { text: "Continue.", target: 11 }
        ]
    },

    // ========== HANA SECTIONS ==========
    "hana_choice": {
        title: "HANA",
        thread: "survivors",
        content: `
            <p class="narrative">The little girl stares up at you. Eyes too old for her face.</p>
            <p class="dialogue">"Are you going to leave me too?"</p>
            <p class="narrative">She's seen everyone leave. Parents. Friends. Everyone.</p>
        `,
        flags: { met_hana: true },
        choices: [
            { text: "We won't leave you.", target: "hana_stay" },
            { text: "We can't take her.", target: "hana_leave" },
            { text: "Ask Minho's opinion.", target: "hana_ask" }
        ]
    },

    "hana_stay": {
        title: "PROMISE",
        thread: "survivors",
        content: `
            <p class="narrative">You kneel to her level. Take her small hand in yours.</p>
            <p class="dialogue">"We stay together. All of us."</p>
            <p class="narrative">Her grip tightens. Fierce. Trusting.</p>
            <p class="narrative">Another life to protect. Another reason to survive.</p>
        `,
        flags: { hana_with_group: true },
        choices: [
            { text: "Move on together.", target: 11 }
        ]
    },

    "hana_leave": {
        title: "PRAGMATISM",
        thread: "survivors",
        content: `
            <p class="narrative">A child will slow you down. Get you killed.</p>
            <p class="narrative">You leave supplies. Water. A knife she's too small to use.</p>
            <p class="narrative">Her eyes follow you as you walk away. You don't look back.</p>
            <p class="narrative">You can't afford to.</p>
        `,
        flags: { abandoned_hana: true, guilt: true },
        choices: [
            { text: "Keep moving.", target: 11 }
        ]
    },

    "hana_ask": {
        title: "MINHO'S CHOICE",
        thread: "survivors",
        content: `
            <p class="narrative">Minho looks at the child. At you. Back to the child.</p>
            <p class="dialogue">"We were all alone once," he says. "Someone took us in."</p>
            <p class="narrative">He holds out his hand. She takes it.</p>
            <p class="narrative">Three, then.</p>
        `,
        flags: { hana_with_group: true, minho_decided: true },
        choices: [
            { text: "Move on together.", target: 11 }
        ]
    },

    // ========== HORROR SECTIONS ==========
    "horror_discover": {
        title: "DISCOVERY",
        thread: "horror",
        content: `
            <p class="narrative">The laboratory. The bodies strapped to tables. The IV drips still running.</p>
            <p class="narrative">They were experimenting on survivors. Trying to find a cure.</p>
            <p class="narrative">Or trying to make something worse.</p>
        `,
        flags: { discovered_lab: true },
        choices: [
            { text: "Search for information.", target: "horror_search" },
            { text: "Destroy everything.", target: "horror_destroy" }
        ]
    },

    "horror_search": {
        title: "THE FILES",
        thread: "horror",
        content: `
            <p class="narrative">Project LAZARUS. Phase 3. Subject mortality rate: 97%.</p>
            <p class="narrative">They knew. They knew what they were doing.</p>
            <p class="narrative">The 3% who survived... became something else.</p>
        `,
        flags: { knows_project: true },
        choices: [
            { text: "Take the files.", target: 52 }
        ]
    },

    "horror_destroy": {
        title: "FIRE",
        thread: "horror",
        content: `
            <p class="narrative">You find the gas line. The lighter.</p>
            <p class="narrative">The flames climb. The screaming starts—subjects still alive, still aware.</p>
            <p class="narrative">Mercy. This is mercy.</p>
            <p class="narrative">You tell yourself that.</p>
        `,
        flags: { destroyed_lab: true },
        choices: [
            { text: "Walk away.", target: 11 }
        ]
    },

    // ========== LOCATION SECTIONS ==========
    "loc_choice": {
        title: "WHICH WAY",
        thread: "journey",
        content: `
            <p class="narrative">The road forks. Left toward the mountains. Right toward the coast.</p>
            <p class="narrative">No map. No signal. Just instinct and hope.</p>
        `,
        flags: { at_crossroads: true },
        choices: [
            { text: "Mountains.", target: "loc_mountains" },
            { text: "Coast.", target: "loc_coast" }
        ]
    },

    "loc_mountains": {
        title: "MOUNTAINS",
        thread: "journey",
        content: `
            <p class="narrative">The air thins as you climb. Cold. Clean.</p>
            <p class="narrative">Fewer infected up here. Also fewer supplies. Fewer chances.</p>
            <p class="narrative">But the view... God, the view.</p>
            <p class="narrative">Seoul burns below. Beautiful and terrible.</p>
        `,
        flags: { chose_mountains: true },
        choices: [
            { text: "Keep climbing.", target: 11 }
        ]
    },

    "loc_coast": {
        title: "COAST",
        thread: "journey",
        content: `
            <p class="narrative">The smell of salt. The crash of waves.</p>
            <p class="narrative">Boats on the horizon. Military? Survivors? Raiders?</p>
            <p class="narrative">The ocean doesn't care. It just keeps moving.</p>
        `,
        flags: { chose_coast: true },
        choices: [
            { text: "Signal the boats.", target: 11 },
            { text: "Stay hidden.", target: 11 }
        ]
    },

    // ========== LUCK SECTIONS ==========
    "luck_good": {
        title: "FORTUNE",
        thread: "survival",
        content: `
            <p class="narrative">The infected passes right by you. Doesn't see you. Doesn't smell you.</p>
            <p class="narrative">Just luck. Dumb, beautiful luck.</p>
            <p class="narrative">You exhale. Keep moving.</p>
        `,
        flags: { lucky_escape: true },
        choices: [
            { text: "Count your blessings.", target: 11 }
        ]
    },

    "luck_bad": {
        title: "MISFORTUNE",
        thread: "survival",
        content: `
            <p class="narrative">The floor gives way. You fall. Something breaks—ankle, maybe worse.</p>
            <p class="narrative">Bad luck. It happens.</p>
            <p class="narrative">You drag yourself forward. No other choice.</p>
        `,
        flags: { injured: true },
        choices: [
            { text: "Keep going.", target: 11 }
        ]
    },

    "luck_find": {
        title: "LUCKY FIND",
        thread: "survival",
        content: `
            <p class="narrative">Hidden in the floorboards: canned food, water, medicine.</p>
            <p class="narrative">Someone's emergency stash. Someone who never came back for it.</p>
            <p class="narrative">Their loss. Your survival.</p>
        `,
        flags: { found_cache: true, has_supplies: true },
        choices: [
            { text: "Take everything.", target: 11 }
        ]
    },

    "luck_test": {
        title: "GAMBLE",
        thread: "survival",
        content: `
            <p class="narrative">Two doors. One leads out. One leads to them.</p>
            <p class="narrative">50/50. The universe flips a coin.</p>
        `,
        flags: { gamble_moment: true },
        choices: [
            { text: "Left door.", target: "luck_good" },
            { text: "Right door.", target: "luck_bad" }
        ]
    },

    // ========== MEAL SECTIONS ==========
    "meal_choice": {
        title: "HUNGER",
        thread: "survival",
        content: `
            <p class="narrative">Your stomach growls. When did you last eat?</p>
            <p class="narrative">Supplies are low. Decisions must be made.</p>
        `,
        flags: { hungry: true },
        choices: [
            { text: "Eat now.", target: "meal_eat" },
            { text: "Save food for later.", target: "meal_save" },
            { text: "Share with the group.", target: "meal_share" }
        ]
    },

    "meal_eat": {
        title: "NOURISHMENT",
        thread: "survival",
        content: `
            <p class="narrative">Cold rice. Stale water. The best meal you've had in days.</p>
            <p class="narrative">Strength returns. Clarity. Purpose.</p>
            <p class="narrative">You can do this. You can survive.</p>
        `,
        flags: { fed: true, energy_restored: true },
        choices: [
            { text: "Continue.", target: 11 }
        ]
    },

    "meal_save": {
        title: "DISCIPLINE",
        thread: "survival",
        content: `
            <p class="narrative">The hunger gnaws. But tomorrow might be worse.</p>
            <p class="narrative">You tighten your belt. Push down the pain.</p>
            <p class="narrative">Survival is about saying no to now for the sake of later.</p>
        `,
        flags: { supplies_saved: true },
        choices: [
            { text: "Continue.", target: 11 }
        ]
    },

    "meal_share": {
        title: "SHARING",
        thread: "survival",
        content: `
            <p class="narrative">You divide the food equally. Not enough for anyone.</p>
            <p class="narrative">But Minho smiles. And that's worth something.</p>
            <p class="dialogue">"Together," he says.</p>
            <p class="dialogue">"Together," you agree.</p>
        `,
        flags: { shared_meal: true, group_morale_up: true },
        choices: [
            { text: "Continue together.", target: 11 }
        ]
    },

    "meal_hunt": {
        title: "HUNTING",
        thread: "survival",
        content: `
            <p class="narrative">A rat. Quick and fat. Protein is protein.</p>
            <p class="narrative">You corner it. Kill it. Try not to think about what you've become.</p>
        `,
        flags: { hunted: true },
        choices: [
            { text: "Cook it.", target: "meal_eat" }
        ]
    },

    "meal_cook": {
        title: "FIRE",
        thread: "survival",
        content: `
            <p class="narrative">The smoke rises. You have minutes before they smell it.</p>
            <p class="narrative">Worth the risk. Hot food changes everything.</p>
        `,
        flags: { cooked_meal: true },
        choices: [
            { text: "Eat quickly.", target: "meal_eat" }
        ]
    },

    // ========== MINJI SECTIONS ==========
    "minji_choice": {
        title: "MINJI",
        thread: "survivors",
        content: `
            <p class="narrative">The nurse stands over her patient. Dead. Turned. She didn't run.</p>
            <p class="dialogue">"He was my brother," she says. "I had to try."</p>
            <p class="narrative">Her hands are steady. Her eyes are not.</p>
        `,
        flags: { met_minji: true },
        choices: [
            { text: "Come with us.", target: "minji_join" },
            { text: "I'm sorry for your loss.", target: "minji_comfort" },
            { text: "We should go.", target: "minji_leave" }
        ]
    },

    "minji_join": {
        title: "NEW ALLY",
        thread: "survivors",
        content: `
            <p class="narrative">Minji packs her medical supplies. Efficient. Professional.</p>
            <p class="dialogue">"I can help," she says. "I know anatomy. I know how to hurt them."</p>
            <p class="narrative">A nurse who became a soldier. The world makes monsters of us all.</p>
        `,
        flags: { minji_joined: true },
        choices: [
            { text: "Welcome aboard.", target: 11 }
        ]
    },

    "minji_comfort": {
        title: "GRIEF",
        thread: "survivors",
        content: `
            <p class="narrative">You don't touch her. Just stand nearby. Present.</p>
            <p class="dialogue">"There was nothing you could do," you say.</p>
            <p class="dialogue">"I know." She wipes her eyes. "That's the worst part."</p>
        `,
        flags: { comforted_minji: true },
        choices: [
            { text: "Offer to let her join.", target: "minji_join" },
            { text: "Give her space.", target: 11 }
        ]
    },

    "minji_leave": {
        title: "GOODBYE",
        thread: "survivors",
        content: `
            <p class="narrative">She doesn't try to stop you. Doesn't ask to come.</p>
            <p class="narrative">Some people need to grieve alone.</p>
            <p class="narrative">You hope she makes it. You probably won't see her again.</p>
        `,
        flags: { left_minji: true },
        choices: [
            { text: "Keep moving.", target: 11 }
        ]
    },

    "minji_help": {
        title: "MEDICAL AID",
        thread: "survivors",
        content: `
            <p class="narrative">Minji's hands move with practiced precision. Stitches. Bandages. Antibiotics.</p>
            <p class="dialogue">"You'll live," she says. "Barely."</p>
            <p class="narrative">Her brother died, but she keeps saving others. That's who she is.</p>
        `,
        flags: { minji_healed_you: true },
        choices: [
            { text: "Thank you.", target: 11 }
        ]
    },

    // ========== MIRROR SECTIONS ==========
    "mirror_choice": {
        title: "REFLECTION",
        thread: "psychological",
        content: `
            <p class="narrative">You catch your reflection in broken glass. Barely recognize yourself.</p>
            <p class="narrative">Thinner. Harder. Eyes that have seen too much.</p>
        `,
        flags: { self_reflection: true },
        choices: [
            { text: "Look away.", target: "mirror_away" },
            { text: "Study your face.", target: "mirror_study" }
        ]
    },

    "mirror_away": {
        title: "DENIAL",
        thread: "psychological",
        content: `
            <p class="narrative">Better not to know. Better to keep moving.</p>
            <p class="narrative">The person you were is gone. Mourning them wastes time.</p>
        `,
        flags: { avoided_reflection: true },
        choices: [
            { text: "Continue.", target: 11 }
        ]
    },

    "mirror_study": {
        title: "ACCEPTANCE",
        thread: "psychological",
        content: `
            <p class="narrative">This is you now. Survivor. Fighter. Whatever it takes.</p>
            <p class="narrative">You nod at your reflection. A promise. A pact.</p>
            <p class="narrative">You will not die here.</p>
        `,
        flags: { accepted_self: true },
        choices: [
            { text: "Continue.", target: 11 }
        ]
    },

    "mirror_break": {
        title: "SHATTER",
        thread: "psychological",
        content: `
            <p class="narrative">Your fist connects with the glass. Blood. Pain. Release.</p>
            <p class="narrative">The reflection splinters into a thousand pieces.</p>
            <p class="narrative">You're still standing. That's what matters.</p>
        `,
        flags: { mirror_broken: true, bleeding: true },
        choices: [
            { text: "Wrap your hand.", target: 11 }
        ]
    },

    // ========== NURSERY SECTIONS ==========
    "nursery_choice": {
        title: "NURSERY",
        thread: "horror",
        content: `
            <p class="narrative">A hospital nursery. Empty cribs. Silence where there should be crying.</p>
            <p class="narrative">One crib moves. Something in it.</p>
        `,
        flags: { at_nursery: true },
        choices: [
            { text: "Look inside.", target: "nursery_look" },
            { text: "Back away slowly.", target: "nursery_leave" }
        ]
    },

    "nursery_look": {
        title: "WHAT'S IN THE CRIB",
        thread: "horror",
        content: `
            <p class="narrative">A baby. Alive. Crying now—finally crying.</p>
            <p class="narrative">Not infected. Just abandoned. Just alone.</p>
            <p class="narrative">Like everyone else.</p>
        `,
        flags: { found_baby: true },
        choices: [
            { text: "Take the baby.", target: "nursery_take" },
            { text: "You can't carry a baby.", target: "nursery_leave_baby" }
        ]
    },

    "nursery_leave": {
        title: "RETREAT",
        thread: "horror",
        content: `
            <p class="narrative">Some doors should stay closed. Some questions unanswered.</p>
            <p class="narrative">You leave the nursery. Leave whatever was in there.</p>
            <p class="narrative">The crying starts as you walk away. You don't turn back.</p>
        `,
        flags: { left_nursery: true },
        choices: [
            { text: "Keep moving.", target: 11 }
        ]
    },

    "nursery_take": {
        title: "BURDEN",
        thread: "survival",
        content: `
            <p class="narrative">The baby fits in your arms. Warm. Fragile. Impossibly small.</p>
            <p class="narrative">This will slow you down. This will get you killed.</p>
            <p class="narrative">You hold it tighter anyway.</p>
        `,
        flags: { has_baby: true },
        choices: [
            { text: "Find somewhere safe.", target: 11 }
        ]
    },

    "nursery_leave_baby": {
        title: "PRAGMATISM",
        thread: "survival",
        content: `
            <p class="narrative">You can't. A baby needs things you don't have. Care you can't give.</p>
            <p class="narrative">You leave formula. Water. A prayer that someone better finds them.</p>
            <p class="narrative">The crying follows you down the hall.</p>
        `,
        flags: { abandoned_baby: true, guilt: true },
        choices: [
            { text: "Keep moving.", target: 11 }
        ]
    },

    // ========== RESEARCH SECTIONS ==========
    "research_choice": {
        title: "RESEARCH",
        thread: "conspiracy",
        content: `
            <p class="narrative">Files. Hard drives. Years of research.</p>
            <p class="narrative">The truth is here. All of it. If you can find it.</p>
        `,
        flags: { found_research: true },
        choices: [
            { text: "Search the files.", target: "research_files" },
            { text: "Check the computers.", target: "research_computers" },
            { text: "Take everything.", target: "research_take" }
        ]
    },

    "research_files": {
        title: "PAPER TRAIL",
        thread: "conspiracy",
        content: `
            <p class="narrative">Project LAZARUS. Phase 1: Animal trials. Phase 2: Prisoners. Phase 3: Outbreak.</p>
            <p class="narrative">They knew. They let it happen.</p>
            <p class="narrative">The virus wasn't an accident. It was a test.</p>
        `,
        flags: { knows_origin: true },
        choices: [
            { text: "Keep reading.", target: 52 }
        ]
    },

    "research_computers": {
        title: "DIGITAL TRAIL",
        thread: "conspiracy",
        content: `
            <p class="narrative">Emails. Memos. Video logs. Scientists pleading for shutdown. Executives denying.</p>
            <p class="dialogue">"Acceptable losses."</p>
            <p class="narrative">They said that about Seoul. About millions of people.</p>
        `,
        flags: { has_evidence: true },
        choices: [
            { text: "Download everything.", target: "research_take" }
        ]
    },

    "research_take": {
        title: "EVIDENCE",
        thread: "conspiracy",
        content: `
            <p class="narrative">Hard drives. Flash drives. Printed documents.</p>
            <p class="narrative">If you survive—if anyone survives—the world needs to know.</p>
            <p class="narrative">Someone has to be held accountable.</p>
        `,
        flags: { has_research: true },
        choices: [
            { text: "Carry the truth.", target: 11 }
        ]
    },

    // ========== RIDDLE SECTIONS ==========
    "riddle_choice": {
        title: "RIDDLE",
        thread: "puzzle",
        content: `
            <p class="narrative">The door has a lock. Not electronic—a puzzle lock.</p>
            <p class="narrative">Whoever built this was paranoid. Or brilliant. Or both.</p>
        `,
        flags: { at_puzzle: true },
        choices: [
            { text: "Study the mechanism.", target: "riddle_study" },
            { text: "Force it open.", target: "riddle_force" }
        ]
    },

    "riddle_study": {
        title: "PUZZLE",
        thread: "puzzle",
        content: `
            <p class="narrative">Gears and symbols. A sequence. Something about Korean mythology...</p>
            <p class="narrative">The four guardian spirits. You arrange them: Blue Dragon, White Tiger, Vermillion Bird, Black Tortoise.</p>
            <p class="narrative">Click.</p>
        `,
        flags: { solved_riddle: true },
        choices: [
            { text: "Enter.", target: "riddle_reward" }
        ]
    },

    "riddle_force": {
        title: "BRUTE FORCE",
        thread: "puzzle",
        content: `
            <p class="narrative">Your shoulder hits the door. Once. Twice. Three times.</p>
            <p class="narrative">It gives. So does your shoulder.</p>
            <p class="narrative">Sometimes the direct approach works.</p>
        `,
        flags: { forced_entry: true, injured: true },
        choices: [
            { text: "Enter.", target: "riddle_reward" }
        ]
    },

    "riddle_reward": {
        title: "VAULT",
        thread: "puzzle",
        content: `
            <p class="narrative">Weapons. Supplies. Medicine. A survivor's paradise.</p>
            <p class="narrative">Whoever built this was ready. They just weren't fast enough.</p>
            <p class="narrative">Their loss. Your gain.</p>
        `,
        flags: { found_vault: true, has_weapons: true, has_supplies: true },
        choices: [
            { text: "Take what you can carry.", target: 11 }
        ]
    },

    // ========== SEORA SECTIONS ==========
    "seora_choice": {
        title: "SEORA",
        thread: "survivors",
        content: `
            <p class="narrative">The woman blocks your path. Military fatigues. Rifle steady.</p>
            <p class="dialogue">"One wrong move and I drop you."</p>
            <p class="narrative">She's scared. Everyone's scared. But her finger's on the trigger.</p>
        `,
        flags: { met_seora: true },
        choices: [
            { text: "Raise your hands slowly.", target: "seora_calm" },
            { text: "We're not infected.", target: "seora_explain" },
            { text: "Point your weapon back.", target: "seora_standoff" }
        ]
    },

    "seora_calm": {
        title: "SURRENDER",
        thread: "survivors",
        content: `
            <p class="narrative">Hands up. Slow movements. No threats.</p>
            <p class="narrative">Her grip relaxes. Just a fraction.</p>
            <p class="dialogue">"You're really alive," she whispers. "God. I thought I was the only one."</p>
        `,
        flags: { seora_calmed: true },
        choices: [
            { text: "You're not alone.", target: "seora_join" }
        ]
    },

    "seora_explain": {
        title: "WORDS",
        thread: "survivors",
        content: `
            <p class="dialogue">"We've been running for days. Trying to find safety. We're just like you."</p>
            <p class="narrative">She studies your faces. Looking for lies. Finding none.</p>
            <p class="dialogue">"Okay," she says finally. "Okay."</p>
        `,
        flags: { convinced_seora: true },
        choices: [
            { text: "Can we pass?", target: "seora_join" }
        ]
    },

    "seora_standoff": {
        title: "STANDOFF",
        thread: "survivors",
        content: `
            <p class="narrative">Your weapon rises. Her weapon holds.</p>
            <p class="narrative">Seconds stretch. Hearts pound. Fingers twitch.</p>
            <p class="dialogue">"We don't have to do this," Minho says.</p>
            <p class="narrative">He's right. You both lower your weapons.</p>
        `,
        flags: { seora_standoff: true },
        choices: [
            { text: "Start over.", target: "seora_calm" }
        ]
    },

    "seora_join": {
        title: "ALLIANCE",
        thread: "survivors",
        content: `
            <p class="narrative">Seora—that's her name. Corporal. 7th Infantry. The only survivor of her unit.</p>
            <p class="dialogue">"I have supplies. Skills. I can help."</p>
            <p class="narrative">Another ally. Another chance.</p>
        `,
        flags: { seora_joined: true },
        choices: [
            { text: "Welcome.", target: 11 }
        ]
    },

    "seora_help": {
        title: "MILITARY TRAINING",
        thread: "survivors",
        content: `
            <p class="narrative">Seora moves like a soldier. Clears rooms. Covers angles. Watches your back.</p>
            <p class="dialogue">"Stay behind me."</p>
            <p class="narrative">For once, you listen.</p>
        `,
        flags: { seora_covering: true },
        choices: [
            { text: "Follow her lead.", target: 11 }
        ]
    },

    "seora_sacrifice": {
        title: "SACRIFICE",
        thread: "survivors",
        content: `
            <p class="narrative">Seora holds the door. The infected push against it. Her arms shake.</p>
            <p class="dialogue">"GO! I'll catch up!"</p>
            <p class="narrative">You both know she won't.</p>
        `,
        flags: { seora_sacrifice: true },
        choices: [
            { text: "Thank you.", target: 11 },
            { text: "Stay with her.", target: "seora_death" }
        ]
    },

    "seora_death": {
        title: "TOGETHER",
        thread: "survivors",
        content: `
            <p class="narrative">You don't leave. You help her hold the door.</p>
            <p class="narrative">The wood splinters. They're coming through.</p>
            <p class="dialogue">"You idiot," she laughs. "You beautiful idiot."</p>
            <p class="narrative">At least neither of you dies alone.</p>
        `,
        flags: { died_with_seora: true },
        choices: [
            { text: "THE END", target: 201 }
        ]
    },

    // ========== SMILE SECTIONS ==========
    "smile_choice": {
        title: "SMILE",
        thread: "psychological",
        content: `
            <p class="narrative">Minho smiles at you. Not the nervous smile. Not the fake one.</p>
            <p class="narrative">A real smile. Warm. Safe.</p>
            <p class="narrative">How long since you've seen that?</p>
        `,
        flags: { intimate_moment: true },
        choices: [
            { text: "Smile back.", target: "smile_return" },
            { text: "Kiss him.", target: "smile_kiss" },
            { text: "Look away.", target: "smile_away" }
        ]
    },

    "smile_return": {
        title: "WARMTH",
        thread: "minho",
        content: `
            <p class="narrative">You smile back. Feels strange. Feels right.</p>
            <p class="narrative">For a moment, the world isn't ending. For a moment, it's just the two of you.</p>
        `,
        flags: { shared_smile: true },
        choices: [
            { text: "Continue.", target: 11 }
        ]
    },

    "smile_kiss": {
        title: "KISS",
        thread: "minho",
        content: `
            <p class="narrative">You close the distance. Your lips meet his.</p>
            <p class="narrative">Hungry. Desperate. Alive.</p>
            <p class="narrative">If the world ends tomorrow, at least you had this.</p>
        `,
        flags: { kissed_minho: true, romance: true },
        choices: [
            { text: "Continue.", target: 11 }
        ]
    },

    "smile_away": {
        title: "DISTANCE",
        thread: "minho",
        content: `
            <p class="narrative">You look away. Can't afford feelings. Can't afford distractions.</p>
            <p class="narrative">Minho's smile fades. He understands. He doesn't push.</p>
            <p class="narrative">You're grateful for that. And sorry.</p>
        `,
        flags: { rejected_moment: true },
        choices: [
            { text: "Continue.", target: 11 }
        ]
    },

    "smile_fake": {
        title: "MASK",
        thread: "psychological",
        content: `
            <p class="narrative">You force a smile. For them. For the group.</p>
            <p class="narrative">Inside, you're screaming. But they don't need to know that.</p>
            <p class="narrative">Leaders don't get to fall apart.</p>
        `,
        flags: { fake_smile: true, internal_struggle: true },
        choices: [
            { text: "Keep up appearances.", target: 11 }
        ]
    },

    "smile_real": {
        title: "GENUINE",
        thread: "psychological",
        content: `
            <p class="narrative">Something funny happens—truly funny. You laugh. Really laugh.</p>
            <p class="narrative">The sound surprises you. Surprises everyone.</p>
            <p class="narrative">There's still joy. Even now. Even here.</p>
        `,
        flags: { genuine_joy: true },
        choices: [
            { text: "Enjoy the moment.", target: 11 }
        ]
    },

    // ========== SURVIVOR SECTIONS ==========
    "surv_choice": {
        title: "SURVIVORS",
        thread: "survivors",
        content: `
            <p class="narrative">A group. Ten, maybe twelve. Armed. Organized.</p>
            <p class="narrative">They've seen your fire. They're coming this way.</p>
        `,
        flags: { survivors_spotted: true },
        choices: [
            { text: "Hide.", target: "surv_hide" },
            { text: "Approach peacefully.", target: "surv_approach" },
            { text: "Prepare to fight.", target: "surv_fight" }
        ]
    },

    "surv_hide": {
        title: "HIDING",
        thread: "survivors",
        content: `
            <p class="narrative">You press into the shadows. Watch them pass.</p>
            <p class="narrative">They look... normal. Scared. Human.</p>
            <p class="narrative">Maybe you should have said hello. Maybe next time.</p>
        `,
        flags: { avoided_survivors: true },
        choices: [
            { text: "Continue alone.", target: 11 }
        ]
    },

    "surv_approach": {
        title: "CONTACT",
        thread: "survivors",
        content: `
            <p class="narrative">Hands up. Slow steps. Voice calm.</p>
            <p class="dialogue">"We're friendly. Just looking for safety. Like you."</p>
            <p class="narrative">Weapons lower. Eyes soften. Humanity prevails.</p>
        `,
        flags: { contacted_survivors: true },
        choices: [
            { text: "Join them?", target: "surv_join" },
            { text: "Just trade information.", target: "surv_info" }
        ]
    },

    "surv_fight": {
        title: "BATTLE",
        thread: "survivors",
        content: `
            <p class="narrative">Shots fire. Someone screams. Blood on both sides.</p>
            <p class="narrative">When it's over, you're still standing. They're not.</p>
            <p class="narrative">Were they enemies? Were they just scared?</p>
            <p class="narrative">You'll never know now.</p>
        `,
        flags: { killed_survivors: true, guilt: true },
        choices: [
            { text: "Keep moving.", target: 11 }
        ]
    },

    "surv_join": {
        title: "NEW FAMILY",
        thread: "survivors",
        content: `
            <p class="narrative">They welcome you in. Share food. Share stories.</p>
            <p class="narrative">A community. A chance. Hope.</p>
            <p class="narrative">For the first time since the outbreak, you feel like you might make it.</p>
        `,
        flags: { joined_group: true },
        choices: [
            { text: "Make this work.", target: 11 }
        ]
    },

    "surv_info": {
        title: "INTELLIGENCE",
        thread: "survivors",
        content: `
            <p class="narrative">They know things. Safe routes. Danger zones. Where the military evacuated to.</p>
            <p class="narrative">Busan. The coast. Last major holdout.</p>
            <p class="narrative">You have a destination now.</p>
        `,
        flags: { knows_busan: true },
        choices: [
            { text: "Thank them and go.", target: 11 }
        ]
    },

    "surv_betrayal": {
        title: "BETRAYED",
        thread: "survivors",
        content: `
            <p class="narrative">They seemed friendly. Seemed safe.</p>
            <p class="narrative">You wake to guns in your face. Your supplies gone. Minho bleeding.</p>
            <p class="dialogue">"Nothing personal. Survival."</p>
            <p class="narrative">You'll remember that. When you find them again.</p>
        `,
        flags: { betrayed: true, supplies_stolen: true },
        choices: [
            { text: "Survive. Then find them.", target: 11 }
        ]
    },

    // ========== META/LOOP SECTIONS ==========
    "loop_awareness": {
        title: "AGAIN",
        thread: "meta",
        content: `
            <p class="narrative">This hallway. You've been here before.</p>
            <p class="narrative">Not just deja vu. The same scratch on the wall. The same body in the corner.</p>
            <p class="narrative">You've done this. You're doing it again.</p>
        `,
        flags: { loop_aware: true },
        choices: [
            { text: "Try something different.", target: 11 },
            { text: "Follow the same path.", target: 11 }
        ]
    },

    "ng_deja_vu": {
        title: "DEJA VU",
        thread: "meta",
        content: `
            <p class="narrative">You know what Minho is going to say before he says it.</p>
            <p class="narrative">You know which door leads to death.</p>
            <p class="narrative">This isn't instinct. This is memory.</p>
            <p class="narrative">Whose memory?</p>
        `,
        flags: { ng_awareness: true },
        choices: [
            { text: "Use what you know.", target: 11 }
        ]
    },

    "soojin_trust_fast": {
        title: "INSTANT TRUST",
        thread: "survivors",
        content: `
            <p class="narrative">Soojin extends her hand. You take it without hesitation.</p>
            <p class="narrative">Something about her feels... familiar. Safe.</p>
            <p class="narrative">Maybe you've been burned before. Maybe you don't care anymore.</p>
        `,
        flags: { trusted_soojin: true },
        choices: [
            { text: "Continue together.", target: 11 }
        ]
    },

    // ========== NUMERIC ENDINGS (118-124, 201-233) ==========
    118: {
        title: "ENDING: SACRIFICE",
        thread: "endings",
        content: `
            <p class="narrative">You give your life so others can live.</p>
            <p class="narrative">The infected swarm you as Minho escapes.</p>
            <p class="narrative">His face is the last thing you see. Crying. Alive.</p>
            <p class="ending">ENDING: THE SACRIFICE</p>
        `,
        flags: { ending_sacrifice: true },
        choices: [
            { text: "New Game", target: 1 }
        ]
    },

    119: {
        title: "ENDING: ALONE",
        thread: "endings",
        content: `
            <p class="narrative">Everyone else is gone. You're the last one standing.</p>
            <p class="narrative">The safe zone is ahead. Empty victory.</p>
            <p class="narrative">You made it. Was it worth it?</p>
            <p class="ending">ENDING: ALONE</p>
        `,
        flags: { ending_alone: true },
        choices: [
            { text: "New Game", target: 1 }
        ]
    },

    120: {
        title: "ENDING: TOGETHER",
        thread: "endings",
        content: `
            <p class="narrative">Minho's hand in yours. The boat ahead. Busan on the horizon.</p>
            <p class="narrative">You made it. Both of you.</p>
            <p class="narrative">Whatever comes next, you face it together.</p>
            <p class="ending">ENDING: TOGETHER</p>
        `,
        flags: { ending_together: true },
        choices: [
            { text: "New Game", target: 1 }
        ]
    },

    121: {
        title: "ENDING: TRUTH",
        thread: "endings",
        content: `
            <p class="narrative">The world knows now. The files are public. Gentech is exposed.</p>
            <p class="narrative">It doesn't bring back the dead. It doesn't cure the infected.</p>
            <p class="narrative">But someone has to be accountable. And now they are.</p>
            <p class="ending">ENDING: THE TRUTH</p>
        `,
        flags: { ending_truth: true },
        choices: [
            { text: "New Game", target: 1 }
        ]
    },

    122: {
        title: "ENDING: CURE",
        thread: "endings",
        content: `
            <p class="narrative">The vaccine works. The infected can be saved.</p>
            <p class="narrative">Minho was the key all along. His blood. His immunity.</p>
            <p class="narrative">The world begins to heal. Slowly. Painfully. But it heals.</p>
            <p class="ending">ENDING: THE CURE</p>
        `,
        flags: { ending_cure: true },
        choices: [
            { text: "New Game", target: 1 }
        ]
    },

    123: {
        title: "ENDING: NEW BEGINNING",
        thread: "endings",
        content: `
            <p class="narrative">The camp is growing. Survivors are arriving daily.</p>
            <p class="narrative">You've built something here. Something worth protecting.</p>
            <p class="narrative">The world ended. But you didn't. None of you did.</p>
            <p class="ending">ENDING: NEW BEGINNING</p>
        `,
        flags: { ending_new_beginning: true },
        choices: [
            { text: "New Game", target: 1 }
        ]
    },

    124: {
        title: "ENDING: INFECTED",
        thread: "endings",
        content: `
            <p class="narrative">The bite on your arm. You hid it. Hoped it would be different.</p>
            <p class="narrative">It's not different.</p>
            <p class="narrative">You have hours. Maybe less. You spend them saying goodbye.</p>
            <p class="ending">ENDING: INFECTED</p>
        `,
        flags: { ending_infected: true },
        choices: [
            { text: "New Game", target: 1 }
        ]
    },

    201: {
        title: "DEATH: OVERWHELMED",
        thread: "deaths",
        content: `
            <p class="narrative">Too many. Too fast. Teeth everywhere.</p>
            <p class="narrative">The last thing you hear is Minho screaming your name.</p>
            <p class="death">YOU DIED</p>
        `,
        flags: { death_overwhelmed: true },
        choices: [
            { text: "Try Again", target: 1 }
        ]
    },

    202: {
        title: "DEATH: FALL",
        thread: "deaths",
        content: `
            <p class="narrative">The roof gives way. You fall. The ground rises to meet you.</p>
            <p class="narrative">A moment of weightlessness. Then nothing.</p>
            <p class="death">YOU DIED</p>
        `,
        flags: { death_fall: true },
        choices: [
            { text: "Try Again", target: 1 }
        ]
    },

    203: {
        title: "DEATH: STARVATION",
        thread: "deaths",
        content: `
            <p class="narrative">Days without food. Weeks without hope.</p>
            <p class="narrative">Your body gives out before your will does.</p>
            <p class="death">YOU DIED</p>
        `,
        flags: { death_starvation: true },
        choices: [
            { text: "Try Again", target: 1 }
        ]
    },

    204: {
        title: "DEATH: BETRAYED",
        thread: "deaths",
        content: `
            <p class="narrative">The knife in your back. A familiar hand on the hilt.</p>
            <p class="narrative">You trusted the wrong person. The world taught you nothing.</p>
            <p class="death">YOU DIED</p>
        `,
        flags: { death_betrayed: true },
        choices: [
            { text: "Try Again", target: 1 }
        ]
    },

    205: {
        title: "DEATH: INFECTION",
        thread: "deaths",
        content: `
            <p class="narrative">The wound festers. The fever rises. The change begins.</p>
            <p class="narrative">You are becoming what you feared most.</p>
            <p class="death">YOU DIED</p>
        `,
        flags: { death_infection: true },
        choices: [
            { text: "Try Again", target: 1 }
        ]
    },

    206: {
        title: "DEATH: SACRIFICE",
        thread: "deaths",
        content: `
            <p class="narrative">You hold the door. They escape. You don't.</p>
            <p class="narrative">A good death. The only kind worth having.</p>
            <p class="death">YOU DIED</p>
        `,
        flags: { death_sacrifice: true },
        choices: [
            { text: "Try Again", target: 1 }
        ]
    },

    207: {
        title: "DEATH: FIRE",
        thread: "deaths",
        content: `
            <p class="narrative">The flames climb. The exit is blocked.</p>
            <p class="narrative">You tried to burn them out. Burned yourself instead.</p>
            <p class="death">YOU DIED</p>
        `,
        flags: { death_fire: true },
        choices: [
            { text: "Try Again", target: 1 }
        ]
    },

    208: {
        title: "DEATH: EXPLOSION",
        thread: "deaths",
        content: `
            <p class="narrative">The gas leak. The spark. The end.</p>
            <p class="narrative">At least it was quick.</p>
            <p class="death">YOU DIED</p>
        `,
        flags: { death_explosion: true },
        choices: [
            { text: "Try Again", target: 1 }
        ]
    },

    209: {
        title: "DEATH: LOST",
        thread: "deaths",
        content: `
            <p class="narrative">The sewers. The darkness. The wrong turn.</p>
            <p class="narrative">You wander until you can't. Then you stop.</p>
            <p class="death">YOU DIED</p>
        `,
        flags: { death_lost: true },
        choices: [
            { text: "Try Again", target: 1 }
        ]
    },

    210: {
        title: "DEATH: DESPAIR",
        thread: "deaths",
        content: `
            <p class="narrative">You can't. You just can't anymore.</p>
            <p class="narrative">The gun is cold. The choice is easy.</p>
            <p class="narrative">You choose to stop fighting.</p>
            <p class="death">YOU DIED</p>
        `,
        flags: { death_despair: true },
        choices: [
            { text: "Try Again", target: 1 }
        ]
    },

    211: {
        title: "DEATH: DROWNED",
        thread: "deaths",
        content: `
            <p class="narrative">The water rises. The exit is blocked.</p>
            <p class="narrative">Your lungs burn. Your vision fades.</p>
            <p class="narrative">The last thing you see is light dancing on the surface. So close.</p>
            <p class="death">YOU DIED</p>
        `,
        flags: { death_drowned: true },
        choices: [
            { text: "Try Again", target: 1 }
        ]
    },

    212: {
        title: "DEATH: CRUSHED",
        thread: "deaths",
        content: `
            <p class="narrative">The building collapses. Concrete and steel rain down.</p>
            <p class="narrative">You push Minho clear. There isn't time for both of you.</p>
            <p class="narrative">The weight is... final.</p>
            <p class="death">YOU DIED</p>
        `,
        flags: { death_crushed: true },
        choices: [
            { text: "Try Again", target: 1 }
        ]
    },

    213: {
        title: "DEATH: SHOT",
        thread: "deaths",
        content: `
            <p class="narrative">The gunshot echoes. You don't hear it—only feel the impact.</p>
            <p class="narrative">Friend or foe? Does it matter now?</p>
            <p class="narrative">You fall. The world keeps turning without you.</p>
            <p class="death">YOU DIED</p>
        `,
        flags: { death_shot: true },
        choices: [
            { text: "Try Again", target: 1 }
        ]
    },

    214: {
        title: "DEATH: POISONED",
        thread: "deaths",
        content: `
            <p class="narrative">The food was wrong. You knew it tasted wrong.</p>
            <p class="narrative">Too hungry to care. And now this.</p>
            <p class="narrative">Your body shuts down, organ by organ.</p>
            <p class="death">YOU DIED</p>
        `,
        flags: { death_poisoned: true },
        choices: [
            { text: "Try Again", target: 1 }
        ]
    },

    215: {
        title: "DEATH: FROZEN",
        thread: "deaths",
        content: `
            <p class="narrative">The cold seeps in. First your fingers. Then your thoughts.</p>
            <p class="narrative">You stop shivering. That's bad. You remember that's bad.</p>
            <p class="narrative">Sleep sounds nice. Just... rest your eyes...</p>
            <p class="death">YOU DIED</p>
        `,
        flags: { death_frozen: true },
        choices: [
            { text: "Try Again", target: 1 }
        ]
    },

    216: {
        title: "DEATH: AMBUSH",
        thread: "deaths",
        content: `
            <p class="narrative">They were waiting. You walked right into it.</p>
            <p class="narrative">Surrounded. Outnumbered. Outmatched.</p>
            <p class="narrative">You fight. You fall. The difference is seconds.</p>
            <p class="death">YOU DIED</p>
        `,
        flags: { death_ambush: true },
        choices: [
            { text: "Try Again", target: 1 }
        ]
    },

    217: {
        title: "DEATH: EXHAUSTION",
        thread: "deaths",
        content: `
            <p class="narrative">Days without sleep. Miles without rest.</p>
            <p class="narrative">Your body simply... stops. No warning. No fanfare.</p>
            <p class="narrative">You pushed too hard. The human machine has limits.</p>
            <p class="death">YOU DIED</p>
        `,
        flags: { death_exhaustion: true },
        choices: [
            { text: "Try Again", target: 1 }
        ]
    },

    218: {
        title: "DEATH: TRAP",
        thread: "deaths",
        content: `
            <p class="narrative">The wire. You didn't see the wire.</p>
            <p class="narrative">Someone set this. Someone who knew survivors would come this way.</p>
            <p class="narrative">The explosion is almost merciful.</p>
            <p class="death">YOU DIED</p>
        `,
        flags: { death_trap: true },
        choices: [
            { text: "Try Again", target: 1 }
        ]
    },

    219: {
        title: "DEATH: BITTEN",
        thread: "deaths",
        content: `
            <p class="narrative">The teeth sink in. Through skin. Through muscle.</p>
            <p class="narrative">You kill it—too late. The infection is already spreading.</p>
            <p class="narrative">Hours left. Maybe less.</p>
            <p class="death">YOU DIED</p>
        `,
        flags: { death_bitten: true },
        choices: [
            { text: "Try Again", target: 1 }
        ]
    },

    220: {
        title: "DEATH: CHOICE",
        thread: "deaths",
        content: `
            <p class="narrative">Minho or you. The choice is clear.</p>
            <p class="narrative">You choose him. You've always chosen him.</p>
            <p class="narrative">He screams as you let go. But he'll live. That's enough.</p>
            <p class="death">YOU DIED</p>
        `,
        flags: { death_choice: true },
        choices: [
            { text: "Try Again", target: 1 }
        ]
    },

    221: {
        title: "DEATH: MERCY",
        thread: "deaths",
        content: `
            <p class="narrative">You're turning. You can feel it. The hunger. The clarity fading.</p>
            <p class="narrative">You ask Minho. He understands. He cries.</p>
            <p class="narrative">The gun rises. One final mercy.</p>
            <p class="death">YOU DIED</p>
        `,
        flags: { death_mercy: true },
        choices: [
            { text: "Try Again", target: 1 }
        ]
    },

    222: {
        title: "DEATH: ALONE",
        thread: "deaths",
        content: `
            <p class="narrative">No one to watch your back. No one to save you.</p>
            <p class="narrative">They come from everywhere. You fight until you can't.</p>
            <p class="narrative">This is what happens when you go alone.</p>
            <p class="death">YOU DIED</p>
        `,
        flags: { death_alone: true },
        choices: [
            { text: "Try Again", target: 1 }
        ]
    },

    223: {
        title: "DEATH: TRUST",
        thread: "deaths",
        content: `
            <p class="narrative">You trusted them. They smiled. They helped.</p>
            <p class="narrative">Then they took everything. Including your life.</p>
            <p class="narrative">The apocalypse didn't kill humanity. Just revealed it.</p>
            <p class="death">YOU DIED</p>
        `,
        flags: { death_trust: true },
        choices: [
            { text: "Try Again", target: 1 }
        ]
    },

    224: {
        title: "DEATH: DARK",
        thread: "deaths",
        content: `
            <p class="narrative">The lights go out. Something moves in the darkness.</p>
            <p class="narrative">You can't see. You can't fight what you can't see.</p>
            <p class="narrative">The end comes unseen.</p>
            <p class="death">YOU DIED</p>
        `,
        flags: { death_dark: true },
        choices: [
            { text: "Try Again", target: 1 }
        ]
    },

    225: {
        title: "DEATH: HEIGHT",
        thread: "deaths",
        content: `
            <p class="narrative">The ladder breaks. The rope snaps. The edge crumbles.</p>
            <p class="narrative">Gravity is patient. Gravity always wins.</p>
            <p class="narrative">The ground is hard. The end is not.</p>
            <p class="death">YOU DIED</p>
        `,
        flags: { death_height: true },
        choices: [
            { text: "Try Again", target: 1 }
        ]
    },

    226: {
        title: "DEATH: HORDE",
        thread: "deaths",
        content: `
            <p class="narrative">Hundreds. Maybe thousands. A wall of rotting flesh and hunger.</p>
            <p class="narrative">There is no fighting this. There is only running.</p>
            <p class="narrative">You're not fast enough. No one is.</p>
            <p class="death">YOU DIED</p>
        `,
        flags: { death_horde: true },
        choices: [
            { text: "Try Again", target: 1 }
        ]
    },

    227: {
        title: "DEATH: ACCIDENT",
        thread: "deaths",
        content: `
            <p class="narrative">No infected. No enemies. Just bad luck.</p>
            <p class="narrative">A misstep. A wrong move. The world doesn't care about your survival story.</p>
            <p class="narrative">Random. Pointless. Final.</p>
            <p class="death">YOU DIED</p>
        `,
        flags: { death_accident: true },
        choices: [
            { text: "Try Again", target: 1 }
        ]
    },

    228: {
        title: "DEATH: BLEEDING",
        thread: "deaths",
        content: `
            <p class="narrative">The wound won't stop bleeding. You try—pressure, bandages, everything.</p>
            <p class="narrative">Too deep. Too much. Too late.</p>
            <p class="narrative">The world grows dim as the red spreads.</p>
            <p class="death">YOU DIED</p>
        `,
        flags: { death_bleeding: true },
        choices: [
            { text: "Try Again", target: 1 }
        ]
    },

    229: {
        title: "DEATH: SACRIFICE FOR MINHO",
        thread: "deaths",
        content: `
            <p class="narrative">"I love you," you say. And then you push him to safety.</p>
            <p class="narrative">He screams your name. Reaches for you. Too late.</p>
            <p class="narrative">This is how it ends. This is how it should end.</p>
            <p class="death">YOU DIED</p>
        `,
        flags: { death_sacrifice_minho: true },
        choices: [
            { text: "Try Again", target: 1 }
        ]
    },

    230: {
        title: "DEATH: EXPERIMENT",
        thread: "deaths",
        content: `
            <p class="narrative">They caught you. Strapped you down. The needles go in.</p>
            <p class="narrative">"For science," they say. "For humanity."</p>
            <p class="narrative">You stop screaming eventually. Everyone does.</p>
            <p class="death">YOU DIED</p>
        `,
        flags: { death_experiment: true },
        choices: [
            { text: "Try Again", target: 1 }
        ]
    },

    231: {
        title: "DEATH: SICKNESS",
        thread: "deaths",
        content: `
            <p class="narrative">Not the virus. Something else. Something mundane.</p>
            <p class="narrative">Infection. Fever. No medicine. No doctors.</p>
            <p class="narrative">The old killers are still hunting.</p>
            <p class="death">YOU DIED</p>
        `,
        flags: { death_sickness: true },
        choices: [
            { text: "Try Again", target: 1 }
        ]
    },

    232: {
        title: "DEATH: DEHYDRATION",
        thread: "deaths",
        content: `
            <p class="narrative">Three days. That's what they say. Three days without water.</p>
            <p class="narrative">You made it to two. Almost made it to three.</p>
            <p class="narrative">The city had water. You just couldn't get to it.</p>
            <p class="death">YOU DIED</p>
        `,
        flags: { death_dehydration: true },
        choices: [
            { text: "Try Again", target: 1 }
        ]
    },

    233: {
        title: "DEATH: THE END",
        thread: "deaths",
        content: `
            <p class="narrative">This is it. The final moment.</p>
            <p class="narrative">You think of Minho. Of home. Of everything you'll never see again.</p>
            <p class="narrative">Then you think of nothing at all.</p>
            <p class="death">YOU DIED</p>
        `,
        flags: { death_final: true },
        choices: [
            { text: "Try Again", target: 1 }
        ]
    },

    // ========== CORE NAVIGATION SECTIONS ==========
    "prologue": {
        title: "PROLOGUE",
        thread: "main",
        content: `
            <p class="narrative">Seoul. Three days ago, it was a city of ten million.</p>
            <p class="narrative">Now it's a graveyard with survivors.</p>
            <p class="narrative">You are one of them. For now.</p>
        `,
        flags: { game_started: true },
        choices: [
            { text: "Begin.", target: 1 }
        ]
    },

    "credits": {
        title: "CREDITS",
        thread: "meta",
        content: `
            <p class="title">DEAD SEOUL</p>
            <p class="narrative">A survival story.</p>
            <p class="narrative">Written in blood and hope.</p>
            <p class="credit">Thank you for playing.</p>
        `,
        flags: { credits_seen: true },
        choices: [
            { text: "New Game", target: 1 }
        ]
    },

    "continue": {
        title: "CONTINUE",
        thread: "main",
        content: `
            <p class="narrative">The journey continues.</p>
            <p class="narrative">Every step forward is a victory.</p>
        `,
        flags: { continued: true },
        choices: [
            { text: "Press on.", target: 11 }
        ]
    },

    "section_5": {
        title: "CROSSROADS",
        thread: "main",
        content: `
            <p class="narrative">Five paths diverge. Five chances. Five fates.</p>
            <p class="narrative">Choose wisely. Or don't. The dead don't discriminate.</p>
        `,
        flags: { at_section_5: true },
        choices: [
            { text: "North.", target: 6 },
            { text: "South.", target: 7 },
            { text: "East.", target: 8 }
        ]
    },

    // ========== EXTENDED SURVIVOR SECTIONS ==========
    "surv_subway_dark": {
        title: "SUBWAY DARKNESS",
        thread: "survival",
        content: `
            <p class="narrative">The subway tunnels. No light. No sound except dripping water.</p>
            <p class="narrative">And something else. Something breathing.</p>
        `,
        flags: { in_subway: true },
        choices: [
            { text: "Use your flashlight.", target: "luck_test" },
            { text: "Move in darkness.", target: 224 }
        ]
    },

    "surv_alone_dawn": {
        title: "ALONE AT DAWN",
        thread: "survival",
        content: `
            <p class="narrative">The sun rises. You're still alive.</p>
            <p class="narrative">The infected retreat from light. You have hours. Use them.</p>
        `,
        flags: { survived_night: true },
        choices: [
            { text: "Search for supplies.", target: "luck_find" },
            { text: "Find shelter.", target: "surv_shelter" }
        ]
    },

    "surv_following": {
        title: "FOLLOWED",
        thread: "survival",
        content: `
            <p class="narrative">Footsteps behind you. Human footsteps.</p>
            <p class="narrative">Friend or threat? In this world, often the same thing.</p>
        `,
        flags: { being_followed: true },
        choices: [
            { text: "Confront them.", target: "surv_approach" },
            { text: "Lose them.", target: "surv_hide" }
        ]
    },

    "surv_motel_search": {
        title: "MOTEL",
        thread: "survival",
        content: `
            <p class="narrative">The love motel. Garish neon, now dark. Rooms upon rooms.</p>
            <p class="narrative">Privacy. Security. Maybe supplies left behind.</p>
        `,
        flags: { at_motel: true },
        choices: [
            { text: "Search room by room.", target: "luck_find" },
            { text: "Too dangerous.", target: 11 }
        ]
    },

    "surv_self_aid": {
        title: "SELF TREATMENT",
        thread: "survival",
        content: `
            <p class="narrative">No doctor. No nurse. Just you and a first aid kit.</p>
            <p class="narrative">You've watched medical dramas. How hard can it be?</p>
            <p class="narrative">Very. The answer is very hard.</p>
        `,
        flags: { self_treated: true },
        choices: [
            { text: "Do your best.", target: 11 }
        ]
    },

    "surv_patience": {
        title: "WAITING",
        thread: "survival",
        content: `
            <p class="narrative">Sometimes the best move is no move.</p>
            <p class="narrative">You wait. Watch. Let the world show its hand.</p>
        `,
        flags: { waited: true },
        choices: [
            { text: "Continue waiting.", target: "surv_patience" },
            { text: "Move now.", target: 11 }
        ]
    },

    "surv_car_night": {
        title: "CAR NIGHT",
        thread: "survival",
        content: `
            <p class="narrative">An abandoned car. Locked doors. Temporary safety.</p>
            <p class="narrative">You sleep in shifts. Minho first. Then you.</p>
            <p class="narrative">Outside, the infected wander past. Unseeing. For now.</p>
        `,
        flags: { slept_in_car: true },
        choices: [
            { text: "Dawn breaks.", target: "surv_alone_dawn" }
        ]
    },

    "surv_shelter": {
        title: "SHELTER",
        thread: "survival",
        content: `
            <p class="narrative">Four walls. A door that locks. A window to watch from.</p>
            <p class="narrative">Home. For tonight, at least.</p>
        `,
        flags: { found_shelter: true },
        choices: [
            { text: "Rest.", target: 11 }
        ]
    },

    // ========== EXTENDED LOCATION SECTIONS ==========
    "loc_seoul_station_tomb": {
        title: "SEOUL STATION",
        thread: "location",
        content: `
            <p class="narrative">The grand station. Once bustling with commuters.</p>
            <p class="narrative">Now a tomb. Bodies everywhere. Some still moving.</p>
        `,
        flags: { at_seoul_station: true },
        choices: [
            { text: "Push through.", target: 11 },
            { text: "Find another way.", target: "loc_choice" }
        ]
    },

    "loc_rooftop_view": {
        title: "ROOFTOP",
        thread: "location",
        content: `
            <p class="narrative">From up here, you can see everything. The fires. The hordes. The military lines.</p>
            <p class="narrative">Seoul spreads below you like a wound.</p>
            <p class="narrative">Somewhere out there, Busan waits. Safety waits.</p>
        `,
        flags: { saw_rooftop_view: true },
        choices: [
            { text: "Plan your route.", target: 11 }
        ]
    },

    // ========== EXTENDED HANA SECTIONS ==========
    "hana_trust": {
        title: "TRUST EARNED",
        thread: "survivors",
        content: `
            <p class="narrative">Hana stops flinching when you move. Starts sleeping when you're on watch.</p>
            <p class="narrative">Trust. Hard-earned. Precious.</p>
        `,
        flags: { hana_trusts: true },
        choices: [
            { text: "Continue together.", target: 11 }
        ]
    },

    "hana_wary": {
        title: "WARINESS",
        thread: "survivors",
        content: `
            <p class="narrative">Hana watches you. Always watching. Ready to run.</p>
            <p class="narrative">Smart kid. You'd do the same.</p>
        `,
        flags: { hana_wary: true },
        choices: [
            { text: "Give her time.", target: 11 }
        ]
    },

    "hana_past": {
        title: "HANA'S STORY",
        thread: "survivors",
        content: `
            <p class="narrative">"My mom locked me in the closet," Hana says. "Told me not to come out. No matter what."</p>
            <p class="narrative">She pauses. "I heard everything."</p>
            <p class="narrative">Some silences say more than words.</p>
        `,
        flags: { knows_hana_past: true },
        choices: [
            { text: "I'm sorry.", target: 11 }
        ]
    },

    "hana_combat": {
        title: "HANA FIGHTS",
        thread: "survivors",
        content: `
            <p class="narrative">The infected lunges. Before you can react, Hana moves.</p>
            <p class="narrative">The knife she's been hiding. Throat. Clean.</p>
            <p class="narrative">She's been surviving longer than you realized.</p>
        `,
        flags: { hana_killed: true },
        choices: [
            { text: "Good instincts.", target: 11 }
        ]
    },

    "hana_destination": {
        title: "WHERE TO GO",
        thread: "survivors",
        content: `
            <p class="narrative">"Where are we going?" Hana asks.</p>
            <p class="narrative">Good question. Busan. Safety. Hope.</p>
            <p class="narrative">"Somewhere better," you say. She nods. That's enough.</p>
        `,
        flags: { told_hana_plan: true },
        choices: [
            { text: "Keep moving.", target: 11 }
        ]
    },

    // ========== EXTENDED MINJI SECTIONS ==========
    "minji_respect": {
        title: "RESPECT",
        thread: "survivors",
        content: `
            <p class="narrative">Minji doesn't ask for your story. You don't ask for hers.</p>
            <p class="narrative">Mutual respect. The foundation of survival partnerships.</p>
        `,
        flags: { minji_respect: true },
        choices: [
            { text: "Continue.", target: 11 }
        ]
    },

    "minji_silence": {
        title: "SILENT MINJI",
        thread: "survivors",
        content: `
            <p class="narrative">Minji hasn't spoken in hours. Processing. Grieving.</p>
            <p class="narrative">You walk beside her in silence. Sometimes that's enough.</p>
        `,
        flags: { minji_silent: true },
        choices: [
            { text: "Give her space.", target: 11 }
        ]
    },

    "minji_speak": {
        title: "MINJI SPEAKS",
        thread: "survivors",
        content: `
            <p class="narrative">"I was engaged," Minji says suddenly. "He was on the subway when it started."</p>
            <p class="narrative">She doesn't need to finish. You understand.</p>
        `,
        flags: { minji_shared: true },
        choices: [
            { text: "I'm sorry.", target: 11 }
        ]
    },

    "minji_follow": {
        title: "FOLLOWING MINJI",
        thread: "survivors",
        content: `
            <p class="narrative">Minji knows hospitals. Clinics. Where the medicine is.</p>
            <p class="narrative">You follow her lead. Expertise matters.</p>
        `,
        flags: { following_minji: true },
        choices: [
            { text: "Trust her.", target: 11 }
        ]
    },

    "minji_group": {
        title: "GROUP DYNAMICS",
        thread: "survivors",
        content: `
            <p class="narrative">Minho. Minji. You. Three survivors. Three chances.</p>
            <p class="narrative">Together, maybe you'll make it.</p>
        `,
        flags: { group_formed: true },
        choices: [
            { text: "Move as one.", target: 11 }
        ]
    },

    "minji_bond": {
        title: "BOND",
        thread: "survivors",
        content: `
            <p class="narrative">Minji teaches you basic first aid. Pressure points. Wound care.</p>
            <p class="narrative">Knowledge shared is survival multiplied.</p>
        `,
        flags: { minji_taught: true },
        choices: [
            { text: "Thank her.", target: 11 }
        ]
    },

    "minji_promise": {
        title: "PROMISE",
        thread: "survivors",
        content: `
            <p class="narrative">"If I turn," Minji says, "don't hesitate."</p>
            <p class="narrative">You nod. The same promise you've all made.</p>
        `,
        flags: { minji_promise: true },
        choices: [
            { text: "Understood.", target: 11 }
        ]
    },

    // ========== EXTENDED SEORA SECTIONS ==========
    "seora_escape": {
        title: "ESCAPE WITH SEORA",
        thread: "survivors",
        content: `
            <p class="narrative">Seora knows military evacuation routes. Checkpoints. Safe zones.</p>
            <p class="narrative">"Follow me," she says. "I'll get us out."</p>
        `,
        flags: { seora_leading: true },
        choices: [
            { text: "Follow her.", target: 11 }
        ]
    },

    "seora_confront": {
        title: "CONFRONTATION",
        thread: "survivors",
        content: `
            <p class="narrative">"You're hiding something," you say to Seora.</p>
            <p class="narrative">Her jaw tightens. "We all are."</p>
            <p class="narrative">Fair point.</p>
        `,
        flags: { confronted_seora: true },
        choices: [
            { text: "Drop it.", target: 11 },
            { text: "Push harder.", target: "seora_history" }
        ]
    },

    "seora_history": {
        title: "SEORA'S HISTORY",
        thread: "survivors",
        content: `
            <p class="narrative">"My unit was ordered to contain the outbreak," Seora says. "Contain. That's what they called it."</p>
            <p class="narrative">"We shot civilians. Hundreds. Following orders."</p>
            <p class="narrative">Her hands shake. "I stopped following orders."</p>
        `,
        flags: { knows_seora_history: true },
        choices: [
            { text: "That took courage.", target: 11 }
        ]
    },

    "seora_fight": {
        title: "SEORA IN COMBAT",
        thread: "survivors",
        content: `
            <p class="narrative">Seora moves like water. Precise. Lethal.</p>
            <p class="narrative">Three infected drop before you can blink.</p>
            <p class="narrative">"Training," she says. As if that explains everything.</p>
        `,
        flags: { saw_seora_fight: true },
        choices: [
            { text: "Impressive.", target: 11 }
        ]
    },

    "seora_deceive": {
        title: "DECEPTION",
        thread: "survivors",
        content: `
            <p class="narrative">Seora lied. About the route. About the safe zone. About everything.</p>
            <p class="narrative">"I had to," she says. "You wouldn't have come otherwise."</p>
            <p class="narrative">Where has she led you?</p>
        `,
        flags: { seora_deceived: true },
        choices: [
            { text: "Demand answers.", target: "seora_confront" }
        ]
    },

    "seora_talk": {
        title: "TALKING",
        thread: "survivors",
        content: `
            <p class="narrative">Night watch. Just you and Seora. Finally, she opens up.</p>
            <p class="narrative">"I had a daughter," she says. "Had."</p>
            <p class="narrative">The silence that follows says everything.</p>
        `,
        flags: { seora_opened_up: true },
        choices: [
            { text: "I'm sorry.", target: 11 }
        ]
    },

    "seora_assassination": {
        title: "THE MISSION",
        thread: "survivors",
        content: `
            <p class="narrative">"There's a man," Seora says. "Gentech executive. He's responsible for this."</p>
            <p class="narrative">"I'm going to kill him."</p>
            <p class="narrative">Justice or revenge? Does it matter?</p>
        `,
        flags: { knows_seora_mission: true },
        choices: [
            { text: "I'll help.", target: 11 },
            { text: "That's suicide.", target: 11 }
        ]
    },

    "seora_liberation": {
        title: "FREEDOM",
        thread: "survivors",
        content: `
            <p class="narrative">The executive is dead. Seora's mission complete.</p>
            <p class="narrative">She looks... empty. "What now?" she asks.</p>
            <p class="narrative">"We survive," you say. "Together."</p>
        `,
        flags: { seora_mission_complete: true },
        choices: [
            { text: "Move forward.", target: 11 }
        ]
    },

    "seora_retreat": {
        title: "RETREAT",
        thread: "survivors",
        content: `
            <p class="narrative">"Fall back!" Seora shouts. "Too many!"</p>
            <p class="narrative">You run. No shame in retreat. Dead heroes save no one.</p>
        `,
        flags: { retreated: true },
        choices: [
            { text: "Regroup.", target: 11 }
        ]
    },

    // ========== EXTENDED HORROR SECTIONS ==========
    "horror_aftermath": {
        title: "AFTERMATH",
        thread: "horror",
        content: `
            <p class="narrative">The lab is silent now. Whatever happened here... it's over.</p>
            <p class="narrative">But the images won't leave. The screams echo still.</p>
        `,
        flags: { horror_witnessed: true },
        choices: [
            { text: "Leave.", target: 11 }
        ]
    },

    "horror_complicity": {
        title: "COMPLICITY",
        thread: "horror",
        content: `
            <p class="narrative">You found them. The scientists. Still alive. Working.</p>
            <p class="narrative">"We're close to a cure," they say. "We just need more subjects."</p>
            <p class="narrative">They mean people. They mean you.</p>
        `,
        flags: { found_scientists: true },
        choices: [
            { text: "Fight.", target: "surv_fight" },
            { text: "Run.", target: 11 }
        ]
    },

    // ========== EXTENDED NURSERY SECTIONS ==========
    "nursery_mercy": {
        title: "MERCY",
        thread: "horror",
        content: `
            <p class="narrative">The infant is infected. You can see it now. The discoloration. The trembling.</p>
            <p class="narrative">There's only one mercy you can offer.</p>
        `,
        flags: { mercy_given: true },
        choices: [
            { text: "Do what must be done.", target: 11 }
        ]
    },

    "nursery_end": {
        title: "END",
        thread: "horror",
        content: `
            <p class="narrative">You leave the nursery. You don't look back.</p>
            <p class="narrative">Some memories you carry forever. Some you try to bury.</p>
        `,
        flags: { left_nursery: true },
        choices: [
            { text: "Continue.", target: 11 }
        ]
    },

    "nursery_abandon": {
        title: "ABANDONMENT",
        thread: "horror",
        content: `
            <p class="narrative">You walk away. The crying follows you.</p>
            <p class="narrative">Gets quieter. Stops.</p>
            <p class="narrative">You tell yourself you had no choice. Maybe you even believe it.</p>
        `,
        flags: { abandoned_nursery: true },
        choices: [
            { text: "Keep moving.", target: 11 }
        ]
    },

    // ========== EXTENDED MEAL SECTIONS ==========
    "meal_escape": {
        title: "INTERRUPTED",
        thread: "survival",
        content: `
            <p class="narrative">Mid-bite. They find you. No time to finish.</p>
            <p class="narrative">You run with food still in your mouth. Survival is undignified.</p>
        `,
        flags: { meal_interrupted: true },
        choices: [
            { text: "Run.", target: 11 }
        ]
    },

    "meal_rescue": {
        title: "SHARED FOOD",
        thread: "survival",
        content: `
            <p class="narrative">You find them starving. You have food. The choice is obvious.</p>
            <p class="narrative">Your stomach growls. But their gratitude is worth it.</p>
        `,
        flags: { gave_food: true },
        choices: [
            { text: "Continue.", target: 11 }
        ]
    },

    "meal_paralysis": {
        title: "DECISION PARALYSIS",
        thread: "survival",
        content: `
            <p class="narrative">Eat now? Save for later? Share? So many factors.</p>
            <p class="narrative">Sometimes the simplest decisions become impossible.</p>
        `,
        flags: { meal_paralysis: true },
        choices: [
            { text: "Just eat.", target: "meal_eat" },
            { text: "Save it.", target: "meal_save" }
        ]
    },

    // ========== EXTENDED MIRROR SECTIONS ==========
    "mirror_confess": {
        title: "CONFESSION",
        thread: "psychological",
        content: `
            <p class="narrative">You speak to your reflection. Tell it everything.</p>
            <p class="narrative">The guilt. The fear. The things you've done.</p>
            <p class="narrative">It doesn't judge. It just listens.</p>
        `,
        flags: { confessed: true },
        choices: [
            { text: "Continue.", target: 11 }
        ]
    },

    "mirror_leave": {
        title: "LEAVE IT BEHIND",
        thread: "psychological",
        content: `
            <p class="narrative">You turn away from the mirror. From the person you've become.</p>
            <p class="narrative">There's no going back. Only forward.</p>
        `,
        flags: { left_mirror: true },
        choices: [
            { text: "Move on.", target: 11 }
        ]
    },

    "mirror_denial": {
        title: "DENIAL",
        thread: "psychological",
        content: `
            <p class="narrative">That's not you in the mirror. Can't be you.</p>
            <p class="narrative">You're still who you were. The world changed, not you.</p>
            <p class="narrative">Keep telling yourself that.</p>
        `,
        flags: { in_denial: true },
        choices: [
            { text: "Continue.", target: 11 }
        ]
    },

    // ========== EXTENDED SMILE SECTIONS ==========
    "smile_test": {
        title: "TEST",
        thread: "psychological",
        content: `
            <p class="narrative">Can you still smile? Really smile?</p>
            <p class="narrative">You try. It feels wrong. Foreign.</p>
            <p class="narrative">Maybe you've forgotten how.</p>
        `,
        flags: { smile_tested: true },
        choices: [
            { text: "Keep trying.", target: "smile_real" },
            { text: "Give up.", target: "smile_fake" }
        ]
    },

    "smile_run": {
        title: "RUNNING SMILE",
        thread: "psychological",
        content: `
            <p class="narrative">You're running. Infected behind. Death close.</p>
            <p class="narrative">And somehow, you're smiling. The absurdity of it all.</p>
            <p class="narrative">If you're going to die, at least you'll die laughing.</p>
        `,
        flags: { manic_smile: true },
        choices: [
            { text: "Keep running.", target: 11 }
        ]
    },

    "smile_trust": {
        title: "TRUST SMILE",
        thread: "psychological",
        content: `
            <p class="narrative">Minho smiles at you. And you trust it. Completely.</p>
            <p class="narrative">In this world of lies and survival, his smile is truth.</p>
        `,
        flags: { trusted_smile: true },
        choices: [
            { text: "Smile back.", target: "smile_return" }
        ]
    },

    // ========== EXTENDED BACKSTORY SECTIONS ==========
    "backstory_escape": {
        title: "ESCAPE STORY",
        thread: "minho",
        content: `
            <p class="narrative">You tell Minho about day one. The chaos. The running.</p>
            <p class="narrative">How you almost didn't make it. How you did.</p>
            <p class="dialogue">"We're survivors," he says. "That's what we do."</p>
        `,
        flags: { shared_escape: true },
        choices: [
            { text: "Continue.", target: 11 }
        ]
    },

    "backstory_before": {
        title: "BEFORE",
        thread: "minho",
        content: `
            <p class="narrative">Before the outbreak. Before the blood. Who were you?</p>
            <p class="narrative">A student? A worker? Does it matter now?</p>
            <p class="narrative">The past is another country. One you can never return to.</p>
        `,
        flags: { remembered_past: true },
        choices: [
            { text: "Focus on now.", target: 11 }
        ]
    },

    "backstory_resolve": {
        title: "RESOLVE",
        thread: "minho",
        content: `
            <p class="narrative">"Why do you keep going?" Minho asks.</p>
            <p class="narrative">Good question. For him. For hope. For spite.</p>
            <p class="narrative">"Because stopping isn't an option," you say.</p>
        `,
        flags: { resolved: true },
        choices: [
            { text: "Continue.", target: 11 }
        ]
    },

    "backstory_revenge": {
        title: "REVENGE",
        thread: "minho",
        content: `
            <p class="narrative">Someone did this. Someone is responsible.</p>
            <p class="narrative">Gentech. The government. Someone.</p>
            <p class="narrative">Finding them. Making them pay. That's worth surviving for.</p>
        `,
        flags: { revenge_motive: true },
        choices: [
            { text: "They'll pay.", target: 11 }
        ]
    },

    // ========== EXTENDED RESEARCH SECTIONS ==========
    "research_wrong": {
        title: "WRONG TURN",
        thread: "conspiracy",
        content: `
            <p class="narrative">This wasn't supposed to happen. The files show it clearly.</p>
            <p class="narrative">An accident. A containment breach. Human error.</p>
            <p class="narrative">The end of the world was a mistake.</p>
        `,
        flags: { knows_accident: true },
        choices: [
            { text: "Keep reading.", target: "research_files" }
        ]
    },

    "research_unlock": {
        title: "UNLOCKED",
        thread: "conspiracy",
        content: `
            <p class="narrative">The encrypted files. Finally open.</p>
            <p class="narrative">Names. Dates. Locations. Everything you need.</p>
        `,
        flags: { files_unlocked: true },
        choices: [
            { text: "Read everything.", target: "research_files" }
        ]
    },

    "research_success": {
        title: "EVIDENCE GATHERED",
        thread: "conspiracy",
        content: `
            <p class="narrative">You have it all. The proof. The truth.</p>
            <p class="narrative">Now you just need to survive long enough to share it.</p>
        `,
        flags: { has_all_evidence: true },
        choices: [
            { text: "Escape.", target: 11 }
        ]
    },

    // ========== EXTENDED RIDDLE SECTIONS ==========
    "riddle_correct": {
        title: "CORRECT",
        thread: "puzzle",
        content: `
            <p class="narrative">The mechanism clicks. The door opens.</p>
            <p class="narrative">Intelligence wins this round.</p>
        `,
        flags: { riddle_correct: true },
        choices: [
            { text: "Enter.", target: "riddle_reward" }
        ]
    },

    "riddle_close": {
        title: "CLOSE",
        thread: "puzzle",
        content: `
            <p class="narrative">Almost. The mechanism jams. Wrong sequence.</p>
            <p class="narrative">Think. What did you miss?</p>
        `,
        flags: { riddle_almost: true },
        choices: [
            { text: "Try again.", target: "riddle_study" }
        ]
    },

    "riddle_wrong": {
        title: "WRONG",
        thread: "puzzle",
        content: `
            <p class="narrative">Wrong. The mechanism locks tighter.</p>
            <p class="narrative">An alarm? Footsteps? Time to go.</p>
        `,
        flags: { riddle_failed: true },
        choices: [
            { text: "Run.", target: 11 }
        ]
    },

    // ========== EXTENDED LUCK SECTIONS ==========
    "luck_water": {
        title: "WATER",
        thread: "survival",
        content: `
            <p class="narrative">A water fountain. Still working. Cold. Clean.</p>
            <p class="narrative">You drink until you can't. Simple joy.</p>
        `,
        flags: { found_water: true },
        choices: [
            { text: "Fill containers.", target: "luck_find" }
        ]
    },

    "luck_rot": {
        title: "ROTTEN",
        thread: "survival",
        content: `
            <p class="narrative">The food is spoiled. The water contaminated.</p>
            <p class="narrative">Bad luck. Keep looking.</p>
        `,
        flags: { found_rot: true },
        choices: [
            { text: "Search elsewhere.", target: 11 }
        ]
    },

    "luck_observe": {
        title: "WATCHING",
        thread: "survival",
        content: `
            <p class="narrative">You watch. You wait. You learn.</p>
            <p class="narrative">The infected have patterns. Weaknesses. Opportunities.</p>
        `,
        flags: { observed: true },
        choices: [
            { text: "Use what you learned.", target: 11 }
        ]
    },

    "luck_street": {
        title: "STREET FIND",
        thread: "survival",
        content: `
            <p class="narrative">An abandoned bag. Supplies inside. Someone's loss.</p>
            <p class="narrative">You hope they didn't need it. You hope they made it.</p>
            <p class="narrative">You take it anyway.</p>
        `,
        flags: { street_find: true },
        choices: [
            { text: "Keep moving.", target: 11 }
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
