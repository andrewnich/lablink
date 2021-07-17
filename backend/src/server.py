'''
LabLink Backend Server Implementation
Andrew Nicholson
Uses Flask to implement server routes for auth, dashboard,
lab and profile.
'''
from json import dumps
from flask import Flask, request
from flask_cors import CORS

import auth
import dashboard
import lab
import profile

APP = Flask(__name__)
CORS(APP)

''' 
==================== AUTH ROUTES ==================== 
'''

@APP.route("/auth/login", methods=['POST'])
def server_login():
    data = request.get_json()
    #response = auth.login(data['email'], data['password'])
    response = "FAKEUID"
    return dumps(response)

@APP.route("/auth/logout", methods=['POST'])
def server_logout():
    data = request.get_json()
    #response = auth.logout(data['uid'])
    response = True
    return dumps(response)

@APP.route("/auth/register", methods=['POST'])
def server_register():
    data = request.get_json()
    #response = auth.register(data['email'], data['password'])
    response = "FAKEUID"
    return dumps(response)

@APP.route("/auth/reset", methods=['POST'])
def server_reset():
    data = request.get_json()
    response = True
    return dumps(response)

if __name__ == "__main__":
    APP.run(port=8080)