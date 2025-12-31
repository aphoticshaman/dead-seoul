# The Mathematics of Interconnected Narrative
## Formalizing Lock, Stock & Snatch for DEAD SEOUL

---

## 1. GRAPH-THEORETIC MODEL

Let **G = (V, E, W, τ)** where:
- **V** = {character nodes}
- **E** = {interaction edges}
- **W: E → ℝ⁺** = edge weight (intensity/stakes)
- **τ: E → ℕ** = temporal ordering (when revealed to audience)

### Key Metrics:

**Betweenness Centrality (MacGuffin Coefficient):**
```
C_B(v) = Σ_{s≠v≠t} (σ_st(v) / σ_st)
```
Objects/events with high C_B connect otherwise separate clusters.
- Lock Stock: the antique guns
- Snatch: the diamond
- DEAD SEOUL: **THE CURE** (a potential vaccine/antidote)

**Clustering Coefficient:**
```
C_i = 2|{e_jk}| / (k_i(k_i - 1))
```
Characters form tight clusters that later COLLIDE.

**Cascade Propagation:**
```
Heat(v, t+1) = α·Heat(v, t) + β·Σ_u∈N(v) W(u,v)·Heat(u, t)
```
One action propagates through the graph. The diamond theft → boxing match → Brick Top → pikeys → everyone dies.

---

## 2. THE RITCHIE STRUCTURE

### Phase 1: PARALLEL THREADS (τ = 0 to τ = n/3)
Introduce 3-5 independent storylines. Audience sees NO connection.

### Phase 2: FIRST COLLISION (τ = n/3)
Two threads collide unexpectedly. Stakes escalate for both.
"Oh shit, THOSE people know THOSE people?"

### Phase 3: CASCADE (τ = n/3 to τ = 2n/3)
Each collision triggers new collisions. The graph becomes increasingly connected.
Heat propagates. Everyone's problems become everyone's problems.

### Phase 4: CONVERGENCE (τ = 2n/3 to τ = n)
All threads crash into single location/moment.
Maximum drama density: `D = |E_active| / |V_present|`

### Phase 5: RESOLUTION CASCADE
Dominoes fall. Each resolution triggers the next.
Can be tragic, comic, or both.

---

## 3. APPLYING TO DEAD SEOUL

### Character Nodes (V):

**CLUSTER A - MUSEUM/PERSONAL**
- Yuna (protagonist)
- Minho (ex)
- Yuna's mother (mentioned, unseen)

**CLUSTER B - MILITARY**
- Colonel Yoo (authority figure)
- Soojin (discharged soldier)
- Soyeon (Soojin's ex-CO, in Busan)

**CLUSTER C - SURVIVORS**
- Mrs. Park (neighbor, connects to Yuna's father)
- Mr. Bae (Seoul Station leader)
- Hyejin + Junho (mother and child)

**CLUSTER D - THE SOURCE** (NEW - adds Ritchie complexity)
- Dr. Kwon (virologist, created the outbreak)
- "The Broker" (selling cure to highest bidder)
- North Korean extraction team (wants the cure)

### The MacGuffin: THE CURE
- Dr. Kwon has the only sample
- Multiple factions hunting it
- Yuna's museum contains the key to finding Kwon (historical records)

### Collision Points:

1. **τ = 1/3**: Yuna discovers Mrs. Park knew her father from the war - AND knew Dr. Kwon's family. The key isn't just supplies. It's information.

2. **τ = 1/2**: Soojin's ex-CO Soyeon isn't just in Busan - she's GUARDING the cure. The military knew before outbreak.

3. **τ = 2/3**: Colonel Yoo isn't just attracted to Yuna - she's hunting Kwon. Minho was sent back to Korea not for love but on orders.

4. **τ = 1**: All threads converge at the extraction point. Everyone has different agendas. The cure can save one person or doom thousands.

---

## 4. SILENT HILL PSYCHOLOGICAL LAYER

Each character's infected encounters manifest their trauma:

**Yuna**: Sees infected wearing museum curator uniforms. Her fear of being trapped in a dead career pursuing dead things.

**Minho**: The infected he fights all have HIS face. His guilt for abandoning her.

**Soojin**: The infected move like soldiers in formation. Her discharge wasn't just for love - she disobeyed orders that would have saved her unit.

**Colonel Yoo**: She sees the infected as her subordinates. The ones she sacrificed for mission success.

---

## 5. SQUID GAMES STAKES

Each "choice" in the CYOA has:
- Immediate survival stakes
- Relationship stakes
- Information stakes (what you learn affects future choices)
- Moral stakes (who do you save when you can't save everyone?)

The drama thickens because choices have HIDDEN consequences revealed later.

---

## 6. RYAN'S POETIC VOICE

Apply the Blue Bedlam sensibility:
- Astronomical/orbital metaphors for relationships
- The push-pull of gravitational dynamics
- Water imagery (tides, waves, drowning)
- The tension between hope and entropy
- Raw, unflinching examination of pain

Example prose transformation:

**BEFORE (generic):**
> He looked at her with longing.

**AFTER (Cardwell voice):**
> He looked at her like a signal bouncing off dead satellites, still transmitting to a frequency she'd stopped monitoring months ago.

---

## 7. IMPLEMENTATION

The web app should:
1. Track which threads the player has explored
2. Reveal connections progressively (non-linear τ)
3. Visualize the graph as choices are made
4. Use the poetry voice in all narrative text
5. Black Mirror aesthetic: sterile, unsettling, beautiful

The cascade should be FELT. Each choice should ripple.
