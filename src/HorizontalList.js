import { Link } from "react-router-dom";

import data from "./data/data.json"

import MovieCard from "./MovieCard";
import useStyles from "./HorizontalList.style";
import {useEffect, useState} from "react";

function HorizontalList({ id }) {
    const [movies, setMovies] = useState([])
    const classes = useStyles();

    async function fecthMovies(id) {
        await fetch(`${process.env.REACT_APP_API_URL}/movie/${id}/similar?api_key=${process.env.REACT_APP_API_KEY}`)
            .then(response => {
                return response.json()
            })
            .then(data => {
                setMovies(data.results)
            })
    }

    useEffect( () => {
        fecthMovies(id)
    }, [id])

    return (
        <div className={classes.root}>
            { movies.map((entry) => (
                <div key={entry.id} className={classes.item}>
                    <Link to={`/movies/${entry.id}`} className={classes.link}>
                        <MovieCard {...entry} />
                    </Link>
                </div>
            )) }
        </div>
    )
}

export default HorizontalList;