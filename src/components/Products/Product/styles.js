import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(()=> ({
    root: {
        maxWidth: '100%'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', //basically a 16:9 ratio
    },
    cardActions: {
        display:'flex',
        justifyContent: 'flex-end',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    container: {
        textDecoration: "none",
        color: "#36454F",
    }
}))