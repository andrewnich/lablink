import json

fp = "../data/labs.json"

"""
Returns lab dict with matching lab_id
"""
def select_lab(lab_id:int)->dict:
    with open(fp) as labsJson:
        labs = json.load(labsJson)
        labsJson.close()
    for lab in labs["labs"]:
        if lab_id == lab["id"]:
            return lab
    return None

"""
Returns lab node from an answer and full lab
"""
def next_step(answer:str, lab:dict)->dict:
    return lab[answer]

# def previous_step()->str:

#     return labnode

# print(select_lab(1))
# print(next_step(("02"), select_lab(1)))