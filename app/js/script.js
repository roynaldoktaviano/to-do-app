const body = document.querySelector('body');
const input = document.querySelector('#todo');
const label = document.querySelector('.label label');
const icon = document.querySelector('.icon-img');
const listItem = document.querySelector('.lists');

// Dark Mode
icon.addEventListener('click',function(){
    body.classList.toggle('dark-mode');
    if(body.classList.contains('dark-mode')){
        icon.src = "./images/icon-sun.svg"
    } else {
        icon.src = "./images/icon-moon.svg"
    }
})

// Input Text
if(!input.value) {
    input.addEventListener("focus",function(){
        label.classList.add('none');
    })
    
    input.addEventListener("blur",function(){
        label.classList.remove('none');
    })
}

// Input To Do
const list = [];
input.addEventListener("keyup",function(elem){
    if(elem.key == "Enter" || elem.keyCode == 13) {
        list.push(elem.target.value)
        newList(elem.target.value);
        elem.target.value = "";
    }
})


// function list
function newList(value) {
    const list = document.createElement("div");
    const listText = document.createElement("p");
    const listCheck = document.createElement("input");
    const listLabel = document.createElement("label");
    const listDelete = document.createElement("span")

    listText.textContent = value;
    listCheck.type = "checkbox";
    listCheck.name ="checkbox";
    listLabel.htmlFor = "checkbox";

    listCheck.addEventListener("click",function(elem){
        if(elem.checked){
            elem.checked = false;
            listText.style.textDecoration = "none";
            listCheck.classList.remove("active");
        } else {
            elem.checked = true;
            listText.style.textDecoration = "line-through";
            listCheck.classList.add("active");
        }
    })

    listDelete.textContent = "X";
    listDelete.addEventListener("click", function(elem){
        elem.target.parentElement.remove()
    })

    list.classList.add("list");
    listCheck.classList.add("circle");
    listDelete.classList.add("delete");

    list.appendChild(listCheck);
    list.appendChild(listLabel);
    list.appendChild(listText);
    list.appendChild(listDelete);

    listItem.appendChild(list);
}