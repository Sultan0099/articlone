import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { assets } from '../../theme'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        borderRadius: '50px 200px 50px 0px',
        marginTop: '0px',
        backgroundColor: '#075A5D',
        height: '94vh',
    },
    paper1: {
        paddingTop: '9vh',
        // marginLeft: '2vw',
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
    laptopworking: {
        width: '40vw',
        marginLeft: '8vw',
    },
    paper2: {
        paddingTop: '9vh',
        marginLeft: '2vw',
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
    heading: {
        fontSize: '36px',
        marginTop: '6vh',
        fontWeight: '600',
        color: 'white',
    },
    text: {
        color: 'white',
        fontSize: '22px',
        marginTop: '20px',
    },
    learnmore: {
        marginTop: '50px',
        textTransform: 'capitalize',
    },
}));

export default function FullWidthGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <br />
            <Grid container spacing={0}>
                <Grid item xs={12} sm={6}>
                    <div className={classes.paper1}>
                        <img src={assets.laptopworking} alt="sorry!" className={classes.laptopworking} />
                    </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <div className={classes.paper2}>
                        <Typography component='h1' variant='h2' className={classes.heading} >
                            Build immersive digital <br />
                            experiences with Articlone, and <br />
                            engage with your customers.
                        </Typography>
                        <Typography component='h3' variant='h3' className={classes.text} >
                            Articlone provides your content and development teams <br />
                            complete flexibility, so you can focus on building <br />
                            exceptional websites without the overheads of <br />
                            maintaining multiple services.
                        </Typography>
                        <Button color="secondary" variant="outlined" className={classes.learnmore} >Learn More</Button>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
