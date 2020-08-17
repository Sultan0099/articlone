import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
    textFieldWrapper: {
        marginTop: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'transparent',
        alignItems: 'center',
        boxShadow: '0px 1px 0px 0.1px #075A5D',
        marginBottom: 10
    },
    textField: {
        margin: '0px'
    },
    wrapper: {
        margin: theme.spacing(1),
        position: 'relative',
    },
    submit: {
        padding: theme.spacing(1.5, 0),
        margin: theme.spacing(2, 0, 2),
    },
    buttonProgress: {
        color: theme.palette.primary.main,
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
}))

export default styles;