from flask import Flask
from flask import jsonify
from util import fetch_player_data

app = Flask(__name__)

@app.route('/api/players')
def get_all_players_data():
    data = fetch_player_data()
    if not data:
        return "No records found", 503
    return jsonify(data)