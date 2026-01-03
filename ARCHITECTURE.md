# DEAD SEOUL - Narrative Architecture

## Layer Structure

```
Layer 0 (1 scene)     → THE LAST MORNING
                         |
         ┌───────────────┼───────────────┐
         ↓               ↓               ↓
Layer 1 (3 scenes)    HELP MRS PARK   BARRICADE    ARM & GO
                         |               |            |
         ┌───────┬───────┤    ┌──────┬───┤    ┌──────┼──────┐
         ↓       ↓       ↓    ↓      ↓   ↓    ↓      ↓      ↓
Layer 2 (9)    attack  spray distract  open verify silent  down  up  check
                ↓       ↓       ↓       ↓     ↓      ↓      ↓     ↓     ↓
Layer 3 (27)   [each splits into 3 more paths - ~27 total]
                ↓       ↓       ↓       ↓     ↓      ↓      ↓     ↓     ↓
                └───────┴───────┴───────┴─────┴──────┴──────┴─────┴─────┘
                                        ↓
Layer 4 (8)              ═══════ CONVERGENCE NODES ═══════
                         Based on: Location + Companion + State
                                        ↓
                         ┌──────────────┼──────────────┐
                         ↓              ↓              ↓
Layer 5 (endings)     SURVIVAL      DEATH         TRIUMPH
                      (escape)    (fail states)   (HEA paths)
```

## Layer 4: Convergence Nodes

All Layer 3 paths funnel into ONE of these 8 nodes based on accumulated flags:

### 1. `conv_garage_alone`
**Arrives from:** 2_supplies_garage paths where Mrs Park died/stayed
**State:** Has car keys, supplies, alone
**Continues to:** Streets vehicle or trapped

### 2. `conv_garage_companion`
**Arrives from:** 2_spray/2_distract paths where Mrs Park survived
**State:** Has car keys, Mrs Park with you
**Continues to:** Streets vehicle with mentor

### 3. `conv_rooftop_survey`
**Arrives from:** 4_up, 2_promise_roof, 2_prayer_roof paths
**State:** High ground, seeing the scope
**Continues to:** Descent choice, possible stranger encounter

### 4. `conv_rooftop_professor`
**Arrives from:** 4_roof_concern paths, extended vigil
**State:** With dying professor, wisdom received
**Continues to:** Mercy choice, alone after

### 5. `conv_minho_reunited`
**Arrives from:** 3_open_fast, 3_verify, 3_comfort paths
**State:** Minho with you, emotional reunion
**Continues to:** Streets together, building escape

### 6. `conv_building_trapped`
**Arrives from:** 3_silent (failed), 4_down paths that go wrong
**State:** Blocked exits, need alternate route
**Continues to:** Rooftop escape, basement gamble

### 7. `conv_streets_vehicle`
**Arrives from:** Garage escapes, successful car acquisition
**State:** Mobile, in Hyundai, city burning around
**Continues to:** Destination choice (Itaewon/Yeouido/escape)

### 8. `conv_streets_stranger`
**Arrives from:** 2_car_survivor_save, street encounters
**State:** Picked up survivor (Jungwoo), trust uncertain
**Continues to:** Destination with unknown ally

---

## Scene Length Requirements

### Target: 800-2000 words per scene (3-8x current)

**Current problem:** Scenes are 100-200 words. Reader finishes in 30 seconds.
**Goal:** Each scene = 1-3 book pages. 3-8 minutes reading before choice.

### Structure for extended scenes:

```
1. OPENING (100-200 words)
   - Immediate sensory hook
   - Continuation from previous choice

2. DEVELOPMENT (400-1000 words)
   - Environmental description (show the apocalypse)
   - Internal monologue (Yuna's thoughts, memories)
   - Tension building (sounds, near-misses, discoveries)
   - Character moments (if companion present)

3. ESCALATION (200-400 words)
   - Situation changes
   - New information or threat
   - Stakes become clear

4. CHOICE POINT (100-200 words)
   - Moment of decision crystallizes
   - 2-4 meaningful choices
```

---

## Flag-Based Ending Routing

Layer 5 endings are determined by accumulated flags:

### Survival Endings (escaped Seoul)
- `escaped_alone` → HERMIT ending
- `escaped_with_minho` → FLAME ending
- `escaped_with_group` → FOUND FAMILY ending

### Death Endings (failed)
- `overwhelmed` → DEVOURED ending
- `bitten_no_mercy` → TURNING ending
- `fell` → THE FALL ending
- `chose_death` → MERCIFUL END ending

### Triumph Endings (exceptional paths)
- `mrs_park_alive + minho_reunited + strategic_choices` → COALITION ending
- `found_cure_hint + scientific_choices` → CURE ending
- `saved_everyone` → DAWN OF FAMILY ending

---

## Writing Priority

1. **Extend Layer 0** (section 1) to 1500+ words
2. **Extend Layer 1** (sections 2,3,4) to 1200+ words each
3. **Write convergence nodes** (8 scenes, 1500+ words each)
4. **Write endings** (6-10 endings, 800+ words each)
5. **Extend Layer 2-3** as needed

---

## Convergence Routing Table

| Layer 3 Scene | Flags | Routes To |
|--------------|-------|-----------|
| 2_supplies_garage | mrs_park_dead | conv_garage_alone |
| 2_spray_* | mrs_park_alive | conv_garage_companion |
| 2_distract_* | mrs_park_alive | conv_garage_companion |
| 2_*_roof | rooftop_access | conv_rooftop_survey |
| 4_roof_* | met_professor | conv_rooftop_professor |
| 3_comfort_* | minho_reunited | conv_minho_reunited |
| 3_plan_* | minho_reunited | conv_minho_reunited |
| 3_hold_* | minho_reunited | conv_minho_reunited |
| 4_down_* (fail) | trapped | conv_building_trapped |
| 2_freeze_car | has_vehicle | conv_streets_vehicle |
| 2_survivor_save | has_stranger | conv_streets_stranger |
