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
                uid = i
                break
    
    f.close()
    return uid  


def logout(uid:str) ->bool:

    return logged_out


def register(email:str, password:str)->str:
    d = os.getcwd()
    d = os.path.join(d,'/src/data.json')
    f = open(d,)
    data = json.load(f)
    f.close()

    email_exists = False

    for i in range(0,len(data)):
        if data[i][0] == email:
            #Email already in Database
            email_exists = True
            uid = i
            break
    
    if email_exists == False:
        uid = len(data)+1
        data[uid] = []
        data[uid][0]=email
        data[uid][1]=hash_p(password)

        uid = len(data)

        f = open(d,'w')
        f.write(data)
        f.close()


    return uid


def reset(email:str)->bool:

    return password_reset