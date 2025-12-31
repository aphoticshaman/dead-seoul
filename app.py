#!/usr/bin/env python3
"""
DEAD SEOUL - Interactive Web CYOA
Production-ready Flask app for cloud hosting.
"""

from flask import Flask, render_template, request, jsonify, redirect, url_for, session
import json
import os
import secrets
from pathlib import Path
from functools import wraps

app = Flask(__name__)
app.secret_key = os.environ.get('SECRET_KEY', secrets.token_hex(32))
app.config['SESSION_COOKIE_SECURE'] = os.environ.get('PRODUCTION', False)
app.config['SESSION_COOKIE_HTTPONLY'] = True
app.config['SESSION_COOKIE_SAMESITE'] = 'Lax'

# Password from environment variable (set in Render dashboard)
GAME_PASSWORD = os.environ.get('GAME_PASSWORD', 'deadseoul')

# Game state storage
SAVE_DIR = Path(__file__).parent / "saves"
SAVE_DIR.mkdir(exist_ok=True)


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
            session.permanent = True
            return redirect(url_for('game'))
        error = "Wrong password, baby"
    return render_template('login.html', error=error)


@app.route('/logout')
def logout():
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
                         player_id=player_id)


@app.route('/api/save', methods=['POST'])
@require_auth
def save_game():
    """Save game progress."""
    player_id = session.get('player_id', 'default')
    data = request.json

    if not data or not isinstance(data, dict):
        return jsonify({'status': 'error', 'message': 'Invalid data'}), 400

    # Sanitize: only allow expected keys
    allowed_keys = {'currentSection', 'history', 'endings', 'threadsVisited'}
    sanitized = {k: v for k, v in data.items() if k in allowed_keys}

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
    return jsonify({'status': 'reset'})


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


# Only run debug server locally
if __name__ == '__main__':
    print("DEAD SEOUL - Local Development Server")
    print("http://127.0.0.1:5000")
    print(f"Password: {GAME_PASSWORD}")
    app.run(host='127.0.0.1', port=5000, debug=True)
