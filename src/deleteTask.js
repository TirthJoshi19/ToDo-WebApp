import { cardIDArray } from "./cardManipulation";
import { IdArray } from "./taskForm";

function deleteTask(IdArray) {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        const deleteBtn = card.querySelector(".delete-btn");
        if (!deleteBtn) {
            const newDeleteBtn = document.createElement("button");
            newDeleteBtn.textContent = 'Delete Task';
            newDeleteBtn.className = 'delete-btn';
            card.appendChild(newDeleteBtn)


            newDeleteBtn.addEventListener("click", () => {
                card.remove()
                removeFromLocalStorage(card)
            })

        }
    })

}
function removeFromLocalStorage(card) {

    const taskCards = JSON.parse(localStorage.getItem("taskCards")) || [];
    const taskIds = JSON.parse(localStorage.getItem('taskIDArray')) || [];


    const taskName = card.querySelector("h2").textContent;
    const taskID = card.id;

    const indexToRemove = taskCards.findIndex(taskCard => taskCard.taskID = taskID);
    const indexOfId = taskIds.findIndex(id => id === taskID);

    if (indexToRemove !== -1) {
        taskCards.splice(indexToRemove, 1);
        localStorage.setItem("taskCards", JSON.stringify(taskCards))
    } 
   

}
export default deleteTask;