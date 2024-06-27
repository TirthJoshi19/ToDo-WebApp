import cardID from "./cardManipulation";
function editSubmit() {
    cardID()
    let currentCardId;


    const taskCards = JSON.parse(localStorage.getItem("taskCards")) || [];




    const formCont = document.querySelector(".taskDiv");
    const form = document.querySelector(".task-editor");


    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const editbtn = card.querySelector('.edit-card');
        editbtn.addEventListener('click', () => {

            if (formCont.style.display == "none") {
                formCont.style.display = 'flex'
            }

            currentCardId = editbtn.parentElement.id;


            const editInput = document.querySelector(".editTask");
            const editDescInput = document.querySelector(".editDesc");
            const editPriorityInput = document.querySelector(".editPriority");
            const editDateInput = document.querySelector("editDate");
            const editNoteInp = document.querySelector(".editNote")


            editInput.value = card.querySelector("h2").textContent;
            editDescInput.value = card.querySelector(".description").textContent.split(":")[1].trim();

            editNoteInp.value = card.querySelector(".notes").textContent.split(":")[1].trim();

            const priorityText = card.querySelector(".priority-parent-before").textContent;
            const priorityStatus = priorityText.split(":")[1].trim().toLowerCase();

            const priorityOptions = editPriorityInput.querySelectorAll('option');
            priorityOptions.forEach(opt => {
                if (opt.textContent === priorityStatus) {
                    opt.selected = true
                }

            })

            const cardDate = card.querySelector(".due-date").textContent.split(":")[1].trim();
            if (cardDate) {
                document.querySelector(".editDate").value = cardDate
            }

        })
    })

    form.addEventListener("submit", (e) => {

        e.preventDefault();
        let a
        const editData = new FormData(form);

        const task = editData.get("task")
        const description = editData.get("description");
        const priority = editData.get('priority');
        const date = editData.get('date');
        const notes = editData.get("notes");
        const prioritySelectData = editData.get("priority")



        const cardToEdit = document.getElementById(currentCardId);
        console.log(currentCardId);
        const cardHeadBefore = cardToEdit.querySelector('h2');




        let descBefore = cardToEdit.querySelector(".description");
        descBefore.textContent = "Description: " + 'foo';


        let notesBefore = cardToEdit.querySelector(".notes");
        notesBefore.textContent = "Notes: " + notes;

        const projectBefore = cardToEdit.querySelector('.project-para').textContent.split(":")[1].trim()



        const cardToUpdateInLocalStorage = taskCards.find(taskCard => taskCard.uniqueID === cardToEdit.id);
if(cardToUpdateInLocalStorage){
    console.log('yes there is a card to update in localstorage');
    console.log(cardToUpdateInLocalStorage.taskID)
}
        if (cardToUpdateInLocalStorage) {



            cardToUpdateInLocalStorage.taskName = task;
            cardToUpdateInLocalStorage.description = description;
            cardToUpdateInLocalStorage.duedate = date;
            cardToUpdateInLocalStorage.notes = notes;
            cardToUpdateInLocalStorage.priority = prioritySelectData;
            


        }

        else {
            console.error('Card not found in local storage');

        }
        localStorage.setItem("taskCards", JSON.stringify(taskCards))

      location.reload()
        



    })
}

export default editSubmit;
