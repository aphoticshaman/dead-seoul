/**
 * DEAD SEOUL: JIN'S WAR
 * Expansion Pack #4 - The Soldier's Story
 *
 * Colonel Jin Soojin. ROK Special Forces. Unit Commander.
 * The woman who chose her people over her orders.
 * This is her war. This is her story.
 *
 * A standalone campaign from a different perspective.
 */

// ═══════════════════════════════════════════════════════════════
// JIN'S WAR METADATA
// ═══════════════════════════════════════════════════════════════

const JINS_WAR_INFO = {
    id: "jins_war",
    name: "JIN'S WAR",
    subtitle: "No Good Orders",
    protagonist: {
        name: "Colonel Jin Soojin",
        nameKR: "진수진",
        unit: "ROK Special Forces, Unit 707",
        rank: "Colonel",
        callsign: "Iron Ghost"
    },
    unlockRequirements: {
        mainStoryProgress: "jin_revealed",
        description: "Learn Jin's full story in the main campaign"
    },
    totalSections: 40,
    endings: {
        jw_ghost: { code: "JWGHO", name: "The Ghost", tier: "soldier" },
        jw_defector: { code: "JWDEF", name: "The Defector", tier: "freedom" },
        jw_sacrifice: { code: "JWSAC", name: "Last Orders", tier: "sacrifice" },
        jw_warlord: { code: "JWWAR", name: "The Warlord", tier: "power" },
        jw_reunion: { code: "JWREU", name: "The Reunion", tier: "love" },
        jw_hollow: { code: "JWVIC", name: "Hollow Victory", tier: "tragedy" }
    }
};

// ═══════════════════════════════════════════════════════════════
// UNIT 707 ROSTER
// ═══════════════════════════════════════════════════════════════

const UNIT_707 = {
    jin: {
        name: "Colonel Jin Soojin",
        callsign: "Iron Ghost",
        role: "Commander",
        skills: { tactics: 5, combat: 4, leadership: 5, survival: 3 },
        background: "Youngest female colonel in ROK history. Known for impossible missions."
    },
    sergeant_moon: {
        name: "Master Sergeant Moon",
        callsign: "Bulldog",
        role: "Senior NCO",
        skills: { tactics: 3, combat: 5, leadership: 4, survival: 4 },
        background: "20 years service. Knows the unit better than Jin does."
    },
    lieutenant_park: {
        name: "Lieutenant Park Jihun",
        callsign: "Scholar",
        role: "Intelligence",
        skills: { tactics: 4, combat: 3, leadership: 3, survival: 2 },
        background: "KAIST graduate. Joined military for the challenge."
    },
    corporal_kim: {
        name: "Corporal Kim Yuna",
        callsign: "Sparrow",
        role: "Recon",
        skills: { tactics: 2, combat: 4, leadership: 2, survival: 5 },
        background: "Farm girl from Gyeonggi. Best tracker in the unit."
    },
    private_lee: {
        name: "Private First Class Lee",
        callsign: "Fresh",
        role: "Support",
        skills: { tactics: 1, combat: 2, leadership: 1, survival: 3 },
        background: "Six months in. Hasn't seen real combat yet."
    },
    soyeon: {
        name: "Captain Han Soyeon",
        callsign: "Hammer",
        role: "Second in Command",
        skills: { tactics: 4, combat: 4, leadership: 4, survival: 4 },
        background: "Jin's closest friend. Their relationship is complicated."
    }
};

// ═══════════════════════════════════════════════════════════════
// JIN'S WAR STORY DATA
// ═══════════════════════════════════════════════════════════════

