import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: 'pink',
    },
    container: {
        backgroundColor: '#ffffff',
    },
    toolbar: theme.mixins.toolbar,
    contentpaper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        height: 'auto',
        marginLeft: '240px',
        boxSizing: 'border-box',
        [theme.breakpoints.down("xs")]: {
            marginLeft: '0px',
        },
        [theme.breakpoints.down("850")]: {
            width: '100%',
        },
    },
    mainheading: {
        marginTop: '5vh',
        marginLeft: '3vw',
        marginRight: '3vw',
        [theme.breakpoints.down("xs")]: {
            marginLeft: '8vw',
            marginRight: '8vw',
        },
        fontSize: '46px',
        color: '#075A5D',
        fontWeight: '800',
    },
    heading: {
        marginTop: '5vh',
        marginLeft: '3vw',
        marginRight: '3vw',
        [theme.breakpoints.down("xs")]: {
            marginLeft: '8vw',
            marginRight: '8vw',
        },
        fontSize: '38px',
        color: '#075A5D',
        fontWeight: '800',
    },
    paragraph: {
        marginTop: '5vh',
        marginLeft: '3vw',
        marginRight: '3vw',
        [theme.breakpoints.down("xs")]: {
            marginLeft: '8vw',
            marginRight: '8vw',
        },
        fontSize: '18px',
        color: '#292929',
        fontWeight: '200',
    },
}));

export default function ArticloneCMS() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.toolbar} />
            <Grid container spacing={0} className={classes.container} >
                <Grid item xs={12} sm={12} >
                    <div className={classes.contentpaper}>
                        <Typography component='h2' variant='h2' className={classes.mainheading} >
                            Articlone CMS
                        </Typography>
                        <Typography paragraph className={classes.paragraph} >
                            In API Reference you have learned what is the difference between Articlone API's and what is the main use of these API's like when and where to use it.
                        </Typography>
                        <Typography paragraph className={classes.paragraph} >
                            Now, here you will get to know how to use the desired API in your site.
                        </Typography>
                        <Typography component='h1' variant='h1' className={classes.heading} >
                            1. GET ALL POSTS
                        </Typography>
                        <Typography paragraph className={classes.paragraph} >
                            To use this API in your site. Copy the API link and add it in your site coding where you want to add this.
                        </Typography>
                        <Typography paragraph className={classes.paragraph} >
                            You also need to copy the API KEY which is above in header, copy it and replace with the "your apikey".
                        </Typography>
                        <Typography paragraph className={classes.paragraph} >
                            Remember, It will fetch of all first 10 posts api's.
                        </Typography>
                        <Typography component='h1' variant='h1' className={classes.heading} >
                            2. GET PUBLISHED POSTS
                        </Typography>
                        <Typography paragraph className={classes.paragraph} >
                            To use this API in your site. Copy the API link and add it in your site coding where you want to add this.
                        </Typography>
                        <Typography paragraph className={classes.paragraph} >
                            You also need to copy the API KEY which is above in header, copy it and replace with the "your apikey".
                        </Typography>
                        <Typography paragraph className={classes.paragraph} >
                            Remember, It will fetch of published first 10 posts api's.
                        </Typography>
                        <Typography component='h1' variant='h1' className={classes.heading} >
                            3. GET UNPUBLISHED POSTS
                        </Typography>
                        <Typography paragraph className={classes.paragraph} >
                            To use this API in your site. Copy the API link and add it in your site coding where you want to add this.
                        </Typography>
                        <Typography paragraph className={classes.paragraph} >
                            You also need to copy the API KEY which is above in header, copy it and replace with the "your apikey".
                        </Typography>
                        <Typography paragraph className={classes.paragraph} >
                            Remember, It will fetch of unpublished first 10 posts api's.
                        </Typography>
                        <Typography component='h1' variant='h1' className={classes.heading} >
                            4. NEXT OR PREVIOUS ALL POSTS
                        </Typography>
                        <Typography paragraph className={classes.paragraph} >
                            To use this API in your site. Copy the API link and add it in your site coding where you want to add this.
                        </Typography>
                        <Typography paragraph className={classes.paragraph} >
                            You also need to copy the API KEY which is above in header, copy it and replace with the "your apikey". You also need to give page numbers limit. For example, write 1 in first "number" and in second number write '3'. So, it will fetch api all posts API's from page 1 to page 3.
                        </Typography>
                        <Typography paragraph className={classes.paragraph} >
                            Remember, This api is used to get next or previous all posts , you can change limit the pages as you want.
                        </Typography>
                        <Typography component='h1' variant='h1' className={classes.heading} >
                            5. NEXT OR PREVIOUS PUBLISHED POSTS
                        </Typography>
                        <Typography paragraph className={classes.paragraph} >
                            To use this API in your site. Copy the API link and add it in your site coding where you want to add this.
                        </Typography>
                        <Typography paragraph className={classes.paragraph} >
                            You also need to copy the API KEY which is above in header, copy it and replace with the "your apikey". You also need to give page numbers limit. For example, write 1 in first "number" and in second number write '3'. So, it will fetch api all posts API's from page 1 to page 3.
                        </Typography>
                        <Typography paragraph className={classes.paragraph} >
                            Remember, This api is used to get next or previous published only posts , you can change limit the pages as you want.
                        </Typography>
                        <Typography component='h1' variant='h1' className={classes.heading} >
                            6. NEXT OR PREVIOUS UNPUBLISHED POSTS
                        </Typography>
                        <Typography paragraph className={classes.paragraph} >
                            To use this API in your site. Copy the API link and add it in your site coding where you want to add this.
                        </Typography>
                        <Typography paragraph className={classes.paragraph} >
                            You also need to copy the API KEY which is above in header, copy it and replace with the "your apikey". You also need to give page numbers limit. For example, write 1 in first "number" and in second number write '3'. So, it will fetch api all posts API's from page 1 to page 3.
                        </Typography>
                        <Typography paragraph className={classes.paragraph} >
                            Remember, This api is used to get next or previous unpublished posts , you can change limit the pages as you want.
                        </Typography>
                        <Typography component='h1' variant='h1' className={classes.heading} >
                            7. Register User
                        </Typography>
                        <Typography paragraph className={classes.paragraph} >
                            To use this API in your site. Copy the API link and add it in your site coding where you want to add this.
                        </Typography>
                        <Typography paragraph className={classes.paragraph} >
                            You also need to copy the API KEY which is above in header, copy it and replace with the "your apikey".
                        </Typography>
                        <Typography paragraph className={classes.paragraph} >
                            Remember, It will fetch of Register User api's.
                        </Typography>
                        <Typography paragraph className={classes.paragraph} >
                            All the users which have been registered through your site. To see all the user which have been registered through your site using our API's navigate to USER tab.
                        </Typography>
                        <Typography component='h1' variant='h1' className={classes.heading} >
                            8. Login User
                        </Typography>
                        <Typography paragraph className={classes.paragraph} >
                            To use this API in your site. Copy the API link and add it in your site coding where you want to add this.
                        </Typography>
                        <Typography paragraph className={classes.paragraph} >
                            You also need to copy the API KEY which is above in header, copy it and replace with the "your apikey".
                        </Typography>
                        <Typography paragraph className={classes.paragraph} >
                            Remember, It will fetch of Login User api's.
                        </Typography>

                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
