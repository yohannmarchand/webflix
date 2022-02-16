import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    root: {
        display: "block",
        marginLeft: "auto",
        border: "1px blue solid",
        borderRadius: 5,
        width: "fit-content",
        padding: 10,
        color: "blue",
        textDecoration: "none",
    }
});

export default useStyles;