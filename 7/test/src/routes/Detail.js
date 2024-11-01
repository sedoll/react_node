import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import MovieDetail from "../components/detail/js/MovieDetail";
import CastCrew from "../components/detail/js/CastCrew";
import Comments from "../components/detail/js/Comments";
import styles from "./Detail.module.css";

function Detail() {
  const { id } = useParams(); // param 추출
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  let url = `https://nomad-movies.nomadcoders.workers.dev/movies/${id}`;
  const getMovie = async () => {
    const json = await (await fetch(url)).json();
    setMovie(json);
    console.log(json);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div className={styles.App}>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div className="app">
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            <div>
              <Navbar />
              <MovieDetail movie={movie} />
              <CastCrew id={id} />
              <Comments comments={movie.comments} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Detail;
