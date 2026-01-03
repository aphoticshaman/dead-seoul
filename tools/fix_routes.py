#!/usr/bin/env python3
"""
Fix broken routes by redirecting to convergence nodes.
"""

import json
import os
from pathlib import Path

SCENES_DIR = Path(__file__).parent.parent / "scenes"

# Map missing targets to convergence nodes
REDIRECT_MAP = {
    # Layer 3 Minho path -> minho reunited
    "3_comfort_absolution": "conv_minho_reunited",
    "3_comfort_hold": "conv_minho_reunited",
    "3_hold_move": "conv_minho_reunited",
    "3_hold_regret": "conv_minho_reunited",
    "3_hold_gentle": "conv_minho_reunited",
    "3_plan_gather": "conv_minho_reunited",
    "3_plan_neighbor": "conv_minho_reunited",
    "3_plan_car": "conv_minho_reunited",
    "3_silent_rescue": "conv_minho_reunited",
    "3_silent_abandon": "conv_building_trapped",
    "3_alive_flight": "conv_minho_reunited",
    "3_alive_plan": "conv_minho_reunited",
    "3_kiss_roof": "conv_rooftop_survey",
    "3_kiss_neighbor": "conv_minho_reunited",
    "3_kiss_car": "conv_streets_vehicle",

    # Layer 4 armed path
    "4_down_retreat": "conv_building_trapped",
    "4_down_attack": "conv_garage_alone",
    "4_roof_question": "conv_rooftop_professor",
    "4_roof_cautious": "conv_rooftop_survey",
    "4_lobby_main": "conv_streets_foot",
    "4_lobby_alleys": "conv_streets_foot",
    "4_observe_sprint": "conv_streets_foot",
    "4_observe_distract": "conv_garage_alone",
    "4_observe_wait": "conv_building_trapped",
    "4_park_search": "conv_garage_alone",
    "4_park_leave": "conv_garage_alone",
    "4_concern_time": "conv_rooftop_professor",
    "4_concern_offer": "end_professor_mercy",
    "4_wisdom_instinct": "conv_streets_foot",
    "4_wisdom_principle": "conv_rooftop_survey",
    "4_wisdom_honest": "conv_streets_foot",
    "4_mercy_search": "conv_garage_alone",
    "4_mercy_leave": "conv_garage_alone",
    "4_photo_search": "conv_garage_alone",
    "4_photo_floor": "conv_building_trapped",
    "4_photo_leave": "conv_garage_alone",

    # Layer 2 Mrs Park paths
    "2_itaewon_drive": "end_itaewon_drive",
    "2_itaewon_walk": "conv_streets_foot",
    "2_itaewon_call": "conv_streets_vehicle",
    "2_survivor_leave": "conv_streets_vehicle",
    "2_survivor_moving": "conv_streets_stranger",
    "2_hall_supplies": "conv_garage_companion",
    "2_laugh_plan": "conv_garage_companion",
    "2_laugh_invite": "conv_garage_companion",
    "2_laugh_wisdom": "conv_garage_companion",
    "2_shake_follow": "conv_garage_companion",
    "2_shake_resolve": "conv_garage_companion",
    "2_shake_name": "conv_garage_companion",
    "2_car_yeouido": "end_yeouido_drive",
    "2_car_escape": "end_escape_drive",
    "2_sneak_run": "conv_streets_vehicle",
    "2_sneak_distract": "conv_garage_alone",
    "2_prayer_check_building": "conv_building_trapped",
    "2_prayer_roof": "conv_rooftop_survey",
    "2_ring_photo": "conv_garage_alone",
    "2_search_roof": "conv_rooftop_survey",
    "2_search_neighbors": "conv_building_trapped",
    "2_promise_fire_escape": "conv_streets_foot",
    "2_roof_route": "conv_streets_foot",
    "2_refuse_run": "conv_garage_alone",
    "2_wait_step_back": "conv_garage_alone",
    "2_wait_promise": "end_mrs_park_gift",
    "2_freeze_wait": "conv_garage_alone",
    "2_freeze_investigate": "conv_streets_stranger",
    "2_check_follow": "conv_garage_companion",
    "2_check_neighbors": "conv_building_trapped",
    "2_check_invite": "conv_garage_companion",
    "2_stare_survive": "conv_garage_companion",
    "2_stare_admit": "conv_garage_companion",
    "2_stare_protect": "conv_garage_companion",
    "2_husband_worth": "conv_garage_alone",
    "2_husband_linger": "end_mrs_park_gift",
    "2_garage_shoot": "conv_streets_vehicle",
    "2_garage_other": "conv_garage_alone",
    "2_jungwoo_fiancee": "end_jungwoo_search",
    "2_jungwoo_destination": "conv_streets_vehicle",
    "2_jungwoo_silent": "conv_streets_stranger",
    "2_family_promise": "end_mrs_park_gift",
    "2_family_stories": "conv_garage_alone",
    "2_watch_end": "end_mrs_park_gift",
    "2_watch_offer": "end_mrs_park_gift",
    "2_watch_flee": "conv_garage_alone",
    "2_hall_check": "conv_building_trapped",
    "2_hall_run": "conv_garage_companion",

    # Convergence sub-paths
    "conv_garage_sneak": "conv_streets_vehicle",
    "conv_garage_shoot": "conv_streets_vehicle",
    "conv_garage_distract": "conv_streets_vehicle",
    "conv_escape_together": "end_together_escape",
    "conv_check_neighbor": "conv_garage_companion",
    "conv_fire_escape": "conv_streets_foot",
    "conv_garage_sacrifice": "end_mrs_park_gift",
    "conv_garage_together": "conv_streets_vehicle",
    "conv_streets_foot": "end_escape_drive",
    "end_professor_mercy": "end_turning",
    "end_professor_hope": "end_turning",
    "end_jungwoo_search": "end_found_family",
    "end_yeouido_together": "end_found_family",
    "end_itaewon_together": "end_together_escape",
    "end_chute_gamble": "end_devoured",
}

def fix_routes():
    """Fix all broken routes in scene files."""
    fixed = 0

    for layer_dir in SCENES_DIR.iterdir():
        if not layer_dir.is_dir():
            continue

        for scene_file in layer_dir.glob("*.json"):
            try:
                with open(scene_file, 'r', encoding='utf-8') as f:
                    scene = json.load(f)

                modified = False
                choices = scene.get("choices", [])

                for choice in choices:
                    target = choice.get("target")
                    if target and str(target) in REDIRECT_MAP:
                        old_target = target
                        choice["target"] = REDIRECT_MAP[str(target)]
                        modified = True
                        fixed += 1
                        print(f"  {scene_file.stem}: {old_target} -> {choice['target']}")

                if modified:
                    with open(scene_file, 'w', encoding='utf-8') as f:
                        json.dump(scene, f, indent=2, ensure_ascii=False)

            except Exception as e:
                print(f"Error processing {scene_file}: {e}")

    print(f"\nFixed {fixed} routes")

if __name__ == "__main__":
    fix_routes()
