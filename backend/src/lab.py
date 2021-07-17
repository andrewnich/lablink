import json

fp = "../data/labs.json"

def select_lab(labid:int)->str:
    with open(fp) as labsJson:
        labs = json.load(labsJson)
        labsJson.close()
    for lab in labs["labs"]:
        if labid == lab["Id"]:
            return lab
    return None

def next_step(answer:str)->str:

    return labnode

def previous_step()->str:

    return labnode

print(select_lab(1))