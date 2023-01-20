/**
Title: To Do List
Version: 1.0
Author: Marine-Lou
Design: Marine-Lou
Last Update: 25-11-2022
*/

document.querySelector('#buttonPlus').addEventListener('mousedown', ()=>{
    plusShow();
})
document.querySelector('#buttonPlus').addEventListener('mouseup', ()=>{
    plusUnShow();
})

function addText(a) {
    let title = document.querySelector('#taskTitleIn').value;
    let text = document.querySelector('#taskDescIn').value;
    let section = document.querySelector('#taskAdded');
    console.log(title);
    if (title !== "") {
        createTask(title, text);
        if (section.classList.contains('d-none')) {
            section.classList.remove("d-none");
        }
    }
}

function createTask(title, text) {
    let divTask = document.createElement('div');
    let divTitle = document.createElement('h2');
    let divDesc = document.createElement('p');
    divTitle.innerHTML = ('+ ' + title);
    divDesc.innerHTML = text;
    divTask.appendChild(divTitle);
    divTask.appendChild(divDesc);
    document.querySelector('#newTask').appendChild(divTask);
}

function plusShow () {
    let img = document.querySelector('#plus');
    console.log(img)
    img.src='assets/img/ToDoList_plus_w.png';
}
function plusUnShow () {
    let img = document.querySelector('#plus');
    console.log(img)
    img.src='assets/img/ToDoList_plus.png';
}


