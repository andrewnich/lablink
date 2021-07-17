import json
import os
import os.path
import shutil
import hashlib, uuid

def hash_p(password:str)->str:
    salt = uuid.uuid4().hex
    hashed_password = hashlib.sha512(password + salt).hexdigest()
    return hashed_password


def login(email:str, password:str)->str:

    d = os.getcwd()
    d = os.path.join(d,'/src/data.json')

    f = open(d,)

    data = json.load(f)
    
    hash_to_check = hash_p(password)

    uid = "0"
    for i in range(0,len(data)):
        if data[i][0] == email:
            if data[i][1] == hash_to_check:
                uid = data[i][2]
                break
    
    return uid  


def logout(uid:str) ->bool:

    return logged_out


def register(email:str, password:str)->str:

    return uid


def reset(email:str)->bool:

    return password_reset