import data from "./data/data.json";
import { useParams } from "react-router-dom";
import Genre from "./Genre";

import useStyles from "./Movie.style";
import Rating from "./Rating";
import BackButton from "./BackButton";
import HorizontalList from "./HorizontalList";
import {useEffect, useState} from "react";

function Movie() {
    let params = useParams();
    const classes = useStyles();

    let [movie, setMovie] = useState({})
    async function fetchMovie() {
        await fetch(`${process.env.REACT_APP_API_URL}/movie/${params.id}?api_key=${process.env.REACT_APP_API_KEY}`).then(response => {
            response.json().then(data => {
                setMovie(data)
            })
        }).catch(e => console.log(e))
    }

    useEffect(() => {
        fetchMovie()
    })
    console.log(movie)
    const imageURL = `https://image.tmdb.org/t/p/w92${movie["poster_path"]}`;
    return (
        <div className={classes.root}>
            <BackButton/>
            <div className={classes.container}>
                <img src={imageURL}/>
                <div>
                    <h1>{ movie["title"] }</h1>
                    <p>Realisé par Yohann Marchand</p>
                    <p>Sortie le {movie["release_date"]}</p>
                    <p>XXX minute</p>

                </div>
            </div>
            <p>{movie["overview"]}</p>
            <p>Note du public</p>
            <Rating rate={movie["vote_average"]}/>
            <p>Films similaire</p>
            <HorizontalList genres={movie["genre_ids"]} id={movie['id']}/>
        </div>
    );
}

export default Movie;