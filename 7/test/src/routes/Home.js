import { useState, useEffect } from "react";
import Movie from "../components/Movie";

function Home() {
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
            <Movie
              key={movie.id}
              id={movie.id}
              title={movie.original_title}
              coverImg={movie.poster_path}
              summary={movie.overview}
              genres={movie.genre_ids}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home