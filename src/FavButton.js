import useStyles from "./FavButton.style";
import React, {useContext} from "react";

function FavButton({ content, movie }) {
    const classes = useStyles()

    function addToFav() {
        let fav = JSON.parse(localStorage.getItem('fav')) || []
        !fav.find(favMovie => favMovie.id === movie.id) && fav.push(movie)
        localStorage.setItem('fav', JSON.stringify(fav))
    }

    return (
        <div className={classes.root} onClick={addToFav}>
            { content }
        </div>
    );
}

export default FavButton;