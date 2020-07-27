function newtodo() {
    //create elements
    let ul = document.getElementById("todolistitems");
    let li = document.createElement("li");
    let para = document.createElement("p");

    //creating element for adding new things in the list
    let listtodo = document.getElementById("addingintodo").value;
    let newtodo = document.createTextNode(listtodo);

    //creating element to remove items from the list
    let removetodo = document.createElement("button");
    removetodo.setAttribute("onclick", "deletelist()");
    removetodo.setAttribute("class", "removebutton");

    // inner html to set the name of delete button
    removetodo.innerHTML = "Delete";
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("id", "mychkbox");
    checkbox.setAttribute("onclick", "myFunction()");

    para.setAttribute("id", "newlist");
    para.innerHTML = listtodo;

    // appending things
    li.appendChild(checkbox);
    li.appendChild(para);
    li.appendChild(removetodo);
    document.getElementById("todolistitems").appendChild(li);
    document.getElementById("addingintodo").value = "";

    // adding sound on the click of checkbox
    var audio = new Audio("http://reboot-me.com/ouch.mp3");
    checkbox = document.getElementById('mychkbox'),
        myFunction = function() {
            if (checkbox.checked) {
                audio.play();
            }


        };
}

//delete functionality using for loop
function deletelist() {
    let delwork = document.getElementsByClassName("removebutton");
    for (i = 0; i < (delwork.length); i++) {
        delwork[i].onclick = function() {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}
// adding text decoration using  for loop & line-through property
function myFunction() {

    let checkBox = document.getElementById("mychkbox");
    let listItem = document.getElementById("newlist");
    for (j = 0; j < checkBox.length && j < listItem.length; j++) {
        if (checkBox[j].checked) {
            listItem[j].style.textDecoration = "line-through";
        } else {
            listItem[j].style.textDecoration = "none";
        }
    }
}