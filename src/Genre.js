import  data from './data/data.json'
import useStyles from "./Genre.style";

function Genre({ id }) {
    const classes = useStyles()
    const genre = data.genres[id]
    return (
        <div className={classes.root}>
            { genre }
        </div>
    );
}

export default Genre;