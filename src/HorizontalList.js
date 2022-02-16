import { Link } from "react-router-dom";

import data from "./data/data.json"

import MovieCard from "./MovieCard";
import useStyles from "./HorizontalList.style";

function HorizontalList({ genres, id }) {
    const movies = data.movies.filter(movie => movie["genre_ids"].includes(genres[0]) && movie["id"] !== id);
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {movies.map((entry) => (
                <div key={entry.id} className={classes.item}>
                    <Link to={`/movies/${entry.id}`} className={classes.link}>
                        <MovieCard {...entry} />
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default HorizontalList;