import json

fp = "../data/labs.json"

"""
Generates first page of dashboard
"""
def generated_dashboard(uid:str)->list:
    #TODO Limit the length of the list
    
    with open(fp) as labsJson:
        labs = json.load(labsJson)
        labsJson.close()
    lab_list = []
    for lab in labs["labs"]:
        lab_list.append({"Name": lab["Name"], "Video": lab["Start"]["Video"]})
    return lab_list

"""
Generates first page of search results
"""
def search(search_term:str)->list:
    #TODO Work out how to do a proper search algorithm
    with open(fp) as labsJson:
        labs = json.load(labsJson)
        labsJson.close()
    lab_list = []
    for lab in labs["labs"]:
        if search_term in lab["Name"]:
            lab_list.append({"Name": lab["Name"], "Video": lab["Start"]["Video"]})
    
    return lab_list

# print(generated_dashboard("lmao"))
# print(search("no"))