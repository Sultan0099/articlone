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
        padding: "0px 15px",
        borderBottom: "1px solid rgba(0,0,0,0.1)"
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
    },
    paginationBar: {
        backgroundColor: "white",
        marginTop: "15px",
        width: '100%',
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'sticky',
        bottom: 0,
        left: 0,
        zIndex: 4
    },
    paginationInput: {
        width: 50,
        height: "100%",
        border: "1px solid rgba(0,0,0,0.1)"
    },
    paginationCount: {
        marginTop: '-6px',
        marginLeft: 8,
        marginRight: 8,
        border: "1px solid black",
        fontWeight: 'bold',
        boxSizing: 'border-box',
        padding: "5px 10px"
    },
    filterButton: {
        color: "green",
        fontSize: '10px'
    }

}));


export default styles;