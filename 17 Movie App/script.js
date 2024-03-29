const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c572d58b3d3198d619b592b7f40321cf&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_URL = 'https://api.themoviedb.org/3/discover/movie?api_key=c572d58b3d3198d619b592b7f40321cf&page=1';

const main = document.getElementById('main')
const form = document.getElementById('form');
const search = document.getElementById('search')

//GET INITIAL MOVIES
getMovies(API_URL)

    async function getMovies(url){
        const res = await fetch(url);
        const data = await res.json();

        showMovies(data.results);
    }

    function showMovies(movies){
        main.innerHTML = ''
        movies.forEach((movie)=>{
            const {title, poster_path, vote_average, overview} = movie;
            
            const movieEl = document.createElement('div');
            movieEl.classList.add('movie')

            movieEl.innerHTML= `
            <img
          src="${IMG_PATH + poster_path}"
          alt="${title}"
        />
        <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getCLassByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
          <h3>Overview</h3>
          ${overview}
        </div>
            `
            main.appendChild(movieEl)
        })
    }

form.addEventListener('submit', (e)=>{
    e.preventDefault()

    const searchTerm = search.value;

    if(searchTerm && searchTerm !== ''){
        getMovies(SEARCH_URL + searchTerm)
        search.value = ''
    }else{
        window.location.reload()
    }
})

function getCLassByRate(vote){
    if(vote >= 8){
        return 'green'
    }else if(vote >= 5){
        return 'orange'
    }else{
        return 'red'
    }
}