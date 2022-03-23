const progress = document.getElementById('progress');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const circles = document.querySelectorAll('.circle');

var currentStep = 1;
next.addEventListener('click', ()=>{
    currentStep++;

    if (currentStep > circles.length) {
        currentStep = circles.length;
    }
   update();
});

prev.addEventListener('click', ()=>{
    currentStep--;

    if (currentStep < 1) {
        currentStep = 1;
    }
    update();
});

function update(){
    circles.forEach((circle, indx)=>{
        if (indx < currentStep) {
            circle.classList.add('active');
        }else{
            circle.classList.remove('active');
        }
    });
    var actives = document.querySelectorAll('.active');


    progress.style.width= (((actives.length -1) / (circles.length -1)*100) )+ "%";

    if (currentStep ===1) {
        prev.disabled = true;
    }else if (currentStep === circles.length) {
        next.disabled = true;        
    }else{
        prev.disabled = false;
        next.disabled = false;
    }
}

