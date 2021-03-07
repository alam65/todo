//selectors
const todoinput = document.querySelector(".todo-input");
const todobutton = document.querySelector(".todo-button");
const todolist = document.querySelector(".todo-list");

//event listerners
todobutton.addEventListener('click',addtodo);
todolist.addEventListener('click',deletetodo);

//functions
function addtodo(event){
    event.preventDefault();

    //create a div
    const tododiv = document.createElement("div");
    tododiv.classList.add("todo");

    //create list
    const newtodo = document.createElement("li");
    newtodo.innerText = todoinput.value;
    newtodo.classList.add("todo-item");
    tododiv.appendChild(newtodo);

    //create check button
    const checkbutton = document.createElement("button");
    checkbutton.innerHTML = '<i class="fas fa-check"></i>';
    checkbutton.classList.add("check-button");
    tododiv.appendChild(checkbutton);

    //delete button
    const deletebutton = document.createElement("button");
    deletebutton.innerHTML = '<i class="fas fa-trash"></i>';
    deletebutton.classList.add("delete-button");
    tododiv.appendChild(deletebutton);

    //append the div to todolist
    todolist.appendChild(tododiv)

    //clear todo input value
    todoinput.value = "";
}

function deletetodo(e){
    const item = e.target;
    //delete button
    if(item.classList[0] === "delete-button"){
        const todo = item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitionend',function(){
            todo.remove();
        })
    }

    //check button
    if(item.classList[0] === "check-button"){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}