import useStyles from "./Genre.style";

function Genre({ name }) {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            { name }
        </div>
    );
}

export default Genre;