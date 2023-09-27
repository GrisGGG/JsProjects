//En el array boxes guardamos todos los elementos con
//que tengan la clase box
const boxes = document.querySelectorAll('.box')

//Agregamos una escucha de scroll a toda la ventana y al
//detectar scroll se ejecuta la función, checkboxes
window.addEventListener('scroll', checkBoxes)
checkBoxes()

function checkBoxes(){
    //innerheight representa la altura en pixeles
    //del viewport(área de la pantalla visible)
    //triggerpoint Punto de ruptura
    const triggerBottom = window.innerHeight/ 5 * 4

    boxes.forEach(box =>{
        //getBoundingClientRect Devuelve info sobre el tamaño de un
        //elemento y su posición relativa respecto al viewport
        //En box top se guarda la distancia que hay del inicio de la
        //ventana a la caja
        const boxTop = box.getBoundingClientRect().top

        //Ahora si el punto de quiebre es menor que la altura a la 
        //que se encuentra la caja, si es así se agrega la clase

        if(triggerBottom > boxTop){
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    })
}
