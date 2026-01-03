#!/usr/bin/env python3
"""
DEAD SEOUL - Story Compiler & Validator

Compiles individual scene files into story_data.js
Validates all connections (no dead ends, no missing targets)
Extracts scenes from compiled JS for debugging

Usage:
    python story_compiler.py compile    # scenes/ -> story_data.js
    python story_compiler.py extract    # story_data.js -> scenes/
    python story_compiler.py validate   # Check for broken links
    python story_compiler.py stats      # Show story statistics
"""

import json
import os
import re
import sys
from pathlib import Path
from collections import defaultdict

SCENES_DIR = Path(__file__).parent.parent / "scenes"
STATIC_DIR = Path(__file__).parent.parent / "static"
OUTPUT_FILE = STATIC_DIR / "compiled_story.js"

# Layer structure
LAYERS = {
    "layer0": "Inciting Incident",
    "layer1": "First Divergence",
    "layer2": "Second Divergence",
    "layer3": "Third Divergence",
    "layer4_convergence": "Convergence/Cull",
    "layer5_endings": "Endings"
}


def load_scene(filepath):
    """Load a single scene file."""
    with open(filepath, 'r', encoding='utf-8') as f:
        return json.load(f)


def load_all_scenes():
    """Load all scenes from all layer directories."""
    scenes = {}
    for layer_dir in SCENES_DIR.iterdir():
        if not layer_dir.is_dir():
            continue
        for scene_file in layer_dir.glob("*.json"):
            scene = load_scene(scene_file)
            scene_id = scene.get("id") or scene_file.stem
            scenes[scene_id] = {
                **scene,
                "_file": str(scene_file),
                "_layer": layer_dir.name
            }
    return scenes


def validate_scenes(scenes):
    """Validate all scene connections. Return list of issues."""
    issues = []
    all_ids = set(scenes.keys())

    # Also check numeric IDs (original sections)
    numeric_ids = {int(k) for k in all_ids if str(k).isdigit()}

    referenced = set()

    for scene_id, scene in scenes.items():
        # Check each choice target
        choices = scene.get("choices", [])
        for i, choice in enumerate(choices):
            target = choice.get("target")
            if target is None:
                issues.append(f"[{scene_id}] Choice {i+1} has no target")
                continue

            # Convert to string for comparison
            target_str = str(target)
            referenced.add(target_str)

            # Check if target exists
            if target_str not in all_ids and target not in numeric_ids:
                if not scene.get("isEnding"):  # Endings don't need targets
                    issues.append(f"[{scene_id}] Choice '{choice.get('text', '')[:30]}...' -> MISSING: {target}")

        # Check if scene has content
        if not scene.get("content") and not scene.get("isEnding"):
            issues.append(f"[{scene_id}] Scene has no content")

    # Check for orphaned scenes (defined but never referenced)
    orphaned = all_ids - referenced - {"1"}  # Section 1 is the entry point
    for orphan in orphaned:
        if not scenes[orphan].get("isEnding"):
            issues.append(f"[{orphan}] Scene is never referenced (orphaned)")

    return issues


def calculate_stats(scenes):
    """Calculate story statistics."""
    stats = {
        "total_scenes": len(scenes),
        "by_layer": defaultdict(int),
        "total_words": 0,
        "total_choices": 0,
        "endings": 0,
        "avg_words_per_scene": 0,
        "min_path_length": None,
        "max_path_length": None
    }

    for scene_id, scene in scenes.items():
        layer = scene.get("_layer", "unknown")
        stats["by_layer"][layer] += 1

        content = scene.get("content", "")
        # Strip HTML and count words
        text_only = re.sub(r'<[^>]+>', '', content)
        words = len(text_only.split())
        stats["total_words"] += words

        choices = scene.get("choices", [])
        stats["total_choices"] += len(choices)

        if scene.get("isEnding"):
            stats["endings"] += 1

    if stats["total_scenes"] > 0:
        stats["avg_words_per_scene"] = stats["total_words"] // stats["total_scenes"]

    # Estimate reading time (200 wpm)
    stats["total_reading_minutes"] = stats["total_words"] // 200

    return stats


def trace_paths(scenes, start="1", max_depth=20):
    """Trace all possible paths from start. Returns min/max path lengths."""
    def trace(scene_id, depth, visited):
        if depth > max_depth:
            return [depth]
        if scene_id in visited:
            return [depth]  # Loop detected

        scene_str = str(scene_id)
        if scene_str not in scenes:
            return [depth]  # Dead end

        scene = scenes[scene_str]
        if scene.get("isEnding"):
            return [depth]

        choices = scene.get("choices", [])
        if not choices:
            return [depth]

        path_lengths = []
        for choice in choices:
            target = choice.get("target")
            if target:
                path_lengths.extend(trace(target, depth + 1, visited | {scene_id}))

        return path_lengths or [depth]

    lengths = trace(start, 0, set())
    return min(lengths), max(lengths)


