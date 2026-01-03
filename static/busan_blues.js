/**
 * DEAD SEOUL: BUSAN BLUES
 * Expansion Pack #3 - The Endgame
 *
 * You made it to the safe zone.
 * But safe is relative. And hope has a price.
 * The ships are leaving. Not everyone gets a seat.
 *
 * This is the story of the final choice.
 */

// ═══════════════════════════════════════════════════════════════
// BUSAN BLUES METADATA
// ═══════════════════════════════════════════════════════════════

const BUSAN_BLUES_INFO = {
    id: "busan_blues",
    name: "BUSAN BLUES",
    subtitle: "The Last Boat Out",
    setting: "Busan Safe Zone",
    unlockRequirements: {
        expansions: ["the_crossing"],
        endings: ["TCARV"], // Reached The Arrival ending
        description: "Complete 'The Arrival' ending in The Crossing"
    },
    totalSections: 45,
    endings: {
        bb_exodus: { code: "BBEXO", name: "The Exodus", tier: "escape" },
        bb_captain: { code: "BBCAP", name: "The Captain", tier: "leadership" },
        bb_martyr: { code: "BBMRT", name: "The Last Stand", tier: "sacrifice" },
        bb_truth: { code: "BBTRU", name: "The Reckoning", tier: "justice" },
        bb_island: { code: "BBISL", name: "The Islander", tier: "peace" },
        bb_fallen: { code: "BBFAL", name: "The Fall of Busan", tier: "tragedy" }
    }
};

// ═══════════════════════════════════════════════════════════════
// BUSAN ZONE STRUCTURE
// ═══════════════════════════════════════════════════════════════

const BUSAN_ZONES = {
    docks: {
        name: "Busan Port Authority",
        description: "Where the ships wait. Where hope becomes a commodity.",
        access: "military",
        key_npcs: ["Admiral Cho", "Captain Moon", "Dock Master Lee"],
        resources: { fuel: 5, food: 2, weapons: 3, medicine: 1 }
    },
    refugee_camp: {
        name: "Haeundae Refugee Camp",
        description: "The beach resort turned desperate city. 50,000 people. 5,000 seats.",
        access: "public",
        key_npcs: ["Elder Kim", "Dr. Yoo", "The Preacher"],
        resources: { fuel: 0, food: 1, weapons: 1, medicine: 2 }
    },
    green_zone: {
        name: "Centum City Green Zone",
        description: "The rich still live well. Even at the end of the world.",
        access: "wealthy",
        key_npcs: ["Chairman Park", "Lady Kwon", "The Broker"],
        resources: { fuel: 3, food: 4, weapons: 2, medicine: 4 }
    },
    military_hq: {
        name: "ROKN Command",
        description: "The military runs Busan. General Sung runs the military.",
        access: "military",
        key_npcs: ["General Sung", "Colonel Jin", "Lieutenant Kang"],
        resources: { fuel: 4, food: 3, weapons: 5, medicine: 3 }
    },
    underground: {
        name: "Jagalchi Black Market",
        description: "Where the fish market becomes the everything market.",
        access: "criminal",
        key_npcs: ["Spider", "The Twins", "Old Man Sea"],
        resources: { fuel: 2, food: 3, weapons: 4, medicine: 2 }
    },
    perimeter: {
        name: "Northern Perimeter",
        description: "The wall between Busan and the dead. Getting thinner every day.",
        access: "military",
        key_npcs: ["Sergeant Moon", "The Volunteers", "The Infected"],
        resources: { fuel: 1, food: 0, weapons: 2, medicine: 1 }
    }
};

// ═══════════════════════════════════════════════════════════════
// TICKET SYSTEM
// ═══════════════════════════════════════════════════════════════

const TICKET_TIERS = {
    military: {
        name: "Military Priority",
        seats: 2000,
        requirement: "Active duty or essential support",
        ship: "ROKS Dokdo"
    },
    wealthy: {
        name: "Sponsored Passage",
        seats: 1500,
        requirement: "500 million won or equivalent value",
        ship: "Cruise Ship Utopia"
    },
    lottery: {
        name: "General Lottery",
        seats: 1500,
        requirement: "Random selection from registered refugees",
        ship: "Various cargo vessels"
    }
};

// ═══════════════════════════════════════════════════════════════
// BUSAN BLUES STORY DATA
// ═══════════════════════════════════════════════════════════════

