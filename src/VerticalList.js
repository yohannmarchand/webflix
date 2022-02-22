import classNames from "classnames";
import { Link } from "react-router-dom";

import MovieCard from "./MovieCard";
import useStyles from "./VerticalList.style";
import FavButton from "./FavButton";

function VerticalList({ data, className, fav = true }) {
    const classes = useStyles();
    return (
        <div className={classNames([classes.root, className])}>
            {data.map((entry) => (
                <div key={entry.id} className={classes.item}>
                    <Link to={`/movies/${entry.id}`} className={classes.link}>
                        <MovieCard {...entry} />
                    </Link>
                    {fav && <FavButton content='❤️' movie={entry}/>}
                </div>
            ))}
        </div>
    );
}

export default VerticalList;