import data from "./data/data.json";
import { useParams } from "react-router-dom";
import Genre from "./Genre";

import useStyles from "./Movie.style";
import Rating from "./Rating";

function Movie() {
    let params = useParams();
    const classes = useStyles();
    const movie = data.movies.find(movie =>
         movie['id'] == params.id
    );

    const imageURL = `https://image.tmdb.org/t/p/w92${movie["poster_path"]}`;
    console.log(movie)
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <img src={imageURL}/>
                <div>
                    <h1>{ movie["title"] }</h1>
                    <p>Realisé par Yohann Marchand</p>
                    <p>Sortie le {movie["release_date"]}</p>
                    <p>XXX minute</p>
                    <div className={classes.genre}>
                        {movie["genre_ids"].map(genre => {
                            return <Genre id={genre}/>
                        })}
                    </div>
                </div>
            </div>
            <p>{movie["overview"]}</p>
            <p>Note du public</p>
            <Rating rate={movie["vote_average"]}/>
            <p>Truc similaire</p>

        </div>
    );
}

export default Movie;