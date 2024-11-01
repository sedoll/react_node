import { useState, useEffect } from "react";
import Movie from "../components/Movie";
import styles from './Home.module.css';
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

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
    <div>
      {loading ? (
        <div className={styles.loader}>
          <h1>loading...</h1>
        </div>
      ) : (
        <div>
          <Navbar />
          <div className={styles.container}>
            <div className={styles.movies}>
              {movies.map((movie) => (
                <Link to={`/movie/${movie.id}`} key={movie.id}>
                <Movie
                  id={movie.id}
                  title={movie.original_title}
                  coverImg={movie.poster_path}
                  summary={movie.overview}
                  genres={movie.genre_ids}
                  year={movie.release_date}
                />
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home
