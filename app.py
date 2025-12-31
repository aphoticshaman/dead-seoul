#!/usr/bin/env python3
"""
DEAD SEOUL - Interactive Web CYOA
Host on laptop, GF plays on iPhone Safari with progress saving.
"""

from flask import Flask, render_template, request, jsonify, redirect, url_for, session
from flask_cors import CORS
import json
import os
import hashlib
from pathlib import Path
from functools import wraps

app = Flask(__name__)
app.secret_key = os.environ.get('SECRET_KEY', 'dev-secret-key-change-me')
CORS(app)

# Simple password auth - change this
GAME_PASSWORD = "deadseoul"  # Your GF enters this to play

# Game state storage
SAVE_DIR = Path(__file__).parent / "saves"
SAVE_DIR.mkdir(exist_ok=True)

# Media directories
MEDIA_DIR = Path(__file__).parent / "static" / "media"
MEDIA_DIR.mkdir(parents=True, exist_ok=True)


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
        if password == GAME_PASSWORD:
            session['authenticated'] = True
            session['player_id'] = hashlib.md5(
                request.remote_addr.encode()
            ).hexdigest()[:8]
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

    save_path = SAVE_DIR / f"{player_id}.json"
    with open(save_path, 'w') as f:
        json.dump(data, f)

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
        with open(save_path) as f:
            return json.load(f)
    return {'currentSection': 1, 'history': [], 'endings': []}


if __name__ == '__main__':
    print("""
================================================================================
  DEAD SEOUL - Interactive CYOA
  Open on your phone: http://<YOUR-IP>:5000
================================================================================
    """)

    # Get local IP for easy sharing
    import socket
    hostname = socket.gethostname()
    local_ip = socket.gethostbyname(hostname)
    print(f"  Local URL: http://127.0.0.1:5000")
    print(f"  Network URL: http://{local_ip}:5000")
    print(f"  Password: {GAME_PASSWORD}")
    print()

    app.run(host='0.0.0.0', port=5000, debug=True)
