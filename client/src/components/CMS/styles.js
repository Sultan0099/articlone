import { makeStyles } from "@material-ui/core/styles";


const styles = makeStyles((theme) => ({
    root: {
        width: '80%',
        margin: "30px auto"
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    detailSpan: {
        color: theme.palette.primary.main,
        fontSize: 14
    },
    brick: {
        padding: "2px 4px",
        backgroundColor: 'rgba(0,0,0,0.1)',
        borderRadius: 4,
    },
    uppercase: { textTransform: "uppercase" },
    accordianDetails: {
        display: "flex",
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 500,
        backgroundColor: 'red',
        boxSizing: 'border-box',
        padding: 20
    },

    accordianDetailsItems: {
        position: "relative",
        height: "100%",
        width: "48%",
        padding: 20,
        boxSizing: 'border-box',
        backgroundColor: 'white'
    },
    flexAround: {
        marginBottom: 4,
        display: "flex",
        justifyContent: "space-between"
    }
}));

export default styles;