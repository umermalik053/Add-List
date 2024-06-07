const input = document.getElementById("input");
const btn = document.getElementById("button");


const deleteAllBtn = document.getElementById("delete-all-button");

btn.addEventListener("click", todo);

deleteAllBtn.addEventListener("click", deleteAllTodos);

function todo() {
    if (input.value.trim() === "") {
        return; // Do nothing if input is empty
    }

    let todoItem = document.createElement("div");
    todoItem.setAttribute("class", "todo-item");

    let textNode = document.createElement("span");
    textNode.setAttribute("class", "list");
    textNode.textContent = input.value;

    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.setAttribute("class", "edit-btn");
    editBtn.addEventListener("click", () => editTodo(todoItem, textNode));

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.setAttribute("class", "delete-btn");
    deleteBtn.addEventListener("click", () => deleteTodo(todoItem));

    let button_div = document.createElement("div")
    button_div.setAttribute("class", "button_div" )
    todoItem.appendChild(textNode);
    todoItem.appendChild(button_div)
     button_div.appendChild(editBtn);
    button_div.appendChild(deleteBtn);
    

    // todoItem.appendChild(editBtn);
    // todoItem.appendChild(deleteBtn);

    document.getElementById("myList").appendChild(todoItem);
    input.value = "";
}

function clickOnEnter(event) {
    if (event.key === "Enter") {
        todo();
    }
}

function editTodo(todoItem, textNode) {
    let newText = prompt("Edit your todo:", textNode.textContent);
    if (newText !== null && newText.trim() !== "") {
        textNode.textContent = newText;
    }
}

function deleteTodo(todoItem) {
    todoItem.remove();
}

function deleteAllTodos() {
   let verified = prompt("Type Password..............")
   if (verified == "Malik") {
     document.getElementById("myList").innerHTML = ""; 
    }
    else{
      alert("Sorry your Password is incorrect! ")
    }

  
}



