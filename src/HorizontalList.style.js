import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    root: {
        display: "flex",
        overflow: "auto"
    },
    item: {
        padding: 8,
    },
    link: {
        textDecoration: "none",
    },
});

export default useStyles;