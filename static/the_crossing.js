/**
 * DEAD SEOUL: THE CROSSING
 * Expansion Pack #2 - The Highway
 *
 * The 400km journey from Seoul to Busan.
 * Every kilometer is a choice. Every rest stop is a gamble.
 * The road is long. The dead are patient.
 *
 * This is the story of the journey.
 */

// ═══════════════════════════════════════════════════════════════
// THE CROSSING METADATA
// ═══════════════════════════════════════════════════════════════

const THE_CROSSING_INFO = {
    id: "the_crossing",
    name: "THE CROSSING",
    subtitle: "400 Kilometers to Hope",
    distance: 400, // Seoul to Busan in km
    unlockRequirements: {
        mainStoryProgress: "busan_path", // Must choose Busan evacuation
        description: "Choose the Busan evacuation route in the main story"
    },
    totalSections: 50,
    endings: {
        tc_arrival: { code: "TCARV", name: "The Arrival", tier: "survival" },
        tc_settlement: { code: "TCSET", name: "The Settlement", tier: "peace" },
        tc_return: { code: "TCRET", name: "The Return", tier: "duty" },
        tc_fortress: { code: "TCFOR", name: "The Fortress", tier: "war" },
        tc_sacrifice: { code: "TCSAC", name: "The Road's End", tier: "sacrifice" },
        tc_lost: { code: "TCLST", name: "Lost Highway", tier: "tragedy" }
    }
};

// ═══════════════════════════════════════════════════════════════
// VEHICLE SYSTEM
// ═══════════════════════════════════════════════════════════════

const VEHICLE_TYPES = {
    sedan: {
        name: "Hyundai Sonata",
        capacity: 4,
        cargo: 2,
        fuel_efficiency: 12, // km per liter
        durability: 60,
        speed: "fast",
        description: "Fast and fuel-efficient. Limited cargo space."
    },
    suv: {
        name: "Kia Sorento",
        capacity: 6,
        cargo: 4,
        fuel_efficiency: 8,
        durability: 80,
        speed: "medium",
        description: "Room for the whole group. Drinks fuel."
    },
    van: {
        name: "Hyundai Starex",
        capacity: 8,
        cargo: 6,
        fuel_efficiency: 6,
        durability: 70,
        speed: "slow",
        description: "Maximum capacity. Slow and thirsty."
    },
    military: {
        name: "K-311 Truck",
        capacity: 12,
        cargo: 10,
        fuel_efficiency: 4,
        durability: 100,
        speed: "slow",
        description: "Armored. Intimidating. Rare fuel type."
    }
};

// ═══════════════════════════════════════════════════════════════
// HIGHWAY ROUTE SYSTEM
// ═══════════════════════════════════════════════════════════════

const HIGHWAY_SEGMENTS = {
    seoul_start: {
        name: "Seoul Departure",
        km: 0,
        description: "The city burns behind you. The highway stretches ahead.",
        connections: ["suwon"],
        threats: { horde: 3, bandits: 1, military: 2 },
        events: ["departure_choice", "first_roadblock"]
    },
    suwon: {
        name: "Suwon Interchange",
        km: 45,
        description: "The fortress city. Its ancient walls offer no protection from this plague.",
        connections: ["osan", "hwaseong"],
        threats: { horde: 4, bandits: 2, military: 3 },
        rest_stop: "suwon_rest",
        events: ["suwon_survivors", "hwaseong_detour"]
    },
    osan: {
        name: "Osan Air Base",
        km: 65,
        description: "American fighters still circle overhead. The base is dark.",
        connections: ["pyeongtaek"],
        threats: { horde: 2, bandits: 1, military: 5 },
        events: ["airbase_encounter", "military_convoy"]
    },
    hwaseong: {
        name: "Hwaseong Coast Road",
        km: 55,
        description: "A longer route but hugs the coast. Fewer hordes. More unknowns.",
        connections: ["pyeongtaek"],
        threats: { horde: 1, bandits: 3, military: 1 },
        events: ["coastal_village", "fishing_boat"]
    },
    pyeongtaek: {
        name: "Pyeongtaek Junction",
        km: 90,
        description: "The highway splits here. North to the mountains. South to the coast.",
        connections: ["cheonan", "anseong"],
        threats: { horde: 3, bandits: 2, military: 2 },
        rest_stop: "pyeongtaek_rest",
        events: ["refugee_camp", "highway_pileup"]
    },
    cheonan: {
        name: "Cheonan City",
        km: 120,
        description: "Independence Hall stands silent. The city that remembered Korea's struggle now struggles itself.",
        connections: ["daejeon"],
        threats: { horde: 4, bandits: 3, military: 2 },
        rest_stop: "cheonan_rest",
        events: ["independence_hall", "hospital_supplies"]
    },
    anseong: {
        name: "Anseong Highlands",
        km: 110,
        description: "Mountain roads. Steep. Dangerous. But the dead don't climb well.",
        connections: ["daejeon"],
        threats: { horde: 1, bandits: 4, military: 1 },
        events: ["mountain_settlement", "bandit_toll"]
    },
    daejeon: {
        name: "Daejeon Metropolitan",
        km: 165,
        description: "The heart of Korea's rail network. Trains don't run anymore.",
        connections: ["gimcheon", "gyeryong"],
        threats: { horde: 5, bandits: 3, military: 4 },
        rest_stop: "daejeon_rest",
        events: ["science_city", "kaist_survivors", "expo_shelter"]
    },
    gyeryong: {
        name: "Gyeryong Military Zone",
        km: 180,
        description: "Korea's Pentagon. Heavily fortified. Heavily suspicious.",
        connections: ["gimcheon"],
        threats: { horde: 2, bandits: 1, military: 5 },
        events: ["military_checkpoint", "defector_choice"]
    },
    gimcheon: {
        name: "Gimcheon Pass",
        km: 230,
        description: "The mountain pass. Beautiful once. Treacherous now.",
        connections: ["gumi", "sangju"],
        threats: { horde: 3, bandits: 4, military: 1 },
        events: ["tunnel_horror", "stranded_bus"]
    },
    gumi: {
        name: "Gumi Industrial Zone",
        km: 260,
        description: "Samsung factories line the highway. Dead workers shamble between assembly lines.",
        connections: ["daegu"],
        threats: { horde: 4, bandits: 2, military: 2 },
        rest_stop: "gumi_rest",
        events: ["factory_raid", "tech_salvage"]
    },
    sangju: {
        name: "Sangju Valley",
        km: 245,
        description: "Apple orchards and persimmon groves. Nature reclaiming the land.",
        connections: ["daegu"],
        threats: { horde: 2, bandits: 3, military: 1 },
        events: ["farm_survivors", "orchard_camp"]
    },
    daegu: {
        name: "Daegu City",
        km: 300,
        description: "The fashion city. Its famous markets are now feeding grounds.",
        connections: ["gyeongsan", "waegwan"],
        threats: { horde: 5, bandits: 4, military: 3 },
        rest_stop: "daegu_rest",
        events: ["seomun_market", "dongdaegu_station", "military_holdout"]
    },
    waegwan: {
        name: "Waegwan Bridge",
        km: 280,
        description: "The Nakdong River crossing. A natural chokepoint.",
        connections: ["daegu"],
        threats: { horde: 3, bandits: 2, military: 4 },
        events: ["bridge_standoff", "river_crossing"]
    },
    gyeongsan: {
        name: "Gyeongsan Universities",
        km: 315,
        description: "College campuses. Dormitories became tombs.",
        connections: ["ulsan_junction"],
        threats: { horde: 4, bandits: 2, military: 2 },
        events: ["campus_survivors", "research_lab"]
    },
    ulsan_junction: {
        name: "Ulsan Junction",
        km: 350,
        description: "East to Ulsan's industrial coast. South to Busan.",
        connections: ["ulsan", "busan_approach"],
        threats: { horde: 3, bandits: 3, military: 3 },
        events: ["junction_choice", "caravan_encounter"]
    },
    ulsan: {
        name: "Ulsan Petrochemical",
        km: 370,
        description: "The refineries still burn. Endless fuel if you can survive the flames.",
        connections: ["busan_approach"],
        threats: { horde: 4, bandits: 2, military: 2 },
        events: ["refinery_raid", "tanker_convoy"]
    },
    busan_approach: {
        name: "Busan Approaches",
        km: 390,
        description: "The last stretch. The ocean awaits. Safety awaits. Maybe.",
        connections: ["busan_gates"],
        threats: { horde: 5, bandits: 4, military: 5 },
        events: ["final_horde", "refugee_flood"]
    },
    busan_gates: {
        name: "Busan Safe Zone",
        km: 400,
        description: "The gates of salvation. Or so they say.",
        connections: [],
        threats: { horde: 0, bandits: 0, military: 5 },
        events: ["arrival", "entry_challenge"]
    }
};

