export function priorityTooltip(){

    const cards = document.querySelectorAll(".card");
    const taskCards = JSON.parse(localStorage.getItem("taskCards")) || [];
    cards.forEach(card=> {
        const cardh = card.querySelector('h2').textContent
        const cardToUpdate = taskCards.find(taskcard=> taskcard.taskName === cardh);
        

        
        const parentExists = card.querySelector(".priority-parent-before");
        if(!parentExists){
            const parent = document.createElement('div');
            parent.textContent = "Priority: " + cardToUpdate.priority;
            card.appendChild(parent);
            parent.classList.add("priority-parent-before");
          
        }

        const parent = card.querySelector(".priority-parent-before");
        card.querySelector('h2').addEventListener("mouseover", ()=> {
            parent.style.display = "block";
        })

        card.querySelector("h2").addEventListener("mouseout", ()=> {
            setTimeout(() => {
                parent.style.display = "none"
            }, 1000);
        })
    })
}