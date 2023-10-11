const smallCups = document.querySelectorAll('.cup-small');
const listers = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

smallCups.forEach((cup, idx)=>{
    cup.addEventListener('click', ()=> highlightCups(idx));
});

function highlightCups(idx){
   smallCups.forEach((cup, idx2)=>{
    if(idx2 <= idx){
        console.log(idx2);
        cup.classList.add('full')
    }else{
        cup.classList.remove('full')
    }
   })
}