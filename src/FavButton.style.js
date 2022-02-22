import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    root: {
        display: "block",
        marginLeft: "auto",
        border: "1px green solid",
        borderRadius: 5,
        width: "fit-content",
        padding: 5,
        color: "green",
        marginTop: 5,
        textDecoration: "none",
    }
});

export default useStyles;