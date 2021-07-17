import json

fp = "../data/labs.json"

"""
Returns lab dictionary of lab where id == lab_id
"""
def select_lab(lab_id:int)->dict:
    with open(fp) as labsJson:
        labs = json.load(labsJson)
        labsJson.close()
    for lab in labs["labs"]:
        if lab_id == lab["Id"]:
            return lab
    return None

"""
Gets the next step
"""
def next_step(answer:str, lab:dict)->dict:
    return lab[answer]

# def previous_step()->str:

#     return labnode

# print(select_lab(1))
# print(next_step(("02"), select_lab(1)))