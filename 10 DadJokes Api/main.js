/* In this project we´ll call and API (Application Programming Interface)
    This can be done with FETCH
    FETCH call to an URL this send a promise, because this obtains de data
    in a asynchronous way
 */

const jokeElement = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', getJoke)

getJoke()

//Using async/await

function getJoke () {
    const config = {
        Headers:{
            'Accept' : 'application/json'
        }
    }
    const res = await fetch('https://icanhazdadjoke.com/', config)
    const data = await res.json();
    jokeElement.innerHTML = data.joke
}

//Using .then()
/*
function getJoke() {
    const config =  {
        headers:{
            'Accept' : 'application/json'
        }
    }

    fetch('https://icanhazdadjoke.com/', config)
    .then(res => res.json())  //Se reciebe el objeto json 
    .then((data) => console.log( // del objeto jason se busca el elmento data
        jokeElement.innerHTML = data.joke
    ))
}
*/
