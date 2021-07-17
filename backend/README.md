Auth routes
login(username, password) --> uid
logout(uid) -> null
register(username, password, email) --> uid
reset(email)

Dashboard routes
generatedashboard(uid) -> json of labs {labid, name, image}
search(search_term) -> json of labs

Lab routes
selectlab(labid) -> lab json {title, prelab json, lab node json, postlab json}
Dummy prelab()
lab node {question: “What do you want to add?”, video, options : [{answer : “Water”, nodeid}, {answer}]}
Dummy post lab 

next step(answer) -> node json
back()

Account routes
Display_question() -> json of questions{stage 1: list[]...}
Assign_tags(tags[], uid) -> generate dashboard 