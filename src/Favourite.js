
import React, {useContext, useState} from "react";
import VerticalList from "./VerticalList";
import useStyles from "./Home.style";
import { Navigate } from "react-router-dom";
import {useSelector} from "react-redux";

function Favorite() {
    const classes = useStyles()

    const favorites = useSelector((state) => state.favorites);

    return favorites ? (
        <div>
            <h1>Favorite</h1>
            <VerticalList className={classes.list} data={favorites} fav={false} />
        </div>
    ) : <Navigate to="/" replace={true} />;
}

export default Favorite;