// ═══════════════════════════════════════════════════════════════
// REST STOP DATA
// ═══════════════════════════════════════════════════════════════

const REST_STOPS = {
    suwon_rest: {
        name: "Suwon Highway Rest Area",
        fuel: 60, // % chance of fuel
        food: 40,
        medical: 20,
        survivors: 30,
        threat: 3,
        description: "A large rest area. Popular before. Popular now—for different reasons."
    },
    pyeongtaek_rest: {
        name: "Pyeongtaek Service Area",
        fuel: 50,
        food: 50,
        medical: 30,
        survivors: 40,
        threat: 2,
        description: "Truck stop. Good supplies. Bad company sometimes."
    },
    cheonan_rest: {
        name: "Cheonan Oasis",
        fuel: 40,
        food: 60,
        medical: 40,
        survivors: 50,
        threat: 4,
        description: "Famous for its walnut cookies. Famous now for being a battleground."
    },
    daejeon_rest: {
        name: "Daejeon IC Service Area",
        fuel: 30,
        food: 30,
        medical: 50,
        survivors: 60,
        threat: 5,
        description: "Major rest stop. Major population. Major problem."
    },
    gumi_rest: {
        name: "Gumi Industrial Rest Stop",
        fuel: 70,
        food: 20,
        medical: 30,
        survivors: 20,
        threat: 3,
        description: "Next to the factories. Good for parts and fuel. Bad for food."
    },
    daegu_rest: {
        name: "Daegu Gateway",
        fuel: 20,
        food: 40,
        medical: 60,
        survivors: 70,
        threat: 5,
        description: "Hospital supplies raided from nearby clinics. Heavily contested."
    }
};

// ═══════════════════════════════════════════════════════════════
// THE CROSSING STORY DATA
// ═══════════════════════════════════════════════════════════════

