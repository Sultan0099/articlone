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

export default function ApiRef() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.toolbar} />
            <Grid container spacing={0} className={classes.container} >
                <Grid item xs={12} sm={12} >
                    <div className={classes.contentpaper}>
                        <Typography component='h2' variant='h2' className={classes.mainheading} >
                            API Reference
                        </Typography>
                        <Typography paragraph className={classes.paragraph} >
                            In API Reference you will get to know which API you need to select for your site or what isthe purpose of every API. You just need to add API key in link.
                        </Typography>
                        <Typography paragraph className={classes.paragraph} >
                            There are several available APIs when working with Articlone.
                        </Typography>
                        <Typography component='h1' variant='h1' className={classes.heading} >
                            GET ALL POSTS
                        </Typography>
                        <Typography paragraph className={classes.paragraph} >
                            The Articlone ALL POSTS API is what you will spend most of your time. All data inside your project can be managed and delivered through the ALL POSTS API, using Articlone Queries and Mutations.
                        </Typography>
                        <Typography paragraph className={classes.paragraph} >
                            ALL POSTS API will give API's for all your contents whether it is published or unpublished.
                        </Typography>
                        <Typography component='h1' variant='h1' className={classes.heading} >
                            GET PUBLISHED POSTS
                        </Typography>
                        <Typography paragraph className={classes.paragraph} >
                            Every project comes with a PUBLISHED API along with the ALL API.
                        </Typography>
                        <Typography paragraph className={classes.paragraph} >
                            The PUBLISHED API is for published articles or content. This would help your project for fetching API's for published articles or content. This helps the user to manage the his content according to his desire.
                        </Typography>
                        <Typography paragraph className={classes.paragraph} >
                            PUBLISHED POSTS API will give API's for your only pusblished contents. The user can manage content according to API.
                        </Typography>
                        <Typography component='h1' variant='h1' className={classes.heading} >
                            GET UNPUBLISHED POSTS
                        </Typography>
                        <Typography paragraph className={classes.paragraph} >
                            Every project comes with a UNPUBLISHED API along with the other API.
                        </Typography>
                        <Typography paragraph className={classes.paragraph} >
                            The UNPUBLISHED API is for unpublished articles or content. This would help your project for fetching API's for unpublished articles or content. This helps the user to manage the his content according to his desire.
                        </Typography>
                        <Typography paragraph className={classes.paragraph} >
                            UNPUBLISHED POSTS API will give API's for your only unpusblished contents. The user can manage content according to API.
                        </Typography>
                        <Typography component='h1' variant='h1' className={classes.heading} >
                            NEXT OR PREVIOUS ALL POSTS
                        </Typography>
                        <Typography paragraph className={classes.paragraph} >
                            Now, this API follow the rules of pagination means from which page to which page you need API. It needed when you have large ammount of content and you need to manage according to it.
                        </Typography>
                        <Typography paragraph className={classes.paragraph} >
                            The NEXT OR PREVIOUS ALL API is for managing large ammount of articles and you need to all articles of specific pages. So, this API solves this problem of user by just adding adding page numbers you want.
                        </Typography>
                        <Typography component='h1' variant='h1' className={classes.heading} >
                            NEXT OR PREVIOUS PUBLISHED POSTS
                        </Typography>
                        <Typography paragraph className={classes.paragraph} >
                            Now, this API follow the rules of pagination means from which page to which page you need API. It needed when you have large ammount of content and you need to manage according to it.
                        </Typography>
                        <Typography paragraph className={classes.paragraph} >
                            The NEXT OR PREVIOUS PUBLISHED API is for managing large ammount of articles and you need to publish specific pages articles. So, this API solves this problem of user by just adding adding page numbers you want. Remember, It is just for published articles.
                        </Typography>
                        <Typography component='h1' variant='h1' className={classes.heading} >
                            NEXT OR PREVIOUS UNPUBLISHED POSTS
                        </Typography>
                        <Typography paragraph className={classes.paragraph} >
                            Now, this API follow the rules of pagination means from which page to which page you need API. It needed when you have large ammount of content and you need to manage according to it.
                        </Typography>
                        <Typography paragraph className={classes.paragraph} >
                            The NEXT OR PREVIOUS ALL API is for managing large ammount of articles and you need api's for only specific pages unpublished articles. So, this API solves this problem of user by just adding adding page numbers you want. Remember, It is just for published articles.
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
