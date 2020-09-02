import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: "white",
        boxShadow: 'none',
        borderBottom: "1px solid rgba(0,0,0,0.1)"

    },
    title: {
        flexGrow: 1,
    },
    appBarButton: {
        paddingLeft: '6px'
    }
}));


export default styles; 