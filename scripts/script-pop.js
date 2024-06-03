// HTML elem
const moviesContainerPop = document.getElementById("movies-container-popular");

const options = {
  method: "GET", // get, post, delete, put...
  headers: {
    accept: "application/json",

    Authorization:
      // Bearer "Access Token Auth" that you got
      "Bearer put your Access Token Auth here",
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
        
            

                <img src='${imgUrl}' alt="">
            
                <div>
                    <h3>${movieTitle}</h3>
                    <p>${overview}</p>
                    <p>⭐ ${vote}</p>
                    <p>Popularity: ${popularity}</p>
                    <button>Favourite</button>
                </div>
            
            
      </div>`;

      // here
      moviesContainerPop.innerHTML = tempHtml;
    });
  });
