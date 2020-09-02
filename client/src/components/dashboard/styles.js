import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
    wrapper: {
        height: '100vh',
        display: 'flex',
    },
    avatar: {
        color: theme.palette.getContrastText(theme.palette.primary.main),
        backgroundColor: theme.palette.primary.main,
    },
    sideBar: {
        height: "100%",
        width: '60px',
        borderRight: "1px solid rgba(0,0,0,0.1)",
        position: 'fixed',
        top: 0,
        left: 0,
        backgroundColor: "white",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'space-between',
        boxSizing: 'border-box',
        padding: "10px"

    },
    navBox: {
        width: '100%',
        height: "200px",
        // backgroundColor: 'red',
        display: 'flex',
        flexDirection: 'column',

        justifyContent: 'start',
        alignItems: 'center'
    },
    h_100: { height: "100%" },
    tooltip: {
        display: "block",
        marginBottom: 16,
        height: 'fit-content',
        color: 'rgba(0,0,0,0.6)',
        '&:hover': {
            color: theme.palette.primary.main
        }
    },
    links: {
        marginTop: 20,
        padding: 5,
    },
    navActive: {
        color: theme.palette.primary.main,
    }
}))

export default styles; 