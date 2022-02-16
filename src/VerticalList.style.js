import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    root: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        margin: "0 auto",
    },
    item: {
        padding: 8,
    },
    link: {
        textDecoration: "none",
    },
});

export default useStyles;