const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask() {
    if (inputBox.value === '') {
        alert("You must add something");
    }

    else {
        // creating li values after adding them
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        // position of li 
        listContainer.appendChild(li);

        // creating  arrow
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    // this is to make input value blank after givinginput
    inputBox.value = '';
    saveData();
    
}

listContainer.addEventListener("click", function(a){
    if(a.target.tagName==="LI"){
        a.target.classList.toggle("checked");
        saveData();

    }
    else if(a.target.tagName==="SPAN"){
        a.target.parentElement.remove();
        saveData();

    }
}, false);

// to save data of your input if browser is refreshed
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

// to show saved data 
function showData(){
    listContainer.innerHTML=localStorage.getItem("data");
}

//function call
showData();