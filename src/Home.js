import {useCallback, useEffect, useState} from "react";
import { useSearchParams } from "react-router-dom";
import Input from "./Input";
import VerticalList from "./VerticalList";

import useStyles from "./Home.style";

function Home() {
    const classes = useStyles();
    const [searchParams, setSearchParams] = useSearchParams();
    const [value, setValue] = useState(searchParams.get("q") || "");
    const [movies, setMovies] = useState([])
    
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
            <Input value={value} onChange={onChange} />
            <VerticalList className={classes.list} data={movies} />
        </div>
    );
}

export default Home;