const THE_CROSSING_DATA = {

    // ═══════════════════════════════════════════════════════════════
    // PROLOGUE - THE DECISION TO LEAVE
    // ═══════════════════════════════════════════════════════════════

    tc_prologue: {
        title: "THE ROAD SOUTH",
        campaign: "the_crossing",
        content: `
            <p class="narrative date">DAY 7 | 06:15 AM</p>
            <p class="narrative location">YEOUIDO | SOUTH GATE</p>

            <p class="narrative">Seven days since the world ended. Seven days of fighting, scavenging, surviving.</p>

            <p class="narrative">The radio says Busan is safe. The last broadcast before the stations went dark: military evacuation zone, naval extraction, passage to Japan.</p>

            <p class="narrative">Four hundred kilometers of highway. Through cities of the dead. Through territory held by survivors who stopped being human in spirit if not in flesh.</p>

            <p class="narrative">Minho studies the map, his jaw tight.</p>

            <p class="dialogue">"It's suicide. The Gyeongbu Expressway will be clogged for kilometers. And once we're out of Seoul's perimeter, there's no backup. No safe houses. Just road."</p>

            <p class="narrative">Soojin checks her rifle. She's been quiet since her unit fell.</p>

            <p class="dialogue">"What's the alternative? Stay here until the supplies run out? Until the hordes find a way through the barricades?"</p>

            <div class="poetic">
                Four hundred kilometers<br>
                of broken asphalt and broken dreams.<br>
                Four hundred kilometers<br>
                between here and hope.
            </div>

            <p class="narrative">The car is packed. Fuel for 200 kilometers if you're careful. Food for three days. Medicine for one bad injury.</p>

            <p class="narrative">It's not enough. It's never enough.</p>

            <p class="narrative">But the alternative is staying. And staying means dying slowly instead of fast.</p>

            <p class="dialogue">"It's your call," Minho says, looking at you. "You got us this far. Where do we go from here?"</p>
        `,
        choices: [
            { text: "Take the Gyeongbu Expressway. Fastest route.", target: 2001 },
            { text: "Take the coastal road. Longer but fewer hordes.", target: 2002 },
            { text: "We're not ready. One more day of preparation.", target: 2003 }
        ]
    },

    // ═══════════════════════════════════════════════════════════════
    // ACT ONE: DEPARTURE
    // ═══════════════════════════════════════════════════════════════

    2001: {
        title: "THE EXPRESSWAY",
        campaign: "the_crossing",
        content: `
            <p class="narrative">The Gyeongbu Expressway stretches south like a scar across the landscape.</p>

            <p class="narrative">Even from here, you can see the congestion. Abandoned vehicles. Overturned trucks. The aftermath of a mass exodus that went nowhere.</p>

            <p class="dialogue">"Stick to the shoulder," Soojin says. "When the shoulder's blocked, we push through the median. When the median's blocked—"</p>

            <p class="dialogue">"We improvise." Minho puts the car in gear. "Story of our lives."</p>

            <p class="narrative">Seoul disappears in the rearview mirror. Smoke rises from Gangnam. Helicopter sounds fade to silence.</p>

            <p class="narrative">The highway is a graveyard of abandoned dreams. Family sedans packed with belongings. Corporate buses that never reached their destination. A wedding limousine, white ribbons still fluttering in the wind, dark stains on the windows.</p>

            <p class="narrative">Ten kilometers out, you hit the first roadblock.</p>

            <p class="narrative">Not infected. Survivors.</p>

            <p class="narrative">Three vehicles across the highway. Men with hunting rifles. A hand-painted sign: TOLL - SUPPLIES OR BLOOD.</p>
        `,
        choices: [
            { text: "Pay the toll. We can't afford a fight.", target: 2004 },
            { text: "Negotiate. Information for passage.", target: 2005 },
            { text: "Ram through. Don't slow down.", target: 2006 },
            { text: "Turn back. Find another route.", target: 2002 }
        ]
    },

    2002: {
        title: "THE COAST ROAD",
        campaign: "the_crossing",
        content: `
            <p class="narrative">The coastal route adds 50 kilometers. But the ocean has always been cleaner than the land.</p>

            <p class="narrative">You take the western exit, toward Incheon first, then south along the Yellow Sea.</p>

            <p class="dialogue">"This is fishing territory," Soojin notes. "Small towns. Boat access. If Busan falls through, we might find passage by sea."</p>

            <p class="dialogue">"If we make it that far." Minho's hands are tight on the wheel. "Longer route means more fuel stops. More exposure. More chances for things to go wrong."</p>

            <p class="narrative">The coast road is quieter. Salt air through the windows. Fishing villages that look almost peaceful from a distance.</p>

            <p class="narrative">Almost.</p>

            <p class="narrative">The first village you pass—Hwaseong—has smoke rising from its center. Not fire damage. Cook fires. Survivors.</p>

            <p class="narrative">A figure waves from the roadside. A woman, maybe sixty, holding a white cloth.</p>

            <p class="dialogue">"Please," she calls as you slow. "My husband needs medicine. We can trade. Fish. Fuel. Anything."</p>
        `,
        choices: [
            { text: "Stop. Help her.", target: 2007 },
            { text: "Keep driving. It could be a trap.", target: 2008 },
            { text: "Slow down but don't stop. Ask what she needs.", target: 2009 }
        ]
    },

    2003: {
        title: "ONE MORE DAY",
        campaign: "the_crossing",
        content: `
            <p class="narrative">"One more day," you say. "We need more supplies. Better intel."</p>

            <p class="narrative">Minho nods slowly. Soojin doesn't argue.</p>

            <p class="narrative">One more day in Seoul. One more day of scavenging, of watching the perimeter, of listening to the distant sounds of a city eating itself.</p>

            <p class="narrative">The day passes in fragments:</p>

            <p class="narrative">Morning: You find an abandoned ambulance. Inside, a treasure trove of medical supplies. Also inside: the paramedic who didn't make it, still strapped to the gurney, reaching toward you with broken fingers.</p>

            <p class="narrative">Afternoon: A radio broadcast—garbled, desperate. Someone claiming the military is regrouping in Daejeon. "Come to the expo center. Safety in numbers." The broadcast repeats every fifteen minutes. No one responds to your calls.</p>

            <p class="narrative">Evening: The barricade on the south perimeter falls. You lose two people from your building. The horde disperses by morning, but the message is clear.</p>

            <p class="narrative">Time is running out.</p>

            <p class="dialogue">"Tomorrow," Minho says, checking the new supplies. "No more delays. We leave at dawn."</p>
        `,
        choices: [
            { text: "Dawn. The Gyeongbu Expressway.", target: 2001 },
            { text: "Dawn. The coastal road.", target: 2002 },
            { text: "That radio broadcast. We should investigate.", target: 2010 }
        ]
    },

    2004: {
        title: "THE TOLL",
        campaign: "the_crossing",
        content: `
            <p class="narrative">You slow the car. Roll down the window.</p>

            <p class="dialogue">"We don't want trouble," you call out. "What do you need?"</p>

            <p class="narrative">The leader approaches. Weathered face, military haircut gone ragged, eyes that have seen too much.</p>

            <p class="dialogue">"Food. Medicine. Ammunition." He looks at your vehicle, your passengers, the supplies visible through the windows. "You're heading south? Busan?"</p>

            <p class="dialogue">"If it's still there."</p>

            <p class="dialogue">"It is. For now." He spits on the asphalt. "We had people come through last week. Military convoy. Said the safe zone's holding but they're not taking just anyone. Need to prove you're useful. Or rich."</p>

            <p class="narrative">He gestures at the roadblock.</p>

            <p class="dialogue">"Half your food. Five rounds of ammunition. And any medicine you can spare. That's the price for the next fifty kilometers of clear road."</p>

            <p class="narrative">It's steep. It'll hurt your chances.</p>

            <p class="narrative">But the alternative is fighting. And fighting means losing people.</p>
        `,
        choices: [
            { text: "Pay in full. Safety is worth it.", target: 2011 },
            { text: "Negotiate down. Meet halfway.", target: 2012 },
            { text: "Refuse. \"Find easier marks.\"", target: 2013 }
        ]
    },

    2005: {
        title: "THE NEGOTIATION",
        campaign: "the_crossing",
        content: `
            <p class="narrative">You step out of the car. Hands visible. Non-threatening.</p>

            <p class="dialogue">"We can trade something more valuable than supplies," you say. "Information."</p>

            <p class="narrative">The leader's eyes narrow. Interest.</p>

            <p class="dialogue">"Talk."</p>

            <p class="dialogue">"The Seoul perimeter. Where it's weak, where it's strong. Which buildings have supplies, which ones are death traps." You meet his gaze. "You're not staying here for fun. You want to get back into the city. I can tell you how."</p>

            <p class="narrative">A long silence. The men behind him shift, uncertain.</p>

            <p class="dialogue">"Why would we want to go back into that hellhole?"</p>

            <p class="dialogue">"Because there's a weapons cache in Yongsan. Military grade. The army abandoned it when they fell back. I know where it is. I can draw you a map."</p>

            <p class="narrative">His expression changes. Greed, barely concealed.</p>

            <p class="dialogue">"And in exchange?"</p>

            <p class="dialogue">"Free passage. And any intel you have about the road south."</p>
        `,
        choices: [
            { text: "Tell the truth about Yongsan.", target: 2014 },
            { text: "Lie. Send them into a death trap.", target: 2015 },
            { text: "Give partial information. Keep some leverage.", target: 2016 }
        ]
    },

    2006: {
        title: "THE BREAKTHROUGH",
        campaign: "the_crossing",
        content: `
            <p class="dialogue">"Hold on."</p>

            <p class="narrative">Minho accelerates. The engine roars.</p>

            <p class="narrative">Soojin leans out the window, rifle up. Not shooting—not yet—but the message is clear.</p>

            <p class="narrative">The toll collectors scatter. A few raise weapons, but you're past them before they can aim properly. Gunshots crack behind you—one hits the rear windshield, spiderwebbing the glass—but you're through.</p>

            <p class="narrative">Heart pounding. Adrenaline singing.</p>

            <p class="dialogue">"They'll radio ahead," Soojin says, scanning behind. "If they have friends down the road—"</p>

            <p class="dialogue">"Then we deal with it." Minho doesn't slow down. "Everyone okay?"</p>

            <p class="narrative">A quick check. No injuries. No damage beyond the window.</p>

            <p class="narrative">Lucky.</p>

            <p class="narrative">The highway stretches ahead, empty for now. But the easy kilometers are behind you.</p>

            <p class="narrative">From here on, every checkpoint will be harder. Every encounter more dangerous.</p>

            <p class="narrative">You've shown your hand. Made enemies.</p>

            <p class="narrative">It was probably the right call.</p>

            <p class="narrative">Probably.</p>
        `,
        choices: [
            { text: "Keep pushing. Speed is safety.", target: 2017 },
            { text: "Find a place to hide. Let things cool down.", target: 2018 },
            { text: "Switch to the coastal route. They won't expect that.", target: 2019 }
        ]
    },

    2007: {
        title: "THE KINDNESS",
        campaign: "the_crossing",
        content: `
            <p class="narrative">You stop the car.</p>

            <p class="dialogue">"Wait here," you tell Minho. "Keep the engine running."</p>

            <p class="narrative">The woman hurries over, relief and desperation in equal measure.</p>

            <p class="dialogue">"Thank you, thank you. My husband—he was bitten three days ago but he hasn't turned. I think—I think he might be immune. But he's sick. Fever. The wound is infected."</p>

            <p class="narrative">Not immune. Just slow-converting. You've seen it before. Some people take days instead of hours.</p>

            <p class="narrative">But you don't tell her that.</p>

            <p class="dialogue">"What do you need?"</p>

            <p class="dialogue">"Antibiotics. Painkillers. Anything."</p>

            <p class="narrative">You have limited supplies. Using them here means less for the road ahead.</p>

            <p class="narrative">But the woman's eyes are so hopeful. So desperate.</p>

            <p class="narrative">And maybe—just maybe—she's right. Maybe he is immune. The first real hope you've seen since this started.</p>
        `,
        choices: [
            { text: "Give her the medicine. It's the right thing to do.", target: 2020 },
            { text: "Tell her the truth. He's turning. She needs to know.", target: 2021 },
            { text: "Ask to see him first. Assess the situation.", target: 2022 }
        ]
    },

    2008: {
        title: "THE SUSPICION",
        campaign: "the_crossing",
        content: `
            <p class="narrative">You don't slow down.</p>

            <p class="narrative">The woman's face falls as you pass. In the mirror, you see her crumple, see her wave become a gesture of defeat.</p>

            <p class="dialogue">"That could have been a trap," Soojin says quietly. "Bait for travelers."</p>

            <p class="dialogue">"It could have been real." Minho's voice is flat. "An old woman who needed help."</p>

            <p class="narrative">Silence in the car.</p>

            <p class="narrative">The coast road stretches ahead, beautiful and empty. The ocean shimmers in the morning light.</p>

            <p class="narrative">You made a choice. One of a thousand you'll make before Busan. Some right, some wrong, most impossible to judge until it's too late.</p>

            <p class="narrative">Ten kilometers later, you see smoke ahead. Another village. This one is clearly abandoned—doors hanging open, cars left in driveways, the smell of death carried on the sea breeze.</p>

            <p class="narrative">But among the ruins, you spot something useful: a fuel station. Pumps standing like monuments to the old world.</p>
        `,
        choices: [
            { text: "Stop for fuel. We need it.", target: 2023 },
            { text: "Keep driving. It's not worth the risk.", target: 2024 },
            { text: "Send someone to scout first.", target: 2025 }
        ]
    },

    2009: {
        title: "THE COMPROMISE",
        campaign: "the_crossing",
        content: `
            <p class="narrative">You slow but don't stop. Keep the car in gear, ready to move.</p>

            <p class="dialogue">"What's the situation?" you call through the window.</p>

            <p class="narrative">The woman walks alongside the car, breathless.</p>

            <p class="dialogue">"My husband. Bitten but not turned. Three days now. Please—he needs antibiotics. The wound is infected."</p>

            <p class="narrative">Soojin leans forward from the back seat.</p>

            <p class="dialogue">"Three days? That's unusual. Where is he?"</p>

            <p class="narrative">The woman points toward a small house near the water. Fishing nets drying in the yard. A boat in the driveway.</p>

            <p class="dialogue">"Can we see him?" you ask. "Before we decide?"</p>

            <p class="narrative">The woman hesitates. Fear flickers across her face.</p>

            <p class="dialogue">"He's... restrained. Just in case. I'm not stupid. But he's still talking. Still himself. Please."</p>

            <p class="narrative">Something about her desperation feels genuine. Or maybe you just want it to be.</p>
        `,
        choices: [
            { text: "Go see him. Verify her story.", target: 2022 },
            { text: "Give her medicine without looking. Trust her.", target: 2020 },
            { text: "Ask about the boat instead.", target: 2026 }
        ]
    },

    // ═══════════════════════════════════════════════════════════════
    // ACT TWO: THE MIDDLE PASSAGE
    // ═══════════════════════════════════════════════════════════════

    2017: {
        title: "SUWON INTERCHANGE",
        campaign: "the_crossing",
        content: `
            <p class="narrative">Suwon. The fortress city. Its ancient walls visible from the highway, a cruel joke now—stone ramparts that held against Mongol armies and Japanese invasions, useless against an enemy that doesn't siege but simply spreads.</p>

            <p class="narrative">The interchange is chaos frozen in time. Vehicles everywhere. Most empty. Some not.</p>

            <p class="narrative">Minho weaves through the wreckage, years of Seoul driving finally paying off.</p>

            <p class="dialogue">"Service area ahead," Soojin says, checking the map. "Last reliable fuel stop before Cheonan. We should consider—"</p>

            <p class="narrative">She stops.</p>

            <p class="narrative">Ahead, the service area is occupied. Not by the dead.</p>

            <p class="narrative">Vehicles arranged in a defensive circle. Armed guards on elevated positions. A banner strung between lampposts: SURVIVORS' COLLECTIVE.</p>

            <p class="dialogue">"That's... organized," Minho says slowly. "Military training. Look at the sight lines."</p>

            <p class="narrative">A man emerges from the compound, waving you down. Not threatening. Professional.</p>

            <p class="dialogue">"Travelers! We're friendlies. Pull in. Safe harbor, fresh water, information exchange."</p>
        `,
        choices: [
            { text: "Accept the invitation. We need allies.", target: 2027 },
            { text: "Approach cautiously. Ask questions first.", target: 2028 },
            { text: "Decline politely. Keep moving.", target: 2029 },
            { text: "This feels wrong. Find another route.", target: 2030 }
        ]
    },

    2020: {
        title: "THE GIFT",
        campaign: "the_crossing",
        content: `
            <p class="narrative">You open the medical kit. Antibiotics. Painkillers. Bandages.</p>

            <p class="dialogue">"This won't cure him if he's turning," you say honestly. "But if the infection is just bacterial, this should help."</p>

            <p class="narrative">The woman takes the supplies with shaking hands. Tears stream down her weathered face.</p>

            <p class="dialogue">"Thank you. Thank you." She reaches into her coat, pulls out a folded paper. "Here. The road south. My husband was a fisherman—he knew the coast. These are safe harbors. Places with boats, supplies, good people."</p>

            <p class="narrative">The map is hand-drawn but detailed. Annotations in neat handwriting: AVOID (military), FRIENDLY (church group), FUEL (abandoned station, pumps work).</p>

            <p class="dialogue">"And if you make it to Busan—look for the ferry terminal. Not the main evacuation point. The old terminal on the east side. There are fishing crews running people to Jeju. Safer than the military ships."</p>

            <p class="narrative">She pauses.</p>

            <p class="dialogue">"If we don't make it... someone should know that route. Someone should survive."</p>
        `,
        choices: [
            { text: "Take the map. Thank her. Continue south.", target: 2031 },
            { text: "Offer to take them with you.", target: 2032 },
            { text: "Stay for a meal. Rest before continuing.", target: 2033 }
        ]
    },

    2021: {
        title: "THE TRUTH",
        campaign: "the_crossing",
        content: `
            <p class="narrative">You step out of the car. Meet her eyes.</p>

            <p class="dialogue">"Three days is a long time. But it's not immunity. Some people convert slower than others. The outcome is the same."</p>

            <p class="narrative">The woman's face crumbles. She knew. On some level, she already knew.</p>

            <p class="dialogue">"No. No, he's still talking. He knows who I am. He—"</p>

            <p class="dialogue">"They stay aware longer than you'd think. Until they don't." You keep your voice gentle. "I'm sorry. I really am. But giving him medicine won't change what's happening."</p>

            <p class="narrative">She stands there, small and broken against the infinite blue of the sea.</p>

            <p class="dialogue">"What do I do?"</p>

            <p class="narrative">The question hangs in the salt air. The answer is ugly. Necessary.</p>

            <p class="dialogue">"You do what he'd want you to do. If he's still himself—he'll understand."</p>

            <p class="narrative">A long silence. Then she nods, once, slowly.</p>

            <p class="dialogue">"We have a boat," she says quietly. "He was going to take us to Jeju. If you... if you do this for us... the boat is yours."</p>
        `,
        choices: [
            { text: "Help her end it. Take the boat.", target: 2034 },
            { text: "I can't. Give her a weapon and leave.", target: 2035 },
            { text: "Wait. See the husband first. Make sure.", target: 2022 }
        ]
    },

    2022: {
        title: "THE EXAMINATION",
        campaign: "the_crossing",
        content: `
            <p class="narrative">The house is small. Neat despite everything. The smell of fish and the sea.</p>

            <p class="narrative">The husband is in the bedroom, tied to the bed frame. An old man, maybe seventy, skin grey and waxy, eyes that track you as you enter.</p>

            <p class="dialogue">"Visitors, Sunhi?" His voice is weak but present. Human. "Tell them... tell them about the route."</p>

            <p class="narrative">The woman—Sunhi—hovers in the doorway.</p>

            <p class="dialogue">"He's been like this for days. Sometimes lucid. Sometimes not."</p>

            <p class="narrative">You crouch beside the bed. Check his pulse. Examine the wound on his forearm—jagged, infected, but not spreading the way conversion wounds typically do.</p>

            <p class="narrative">Soojin appears beside you, clinical gaze assessing.</p>

            <p class="dialogue">"Unusual presentation," she murmurs. "The infection vector is... I've never seen it localized like this. If he was going to turn, it should have spread by now."</p>

            <p class="narrative">The old man's hand finds yours. Grip surprisingly strong.</p>

            <p class="dialogue">"I feel it... fighting inside. Something different. I don't know why I'm still here." His eyes meet yours. "But I am. And if there's a chance—even a small one—I want to know why."</p>
        `,
        choices: [
            { text: "Help him. Study what makes him different.", target: 2036 },
            { text: "Leave medicine and move on. We can't stay.", target: 2031 },
            { text: "End it now. Don't take the risk.", target: 2037 }
        ]
    },

    // ═══════════════════════════════════════════════════════════════
    // MAJOR ROUTE NODES
    // ═══════════════════════════════════════════════════════════════

    2027: {
        title: "THE COLLECTIVE",
        campaign: "the_crossing",
        content: `
            <p class="narrative">The Survivors' Collective occupies the Suwon service area like a military installation.</p>

            <p class="narrative">Thirty people, maybe more. A mix of civilians and ex-military, organized around a core group that clearly knows what they're doing.</p>

            <p class="narrative">The leader introduces herself as Colonel Kim—retired ROK Army, specializing in logistics.</p>

            <p class="dialogue">"We've been here since Day 3. Set up a safe zone, established trade routes with other survivor groups. Pyeongtaek. Cheonan. Even got radio contact with a group in Daejeon."</p>

            <p class="narrative">She shows you their operation: rain collection system, solar panels scavenged from a nearby warehouse, a vehicle pool for supply runs.</p>

            <p class="dialogue">"Busan's real. We've had people make it. But the route gets harder past Daejeon. Horde activity increases. The military's pulling back, which means less order, more chaos."</p>

            <p class="narrative">She pauses at a wall map covered in markings.</p>

            <p class="dialogue">"We could use people like you. Combat-ready. Vehicle. Supplies. Help us secure the route, and we'll make sure you reach Busan."</p>
        `,
        choices: [
            { text: "Stay and help. Strength in numbers.", target: 2038 },
            { text: "Exchange information and supplies. Then continue alone.", target: 2039 },
            { text: "Ask about the Daejeon radio contact.", target: 2040 },
            { text: "Decline. Something feels off about this place.", target: 2041 }
        ]
    },

    2038: {
        title: "JOINING THE COLLECTIVE",
        campaign: "the_crossing",
        content: `
            <p class="narrative">Three days with the Collective.</p>

            <p class="narrative">Three days of guard rotations, supply runs, and learning how to survive as part of something larger.</p>

            <p class="narrative">Colonel Kim runs a tight ship. Everyone contributes. Everyone eats. The rules are clear: no unnecessary risks, no solo operations, no keeping supplies from the group.</p>

            <p class="dialogue">"It works because we trust each other," she says during a briefing. "The moment that trust breaks, we're done."</p>

            <p class="narrative">Minho adapts quickly—his corporate skills translate surprisingly well to resource management. Soojin finds purpose training new recruits in combat basics.</p>

            <p class="narrative">And you? You find something you haven't felt since Seoul: stability.</p>

            <p class="narrative">On the fourth morning, Colonel Kim calls you into her office.</p>

            <p class="dialogue">"We're moving south in two days. Full convoy. Everyone who wants to try for Busan. You've earned your place—but I need to know you're committed."</p>

            <p class="narrative">She slides a map across the table. The route is marked in red.</p>

            <p class="dialogue">"If you're with us, you follow orders. No deviation. No heroics. We move as one or we die as one."</p>
        `,
        choices: [
            { text: "Commit fully. We're with the Collective now.", target: 2042 },
            { text: "Ask for independence. We work together but keep our autonomy.", target: 2043 },
            { text: "Wait. Something about this feels like a trap.", target: 2044 }
        ]
    },

    2040: {
        title: "THE DAEJEON SIGNAL",
        campaign: "the_crossing",
        content: `
            <p class="dialogue">"The Daejeon group—what do you know about them?"</p>

            <p class="narrative">Colonel Kim's expression shifts. Careful. Guarded.</p>

            <p class="dialogue">"They call themselves the Science Council. Survivors from KAIST, the research complex. They've been broadcasting for two weeks, claiming they're working on something. A treatment. Maybe a cure."</p>

            <p class="dialogue">"And you believe them?"</p>

            <p class="dialogue">"I believe they're brilliant people who've survived this long for a reason." She pauses. "I also believe desperate scientists do desperate things. Their broadcasts are... specific. They're looking for particular types of survivors."</p>

            <p class="dialogue">"What types?"</p>

            <p class="dialogue">"People who've been bitten but haven't turned. Or people who were exposed but never got sick at all."</p>

            <p class="narrative">Something cold moves through you. Mrs. Park's husband was bitten. Soojin's unit was overwhelmed but she came out untouched. You've all been exposed a dozen times over.</p>

            <p class="dialogue">"They want test subjects," Minho says quietly.</p>

            <p class="dialogue">"Maybe. Or maybe they want the key to ending this." Colonel Kim shrugs. "It's 100 kilometers out of your way. But if anyone can make sense of this plague, it's the people who probably created it."</p>
        `,
        choices: [
            { text: "Detour to Daejeon. A cure changes everything.", target: 2045 },
            { text: "Continue to Busan. We're not test subjects.", target: 2039 },
            { text: "Ask what she means by 'probably created it.'", target: 2046 }
        ]
    },

    2045: {
        title: "THE SCIENCE CITY",
        campaign: "the_crossing",
        content: `
            <p class="narrative date">DAY 12 | DAEJEON</p>

            <p class="narrative">The Expo Science Complex rises from the city like a fever dream.</p>

            <p class="narrative">Modernist architecture, curved glass and steel, designed to show Korea's technological prowess. Now the glass is cracked, the steel rusting, but the building stands—and more importantly, it hums.</p>

            <p class="narrative">Power. They have power.</p>

            <p class="dialogue">"They've got solar arrays on every surface," Soojin observes. "And I'd bet money there's a generator running backup. These people weren't caught off guard."</p>

            <p class="narrative">Guards meet you at the perimeter. Well-equipped but nervous. They scan each of you with a handheld device that beeps and chirps.</p>

            <p class="dialogue">"Clear. All three clear." The guard looks relieved. "Follow me. Dr. Cho will want to see you."</p>

            <p class="narrative">Inside, the complex is a strange hybrid of laboratory and refugee camp. Families sleeping in exhibition halls. Children playing between specimen cases. And everywhere, scientists in dirty lab coats, moving with purpose.</p>

            <p class="narrative">Dr. Cho is a small woman with iron eyes.</p>

            <p class="dialogue">"You made it from Seoul. That's impressive." She studies you like data points. "We have questions. You'll have questions. Let's trade."</p>
        `,
        choices: [
            { text: "Ask about the cure research.", target: 2047 },
            { text: "Ask why they're scanning for infection.", target: 2048 },
            { text: "Ask what they know about how this started.", target: 2049 }
        ]
    },

    2047: {
        title: "THE CURE",
        campaign: "the_crossing",
        content: `
            <p class="dialogue">"You're working on a cure?"</p>

            <p class="narrative">Dr. Cho's expression flickers—hope, frustration, something darker.</p>

            <p class="dialogue">"We're working on understanding. A cure comes from understanding." She leads you to a laboratory wing, past airlock doors and decontamination zones. "The CHIMERA pathogen—that's what we're calling it—is unlike anything in recorded virology. It doesn't just infect. It rewrites."</p>

            <p class="narrative">Screens show magnified cell structures. Normal human cells. Then infected ones—transformed, the DNA itself altered.</p>

            <p class="dialogue">"Traditional antivirals don't work. The pathogen adapts faster than we can iterate. But we've found something interesting."</p>

            <p class="narrative">She pulls up a different image. Cells that look almost normal, but with subtle differences.</p>

            <p class="dialogue">"Partial immunity. One in roughly 50,000 people has a genetic marker that slows conversion. Not stops it—slows it. Days instead of hours. Weeks in rare cases."</p>

            <p class="narrative">She turns to you.</p>

            <p class="dialogue">"We need samples. Blood, tissue, anything we can analyze. And we need live subjects who've been exposed but haven't fully turned."</p>

            <p class="narrative">Her eyes are intense, desperate.</p>

            <p class="dialogue">"If we can understand why some people resist, even partially, we might be able to synthesize a treatment. Save millions."</p>
        `,
        choices: [
            { text: "Volunteer. We've been exposed. Take our samples.", target: 2050 },
            { text: "Ask what happened to their other 'subjects.'", target: 2051 },
            { text: "Tell her about the old man on the coast.", target: 2052 }
        ]
    },

    // ═══════════════════════════════════════════════════════════════
    // ENDINGS
    // ═══════════════════════════════════════════════════════════════

    tc_ending_arrival: {
        title: "THE ARRIVAL",
        campaign: "the_crossing",
        isEnding: true,
        endingCode: "TCARV",
        content: `
            <p class="narrative date">DAY 21 | BUSAN SAFE ZONE</p>

            <p class="narrative">The gates of Busan open before you.</p>

            <p class="narrative">Twenty-one days. Four hundred kilometers. Three vehicles lost, two companions fallen, one impossible choice after another.</p>

            <p class="narrative">But you're here. You're alive. The ocean stretches to the horizon, and on the water, ships wait to carry survivors to safety.</p>

            <div class="poetic">
                The road behind is written in blood and gasoline.<br>
                The road behind is paved with the people you couldn't save.<br>
                But the road behind is behind you now.<br>
                And ahead—for the first time—there is tomorrow.
            </div>

            <p class="narrative">Minho's hand finds yours as you walk through the checkpoint. Soojin is beside you, rifle slung but ready, eyes scanning even now.</p>

            <p class="narrative">The safe zone is chaos and order combined. Refugees in organized camps. Military patrols. Ships loading at the docks. A city within a city, humanity refusing to die.</p>

            <p class="dialogue">"We made it," Minho says. "We actually made it."</p>

            <p class="narrative">You look back, once, at the road you came from. The smoke still rises in the distance. Seoul. Suwon. Daejeon. All the places you passed through, all the people you met and lost and saved.</p>

            <p class="narrative">The world is ending. But you're not.</p>

            <p class="narrative">Not yet.</p>

            <div class="ending survival-ending">
                <div class="ending-number">THE CROSSING ENDING</div>
                <h2 class="ending-title">THE ARRIVAL</h2>
                <div class="ending-text">
                    <p>You reached Busan. You survived the crossing.</p>
                    <p>But survival is not the same as salvation.</p>
                    <p>The boats will take you to Jeju. From there, Japan. From there, wherever the living still gather.</p>
                    <p>The world you knew is gone. But the world that comes next is still being written.</p>
                    <p>And you'll be there to write it.</p>
                    <p><em>Distance traveled: 400 km. Days elapsed: 21. Companions saved: varies.</em></p>
                </div>
            </div>
        `,
        choices: []
    },

    tc_ending_settlement: {
        title: "THE SETTLEMENT",
        campaign: "the_crossing",
        isEnding: true,
        endingCode: "TCSET",
        content: `
            <p class="narrative date">DAY 45 | SANGJU VALLEY</p>

            <p class="narrative">You never made it to Busan.</p>

            <p class="narrative">Halfway there, in the apple orchards of Sangju, you found something better than escape: a home.</p>

            <p class="narrative">Twenty survivors now. A farmhouse that's become a fortress. Orchards that provide food. A river that provides water. Walls that—so far—hold against the night.</p>

            <div class="poetic">
                The world ended.<br>
                And in the ending,<br>
                something new began.<br>
                Not the life you planned.<br>
                But life, nonetheless.
            </div>

            <p class="narrative">Minho tends the apple trees—a corporate executive turned farmer, finding peace in growth after so much death. Soojin trains the watch, building something like order from chaos.</p>

            <p class="narrative">And you? You lead. Because someone has to. Because the road taught you how to survive, and now you're teaching others.</p>

            <p class="narrative">Sometimes, in the quiet moments, you wonder about Busan. Wonder if the evacuation succeeded, if the ships made it to Japan, if anyone found the safety you stopped searching for.</p>

            <p class="narrative">But then the sun rises over the mountains, and the children laugh as they pick apples, and you remember why you stopped.</p>

            <p class="narrative">Sometimes the destination isn't the point.</p>

            <p class="narrative">Sometimes the journey shows you where you were meant to be all along.</p>

            <div class="ending peace-ending">
                <div class="ending-number">THE CROSSING ENDING</div>
                <h2 class="ending-title">THE SETTLEMENT</h2>
                <div class="ending-text">
                    <p>You built a home in the ruins of the world.</p>
                    <p>The settlement grows. The walls hold. The dead remain outside.</p>
                    <p>Busan might have been safety. But Sangju became home.</p>
                    <p>And home is worth fighting for.</p>
                    <p><em>Distance traveled: 245 km. Days elapsed: 45. Community founded: Sangju Haven.</em></p>
                </div>
            </div>
        `,
        choices: []
    },

    tc_ending_return: {
        title: "THE RETURN",
        campaign: "the_crossing",
        isEnding: true,
        endingCode: "TCRET",
        content: `
            <p class="narrative date">DAY 14 | SEOUL OUTSKIRTS</p>

            <p class="narrative">Halfway to Busan, you turned around.</p>

            <p class="narrative">The radio broadcast changed everything. Seoul wasn't dead—not all of it. Pockets of survivors, organizing, fighting back. And they needed help.</p>

            <p class="dialogue">"We can't save everyone by running," you said. "Sometimes you have to stand."</p>

            <p class="narrative">Minho stayed with you. Soojin stayed with you. And now, after two weeks of fighting through the same road you fled, you're home.</p>

            <p class="narrative">Home. A strange word for a city of the dead. But Seoul is where you grew up. Where you loved and lost and learned who you are.</p>

            <p class="narrative">And if it's going to fall, you'll fall with it.</p>

            <div class="poetic">
                The road to salvation goes both ways.<br>
                Sometimes the bravest choice is to turn around.<br>
                Sometimes home isn't a destination.<br>
                It's a decision.
            </div>

            <p class="narrative">The survivors at Yeouido welcome you like conquering heroes. The supplies you brought—medical equipment, ammunition, news from the outside—are worth more than gold.</p>

            <p class="narrative">Busan can wait. The ships can wait. The future can wait.</p>

            <p class="narrative">Right now, in this moment, you're exactly where you're supposed to be.</p>

            <div class="ending duty-ending">
                <div class="ending-number">THE CROSSING ENDING</div>
                <h2 class="ending-title">THE RETURN</h2>
                <div class="ending-text">
                    <p>You came back to fight for Seoul.</p>
                    <p>Busan might be safe. But safe isn't always right.</p>
                    <p>The survivors needed you. And you needed them.</p>
                    <p>The city that made you now depends on you.</p>
                    <p><em>Distance traveled: 400 km (round trip). Days elapsed: 14. Duty answered: Yes.</em></p>
                </div>
            </div>
        `,
        choices: []
    },

    tc_ending_fortress: {
        title: "THE FORTRESS",
        campaign: "the_crossing",
        isEnding: true,
        endingCode: "TCFOR",
        content: `
            <p class="narrative date">DAY 30 | GYERYONG MILITARY BASE</p>

            <p class="narrative">The military offered you a choice: serve or move on.</p>

            <p class="narrative">You chose to serve.</p>

            <p class="narrative">Gyeryong Base is the last bastion of the Korean military. A fortress built into the mountains, designed to survive nuclear war. The dead don't have nukes, but they have numbers.</p>

            <p class="narrative">General Park leads what's left of the armed forces. Two thousand soldiers. Ten thousand civilians. A war that can't be won, only survived.</p>

            <p class="dialogue">"Busan is a trap," he told you on the first day. "The evacuation is real, but limited. Ten thousand seats. Fifty thousand applicants. And once the boats leave, what then? The islands aren't safe. Japan is burning too."</p>

            <p class="narrative">He showed you the plans. Not evacuation—fortification. Building something that can last years, decades, until the infected rot away or something changes.</p>

            <p class="dialogue">"We need people who understand survival. Not running, not hoping. Survival."</p>

            <div class="poetic">
                The fortress stands against the endless night.<br>
                Stone and steel and stubborn will.<br>
                Not escaping the apocalypse.<br>
                Outlasting it.
            </div>

            <p class="narrative">You've found your war. Your purpose. Your place in what comes next.</p>

            <p class="narrative">The road to Busan ended here. But maybe—just maybe—a new road begins.</p>

            <div class="ending war-ending">
                <div class="ending-number">THE CROSSING ENDING</div>
                <h2 class="ending-title">THE FORTRESS</h2>
                <div class="ending-text">
                    <p>You joined the last army of Korea.</p>
                    <p>The fortress holds. The war continues. The dead beat against the walls but cannot breach them.</p>
                    <p>It's not the ending you imagined. But it's an ending you can fight for.</p>
                    <p><em>Distance traveled: 180 km. Days elapsed: 30. Rank earned: Captain (Reserve).</em></p>
                </div>
            </div>
        `,
        choices: []
    },

    tc_ending_sacrifice: {
        title: "THE ROAD'S END",
        campaign: "the_crossing",
        isEnding: true,
        endingCode: "TCSAC",
        content: `
            <p class="narrative date">DAY 18 | DAEGU OUTSKIRTS</p>

            <p class="narrative">The horde came out of nowhere.</p>

            <p class="narrative">Thousands of them, pouring from the city like a tide of death. The convoy never had a chance.</p>

            <p class="narrative">You held the line while the others escaped. You. Alone. Against an impossible number.</p>

            <p class="narrative">It wasn't sacrifice. It was mathematics. One life for many. An equation you've been running in your head since Seoul, waiting for the moment when it would come due.</p>

            <div class="poetic">
                The road ends for everyone.<br>
                The only question is how.<br>
                Running, fighting, surrendering.<br>
                You chose to stand.
            </div>

            <p class="narrative">Minho's face through the rear window, screaming your name. Soojin dragging him back. The car pulling away as the dead close in.</p>

            <p class="narrative">They'll make it. Because of you. They'll reach Busan, or settle somewhere safe, or find their own ending on their own terms.</p>

            <p class="narrative">And you? You'll become a story. A memory. A lesson about what humans are capable of when everything else is stripped away.</p>

            <p class="narrative">The dead reach you. The pain is brief. And in the last moment, you feel something unexpected:</p>

            <p class="narrative">Peace.</p>

            <div class="ending sacrifice-ending">
                <div class="ending-number">THE CROSSING ENDING</div>
                <h2 class="ending-title">THE ROAD'S END</h2>
                <div class="ending-text">
                    <p>You gave everything so others could survive.</p>
                    <p>The convoy reached Busan. Minho and Soojin speak your name like a prayer.</p>
                    <p>Some journeys don't have destinations. Some journeys are about who you become along the way.</p>
                    <p>You became someone worth remembering.</p>
                    <p><em>Distance traveled: 300 km. Days elapsed: 18. Lives saved: Everyone who mattered.</em></p>
                </div>
            </div>
        `,
        choices: []
    },

    tc_ending_lost: {
        title: "LOST HIGHWAY",
        campaign: "the_crossing",
        isEnding: true,
        endingCode: "TCLST",
        content: `
            <p class="narrative date">DAY ???</p>

            <p class="narrative">You lost track of the days somewhere around Gumi.</p>

            <p class="narrative">Lost track of the road around Daegu. Lost track of hope somewhere between then and now.</p>

            <p class="narrative">The car ran out of fuel days ago—or weeks ago, time moves strangely now. Minho is gone, separated during a horde encounter that never seemed to end. Soojin is gone, fell behind when her leg gave out, told you to keep going.</p>

            <p class="narrative">You kept going. Because that's what you do. Because stopping means dying.</p>

            <p class="narrative">But now you're stopped. Sitting in an abandoned bus on an unnamed stretch of highway, watching the sunset through cracked windows.</p>

            <div class="poetic">
                Four hundred kilometers to hope.<br>
                Four hundred kilometers to nowhere.<br>
                The distance is the same.<br>
                The destination was always a lie.
            </div>

            <p class="narrative">Outside, they gather. Slow-moving shapes in the fading light. They know you're here. They're patient. They have nothing but time.</p>

            <p class="narrative">You could fight. You could run. You could do any number of things that might buy another hour, another day, another week of this endless nightmare.</p>

            <p class="narrative">Or you could rest.</p>

            <p class="narrative">Finally, truly rest.</p>

            <div class="ending tragedy-ending">
                <div class="ending-number">THE CROSSING ENDING</div>
                <h2 class="ending-title">LOST HIGHWAY</h2>
                <div class="ending-text">
                    <p>Not everyone reaches the destination.</p>
                    <p>The road claimed you, as it has claimed so many others.</p>
                    <p>Busan exists. Salvation exists. But not for you. Not anymore.</p>
                    <p>The highway stretches on, empty and silent, and you become part of it.</p>
                    <p><em>Distance traveled: Unknown. Days elapsed: Unknown. Final status: Lost.</em></p>
                </div>
            </div>
        `,
        choices: []
    }
};

