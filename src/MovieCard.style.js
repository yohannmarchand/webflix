import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    root: {
        borderColor: "black",
        borderWidth: 2,
        borderStyle: "solid",
        height: 200,
        width: 100,
        backgroundImage: ({ imageURL }) => `url(${imageURL})`,
        overflow: "hidden",
    },
    title: {
        padding: 8,
        color: "white",
        fontSize: 12,
        textShadow: "1px 1px 6px black",
        wordBreak: "break-word",
    },
});

export default useStyles;