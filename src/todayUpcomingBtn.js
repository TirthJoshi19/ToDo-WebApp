export default function todayUpcomingBtns(){
    const todayBtn = document.querySelector('#today');
    const upcomingBtn = document.querySelector("#upcoming");

    const date = new Date();
    
    const today = date.toJSON().slice(0, 10)
   
    const projectDisplayDiv = document.querySelector('.projectDisplay');
    const reloadBtn = document.querySelector('#reloadBtn');


    todayBtn.addEventListener('click', ()=> {
        projectDisplayDiv.innerHTML= 'Today';
        reloadBtn.style.display = 'inline'
        console.log(today)
        const cards = document.querySelectorAll('.card');
        console.log('today clicked')
        cards.forEach(card=> {
            
            if(card.textContent.includes(today)){
              card.style.display = 'block'
            } else {
                card.style.display = 'none'
            }
        })
    })      
    
    upcomingBtn.addEventListener('click', ()=> {
        projectDisplayDiv.textContent = "Upcoming";
reloadBtn.style.display = 'inline'
    const cards = document.querySelectorAll('.card');
        cards.forEach(card=> {
            const carddate = card.textContent.match(/\d{4}-\d{2}-\d{2}/);
            console.log(carddate);
            
            if(carddate && carddate[0]> today){
                card.style.display = 'block';
            } else {
                card.style.display = 'none'
            }
            reloadBtn.style.display = 'inline'
        })
    })
    
    reloadBtn.addEventListener('click', ()=> {
        console.log('btn clicked');
        location.reload();

        
    })
    
}