def compile_to_js(scenes):
    """Compile all scenes into a single JS file."""
    # Sort scenes by layer then ID
    layer_order = list(LAYERS.keys())

    def sort_key(item):
        scene_id, scene = item
        layer = scene.get("_layer", "zzz")
        layer_idx = layer_order.index(layer) if layer in layer_order else 99
        # Try numeric sort within layer
        try:
            num = int(scene_id.split("_")[0]) if "_" in str(scene_id) else int(scene_id)
        except:
            num = 9999
        return (layer_idx, num, str(scene_id))

    sorted_scenes = sorted(scenes.items(), key=sort_key)

    # Generate JS
    js_parts = [
        "// ═══════════════════════════════════════════════════════════════════════════",
        "// DEAD SEOUL - Compiled Story Data",
        f"// Generated from {len(scenes)} scene files",
        "// DO NOT EDIT - Edit individual scene files in /scenes/ instead",
        "// ═══════════════════════════════════════════════════════════════════════════",
        "",
        "const COMPILED_STORY = {"
    ]

    current_layer = None
    for scene_id, scene in sorted_scenes:
        layer = scene.get("_layer", "unknown")

        # Add layer separator
        if layer != current_layer:
            js_parts.append(f"\n    // ═══ {LAYERS.get(layer, layer).upper()} ═══")
            current_layer = layer

        # Clean scene data (remove internal fields)
        clean_scene = {k: v for k, v in scene.items() if not k.startswith("_")}

        # Format scene
        scene_json = json.dumps(clean_scene, indent=8, ensure_ascii=False)
        # Fix indentation
        scene_json = scene_json.replace("\n", "\n    ")

        # Use quoted key for string IDs, unquoted for numeric
        if str(scene_id).isdigit():
            js_parts.append(f"\n    {scene_id}: {scene_json},")
        else:
            js_parts.append(f'\n    "{scene_id}": {scene_json},')

    js_parts.append("\n};")
    js_parts.append("")
    js_parts.append("// Merge into STORY_DATA")
    js_parts.append("if (typeof STORY_DATA !== 'undefined') {")
    js_parts.append("    Object.assign(STORY_DATA, COMPILED_STORY);")
    js_parts.append("}")
    js_parts.append("")

    return "\n".join(js_parts)


def js_to_json(js_obj):
    """Convert JavaScript object syntax to valid JSON."""
    # Remove template literals and convert to regular strings
    # Handle backtick strings
    def replace_template(match):
        content = match.group(1)
        # Escape for JSON
        content = content.replace('\\', '\\\\')
        content = content.replace('\n', '\\n')
        content = content.replace('\r', '\\r')
        content = content.replace('\t', '\\t')
        content = content.replace('"', '\\"')
        return f'"{content}"'

    result = js_obj

    # Replace backtick template literals
    result = re.sub(r'`([^`]*)`', replace_template, result, flags=re.DOTALL)

    # Quote unquoted keys (word: -> "word":)
    result = re.sub(r'(\s)(\w+)(\s*:)', r'\1"\2"\3', result)

    # Fix true/false (already valid in JSON)

    # Remove trailing commas before } or ]
    result = re.sub(r',(\s*[}\]])', r'\1', result)

    return result


def extract_from_js(js_file):
    """Extract scenes from a compiled JS file back into individual files."""
    with open(js_file, 'r', encoding='utf-8') as f:
        content = f.read()

    scenes = {}

    # Find the main object definition
    # Look for patterns like: "2_attack": { or 2: {
    # We need to properly match balanced braces

    # First, find all scene starts
    scene_starts = list(re.finditer(r'(?:(\d+)|"([^"]+)")\s*:\s*\{', content))

    for i, match in enumerate(scene_starts):
        scene_id = match.group(1) or match.group(2)
        start_pos = match.end() - 1  # Position of opening {

        # Find matching closing brace
        brace_count = 0
        end_pos = start_pos
        for j, char in enumerate(content[start_pos:]):
            if char == '{':
                brace_count += 1
            elif char == '}':
                brace_count -= 1
                if brace_count == 0:
                    end_pos = start_pos + j + 1
                    break

        if end_pos > start_pos:
            scene_js = content[start_pos:end_pos]

            try:
                # Convert JS to JSON
                scene_json = js_to_json(scene_js)
                scene = json.loads(scene_json)
                scenes[scene_id] = scene
            except json.JSONDecodeError as e:
                # Try a simpler approach - just extract basic fields
                scene = {"_parse_error": str(e)}

                # Extract title
                title_match = re.search(r'title:\s*["\']([^"\']+)["\']', scene_js)
                if title_match:
                    scene["title"] = title_match.group(1)

                # Extract content (between backticks)
                content_match = re.search(r'content:\s*`([^`]+)`', scene_js, re.DOTALL)
                if content_match:
                    scene["content"] = content_match.group(1).strip()

                # Extract choices
                choices = []
                choice_matches = re.finditer(
                    r'\{\s*text:\s*["\']([^"\']+)["\'],\s*target:\s*["\']?([^"\',}\s]+)',
                    scene_js
                )
                for cm in choice_matches:
                    choices.append({"text": cm.group(1), "target": cm.group(2)})
                if choices:
                    scene["choices"] = choices

                scenes[scene_id] = scene
                print(f"  Partial parse for {scene_id}")

    return scenes


