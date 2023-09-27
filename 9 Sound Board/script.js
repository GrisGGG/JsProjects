const sounds = [ 'applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach(sound =>{
    const btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerText = sound
    
    btn.addEventListener('click', () => {
        stopSongs()
        document.getElementById(sound).play()
    })

/* Si el hijo(Child) es una referencia(hace referencia) hacia un nodo existente en el documento actual, 
este es quitado del padre actual para ser puesto en el nodo padre nuevo. 
La clave está en si el (Child) es una referencia a un nodo existente en el documento. */
    document.getElementById('buttons').appendChild(btn)
})
function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)
        song.pause()
        song.currrentTime = 0;
    })
    
}