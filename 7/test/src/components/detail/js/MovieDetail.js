import styles from "../css/MovieDetail.module.css";

function MovieDetail({ movie }) {
  return (
    <div className={styles.movie_detail}>
      <div className={styles.movie_header}>
        <img
          className={styles.movie_banner}
          src={movie.backdrop_path}
          alt={movie.title}
        />
      </div>
      <div className={styles.movie_info}>
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
}

export default MovieDetail;
