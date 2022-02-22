import data from "./data/data.json"

import useStyles from "./Movie.style";
import Rating from "./Rating";
import BackButton from "./BackButton";
import HorizontalList from "./HorizontalList";
import {useCallback, useEffect, useState} from "react";
import { Navigate, useParams } from "react-router-dom";
import Genre from "./Genre";

function Movie() {
    const params = useParams();
    const classes = useStyles();
    const [movie, setMovie] = useState({})
    const [imageURL, setImageURL] = useState('')
    const [genres, setGenres] = useState([])

    async function fecthMovie() {
         await fetch(`${process.env.REACT_APP_API_URL}/movie/${params.id}?api_key=${process.env.REACT_APP_API_KEY}`)
            .then(response => {
                return response.json()
            })
            .then(data => {
                setMovie(data)
            })
    }

    useEffect( () => {
        fecthMovie()
    }, [params])

    useEffect(() => {
        if (movie.genres) {
            setImageURL(`https://image.tmdb.org/t/p/w92${movie?.poster_path}`)
            setGenres(movie.genres)
        }
    }, [movie])

    return (
        <div className={classes.root}>
            <BackButton/>
            <div className={classes.container}>
                <img className={classes.image} src={imageURL}/>
                <div>
                    <h1>{ movie?.title }</h1>
                    <p>Realisé par Yohann Marchand</p>
                    <p>Sortie le {movie?.release_date}</p>
                    <p>XXX minute</p>
                    <div>
                        {genres?.map(({name}) => {
                            return <Genre key={name} name={name}/>
                        })}
                    </div>
                </div>
            </div>
            <p>{movie?.overview}</p>
            <p>Note du public</p>
            <Rating rate={movie?.vote_average}/>
            <p>Films similaire</p>
            <HorizontalList id={params.id}/>
        </div>
    );
}

export default Movie;