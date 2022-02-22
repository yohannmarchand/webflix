import useStyles from "./FavButton.style";
import { useDispatch, useSelector } from "react-redux";
import React, {useContext} from "react";
import { favoritesSlice } from "./slice";

function FavButton({ content, movie }) {
    const classes = useStyles()
    const favorites = useSelector((state) => state.favorites);
    const dispatch = useDispatch();


    function addToFav(event) {
        event.preventDefault();
        const id = movie.id
        dispatch(favoritesSlice.actions.toggle({ id } ))
    }

    return (
        <div className={classes.root} onClick={addToFav}>
            { content }
        </div>
    );
}

export default FavButton;