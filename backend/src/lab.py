import json

fp = "../data/labs.json"

def select_lab(labid:int)->dict:
    with open(fp) as labsJson:
        labs = json.load(labsJson)
        labsJson.close()
    for lab in labs["labs"]:
        if labid == lab["Id"]:
            return lab
    return None

def next_step(answer:str, lab:dict)->dict:
    return lab[answer]

# def previous_step()->str:

#     return labnode

# print(select_lab(1))
# print(next_step(("02"), select_lab(1)))