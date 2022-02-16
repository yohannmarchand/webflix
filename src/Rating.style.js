import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    root: {
        padding: "4px 8px",
        marginLeft: -10,
        color: "gray",
        fontSize: 80,
    },

    notFill: {
        marginLeft: "2px",
    },

    fill: {
        marginLeft: "2px",
        color: "yellow"
    },

    rate: {
        fontSize: 16,
        color: "black",
        display: "block",
        fontWeight: 700,
    }
});

export default useStyles;