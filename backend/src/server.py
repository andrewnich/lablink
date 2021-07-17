'''
LabLink Backend Server Implementation
Andrew Nicholson
Uses Flask to implement server routes for auth, dashboard,
lab and profile.
'''
from json import dumps
from flask import Flask, request, jsonify
from flask_cors import CORS

import auth
import dashboard
import lab
import profile

APP = Flask(__name__)
CORS(APP)

'''
==================== ERROR HANDLING ====================
'''
class APIError(Exception):
    '''API Error class'''
    pass

class APIAuthError(APIError):
    '''Auth Error Exception'''
    code = 403
    description = "Authentication Error"

@APP.errorhandler(APIError)
def handle_exception(err):
    '''Handler for API errors'''
    message = ""
    if len(err.args) > 0:
        message = err.args[0]
    response = {
        "error" : err.description,
        "message" : message,
        "status" : err.code
    }
    return jsonify(response), err.code

@APP.errorhandler(500)
def handle_exception(err):
    '''Handler for unknown server errors'''
    response = {
        "error" : "Internal Server Error",
        "message" : "It appears something went wrong :( If you continue to experience this issue please contact support.",
        "status": 500
    }
    return jsonify(response), 500

''' 
==================== AUTH ROUTES ==================== 
'''

@APP.route("/auth/login", methods=['POST'])
def server_login():
    '''Login request handler'''
    data = request.get_json()
    uid = auth.login(data['email'], data['password'])
    if uid != "-1":
        response = {
            "uid": uid,
            "status": 200
        }
        return jsonify(response), 200

    else:
        raise APIAuthError('Incorrect login!')

#@APP.route("/auth/logout", methods=['POST'])
#def server_logout():
    #data = request.get_json()
    #response = auth.logout(data['uid'])
    #return jsonify(response), 200

@APP.route("/auth/register", methods=['POST'])
def server_register():
    data = request.get_json()
    uid = auth.register(data['email'], data['password'])
    if uid != "-1":
        response = {
            "uid": uid,
            "status": 200
        }
        return jsonify(response), 200

    else:
        raise APIAuthError('Incorrect login!')

#@APP.route("/auth/reset", methods=['POST'])
#def server_reset():
#    data = request.get_json()
#    response = True
#    return dumps(response)

''' 
==================== DASHBOARD ROUTES ==================== 
'''
@APP.route("/dashboard/generatedashboard", methods=['GET'])
def server_generatedashboard():
    uid = request.args.get('uid')
    lab_list = dashboard.generated_dashboard(uid)
    response = {
        "labs": lab_list,
        "status": 200
    }
    return jsonify(response), 200


@APP.route("/dashboard/search", methods=['GET'])
def server_search():
    search_term = request.args.get('search_term')
    lab_list = dashboard.search(search_term)
    response = {
        "labs": lab_list,
        "status": 200
    }
    return jsonify(response), 200

''' 
==================== LAB ROUTES ==================== 
'''
@APP.route("/lab/selectlab", methods=['GET'])
def server_selectlab():
    lab_id = request.args.get('lab_id')
    lab = lab.select_lab(lab_id)
    response = {
        "lab": lab,
        "status": 200
    }
    return jsonify(response), 200

@APP.route("/lab/next_step", methods=['GET'])
#def server_nextstep():

#@APP.route("/lab/previous_step", methods=['GET'])

''' 
==================== PROFILE ROUTES ==================== 
'''
#@APP.route("profile/assign_tags", methods=['POST'])

if __name__ == "__main__":
    APP.run(debug=True, port=8080)