// ═══════════════════════════════════════════════════════════════
// BRIDGE SECTIONS (Path connectors)
// ═══════════════════════════════════════════════════════════════

// Add intermediate sections for story flow
const THE_CROSSING_BRIDGES = {
    2010: {
        title: "THE BROADCAST",
        campaign: "the_crossing",
        content: `
            <p class="narrative">The radio crackles to life at 3 AM.</p>

            <p class="dialogue">"—repeat, this is the Daejeon Science Council. We are operational. We are researching a solution. If you can hear this, if you have been exposed but not turned, we need you. Come to the Expo Science Complex. Help us end this."</p>

            <p class="narrative">The message repeats every fifteen minutes. Professional. Desperate. Real.</p>

            <p class="dialogue">"Daejeon is on the way to Busan," Soojin notes, studying the map. "Slight detour but not impossible."</p>

            <p class="dialogue">"Or it's a trap," Minho counters. "Lure survivors into a kill zone."</p>

            <p class="narrative">You listen to the broadcast again. The voice is tired but steady. Scientific terminology peppers the message—terms about viral loads and immune responses that mean nothing to most survivors.</p>

            <p class="narrative">But they might mean everything to someone who knows what they're talking about.</p>
        `,
        choices: [
            { text: "Daejeon first. Then Busan.", target: 2045 },
            { text: "Busan first. No detours.", target: 2001 },
            { text: "Try to contact them by radio.", target: 2053 }
        ]
    },

    2011: {
        title: "THE PRICE",
        campaign: "the_crossing",
        content: `
            <p class="narrative">You hand over half your food. Five precious rounds. A bottle of antibiotics that might have saved someone's life.</p>

            <p class="narrative">The toll collector counts the supplies with practiced efficiency.</p>

            <p class="dialogue">"Pleasure doing business." He steps aside, waves his men to clear the vehicles. "The next fifty K should be clear. We keep the road clean—it's good for repeat customers."</p>

            <p class="narrative">Business. In the apocalypse. Some things never change.</p>

            <p class="narrative">You drive through the gap, supplies lighter, future slightly darker. But alive.</p>

            <p class="dialogue">"That's going to hurt us later," Minho says quietly. "We're already running short on food."</p>

            <p class="dialogue">"Later is a problem for later." Soojin checks her weapon. "Right now, we're moving. That's what matters."</p>

            <p class="narrative">The highway opens up ahead. The toll keeper was right—the road is clear. Bodies cleared to the sides, vehicles pushed to the shoulders.</p>

            <p class="narrative">Someone is maintaining this stretch. Profiting from the end of the world.</p>

            <p class="narrative">You file that information away. It might be useful later.</p>
        `,
        choices: [
            { text: "Continue toward Suwon.", target: 2017 },
            { text: "Stop at the first safe spot. Take stock.", target: 2054 }
        ]
    },

    2031: {
        title: "THE MAP",
        campaign: "the_crossing",
        content: `
            <p class="narrative">The old woman's map is hand-drawn but precise. Years of fishing the coast compressed into annotations and warnings.</p>

            <p class="narrative">SAFE: Small cove near Ansan. Fresh water spring.<br>
            DANGER: Hwaseong military checkpoint. Shoot first.<br>
            FUEL: Abandoned station at Pyeongtaek. Pumps still work.<br>
            BOATS: Gunsan harbor. Fishing crews running to Jeju.</p>

            <p class="narrative">And at the bottom, in smaller handwriting:</p>

            <p class="narrative italic">Busan ferry terminal east side. Ask for Captain Moon. Tell him Sunhi sent you.</p>

            <p class="narrative">You fold the map carefully. A gift more valuable than medicine, though she didn't know it when she gave it.</p>

            <p class="narrative">The coastal road stretches ahead, gentler than the expressway, more hope than despair.</p>

            <p class="narrative">Behind you, Sunhi waves from her doorway. Her husband is still alive—or still something—and maybe that's enough. Maybe hope is all any of us have left.</p>
        `,
        choices: [
            { text: "Follow the coastal route.", target: 2055 },
            { text: "Return to the expressway. Faster despite the risks.", target: 2017 },
            { text: "Head to Gunsan first. Secure boat passage.", target: 2056 }
        ]
    },

    // Add more bridge sections as needed...
    2039: {
        title: "THE EXCHANGE",
        campaign: "the_crossing",
        content: `
            <p class="narrative">You spend six hours with the Collective. Six hours of information exchange, supply trading, and strategic planning.</p>

            <p class="narrative">Colonel Kim gives you detailed maps of the route ahead. Horde movement patterns. Safe zones and death traps. Radio frequencies for other survivor groups.</p>

            <p class="narrative">In exchange, you share what you know about Seoul. The military positions. The supply caches. The mistakes that got so many people killed.</p>

            <p class="dialogue">"You've got a good group," she says as you prepare to leave. "Tight. Disciplined. That's rare."</p>

            <p class="dialogue">"Survival tends to trim the fat."</p>

            <p class="narrative">She nods, understanding.</p>

            <p class="dialogue">"If Busan doesn't work out—or even if it does—there's always a place here. We're not just surviving. We're building something."</p>

            <p class="narrative">You shake hands. Proper, pre-apocalypse formal. Some rituals survive.</p>

            <p class="narrative">The highway awaits.</p>
        `,
        choices: [
            { text: "Continue to Daejeon. Follow the main route.", target: 2057 },
            { text: "Take the mountain pass. Avoid the cities.", target: 2058 },
            { text: "Detour to investigate the radio signal.", target: 2045 }
        ]
    },

    2042: {
        title: "THE CONVOY",
        campaign: "the_crossing",
        content: `
            <p class="narrative date">DAY 11 | COLLECTIVE CONVOY</p>

            <p class="narrative">Twelve vehicles. Forty-seven people. One objective.</p>

            <p class="narrative">The convoy moves at dawn, a metal serpent winding through the ruins of Korea.</p>

            <p class="narrative">Colonel Kim leads from the front. Military vehicles bracket civilian cars. Scouts range ahead on motorcycles, reporting back via radio.</p>

            <p class="narrative">It's the most organized thing you've seen since the outbreak. It's also the biggest target.</p>

            <p class="dialogue">"Stay in formation," Kim's voice crackles over the radio. "Maintain spacing. Trust the process."</p>

            <p class="narrative">You trust the process. You trust her. But the road ahead is long, and trust is a commodity that runs out faster than fuel.</p>

            <p class="narrative">By midday, you're past Pyeongtaek. By sunset, approaching Cheonan.</p>

            <p class="narrative">And then the scouts report in.</p>

            <p class="dialogue">"Roadblock ahead. Military. They're not ours."</p>
        `,
        choices: [
            { text: "Follow Kim's lead. She knows what she's doing.", target: 2059 },
            { text: "Suggest a flanking approach.", target: 2060 },
            { text: "Volunteer to negotiate.", target: 2061 }
        ]
    },

    2050: {
        title: "THE VOLUNTEERS",
        campaign: "the_crossing",
        content: `
            <p class="narrative">The blood draw is clinical. Professional. Almost normal.</p>

            <p class="narrative">Dr. Cho's team takes samples from all three of you. Blood, saliva, tissue scrapings. Questions about exposure history, symptoms, anything unusual.</p>

            <p class="dialogue">"You've been remarkably lucky," she says, studying preliminary results. "Multiple exposures, no conversion. Either you're naturally resistant or—" She pauses. "Or you're very, very good at staying alive."</p>

            <p class="dialogue">"Can't it be both?"</p>

            <p class="narrative">She almost smiles.</p>

            <p class="dialogue">"Stay for observation. Twenty-four hours minimum. If your blood shows what I think it might show—" She stops herself. "Let's not get ahead of ourselves."</p>

            <p class="narrative">Twenty-four hours in the Science City. Twenty-four hours watching brilliant people try to save the world while the world burns outside.</p>

            <p class="narrative">On the second morning, Dr. Cho finds you at breakfast.</p>

            <p class="dialogue">"Your friend. The one called Soojin. Her blood is... interesting. Very interesting."</p>
        `,
        choices: [
            { text: "What does that mean?", target: 2062 },
            { text: "Is she in danger?", target: 2063 },
            { text: "Can it help with the cure?", target: 2064 }
        ]
    },

    2062: {
        title: "THE DISCOVERY",
        campaign: "the_crossing",
        content: `
            <p class="narrative">Dr. Cho leads you to her laboratory. Screens display cell structures, genetic sequences, things that look like art and mean like life.</p>

            <p class="dialogue">"The CHIMERA pathogen has a weakness. A specific genetic marker that inhibits its replication. One in fifty thousand people carry this marker naturally."</p>

            <p class="narrative">She pulls up Soojin's blood work.</p>

            <p class="dialogue">"Your friend doesn't just carry the marker. She carries an enhanced version. Something we've never seen before. Her immune system isn't just resisting the pathogen—it's destroying it."</p>

            <p class="narrative">You stare at the screen. The implications settle slowly.</p>

            <p class="dialogue">"She's immune?"</p>

            <p class="dialogue">"More than immune. She's the key." Cho's voice trembles with something between hope and hunger. "If we can isolate what makes her different, we can synthesize a treatment. Not just prevention—actual cure. Reversal of infection."</p>

            <p class="narrative">The words hang in the air. Cure. Reversal. Salvation.</p>

            <p class="dialogue">"But we need time. Resources. And we need her to stay while we work."</p>
        `,
        choices: [
            { text: "She should stay. This is more important than Busan.", target: 2065 },
            { text: "It's her decision. She has to choose.", target: 2066 },
            { text: "No. We've come too far to stop now.", target: 2067 }
        ]
    }
};

