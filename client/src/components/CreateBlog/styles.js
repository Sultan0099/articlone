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
}))

export default styles;