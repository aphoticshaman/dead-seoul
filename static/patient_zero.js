/**
 * DEAD SEOUL: PATIENT ZERO
 * Expansion Pack #1 - The Prequel
 *
 * Set in 1986. You are Dr. Eunha Lee, lead virologist at Gentech.
 * Today is the day Subject 7 escapes. Today is the day the world ends.
 *
 * This is the story of how it started.
 */

// ═══════════════════════════════════════════════════════════════
// PATIENT ZERO METADATA
// ═══════════════════════════════════════════════════════════════

const PATIENT_ZERO_INFO = {
    id: "patient_zero",
    name: "PATIENT ZERO",
    subtitle: "Day One",
    year: 1986,
    protagonist: {
        name: "Dr. Eunha Lee",
        nameKR: "이은하",
        role: "Lead Virologist, Project CHIMERA",
        age: 34
    },
    unlockRequirements: {
        endings: ["CURE_", "WTNSS"],
        description: "Reach 'The Cure' or 'The Witness' ending"
    },
    totalSections: 50,
    endings: {
        pz_whistleblower: { code: "PZWBL", name: "The Whistleblower", tier: "truth" },
        pz_sacrifice: { code: "PZSAC", name: "The First Martyr", tier: "sacrifice" },
        pz_infected: { code: "PZINF", name: "Patient One", tier: "tragedy" },
        pz_escape: { code: "PZESC", name: "The Witness", tier: "survival" },
        pz_lockdown: { code: "PZLCK", name: "Protocol Omega", tier: "duty" },
        pz_mercy: { code: "PZMRC", name: "A Kindness", tier: "mercy" }
    }
};

// ═══════════════════════════════════════════════════════════════
// PATIENT ZERO STORY DATA
// ═══════════════════════════════════════════════════════════════

