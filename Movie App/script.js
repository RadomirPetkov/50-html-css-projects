const API_URL =
  "http://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=595da8c244f6fc286109b005612eb3cf&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  "http://api.themoviedb.org/3/search/movie?api_key=595da8c244f6fc286109b005612eb3cf&query='";

const formElement = document.getElementById("form");
const search = document.getElementById("search");
const mainElement = document.querySelector(".main");

getMovies(API_URL);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();
  showMovies(data.results);
}

function showMovies(movies) {
  mainElement.innerHTML = "";
  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;

    const newDiv = document.createElement("div");
    newDiv.classList.add("movie");
    newDiv.innerHTML = `<img src="${IMG_PATH + poster_path}" class="movie-pic">
    <div class="movie-info">
      <h3>${title}</h3>
      <span class=${getClassByRating(vote_average)}>${vote_average}</span>
    </div>
    <div class="overview">${overview}
      </div>`;

    mainElement.appendChild(newDiv);
  });
}

function getClassByRating(rating) {
  if (rating >= 7) {
    return "green";
  } else if (rating >= 6) {
    return "orange";
  } else {
    return "red";
  }
}

formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  let searchData = search.value;

  if (searchData && searchData != "") {
    getMovies(SEARCH_API + searchData);
    searchData = "";
  }
});
