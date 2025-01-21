let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");

    let tarefas = JSON.parse(localStorage.getItem("@listTask")) || [];


function renderTask () {
    listElement.innerHTML = "";

    tarefas.map((todo) => {
        let liElement = document.createElement("li");
        let taskText = document.createTextNode(todo);

        let linkElement = document.createElement("a");
        linkElement.setAttribute("href", "#")

        let linkText = document.createTextNode("delete")
        linkElement.appendChild(linkText)

        let position = tarefas.indexOf(todo)

        linkElement.setAttribute("onclick", `deleteTask(${position})`)

        liElement.appendChild(taskText);
        liElement.appendChild(linkElement)
        listElement.appendChild(liElement);


    })


}

renderTask()

function addTask() {
    if(inputElement.value === "") {
        alert("Digite alguma Tarefa")
        return false;
    } else {
        
        console.log(inputElement.value)
        let newTask = inputElement.value;

        tarefas.push(newTask);
    
        renderTask()
        saveListTask()

        inputElement.value = "";
    }
}

buttonElement.onclick = addTask;

function deleteTask (position) {
    tarefas.splice(position, 1)
    renderTask()
    saveListTask()

}

function saveListTask () {
    localStorage.setItem("@listTask", JSON.stringify(tarefas))
}