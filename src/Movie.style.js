import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    root: {
      padding: "3rem",
    },
    container: {
        display: "flex",
        justifyContent: "space-around",
        marginBottom: "2rem",
    },
    genre: {
        display: "flex",
    },
});

export default useStyles;