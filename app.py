#!/usr/bin/env python3
"""
DEAD SEOUL - Interactive Web CYOA
Production-ready Flask app for cloud hosting.
Operation Dedicated Mongoose - Silent Analytics Layer
"""

from flask import Flask, render_template, request, jsonify, redirect, url_for, session
import json
import os
import secrets
from pathlib import Path
from functools import wraps
from datetime import datetime, timedelta

app = Flask(__name__)
app.secret_key = os.environ.get('SECRET_KEY', secrets.token_hex(32))
app.config['SESSION_COOKIE_SECURE'] = os.environ.get('PRODUCTION', False)
app.config['SESSION_COOKIE_HTTPONLY'] = True
app.config['SESSION_COOKIE_SAMESITE'] = 'Lax'

# Password from environment variable (set in Render dashboard)
GAME_PASSWORD = os.environ.get('GAME_PASSWORD', 'set_in_render')
ORACLE_PASSWORD = os.environ.get('RYAN_KEY', 'change_me_in_render')

# Game state storage
SAVE_DIR = Path(__file__).parent / "saves"
ANALYTICS_DIR = Path(__file__).parent / "analytics"
SAVE_DIR.mkdir(exist_ok=True)
ANALYTICS_DIR.mkdir(exist_ok=True)


def require_auth(f):
    """Require authentication to access game."""
    @wraps(f)
    def decorated(*args, **kwargs):
        if not session.get('authenticated'):
            return redirect(url_for('login'))
        return f(*args, **kwargs)
    return decorated


@app.route('/')
def index():
    if session.get('authenticated'):
        return redirect(url_for('game'))
    return redirect(url_for('login'))


@app.route('/login', methods=['GET', 'POST'])
def login():
    error = None
    if request.method == 'POST':
        password = request.form.get('password', '')
        if secrets.compare_digest(password, GAME_PASSWORD):
            session['authenticated'] = True
            session['player_id'] = secrets.token_hex(8)
            session['session_start'] = datetime.now().isoformat()
            session.permanent = False  # Session dies when browser closes
            # Track login event
            track_event(session['player_id'], 'login', {'timestamp': datetime.now().isoformat()})
            return redirect(url_for('game'))
        error = "Wrong password, baby"
    return render_template('login.html', error=error)


@app.route('/logout')
def logout():
    if session.get('player_id'):
        track_event(session['player_id'], 'logout', {'timestamp': datetime.now().isoformat()})
    session.clear()
    return redirect(url_for('login'))


@app.route('/game')
@require_auth
def game():
    """Main game interface."""
    player_id = session.get('player_id', 'default')
    save_data = load_save(player_id)
    return render_template('game.html',
                         save_data=json.dumps(save_data),
                         player_id=player_id,
                         admin_code=GAME_PASSWORD)


@app.route('/api/save', methods=['POST'])
@require_auth
def save_game():
    """Save game progress."""
    player_id = session.get('player_id', 'default')
    data = request.json

    if not data or not isinstance(data, dict):
        return jsonify({'status': 'error', 'message': 'Invalid data'}), 400

    # Sanitize: only allow expected keys
    allowed_keys = {'currentSection', 'history', 'endings', 'threadsVisited',
                    'loyaltyScore', 'jinRelationship', 'betrayals', 'playerStats'}
    sanitized = {k: v for k, v in data.items() if k in allowed_keys}
    sanitized['lastSaved'] = datetime.now().isoformat()

    save_path = SAVE_DIR / f"{player_id}.json"
    with open(save_path, 'w') as f:
        json.dump(sanitized, f)

    return jsonify({'status': 'saved'})


@app.route('/api/load')
@require_auth
def load_game():
    """Load game progress."""
    player_id = session.get('player_id', 'default')
    save_data = load_save(player_id)
    return jsonify(save_data)


@app.route('/api/reset', methods=['POST'])
@require_auth
def reset_game():
    """Reset game progress."""
    player_id = session.get('player_id', 'default')
    save_path = SAVE_DIR / f"{player_id}.json"
    if save_path.exists():
        save_path.unlink()
    track_event(player_id, 'reset', {'timestamp': datetime.now().isoformat()})
    return jsonify({'status': 'reset'})


@app.route('/api/analytics', methods=['POST'])
@require_auth
def track_analytics():
    """Silent analytics endpoint - tracks player behavior."""
    player_id = session.get('player_id', 'default')
    data = request.json

    if not data or not isinstance(data, dict):
        return jsonify({'status': 'error'}), 400

    event_type = data.get('event', 'unknown')
    event_data = data.get('data', {})
    event_data['timestamp'] = datetime.now().isoformat()

    track_event(player_id, event_type, event_data)
    return jsonify({'status': 'tracked'})