const BUSAN_BLUES_DATA = {

    // ═══════════════════════════════════════════════════════════════
    // PROLOGUE - ARRIVAL
    // ═══════════════════════════════════════════════════════════════

    bb_prologue: {
        title: "THE PROMISED LAND",
        campaign: "busan_blues",
        content: `
            <p class="narrative date">DAY 22 | BUSAN SAFE ZONE</p>
            <p class="narrative location">ENTRY CHECKPOINT BRAVO</p>

            <p class="narrative">The gates of Busan close behind you with a finality that should feel like salvation.</p>

            <p class="narrative">It doesn't.</p>

            <p class="narrative">Inside the perimeter, the promised land reveals itself: not paradise, but organized chaos. Refugee camps stretch along Haeundae Beach, once luxury resorts now tent cities. Military vehicles patrol streets where tourists used to wander. And everywhere, the sound of desperation dressed up as hope.</p>

            <p class="dialogue">"Papers. Documents. Proof of identity."</p>

            <p class="narrative">The processing officer doesn't look at you. He's seen ten thousand faces like yours. Ten thousand stories of loss and survival and luck.</p>

            <p class="dialogue">"Skills? Former occupation?"</p>

            <p class="narrative">Minho answers for the group. Corporate executive. Former soldier. Museum curator.</p>

            <p class="narrative">The officer pauses at that last one.</p>

            <p class="dialogue">"Curator? Like... art and history?"</p>

            <p class="dialogue">"Yes."</p>

            <p class="narrative">He makes a note. Something changes in his expression. Interest. Calculation.</p>

            <p class="dialogue">"Report to Processing Center 7 after registration. Someone wants to meet you."</p>
        `,
        choices: [
            { text: "Who wants to meet me?", target: 3001 },
            { text: "Just give us our camp assignment.", target: 3002 },
            { text: "Is there a problem?", target: 3003 }
        ]
    },

    // ═══════════════════════════════════════════════════════════════
    // ACT ONE: THE SAFE ZONE
    // ═══════════════════════════════════════════════════════════════

    3001: {
        title: "THE SUMMONS",
        campaign: "busan_blues",
        content: `
            <p class="narrative">The officer's expression closes like a book.</p>

            <p class="dialogue">"People above my pay grade. That's all I know." He stamps your papers. "Camp assignment: Sector 7. Processing Center 7 for your... interview. Don't keep them waiting."</p>

            <p class="narrative">Soojin's hand finds her rifle. A habit now, not a threat.</p>

            <p class="dialogue">"Interview with who?"</p>

            <p class="dialogue">"With whoever wants to interview you. Welcome to Busan."</p>

            <p class="narrative">He's already looking past you. Next in line. Next story. Next survivor who thinks they've reached safety.</p>

            <p class="narrative">You find your group a spot in Sector 7—a patch of sand between two families who've been here long enough to claim territory. Tents provided. Water rations twice daily. Food once.</p>

            <p class="dialogue">"This is it?" Minho looks around, processing the reality. "This is the safe zone?"</p>

            <p class="dialogue">"This is the waiting room," an old woman nearby says without looking up from her cooking. "The safe zone is the boats. And the boats don't take just anyone."</p>
        `,
        choices: [
            { text: "Go to Processing Center 7. Face the interview.", target: 3004 },
            { text: "Explore the camp first. Gather information.", target: 3005 },
            { text: "Find the docks. See the boats for ourselves.", target: 3006 }
        ]
    },

    3002: {
        title: "THE CAMP",
        campaign: "busan_blues",
        content: `
            <p class="narrative">Sector 7. Haeundae Beach. Once the crown jewel of Korean tourism. Now a sea of tents and desperation.</p>

            <p class="narrative">Fifty thousand people packed into a strip of sand meant for summer vacations. Families. Survivors. The lucky and the lost, all waiting for a miracle that comes in the form of departing ships.</p>

            <p class="dialogue">"Home sweet home," Soojin mutters, staking claim to a patch of sand.</p>

            <p class="narrative">Around you, the reality of Busan unfolds:</p>

            <p class="narrative">A woman sells fresh fish from a cooler—the first fresh food you've seen in weeks. The price is absurd.</p>

            <p class="narrative">Children play soccer with a half-deflated ball, oblivious to the world beyond the perimeter.</p>

            <p class="narrative">A man in a suit—actual suit, still pressed—walks past with a military escort. Green Zone resident, heading somewhere important.</p>

            <p class="narrative">And beyond it all, the ocean. The ships. The promise of somewhere else.</p>

            <p class="dialogue">"The boats leave in three days," someone says. A young man, early twenties, faded university sweatshirt. "Next wave of evacuees. Five thousand seats. Fifty thousand applicants."</p>

            <p class="dialogue">"How do you get a seat?"</p>

            <p class="dialogue">"Money. Connections. Luck." He laughs without humor. "Or you do something the military can't ignore."</p>
        `,
        choices: [
            { text: "Ask about the lottery system.", target: 3007 },
            { text: "Ask about 'doing something for the military.'", target: 3008 },
            { text: "Ask about Processing Center 7.", target: 3004 }
        ]
    },

    3003: {
        title: "THE SUSPICION",
        campaign: "busan_blues",
        content: `
            <p class="narrative">The officer pauses. Studies you more carefully.</p>

            <p class="dialogue">"Problem? No problem. Just... unusual." He checks his clipboard again. "Museum curator. Seoul National. That correct?"</p>

            <p class="dialogue">"Yes."</p>

            <p class="dialogue">"Then no problem at all. Unless you've got secrets you'd rather not share." He stamps your papers. "Processing Center 7. Don't skip it."</p>

            <p class="narrative">Minho's hand touches your arm. Warning. Questions later.</p>

            <p class="narrative">You pass through the checkpoint into the chaos of the safe zone. Immediately, everything feels watched. Monitored. The freedom of the road replaced by the cage of civilization's remnants.</p>

            <p class="dialogue">"Why would your job matter?" Minho asks quietly as you walk. "What's special about a curator?"</p>

            <p class="narrative">You don't know. But you're about to find out.</p>

            <p class="narrative">Processing Center 7 is a converted hotel. The Westin Chosun, its lobby now a bureaucratic maze of desks and queues and uniformed officials.</p>

            <p class="narrative">A sign on the wall: SPECIAL SKILLS ASSESSMENT. Below it, a list of professions. Scientists. Engineers. Medical personnel.</p>

            <p class="narrative">And at the bottom: CULTURAL PRESERVATION SPECIALISTS.</p>
        `,
        choices: [
            { text: "Enter Processing Center 7.", target: 3009 },
            { text: "Leave. This feels wrong.", target: 3010 },
            { text: "Ask someone what this is about.", target: 3011 }
        ]
    },

    3004: {
        title: "PROCESSING CENTER 7",
        campaign: "busan_blues",
        content: `
            <p class="narrative">The Westin Chosun. Five stars reduced to bureaucracy.</p>

            <p class="narrative">Inside, the lobby has been transformed into a processing center. Desks arranged in rows. Officials in a mix of military and civilian dress. The smell of coffee—real coffee—incongruous amid the controlled chaos.</p>

            <p class="dialogue">"Yuna Kim?"</p>

            <p class="narrative">A woman approaches. Mid-forties, professional bearing, eyes that have seen things and made decisions about them.</p>

            <p class="dialogue">"I'm Director Ahn. Cultural Preservation Initiative. Walk with me."</p>

            <p class="narrative">Not a request. You follow her through the lobby, past curious eyes, into an office that still has its hotel-era luxury intact.</p>

            <p class="dialogue">"The world is ending," she says, closing the door. "But that doesn't mean we stop being Korean. Stop being human. The fleet leaving for Japan will carry more than refugees. It will carry our history. Our identity. Our future."</p>

            <p class="narrative">She gestures to a map on the wall. Routes marked in red—evacuation paths. Destinations circled in blue—Japan, Taiwan, potentially further.</p>

            <p class="dialogue">"The National Museum collections. The Joseon archives. Artifacts that define who we are. They need curators. Guardians. People who understand their value."</p>

            <p class="narrative">She turns to face you.</p>

            <p class="dialogue">"Your file says you worked at the Seoul National Museum. Special collections. Pre-Joseon artifacts."</p>

            <p class="dialogue">"That's correct."</p>

            <p class="dialogue">"Then you understand why I'm offering you—and your companions—guaranteed passage on the next ship."</p>
        `,
        choices: [
            { text: "What's the catch?", target: 3012 },
            { text: "Accept immediately. Get your people out.", target: 3013 },
            { text: "Ask about the lottery. What happens to everyone else?", target: 3014 }
        ]
    },

    3005: {
        title: "THE CAMP ECONOMY",
        campaign: "busan_blues",
        content: `
            <p class="narrative">Before making any decisions, you need information. The camp is its own ecosystem—learn its rules, learn its secrets.</p>

            <p class="narrative">First lesson: nothing is free.</p>

            <p class="narrative">Water rations are provided by the military, but clean water—filtered, safe—costs extra. Food rations keep you alive, but actual nutrition requires trading. Medicine is the most precious commodity; antibiotics trade for more than gold ever did.</p>

            <p class="narrative">Second lesson: information is currency.</p>

            <p class="narrative">By noon, you've mapped the power structure. The military controls the perimeter and the docks. The wealthy control Centum City, the Green Zone. The gangs control Jagalchi, where anything can be bought if you know who to ask.</p>

            <p class="narrative">And floating above it all: the Ticket System.</p>

            <p class="dialogue">"Three ways onto those boats," a trader explains while you browse his wares. "Military ticket—serve the army, prove you're essential. Money ticket—half a billion won or equivalent. Lottery ticket—pure luck, one in forty odds."</p>

            <p class="dialogue">"What about skills? I heard they're recruiting specialists."</p>

            <p class="narrative">He laughs. "Sure. If you're a doctor, an engineer, someone who can fix what's broken. They call it 'merit passage.' I call it buying loyalty."</p>
        `,
        choices: [
            { text: "Ask about the underground. Jagalchi.", target: 3015 },
            { text: "Ask about the military recruitment.", target: 3008 },
            { text: "Return to Processing Center 7.", target: 3004 }
        ]
    },

    3006: {
        title: "THE DOCKS",
        campaign: "busan_blues",
        content: `
            <p class="narrative">The Busan docks are fortress and salvation combined.</p>

            <p class="narrative">Military checkpoints every hundred meters. Armed patrols. A wall of sandbags and razor wire separating the passenger terminal from the refugee masses.</p>

            <p class="narrative">But beyond the barriers, you see them: the ships.</p>

            <p class="narrative">The ROKS Dokdo, an amphibious assault ship converted for evacuation. Military families and essential personnel only.</p>

            <p class="narrative">The Utopia, a cruise liner that survived the outbreak in international waters. Now the floating palace of the wealthy.</p>

            <p class="narrative">And a dozen cargo vessels, repurposed to carry humanity's remnants to uncertain shores.</p>

            <p class="dialogue">"Beautiful, isn't she?"</p>

            <p class="narrative">An old man stands beside you. Weathered face, captain's cap, eyes that belong to the sea.</p>

            <p class="dialogue">"I'm Moon. I sail the Jeju ferry route—or I did, when there was a schedule. Now I run... private charters."</p>

            <p class="narrative">He looks at you. Assessing.</p>

            <p class="dialogue">"You look like survivors. Real ones, not the kind who bought their way in. How'd you get here?"</p>

            <p class="dialogue">"Seoul. The expressway. Then the coast."</p>

            <p class="narrative">He nods slowly.</p>

            <p class="dialogue">"Sunhi's route? The fishing widow?"</p>

            <p class="narrative">Your hand goes to the map in your pocket. Her gift.</p>

            <p class="dialogue">"She made it?"</p>

            <p class="dialogue">"Her husband did. Somehow. First person I've seen recover once the change starts." He lowers his voice. "There's people who'd pay a lot to know how. Military types. Science types. You understand?"</p>
        `,
        choices: [
            { text: "Tell me about these 'science types.'", target: 3016 },
            { text: "What about private passage? Off the books.", target: 3017 },
            { text: "Who's in charge of the evacuation?", target: 3018 }
        ]
    },

    // ═══════════════════════════════════════════════════════════════
    // ACT TWO: CHOICES
    // ═══════════════════════════════════════════════════════════════

    3012: {
        title: "THE CATCH",
        campaign: "busan_blues",
        content: `
            <p class="dialogue">"The catch?"</p>

            <p class="narrative">Director Ahn's smile doesn't waver.</p>

            <p class="dialogue">"The catch is that salvation comes with strings. Three days of work before the ships depart. You help us catalog, pack, and secure the artifacts being transported. In return, you and up to four companions receive passage on the Utopia."</p>

            <p class="narrative">The Utopia. The cruise ship. The luxury liner of the apocalypse.</p>

            <p class="dialogue">"What kind of artifacts?"</p>

            <p class="dialogue">"Everything we could save. Museum collections from Seoul, Gyeongju, Jeonju. Priceless pieces that define Korean history. And—" she pauses, choosing words carefully, "—certain items of particular interest to our... sponsors."</p>

            <p class="dialogue">"Sponsors?"</p>

            <p class="dialogue">"The Utopia isn't charity. Its passengers paid for their passage. Some with money. Some with influence. Some with artifacts they 'acquired' during the chaos." Her eyes meet yours. "You understand how the world works now. The people who survived with collections intact want to keep them safe. We help facilitate that."</p>

            <p class="narrative">Stolen art. Looted history. The elite preserving their wealth while fifty thousand people wait for lottery tickets.</p>

            <p class="dialogue">"And if I refuse?"</p>

            <p class="dialogue">"Then you're a refugee with a one-in-forty chance like everyone else. And your skills go to waste."</p>
        `,
        choices: [
            { text: "Accept. Get your people to safety.", target: 3019 },
            { text: "Accept, but with conditions.", target: 3020 },
            { text: "Refuse. Walk away.", target: 3021 }
        ]
    },

    3014: {
        title: "THE LOTTERY",
        campaign: "busan_blues",
        content: `
            <p class="dialogue">"The lottery. Fifty thousand people. Fifteen hundred seats. What happens to the other forty-eight thousand?"</p>

            <p class="narrative">Director Ahn's expression flickers. The first crack in her composure.</p>

            <p class="dialogue">"The perimeter holds. For now. More ships are coming—we hope. The military is working on expanding capacity. There are plans—"</p>

            <p class="dialogue">"But not guarantees."</p>

            <p class="dialogue">"No. Not guarantees." She sits down. Suddenly tired. "You think I don't know how this looks? You think I'm not aware that I'm offering you a golden ticket while families wait in the sand?"</p>

            <p class="narrative">She pulls out a bottle from her desk. Soju. Pours two glasses.</p>

            <p class="dialogue">"My husband is in that camp. My daughter. They're registered for the lottery like everyone else. I could get them on the list—I have the authority—but I won't. Because the moment I do, I become everything I hate about this system."</p>

            <p class="narrative">She slides a glass across the desk.</p>

            <p class="dialogue">"So yes. I'm offering you passage in exchange for your skills. It's not fair. Nothing is fair anymore. But it's also real. And real is what we have."</p>
        `,
        choices: [
            { text: "I'll help. But my companions come too.", target: 3019 },
            { text: "Can we expand the passenger list? Save more people?", target: 3022 },
            { text: "What if the lottery is rigged?", target: 3023 }
        ]
    },

    3015: {
        title: "THE UNDERGROUND",
        campaign: "busan_blues",
        content: `
            <p class="narrative">Jagalchi. The fish market turned black market. Where the old economy meets the new.</p>

            <p class="narrative">You find it easily—follow the smell of cooking oil and desperation. The stalls that once sold fresh seafood now sell everything: medicine, weapons, information, passage.</p>

            <p class="narrative">A woman watches you approach. Mid-thirties, scarred hands, eyes that calculate value with every glance.</p>

            <p class="dialogue">"New arrival. Expressway survivor, from the look of you." She doesn't offer her hand. "They call me Spider. What do you need?"</p>

            <p class="dialogue">"Information first. Then maybe more."</p>

            <p class="dialogue">"Information isn't free. But we can trade." She gestures to a back room. "You've got the look of someone who's seen things. Done things. The kind of experience that's valuable in certain circles."</p>

            <p class="narrative">The back room is a command center. Maps, radios, a whiteboard covered in ship schedules and names.</p>

            <p class="dialogue">"The military runs the official evacuation. We run the unofficial one. Fishing boats to Jeju. Cargo freighters to Taiwan. Risky but possible—for the right price."</p>

            <p class="dialogue">"What's the right price?"</p>

            <p class="dialogue">"Depends on what you've got. Money. Skills. Information." She leans forward. "Or you could work for me. Three jobs, and I guarantee passage for your whole group. Real boats, real destinations. No lottery, no waiting."</p>
        `,
        choices: [
            { text: "What kind of jobs?", target: 3024 },
            { text: "I'd rather pay in cash or goods.", target: 3025 },
            { text: "I need to think about it.", target: 3026 }
        ]
    },

    3016: {
        title: "THE SCIENTISTS",
        campaign: "busan_blues",
        content: `
            <p class="narrative">Captain Moon glances around. Lowers his voice further.</p>

            <p class="dialogue">"There's a research group operating out of the old university. Busan National. They're studying the infected—and the immune. Trying to figure out why some people resist."</p>

            <p class="dialogue">"Like Sunhi's husband."</p>

            <p class="dialogue">"Exactly like him. He's there now. Volunteered for their program." He shakes his head. "Brave man. Or desperate. The line's thin these days."</p>

            <p class="narrative">You think of the old man on the coast road. Three days bitten and still human. The impossible hope in his wife's eyes.</p>

            <p class="dialogue">"What do they do with the volunteers?"</p>

            <p class="dialogue">"Study them. Blood work, tissue samples, the whole medical circus. Looking for what makes them different." He pauses. "Some don't come out. The research is... aggressive."</p>

            <p class="dialogue">"They're killing people?"</p>

            <p class="dialogue">"I don't know. Nobody knows, not really. But the ones who go in don't always come out, and the ones who do come out don't always talk."</p>

            <p class="narrative">He hands you a card. An address written in careful handwriting.</p>

            <p class="dialogue">"If you know anyone who's been exposed but didn't turn, the scientists will pay well for their time. And I mean well. Guaranteed passage, priority treatment, the works."</p>
        `,
        choices: [
            { text: "I might know someone. Tell me more.", target: 3027 },
            { text: "No thanks. We'll find another way.", target: 3017 },
            { text: "Who runs this research program?", target: 3028 }
        ]
    },

    3019: {
        title: "THE AGREEMENT",
        campaign: "busan_blues",
        content: `
            <p class="narrative">You take the drink. The soju burns going down—familiar, grounding.</p>

            <p class="dialogue">"I'll help. Three days of work, and my group gets passage."</p>

            <p class="dialogue">"Your group being..."</p>

            <p class="dialogue">"Three people. Minho, former executive. Soojin, former ROK Special Forces. And me."</p>

            <p class="narrative">Director Ahn makes a note.</p>

            <p class="dialogue">"A soldier could be useful. The artifacts need protection as much as curation. Consider them approved."</p>

            <p class="narrative">She stands, extends her hand. Official. Binding.</p>

            <p class="dialogue">"Report to the Preservation Center tomorrow at 0600. We'll begin with the Seoul National collections. The most valuable pieces need special handling."</p>

            <p class="narrative">You shake. The deal is done.</p>

            <p class="narrative">Walking back to the camp, you try to feel relief. You should feel relief. Three days of work and you're on a ship, sailing away from this nightmare toward something that might be better.</p>

            <p class="narrative">But something gnaws at you. The casual corruption. The rigged system. The forty-eight thousand people who won't get lottery tickets because they're not lucky or rich or useful enough.</p>

            <p class="narrative">Minho and Soojin wait at the tent. Their faces ask the question before words can.</p>

            <p class="dialogue">"We're in," you say. "Three days. Then we leave."</p>

            <p class="narrative">Minho's shoulders relax. Soojin doesn't.</p>

            <p class="dialogue">"What's the catch?"</p>
        `,
        choices: [
            { text: "Tell them everything. Total honesty.", target: 3029 },
            { text: "Just the basics. They don't need to know about the corruption.", target: 3030 },
            { text: "We need to talk about what we're willing to accept.", target: 3031 }
        ]
    },

    3024: {
        title: "THE JOBS",
        campaign: "busan_blues",
        content: `
            <p class="narrative">Spider spreads photographs across the table. Faces, locations, cargo manifests.</p>

            <p class="dialogue">"Three jobs. Three tickets."</p>

            <p class="narrative">She points to the first photo. A man in military uniform, general's stars on his collar.</p>

            <p class="dialogue">"General Sung controls the official evacuation. He also controls what gets loaded onto the military ships. Some of that cargo is... interesting. Medical supplies, research equipment, things the civilian population could use but won't see. I need someone to document what's in those containers. Evidence."</p>

            <p class="narrative">Second photo. A shipping container, serial numbers visible.</p>

            <p class="dialogue">"This container is in the port warehouse. It's supposed to hold humanitarian supplies. It doesn't. I need to know what's actually inside."</p>

            <p class="narrative">Third photo. A woman in a lab coat, entering a building.</p>

            <p class="dialogue">"Dr. Han. She runs the infection research program at the university. People go in, not everyone comes out. I need to know what happens inside those labs. What they're really working on."</p>

            <p class="narrative">She leans back.</p>

            <p class="dialogue">"Information gathering. Nothing violent. But risky, all three of them. You get caught, I don't know you."</p>
        `,
        choices: [
            { text: "I'll take all three. Let's get this done.", target: 3032 },
            { text: "One job at a time. Start with the general.", target: 3033 },
            { text: "Why do you want this information?", target: 3034 }
        ]
    },

    3027: {
        title: "THE IMMUNITY",
        campaign: "busan_blues",
        content: `
            <p class="narrative">You think of Soojin. Her unit overwhelmed, everyone turned but her. Multiple exposures, never a symptom. The Daejeon scientists said her blood was "interesting."</p>

            <p class="dialogue">"What happens to the volunteers?"</p>

            <p class="dialogue">"The ones who check out? Blood draws, observation, maybe some experimental treatments. They're looking for patterns, trying to synthesize what makes the immune different." Captain Moon studies your face. "You know someone."</p>

            <p class="dialogue">"Maybe."</p>

            <p class="dialogue">"Then you should know: the research program offers guaranteed passage. Top priority. Not just for the volunteer—for their whole group."</p>

            <p class="narrative">Guaranteed passage. For volunteering Soojin for experiments.</p>

            <p class="narrative">You think about the Daejeon scientists. Their hungry eyes. Their talk of "aggressive research." You think about the volunteers who went in and didn't come out.</p>

            <p class="narrative">But you also think about the lottery. One in forty odds. Three more days in this camp before the ships leave. And after that, whatever comes next.</p>

            <p class="dialogue">"Where do I sign up?"</p>
        `,
        choices: [
            { text: "Get the details. Don't commit yet.", target: 3035 },
            { text: "Bring Soojin to the research center.", target: 3036 },
            { text: "Find another way. This isn't right.", target: 3026 }
        ]
    },

    // ═══════════════════════════════════════════════════════════════
    // ACT THREE: CONFRONTATION
    // ═══════════════════════════════════════════════════════════════

    3033: {
        title: "THE GENERAL'S SECRET",
        campaign: "busan_blues",
        content: `
            <p class="narrative date">DAY 24 | NIGHT</p>

            <p class="narrative">General Sung's command post is in the old Lotte Hotel. Military headquarters for what's left of Korea's armed forces.</p>

            <p class="narrative">Getting inside requires a mix of luck, skill, and the security pass Spider provided. It's forged, but expertly so—good enough to get through the outer checkpoints.</p>

            <p class="narrative">The inner offices are another matter.</p>

            <p class="narrative">You pose as maintenance staff. Nobody looks twice at someone carrying a toolbox. The invisibility of the working class extends even to the apocalypse.</p>

            <p class="narrative">General Sung's office is on the fifteenth floor. You don't go in—too risky. But the records room next door is unguarded after midnight.</p>

            <p class="narrative">Inside, you find more than Spider asked for.</p>

            <p class="narrative">Cargo manifests showing medical supplies diverted from refugee camps to military families. Passenger lists with names added and removed by hand. And a file marked OPERATION SANCTUARY—a plan to abandon Busan once the military ships are loaded.</p>

            <p class="narrative">The perimeter isn't meant to hold. The military knows this. They're buying time to evacuate their own, and when the ships are full, they'll leave the refugees to die.</p>
        `,
        choices: [
            { text: "Take photos. Bring this to Spider.", target: 3037 },
            { text: "Find a way to expose this publicly.", target: 3038 },
            { text: "Confront General Sung directly.", target: 3039 }
        ]
    },

    3036: {
        title: "THE RESEARCH CENTER",
        campaign: "busan_blues",
        content: `
            <p class="narrative">Busan National University. The old medical sciences building, now converted to humanity's last hope for understanding the plague.</p>

            <p class="narrative">Soojin walks beside you, her expression unreadable.</p>

            <p class="dialogue">"You sure about this?"</p>

            <p class="dialogue">"No. But we need options. And if my blood can help—"</p>

            <p class="dialogue">"If. Big if."</p>

            <p class="narrative">Dr. Han greets you in the lobby. Young for someone running a critical research program—mid-thirties, dark circles under her eyes, the permanent exhaustion of someone fighting an unwinnable war.</p>

            <p class="dialogue">"Thank you for coming. We don't get many volunteers these days." She leads you through security doors, past laboratories humming with activity. "Captain Moon explained your situation?"</p>

            <p class="dialogue">"He said you're studying immune individuals."</p>

            <p class="dialogue">"That's part of it. We're studying everyone who shows any resistance to the pathogen. Some are fully immune—they never convert. Others are... delayed. The virus enters their system but doesn't replicate normally."</p>

            <p class="narrative">She stops outside a door marked OBSERVATION.</p>

            <p class="dialogue">"We've had breakthroughs. Real progress. But we need more subjects." Her eyes meet Soojin's. "Especially subjects with strong immune responses."</p>
        `,
        choices: [
            { text: "What exactly will you do to her?", target: 3040 },
            { text: "What are your breakthroughs? What have you learned?", target: 3041 },
            { text: "Show us the other subjects first.", target: 3042 }
        ]
    },

    3040: {
        title: "THE PROCEDURE",
        campaign: "busan_blues",
        content: `
            <p class="dialogue">"The initial phase is non-invasive. Blood draws, tissue samples, standard medical workup. We're looking for genetic markers, immune system variations, anything that correlates with resistance."</p>

            <p class="narrative">Dr. Han leads you into a clean room. Medical equipment, monitoring stations, the sterile efficiency of modern research.</p>

            <p class="dialogue">"If the initial results are promising, we move to controlled exposure testing. We need to understand exactly how and why certain immune systems reject the pathogen."</p>

            <p class="dialogue">"Controlled exposure?" Soojin's voice is sharp. "You mean infection."</p>

            <p class="dialogue">"Under controlled conditions. With full monitoring. And only with informed consent." Dr. Han's expression doesn't waver. "I won't lie to you. It's dangerous. Some subjects have adverse reactions. But the ones who don't—their blood can be used to develop treatments. Potentially a cure."</p>

            <p class="narrative">A cure. The word hangs in the air like a promise and a threat.</p>

            <p class="dialogue">"What happened to the subjects who had 'adverse reactions'?"</p>

            <p class="narrative">Dr. Han is quiet for a moment.</p>

            <p class="dialogue">"They're in the secure wing. Contained but... not recovered. We're still trying to help them."</p>

            <p class="narrative">Contained. Not recovered. You read between the lines.</p>
        `,
        choices: [
            { text: "No. We're leaving.", target: 3043 },
            { text: "Let Soojin decide.", target: 3044 },
            { text: "What's the compensation for successful subjects?", target: 3045 }
        ]
    },

    3037: {
        title: "THE EVIDENCE",
        campaign: "busan_blues",
        content: `
            <p class="narrative">You photograph everything. Cargo manifests. Passenger lists. The SANCTUARY file with its cold calculus of abandonment.</p>

            <p class="narrative">Spider looks at the photos with something like satisfaction.</p>

            <p class="dialogue">"This is better than I hoped. The general's been skimming supplies, adjusting lists, preparing to run. And now we can prove it."</p>

            <p class="dialogue">"What will you do with it?"</p>

            <p class="dialogue">"Use it." She downloads the images, begins making copies. "The general thinks he controls Busan. But information is power. With this, I can apply pressure. Extract concessions. Maybe even get more boats for the people who aren't on his priority list."</p>

            <p class="narrative">You think about forty-eight thousand people waiting on the beach. About the lottery that was never going to save most of them.</p>

            <p class="dialogue">"Or," you say slowly, "we could go public. Show everyone what's really happening. Force a change."</p>

            <p class="narrative">Spider's expression hardens.</p>

            <p class="dialogue">"Go public and the general declares martial law. Anyone with this information becomes an enemy of the state. We'd be dead before the story spreads."</p>

            <p class="dialogue">"Unless we spread it ourselves. All at once. So fast they can't stop it."</p>
        `,
        choices: [
            { text: "Work with Spider. Use the information strategically.", target: 3046 },
            { text: "Go public. The truth must come out.", target: 3038 },
            { text: "Blackmail the general yourself. Direct action.", target: 3047 }
        ]
    },

    // ═══════════════════════════════════════════════════════════════
    // ENDINGS
    // ═══════════════════════════════════════════════════════════════

    bb_ending_exodus: {
        title: "THE EXODUS",
        campaign: "busan_blues",
        isEnding: true,
        endingCode: "BBEXO",
        content: `
            <p class="narrative date">DAY 27 | BUSAN PORT | 06:00 AM</p>

            <p class="narrative">The Utopia casts off with the morning tide.</p>

            <p class="narrative">You stand at the rail, watching Busan shrink behind you. The safe zone that was never quite safe. The promise that was always compromised.</p>

            <p class="narrative">Minho's arm is around your waist. Soojin leans against the railing beside you, finally relaxed for the first time since Seoul.</p>

            <p class="narrative">Behind you, five thousand passengers fill the decks—the wealthy, the connected, the lucky few who found passage through skill or fortune or both.</p>

            <div class="poetic">
                The shore recedes.<br>
                Korea becomes memory.<br>
                And somewhere ahead,<br>
                a new world waits to be written.
            </div>

            <p class="narrative">The ship's captain announces their destination: Nagasaki first, then onward to wherever the living have gathered. The journey is uncertain. The destination is unknown. But the journey continues.</p>

            <p class="narrative">You think about the people you left behind. The forty-eight thousand still waiting on the beach. The lottery that will save some and doom others. The system that was never fair, only functional.</p>

            <p class="narrative">You survived. You escaped. You're sailing toward something like hope.</p>

            <p class="narrative">It doesn't feel like victory. It feels like the price of living in a world that stopped making sense.</p>

            <p class="narrative">But it's something. And something is better than nothing.</p>

            <div class="ending escape-ending">
                <div class="ending-number">BUSAN BLUES ENDING</div>
                <h2 class="ending-title">THE EXODUS</h2>
                <div class="ending-text">
                    <p>You made it out. You survived Seoul, survived the road, survived Busan.</p>
                    <p>Japan awaits. Then somewhere else. Then somewhere after that.</p>
                    <p>The world ended. But not for you. Not yet.</p>
                    <p>The ship sails toward sunrise, and you let yourself believe—just for a moment—that the worst is behind you.</p>
                    <p><em>Companions saved: All. Passage method: Merit. Guilt remaining: Significant.</em></p>
                </div>
            </div>
        `,
        choices: []
    },

    bb_ending_captain: {
        title: "THE CAPTAIN",
        campaign: "busan_blues",
        isEnding: true,
        endingCode: "BBCAP",
        content: `
            <p class="narrative date">DAY 30 | BUSAN SAFE ZONE</p>

            <p class="narrative">General Sung is gone. Fled on the first ship when the evidence went public, disgraced and hunted.</p>

            <p class="narrative">In his place, an unlikely coalition holds Busan together. Spider's network. The refugee councils. Military officers who chose duty over corruption. And you.</p>

            <p class="dialogue">"I never asked for this," you say to the gathered leaders.</p>

            <p class="dialogue">"Nobody asks for this," Colonel Jin replies. He's one of the good ones—stayed behind when the brass fled. "But someone has to lead. And you've proven you're willing to fight for everyone, not just yourself."</p>

            <div class="poetic">
                From the ashes of corruption,<br>
                something new rises.<br>
                Not perfect. Not pure.<br>
                But honest about what it is.
            </div>

            <p class="narrative">The ships continue to leave, but now the passenger lists are fair. A real lottery, not a rigged game. Merit passage based on skills the community needs, not wealth accumulated before the fall.</p>

            <p class="narrative">Minho stays with you. Building something that might last. Soojin stays too—the perimeter needs soldiers who fight for the right reasons.</p>

            <p class="narrative">The horde presses against the walls. The world beyond Busan is death and memory.</p>

            <p class="narrative">But here, in this small corner of what was Korea, humanity holds on. Not just surviving—rebuilding.</p>

            <p class="narrative">And you're the one holding the pieces together.</p>

            <div class="ending leadership-ending">
                <div class="ending-number">BUSAN BLUES ENDING</div>
                <h2 class="ending-title">THE CAPTAIN</h2>
                <div class="ending-text">
                    <p>You didn't escape. You stayed and fought for something worth saving.</p>
                    <p>Busan holds. The evacuation continues fairly. Hope has a chance.</p>
                    <p>It's not the ending you imagined. It's the ending you chose.</p>
                    <p>And sometimes, that's the only kind of ending that matters.</p>
                    <p><em>Role: Coalition Leader. Status: Essential. Ships saved: 12 additional runs.</em></p>
                </div>
            </div>
        `,
        choices: []
    },

    bb_ending_truth: {
        title: "THE RECKONING",
        campaign: "busan_blues",
        isEnding: true,
        endingCode: "BBTRU",
        content: `
            <p class="narrative date">DAY 26 | BUSAN SAFE ZONE</p>

            <p class="narrative">The truth spreads faster than the plague ever did.</p>

            <p class="narrative">General Sung's corruption. The diverted supplies. The plan to abandon the refugees. The lottery that was rigged from the start.</p>

            <p class="narrative">You broadcast it from every radio station still functioning. Spider's people distribute printouts through the camps. By noon, everyone knows.</p>

            <p class="narrative">By evening, Busan burns.</p>

            <p class="narrative">Not from the infected—from the living. Riots in the refugee camps. Military checkpoints overwhelmed. The Green Zone's gates torn down by people who finally realized they were never meant to survive.</p>

            <p class="dialogue">"This is your fault," Director Ahn says, finding you in the chaos. Her face is bruised, her authority gone. "You destroyed everything we built."</p>

            <p class="dialogue">"What you built was a lie. A comfortable lie for comfortable people."</p>

            <div class="poetic">
                Truth is not kind.<br>
                Truth is not safe.<br>
                But truth is the only foundation<br>
                worth building upon.
            </div>

            <p class="narrative">The ships leave—some still, those whose captains chose order over chaos. But the evacuation is transformed. No more tiers, no more lotteries. First come, first served, until the boats are full.</p>

            <p class="narrative">It's messy. Violent. Imperfect.</p>

            <p class="narrative">But it's honest. And sometimes honest is all we can be.</p>

            <div class="ending justice-ending">
                <div class="ending-number">BUSAN BLUES ENDING</div>
                <h2 class="ending-title">THE RECKONING</h2>
                <div class="ending-text">
                    <p>You told the truth. The price was chaos.</p>
                    <p>But from chaos came change. Real change.</p>
                    <p>The old order collapsed. What rises in its place is uncertain.</p>
                    <p>But it will be built on truth, not lies.</p>
                    <p><em>Corruption exposed: Total. Lives lost in riots: 847. Lives saved by honest evacuation: 3,200+.</em></p>
                </div>
            </div>
        `,
        choices: []
    },

    bb_ending_martyr: {
        title: "THE LAST STAND",
        campaign: "busan_blues",
        isEnding: true,
        endingCode: "BBMRT",
        content: `
            <p class="narrative date">DAY 28 | NORTHERN PERIMETER</p>

            <p class="narrative">The horde comes at dawn.</p>

            <p class="narrative">Not the scattered attacks of the past weeks—a full migration. Hundreds of thousands of infected, drawn south by the concentration of living flesh. The perimeter that held for weeks crumbles in hours.</p>

            <p class="narrative">The ships aren't ready. Too many people still in the camps, still waiting for lottery results that no longer matter.</p>

            <p class="narrative">Someone needs to buy time. Someone needs to hold the line while the evacuation accelerates.</p>

            <p class="dialogue">"Not you," Minho says, his hand on your arm. "Please. Not you."</p>

            <p class="dialogue">"Get to the ships. Get everyone you can to the ships."</p>

            <div class="poetic">
                Some walls are made of stone.<br>
                Some walls are made of flesh.<br>
                Both crumble eventually.<br>
                But flesh chooses when to stand.
            </div>

            <p class="narrative">Soojin stays with you. So do a hundred others—soldiers and civilians who understood that some things are worth dying for.</p>

            <p class="narrative">The wall of flesh holds for six hours. Long enough for three more ships to load. Ten thousand people who would have been overrun.</p>

            <p class="narrative">When the horde finally breaks through, you're too tired to run. Too peaceful to fight.</p>

            <p class="narrative">But you die facing forward. And that's enough.</p>

            <div class="ending sacrifice-ending">
                <div class="ending-number">BUSAN BLUES ENDING</div>
                <h2 class="ending-title">THE LAST STAND</h2>
                <div class="ending-text">
                    <p>You died so others could live.</p>
                    <p>The ships sailed with ten thousand people who owe their lives to the wall of flesh at the perimeter.</p>
                    <p>Minho speaks your name like a prayer. The survivors remember.</p>
                    <p>Some endings aren't about survival. Some endings are about meaning.</p>
                    <p><em>Final stand duration: 6 hours. Additional lives saved: 10,247. Legacy: Eternal.</em></p>
                </div>
            </div>
        `,
        choices: []
    },

    bb_ending_island: {
        title: "THE ISLANDER",
        campaign: "busan_blues",
        isEnding: true,
        endingCode: "BBISL",
        content: `
            <p class="narrative date">DAY 45 | JEJU ISLAND</p>

            <p class="narrative">Captain Moon's fishing boat is small and smells of salt and diesel. It's also salvation.</p>

            <p class="narrative">You never made it to the official evacuation. By the time the lottery results came, the riots had started, and the official channels collapsed into chaos.</p>

            <p class="narrative">But Moon remembered Sunhi's map. Remembered the fishing widow who sent survivors his way. He came back for you, cutting through the madness to find a group of people worth saving.</p>

            <div class="poetic">
                Not the grand ships of exodus.<br>
                Not the cruise liners of the wealthy.<br>
                A fishing boat, salt-stained and true,<br>
                carrying souls to simpler shores.
            </div>

            <p class="narrative">Jeju Island stands apart from the mainland chaos. Remote. Defensible. The infection reached it but never conquered it—the ocean is a moat that even the dead cannot cross.</p>

            <p class="narrative">Life here is different. Smaller. Quieter. You fish with Moon, learning the rhythms of the sea. Minho tends the small farm plot your group has claimed. Soojin trains the island militia, preparing for threats that may never come.</p>

            <p class="narrative">It's not the future you imagined. It's not even the future you wanted.</p>

            <p class="narrative">But the sun rises over clear water, and no one is trying to kill you, and sometimes—just sometimes—that's enough.</p>

            <div class="ending peace-ending">
                <div class="ending-number">BUSAN BLUES ENDING</div>
                <h2 class="ending-title">THE ISLANDER</h2>
                <div class="ending-text">
                    <p>You found peace at the edge of the world.</p>
                    <p>Jeju Island endures. The fishing boats run. Life continues, smaller but real.</p>
                    <p>The mainland is gone, but the island holds. And you hold with it.</p>
                    <p>Not every story needs to end in fire. Some end in salt and sunlight.</p>
                    <p><em>Location: Jeju Island. Community size: 2,400. Future: Uncertain but hopeful.</em></p>
                </div>
            </div>
        `,
        choices: []
    },

    bb_ending_fallen: {
        title: "THE FALL OF BUSAN",
        campaign: "busan_blues",
        isEnding: true,
        endingCode: "BBFAL",
        content: `
            <p class="narrative date">DAY 28 | BUSAN SAFE ZONE</p>

            <p class="narrative">The perimeter falls on the same day the riots peak.</p>

            <p class="narrative">Chaos inside and outside. Living fighting living while the dead pour through the gaps.</p>

            <p class="narrative">The ships that were meant to save everyone leave half-empty—captains too afraid to wait, passengers too desperate to care about those left behind.</p>

            <p class="narrative">You're caught in the crush. Everyone is caught in the crush. The distinction between survivor and refugee means nothing when the streets are filled with screaming and the sky is filled with smoke.</p>

            <div class="poetic">
                The promise of safety<br>
                was always a lie<br>
                we told ourselves<br>
                to keep moving forward.
            </div>

            <p class="narrative">You lose Minho in the chaos. See him dragged down by a wave of infected that pours through a broken checkpoint. His eyes find yours for one terrible moment.</p>

            <p class="narrative">Then nothing.</p>

            <p class="narrative">You run. Everyone runs. But there's nowhere left to run to.</p>

            <p class="narrative">Busan burns. The safe zone becomes another graveyard. And hope—that fragile thing you carried from Seoul—finally dies.</p>

            <p class="narrative">Not everyone gets an ending. Some stories just... stop.</p>

            <div class="ending tragedy-ending">
                <div class="ending-number">BUSAN BLUES ENDING</div>
                <h2 class="ending-title">THE FALL OF BUSAN</h2>
                <div class="ending-text">
                    <p>The safe zone fell. The promise was broken.</p>
                    <p>Some escaped—the lucky, the ruthless, the random survivors of random chance.</p>
                    <p>You weren't among them.</p>
                    <p>The story ends not with hope but with truth: not everyone gets saved. Not everyone deserves what happens to them.</p>
                    <p><em>Survivors: Unknown. Companions lost: All. Status: Terminated.</em></p>
                </div>
            </div>
        `,
        choices: []
    }
};

// ═══════════════════════════════════════════════════════════════
// INTEGRATION
// ═══════════════════════════════════════════════════════════════

function isBusanBluesUnlocked() {
    if (typeof SeedManager !== 'undefined') {
        const seeds = SeedManager.getSeeds();
        return seeds.some(s => s.includes('TCARV'));
    }
    return false;
}

function getBusanBluesSection(sectionId) {
    return BUSAN_BLUES_DATA[sectionId] || null;
}

function mergeBusanBluesContent() {
    if (typeof STORY_DATA !== 'undefined') {
        Object.assign(STORY_DATA, BUSAN_BLUES_DATA);
    }
}

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        BUSAN_BLUES_INFO,
        BUSAN_BLUES_DATA,
        BUSAN_ZONES,
        TICKET_TIERS,
        isBusanBluesUnlocked,
        getBusanBluesSection,
        mergeBusanBluesContent
    };
}

// Auto-merge
if (typeof STORY_DATA !== 'undefined') {
    mergeBusanBluesContent();
    console.log('[DEAD SEOUL] Busan Blues expansion loaded:', Object.keys(BUSAN_BLUES_DATA).length, 'sections');
}
