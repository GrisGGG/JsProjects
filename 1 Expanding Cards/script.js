//Select all the elements which  have the "panel" class
var panels = document.querySelectorAll(".panel");

/*Each element will have a listener which will activate the 
removeActivateClass function and will add the active class 
to the element which have been selected
*/
panels.forEach( (panel) =>{
    panel.addEventListener('click', ()=>{
        removeActiveClass();
        panel.classList.add('active');
    })
});

function removeActiveClass (){
    panels.forEach((panel) =>{
        panel.classList.remove('active');
    })
};