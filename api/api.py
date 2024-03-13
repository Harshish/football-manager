from flask import Flask
from flask import jsonify
from util import fetch_player_data

app = Flask(__name__, static_folder='../build', static_url_path='/')

@app.route('/api/players')
def get_all_players_data():
    data = fetch_player_data()
    if not data:
        return "No records found", 503
    return jsonify(data)

@app.route('/')
def index():
    return app.send_static_file('index.html')