import {useCallback, useEffect, useState} from "react";
import { useSearchParams } from "react-router-dom";
import Input from "./Input";
import VerticalList from "./VerticalList";
import { useContext } from "react";

import useStyles from "./Home.style";

function Home() {
    const classes = useStyles();
    const [searchParams, setSearchParams] = useSearchParams();
    const [value, setValue] = useState(searchParams.get("q") || "");
    const [movies, setMovies] = useState([])
    const [favCount, setFavCount] = useState(JSON.parse(localStorage.getItem('fav'))?.length | 0)

    useEffect(() => {
        console.log('test')
    }, [localStorage.getItem('fav')])

    
    async function fetchMovies() {
        fetch(
            !value
            ? `${process.env.REACT_APP_API_URL}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`
            : `${process.env.REACT_APP_API_URL}/search/movie?query=${value}&api_key=${process.env.REACT_APP_API_KEY}`
        ).then(response => {
            response.json().then(data => {
                setMovies(data.results)
            })
        }).catch(e => console.log(e))
    }

    const onChange = useCallback(
        (event) => {
            setValue(event.target.value);
            setSearchParams(event.target.value ? { q: event.target.value } : {});
        },
        [setSearchParams]
    );

    useEffect(() => {
        fetchMovies()
    }, [value])
    return (
        <div className={classes.root}>
            <div>Nombre de Favoris : { favCount }</div>
            <Input value={value} onChange={onChange} />
            <VerticalList className={classes.list} data={movies} />
        </div>
    );
}

export default Home;