const JINS_WAR_DATA = {

    // ═══════════════════════════════════════════════════════════════
    // PROLOGUE - BEFORE
    // ═══════════════════════════════════════════════════════════════

    jw_prologue: {
        title: "THE SOLDIER",
        campaign: "jins_war",
        content: `
            <p class="narrative date">FEBRUARY 28, 2026 | 23:47</p>
            <p class="narrative location">ROK SPECIAL FORCES COMMAND | ICHEON</p>

            <p class="narrative">The alert comes at midnight. Red priority. Eyes only.</p>

            <p class="narrative">You're in the barracks when your phone buzzes. Three texts in rapid succession—codes you recognize, protocols you've trained for but never expected to use.</p>

            <p class="dialogue">"BIOHAZARD CONTAINMENT ALPHA"</p>
            <p class="dialogue">"UNIT 707 MOBILIZATION IMMEDIATE"</p>
            <p class="dialogue">"REPORT COMMAND CENTER 0100"</p>

            <p class="narrative">Captain Han Soyeon is already dressed when you reach the hallway. Your second-in-command. Your best friend. The woman who knows too much about you and keeps the secrets anyway.</p>

            <p class="dialogue">"Jin." Her voice is tight. "Did you see the news before they cut the feeds?"</p>

            <p class="dialogue">"No. What's happening?"</p>

            <p class="dialogue">"Gangnam. Some kind of attack—not terrorism, something else. The civilian networks are down but I caught a military frequency. They're calling it a 'biological incident.'"</p>

            <div class="poetic">
                The soldier trains for war.<br>
                The soldier expects an enemy.<br>
                The soldier is not prepared<br>
                for the enemy that comes.
            </div>

            <p class="narrative">At the command center, General Kwon is waiting. His face tells you everything before his words do.</p>

            <p class="dialogue">"Colonel Jin. Your unit is being deployed to Seoul. Containment operation. You'll receive the full briefing en route."</p>

            <p class="dialogue">"Containment of what, sir?"</p>

            <p class="narrative">He doesn't answer. Just hands you a tablet showing satellite imagery of Gangnam.</p>

            <p class="narrative">The district is on fire. And in the streets, shapes are moving. Too many shapes. Moving wrong.</p>
        `,
        choices: [
            { text: "\"What are our ROE?\"", target: 4001 },
            { text: "\"How many casualties?\"", target: 4002 },
            { text: "Say nothing. Wait for orders.", target: 4003 }
        ]
    },

    // ═══════════════════════════════════════════════════════════════
    // ACT ONE: THE FALL
    // ═══════════════════════════════════════════════════════════════

    4001: {
        title: "RULES OF ENGAGEMENT",
        campaign: "jins_war",
        content: `
            <p class="dialogue">"Rules of engagement, sir. What are we authorized to do?"</p>

            <p class="narrative">General Kwon's jaw tightens.</p>

            <p class="dialogue">"Contain the affected area. Prevent spread to other districts. Evacuate uninfected civilians where possible."</p>

            <p class="dialogue">"And the infected?"</p>

            <p class="narrative">A long pause. The general's eyes meet yours.</p>

            <p class="dialogue">"The infected are no longer classified as civilians. Neutralize on sight."</p>

            <p class="narrative">The words land like bullets. Neutralize. Korean citizens. On Korean soil.</p>

            <p class="dialogue">"Sir, with respect—"</p>

            <p class="dialogue">"There's no time for debate, Colonel. You'll understand when you see them." He looks away. "I've seen the footage. What's out there... isn't human anymore. Not in any way that matters."</p>

            <p class="narrative">Soyeon's hand brushes yours. Brief. Steadying.</p>

            <p class="dialogue">"Your extraction point is Yeouido. If containment fails, that's our last line. The government will evacuate from there." He straightens. "Don't let it come to that."</p>

            <p class="narrative">Don't let a viral outbreak spread through a city of ten million.</p>

            <p class="narrative">Simple orders. Impossible mission.</p>

            <p class="narrative">Welcome to Unit 707.</p>
        `,
        choices: [
            { text: "Brief the unit. Move out.", target: 4004 },
            { text: "Request more information about the pathogen.", target: 4005 },
            { text: "Ask about civilian evacuation protocols.", target: 4006 }
        ]
    },

    4002: {
        title: "THE COUNT",
        campaign: "jins_war",
        content: `
            <p class="dialogue">"Casualties, sir. How bad is it?"</p>

            <p class="narrative">General Kwon pulls up another screen. Numbers. Estimates. The calculus of catastrophe.</p>

            <p class="dialogue">"Initial estimates put Gangnam exposure at approximately 300,000. Of those, we believe 40% have been... affected. Another 20% are confirmed dead. The remaining 40% are either evacuating or sheltering in place."</p>

            <p class="narrative">The numbers don't compute. 120,000 people infected in a single district. In less than six hours.</p>

            <p class="dialogue">"That's impossible. No pathogen spreads that fast—"</p>

            <p class="dialogue">"This one does." His voice is hollow. "Contact transmission. Near-instantaneous incubation in most cases. The infected aren't just carrying it—they're actively spreading it. Attacking the uninfected."</p>

            <p class="narrative">Attacking. Not coughing on, not accidentally exposing. Attacking.</p>

            <p class="dialogue">"What kind of pathogen turns people violent?"</p>

            <p class="dialogue">"The kind we don't have a name for yet. The kind that makes our containment protocols obsolete." He hands you the tablet. "The full briefing is on there. Read it on the transport. And Colonel—"</p>

            <p class="narrative">He meets your eyes. In them, you see something you've never seen in General Kwon before.</p>

            <p class="narrative">Fear.</p>

            <p class="dialogue">"Don't hesitate. The thing that looks like a person isn't one anymore. Not where it matters."</p>
        `,
        choices: [
            { text: "\"Understood, sir.\"", target: 4004 },
            { text: "\"What's the origin? Where did this come from?\"", target: 4007 },
            { text: "\"What aren't you telling me?\"", target: 4008 }
        ]
    },

    4003: {
        title: "THE SILENCE",
        campaign: "jins_war",
        content: `
            <p class="narrative">You've been a soldier long enough to know when questions help and when they don't. This is the second kind.</p>

            <p class="narrative">You wait. Watch. Let the general explain what he needs to explain.</p>

            <p class="narrative">General Kwon seems to appreciate the silence. He hands you the mission packet—physical paper, classified red, the kind that burns after reading.</p>

            <p class="dialogue">"Unit 707 will establish a containment perimeter at the Gangnam-Seocho border. You'll coordinate with conventional forces to hold the line while evacuation proceeds. If the line breaks—"</p>

            <p class="narrative">He stops. Starts again.</p>

            <p class="dialogue">"If the line breaks, fall back to Yeouido. The president and cabinet are being relocated there. They must be protected at all costs."</p>

            <p class="narrative">At all costs. Military code for "everyone else is expendable."</p>

            <p class="dialogue">"Your birds leave in thirty minutes. Use the time wisely."</p>

            <p class="narrative">He turns away. Dismissed without dismissal.</p>

            <p class="narrative">Soyeon falls into step beside you as you leave.</p>

            <p class="dialogue">"What didn't he say?" she asks quietly.</p>

            <p class="dialogue">"Everything that matters." You pull out your phone. "Get the unit ready. We're going to war."</p>

            <p class="dialogue">"Against who?"</p>

            <p class="dialogue">"I don't know yet. That's what scares me."</p>
        `,
        choices: [
            { text: "Brief the unit personally.", target: 4004 },
            { text: "Read the mission packet first.", target: 4009 },
            { text: "Talk to Soyeon alone before the mission.", target: 4010 }
        ]
    },

    4004: {
        title: "THE BRIEFING",
        campaign: "jins_war",
        content: `
            <p class="narrative">Unit 707 assembles in the ready room. Twenty-four soldiers—the best special forces has to offer. Your people. Your responsibility.</p>

            <p class="narrative">They watch you with the mix of trust and tension that precedes every deployment. They've followed you through impossible missions before. They'll follow you through this one.</p>

            <p class="narrative">You hope.</p>

            <p class="dialogue">"At 1800 hours, a biological incident began in Gangnam District. Details are classified, but what you need to know is this: the infected are violent, fast, and don't respond to conventional medical intervention."</p>

            <p class="narrative">Murmurs. Exchanged glances.</p>

            <p class="dialogue">"Our mission is containment. We establish a perimeter at the Gangnam-Seocho border and hold it while civilians evacuate. Anyone showing signs of infection is to be neutralized. No exceptions."</p>

            <p class="narrative">Sergeant Moon raises a hand. Twenty years in the service, his instincts are sharp as a knife.</p>

            <p class="dialogue">"Colonel. What do 'signs of infection' look like?"</p>

            <p class="narrative">You pull up the footage on the briefing screen. Gangnam CCTV. The quality is poor, but the images are clear enough.</p>

            <p class="narrative">People running. Falling. Getting back up. Moving wrong—too fast, too violent, too hungry.</p>

            <p class="narrative">The room goes quiet.</p>

            <p class="dialogue">"Questions?"</p>

            <p class="narrative">No one speaks. What is there to say?</p>
        `,
        choices: [
            { text: "\"Good. Load up.\"", target: 4011 },
            { text: "\"I know what I'm asking you to do.\"", target: 4012 },
            { text: "Look at Soyeon. Make sure she's ready.", target: 4013 }
        ]
    },

    4010: {
        title: "THE CONVERSATION",
        campaign: "jins_war",
        content: `
            <p class="narrative">You pull Soyeon aside. The armory is empty at this hour—privacy in a world that offers little.</p>

            <p class="dialogue">"Whatever we're about to face," you say quietly, "I need to know you're with me."</p>

            <p class="narrative">She meets your eyes. In them, you see the question she's wanted to ask for years.</p>

            <p class="dialogue">"Always. You know that." She pauses. "But Jin—whatever this is, it's not a normal mission. The general was scared. I've never seen him scared."</p>

            <p class="dialogue">"I know."</p>

            <p class="dialogue">"So what do we do when the orders stop making sense?"</p>

            <p class="narrative">It's the question every soldier dreads. The gap between duty and conscience. The moment when following orders becomes its own kind of betrayal.</p>

            <p class="dialogue">"We do what we've always done. We protect our people. We save who we can save. And when the brass tells us to do something wrong—"</p>

            <p class="narrative">You don't finish. You don't have to. Soyeon knows.</p>

            <p class="dialogue">"Whatever happens out there," she says softly, "I'm glad it's with you."</p>

            <p class="narrative">Her hand finds yours. Brief. Warm. A reminder that underneath the uniform, you're still human.</p>

            <p class="narrative">You'll need that reminder before the night is over.</p>
        `,
        choices: [
            { text: "\"Let's get the unit ready.\"", target: 4004 },
            { text: "Say what you've wanted to say for years.", target: 4014 },
            { text: "Pull back. This isn't the time.", target: 4004 }
        ]
    },

    4014: {
        title: "THE TRUTH",
        campaign: "jins_war",
        content: `
            <p class="narrative">The words have been building for years. Suppressed by duty, by fear, by the knowledge that what you feel could end both your careers.</p>

            <p class="narrative">But careers don't matter when the world is ending.</p>

            <p class="dialogue">"Soyeon." Your voice is barely a whisper. "If we don't make it back—"</p>

            <p class="dialogue">"Don't." Her hand tightens on yours. "Don't say it like a goodbye."</p>

            <p class="dialogue">"Then I'll say it like a beginning."</p>

            <p class="narrative">You kiss her. Soft at first, then desperate—all the years of wanting and waiting compressed into a single moment.</p>

            <p class="narrative">When you pull back, her eyes are wet.</p>

            <p class="dialogue">"I've wanted—" She stops. Laughs, but it sounds like crying. "All this time, I thought it was just me."</p>

            <p class="dialogue">"It was never just you."</p>

            <div class="poetic">
                The soldier loves in secret.<br>
                The soldier serves in silence.<br>
                But when the world ends,<br>
                silence loses its power.
            </div>

            <p class="narrative">The alarm sounds. Thirty minutes to deployment.</p>

            <p class="dialogue">"Whatever comes next," you say, "we face it together."</p>

            <p class="dialogue">"Together." She straightens. Captain Han again, not just Soyeon. "Let's go save Seoul."</p>
        `,
        choices: [
            { text: "Brief the unit. Focus on the mission.", target: 4004 }
        ]
    },

    // ═══════════════════════════════════════════════════════════════
    // ACT TWO: THE LINE
    // ═══════════════════════════════════════════════════════════════

    4011: {
        title: "THE DEPLOYMENT",
        campaign: "jins_war",
        content: `
            <p class="narrative date">MARCH 1, 2026 | 02:30</p>
            <p class="narrative location">SEOUL AIRSPACE | APPROACH TO GANGNAM</p>

            <p class="narrative">The helicopter approaches Seoul from the south. Below, the city burns.</p>

            <p class="narrative">Not everywhere—the infection hasn't spread that far yet. But Gangnam is a sea of fire and shadow, the lights flickering and dying district by district.</p>

            <p class="dialogue">"Ground teams report heavy contact at the expressway junction," the pilot reports. "They're trying to hold the line, but—" Static. "—losing ground fast."</p>

            <p class="narrative">Through the night-vision scope, you see them. The infected, pouring through the streets like water through a broken dam. Thousands of them, moving with terrible purpose.</p>

            <p class="narrative">And among them, pockets of survivors. Civilians trapped by the tide, fighting or running or simply waiting to die.</p>

            <p class="dialogue">"LZ is hot," Soyeon reports. "Conventional forces are pulling back. They want us to cover the retreat."</p>

            <p class="narrative">Cover the retreat. Let thousands of civilians die while the army runs.</p>

            <p class="dialogue">"Orders are to hold the perimeter—" the pilot starts.</p>

            <p class="dialogue">"I heard the orders." You check your weapon. "Put us down at Gangnam Station. There are people trapped there."</p>

            <p class="dialogue">"Colonel, that's inside the contamination zone—"</p>

            <p class="dialogue">"I know exactly where it is. Do it."</p>
        `,
        choices: [
            { text: "Follow orders. Hold the perimeter.", target: 4015 },
            { text: "Go to Gangnam Station. Save who you can.", target: 4016 },
            { text: "Split the unit. Do both.", target: 4017 }
        ]
    },

    4016: {
        title: "THE RESCUE",
        campaign: "jins_war",
        content: `
            <p class="narrative">Gangnam Station. Once the busiest subway hub in Seoul. Now a fortress of the desperate.</p>

            <p class="narrative">Your unit hits the ground running. Twenty-four soldiers against a sea of infected, with a few hundred civilians caught in between.</p>

            <p class="dialogue">"Contact left! Two dozen, coming fast!"</p>

            <p class="narrative">You don't hesitate. The infected move like nothing you've trained for—faster than sprinters, stronger than they should be, immune to pain. But they still die when you shoot them in the head.</p>

            <p class="narrative">The civilians see you coming and surge toward the perimeter. Some are injured, some carrying children, all terrified.</p>

            <p class="dialogue">"Form a corridor!" you command. "Get them to the extraction point!"</p>

            <p class="narrative">Soyeon takes point, her rifle singing. Sergeant Moon anchors the rear, his voice steady despite the chaos.</p>

            <p class="narrative">Two hundred civilians. Then three hundred. Then four.</p>

            <p class="narrative">For every one you save, you see ten more fall. The math is brutal, unforgiving.</p>

            <p class="narrative">But you keep fighting. Because that's what soldiers do.</p>

            <p class="dialogue">"Colonel!" Lieutenant Park's voice crackles over the radio. "Incoming priority transmission from Command!"</p>

            <p class="dialogue">"Busy! Take a message!"</p>

            <p class="dialogue">"They're ordering withdrawal, ma'am. All units to fall back to Yeouido. The perimeter is breached."</p>

            <p class="narrative">The perimeter is breached. The line has failed. Seoul is falling.</p>

            <p class="narrative">And you're still surrounded by people who need saving.</p>
        `,
        choices: [
            { text: "Follow orders. Withdraw to Yeouido.", target: 4018 },
            { text: "Ignore orders. Continue the rescue.", target: 4019 },
            { text: "Buy time. Get these civilians out first.", target: 4020 }
        ]
    },

    4019: {
        title: "DEFIANCE",
        campaign: "jins_war",
        content: `
            <p class="narrative">You key your radio.</p>

            <p class="dialogue">"Command, this is Iron Ghost. Negative on withdrawal. We have three hundred plus civilians at Gangnam Station. Request evacuation support."</p>

            <p class="narrative">Static. Then a voice—cold, official.</p>

            <p class="dialogue">"Iron Ghost, you are ordered to withdraw immediately. The civilian population is no longer a priority. Acknowledge."</p>

            <p class="narrative">No longer a priority. Three hundred human beings, dismissed in a single sentence.</p>

            <p class="dialogue">"Negative, Command. These people are Korean citizens. We don't leave them behind."</p>

            <p class="dialogue">"Colonel Jin, if you disobey this order, you will be subject to court-martial—"</p>

            <p class="narrative">You cut the transmission.</p>

            <p class="narrative">Soyeon is watching you. So is the rest of the unit. Twenty-four soldiers who just watched their commanding officer commit career suicide on an open channel.</p>

            <p class="dialogue">"Anyone who wants to follow orders can take a vehicle and go." You check your ammunition. "I won't hold it against you."</p>

            <p class="narrative">No one moves.</p>

            <p class="dialogue">"Then let's get these people out of here."</p>
        `,
        choices: [
            { text: "Lead the convoy toward the coast.", target: 4021 },
            { text: "Find another extraction point.", target: 4022 },
            { text: "Radio Captain Moon. You need reinforcements from his position.", target: 4023 }
        ]
    },

    4021: {
        title: "THE CONVOY",
        campaign: "jins_war",
        content: `
            <p class="narrative date">MARCH 1, 2026 | 05:15</p>

            <p class="narrative">Four hundred civilians. Twelve vehicles commandeered from abandoned streets. One special forces unit in open defiance of orders.</p>

            <p class="narrative">The convoy moves west, toward the coast, away from the spreading infection and the military's collapsing lines.</p>

            <p class="narrative">Every kilometer is a fight. The infected swarm around the vehicles like waves around rocks. Your soldiers burn through ammunition at a terrifying rate.</p>

            <p class="dialogue">"How much further?" Soyeon asks, reloading beside you.</p>

            <p class="dialogue">"Incheon port. If we can reach the docks, we might find boats—"</p>

            <p class="narrative">An explosion ahead. One of the lead vehicles, hit by something thrown with inhuman strength.</p>

            <p class="dialogue">"Contact front! Heavy numbers!"</p>

            <p class="narrative">The road ahead is blocked. Not just by infected—by a mass of them, hundreds deep, drawn by the noise and light of the convoy.</p>

            <p class="dialogue">"Turn around?" someone asks.</p>

            <p class="dialogue">"Can't. Road behind us is compromised too." You study the terrain. "We go through or we die here."</p>

            <p class="narrative">Four hundred civilians. Twenty-four soldiers. One impossible choice.</p>
        `,
        choices: [
            { text: "Push through. Maximum speed, maximum violence.", target: 4024 },
            { text: "Find another route. There has to be another way.", target: 4025 },
            { text: "Create a diversion. Draw them away.", target: 4026 }
        ]
    },

    4026: {
        title: "THE DIVERSION",
        campaign: "jins_war",
        content: `
            <p class="dialogue">"Moon, take a fire team and draw them east. Make noise, stay mobile, pull as many as you can away from the convoy."</p>

            <p class="narrative">Sergeant Moon nods. No hesitation. No questions. The trust built over a decade of service.</p>

            <p class="dialogue">"Five minutes. Then break contact and extract to the secondary rally point."</p>

            <p class="dialogue">"Understood, Colonel." He pauses. "If we don't make it—"</p>

            <p class="dialogue">"You'll make it. That's an order."</p>

            <p class="narrative">He almost smiles. "Yes, ma'am."</p>

            <p class="narrative">Moon's team peels off, lights blazing, weapons hot. The infected respond immediately—hundreds of them turning to follow the noise.</p>

            <p class="narrative">A hole opens in the horde. Small, but enough.</p>

            <p class="dialogue">"Move! Everyone move NOW!"</p>

            <p class="narrative">The convoy surges forward. Vehicles scraping through gaps too narrow, wheels crushing things you try not to think about.</p>

            <p class="narrative">Three hundred meters. Two hundred. One hundred.</p>

            <p class="narrative">Clear.</p>

            <p class="narrative">You look back. Moon's team is still visible on the ridge, fighting, drawing the horde away.</p>

            <p class="narrative">Then the lights disappear. One by one. Until there's only darkness.</p>

            <p class="dialogue">"Moon! Moon, report!"</p>

            <p class="narrative">Static.</p>
        `,
        choices: [
            { text: "Go back for them.", target: 4027 },
            { text: "Continue to Incheon. Honor their sacrifice.", target: 4028 },
            { text: "Wait at the rally point. Give them time.", target: 4029 }
        ]
    },

    // ═══════════════════════════════════════════════════════════════
    // ACT THREE: THE CHOICE
    // ═══════════════════════════════════════════════════════════════

    4028: {
        title: "THE COST",
        campaign: "jins_war",
        content: `
            <p class="narrative">Incheon Port. Dawn breaking over the Yellow Sea. The convoy reaches the docks as the sun rises on a changed world.</p>

            <p class="narrative">Four hundred civilians, down from four fifty. Sixteen soldiers, down from twenty-four. The cost of defiance measured in bodies left behind.</p>

            <p class="narrative">Soyeon finds you standing at the water's edge, staring at nothing.</p>

            <p class="dialogue">"There are fishing boats. Enough to get everyone to one of the islands. From there—"</p>

            <p class="dialogue">"Moon is dead."</p>

            <p class="narrative">She doesn't argue. Doesn't offer empty comfort.</p>

            <p class="dialogue">"He knew what he was doing. They all did."</p>

            <p class="dialogue">"Does that make it better?"</p>

            <p class="dialogue">"No." She stands beside you. "But it makes it mean something."</p>

            <p class="narrative">Behind you, the civilians are organizing. Loading boats. A doctor is treating the wounded. Children are being counted, families reunited where possible.</p>

            <p class="narrative">Four hundred people who would be dead if you'd followed orders.</p>

            <p class="narrative">Eight soldiers who are dead because you didn't.</p>

            <div class="poetic">
                The math of mercy<br>
                is never clean.<br>
                Save many, lose few—<br>
                the few still matter.
            </div>

            <p class="narrative">Your radio crackles. A civilian frequency, broadcasting coordinates. A voice you recognize.</p>

            <p class="dialogue">"Any survivors, this is the Seoul Museum Relief Station. We have shelter, supplies, medical care. All welcome."</p>

            <p class="narrative">A different kind of resistance. Civilians organizing themselves.</p>
        `,
        choices: [
            { text: "Send the civilians to the islands. You go back.", target: 4030 },
            { text: "Lead everyone to the relief station.", target: 4031 },
            { text: "Stay with the boats. Protect the evacuation.", target: 4032 }
        ]
    },

    4031: {
        title: "THE RELIEF STATION",
        campaign: "jins_war",
        content: `
            <p class="narrative date">MARCH 3, 2026 | YEOUIDO</p>

            <p class="narrative">The Seoul Museum Relief Station is chaos and hope combined.</p>

            <p class="narrative">Two hundred survivors when you arrive. Four hundred more with your convoy. Medical supplies scavenged from hospitals, food from warehouses, weapons from wherever they could be found.</p>

            <p class="narrative">And in the center of it all, a woman in a museum uniform, organizing everything with calm efficiency.</p>

            <p class="dialogue">"You're the soldiers from Gangnam." Not a question. "We heard about your convoy on the emergency frequencies. People said you saved four hundred people when the military abandoned them."</p>

            <p class="dialogue">"We did what we could."</p>

            <p class="dialogue">"You did more than that." She extends her hand. "I'm Yuna. This is my station. Thank you for bringing more people to save."</p>

            <p class="narrative">Yuna. The name echoes strangely. A reminder that before you were a soldier, you were something else. Someone else.</p>

            <p class="narrative">The relief station becomes your base. Military discipline meets civilian resourcefulness. Your remaining soldiers train the able-bodied while Yuna coordinates supplies and medicine.</p>

            <p class="narrative">For three days, you hold. Build walls. Establish routines. Create something like order in the chaos.</p>

            <p class="narrative">On the fourth day, the military finds you.</p>
        `,
        choices: [
            { text: "Face them. You have nothing to hide.", target: 4033 },
            { text: "Prepare to defend the station.", target: 4034 },
            { text: "Evacuate everyone before they arrive.", target: 4035 }
        ]
    },

    4033: {
        title: "THE RECKONING",
        campaign: "jins_war",
        content: `
            <p class="narrative">Colonel Park leads the military detachment. A man you served with in the academy. A man who always followed orders, no matter what.</p>

            <p class="dialogue">"Jin Soojin. You're under arrest for desertion, insubordination, and failure to follow direct orders during a national emergency."</p>

            <p class="narrative">He recites the charges like a prayer. Formal. Cold. The letter of military law.</p>

            <p class="dialogue">"Those civilians behind me would be dead if I'd followed orders."</p>

            <p class="dialogue">"The order came from General Kwon himself. The perimeter was the priority—"</p>

            <p class="dialogue">"The perimeter collapsed anyway. Everyone you left behind is either dead or turned. My people? They're still breathing."</p>

            <p class="narrative">Colonel Park's jaw tightens. He looks at the relief station—six hundred survivors, organized and defended, more order than the military has managed anywhere else.</p>

            <p class="dialogue">"What you've done here..." He stops. Starts again. "It doesn't matter. Orders are orders. If we abandon the chain of command, we have nothing."</p>

            <p class="dialogue">"If the chain of command abandons our people, what does it matter?"</p>

            <p class="narrative">A long silence. Behind Park, his soldiers shift uncomfortably. They've seen the same things you have. Fought the same impossible battle.</p>

            <p class="dialogue">"I could shoot you right now," he says quietly. "Field execution for desertion in wartime."</p>

            <p class="dialogue">"You could. But you won't."</p>
        `,
        choices: [
            { text: "\"Help us, Park. Fight with us, not against us.\"", target: 4036 },
            { text: "\"Do what you have to do. I've made my choice.\"", target: 4037 },
            { text: "\"Walk away. Pretend you never found us.\"", target: 4038 }
        ]
    },

    4036: {
        title: "THE ALLIANCE",
        campaign: "jins_war",
        content: `
            <p class="dialogue">"Help us, Park. You've seen what's happening. The brass is evacuating themselves while people die. This station is saving more lives than any official operation."</p>

            <p class="narrative">He looks at you. At the station behind you. At the six hundred survivors who found hope in defiance.</p>

            <p class="dialogue">"I have orders—"</p>

            <p class="dialogue">"Orders from people who've already written off everyone who isn't useful to them. You know it. Your soldiers know it."</p>

            <p class="narrative">One of Park's men steps forward. Young. Nervous. But determined.</p>

            <p class="dialogue">"Sir, my family is in that camp. My sister, my nephew. They made it here because of Colonel Jin's convoy. If we arrest her—"</p>

            <p class="dialogue">"Private, stand down—"</p>

            <p class="dialogue">"No, sir." The private's voice strengthens. "With respect, I won't arrest the woman who saved my family."</p>

            <p class="narrative">Another soldier steps forward. Then another. The cracks in Park's command spreading like the infection itself.</p>

            <p class="narrative">Finally, Park lowers his weapon. Rubs his face with exhausted hands.</p>

            <p class="dialogue">"God damn it, Jin." He almost smiles. "You always were trouble."</p>

            <p class="dialogue">"Is that a yes?"</p>

            <p class="dialogue">"It's a 'court-martial can wait until the world stops ending.'" He extends his hand. "What do you need?"</p>
        `,
        choices: [
            { text: "Weapons, ammunition, medical supplies.", target: 4039 },
            { text: "Information. What's happening in the rest of the city?", target: 4040 },
            { text: "Your soldiers. We need every fighter we can get.", target: 4041 }
        ]
    },

    // ═══════════════════════════════════════════════════════════════
    // ENDINGS
    // ═══════════════════════════════════════════════════════════════

    jw_ending_ghost: {
        title: "THE GHOST",
        campaign: "jins_war",
        isEnding: true,
        endingCode: "JWGHO",
        content: `
            <p class="narrative date">DAY 30 | SEOUL RUINS</p>

            <p class="narrative">You become a legend in the ruins.</p>

            <p class="narrative">Unit 707—or what's left of it—operates outside any chain of command. You answer to no one. You follow no orders but your own. You save whoever you can, wherever you find them.</p>

            <p class="narrative">They call you the Iron Ghost. The Woman Who Stayed. The Colonel Who Chose.</p>

            <div class="poetic">
                The soldier without an army<br>
                is still a soldier.<br>
                The uniform is cloth.<br>
                The duty is forever.
            </div>

            <p class="narrative">Soyeon stays with you. Through the worst months, the hardest choices, the battles that never seem to end. Her hand in yours in the dark. Her voice the last thing you hear before sleep.</p>

            <p class="narrative">You never make it to Busan. Never join the evacuation. The official military writes you off as KIA—a convenient fiction for a woman who embarrassed them by doing what they couldn't.</p>

            <p class="narrative">But the survivors know the truth. The pockets of resistance that form across Seoul, inspired by your convoy, your choices, your defiance.</p>

            <p class="narrative">The world ended. But you keep fighting.</p>

            <p class="narrative">Because that's what soldiers do.</p>

            <div class="ending soldier-ending">
                <div class="ending-number">JIN'S WAR ENDING</div>
                <h2 class="ending-title">THE GHOST</h2>
                <div class="ending-text">
                    <p>Colonel Jin Soojin. Iron Ghost. The woman who chose duty over orders.</p>
                    <p>They never found her body. They never stopped looking.</p>
                    <p>In the ruins of Seoul, her legend grew with every survivor who remembered the convoy, the relief station, the soldier who stayed.</p>
                    <p>Some ghosts haunt the living. Some ghosts inspire them.</p>
                    <p><em>Civilians saved: 2,400+. Official status: KIA. True status: Legend.</em></p>
                </div>
            </div>
        `,
        choices: []
    },

    jw_ending_reunion: {
        title: "THE REUNION",
        campaign: "jins_war",
        isEnding: true,
        endingCode: "JWREU",
        content: `
            <p class="narrative date">DAY 45 | YEOUIDO RELIEF STATION</p>

            <p class="narrative">The convoy from Hongdae arrives at dawn.</p>

            <p class="narrative">Survivors from the museum district. Civilians who fought through the worst of it with nothing but courage and improvised weapons.</p>

            <p class="narrative">You're coordinating food distribution when Soyeon's voice crackles over the radio.</p>

            <p class="dialogue">"Jin. You need to come to the gate. Now."</p>

            <p class="narrative">Something in her voice. Something that makes your heart pound.</p>

            <p class="narrative">At the gate, among the new arrivals, a woman stands watching you. Curator's badge. Blood-stained clothes. Eyes that have seen too much but haven't lost their light.</p>

            <p class="narrative">Yuna. The woman who saved the museum. The woman who built this station from nothing. The woman who—</p>

            <p class="narrative">The woman you loved, before Soyeon. Before the military. Before duty became easier than feeling.</p>

            <p class="dialogue">"Jin." Her voice is the same. Warm. Wondering. "They told me you were dead."</p>

            <p class="dialogue">"They tell a lot of lies these days."</p>

            <div class="poetic">
                The world ends.<br>
                Love persists.<br>
                In the ruins of everything,<br>
                the heart still remembers.
            </div>

            <p class="narrative">Soyeon stands behind you. Watching. Understanding.</p>

            <p class="narrative">Later, the three of you will talk. About the past, about the future, about what survives when everything else is lost.</p>

            <p class="narrative">But for now, there is only the reunion. Only the impossible moment when someone you thought you'd lost comes back.</p>

            <div class="ending love-ending">
                <div class="ending-number">JIN'S WAR ENDING</div>
                <h2 class="ending-title">THE REUNION</h2>
                <div class="ending-text">
                    <p>The world ended. Love didn't.</p>
                    <p>Jin, Soyeon, and Yuna found each other in the ruins. Built something new from what remained.</p>
                    <p>The relief station became a community. The community became a family.</p>
                    <p>And the soldier who thought she'd lost everything found she still had what mattered most.</p>
                    <p><em>Status: Alive. Community: Thriving. Love: Complicated but real.</em></p>
                </div>
            </div>
        `,
        choices: []
    },

    jw_ending_sacrifice: {
        title: "LAST ORDERS",
        campaign: "jins_war",
        isEnding: true,
        endingCode: "JWSAC",
        content: `
            <p class="narrative date">DAY 21 | YEOUIDO BRIDGE</p>

            <p class="narrative">The horde comes from the north. Fifty thousand infected, drawn by the concentration of survivors at the relief station.</p>

            <p class="narrative">The evacuation is still in progress. Boats loading at the dock. Civilians streaming toward the water. Not enough time.</p>

            <p class="dialogue">"Someone needs to hold the bridge," Soyeon says. Her voice is steady. She knows what she's asking.</p>

            <p class="dialogue">"I know."</p>

            <p class="dialogue">"Jin—"</p>

            <p class="dialogue">"Get them to the boats. All of them. Don't look back."</p>

            <p class="narrative">She kisses you. Fierce and final. The goodbye you've been avoiding since the first night.</p>

            <p class="dialogue">"I love you."</p>

            <p class="dialogue">"I know. Now go."</p>

            <div class="poetic">
                The bridge becomes a line.<br>
                The line becomes a wall.<br>
                The wall is made of one woman<br>
                and a promise to the dead.
            </div>

            <p class="narrative">Sixteen soldiers stay with you. Volunteers, every one. The last of Unit 707, standing where the orders say to run.</p>

            <p class="narrative">The horde hits the bridge like a wave. You fire until your rifle jams, then draw your sidearm. Fire until that's empty, then draw your knife.</p>

            <p class="narrative">The last thing you see is the boats pulling away. Hundreds of civilians, escaping because you gave them time.</p>

            <p class="narrative">The last thing you feel is the sun, rising over a changed world.</p>

            <div class="ending sacrifice-ending">
                <div class="ending-number">JIN'S WAR ENDING</div>
                <h2 class="ending-title">LAST ORDERS</h2>
                <div class="ending-text">
                    <p>Colonel Jin Soojin died on Yeouido Bridge.</p>
                    <p>She held the line for forty-seven minutes. Long enough for 847 civilians to reach the boats.</p>
                    <p>They named a ship after her. The ROKS Jin Soojin, carrying survivors to safer shores.</p>
                    <p>Some soldiers die following orders. Some die giving them.</p>
                    <p><em>Final stand: 47 minutes. Lives saved: 847. Legacy: Eternal.</em></p>
                </div>
            </div>
        `,
        choices: []
    },

    jw_ending_warlord: {
        title: "THE WARLORD",
        campaign: "jins_war",
        isEnding: true,
        endingCode: "JWWAR",
        content: `
            <p class="narrative date">DAY 60 | SEOUL STRONGHOLD</p>

            <p class="narrative">The military abandoned Seoul. You didn't.</p>

            <p class="narrative">Two months of fighting, of rebuilding, of imposing order on chaos. Your soldiers became the core of something new. Not an army—a community. Not a unit—a nation.</p>

            <p class="narrative">They call you the Warlord now. Some mean it as an insult. Most mean it as praise.</p>

            <div class="poetic">
                When the state fails,<br>
                someone must lead.<br>
                When the law dies,<br>
                someone must judge.
            </div>

            <p class="narrative">Your territory stretches from Yeouido to Hongdae. Three thousand survivors under your protection. Walls that hold, food that grows, medicine that heals.</p>

            <p class="narrative">You've killed raiders. Executed collaborators. Made decisions that would horrify the woman you were before.</p>

            <p class="narrative">But you've also saved lives. Built something that might last. Created order from the ashes of everything you believed in.</p>

            <p class="narrative">Soyeon stands at your side, as always. Captain became Colonel. Lover became partner. The woman who helped you build this from nothing.</p>

            <p class="dialogue">"The convoy from Busan arrives tomorrow," she reports. "Supplies, medicine, news from the evacuation fleet."</p>

            <p class="dialogue">"And their request for allegiance?"</p>

            <p class="dialogue">"They want to absorb us into the provisional government. Restore the chain of command."</p>

            <p class="narrative">You look out over your territory. Your people. Your responsibility.</p>

            <p class="dialogue">"We'll discuss it. When they get here."</p>

            <div class="ending power-ending">
                <div class="ending-number">JIN'S WAR ENDING</div>
                <h2 class="ending-title">THE WARLORD</h2>
                <div class="ending-text">
                    <p>The soldier became something else. Something harder. Something necessary.</p>
                    <p>Colonel Jin Soojin, the Warlord of Seoul, ruled her territory with iron will and surprising mercy.</p>
                    <p>When the historians write about the Reconstruction, they will argue whether she was hero or tyrant.</p>
                    <p>Her people didn't argue. They survived. That was enough.</p>
                    <p><em>Territory: 12 km². Population: 3,200+. Government status: Autonomous zone.</em></p>
                </div>
            </div>
        `,
        choices: []
    },

    jw_ending_defector: {
        title: "THE DEFECTOR",
        campaign: "jins_war",
        isEnding: true,
        endingCode: "JWDEF",
        content: `
            <p class="narrative date">DAY 35 | INCHEON HARBOR</p>

            <p class="narrative">The boat leaves at midnight. No lights, no radio, no official permission.</p>

            <p class="narrative">You're done. With the military, with the orders, with the endless calculus of sacrifice and survival. You've given enough. Lost enough. Killed enough.</p>

            <p class="narrative">Soyeon stands at the rail beside you, watching Korea disappear into darkness.</p>

            <p class="dialogue">"No regrets?"</p>

            <p class="dialogue">"Plenty. But not about this."</p>

            <div class="poetic">
                The soldier who walks away<br>
                is not a coward.<br>
                Sometimes the bravest choice<br>
                is to stop fighting.
            </div>

            <p class="narrative">Japan. Taiwan. The Philippines. Anywhere the infection hasn't reached. Anywhere you can be something other than a weapon.</p>

            <p class="narrative">The military will call you a deserter. The survivors you saved will call you a hero. History will argue about which one is true.</p>

            <p class="narrative">You don't care about history. You care about the woman beside you, the sunrise ahead, the chance to be something other than what you were made to be.</p>

            <p class="narrative">The boat sails south. Korea burns behind you.</p>

            <p class="narrative">You don't look back.</p>

            <div class="ending freedom-ending">
                <div class="ending-number">JIN'S WAR ENDING</div>
                <h2 class="ending-title">THE DEFECTOR</h2>
                <div class="ending-text">
                    <p>Colonel Jin Soojin disappeared from military records on Day 35.</p>
                    <p>Some said she died in the evacuation. Some said she fled. Some said she became something else entirely.</p>
                    <p>In a small village in the Philippines, a woman with soldier's eyes runs a school for refugee children.</p>
                    <p>She never talks about Korea. But sometimes, in the quiet moments, she smiles.</p>
                    <p><em>Official status: Deserter. Actual status: Free. Location: Classified.</em></p>
                </div>
            </div>
        `,
        choices: []
    },

    jw_ending_hollow: {
        title: "HOLLOW VICTORY",
        campaign: "jins_war",
        isEnding: true,
        endingCode: "JWVIC",
        content: `
            <p class="narrative date">DAY 90 | BUSAN SAFE ZONE</p>

            <p class="narrative">The medal ceremony is a joke.</p>

            <p class="narrative">Three months after you defied orders, three months after the brass fled while people died, the provisional government wants to make you a hero.</p>

            <p class="dialogue">"For distinguished service in defense of Korean civilians," the general reads from a script. "Colonel Jin Soojin is hereby awarded the Order of Military Merit, Taegeuk class."</p>

            <p class="narrative">Cameras flash. Dignitaries applaud. The survivors from your convoy watch from the audience, their faces a mix of pride and confusion.</p>

            <p class="narrative">You saved them by breaking orders. Now you're being rewarded for it.</p>

            <div class="poetic">
                The system adapts.<br>
                The system absorbs.<br>
                Even defiance becomes<br>
                another tool of power.
            </div>

            <p class="narrative">After the ceremony, you find Soyeon waiting outside.</p>

            <p class="dialogue">"How does it feel?"</p>

            <p class="dialogue">"Empty." You look at the medal. "This doesn't bring back Moon, or Park, or any of the others. It doesn't change what the military did. It just... covers it up."</p>

            <p class="dialogue">"But the people you saved—"</p>

            <p class="dialogue">"Are alive. That's something." You slip the medal into your pocket. "But it's not enough. It'll never be enough."</p>

            <p class="narrative">You walk away from the ceremony, from the cameras, from the carefully constructed narrative of heroism.</p>

            <p class="narrative">The world ended. You survived. Some days, that feels like victory.</p>

            <p class="narrative">Most days, it just feels like another kind of defeat.</p>

            <div class="ending tragedy-ending">
                <div class="ending-number">JIN'S WAR ENDING</div>
                <h2 class="ending-title">HOLLOW VICTORY</h2>
                <div class="ending-text">
                    <p>They gave her medals. They gave her promotions. They gave her everything except the one thing she wanted: her people back.</p>
                    <p>Colonel Jin Soojin became General Jin Soojin. A hero of the Reconstruction. A symbol of military excellence.</p>
                    <p>She hated every moment of it.</p>
                    <p>Some victories taste like ashes. Some honors feel like punishment.</p>
                    <p><em>Rank: General. Decorations: 7. Satisfaction: None.</em></p>
                </div>
            </div>
        `,
        choices: []
    }
};

// ═══════════════════════════════════════════════════════════════
// INTEGRATION
// ═══════════════════════════════════════════════════════════════

function isJinsWarUnlocked() {
    if (typeof gameState !== 'undefined' && gameState.jinRevealed) {
        return true;
    }
    return false;
}

function getJinsWarSection(sectionId) {
    return JINS_WAR_DATA[sectionId] || null;
}

function mergeJinsWarContent() {
    if (typeof STORY_DATA !== 'undefined') {
        Object.assign(STORY_DATA, JINS_WAR_DATA);
    }
}

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        JINS_WAR_INFO,
        JINS_WAR_DATA,
        UNIT_707,
        isJinsWarUnlocked,
        getJinsWarSection,
        mergeJinsWarContent
    };
}

// Auto-merge
if (typeof STORY_DATA !== 'undefined') {
    mergeJinsWarContent();
    console.log('[DEAD SEOUL] Jin\'s War expansion loaded:', Object.keys(JINS_WAR_DATA).length, 'sections');
}
