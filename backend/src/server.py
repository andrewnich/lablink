# Flask server implementation
from flask import Flask, request
from flask_cors import CORS

APP = Flask(__name__)
CORS(APP)

if __name__ == "__main__":
    APP.run(port=8080)