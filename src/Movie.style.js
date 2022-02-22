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
    image: {
        marginRight: 30,
        width: 'auto',
        height: 200
    }
});

export default useStyles;