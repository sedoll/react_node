import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
    const {id} = useParams() // param 추출
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([])
    let url = `https://nomad-movies.nomadcoders.workers.dev/movies/${id}`
    const getMovie = async () => {
        const json = await (await fetch(url)).json();
        setMovie(json);
        console.log(json)
        setLoading(false);
      };
    useEffect(()=> {
        getMovie()
    }, [])
    return (
        <div className="App">
            {loading ? (
                <h1>loading...</h1>
            ) : (
                <div>
                    <h1>Detail</h1>
                    <p>id : {id}</p>
                </div>
            )}
        </div>
    )
}

export default Detail