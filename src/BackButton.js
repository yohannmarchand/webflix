import useStyles from "./BackButton.style";
import { Link } from "react-router-dom";

function BackButton() {
    const classes = useStyles()
    return (
        <Link to="/" className={classes.root}>
            Retour
        </Link>
    );
}

export default BackButton;