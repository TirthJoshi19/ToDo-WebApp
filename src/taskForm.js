import cardID, { cardIDArray } from "./cardManipulation";
import { completeToggle } from "./completeToggle";
import deleteTask from "./deleteTask";
import editTask from "./editCardform";
import editSubmit from "./editSubmission";
import createEditButton from "./editbtn";
import editCardBtn from "./editbtn";
import { priorityTooltip } from "./prioritytooltip";
import { Project, ProjectManager } from "./projectArr";
import todayUpcomingBtns from "./todayUpcomingBtn";

import { toggleEnable } from "./toggleFn";
const IdArray = ''
function taskForm() {
    const container = document.querySelector(".ParentOfTask");
    createEditButton()
    console.log(IdArray)
console.log(cardIDArray)



    const form = document.createElement("form");
    container.appendChild(form)
    const task = document.createElement("input");
    task.placeholder = "Task Name";
    form.appendChild(task);
    task.name = 'task';
    task.type = 'text'

    const description = document.createElement("input");
    description.placeholder = "Description";
    form.appendChild(description);
    description.name = "description";
    description.type = 'text'

    const fieldset = document.createElement("fieldset");
    const legend = document.createElement("legend");
    legend.textContent = "Priority*";
    fieldset.appendChild(legend)
    form.appendChild(fieldset);

    const label1 = document.createElement("label")
    label1.textContent = "Low";
    fieldset.appendChild(label1);

    const ir1 = document.createElement("input");
    ir1.type = 'radio';
    ir1.name = "priority"
    ir1.id = "low";

    const label2 = document.createElement("label")
    label2.textContent = "Medium";
    fieldset.appendChild(label2);
    label1.appendChild(ir1)
    const ir2 = document.createElement("input");
    ir2.type = 'radio';
    ir2.name = "priority"
    ir2.id = "medium";
    label2.appendChild(ir2)


    const label3 = document.createElement("label")
    label3.textContent = "High";
    fieldset.appendChild(label3);

    const ir3 = document.createElement("input");
    ir3.type = 'radio';
    ir3.name = "priority"
    ir3.id = "high";
    label3.appendChild(ir3)

    const Duedate = document.createElement('input');
    Duedate.type = 'date';
    form.appendChild(Duedate);
    Duedate.name = "duedate"

    const notes = document.createElement("input");
    notes.name = 'notes';
    notes.type = 'text'
    form.appendChild(notes);
    notes.placeholder = "Notes...";

    const select = document.createElement("select");
    select.classList.add("select-project")
    const defaultOpt = document.createElement("option");
    select.appendChild(defaultOpt);
    defaultOpt.textContent = "Project Name"
    form.appendChild(select)
    select.name = 'select'

    const formSubDiv = document.createElement("div");
    form.appendChild(formSubDiv)

    const submit = document.createElement("input");
    submit.type = 'submit'
    formSubDiv.appendChild(submit);
    submit.value = "Add Task +"


    form.classList.add("task-form")

    formSubDiv.classList.add("formSubDiv")

    const projectSelect = new ProjectManager()
    projectSelect.createOption()

    const mainFormDiv = document.querySelector(".ParentOfTask");
    mainFormDiv.style.display = "none"






    function renderCardsThatExist() {
        const container = document.querySelector(".task-p");
        container.innerHTML = '';


        // Retrieve existing task cards from localStorage
        const storedTaskCards = JSON.parse(localStorage.getItem("taskCards")) || [];

        // Iterate over each existing task card and render it
        storedTaskCards.forEach(taskCard => {
            const div = document.createElement("div");
            const content = `
                <h2>${taskCard.taskName}</h2>
                <p class="description">Description: ${taskCard.description}</p>
                <p class="due-date">Due Date: ${taskCard.duedate}</p>
                <p class="notes">Notes: ${taskCard.notes}</p>
                <p class = 'project-para'>Project: ${taskCard.projectName}</p>
                `;
            div.innerHTML = content;
            div.classList.add("card");
            div.classList.add(taskCard.projectID);

            div.id = taskCard.uniqueID

            container.appendChild(div);

            deleteTask()
            completeToggle()
            createEditButton()
            editSubmit()
            priorityTooltip()
        });
        toggleEnable()

    }







    window.addEventListener('load', () => {
        renderCardsThatExist();
        todayUpcomingBtns()


    })






    class Card {
        constructor(taskName, description, dueDate, notes, projectName, priority, projectId, UID) {
            this.taskName = taskName;
            this.description = description;
            this.duedate = dueDate;
            this.notes = notes;
            this.projectID = projectId;
            this.priority = priority
            this.projectName = projectName;
            this.priority = document.querySelector('input[name="priority"]:checked').id;
            this.uniqueID = UID;

        }

    }


 function generateIDFn(){
  
    return 'card-' + Math.random().toString(36).substr(2, 9);


 }



    


    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(form);

        const task = formData.get("task");

        const desc = formData.get('description') || ""; // default value in case it's empty
        const duedate = formData.get('duedate') || ""; // default value in case it's empty
        const notes = formData.get('notes') || ""; // default value in case it's empty.... 
        const priority = document.querySelector('input[name="priority"]:checked').id || "";

        const selectedOption = select.options[select.selectedIndex];
        console.log(selectedOption)
        console.log(selectedOption.id)
       
       
       
       
         
         const uid = generateIDFn();
        

        // Instance of Card 
        const taskCard = new Card(task, desc, duedate, notes, select.value, priority, selectedOption.id, uid);

        // Existing cards 
        let existingCards = []
        try {

            existingCards = JSON.parse(localStorage.getItem("taskCards")) || [];
        } catch (error) {
            console.log("Card doesn't exist")
        }

        const cardExists = existingCards.some(existingCard => (
            existingCard.taskName === taskCard.taskName &&
            existingCard.description === taskCard.description &&
            existingCard.duedate === taskCard.duedate &&
            existingCard.notes === taskCard.notes &&
            existingCard.projectName === taskCard.projectName &&
            existingCard.priority === taskCard.priority &&
            existingCard.uniqueID === taskCard.uniqueID
        ));




        if (!cardExists) {
            existingCards.push(taskCard)
            localStorage.setItem("taskCards", JSON.stringify(existingCards))

        }

        const div = document.createElement("div");
        const container = document.querySelector('.task-p');

        const content = `
        <h2>${taskCard.taskName}</h2>
        <p>Description: ${taskCard.description}</p>
        <p>Due Date: ${taskCard.duedate}</p>
        <p>Notes: ${taskCard.notes}</p>
        <p class = 'project-para'>Project: ${taskCard.projectName}</p>
        `;


        div.innerHTML = content;



        const projectItems = document.querySelectorAll(".project-item");
        projectItems.forEach(projectItem => {
            projectItem.addEventListener("click", () => {
                if (div.classList.contains(projectItem.textContent)) {
                    div.style.display = "block"
                }
                else {
                    div.style.display = "none"
                }
            })
        })

        container.appendChild(div)
        div.classList.add("card");
        div.classList.add(selectedOption.id)
        



        
        console.log(select.value);
        deleteTask()
        completeToggle();
        editCardBtn()
        cardID()
        createEditButton()
        editSubmit()
        
        form.reset()
        
        
        
        console.log(selectedOption.id)
        toggleEnable()
        location.reload()

    })


    task.required = true;
    Duedate.required = true;


    const deleteIcon = document.createElement('button');
    deleteIcon.textContent = "x"
    form.appendChild(deleteIcon);
    deleteIcon.classList.add("delete-form")

    deleteIcon.addEventListener("click", () => {
        mainFormDiv.style.display = "none"
    }

    )
    

}


export default taskForm;
export { IdArray }