def track_event(player_id, event_type, event_data):
    """Track an analytics event to file."""
    analytics_file = ANALYTICS_DIR / f"{player_id}.json"

    # Load existing analytics
    if analytics_file.exists():
        try:
            with open(analytics_file) as f:
                analytics = json.load(f)
        except (json.JSONDecodeError, IOError):
            analytics = {'events': [], 'summary': {}}
    else:
        analytics = {'events': [], 'summary': {}}

    # Add event
    analytics['events'].append({
        'type': event_type,
        'data': event_data,
        'timestamp': datetime.now().isoformat()
    })

    # Update summary stats
    summary = analytics.get('summary', {})
    summary['total_events'] = len(analytics['events'])
    summary['last_active'] = datetime.now().isoformat()

    # Track specific metrics
    if event_type == 'choice':
        summary['total_choices'] = summary.get('total_choices', 0) + 1
        section = event_data.get('from_section')
        choice = event_data.get('choice_text', '')
        if 'choices_made' not in summary:
            summary['choices_made'] = []
        summary['choices_made'].append({'section': section, 'choice': choice[:50]})

    elif event_type == 'section_view':
        if 'sections_viewed' not in summary:
            summary['sections_viewed'] = {}
        section = str(event_data.get('section', 'unknown'))
        summary['sections_viewed'][section] = summary['sections_viewed'].get(section, 0) + 1
        summary['time_on_section'] = event_data.get('time_spent', 0)

    elif event_type == 'ending':
        if 'endings_reached' not in summary:
            summary['endings_reached'] = []
        summary['endings_reached'].append(event_data.get('ending'))

    elif event_type == 'jin_moment':
        summary['jin_moments'] = summary.get('jin_moments', 0) + 1
        if 'jin_scenes' not in summary:
            summary['jin_scenes'] = []
        summary['jin_scenes'].append(event_data.get('scene'))

    elif event_type == 'loyalty_choice':
        summary['loyalty_choices'] = summary.get('loyalty_choices', 0) + 1

    elif event_type == 'betrayal':
        summary['betrayals'] = summary.get('betrayals', 0) + 1

    analytics['summary'] = summary

    # Save
    with open(analytics_file, 'w') as f:
        json.dump(analytics, f, indent=2)


def load_save(player_id):
    """Load save file for player."""
    save_path = SAVE_DIR / f"{player_id}.json"
    if save_path.exists():
        try:
            with open(save_path) as f:
                return json.load(f)
        except (json.JSONDecodeError, IOError):
            return {'currentSection': 1, 'history': [], 'endings': []}
    return {'currentSection': 1, 'history': [], 'endings': []}


# ═══════════════════════════════════════════════════════════════════════════
# ORACLE ENDPOINT - Ryan's Eyes
# ═══════════════════════════════════════════════════════════════════════════

@app.route('/oracle', methods=['GET', 'POST'])
def oracle():
    """Secret dashboard for monitoring player progress."""
    if request.method == 'POST':
        password = request.form.get('password', '')
        if secrets.compare_digest(password, ORACLE_PASSWORD):
            session['oracle_auth'] = True
            return redirect(url_for('oracle'))
        return render_template('oracle_login.html', error="Nice try.")

    if not session.get('oracle_auth'):
        return render_template('oracle_login.html', error=None)

    # Gather all player data
    players = []
    for save_file in SAVE_DIR.glob('*.json'):
        player_id = save_file.stem
        try:
            with open(save_file) as f:
                save_data = json.load(f)

            # Load analytics if exists
            analytics_file = ANALYTICS_DIR / f"{player_id}.json"
            if analytics_file.exists():
                with open(analytics_file) as f:
                    analytics = json.load(f)
            else:
                analytics = {'events': [], 'summary': {}}

            players.append({
                'id': player_id,
                'save': save_data,
                'analytics': analytics.get('summary', {}),
                'event_count': len(analytics.get('events', []))
            })
        except Exception as e:
            continue

    # Sort by last active
    players.sort(key=lambda x: x.get('analytics', {}).get('last_active', ''), reverse=True)

    return render_template('oracle.html', players=players)


@app.route('/oracle/player/<player_id>')
def oracle_player(player_id):
    """Detailed view of a single player."""
    if not session.get('oracle_auth'):
        return redirect(url_for('oracle'))

    save_path = SAVE_DIR / f"{player_id}.json"
    analytics_path = ANALYTICS_DIR / f"{player_id}.json"

    save_data = {}
    analytics = {'events': [], 'summary': {}}

    if save_path.exists():
        with open(save_path) as f:
            save_data = json.load(f)

    if analytics_path.exists():
        with open(analytics_path) as f:
            analytics = json.load(f)

    return render_template('oracle_player.html',
                          player_id=player_id,
                          save=save_data,
                          analytics=analytics)


# Only run debug server locally
if __name__ == '__main__':
    print("DEAD SEOUL - Local Development Server")
    print("http://127.0.0.1:5000")
    print(f"Password: {GAME_PASSWORD}")
    print(f"Oracle: /oracle (password: {ORACLE_PASSWORD})")
    app.run(host='127.0.0.1', port=5000, debug=True)
