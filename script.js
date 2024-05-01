const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function Addtask(){
    if(inputBox.value === ''){
        alert("you must write spmething");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);    
        let span = document.createElement("span");
        span.innerHTML= "\u00d7";
        li.appendChild(span);
    }
    inputBox.value ='';
    savedata();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classlist.toggle("checked");
        savedata();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
}, false);

function savedata(){
    localStorage.setItem("data",listContainer.innerHTML);
}//this function is used to store the previous data so that After refresh it cant be remove 

function showtask(){
    listContainer.innerHTML = localStorage.getItem("data");
}//displays all the store data in browser
showtask();