// Merge bridges into main data
Object.assign(THE_CROSSING_DATA, THE_CROSSING_BRIDGES);

// ═══════════════════════════════════════════════════════════════
// INTEGRATION
// ═══════════════════════════════════════════════════════════════

function isTheCrossingUnlocked() {
    // Requires reaching the Busan evacuation choice in main story
    if (typeof gameState !== 'undefined' && gameState.busanPathChosen) {
        return true;
    }
    return false;
}

function getTheCrossingSection(sectionId) {
    return THE_CROSSING_DATA[sectionId] || null;
}

function mergeTheCrossingContent() {
    if (typeof STORY_DATA !== 'undefined') {
        Object.assign(STORY_DATA, THE_CROSSING_DATA);
    }
}

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        THE_CROSSING_INFO,
        THE_CROSSING_DATA,
        HIGHWAY_SEGMENTS,
        REST_STOPS,
        VEHICLE_TYPES,
        isTheCrossingUnlocked,
        getTheCrossingSection,
        mergeTheCrossingContent
    };
}

// Auto-merge
if (typeof STORY_DATA !== 'undefined') {
    mergeTheCrossingContent();
    console.log('[DEAD SEOUL] The Crossing expansion loaded:', Object.keys(THE_CROSSING_DATA).length, 'sections');
}
