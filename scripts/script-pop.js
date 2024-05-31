// HTML elem
const moviesContainerPop = document.getElementById("movies-container-popular");

const options = {
  method: "GET", // get, post, delete, put...
  headers: {
    accept: "application/json",

    Authorization:
      // Bearer "Access Token Auth" that you got
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MjRlMWI5MDlhMGQxMjRjNmRkODg0OTRhMWQ5OWQzYyIsInN1YiI6IjY2NTlmOTY3ZGM2NTk2Yzk4ODYwYTM5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3WhGyTIulHGoIUeqPzRtpd6A75Wki1g_t70lp7BCbtg",
  },
};

fetch(
  // page that you want to get
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
  options
)
  .then((response) => response.json())
  .then((response) => {
    // logic after get data from DB
    let moviedata = response["results"];
    console.log(moviedata);
    let tempHtml = ``;
    moviedata.forEach((movie) => {
      // get data from array
      let imgUrl = "https://image.tmdb.org/t/p/w500" + movie["backdrop_path"];
      let movieTitle = movie["title"];
      let overview = movie["overview"];
      let vote = movie["vote_average"];
      let id = movie["id"];
      let popularity = movie["popularity"];
      // you can add more data

      // "tempHtml" will be created inside of moviesContainerPop.innerHTML
      tempHtml += `
        <div>  
        
            <a href='movie_detail.html?id=${id}'>

                <img src='${imgUrl}' alt="">
            
                <div>
                    <h3>${movieTitle}</h3>
                    <p>${overview}</p>
                    <p>⭐ ${vote}</p>
                    <p>Popularity: ${popularity}</p>
                </div>
            
            </a>
      </div>`;

      // here
      moviesContainerPop.innerHTML = tempHtml;
    });
  });