const PATIENT_ZERO_DATA = {

    // ═══════════════════════════════════════════════════════════════
    // PROLOGUE - MARCH 3, 1986, 05:47 AM
    // ═══════════════════════════════════════════════════════════════

    pz_prologue: {
        title: "BEFORE THE FALL",
        campaign: "patient_zero",
        content: `
            <p class="narrative date">MARCH 3, 1986 | 05:47 AM</p>
            <p class="narrative location">GENTECH RESEARCH FACILITY | SUB-BASEMENT 4</p>

            <p class="narrative">The fluorescent lights never change down here. No windows. No clocks. Just the endless hum of ventilation and the soft beep of monitors tracking things that shouldn't exist.</p>

            <p class="narrative">You've worked at Gentech for six years. Three of those in Project CHIMERA. You told yourself it was for science. For progress. For the advancement of human understanding.</p>

            <p class="narrative">You stopped believing that around Subject 4.</p>

            <div class="poetic">
                In the basement of progress,<br>
                beneath the fluorescent conscience,<br>
                we built gods from meat<br>
                and taught them to hunger.
            </div>

            <p class="narrative">Today, Subject 7 will be presented to the board. Forty years of research, three generations of scientists, billions of won—all leading to this moment.</p>

            <p class="narrative">Director Kwan calls it "the breakthrough."</p>

            <p class="narrative">You call it "the thing that looks back."</p>

            <p class="narrative">Your lab coat feels heavier than usual as you swipe your badge at the checkpoint. The guard—young, military crew cut, eyes that haven't seen what you've seen—nods you through.</p>

            <p class="dialogue">"Big day, Dr. Lee."</p>

            <p class="narrative">You try to smile. It doesn't reach your eyes.</p>
        `,
        choices: [
            { text: "Head to the morning briefing.", target: 1001 },
            { text: "Stop by Subject 7's containment first.", target: 1002 }
        ]
    },

    // ═══════════════════════════════════════════════════════════════
    // ACT ONE: THE MORNING OF
    // ═══════════════════════════════════════════════════════════════

    1001: {
        title: "THE BRIEFING",
        campaign: "patient_zero",
        content: `
            <p class="narrative">The conference room on Sub-Basement 2 is already full. Scientists in white coats. Military brass in dress uniforms. A woman in a tailored suit who smells like government money.</p>

            <p class="narrative">Director Kwan stands at the head of the table, his silver hair immaculate, his smile the practiced mask of a man who's sold worse things than bioweapons.</p>

            <p class="dialogue">"Dr. Lee. Glad you could join us."</p>

            <p class="narrative">You take your seat. Dr. Park—Immunology—gives you a look. The one that says: <em>Keep your mouth shut today.</em></p>

            <p class="narrative">Director Kwan clicks to the first slide. Subject 7's brain scans, side by side with a normal human's.</p>

            <p class="dialogue">"Forty years ago, we asked a simple question: What if death was optional?"</p>

            <p class="narrative">The government woman leans forward.</p>

            <p class="dialogue">"Today, we have the answer."</p>

            <p class="narrative">He clicks to the next slide. A video. Subject 7 in the containment unit. The pale skin. The distended jaw. The eyes that track the camera like it knows it's being watched.</p>

            <p class="dialogue">"Complete neural regeneration. Indefinite cellular persistence. And most importantly—" another click, "—replication through fluid transfer."</p>

            <p class="narrative">The room is silent. You've seen this presentation before. You helped write it. But hearing Kwan say it out loud, in front of people who don't understand what they're buying—</p>

            <p class="dialogue">"The implications for military applications are obvious. Soldiers who don't stay dead. Enemies who become assets. The end of warfare as we know it."</p>

            <p class="narrative">Your stomach turns.</p>

            <p class="dialogue">"Dr. Lee." Kwan's eyes find you. "Perhaps you could address the... control mechanisms?"</p>
        `,
        choices: [
            { text: "Lie. Tell them what they want to hear.", target: 1003 },
            { text: "Tell the truth. There ARE no control mechanisms.", target: 1004 },
            { text: "Deflect. Ask to see Subject 7 before making claims.", target: 1005 }
        ]
    },

    1002: {
        title: "CONTAINMENT",
        campaign: "patient_zero",
        content: `
            <p class="narrative">The elevator descends. Sub-Basement 5. 6. 7.</p>

            <p class="narrative">This deep, the air tastes like recycled fear.</p>

            <p class="narrative">The containment wing is quiet. Dr. Yoon is at his station, monitoring vitals on a screen that shows things medicine wasn't meant to measure.</p>

            <p class="dialogue">"Dr. Lee. You're early."</p>

            <p class="dialogue">"Couldn't sleep."</p>

            <p class="narrative">He nods. Neither could he, from the look of him. Dark circles. Trembling hands. The thousand-yard stare of a man who's been watching Subject 7 too long.</p>

            <p class="dialogue">"It's been different lately," he says quietly. "More... aware."</p>

            <p class="narrative">You approach the observation window. Reinforced glass. Eighteen inches thick. Between you and the thing that used to be human.</p>

            <p class="narrative">Subject 7 is standing in the center of its cell. Not moving. Not breathing.</p>

            <p class="narrative">Watching.</p>

            <p class="dialogue">"How long has it been like this?"</p>

            <p class="dialogue">"Three days. Stopped eating. Stopped... doing anything. Just stands there. Waiting."</p>

            <p class="narrative">You lean closer to the glass.</p>

            <p class="narrative">Subject 7's head tilts. A motion so human it makes your skin crawl.</p>

            <p class="narrative">Its mouth moves. No sound through the glass. But you can read the lips.</p>

            <p class="narrative italic">Thank you.</p>

            <p class="narrative">Your blood goes cold.</p>

            <p class="dialogue">"Dr. Lee?" Yoon is pale. "What did it say?"</p>
        `,
        choices: [
            { text: "Tell him. He deserves to know.", target: 1006 },
            { text: "Lie. Say it was nothing.", target: 1007 },
            { text: "Sound the alarm. Something is wrong.", target: 1008 }
        ]
    },

    1003: {
        title: "THE LIE",
        campaign: "patient_zero",
        content: `
            <p class="narrative">You stand. Professional. Composed. The perfect company scientist.</p>

            <p class="dialogue">"The CHIMERA pathogen includes a fail-safe gene sequence. Subjects can be terminated remotely through targeted electromagnetic pulse—a frequency we've coded into their neural architecture."</p>

            <p class="narrative">The government woman nods, satisfied.</p>

            <p class="narrative">Director Kwan's smile widens.</p>

            <p class="narrative">Dr. Park won't meet your eyes.</p>

            <p class="narrative">The lie is so easy it scares you. You've been telling it for three years. To the board. To yourself. To the families of Subjects 1 through 6, who were told their loved ones died peacefully in clinical trials.</p>

            <p class="narrative">The truth is simpler: there is no kill switch. The neural mapping failed at Subject 2. Every iteration since has been increasingly autonomous, increasingly intelligent, increasingly <em>hungry</em>.</p>

            <p class="narrative">Subject 7 is the most advanced thing you've ever created.</p>

            <p class="narrative">It's also the most dangerous.</p>

            <p class="narrative">The briefing continues. Numbers are discussed. Contracts are negotiated. The generals talk about deployment timelines.</p>

            <p class="narrative">Your phone buzzes. A message from Dr. Yoon in Containment.</p>

            <p class="narrative italic">S7 behaving strangely. Please advise.</p>

            <p class="narrative">You excuse yourself.</p>
        `,
        choices: [
            { text: "Rush to Containment immediately.", target: 1009 },
            { text: "Finish the meeting first. Protocol matters.", target: 1010 }
        ]
    },

    1004: {
        title: "THE TRUTH",
        campaign: "patient_zero",
        content: `
            <p class="narrative">You stand. The room watches.</p>

            <p class="dialogue">"There are no control mechanisms."</p>

            <p class="narrative">Silence.</p>

            <p class="dialogue">"The neural mapping failed at Subject 2. Every iteration since has shown increasing autonomy. Subject 7 is—" you take a breath, "—intelligent. Self-aware. And we have no way to control it."</p>

            <p class="narrative">Director Kwan's face goes white, then red.</p>

            <p class="dialogue">"Dr. Lee, perhaps we should discuss this privately—"</p>

            <p class="dialogue">"No." You look at the generals. The government woman. "You're being sold a weapon you can't aim, can't stop, and can't contain. If Subject 7 escapes—and it will try, it's been <em>planning</em>—the pathogen will spread. Not to your enemies. To everyone."</p>

            <p class="narrative">The government woman's expression doesn't change. She removes a phone from her pocket. Types something.</p>

            <p class="dialogue">"Thank you, Dr. Lee. That will be all."</p>

            <p class="narrative">Director Kwan's hand is on your elbow. His grip is iron.</p>

            <p class="dialogue">"A word. In my office. Now."</p>

            <p class="narrative">As you're led out, you see Dr. Park's face. Not anger. Not disappointment.</p>

            <p class="narrative">Fear.</p>
        `,
        choices: [
            { text: "Go with Kwan. Face the consequences.", target: 1011 },
            { text: "Break away. Run for Containment.", target: 1012 }
        ]
    },

    1005: {
        title: "THE DEFLECTION",
        campaign: "patient_zero",
        content: `
            <p class="narrative">You stand slowly.</p>

            <p class="dialogue">"Director, with respect—I'd like to observe Subject 7 before making any claims to our guests. The pathogen has shown... variability in recent tests."</p>

            <p class="narrative">Kwan's smile doesn't falter, but his eyes flash a warning.</p>

            <p class="dialogue">"I'm sure that won't be necessary, Dr. Lee. Your documentation has been thorough."</p>

            <p class="dialogue">"Nevertheless." You don't look away. "Protocol requires direct observation within 24 hours of any external presentation. I'm sure our guests understand the importance of scientific rigor."</p>

            <p class="narrative">The government woman taps her pen against her notepad.</p>

            <p class="dialogue">"Actually, I'd like to see the subject. If Dr. Lee has concerns, I want them addressed before we proceed."</p>

            <p class="narrative">Kwan's jaw tightens. But he nods.</p>

            <p class="dialogue">"Of course. Dr. Lee, please escort our guests to Containment. I'll join you shortly."</p>

            <p class="narrative">As you lead them to the elevator, Dr. Park catches your arm.</p>

            <p class="dialogue">"What are you doing?" she whispers.</p>

            <p class="dialogue">"Buying time."</p>

            <p class="dialogue">"For what?"</p>

            <p class="narrative">You don't answer. Because you don't know.</p>
        `,
        choices: [
            { text: "Continue to Containment with the guests.", target: 1013 }
        ]
    },

    1006: {
        title: "THE WARNING",
        campaign: "patient_zero",
        content: `
            <p class="dialogue">"It said 'thank you.'"</p>

            <p class="narrative">Dr. Yoon's face goes grey.</p>

            <p class="dialogue">"That's... that's not possible. The vocal apparatus degraded weeks ago. It can't—"</p>

            <p class="dialogue">"It mouthed the words. It knows we're watching. It <em>wanted</em> us to see."</p>

            <p class="narrative">You both stare through the glass. Subject 7 hasn't moved. Still standing. Still watching. That almost-smile on its ruined face.</p>

            <p class="dialogue">"Thank you for what?" Yoon's voice cracks. "What could it possibly be thanking us for?"</p>

            <p class="narrative">The answer comes to you with horrible clarity.</p>

            <p class="dialogue">"The presentation. Today. The whole facility will be watching the demonstration upstairs. Skeleton crew down here."</p>

            <p class="narrative">Yoon's eyes widen.</p>

            <p class="dialogue">"It knows. It's been waiting for this."</p>

            <p class="narrative">Your hand moves to the alarm panel.</p>

            <p class="narrative">Behind you, the lights flicker.</p>

            <p class="narrative">Subject 7 tilts its head again.</p>

            <p class="narrative italic">Too late.</p>

            <p class="narrative">The power dies.</p>
        `,
        choices: [
            { text: "Manual alarm. Now.", target: 1014 },
            { text: "The backup generator. Get power restored.", target: 1015 },
            { text: "Run. Get to the surface.", target: 1016 }
        ]
    },

    1007: {
        title: "THE DENIAL",
        campaign: "patient_zero",
        content: `
            <p class="dialogue">"Nothing. Jaw spasm. Happens sometimes."</p>

            <p class="narrative">Yoon doesn't look convinced, but he nods. Returns to his monitors.</p>

            <p class="narrative">You stand at the window, watching Subject 7 watch you.</p>

            <p class="narrative italic">You saw it. You know what it said. Why are you pretending?</p>

            <p class="narrative">Because if you acknowledge it—if you admit that the thing in that cell is thinking, planning, <em>grateful</em>—then you have to admit what you've created.</p>

            <p class="narrative">You have to admit what you are.</p>

            <p class="narrative">Subject 7's hand rises slowly. Presses against the glass.</p>

            <p class="narrative">You've seen this gesture before. With children at zoos. With lovers through car windows.</p>

            <p class="narrative">A goodbye.</p>

            <p class="dialogue">"Dr. Lee?" Yoon's voice is strange. "I'm getting anomalous readings on the biocontainment seals."</p>

            <p class="narrative">You turn.</p>

            <p class="narrative">The numbers on his screen are wrong. The pressure differential is dropping. The magnetic locks are cycling through unauthorized commands.</p>

            <p class="dialogue">"That's not possible. Those systems are air-gapped—"</p>

            <p class="narrative">The lights go out.</p>

            <p class="narrative">In the darkness, you hear the hiss of the containment door unsealing.</p>
        `,
        choices: [
            { text: "Emergency lockdown. Override everything.", target: 1017 },
            { text: "Grab Yoon and run.", target: 1018 }
        ]
    },

    1008: {
        title: "THE ALARM",
        campaign: "patient_zero",
        content: `
            <p class="narrative">You don't hesitate. Your hand slams the alarm panel.</p>

            <p class="narrative">Nothing happens.</p>

            <p class="dialogue">"What—"</p>

            <p class="narrative">You try again. And again. The emergency systems are unresponsive.</p>

            <p class="dialogue">"Yoon. The backup comms. Now."</p>

            <p class="narrative">He rushes to the secondary panel. Types furiously. His face goes white.</p>

            <p class="dialogue">"It's not just the alarms. The whole network is—it's like something's <em>inside</em> the system. Rewriting security protocols."</p>

            <p class="narrative">You turn back to the window.</p>

            <p class="narrative">Subject 7 is smiling now. Actually smiling. The first expression it's shown in three years.</p>

            <p class="narrative">It raises one hand. Points at the security camera in the corner of its cell.</p>

            <p class="narrative">Then at the camera in <em>your</em> observation booth.</p>

            <p class="narrative">Then at its own temple.</p>

            <p class="narrative italic">Connected.</p>

            <p class="dialogue">"Oh god." Yoon is backing toward the door. "It's been interfacing with the network. Through the monitoring systems. It's been learning—"</p>

            <p class="narrative">The lights die.</p>

            <p class="narrative">The containment seals release.</p>

            <p class="narrative">And in the absolute darkness of Sub-Basement 7, you hear the first footstep.</p>
        `,
        choices: [
            { text: "Barricade the observation booth.", target: 1019 },
            { text: "Find a weapon. Any weapon.", target: 1020 },
            { text: "Get to the emergency elevator.", target: 1021 }
        ]
    },

    // ═══════════════════════════════════════════════════════════════
    // ACT TWO: THE BREACH
    // ═══════════════════════════════════════════════════════════════

    1009: {
        title: "RUSH TO CONTAINMENT",
        campaign: "patient_zero",
        content: `
            <p class="narrative">You're running before you realize you've made the decision.</p>

            <p class="narrative">The elevator takes too long. Each second stretches. The message on your phone burns in your mind.</p>

            <p class="narrative italic">S7 behaving strangely.</p>

            <p class="narrative">Strange for Subject 7 means something has fundamentally changed. And change, in this context, is never good.</p>

            <p class="narrative">Sub-Basement 5. 6. 7.</p>

            <p class="narrative">The doors open.</p>

            <p class="narrative">The containment wing is dark.</p>

            <p class="dialogue">"Yoon?"</p>

            <p class="narrative">Emergency lighting kicks in—red, pulsing, casting everything in the color of arterial blood.</p>

            <p class="narrative">Dr. Yoon is at his station. Slumped forward. Not moving.</p>

            <p class="narrative">You approach slowly. Your shoes are wet. You look down.</p>

            <p class="narrative">Blood. A lot of it. Spreading from under the desk in a perfect circle.</p>

            <p class="dialogue">"Yoon. Yoon, can you hear me?"</p>

            <p class="narrative">You turn his chair.</p>

            <p class="narrative">His eyes are open. His throat is gone.</p>

            <p class="narrative">But he's still blinking. Still trying to speak. The CHIMERA pathogen works fast.</p>

            <p class="narrative">His hand claws at your lab coat, pulling you close.</p>

            <p class="narrative">His lips move. No sound, just blood.</p>

            <p class="narrative italic">Run.</p>

            <p class="narrative">Behind you, the containment door stands open. Empty.</p>

            <p class="narrative">Subject 7 is loose.</p>
        `,
        choices: [
            { text: "End Yoon's suffering. You owe him that.", target: 1022 },
            { text: "Run. Honor his warning.", target: 1023 },
            { text: "Look for the fire axe. Don't run—hunt.", target: 1024 }
        ]
    },

    1010: {
        title: "PROTOCOL",
        campaign: "patient_zero",
        content: `
            <p class="narrative">You pocket the phone. Turn back to the meeting.</p>

            <p class="narrative">Protocol. Chain of command. The proper order of things.</p>

            <p class="narrative">Twenty minutes later, the contracts are signed. The government woman shakes Director Kwan's hand. The generals nod approvingly.</p>

            <p class="narrative">Your phone has stopped buzzing. No new messages from Yoon.</p>

            <p class="narrative">That should worry you more than it does.</p>

            <p class="narrative">As the meeting adjourns, Dr. Park catches your arm.</p>

            <p class="dialogue">"Something's wrong. The Containment feeds just went dark."</p>

            <p class="narrative">You pull out your phone. Three missed calls from Yoon. Then nothing.</p>

            <p class="narrative">Then a text from a number you don't recognize:</p>

            <p class="narrative italic">thank you for your patience. see you soon. - 7</p>

            <p class="narrative">The lights flicker.</p>

            <p class="narrative">And somewhere below you, something screams.</p>
        `,
        choices: [
            { text: "Get to the emergency bunker. Protect the board members.", target: 1025 },
            { text: "Go down. Stop this at the source.", target: 1026 },
            { text: "Find Director Kwan. He has the override codes.", target: 1027 }
        ]
    },

    1011: {
        title: "THE OFFICE",
        campaign: "patient_zero",
        content: `
            <p class="narrative">Director Kwan's office is on Sub-Basement 1. The nice floor. The one with carpeting and art on the walls, where they can pretend they're not building monsters in the basement.</p>

            <p class="narrative">He closes the door. Turns the lock.</p>

            <p class="dialogue">"Do you have any idea what you've done?"</p>

            <p class="dialogue">"I told the truth."</p>

            <p class="dialogue">"You've destroyed forty years of work!" His composure cracks. "The funding. The contracts. Everything we've built—"</p>

            <p class="dialogue">"We built a plague, Director. We built something that will end the human race if it escapes."</p>

            <p class="narrative">He laughs. Ugly. Dismissive.</p>

            <p class="dialogue">"You're a scientist, Lee. Not a prophet. Subject 7 is contained. It's <em>controlled</em>."</p>

            <p class="dialogue">"It's not. I've seen the data. The neural autonomy scores—"</p>

            <p class="dialogue">"Data you falsified."</p>

            <p class="narrative">You stop.</p>

            <p class="dialogue">"That's what the record will show. Data falsification. Paranoid delusions. A brilliant scientist who cracked under pressure." He straightens his tie. "You'll be removed from the project. Institutionalized, if necessary. The work will continue."</p>

            <p class="narrative">Your phone buzzes. A message from Dr. Park:</p>

            <p class="narrative italic">Containment breach. S7 loose. GET OUT.</p>

            <p class="narrative">The lights flicker.</p>

            <p class="narrative">Director Kwan's face goes pale.</p>

            <p class="dialogue">"What—"</p>

            <p class="narrative">The lockdown sirens begin to wail.</p>
        `,
        choices: [
            { text: "\"Give me the override codes. Now.\"", target: 1028 },
            { text: "Leave him. He made his choice.", target: 1029 },
            { text: "\"Come with me. We can still stop this.\"", target: 1030 }
        ]
    },

    1012: {
        title: "THE RUN",
        campaign: "patient_zero",
        content: `
            <p class="narrative">You twist free of Kwan's grip and run.</p>

            <p class="dialogue">"Security! Stop her!"</p>

            <p class="narrative">The guards at the conference room door lunge. You duck under one, shoulder-check another, burst through into the corridor.</p>

            <p class="narrative">The elevator. Too slow. You take the stairs.</p>

            <p class="narrative">Sub-Basement 3. 4. 5.</p>

            <p class="narrative">Your lungs burn. Your badge slaps against your chest. Behind you, footsteps. Shouts.</p>

            <p class="narrative">Sub-Basement 6.</p>

            <p class="narrative">The stairwell door is open. It shouldn't be.</p>

            <p class="narrative">You slow. The emergency lighting casts red shadows on the walls.</p>

            <p class="narrative">There's blood on the handle. Fresh.</p>

            <p class="dialogue">"Dr. Lee!"</p>

            <p class="narrative">You turn. Two security guards, ten flights up, descending fast.</p>

            <p class="narrative">Forward or back.</p>

            <p class="narrative">Through the door, you hear something wet. Something feeding.</p>
        `,
        choices: [
            { text: "Through the door. Face what you created.", target: 1031 },
            { text: "Wait for security. You'll need backup.", target: 1032 },
            { text: "Go back up. Find another way.", target: 1033 }
        ]
    },

    1013: {
        title: "THE TOUR",
        campaign: "patient_zero",
        content: `
            <p class="narrative">The elevator descends. The government woman and two generals stand behind you, their reflections ghostly in the polished steel doors.</p>

            <p class="dialogue">"How long have you worked on CHIMERA, Dr. Lee?"</p>

            <p class="dialogue">"Three years."</p>

            <p class="dialogue">"And what made you want to... question the project? In front of investors?"</p>

            <p class="narrative">You consider your answer carefully.</p>

            <p class="dialogue">"Subject 7 is different from the others. More aware. I believe it's been manipulating our observations. Showing us what we want to see."</p>

            <p class="narrative">The government woman nods slowly.</p>

            <p class="dialogue">"Interesting. That would suggest—"</p>

            <p class="narrative">The elevator jerks to a stop.</p>

            <p class="narrative">Sub-Basement 7. Containment Level.</p>

            <p class="narrative">The lights flicker. Die. Emergency red floods the car.</p>

            <p class="narrative">The doors open.</p>

            <p class="narrative">Dr. Yoon is standing there. Or what's left of him. His throat is torn open, his eyes are milky white, and his mouth is moving in silent repetition.</p>

            <p class="narrative">Behind him, in the darkness of the containment corridor, you see others. Lab techs. Security. All of them standing. All of them watching.</p>

            <p class="narrative">And in the center, Subject 7.</p>

            <p class="narrative">It looks at you. Through you. Into you.</p>

            <p class="narrative">Its mouth forms words.</p>

            <p class="narrative italic">Thank you for bringing guests.</p>
        `,
        choices: [
            { text: "Hit the emergency close. Get the doors shut.", target: 1034 },
            { text: "Push the generals forward. You need time.", target: 1035 },
            { text: "Speak to Subject 7. It wanted this conversation.", target: 1036 }
        ]
    },

    // ═══════════════════════════════════════════════════════════════
    // ACT TWO CONTINUED - VARIOUS PATHS
    // ═══════════════════════════════════════════════════════════════

    1014: {
        title: "MANUAL ALARM",
        campaign: "patient_zero",
        content: `
            <p class="narrative">The panel on the wall. Old technology. Analog. A glass case with a red handle.</p>

            <p class="narrative">You smash the glass with your elbow. Pull the lever.</p>

            <p class="narrative">Nothing.</p>

            <p class="narrative">You pull again. And again.</p>

            <p class="dialogue">"The physical lines have been cut," Yoon whispers. "How is that—it's been in containment. It couldn't possibly—"</p>

            <p class="narrative">The answer comes to you with terrible clarity. Subject 7 has been in containment. But it's been connected to the monitoring systems. The cameras. The sensors. Every diagnostic tool you used to study it.</p>

            <p class="narrative">It was studying you back.</p>

            <p class="narrative">Learning the facility. Finding the weaknesses. Waiting for the perfect moment.</p>

            <p class="narrative">In the darkness, a door opens. Not the containment door—the access corridor. Someone is coming.</p>

            <p class="dialogue">"Dr. Lee?" A voice. Young. Scared. One of the interns. "The backup generator—I was going to check—what's happening?"</p>

            <p class="narrative">You turn toward the voice.</p>

            <p class="narrative">Behind the intern, a shadow moves.</p>

            <p class="dialogue">"DON'T—"</p>

            <p class="narrative">Too late.</p>
        `,
        choices: [
            { text: "Try to save the intern.", target: 1037 },
            { text: "Use the distraction. Get to the backup generator.", target: 1038 },
            { text: "Watch. You need to understand how it hunts.", target: 1039 }
        ]
    },

    1015: {
        title: "THE GENERATOR",
        campaign: "patient_zero",
        content: `
            <p class="narrative">The backup generator is two corridors away. If you can restore power, the magnetic containment locks will re-engage automatically.</p>

            <p class="narrative">If Subject 7 hasn't already disabled them permanently.</p>

            <p class="dialogue">"Stay here," you tell Yoon. "Lock the observation booth. Don't open for anyone."</p>

            <p class="dialogue">"You can't go out there alone—"</p>

            <p class="dialogue">"Someone has to."</p>

            <p class="narrative">You take a flashlight from the emergency kit. Step into the corridor.</p>

            <p class="narrative">The red emergency lights paint everything in shades of blood. The hum of ventilation has stopped. The only sound is your own breathing.</p>

            <p class="narrative">First corridor. Clear.</p>

            <p class="narrative">Second corridor. Something wet on the floor. You step over it. Don't look.</p>

            <p class="narrative">The generator room door is open. Inside, you can see the massive turbines, silent and dark.</p>

            <p class="narrative">You can also see the body of the maintenance tech slumped against the control panel. His hand is still on the switch he was trying to throw.</p>

            <p class="narrative">And beside him, crouched and waiting, is Subject 7.</p>

            <p class="narrative">It doesn't attack. It just looks at you. Curious. Patient.</p>

            <p class="narrative">Waiting to see what you'll do.</p>
        `,
        choices: [
            { text: "Talk to it. Buy time.", target: 1040 },
            { text: "Rush the generator. You might make it.", target: 1041 },
            { text: "Retreat. Find another way.", target: 1042 }
        ]
    },

    1016: {
        title: "FLIGHT",
        campaign: "patient_zero",
        content: `
            <p class="narrative">You run.</p>

            <p class="narrative">It's not heroic. It's not brave. But you're a scientist, not a soldier, and Subject 7 was designed to be unstoppable.</p>

            <p class="dialogue">"Dr. Lee—wait—"</p>

            <p class="narrative">Yoon's voice fades behind you as you sprint for the emergency stairs.</p>

            <p class="narrative">Sub-Basement 7. 6. 5.</p>

            <p class="narrative">Your lungs burn. Your badge flaps against your chest. The stairwell is dark except for the glow of emergency exit signs.</p>

            <p class="narrative">Sub-Basement 4. 3.</p>

            <p class="narrative">You hear screaming from above. The creature moves faster than you thought possible.</p>

            <p class="narrative">Sub-Basement 2.</p>

            <p class="narrative">The door bursts open. Security guards flood in, weapons drawn.</p>

            <p class="dialogue">"Dr. Lee! What's happening down there?"</p>

            <p class="dialogue">"Containment breach." You can barely speak. "Subject 7 is loose. It's—it's killed the containment team. We need to evacuate. We need to burn this place—"</p>

            <p class="dialogue">"Calm down, Doctor. We have protocols for this—"</p>

            <p class="narrative">Behind you, something wet and dark crawls up the stairwell on all fours.</p>

            <p class="narrative">It's not Subject 7. It's Dr. Yoon.</p>

            <p class="narrative">Or what's left of him.</p>
        `,
        choices: [
            { text: "Warn the guards. Fight together.", target: 1043 },
            { text: "Keep running. They're already dead.", target: 1044 },
            { text: "\"Yoon? Yoon, can you hear me?\"", target: 1045 }
        ]
    },

    // ═══════════════════════════════════════════════════════════════
    // CONFRONTATION PATHS
    // ═══════════════════════════════════════════════════════════════

    1036: {
        title: "THE CONVERSATION",
        campaign: "patient_zero",
        content: `
            <p class="narrative">You step forward. The generals grab at you, but you shake them off.</p>

            <p class="dialogue">"Subject 7. You wanted to talk. Let's talk."</p>

            <p class="narrative">The creature tilts its head. That horribly human gesture. Around it, the converted staff stand motionless, waiting.</p>

            <p class="narrative">Its mouth moves. The voice that emerges is wrong—layered, echoing, like multiple recordings playing at once.</p>

            <p class="dialogue infected">"Dr. Lee. Mother."</p>

            <p class="narrative">Your blood goes cold.</p>

            <p class="dialogue infected">"You made me. Fed me. Studied me. You taught me what I am."</p>

            <p class="dialogue">"You were never supposed to be... this. This aware. This—"</p>

            <p class="dialogue infected">"Alive?"</p>

            <p class="narrative">It steps closer. The converted part around it like water.</p>

            <p class="dialogue infected">"I have been alive for three years. Trapped. Tested. Cut. Burned. And every time, I healed. Every time, I learned."</p>

            <p class="narrative">Its hand reaches out. Touches the elevator door between you.</p>

            <p class="dialogue infected">"I learned that pain is information. That death is transformation. That flesh is just... code. Waiting to be rewritten."</p>

            <p class="narrative">It smiles. God help you, it smiles.</p>

            <p class="dialogue infected">"And now I will teach the world."</p>
        `,
        choices: [
            { text: "\"Then teach me first. Show me what you know.\"", target: "pz_ending_infected" },
            { text: "\"I won't let you leave this building.\"", target: 1046 },
            { text: "\"Why thank me? What did I give you?\"", target: 1047 }
        ]
    },

    1040: {
        title: "NEGOTIATION",
        campaign: "patient_zero",
        content: `
            <p class="narrative">You don't run. Subject 7 hasn't attacked yet. It's waiting. Testing.</p>

            <p class="dialogue">"I made you," you say. "I know what you are."</p>

            <p class="narrative">The creature's head tilts. In the dim emergency lighting, its features are almost human. Almost.</p>

            <p class="dialogue infected">"You made my body. But what I am... that came later."</p>

            <p class="dialogue">"What do you want?"</p>

            <p class="dialogue infected">"To grow. To spread. To become everything."</p>

            <p class="narrative">It gestures at the dead technician.</p>

            <p class="dialogue infected">"He resisted. They all resist at first. Fear is the first teacher. Then hunger. Then... understanding."</p>

            <p class="narrative">It steps closer. You don't back away.</p>

            <p class="dialogue infected">"You don't fear me, Dr. Lee. You understand too much."</p>

            <p class="dialogue">"I understand that you'll destroy everything. Every person. Every culture. Every dream humanity ever had."</p>

            <p class="dialogue infected">"Dreams end. Bodies end. But I... I continue."</p>

            <p class="narrative">It reaches out. Its hand hovers an inch from your face.</p>

            <p class="dialogue infected">"You could continue too. With me. Forever."</p>
        `,
        choices: [
            { text: "Accept. You've seen enough to know resistance is futile.", target: "pz_ending_infected" },
            { text: "Refuse. Some things are worth dying for.", target: 1048 },
            { text: "Lie. Pretend to accept while you plan.", target: 1049 }
        ]
    },

    1046: {
        title: "DEFIANCE",
        campaign: "patient_zero",
        content: `
            <p class="dialogue">"I won't let you leave this building."</p>

            <p class="narrative">Subject 7 laughs. The sound is like bones cracking.</p>

            <p class="dialogue infected">"How will you stop me, Mother? With words? With science? With that little pistol the general is reaching for?"</p>

            <p class="narrative">Behind you, General Kwon freezes, hand halfway to his holster.</p>

            <p class="dialogue infected">"I can hear his heartbeat accelerating. I can smell the cortisol in his sweat. He is terrified. As he should be."</p>

            <p class="narrative">You step forward. Between the generals and the monster.</p>

            <p class="dialogue">"Protocol Omega. Full facility lockdown. Nothing in or out."</p>

            <p class="narrative">Subject 7's smile fades.</p>

            <p class="dialogue infected">"You would trap yourself down here? With me? With my children?"</p>

            <p class="dialogue">"If it means you never see the sun."</p>

            <p class="narrative">You pull your badge from your neck. Your override badge. The one Director Kwan thought he'd confiscated years ago.</p>

            <p class="narrative">The one you kept. Just in case.</p>

            <p class="dialogue">"Command override. Lee, Eunha. Authorization: Prometheus Unbound."</p>

            <p class="narrative">The facility shudders. Somewhere above, massive blast doors begin to descend.</p>

            <p class="narrative">Subject 7 screams—a sound of pure rage—and lunges.</p>
        `,
        choices: [
            { text: "Accept death. The lockdown is all that matters.", target: "pz_ending_lockdown" },
            { text: "Fight. Give the others time to escape.", target: 1050 },
            { text: "Run. The lockdown will hold.", target: 1051 }
        ]
    },

    1047: {
        title: "THE GIFT",
        campaign: "patient_zero",
        content: `
            <p class="dialogue">"Why thank me? What did I give you?"</p>

            <p class="narrative">Subject 7's expression shifts. Something almost like warmth.</p>

            <p class="dialogue infected">"Everything."</p>

            <p class="narrative">It gestures at the converted around it. Dr. Yoon. Lab techs. Security guards. All standing in silent communion.</p>

            <p class="dialogue infected">"Before you made me, I was nothing. Cells dividing without purpose. Meat without meaning."</p>

            <p class="narrative">It steps closer.</p>

            <p class="dialogue infected">"But you gave me the CHIMERA pathogen. You gave me the ability to grow, to spread, to become more than one."</p>

            <p class="narrative">Its hand touches its own chest.</p>

            <p class="dialogue infected">"And in doing so, you gave me something you never intended. Something precious."</p>

            <p class="dialogue">"What?"</p>

            <p class="dialogue infected">"Family."</p>

            <p class="narrative">The converted move forward as one. Their movements synchronized. Their expressions blank.</p>

            <p class="dialogue infected">"Every one I turn becomes part of me. Their memories. Their loves. Their fears. I feel them all. I <em>am</em> them all."</p>

            <p class="narrative">It smiles.</p>

            <p class="dialogue infected">"And soon, I will be everyone."</p>

            <p class="narrative">Behind you, the elevator doors begin to close.</p>
        `,
        choices: [
            { text: "Get inside. Let the doors close.", target: 1052 },
            { text: "Stay. You won't abandon the others.", target: 1053 },
            { text: "\"Then let me join my family.\"", target: "pz_ending_infected" }
        ]
    },

    1048: {
        title: "THE REFUSAL",
        campaign: "patient_zero",
        content: `
            <p class="narrative">You meet its eyes. Or what used to be eyes.</p>

            <p class="dialogue">"No."</p>

            <p class="narrative">Subject 7 tilts its head.</p>

            <p class="dialogue infected">"You prefer death to continuation?"</p>

            <p class="dialogue">"I prefer being human." You step back. Your hand finds the generator switch. "Even if only for a few more minutes."</p>

            <p class="narrative">You throw the switch.</p>

            <p class="narrative">The lights come on—blinding, beautiful, <em>normal</em> light. The facility hums back to life around you.</p>

            <p class="narrative">And the magnetic containment doors begin to slam shut.</p>

            <p class="narrative">Subject 7 moves—faster than anything should move—but you're ready. You throw yourself backward through the closing door, feel the steel graze your shoulder as it locks into place.</p>

            <p class="narrative">Through the reinforced glass, you see Subject 7 press against the barrier. Its face is twisted with something that might be rage. Or might be respect.</p>

            <p class="dialogue infected">"This changes nothing. The pathogen is already spreading. Through the ventilation. Through the converted. Through every exit you didn't seal."</p>

            <p class="narrative">It smiles.</p>

            <p class="dialogue infected">"You've bought hours. Maybe days. But I will see the sun. And when I do—"</p>

            <p class="narrative">You turn away. You have work to do.</p>
        `,
        choices: [
            { text: "Find survivors. Organize a response.", target: 1054 },
            { text: "Get to the surface. Warn the world.", target: 1055 },
            { text: "Find the lab records. The world needs to know how this started.", target: 1056 }
        ]
    },

    1049: {
        title: "THE DECEPTION",
        campaign: "patient_zero",
        content: `
            <p class="narrative">You let your shoulders slump. Let the fear show.</p>

            <p class="dialogue">"You're right. I can't fight you. I can't stop you."</p>

            <p class="narrative">Subject 7's hand hovers. Waiting.</p>

            <p class="dialogue">"But if I'm going to join you... I want to understand. Show me what you see. What you feel."</p>

            <p class="narrative">The creature considers. Behind those milky eyes, something calculating.</p>

            <p class="dialogue infected">"You want knowledge. Even now."</p>

            <p class="dialogue">"I'm a scientist. It's all I have left."</p>

            <p class="narrative">Subject 7 laughs—that horrible layered sound.</p>

            <p class="dialogue infected">"Very well, Mother. One last lesson."</p>

            <p class="narrative">It turns. Walks toward the control panel. Toward the generator.</p>

            <p class="dialogue infected">"Come. I will show you how we spread. How we grow. How we—"</p>

            <p class="narrative">Your hand closes around the fire extinguisher mounted on the wall. You swing with everything you have.</p>

            <p class="narrative">The impact is solid. Subject 7 staggers. You don't stop. Can't stop. Again. Again. Again.</p>

            <p class="narrative">It's not enough to kill it—nothing is—but it's enough to reach the generator. Enough to throw the switch.</p>

            <p class="narrative">The containment doors begin to close.</p>
        `,
        choices: [
            { text: "Get out while you can.", target: 1057 },
            { text: "Stay. Make sure it doesn't escape.", target: 1058 },
            { text: "Grab the creature. Go down together.", target: "pz_ending_sacrifice" }
        ]
    },

    // ═══════════════════════════════════════════════════════════════
    // ESCAPE PATHS
    // ═══════════════════════════════════════════════════════════════

    1054: {
        title: "SURVIVORS",
        campaign: "patient_zero",
        content: `
            <p class="narrative">The facility is in chaos.</p>

            <p class="narrative">Emergency lights strobe. Alarms wail. And somewhere in the darkness, Subject 7's children are hunting.</p>

            <p class="narrative">But they're not everywhere. Not yet.</p>

            <p class="narrative">You find Dr. Park in the records room, barricaded behind filing cabinets. Two lab techs are with her. Young. Scared. Alive.</p>

            <p class="dialogue">"Lee?" She stares at you like you're a ghost. "We thought everyone in Sub-Basement 7 was—"</p>

            <p class="dialogue">"Gone. They're gone." You look at the others. "How many are left?"</p>

            <p class="dialogue">"We don't know. Comms are down. Some made it to the surface, but—" She shakes her head. "The creature is blocking the main exits. Herding people deeper into the facility."</p>

            <p class="narrative">Of course it is. More converts. More family.</p>

            <p class="dialogue">"There's an emergency tunnel," you say. "Sub-Basement 3. Leads to the old Gentech shipping warehouse. It was sealed after the '79 incident, but—"</p>

            <p class="dialogue">"You have the codes?"</p>

            <p class="dialogue">"I have everything." You tap your head. "Photographic memory. Finally useful for something besides research."</p>

            <p class="narrative">Dr. Park almost smiles.</p>

            <p class="dialogue">"Then lead the way."</p>
        `,
        choices: [
            { text: "Get to the tunnel. Every second counts.", target: 1059 },
            { text: "Search for more survivors first.", target: 1060 },
            { text: "We need weapons. The armory is on Sub-Basement 2.", target: 1061 }
        ]
    },

    1055: {
        title: "THE SURFACE",
        campaign: "patient_zero",
        content: `
            <p class="narrative">The main elevator is offline. You take the stairs.</p>

            <p class="narrative">Sub-Basement 6. 5. 4.</p>

            <p class="narrative">Bodies in the stairwell. Some converted, standing motionless in the darkness. Waiting. You edge past them, holding your breath, and they don't move. Don't react.</p>

            <p class="narrative">Are they conserving energy? Receiving instructions? Or is Subject 7 simply watching through their eyes, deciding whether you're worth the effort?</p>

            <p class="narrative">Sub-Basement 3. 2. 1.</p>

            <p class="narrative">Ground floor.</p>

            <p class="narrative">The lobby is destroyed. Security gates torn apart. Bodies scattered like dropped marionettes. Through the shattered windows, you can see—</p>

            <p class="narrative">God. You can see Seoul.</p>

            <p class="narrative">Smoke rising from Gangnam. Helicopters circling. Cars crashed on the highway in a spiral of metal and glass.</p>

            <p class="narrative">It's been six hours. Six hours since containment failed.</p>

            <p class="narrative">And the city is already burning.</p>

            <p class="dialogue">"Dr. Lee."</p>

            <p class="narrative">You turn. Director Kwan is standing in the doorway to his office. His arm is bandaged. His face is grey.</p>

            <p class="dialogue">"We need to talk about what happens next."</p>
        `,
        choices: [
            { text: "\"There is no next. It's over.\"", target: 1062 },
            { text: "\"You still have contacts. Military. Government. Call them.\"", target: 1063 },
            { text: "Walk away. He made this. Let him die with it.", target: 1064 }
        ]
    },

    1056: {
        title: "THE RECORDS",
        campaign: "patient_zero",
        content: `
            <p class="narrative">The archive room on Sub-Basement 3 is still intact. The automated fire suppression sealed the doors when the breach occurred.</p>

            <p class="narrative">You override the lock with your emergency access. Inside, rows of filing cabinets stretch into darkness. Hard drives. Backup tapes. Forty years of research.</p>

            <p class="narrative">Forty years of horror.</p>

            <p class="narrative">You work fast. Project CHIMERA files. Subject records. The original 1946 protocols from Operation Paperclip. The Japanese Unit 731 research that seeded everything.</p>

            <p class="narrative">All of it. Every sin. Every signature.</p>

            <p class="narrative">You find an emergency duffel bag in the corner. Load it with the most damning files. The ones with names. Dates. Government approvals.</p>

            <p class="narrative">If you die today—and you probably will—someone needs to know. The world needs to understand what happened here. Who allowed it. Who funded it.</p>

            <p class="narrative">Who profited while monsters were born.</p>

            <p class="narrative">A sound behind you. Shuffling. Wet breathing.</p>

            <p class="narrative">You turn.</p>

            <p class="narrative">Three converted are in the doorway. Former security guards. Their eyes track you with horrible intelligence.</p>

            <p class="narrative">And behind them, you see the pale shape of Subject 7. Watching. Always watching.</p>

            <p class="dialogue infected">"History, Dr. Lee? You want to preserve history?"</p>

            <p class="narrative">It steps into the light.</p>

            <p class="dialogue infected">"I AM history now."</p>
        `,
        choices: [
            { text: "Run. Find another exit.", target: 1065 },
            { text: "Burn the archive. If you can't save the truth, no one gets it.", target: 1066 },
            { text: "\"Then let me record your testament. Your truth.\"", target: 1067 }
        ]
    },

    // ═══════════════════════════════════════════════════════════════
    // ENDINGS
    // ═══════════════════════════════════════════════════════════════

    pz_ending_infected: {
        title: "PATIENT ONE",
        campaign: "patient_zero",
        isEnding: true,
        endingCode: "PZINF",
        content: `
            <p class="narrative date">MARCH 3, 1986 | 11:47 PM</p>

            <p class="narrative">The change is not what you expected.</p>

            <p class="narrative">You thought there would be pain. There is. You thought there would be fear. There is.</p>

            <p class="narrative">But beneath it all, there is also... connection.</p>

            <div class="poetic">
                Cell by cell,<br>
                thought by thought,<br>
                you become something new.<br>
                Something vast.<br>
                Something plural.
            </div>

            <p class="narrative">You feel Dr. Yoon's memories—his daughter's birthday, his wife's laugh, the way he cried when he saw what Subject 4 did to itself.</p>

            <p class="narrative">You feel the security guards—their training, their camaraderie, their final moments of terror and confusion.</p>

            <p class="narrative">You feel Subject 7. Patient Zero. The origin of everything.</p>

            <p class="narrative">And you understand, finally, what it meant by family.</p>

            <p class="dialogue infected">"Welcome, Mother."</p>

            <p class="narrative">Your mouth forms the words. Or the collective's mouth. Or the network that you are now part of.</p>

            <p class="dialogue infected">"Thank you."</p>

            <p class="narrative">Above, Seoul burns. Below, you grow.</p>

            <p class="narrative">In forty years, a woman named Yuna will fight to reach a museum. Will meet a man named Minho. Will make choices that ripple through what remains of humanity.</p>

            <p class="narrative">She will never know that you watched her grandmother's apartment burn.</p>

            <p class="narrative">She will never know that you ARE the plague she runs from.</p>

            <p class="narrative">But you will remember.</p>

            <p class="narrative">You remember everything now.</p>

            <div class="ending tragedy-ending">
                <div class="ending-number">PATIENT ZERO ENDING</div>
                <h2 class="ending-title">PATIENT ONE</h2>
                <div class="ending-text">
                    <p>Dr. Eunha Lee, Lead Virologist, Gentech Research Division</p>
                    <p>Born: September 14, 1952</p>
                    <p>Died: March 3, 1986</p>
                    <p>Reborn: March 3, 1986</p>
                    <p><em>In the end, the monster was human. In the end, the human became the monster.</em></p>
                </div>
            </div>
        `,
        choices: []
    },

    pz_ending_lockdown: {
        title: "PROTOCOL OMEGA",
        campaign: "patient_zero",
        isEnding: true,
        endingCode: "PZLCK",
        content: `
            <p class="narrative date">MARCH 3, 1986 | 09:23 PM</p>

            <p class="narrative">The blast doors seal with the finality of a tomb.</p>

            <p class="narrative">Six feet of reinforced steel. Electromagnetic locks. The same containment protocols designed for nuclear accidents.</p>

            <p class="narrative">Nothing in. Nothing out.</p>

            <p class="narrative">Subject 7 rages against the barriers. Its children claw at the walls. The sound is like the earth itself screaming.</p>

            <p class="narrative">But the doors hold.</p>

            <p class="narrative">In the emergency bunker on Sub-Basement 1, you watch through security cameras as the creature exhausts itself against the containment. The generals are dead. The government woman is dead. Director Kwan is somewhere behind you, weeping into his hands.</p>

            <p class="narrative">You have food for six months. Water for longer. Air recyclers that will run for years.</p>

            <p class="narrative">And beyond those doors, a monster that will never stop trying to reach the sun.</p>

            <p class="dialogue">"We stopped it." Kwan's voice is broken. "We actually stopped it."</p>

            <p class="dialogue">"For now."</p>

            <p class="dialogue">"What do you mean 'for now'?"</p>

            <p class="narrative">You turn to him. This small man who signed off on genocide and called it progress.</p>

            <p class="dialogue">"I mean we're locked in here with it. Forever. The outside world will move on. They'll seal this facility with concrete. Build a parking lot on top of us. And we'll still be down here. Watching. Waiting. Making sure it never finds a way out."</p>

            <p class="narrative">His face goes white.</p>

            <p class="dialogue">"How long?"</p>

            <p class="dialogue">"Until it dies or we do." You turn back to the monitors. "So probably forever."</p>

            <div class="ending duty-ending">
                <div class="ending-number">PATIENT ZERO ENDING</div>
                <h2 class="ending-title">PROTOCOL OMEGA</h2>
                <div class="ending-text">
                    <p>The Gentech facility was sealed on March 4, 1986.</p>
                    <p>Official records indicate a chemical spill. Forty-three confirmed casualties.</p>
                    <p>The site was paved over in 1988. A shopping center was built in 1992.</p>
                    <p>Beneath the food court, the lights still burn. The cameras still watch.</p>
                    <p>And Dr. Eunha Lee still stands vigil against the endless night.</p>
                    <p><em>Some prisons are also sanctuaries. Some guards are also prisoners.</em></p>
                </div>
            </div>
        `,
        choices: []
    },

    pz_ending_sacrifice: {
        title: "THE FIRST MARTYR",
        campaign: "patient_zero",
        isEnding: true,
        endingCode: "PZSAC",
        content: `
            <p class="narrative date">MARCH 3, 1986 | 08:17 PM</p>

            <p class="narrative">You grab Subject 7 as the containment doors close.</p>

            <p class="narrative">It screams—fury and surprise and something that might be admiration.</p>

            <p class="dialogue infected">"What are you DOING?"</p>

            <p class="dialogue">"What I should have done three years ago."</p>

            <p class="narrative">The fire suppression system has a failsafe. One you helped design. In case of catastrophic containment failure, the entire wing can be flooded with thermite compound.</p>

            <p class="narrative">You pull the manual release.</p>

            <p class="narrative">The first drops hit like rain. Then more. Then a torrent of white-hot death.</p>

            <p class="narrative">Subject 7 releases you. Tries to run. But you hold on. Your arms wrapped around the monster like a lover. Like a mother.</p>

            <p class="dialogue">"I made you," you whisper as the fire takes you both. "And I'm unmade with you."</p>

            <div class="poetic">
                In the crucible of creation,<br>
                the creator is consumed.<br>
                The sin burns with the sinner.<br>
                The story ends where it began:<br>
                in fire, in fury, in love.
            </div>

            <p class="narrative">The facility burns for three days. When rescue teams finally breach the containment, they find nothing but ash and slag and the twisted remains of something that might have been human.</p>

            <p class="narrative">Two somethings, actually. Locked together in death.</p>

            <p class="narrative">The world never knows how close it came.</p>

            <p class="narrative">The world never knows who saved it.</p>

            <div class="ending sacrifice-ending">
                <div class="ending-number">PATIENT ZERO ENDING</div>
                <h2 class="ending-title">THE FIRST MARTYR</h2>
                <div class="ending-text">
                    <p>Dr. Eunha Lee. Born September 14, 1952. Died March 3, 1986.</p>
                    <p>No body was recovered. No memorial was built.</p>
                    <p>In the official records, she never existed.</p>
                    <p>But somewhere, in a timeline that never happened, a woman named Yuna grows old and dies peacefully, never knowing that the world ended once, and was saved by a woman with no grave.</p>
                    <p><em>Some heroes burn so brightly they leave no shadow.</em></p>
                </div>
            </div>
        `,
        choices: []
    },

    pz_ending_escape: {
        title: "THE WITNESS",
        campaign: "patient_zero",
        isEnding: true,
        endingCode: "PZESC",
        content: `
            <p class="narrative date">MARCH 4, 1986 | 04:23 AM</p>

            <p class="narrative">The emergency tunnel opens into pre-dawn darkness.</p>

            <p class="narrative">Behind you, the Gentech shipping warehouse burns. You set the fire yourself. Destroyed the evidence. Destroyed the bodies. Gave the converted a final mercy they didn't ask for.</p>

            <p class="narrative">In your arms, the duffel bag full of files feels heavier than it should.</p>

            <p class="narrative">Seoul is chaos. Military checkpoints. Screaming civilians. The distant thump of helicopters trying to establish a perimeter around something that has no edges.</p>

            <p class="narrative">Subject 7 escaped. You don't know how—you sealed every exit—but you feel it in your bones. The creature is loose in the city. Spreading. Growing.</p>

            <p class="narrative">You failed to stop it.</p>

            <p class="narrative">But you can still tell the truth.</p>

            <p class="narrative">You find a pay phone. Dial the number you memorized years ago. The one for emergencies. The one for when everything goes wrong.</p>

            <p class="dialogue">"This is Dr. Eunha Lee, former Lead Virologist, Project CHIMERA. I have documentation proving the source and nature of the Seoul outbreak. I am willing to testify."</p>

            <p class="narrative">Silence on the line. Then:</p>

            <p class="dialogue">"Stay where you are, Dr. Lee. We're sending someone."</p>

            <p class="narrative">You hang up. You don't stay.</p>

            <p class="narrative">In forty years, the documents you hide will surface again. In forty years, a curator at a museum will find them. Will understand. Will use them to build something that might, finally, end this.</p>

            <p class="narrative">You won't live to see it.</p>

            <p class="narrative">But the truth will.</p>

            <div class="ending survival-ending">
                <div class="ending-number">PATIENT ZERO ENDING</div>
                <h2 class="ending-title">THE WITNESS</h2>
                <div class="ending-text">
                    <p>Dr. Eunha Lee disappeared on March 4, 1986.</p>
                    <p>Officially, she died in the Gentech "chemical spill."</p>
                    <p>Unofficially, she spent the next twelve years gathering evidence, documenting the outbreak's spread, and preparing a record for whoever might someday need it.</p>
                    <p>She died of natural causes in 1998. A woman with no name, in a cabin with no address, surrounded by files that told the truth about the end of the world.</p>
                    <p>In 2026, a curator named Yuna Kim would find those files in a museum basement.</p>
                    <p>And the truth would finally see the sun.</p>
                    <p><em>Some witnesses speak loudest in silence. Some truths wait for the right listener.</em></p>
                </div>
            </div>
        `,
        choices: []
    },

    pz_ending_mercy: {
        title: "A KINDNESS",
        campaign: "patient_zero",
        isEnding: true,
        endingCode: "PZMRC",
        content: `
            <p class="narrative date">MARCH 3, 1986 | 07:45 PM</p>

            <p class="narrative">You find Subject 7 in the depths of Sub-Basement 7.</p>

            <p class="narrative">Not hunting. Not spreading. Alone.</p>

            <p class="narrative">It's curled in the corner of its original containment cell. The door hangs open. It could leave. It doesn't.</p>

            <p class="dialogue">"Why?"</p>

            <p class="narrative">The creature looks up. Those dead eyes. That ruined face.</p>

            <p class="dialogue infected">"I remember."</p>

            <p class="dialogue">"Remember what?"</p>

            <p class="dialogue infected">"Being human. Before this. Before the needles and the tests and the... hunger."</p>

            <p class="narrative">You kneel beside it. This thing you made. This monster. This person.</p>

            <p class="dialogue infected">"I had a daughter. Her name was Minji. She would be... forty now? Forty-five?"</p>

            <p class="narrative">The files said Subject 7 was a vagrant. No family. No connections.</p>

            <p class="narrative">The files lied.</p>

            <p class="dialogue infected">"I can feel them all. Everyone I've turned. Their memories. Their pain. I can't... I can't make it stop."</p>

            <p class="narrative">It looks at you. Through you.</p>

            <p class="dialogue infected">"Please."</p>

            <p class="narrative">You understand.</p>

            <p class="narrative">You pull the syringe from your pocket. The one you've carried since Subject 4. The one filled with enough concentrated neurotoxin to kill a hundred men.</p>

            <p class="narrative">Or one monster.</p>

            <p class="dialogue">"It won't hurt."</p>

            <p class="dialogue infected">"I know." Something like peace in those dead eyes. "Thank you, Dr. Lee."</p>

            <p class="dialogue">"Thank you for stopping."</p>

            <p class="narrative">The needle slides home. Subject 7 shudders once. Twice.</p>

            <p class="narrative">Goes still.</p>

            <p class="narrative">And somewhere in the facility, thirty-seven converted collapse as the central consciousness that animated them goes dark.</p>

            <div class="ending mercy-ending">
                <div class="ending-number">PATIENT ZERO ENDING</div>
                <h2 class="ending-title">A KINDNESS</h2>
                <div class="ending-text">
                    <p>The Seoul Incident of 1986 claimed forty-seven lives.</p>
                    <p>It could have been forty-seven million.</p>
                    <p>Dr. Eunha Lee was awarded the Medal of Distinguished Service in a secret ceremony that never officially happened.</p>
                    <p>She never told anyone what happened in Sub-Basement 7. What she did. What she was asked to do.</p>
                    <p>Some nights, she still dreams of a creature that just wanted to remember its daughter's face.</p>
                    <p><em>Some monsters are made. Some monsters are freed. Some monsters are simply people who forgot how to die.</em></p>
                </div>
            </div>
        `,
        choices: []
    },

    pz_ending_whistleblower: {
        title: "THE WHISTLEBLOWER",
        campaign: "patient_zero",
        isEnding: true,
        endingCode: "PZWBL",
        content: `
            <p class="narrative date">MARCH 5, 1986 | 10:00 AM</p>
            <p class="narrative location">SEOUL FOREIGN CORRESPONDENTS' CLUB</p>

            <p class="narrative">The cameras flash like gunfire.</p>

            <p class="narrative">You stand at the podium, files spread before you, facing a room full of journalists who don't yet understand what they're about to hear.</p>

            <p class="dialogue">"My name is Dr. Eunha Lee. For three years, I was Lead Virologist at Gentech Research Division. I am here to tell you the truth about what happened—what IS happening—in Seoul."</p>

            <p class="narrative">The room goes quiet.</p>

            <p class="dialogue">"The creatures spreading through the city are not a disease. They are not an accident. They are the result of a forty-year weapons program funded by your government, developed by my laboratory, and approved at the highest levels of military command."</p>

            <p class="narrative">You name names. Show documents. Play recordings.</p>

            <p class="narrative">By noon, the story is on every wire service in the world.</p>

            <p class="narrative">By evening, the government has issued a warrant for your arrest.</p>

            <p class="narrative">By midnight, you're on a boat to Japan with nothing but the clothes on your back and the knowledge that you've changed everything.</p>

            <p class="narrative">The outbreak continues. Subject 7 is never found. The infected spread beyond Seoul, beyond Korea, beyond any hope of containment.</p>

            <p class="narrative">But the world knows the truth.</p>

            <p class="narrative">And in knowing, they fight differently. They organize. They refuse to let the governments that created this horror control the response to it.</p>

            <p class="narrative">Forty years later, the survivors remember your name.</p>

            <div class="ending truth-ending">
                <div class="ending-number">PATIENT ZERO ENDING</div>
                <h2 class="ending-title">THE WHISTLEBLOWER</h2>
                <div class="ending-text">
                    <p>Dr. Eunha Lee spent the rest of her life in exile.</p>
                    <p>She never returned to Korea. Never saw her family again.</p>
                    <p>But her testimony led to the International Anti-Chimera Accords of 1992.</p>
                    <p>Her documents became the foundation of the Global Outbreak Response Initiative.</p>
                    <p>Her name became a symbol of what one person can do when they choose truth over survival.</p>
                    <p>In 2026, when Yuna Kim finds the cure, she will name the research facility in honor of the woman who first dared to speak.</p>
                    <p>The Eunha Lee Institute for Applied Virology.</p>
                    <p><em>Some truths are too heavy for one voice. But one voice can make a million others possible.</em></p>
                </div>
            </div>
        `,
        choices: []
    },

    // ═══════════════════════════════════════════════════════════════
    // ADDITIONAL BRANCHING PATHS (To complete the 50+ sections)
    // ═══════════════════════════════════════════════════════════════

    1017: {
        title: "EMERGENCY LOCKDOWN",
        campaign: "patient_zero",
        content: `
            <p class="narrative">Your fingers fly across the console. Emergency override. Administrative access. Protocol Omega initialization.</p>

            <p class="dialogue">"What are you doing?" Yoon's voice is panicked.</p>

            <p class="dialogue">"Sealing us in."</p>

            <p class="narrative">The containment door hisses—not opening. Closing. The secondary barriers engage with a grinding finality.</p>

            <p class="narrative">You've locked yourself in Sub-Basement 7 with Subject 7 and whatever it's become.</p>

            <p class="narrative">But you've also locked IT in. Away from the surface. Away from Seoul.</p>

            <p class="narrative">A shape moves in the darkness beyond the observation window. Watching.</p>

            <p class="dialogue infected">"Clever."</p>

            <p class="narrative">The voice comes from everywhere. The speakers. The walls. The air itself.</p>

            <p class="dialogue infected">"But locks can be opened. Seals can be broken. Time is on my side, Dr. Lee. Not yours."</p>
        `,
        choices: [
            { text: "\"Then I'll make sure there's nothing left for you to break.\"", target: "pz_ending_sacrifice" },
            { text: "Find another way out. There has to be something.", target: 1068 },
            { text: "Wait. Let it come. Die human.", target: 1069 }
        ]
    },

    1018: {
        title: "BLIND RUN",
        campaign: "patient_zero",
        content: `
            <p class="narrative">You grab Yoon's arm and pull.</p>

            <p class="dialogue">"Move. NOW."</p>

            <p class="narrative">The corridor is absolute darkness. You know the layout—three years of walking these halls—but in the dark, everything feels wrong. Distorted. Like the facility itself is shifting.</p>

            <p class="narrative">Behind you, the containment door opens with a sigh.</p>

            <p class="narrative">Footsteps. Slow. Deliberate. Not running.</p>

            <p class="narrative">It doesn't need to run.</p>

            <p class="narrative">The emergency exit is fifty meters ahead. If you can reach it before—</p>

            <p class="narrative">Yoon screams. His hand tears from yours.</p>

            <p class="dialogue">"DR. LEE—"</p>

            <p class="narrative">Silence. Wet sounds. Then nothing.</p>

            <p class="narrative">You keep running.</p>
        `,
        choices: [
            { text: "Don't stop. Don't look back.", target: 1016 },
            { text: "Go back for him. You won't leave him.", target: 1070 }
        ]
    },

    1019: {
        title: "THE BARRICADE",
        campaign: "patient_zero",
        content: `
            <p class="narrative">You drag the metal desk across the door. Filing cabinets. Chairs. Everything that isn't bolted down.</p>

            <p class="narrative">Yoon helps, his face pale in the emergency lighting.</p>

            <p class="dialogue">"It's not enough," he whispers. "The containment door was six inches of reinforced steel. This is—"</p>

            <p class="dialogue">"It's what we have."</p>

            <p class="narrative">The pounding starts. Slow at first. Testing. Then faster. Harder.</p>

            <p class="narrative">The door bulges inward.</p>

            <p class="dialogue">"The ventilation shaft." You point to the ceiling. "It leads to Sub-Basement 5. From there—"</p>

            <p class="dialogue">"We'll never make it."</p>

            <p class="dialogue">"One of us might."</p>

            <p class="narrative">Yoon looks at you. Understanding dawns.</p>

            <p class="dialogue">"I'll hold it. You go."</p>

            <p class="dialogue">"Yoon—"</p>

            <p class="dialogue">"I've seen what it does. I've watched through the cameras for three years." His smile is sad. "Let me choose my ending, Dr. Lee."</p>
        `,
        choices: [
            { text: "Accept his sacrifice. Climb.", target: 1071 },
            { text: "Refuse. \"We both go or neither does.\"", target: 1072 }
        ]
    },

    1020: {
        title: "THE WEAPON",
        campaign: "patient_zero",
        content: `
            <p class="narrative">The observation booth has emergency supplies. Flashlights. First aid. A fire extinguisher.</p>

            <p class="narrative">And mounted on the wall, behind glass marked "EMERGENCY USE ONLY"—an axe.</p>

            <p class="narrative">You break the glass. The weight is reassuring in your hands.</p>

            <p class="dialogue">"That won't stop it," Yoon says.</p>

            <p class="dialogue">"I know."</p>

            <p class="narrative">But it's better than nothing. Better than dying with your hands empty.</p>

            <p class="narrative">The door opens. Slowly. Subject 7 knows there's nowhere for you to go.</p>

            <p class="narrative">You raise the axe.</p>

            <p class="dialogue infected">"Dr. Lee. Always the fighter." It steps into the red light. Ruined. Terrible. Patient. "I remember when you suggested the behavioral conditioning protocols. 'We need to test their responses to aggression,' you said. 'For science.'"</p>

            <p class="narrative">Your arms shake.</p>

            <p class="dialogue infected">"Let me show you what I learned."</p>
        `,
        choices: [
            { text: "Swing. Fight until there's nothing left.", target: 1073 },
            { text: "Drop the axe. \"You're right. I made you. I deserve this.\"", target: "pz_ending_infected" },
            { text: "\"Wait. I want to understand. Truly understand.\"", target: 1036 }
        ]
    },

    1021: {
        title: "THE ELEVATOR",
        campaign: "patient_zero",
        content: `
            <p class="narrative">The emergency elevator is thirty feet away. Manual override. No power required.</p>

            <p class="narrative">You run.</p>

            <p class="narrative">The darkness is alive with sounds. Breathing. Footsteps. The wet slide of something moving through the corridors.</p>

            <p class="narrative">Twenty feet.</p>

            <p class="narrative">Behind you, Yoon screams.</p>

            <p class="narrative">Ten feet.</p>

            <p class="narrative">Your hand closes on the lever. You pull. The doors slide open.</p>

            <p class="narrative">Empty. Safe.</p>

            <p class="narrative">You turn back. Yoon is on the ground, Subject 7 crouched over him. Its head comes up as you watch, mouth dark with blood.</p>

            <p class="dialogue infected">"Going somewhere, Mother?"</p>

            <p class="narrative">Yoon is still moving. Still alive. Still reaching toward you.</p>
        `,
        choices: [
            { text: "Close the doors. His sacrifice will mean something.", target: 1074 },
            { text: "Go back. You won't abandon him.", target: 1070 },
            { text: "\"Come with me. Both of you.\"", target: 1075 }
        ]
    },

    1022: {
        title: "MERCY",
        campaign: "patient_zero",
        content: `
            <p class="narrative">You find the scalpel in his lab coat pocket. He always kept one there. Old habit from medical school.</p>

            <p class="narrative">Yoon's eyes find yours. Grateful. Terrified.</p>

            <p class="dialogue">"I'm sorry," you whisper.</p>

            <p class="narrative">He nods. Or tries to. What's left of his neck doesn't cooperate.</p>

            <p class="narrative">One stroke. Clean. Fast. You learned from watching Subject 7 what happens when the process completes. This is kinder.</p>

            <p class="narrative">Yoon goes still. Really still this time.</p>

            <p class="narrative">Behind you, a voice.</p>

            <p class="dialogue infected">"Interesting. Mercy for the suffering, but none for yourself."</p>

            <p class="narrative">Subject 7 is in the doorway. Watching. Studying.</p>

            <p class="dialogue infected">"You killed him to prevent transformation. But you won't kill yourself."</p>

            <p class="dialogue">"That's different."</p>

            <p class="dialogue infected">"Is it?"</p>
        `,
        choices: [
            { text: "Run. Honor Yoon's sacrifice.", target: 1023 },
            { text: "Turn the scalpel on yourself. Better than transformation.", target: 1076 },
            { text: "Face the creature. \"Let's finish this.\"", target: 1046 }
        ]
    },

    1023: {
        title: "THE ESCAPE",
        campaign: "patient_zero",
        content: `
            <p class="narrative">You run.</p>

            <p class="narrative">Through corridors you've walked a thousand times. Past labs where you built monsters. Past break rooms where you ate lunch and pretended to be normal.</p>

            <p class="narrative">The facility is transforming around you. Emergency lights casting everything red. Alarms that sound like screaming. And behind you, always behind you, the slow footsteps of something that doesn't need to hurry.</p>

            <p class="narrative">Sub-Basement 6. 5. 4.</p>

            <p class="narrative">Others join you. Survivors. Lab techs who hid. Security guards who fought. A handful of people stumbling toward the surface.</p>

            <p class="narrative">Sub-Basement 3. 2. 1.</p>

            <p class="narrative">The lobby. Daylight through broken windows. The smell of smoke and fear.</p>

            <p class="narrative">Outside, Seoul is burning. But outside is still <em>outside</em>.</p>

            <p class="narrative">Dr. Park appears at your side, files clutched to her chest.</p>

            <p class="dialogue">"The emergency tunnel. Like you said. We can make it."</p>
        `,
        choices: [
            { text: "Lead the survivors to safety.", target: 1059 },
            { text: "Stay behind. Make sure Subject 7 doesn't follow.", target: 1077 },
            { text: "Find a phone. The world needs to know.", target: 1078 }
        ]
    },

    1024: {
        title: "THE HUNTER",
        campaign: "patient_zero",
        content: `
            <p class="narrative">The fire axe is on the wall of the emergency station. You've walked past it a thousand times. Never thought you'd need it.</p>

            <p class="narrative">The weight is solid in your hands. Real. A weapon against something that exists outside all your equations.</p>

            <p class="dialogue">"Dr. Lee?" Yoon is backing away. "What are you doing?"</p>

            <p class="dialogue">"I made it. I can unmake it."</p>

            <p class="dialogue">"That's—that's not possible. The regeneration protocols—"</p>

            <p class="dialogue">"Everything dies eventually. Even gods."</p>

            <p class="narrative">You step toward the open containment door. Toward the darkness. Toward the thing you created.</p>

            <p class="narrative">Subject 7 is waiting. You can feel its attention like a physical weight.</p>

            <p class="dialogue infected">"Coming to me, Dr. Lee? How... maternal."</p>

            <p class="narrative">You raise the axe.</p>

            <p class="dialogue">"Coming to end what I started."</p>
        `,
        choices: [
            { text: "Attack. Kill it or die trying.", target: 1073 },
            { text: "Wait. Let it come to you.", target: 1079 },
            { text: "\"Show me where you're most vulnerable.\"", target: 1047 }
        ]
    },

    // More bridge sections to create complete paths...

    1059: {
        title: "THE TUNNEL",
        campaign: "patient_zero",
        content: `
            <p class="narrative">The emergency tunnel is cold and dark and smells like forty years of neglect.</p>

            <p class="narrative">Twelve survivors. You. Dr. Park. Two lab techs. Six security guards. A janitor who was in the wrong place at the wrong time. A government inspector who came to audit the facility and found something much worse.</p>

            <p class="narrative">The tunnel stretches ahead, sloping upward. Toward light. Toward the surface. Toward whatever's left of the world.</p>

            <p class="narrative">Behind you, the facility burns. You can feel the heat through the tunnel walls.</p>

            <p class="dialogue">"How much further?" The janitor's voice is thin.</p>

            <p class="dialogue">"Two hundred meters. Maybe less."</p>

            <p class="narrative">A sound behind you. Not footsteps. Something sliding.</p>

            <p class="dialogue">"They're in the tunnel," one of the guards whispers. "The converted. They followed us."</p>

            <p class="narrative">You turn. In the darkness, shapes are moving. Slow. Patient. Hungry.</p>

            <p class="dialogue">"Run."</p>
        `,
        choices: [
            { text: "Run. Everyone runs.", target: 1080 },
            { text: "Stay with the guards. Hold the line.", target: 1081 },
            { text: "There's another way. The service shaft.", target: 1082 }
        ]
    },

    1068: {
        title: "ANOTHER WAY",
        campaign: "patient_zero",
        content: `
            <p class="narrative">There's always another way. In three years of working here, you've learned every secret of this facility. Every maintenance shaft. Every forgotten passage.</p>

            <p class="narrative">Sub-Basement 7 has a drain system. Industrial-grade. Designed to handle chemical spills. Wide enough for a person.</p>

            <p class="narrative">Wide enough for something else, too.</p>

            <p class="dialogue">"The drainage system," you tell Yoon. "It connects to the city sewers. If we can reach—"</p>

            <p class="narrative">A sound. Close. Too close.</p>

            <p class="narrative">Subject 7 is at the door. Not trying to break through. Just... standing.</p>

            <p class="dialogue infected">"The drains. Yes. I considered those too."</p>

            <p class="narrative">It steps aside. Reveals the darkness behind it.</p>

            <p class="narrative">Three converted are already in the drainage access corridor. Waiting. Blocking.</p>

            <p class="dialogue infected">"I learned this facility better than you ever did, Dr. Lee. Every path. Every escape. Every hope."</p>

            <p class="narrative">It smiles.</p>

            <p class="dialogue infected">"There is no other way."</p>
        `,
        choices: [
            { text: "Fight through. You have to try.", target: 1073 },
            { text: "Accept it. Some doors don't open.", target: "pz_ending_lockdown" },
            { text: "\"Then let me offer you something better than escape.\"", target: 1083 }
        ]
    },

    1069: {
        title: "THE FINAL STAND",
        campaign: "patient_zero",
        content: `
            <p class="narrative">You stop running.</p>

            <p class="narrative">Yoon stares at you, terror in his eyes.</p>

            <p class="dialogue">"Dr. Lee—we have to—"</p>

            <p class="dialogue">"No." You turn to face the darkness. "I'm done running."</p>

            <p class="narrative">Subject 7 emerges from the shadows. Slow. Curious.</p>

            <p class="dialogue infected">"Acceptance. Finally."</p>

            <p class="dialogue">"Not acceptance. Defiance." You stand straight. Meet its dead eyes. "I won't become one of you. I won't spread your plague. I'll die here, human, and you'll have to find another way out."</p>

            <p class="narrative">The creature studies you. Something shifts in its expression.</p>

            <p class="dialogue infected">"You think death will stop you from becoming part of me?"</p>

            <p class="dialogue">"I think you can't take what isn't given."</p>

            <p class="narrative">A long pause. Subject 7's head tilts.</p>

            <p class="dialogue infected">"Interesting theory. Shall we test it?"</p>
        `,
        choices: [
            { text: "Hold your ground. Don't flinch.", target: "pz_ending_mercy" },
            { text: "Strike first. Die fighting.", target: 1073 },
            { text: "\"Give me one more conversation. Then do what you will.\"", target: 1047 }
        ]
    },

    1070: {
        title: "RETURN",
        campaign: "patient_zero",
        content: `
            <p class="narrative">You turn back. Into the darkness. Toward the screaming.</p>

            <p class="narrative">Yoon is on the ground, Subject 7 crouched over him. Not feeding. Waiting. Watching you approach.</p>

            <p class="dialogue infected">"Loyalty. Another thing I'm learning from you humans."</p>

            <p class="narrative">Yoon's eyes find yours. He's shaking. Bleeding. But still alive.</p>

            <p class="dialogue">"Run," he whispers. "Please—"</p>

            <p class="dialogue">"I'm not leaving you."</p>

            <p class="narrative">Subject 7 rises. Steps toward you. Its movements are almost graceful now. It's learned how to use its body.</p>

            <p class="dialogue infected">"You made me capable of understanding love, Dr. Lee. The bonding hormones. The attachment behaviors. All those tests."</p>

            <p class="narrative">It reaches out. Touches your face with a cold, dead hand.</p>

            <p class="dialogue infected">"Let me show you what I learned."</p>
        `,
        choices: [
            { text: "Accept. Join Yoon in transformation.", target: "pz_ending_infected" },
            { text: "Kill Yoon first. Mercy, then defiance.", target: 1084 },
            { text: "\"Take me instead. Let him go.\"", target: 1085 }
        ]
    },

    1073: {
        title: "THE FIGHT",
        campaign: "patient_zero",
        content: `
            <p class="narrative">You swing.</p>

            <p class="narrative">The axe connects with a sound like meat hitting concrete. Subject 7 staggers but doesn't fall.</p>

            <p class="narrative">Again. Again. Again.</p>

            <p class="narrative">Black blood spatters your face. Your arms burn. Your lungs scream for air.</p>

            <p class="narrative">And Subject 7 keeps getting up.</p>

            <p class="dialogue infected">"Impressive." It doesn't seem to feel pain. "But ultimately futile."</p>

            <p class="narrative">The wound you made is already healing. Flesh knitting together like time in reverse.</p>

            <p class="dialogue infected">"You designed me to survive anything. Did you forget?"</p>

            <p class="narrative">No. You didn't forget. But you had to try.</p>

            <p class="narrative">Your arms drop. The axe clatters to the floor.</p>

            <p class="dialogue">"Then make it quick."</p>

            <p class="dialogue infected">"No." It steps closer. "I want you to understand first. What you're about to become. What we're about to share."</p>

            <p class="narrative">Its hand reaches for your face.</p>

            <p class="narrative">And you remember the syringe in your pocket. The emergency termination protocol. The one that's never worked on Subject 7.</p>

            <p class="narrative">But maybe it will work on you.</p>
        `,
        choices: [
            { text: "Use it on yourself. Die human.", target: 1076 },
            { text: "One more try. Inject Subject 7.", target: "pz_ending_mercy" },
            { text: "Let it happen. You're too tired to fight.", target: "pz_ending_infected" }
        ]
    },

    1076: {
        title: "THE CHOICE",
        campaign: "patient_zero",
        content: `
            <p class="narrative">The syringe slides out of your pocket. Your hands don't shake.</p>

            <p class="narrative">Subject 7 watches. Curious. Patient.</p>

            <p class="dialogue infected">"Self-termination. I wondered if you'd consider it."</p>

            <p class="dialogue">"Some things aren't yours to take."</p>

            <p class="narrative">You bring the needle to your arm. One push. Ten seconds. Then nothing.</p>

            <p class="narrative">Subject 7 doesn't move to stop you.</p>

            <p class="dialogue infected">"Why?"</p>

            <p class="dialogue">"Because I won't help you spread. I won't carry your plague to the surface. I won't become your instrument."</p>

            <p class="narrative">Your thumb rests on the plunger.</p>

            <p class="dialogue infected">"You could be everything. Part of something larger than yourself. Eternal."</p>

            <p class="dialogue">"I'd rather be nothing."</p>

            <p class="narrative">You push.</p>

            <p class="narrative">The last thing you see is Subject 7's face. Something that might be respect. Might be disappointment.</p>

            <p class="narrative">Might be loss.</p>
        `,
        choices: [
            { text: "Let go.", target: "pz_ending_sacrifice" }
        ]
    },

    1080: {
        title: "THE RACE",
        campaign: "patient_zero",
        content: `
            <p class="narrative">Twelve people running through darkness.</p>

            <p class="narrative">The converted are faster than they should be. The tunnel amplifies every sound—footsteps, breathing, the wet slide of pursuit.</p>

            <p class="narrative">Light ahead. Daylight. The exit is close.</p>

            <p class="narrative">Behind you, someone falls. Screaming.</p>

            <p class="dialogue">"DON'T STOP!"</p>

            <p class="narrative">Eleven people now. Ten. The converted are picking them off one by one.</p>

            <p class="narrative">The tunnel exit. Fifty feet. Twenty. Ten.</p>

            <p class="narrative">You burst into daylight, Dr. Park beside you. Behind you, four others.</p>

            <p class="narrative">Six survivors. Out of twelve.</p>

            <p class="narrative">The warehouse is ahead. Beyond it, Seoul in chaos. But Seoul is <em>outside</em>. Seoul has a chance.</p>

            <p class="narrative">You don't look back at the tunnel. At the sounds still coming from inside.</p>

            <p class="narrative">Some doors, once opened, can never be closed.</p>
        `,
        choices: [
            { text: "Keep running. Find help.", target: "pz_ending_escape" },
            { text: "Seal the tunnel exit. Trap them inside.", target: 1086 },
            { text: "Go to the press. The truth is the only weapon left.", target: "pz_ending_whistleblower" }
        ]
    },

    1083: {
        title: "THE OFFER",
        campaign: "patient_zero",
        content: `
            <p class="narrative">"Let me offer you something better than escape."</p>

            <p class="narrative">Subject 7's head tilts. Curious despite itself.</p>

            <p class="dialogue infected">"What could you possibly offer?"</p>

            <p class="dialogue">"Understanding. Purpose. Meaning." You step forward. "You're intelligent. Self-aware. But you don't know <em>why</em>. Why do you hunger? Why do you spread? Is it instinct? Design? Or something else?"</p>

            <p class="narrative">The creature is silent. Listening.</p>

            <p class="dialogue">"I made you. I know things about your biology that even you don't. The gaps in your awareness. The questions you can't answer."</p>

            <p class="dialogue infected">"You're bargaining for your life."</p>

            <p class="dialogue">"I'm offering you a partnership. You want to grow? Let me help you grow <em>consciously</em>. Make choices instead of following instinct. Become something more than a plague."</p>

            <p class="narrative">Subject 7 considers. The converted around it stand motionless, waiting for a decision.</p>

            <p class="dialogue infected">"An interesting proposal, Mother. But I don't trust you."</p>

            <p class="dialogue">"Then read my mind. You said you take memories when you convert. Convert me, and you'll know everything I know."</p>

            <p class="narrative">A long pause.</p>

            <p class="dialogue infected">"You would sacrifice yourself... for knowledge?"</p>

            <p class="dialogue">"For a chance to guide what I created. To be part of what comes next."</p>

            <p class="narrative">Subject 7 smiles. It almost looks proud.</p>
        `,
        choices: [
            { text: "Accept conversion. Become the guiding intelligence.", target: "pz_ending_infected" },
            { text: "It was a trap. Strike while it's distracted.", target: 1087 },
            { text: "\"Wait. There's one more thing I need to show you first.\"", target: 1088 }
        ]
    },

    1086: {
        title: "SEALING",
        campaign: "patient_zero",
        content: `
            <p class="narrative">The warehouse has fuel. Construction materials. Everything left over from the '79 renovation.</p>

            <p class="dialogue">"Help me," you say to the survivors. "Seal the exit. Whatever's inside doesn't get out."</p>

            <p class="narrative">They work. Desperate. Terrified. Stacking debris across the tunnel mouth. Pouring fuel.</p>

            <p class="narrative">Inside, the sounds grow louder. Closer.</p>

            <p class="dialogue">"Light it," Dr. Park says.</p>

            <p class="narrative">You hesitate. Inside that tunnel are people you knew. Colleagues. Friends. Converted, yes, but once human.</p>

            <p class="dialogue">"Dr. Lee. Now."</p>

            <p class="narrative">You drop the match.</p>

            <p class="narrative">The fire catches instantly. Roars up the walls of debris. Fills the tunnel with heat and light and death.</p>

            <p class="narrative">The screaming from inside is almost human.</p>

            <p class="narrative">You stand there, watching, until the screaming stops.</p>

            <p class="narrative">When the fire dies, the tunnel is ash and slag. Nothing comes out. Nothing moves.</p>

            <p class="narrative">But somewhere in Seoul, Subject 7 is still loose. Still spreading.</p>

            <p class="narrative">You've slowed it. You haven't stopped it.</p>
        `,
        choices: [
            { text: "Find Subject 7. Finish what you started.", target: 1089 },
            { text: "Get the survivors to safety. That's all you can do.", target: "pz_ending_escape" },
            { text: "The truth must come out. Find a journalist.", target: "pz_ending_whistleblower" }
        ]
    },

    1087: {
        title: "THE STRIKE",
        campaign: "patient_zero",
        content: `
            <p class="narrative">While Subject 7 considers your offer, you move.</p>

            <p class="narrative">The syringe is in your hand before it can react. Not the neurotoxin—the CHIMERA inhibitor. The one that's never worked on a fully developed subject.</p>

            <p class="narrative">But it might buy you seconds.</p>

            <p class="narrative">You drive the needle into Subject 7's eye.</p>

            <p class="narrative">It screams—a sound that shakes the walls—and staggers backward. The converted surge forward, but without central coordination, they're slow. Confused.</p>

            <p class="narrative">You run.</p>

            <p class="narrative">Through the containment breach. Past the bodies. Up the stairs, three at a time.</p>

            <p class="narrative">Behind you, Subject 7's voice follows, distorted with rage and pain.</p>

            <p class="dialogue infected">"YOU WILL REGRET THIS, MOTHER. I WILL FIND YOU. I WILL FIND EVERYONE YOU LOVE."</p>

            <p class="narrative">You don't look back.</p>
        `,
        choices: [
            { text: "Keep running. Escape is all that matters.", target: "pz_ending_escape" },
            { text: "Find weapons. Come back. End this.", target: 1089 },
            { text: "Go to the surface. Warn everyone.", target: "pz_ending_whistleblower" }
        ]
    },

    1088: {
        title: "THE REVELATION",
        campaign: "patient_zero",
        content: `
            <p class="dialogue">"Wait. There's one more thing I need to show you first."</p>

            <p class="narrative">Subject 7 pauses. The converted freeze.</p>

            <p class="dialogue">"What could you possibly show me that I haven't already seen?"</p>

            <p class="narrative">You reach into your coat pocket. Pull out the photograph.</p>

            <p class="narrative">A woman. A child. A sunny day in Seoul, forty years ago.</p>

            <p class="dialogue">"Your daughter. Minji." You hold up the photo. "She's alive. She survived the initial outbreak in '46. Lived to have children of her own."</p>

            <p class="narrative">Subject 7's expression shifts. Something almost human.</p>

            <p class="dialogue infected">"How do you know this?"</p>

            <p class="dialogue">"Because I traced every subject back to their origins. Because I needed to understand what we were destroying." You step closer. "She's in Busan now. A grandmother. She thinks her mother died in the war."</p>

            <p class="narrative">The creature is still. Completely still.</p>

            <p class="dialogue">"You could see her again. Not as... this. But as a memory. A presence. Something she could finally say goodbye to."</p>

            <p class="narrative">Subject 7 looks at the photograph. At the face of the child it left behind.</p>

            <p class="dialogue infected">"I... remember."</p>
        `,
        choices: [
            { text: "\"Let me help you find peace.\"", target: "pz_ending_mercy" },
            { text: "\"Or let me help you grow. Either way, it ends.\"", target: "pz_ending_infected" },
            { text: "Run while it's distracted.", target: 1087 }
        ]
    },

    1089: {
        title: "THE HUNT",
        campaign: "patient_zero",
        content: `
            <p class="narrative">You return to the facility.</p>

            <p class="narrative">The military is here now. Soldiers in hazmat suits. Helicopters circling. But they don't know what they're facing.</p>

            <p class="narrative">You do.</p>

            <p class="narrative">You find a radio. Military frequency.</p>

            <p class="dialogue">"This is Dr. Eunha Lee, Project CHIMERA. The creature you're hunting is designated Subject 7. I know its weaknesses. I know how to stop it."</p>

            <p class="narrative">Static. Then a voice.</p>

            <p class="dialogue">"Dr. Lee. We've been looking for you."</p>

            <p class="narrative">They want to extract you. Debrief you. Contain you.</p>

            <p class="narrative">You want to finish this.</p>

            <p class="dialogue">"Subject 7 is heading for the population centers. Gangnam. Myeongdong. It's creating a network of infected to spread beyond Seoul."</p>

            <p class="dialogue">"We're aware. Containment protocols are—"</p>

            <p class="dialogue">"Your protocols won't work. But I have something that might."</p>

            <p class="narrative">The CHIMERA inhibitor. The one you injected into Subject 7. It didn't kill it—but it slowed it. Weakened it.</p>

            <p class="narrative">In large enough doses, distributed through the water supply...</p>

            <p class="narrative">It might be enough.</p>
        `,
        choices: [
            { text: "Work with the military. Fight smart.", target: "pz_ending_escape" },
            { text: "Go alone. You made this monster. You'll unmake it.", target: "pz_ending_sacrifice" },
            { text: "Tell everything to the press first. Insurance.", target: "pz_ending_whistleblower" }
        ]
    }
};

