import { makeStyles } from "@material-ui/core/styles";

const profileStyles = makeStyles((theme) => ({
    textFieldWrapper: {
        marginTop: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'transparent',
        alignItems: 'center',
        boxShadow: '0px 1px 0px 0.1px #075A5D'
    },
    textLeft: {
        textAlign: "left"
    },
    radioWrapper: {
        marginTop: 20,
        marginBottom: 10,
        textAlign: 'left'
    },
    textField: {
        margin: '0px'
    },
    formWrapper: {
        width: '52%',
        margin: '0px auto',

    },
    m_top: {
        marginTop: 20,
    },
    textCenter: {
        textAlign: "center"
    }

}));

export default profileStyles;