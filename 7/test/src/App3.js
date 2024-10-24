import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const url = "https://nomad-movies.nomadcoders.workers.dev/movies";
  const getMovies = async () => {
    const json = await (await fetch(url)).json();
    setMovies(json);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return (
    <div className="App">
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <div key={movie.id}> {/*id*/}
              <h2>{movie.original_title}</h2> {/*제목*/}
              <img src={movie.poster_path} style={{width:"200px"}}></img> {/*포스터*/}
              <p>{movie.overview}</p> {/*설명*/}
              <ul>{movie.genre_ids.map((genre)=>(<li key={genre}>{genre}</li>))}</ul> {/*장르*/}
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;