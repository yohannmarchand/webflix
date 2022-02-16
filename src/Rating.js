import useStyles from "./Rating.style";

function Rating({ rate }) {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <span className={classes.rate}>{rate} / 10</span>
            <span className={rate > 1 ? classes.fill : classes.notFill}>•</span>
            <span className={rate > 2 ? classes.fill : classes.notFill}>•</span>
            <span className={rate > 3 ? classes.fill : classes.notFill}>•</span>
            <span className={rate > 4 ? classes.fill : classes.notFill}>•</span>
            <span className={rate > 5 ? classes.fill : classes.notFill}>•</span>
            <span className={rate > 6 ? classes.fill : classes.notFill}>•</span>
            <span className={rate > 7 ? classes.fill : classes.notFill}>•</span>
            <span className={rate > 8 ? classes.fill : classes.notFill}>•</span>
            <span className={rate > 9 ? classes.fill : classes.notFill}>•</span>
            <span className={rate > 10 ? classes.fill : classes.notFill}>•</span>
        </div>
    );
}

export default Rating;