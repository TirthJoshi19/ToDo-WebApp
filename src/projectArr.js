

export class Project {
    constructor(title) {
        this.title = title;
    }
}

export class ProjectManager {
    constructor() {
        this.projects = JSON.parse(localStorage.getItem('projects')) || [];
        this.renderProjects()
    }

    addProjects(title) {
        const project = new Project(title);
        this.projects.push(project);
        this.saveToLocalStorage()
        this.renderProjects()
        this.createOption(title)
        
        
    }
    

    renderProjects() {
        const projectList = document.querySelector("#projectList");
        projectList.innerHTML = ''; // Clear existing projects to avoid showing them twice 

        this.projects.forEach((project, index)=> {
            const projectItem = document.createElement("div");
            projectItem.textContent = project.title;
            projectList.appendChild(projectItem);
            projectItem.classList.add("project-item")

            

            const deleteIcon = document.createElement("div");
            deleteIcon.textContent = "x";
            projectList.appendChild(deleteIcon);
            deleteIcon.classList.add("delete-icon")

            deleteIcon.addEventListener("click", ()=> {
                this.deleteProject(index);
                this.deleteAssociatedCards(projectItem);
                this.removeAssociatedCardsFromLocalStr(projectItem);
                this.saveToLocalStorage();
                location.reload()
              
            })

            projectItem.addEventListener('click', ()=> {
                const projectDisplay = document.querySelector('.projectDisplay');
                projectDisplay.textContent = projectItem.textContent;
                const reload = document.querySelector('#reloadBtn');
                reload.style.display = 'inline';

                reload.addEventListener('click', ()=> {
                    location.reload()
                })
                const cards = document.querySelectorAll('.card');
                cards.forEach(card=> {
                    if(card.querySelector('.project-para').textContent.includes(projectItem.textContent)){
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none'
                    }
                })
            })
         
            projectItem.setAttribute('id', `project-${index +1}`)
        })
        

    }
    createOption(){
       const selects = document.querySelectorAll(".select-project");
       selects.forEach(select=> {
        select.innerHTML = '';
        this.projects.forEach((project, index)=> {
            const opt = document.createElement("option");
            opt.textContent = project.title;
            opt.setAttribute('id', `project-${index + 1}`)
            
            select.appendChild(opt);

    
        })
       })
       
    }
 
    saveToLocalStorage(){
        localStorage.setItem('projects', JSON.stringify(this.projects))
    }
    deleteProject(index) {
        this.projects.splice(index, 1); 
        this.saveToLocalStorage(); 
        this.renderProjects(); 
        this.createOption();
      
    }

    deleteAssociatedCards(projectItem){
        const cards = document.querySelectorAll('.card');
        cards.forEach(card=> {
            if(card.classList.contains(projectItem.id)){
                card.remove();
                
            }
        })
    }
   removeAssociatedCardsFromLocalStr(projectItem){
    const taskCards = JSON.parse(localStorage.getItem('taskCards')) || [];
    const indexToRemove = taskCards.findIndex(taskcard=> taskcard.projectID === projectItem.id);

    if(indexToRemove !== -1){
        taskCards.splice(indexToRemove, 1);
        localStorage.setItem('taskCards', JSON.stringify(taskCards));
        
    }
   }
}
