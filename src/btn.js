 function buttons (){
    const container = document.querySelector(".cont3")    
    const addBtn = document.createElement("button");
    addBtn.textContent = "Add Task +";
    addBtn.classList.add("add")
    container.appendChild(addBtn)

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit Project Name";
    container.appendChild(editBtn)
    editBtn.classList.add("edit")

 
}

export default buttons