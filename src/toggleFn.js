export function toggleEnable(){
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index)=> {
        const btn = card.querySelector(".task-status-btn");
        btn.addEventListener('click', ()=> {
            if(btn.classList.contains('incomplete')){
                btn.classList.remove('incomplete');
                btn.classList.add('complete');
                btn.textContent = "Completed"
            } else {
                btn.classList.remove('complete');
                btn.classList.add('incomplete');
                btn.textContent = 'Incomplete'
            }
            btn.setAttribute('id', `statusBtn-${index + 1}`)
            const btnsInLS = JSON.parse(localStorage.getItem('btns')) || [];
            btnsInLS[index] = btn.textContent;
            localStorage.setItem('btns', JSON.stringify(btnsInLS))
        })

        const btnsInLocalStorage = JSON.parse(localStorage.getItem('btns')) || [];
        if(btnsInLocalStorage[index]){
            btn.textContent = btnsInLocalStorage[index];

            if (btnsInLocalStorage[index] === 'Completed') {
                btn.classList.remove('incomplete');
                btn.classList.add('complete');
            } else {
                btn.classList.remove('complete');
                btn.classList.add('incomplete');
            }
        }
    })
 
    
}