def save_scenes(scenes, output_dir):
    """Save scenes to individual files."""
    output_dir = Path(output_dir)

    # Determine layer for each scene
    for scene_id, scene in scenes.items():
        # Guess layer from scene ID
        if str(scene_id).isdigit():
            num = int(scene_id)
            if num == 1:
                layer = "layer0"
            elif num <= 4:
                layer = "layer1"
            elif num <= 13:
                layer = "layer2"
            else:
                layer = "layer3"
        elif "_" in str(scene_id):
            parts = scene_id.split("_")
            depth = len(parts)
            if depth <= 2:
                layer = "layer2"
            elif depth <= 3:
                layer = "layer3"
            else:
                layer = "layer4_convergence"
        else:
            layer = "layer3"

        if scene.get("isEnding"):
            layer = "layer5_endings"

        # Create layer directory
        layer_dir = output_dir / layer
        layer_dir.mkdir(parents=True, exist_ok=True)

        # Save scene
        scene_file = layer_dir / f"{scene_id}.json"
        with open(scene_file, 'w', encoding='utf-8') as f:
            json.dump({**scene, "id": scene_id}, f, indent=2, ensure_ascii=False)

        print(f"  Saved: {scene_file.name}")


def main():
    if len(sys.argv) < 2:
        print(__doc__)
        return

    command = sys.argv[1].lower()

    if command == "compile":
        print("Compiling scenes...")
        scenes = load_all_scenes()

        if not scenes:
            print("No scenes found in scenes/ directory")
            return

        print(f"  Loaded {len(scenes)} scenes")

        # Validate
        issues = validate_scenes(scenes)
        if issues:
            print(f"\nWarnings ({len(issues)}):")
            for issue in issues[:20]:  # Show first 20
                print(f"  - {issue}")
            if len(issues) > 20:
                print(f"  ... and {len(issues) - 20} more")

        # Compile
        js_content = compile_to_js(scenes)
        with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
            f.write(js_content)

        print(f"\nCompiled to: {OUTPUT_FILE}")
        print(f"  Total size: {len(js_content):,} bytes")

    elif command == "extract":
        if len(sys.argv) < 3:
            source = STATIC_DIR / "recursive_branches.js"
        else:
            source = Path(sys.argv[2])

        print(f"Extracting scenes from: {source}")
        scenes = extract_from_js(source)
        print(f"  Found {len(scenes)} scenes")

        save_scenes(scenes, SCENES_DIR)
        print(f"\nExtracted to: {SCENES_DIR}")

    elif command == "validate":
        print("Validating scene connections...")
        scenes = load_all_scenes()

        if not scenes:
            print("No scenes found. Run 'extract' first.")
            return

        issues = validate_scenes(scenes)

        if issues:
            print(f"\nIssues found ({len(issues)}):")
            for issue in issues:
                print(f"  - {issue}")
        else:
            print("\nAll connections valid!")

        # Path analysis
        min_path, max_path = trace_paths(scenes)
        print(f"\nPath lengths: min={min_path}, max={max_path} scenes")

    elif command == "stats":
        print("Calculating story statistics...")
        scenes = load_all_scenes()

        if not scenes:
            print("No scenes found.")
            return

        stats = calculate_stats(scenes)

        print(f"\n{'='*50}")
        print("DEAD SEOUL - Story Statistics")
        print(f"{'='*50}")
        print(f"Total scenes:     {stats['total_scenes']}")
        print(f"Total words:      {stats['total_words']:,}")
        print(f"Avg words/scene:  {stats['avg_words_per_scene']}")
        print(f"Total choices:    {stats['total_choices']}")
        print(f"Endings:          {stats['endings']}")
        print(f"Est. reading:     ~{stats['total_reading_minutes']} minutes")
        print(f"\nBy layer:")
        for layer, count in sorted(stats['by_layer'].items()):
            print(f"  {layer}: {count} scenes")

        # Path analysis
        min_path, max_path = trace_paths(scenes)
        print(f"\nPath lengths:")
        print(f"  Shortest path:  {min_path} scenes")
        print(f"  Longest path:   {max_path} scenes")

        # Target check
        target_words = stats['avg_words_per_scene']
        if target_words < 800:
            print(f"\n[!] Scenes are SHORT. Target: 800-2000 words/scene")
            print(f"    Current avg: {target_words} words")

    else:
        print(f"Unknown command: {command}")
        print(__doc__)


if __name__ == "__main__":
    main()
