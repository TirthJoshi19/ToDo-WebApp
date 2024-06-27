
import editTask from "./editCardform";




function createEditButton() {
    editTask()
    const cards = document.querySelectorAll(".card");
    







    cards.forEach(card => {
        const editBtnFound = card.querySelector(".edit-card");

        if (!editBtnFound) {

            const edit = document.createElement("button");
            edit.textContent = "Edit";
            edit.classList.add("edit-card");
            card.appendChild(edit);

        }
    })




}

export default createEditButton;
