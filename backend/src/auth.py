import json
import os
import os.path
import shutil
import hashlib, uuid

fp = "../data/users.json"

def hash_p(password:str)->str:
    pw2 = password.encode("utf-8")
    hashed_password = hashlib.sha512(pw2).hexdigest()
    return hashed_password


def login(email:str, password:str)->str:

    f = open(fp)
    data = json.load(f)
    f.close()

    hash_to_check = hash_p(password)

    uid = "-1"
    for i in range(0,len(data["uid"].keys())):
        if data["uid"][str(i)][0] == email:
            if data["uid"][str(i)][1] == hash_to_check:
                uid = i
                break
    
    
    print("Done")
    print(uid)
    return uid  


#def logout(uid:str) ->bool:
#    return logged_out


def register(email:str, password:str)->str:
    
    f = open(fp)
    data = json.load(f)
    f.close()
    
    #with open(d) as f:
    #    data = json.load(f)

    email_exists = False

    for i in range(0,len(data["uid"].keys())):
        print(data["uid"][str(i)][0])
        if data["uid"][str(i)][0] == email:
            #Email already in Database
            email_exists = True
            uid = -1
            break
    

    if email_exists == False:
        uid = len(data["uid"])
        data["uid"][str(uid)] = []
        data["uid"][str(uid)].append(email)
        data["uid"][str(uid)].append(hash_p(password))

        with open(fp,'w') as f:
            json.dump(data,f)

    return uid


#def reset(email:str)->bool:
#    return password_reset