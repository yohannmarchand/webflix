import {useCallback, useEffect, useState} from "react";
import Input from "./Input";
import VerticalList from "./VerticalList";

import useStyles from "./Home.style";

function Home() {
    const classes = useStyles();
    const [value, setValue] = useState("");
    const onChange = (event) => setValue(event.target.value);

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