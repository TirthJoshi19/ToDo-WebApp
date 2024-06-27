import { ProjectManager } from "./projectArr";


const pManager = new ProjectManager();

function editProjects() {
    const btn = document.querySelector(".edit");
const taskcards = JSON.parse(localStorage.getItem('taskCards')) || [];



    let projectList = document.querySelectorAll(".project-item");

    const container = document.querySelector(".edit-container")
    container.style.display = "none"
    const form = document.createElement('form');


    const div = document.createElement('div');
    container.appendChild(div)
    div.appendChild(form);
    div.classList.add("child-of-edit-container")

    const head1 = document.createElement("h3");
    head1.textContent = "Rename Project";
    form.appendChild(head1);

    const subhead1 = document.createElement("p");
    form.appendChild(subhead1);
    subhead1.textContent = "Select Project"
    const selectProject = document.createElement("select");
    form.appendChild(selectProject);


    projectList.forEach(project => {
        const opt = document.createElement("option")
        opt.textContent = project.textContent
        selectProject.appendChild(opt)
        opt.setAttribute("id", project.id)


    })

    selectProject.name = "select"

    const subhead2 = document.createElement("p");
    form.appendChild(subhead2);
    subhead2.textContent = "New Name"

    const renameInput = document.createElement("input");
    renameInput.name = 'rename';
    renameInput.placeholder = "Enter New Name";
    form.appendChild(renameInput)
    renameInput.type = "text";
    renameInput.id = "rename";
    renameInput.required = true


    const divOfSub = document.createElement("div");
    div.appendChild(divOfSub)
    const submit = document.createElement("input");
    submit.name = 'submit';
    submit.type = 'submit'
    submit.textContent = 'Rename Project';
    form.appendChild(submit)
    divOfSub.appendChild(submit)
    submit.classList.add("editSubmit")

    form.appendChild(divOfSub)

    divOfSub.classList.add("rename-submit-div");
    selectProject.classList.add("rename-select");
    selectProject.classList.add('select-project')




    const deleteIcon = document.createElement('button');
    deleteIcon.textContent = "x";
    deleteIcon.classList.add("edit-delete")



    divOfSub.appendChild(deleteIcon)
    deleteIcon.addEventListener("click", () => {
        if (container.style.display == "flex") {
            container.style.display = "none";
        }
        else {
            container.style.display = "flex"
        }
    })




    btn.addEventListener("click", () => {
        if (container.style.display == "flex") {
            container.style.display = "none";
        }
        else {
            container.style.display = "flex"
        }

        deleteIcon.setAttribute("id", "renameDelete")
    })

    form.addEventListener("submit", (e)=> {
        e.preventDefault()
        console.log("Shree Ganeshay Namah");

        const data = new FormData(form);

        const selectValue = data.get("select");
        const renameValue = data.get("rename");

    const projectCollection = JSON.parse(localStorage.getItem("projects")) || [];

    const projectToRename = projectCollection.find(project=> project.title === selectValue);

    if(projectToRename){
        
        projectToRename.title = renameValue;

        localStorage.setItem("projects", JSON.stringify(projectCollection));
       

        //Updating taskCards in lS

        
        // Updating the UI
        
        const projectItems = document.querySelectorAll(".project-item");
        
        projectItems.forEach(projectItem=> {
            const textContentBefore = projectItem.textContent;
            
            if(projectItem.textContent === selectValue){
                projectItem.textContent = renameValue;
                
                
                
                const cards = document.querySelectorAll('.card');
                
                
                cards.forEach(card=> {
                    if(card.textContent.includes(textContentBefore) && card.classList.contains(projectItem.id)){
                        
                        card.querySelector('.project-para').textContent = "Project: " + renameValue
                        
                        
                        
                    }
                })
                taskcards.forEach(taskCard=> {
                    if(taskCard.projectName === selectValue){
                        taskCard.projectName = renameValue;
                        console.log("Task Card projectname updated");
                        localStorage.setItem('taskCards', JSON.stringify(taskcards))
                    }
                })
            }
            div.parentElement.style.display = 'none'
        })
    }

    form.reset();
    

    })

   }






export default editProjects;