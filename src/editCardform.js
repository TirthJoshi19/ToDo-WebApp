function editTask() {
    const formFound = document.querySelector(".task-editor");
    let i = 0;
    if(!formFound){
    
    const container = document.querySelector(".taskDiv");
    container.style.display = 'none'

const form = document.createElement("form");
container.appendChild(form);


const head = document.createElement("h3");
head.textContent = "Edit Task";
form.appendChild(head)
const task = document.createElement("input");
form.appendChild(task)
task.type = "text";
task.placeholder = "Task Name";
form.classList.add("task-editor")



const description = document.createElement("input");
description.type = "text";
description.placeholder = "Description";
form.appendChild(description);

const prioritySet = document.createElement("select");
const defaultOpt = document.createElement("option");
prioritySet.appendChild(defaultOpt);
form.appendChild(prioritySet);

defaultOpt.textContent = "Not Set";

const low = document.createElement('option');
low.textContent = "low";
prioritySet.appendChild(low);

const med = document.createElement("option");
med.textContent = "medium";
prioritySet.appendChild(med);

const high = document.createElement("option");
high.textContent = "high";
prioritySet.appendChild(high)


const date = document.createElement("input");
date.type = "date";
 date.value = 


form.appendChild(date);

const note = document.createElement("input");
note.type = "text";
note.placeholder = "Notes...";
form.appendChild(note)

const submitInp = document.createElement('input');
submitInp.value = "Save Changes";
form.appendChild(submitInp);
submitInp.type = 'submit';

task.name = "task";
description.name = 'description';
prioritySet.name = 'priority';
date.name = 'date';
note.name = 'notes'




task.classList.add("editTask");
description.classList.add("editDesc")
 date.classList.add("editDate");
 prioritySet.classList.add('editPriority');
 note.classList.add("editNote")

 const deleteButton = document.createElement("button");
 deleteButton.textContent = "x";
 deleteButton.classList.add('clearBtn-for-edit-task')
container.appendChild(deleteButton);
deleteButton.addEventListener("click", ()=> {
    container.style.display = 'none';
    
})
}
   
 
}



export default editTask;