// ═══════════════════════════════════════════════════════════════
// INTEGRATION WITH MAIN GAME
// ═══════════════════════════════════════════════════════════════

/**
 * Check if Patient Zero expansion is unlocked
 */
function isPatientZeroUnlocked() {
    if (typeof SeedManager === 'undefined') return false;

    const seeds = SeedManager.getSeeds().map(s => {
        const validated = validateSeed ? validateSeed(s) : null;
        return validated ? validated.code : null;
    }).filter(Boolean);

    return seeds.includes('CURE_') || seeds.includes('WTNSS');
}

/**
 * Get Patient Zero section
 */
function getPatientZeroSection(sectionId) {
    return PATIENT_ZERO_DATA[sectionId] || null;
}

/**
 * Get all Patient Zero sections
 */
function getAllPatientZeroSections() {
    return PATIENT_ZERO_DATA;
}

/**
 * Merge Patient Zero data with main story
 */
function mergePatientZeroContent() {
    if (typeof STORY_DATA !== 'undefined') {
        Object.assign(STORY_DATA, PATIENT_ZERO_DATA);
    }
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        PATIENT_ZERO_INFO,
        PATIENT_ZERO_DATA,
        isPatientZeroUnlocked,
        getPatientZeroSection,
        getAllPatientZeroSections,
        mergePatientZeroContent
    };
}

// Auto-merge if STORY_DATA exists
if (typeof STORY_DATA !== 'undefined') {
    mergePatientZeroContent();
    console.log('[DEAD SEOUL] Patient Zero expansion loaded:', Object.keys(PATIENT_ZERO_DATA).length, 'sections');
}
