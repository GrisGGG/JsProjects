const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;
let filterBlur = 30
let int = setInterval(blurring, 30) // Durante 30 milisegundos se ejecuta una función o pedazo de código

function blurring(){
    load++

    if (load > 99){
        clearInterval(int)
    }

    loadText.innerHTML= load + '%';
    
    loadText.style.opacity = (100 - load) / 100;
    filterBlur -= 0.3; // No sé como pero este 3 tiene que ver con el tiempo en aclararse en set interval
    bg.style.filter = `blur(${filterBlur}px)`;
}
