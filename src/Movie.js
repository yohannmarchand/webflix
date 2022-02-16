import data from "./data/data.json";
import { useParams } from "react-router-dom";
import Genre from "./Genre";

function Movie() {
    let params = useParams();
    const movie = data.movies.find(movie =>
         movie['id'] == params.id
    );

    const imageURL = `https://image.tmdb.org/t/p/w92${movie["poster_path"]}`;
    console.log(movie)
    return (
        <div>
            <div>
                <img src={imageURL}/>
                <div>
                    <h1>{ movie["title"] }</h1>
                    <p>Realisé par Yohann Marchand</p>
                    <p>Sortie le {movie["release_date"]}</p>
                    <p>XXX minute</p>
                    <div>
                        {movie["genre_ids"].map(genre => {
                            return <Genre id={genre}/>
                        })}
                    </div>
                </div>
            </div>
            <p>{movie["overview"]}</p>
            <p>Note du public</p>

            <p>Truc similaire</p>

        </div>
    );
}

export default Movie;