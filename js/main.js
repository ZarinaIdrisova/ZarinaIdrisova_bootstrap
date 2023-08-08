/** call the relevant elements to be able to work with them in JS */
const inputField = document.getElementById("inputField");
const addButton = document.getElementById("addButton");
const listAnchor = document.getElementById("listOfToDos");

/** Store Definition */
const listOfToDos = [] //stores all to-dos
console.log("list of todos", listOfToDos)
let newToDo = "" //stores the new input value


/** create functions for input and buttons */
const handleNewToDo = (event)=>{
    console.log(event.target.value)
    newToDo = event.target.value;
}
console.log("list of todos", listOfToDos)

/** Button function  */
const addNewToDo = ()=>{
    /** adding a new item to array */
    listAnchor.innerHTML = ""
    listOfToDos.push(newToDo);

    /** read all items from the array */
    listOfToDos.map((toDo)=>{

        const li = document.createElement("li");
        li.innerText = toDo

        listAnchor.append(li)
        inputField.value = ""
    })
}
console.log("list of todos", listOfToDos)


inputField.addEventListener("change", handleNewToDo)
addButton.addEventListener("click",addNewToDo)

