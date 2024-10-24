import {Link} from 'react-router-dom'
import PropTypes from "prop-types"

function Movie({id, title, coverImg, summary, genres}) {
    return (
        <div>
            <h2>
                <Link to={`/movie/${id}`} >{title}</Link>
            </h2> {/*제목*/}
            <img src={coverImg} style={{width:"200px"}}></img> {/*포스터*/}
            <p>{summary}</p> {/*설명*/}
            <ul>{genres.map((genre)=>(<li key={genre}>{genre}</li>))}</ul> {/*장르*/}
            <hr />
        </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    coverImg: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.number).isRequired
}

export default Movie