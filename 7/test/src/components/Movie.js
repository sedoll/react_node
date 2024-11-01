import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Movie.module.css";

function Movie({ id, title, coverImg, year, summary, genres }) {
  return (
    <div className={styles.movie}>
      <img className={styles.movie__img} src={coverImg}></img> {/*포스터*/}
      <div>
        <h2 className={styles.movie__title}>{title}</h2> {/*제목*/}
        <h3 className={styles.movie__year}>{year}</h3>
        <p>
          {summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}
        </p>{" "}
        {/*설명*/}
        <ul className={styles.movie__genres}>
          {genres.map((genre) => (
            <li key={genre}>{genre}</li>
          ))}
        </ul>{" "}
        {/*장르*/}
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  coverImg: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Movie;
