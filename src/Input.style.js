import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    root: {
        borderColor: "black",
        borderWidth: 2,
        padding: "1rem",
        marginBottom: "1rem",
        fontSize: 20,
        fontWeight: 700,
        borderRadius: 50,
        "&:focus": {
            outline: "none",
        },
    },
});

export default useStyles;