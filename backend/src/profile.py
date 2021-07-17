import os
import json

def assign_tags(uid:str, tags:list)->bool:

    d = os.getcwd()
    d = os.path.dirname(d)
    d = os.path.dirname(d)
    d = os.path.join(str(d),'hack/lablink/backend/data/','users.json')
    f = open(d,)
    data = json.load(f)
    f.close()

    tags_assigned = False

    if uid in data["uid"]:
        if len(data["uid"][uid]) == 2:
            data["uid"][uid].append(tags)
        else:
            for i in range(0,len(tags)):
                data["uid"][uid][2][i] = tags[i]

        with open(d,'w') as f:
            json.dump(data,f)
        
        tags_assigned = True

    return tags_assigned