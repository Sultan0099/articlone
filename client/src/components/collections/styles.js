import { makeStyles } from "@material-ui/core/styles";

const collectionStyles = makeStyles((theme) => ({
    header: {
        flexGrow: 1,
    },
    h_toolbar: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    h_logo: {
        height: '40px'

    },
    card: {
        maxWidth: '250px',
        margin: '5px 10px'

    },
    cardAction: {
        height: '100%'
    },
    container: {
        marginTop: '80px',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',

    },
    avatar: {
        color: theme.palette.getContrastText(theme.palette.primary.main),
        backgroundColor: theme.palette.primary.main,
    },
    folderIcon: {
        textAlign: 'center',
        fontSize: '4rem'
    },
    textCenter: {
        textAlign: "center"
    },
    t_color: {
        color: 'black'
    },
    collectionWrapper: {
        minWidth: 300,
        width: 300,
        maxWidth: 300,
        marginLeft: 10,
        marginTop: 10,

        minHeight: 120,
        cursor: 'pointer',
        padding: theme.spacing(2),

    },
    contentWrapper: {
        padding: theme.spacing(1, 0),

    },

    textFieldWrapper: {
        marginTop: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'transparent',
        alignItems: 'center',
        boxShadow: '0px 1px 0px 0.1px #075A5D'
    },
    textField: {
        margin: '0px'
    },
}))

export default collectionStyles; 