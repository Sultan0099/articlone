import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
    editButton: {
        color: "black",
        cursor: 'pointer',
        fontSize: 20,
        transition: '0.3s',
        "&:hover": {
            color: theme.palette.primary.main
        }
    },
    dialogButton: {
        color: "black",
        cursor: 'pointer',
        fontSize: 25,
        // transition: '0.3s',
        "&:hover": {
            color: theme.palette.primary.main
        }
    },
    actionBar: {
        width: '100%',
        height: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: 'space-between',
        // background: "pink",
        boxSizing: "border-box",
        padding: "0px 15px"
    },
    m_9: {
        marginLeft: "9px",
        marginRight: '9px',
    },
    flex: {
        display: "flex"
    },
    deleteButton: {
        color: "red",
        fontSize: '10px'
    },
    publishButton: {
        color: "green",
        fontSize: '10px'

    },
    unpublishButton: {
        color: "orange",
        fontSize: '10px'

    }
}));


export default styles;