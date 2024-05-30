const input = document.getElementById("input");
const btn = document.getElementById("button");



btn.addEventListener("click", todo)

function todo (){
    if (input.value.trim() === "") {
        return; // Do nothing if input is empty
      }
    let node1 = document.createElement("h3");
    node1.setAttribute( "class", "list");
     let node3 = document.createTextNode(input.value);
     node1.appendChild(node3);

     console.log(node1)
     document.getElementById("myList").appendChild(node1);

     input.value = ""; 
}

function clickOnEnter(event) {
    if (event.key === "Enter") {
      todo();
    }
  }