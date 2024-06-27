export function completeToggle() {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
        let taskStatusBtn = card.querySelector(".task-status-btn");
        if (!taskStatusBtn) {
            taskStatusBtn = document.createElement("button");
            taskStatusBtn.textContent = "Incomplete";
            taskStatusBtn.classList.add("task-status-btn");
            taskStatusBtn.classList.add('incomplete');
            card.appendChild(taskStatusBtn);
        }
        
    });
}