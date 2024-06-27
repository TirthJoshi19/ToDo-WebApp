import buttons from "./btn.js";
import { completeToggle } from "./completeToggle.js";
import editTask, { editTaskCard } from "./editCardform.js";
import editProjects from "./editFunction.js";
import createEditButton from "./editbtn.js";
import { Project, ProjectManager } from "./projectArr.js"; // Correct the import path
import taskForm from "./taskForm.js";
import editSubmit from "./editSubmission.js";
import { priorityTooltip } from "./prioritytooltip.js";
import todayUpcomingBtns from "./todayUpcomingBtn.js";


const projectManager = new ProjectManager();

// Function to handle form submission
function submitProjectForm() {
    const projectForm = document.getElementById("projectForm");
    projectForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const projectTitleInput = document.getElementById("projectTitle");
        const title = projectTitleInput.value.trim(); // Use 'value' to get the input value
        if (title !== '') {
            projectManager.addProjects(title);
            projectManager.renderProjects();
            projectTitleInput.value = '';
        }
    });
}

// Execute the form submission logic when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    submitProjectForm();
    
    buttons();
    taskForm()
    completeToggle();
editProjects();
editSubmit();




    const add = document.querySelector(".add");
    const div = document.querySelector(".ParentOfTask");

    const editContainer = document.querySelector(".edit-container");

    add.addEventListener("click", ()=> {
        if(div.style.display == "none"){
            div.style.display = "flex";
            editContainer.style.display = "none";
        }
        else {
            div.style.display = "none"
        }
    })
  const projects = document.querySelectorAll('.project-item');

});




