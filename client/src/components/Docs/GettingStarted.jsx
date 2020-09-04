import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { assets } from '../../theme'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#ffffff',
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
  points: {
    marginTop: '5vh',
    marginLeft: '3vw',
    marginRight: '3vw',
    [theme.breakpoints.down("xs")]: {
      marginLeft: '8vw',
      marginRight: '8vw',
    },
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
  lista: {
    marginTop: '5vh',
    marginLeft: '3vw',
    marginRight: '3vw',
    [theme.breakpoints.down("xs")]: {
      marginLeft: '8vw',
      marginRight: '8vw',
    },
    listStyleType: 'decimal',
    fontSize: '18px',
    color: '#292929',
    fontWeight: '200',
  },
  createproject: {
    marginTop: '5vh',
    marginRight: '3vw',
    marginLeft: '3vw',
    [theme.breakpoints.down("xs")]: {
      marginLeft: '5vw',
      width: '85%',
      marginRight: '5vw',
    },
    width: '100%',
  },
  createblog: {
    marginTop: '5vh',
    marginRight: '3vw',
    marginLeft: '3vw',
    [theme.breakpoints.down("xs")]: {
      marginLeft: '5vw',
      width: '85%',
      marginRight: '5vw',
    },
    width: '100%',
  },
  getapi: {
    marginTop: '5vh',
    marginRight: '3vw',
    marginLeft: '3vw',
    [theme.breakpoints.down("xs")]: {
      marginLeft: '5vw',
      width: '85%',
      marginRight: '5vw',
    },
    width: '100%',
  },
  save: {
    marginTop: '5vh',
    marginRight: '3vw',
    marginLeft: '3vw',
    [theme.breakpoints.down("xs")]: {
      marginLeft: '5vw',
      width: '85%',
      marginRight: '5vw',
    },
    width: '100%',
  },
  projectsetting: {
    marginTop: '5vh',
    marginLeft: '3vw',
    marginRight: '3vw',
    [theme.breakpoints.down("xs")]: {
      marginLeft: '5vw',
      width: '85%',
      marginRight: '5vw',
    },
    width: '100%',
  },
  form: {
    width: '100%',
  },
  title: {
    marginTop: '5vh',
    marginLeft: '3vw',
    marginRight: '3vw',
    [theme.breakpoints.down("xs")]: {
      marginLeft: '8vw',
      marginRight: '8vw',
    },
    fontSize: '28px',
    color: '#075A5D',
    fontWeight: '700',
  },
  paperfield: {
    marginTop: '5vh',
    marginLeft: '3vw',
    marginRight: '3vw',
    [theme.breakpoints.down("xs")]: {
      marginLeft: '8vw',
      marginRight: '8vw',
    },
    boxShadow: '0px 1px 0px 0.1px #075A5D',
    boxSizing: 'border-box',
    paddingLeft: '0px',
    paddingRight: '0px',
    marginBottom: '30px',
  },
  textfield: {
    marginTop: '0px',
    marginBottom: '0px',
  },
  send: {
    marginTop: '3vh',
    marginLeft: '3vw',
    marginRight: '3vw',
    marginBottom: '10vh',
    [theme.breakpoints.down("xs")]: {
      marginLeft: '8vw',
      marginRight: '8vw',
    },
    fontSize: '16px',
    textTransform: 'initial',
    padding: theme.spacing(1, 2, 0.5, 2),
  },
  sidepaper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    height: 'auto',
    position: 'fixed',
    marginLeft: '2vw',
    paddingTop: '20vh',
    [theme.breakpoints.down("850")]: {
      display: 'none'
    },
  },
  subtitle: {
    fontSize: '22px',
    color: '#075A5D',
    marginBottom: '2vh',
    fontWeight: '600',
  },
  text: {
    fontSize: '14px',
    color: '#6D6D6D',
    fontWeight: '400',
  },
}));

export default function GettingStarted() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.toolbar} />
      <Grid container spacing={0} className={classes.container} >
        <Grid item xs={12} sm={9} >
          <div className={classes.contentpaper}>
            <Typography component='h2' variant='h2' className={classes.mainheading} >
              Let's Start
            </Typography>
            <Typography paragraph className={classes.paragraph} >
              This short guide is aimed at new users and will walk through creating a project, model, content, publishing and fetching API via Articlone. You'll need an account to get started, sign in or create a new account.
            </Typography>
            <Typography component='h1' variant='h1' className={classes.heading} >
              1. Create a Project
            </Typography>
            <Typography paragraph className={classes.paragraph} >
              Once logged in, you will see a list of any projects you create or have been invited to.
            </Typography>
            <Typography paragraph className={classes.list} >
              <ul className={classes.lista} >
                {}<li> First, select "Create a new project" to create your first project.</li>
                {}<li> Next, give your project a name, and pick a region for where you want content to be located.</li>
                {}<li> Now pick an applicable plan for your needs. The free plan will work with steps outlined in this guide.</li>
              </ul>
            </Typography>
            <img src={assets.createproject} alt="Sorry!" className={classes.createproject} />
            <Typography component='h1' variant='h1' className={classes.heading} >
              2. Create Blog
            </Typography>
            <Typography paragraph className={classes.paragraph} >
              From the sidebar, navigate to the Schema editor.
            </Typography>
            <Typography paragraph className={classes.paragraph} >
              Now, Add a new Title to your Article and add the description of article to tell the reader.
            </Typography>
            <img src={assets.createblog} alt="Sorry!" className={classes.createblog} />
            <Typography paragraph className={classes.paragraph} >
              We now have a Article model within our Articlone. Now, you have to follow the step 3.
            </Typography>
            <Typography component='h1' variant='h1' className={classes.heading} >
              3. Write Article
            </Typography>
            <Typography paragraph className={classes.paragraph} >
              Now, you just have to write article in Article writing space.
            </Typography>
            <Typography paragraph className={classes.paragraph} >
              Here, in this editor you can write article as much as you want. You can also upload pictures and videos in this editor.
            </Typography>
            <Typography paragraph className={classes.paragraph} >
              Once you wrote the article. You just need to submit it. you just need to navigate to table view through nav bar where you can see your article.
            </Typography>
            <Typography component='h1' variant='h1' className={classes.heading} >
              4. Save and/or Publish
            </Typography>
            <Typography paragraph className={classes.paragraph} >
              Once content has been written, or updated, it's important to save or publish any changes.
            </Typography>
            <Typography paragraph className={classes.paragraph} >
              By default, all content that you create will be unpublished.
            </Typography>
            <img src={assets.save} alt="Sorry!" className={classes.save} />
            <Typography paragraph className={classes.paragraph} >
              Once you publish content, a copy is then made for the PUBLISHED stage. You can also UNPUBLISHED or DELETE the publish or unpublish content.
            </Typography>
            <div className={classes.background}>
              <Typography paragraph className={classes.paragraph} >
                Content can be queried using the stage which represents either UNPUBLISHED or PUBLISHED state.
            </Typography>
            </div>
            <Typography component='h1' variant='h1' className={classes.heading} >
              5. Add Project Information
            </Typography>
            <Typography paragraph className={classes.paragraph} >
              From the sidebar, navigate to the Project Setting.
            </Typography>
            <Typography paragraph className={classes.paragraph} >
              Now, Add a Name to the project. Give a Catchy or your site related name so that you can remember it.
            </Typography>
            <img src={assets.projectsetting} alt="Sorry!" className={classes.projectsetting} />
            <Typography paragraph className={classes.paragraph} >
              Now, Add a Description to the project. Give Detailed Description so that it may easy for you managing the project.
            </Typography>
            <Typography component='h1' variant='h1' className={classes.heading} >
              6. Get API
            </Typography>
            <Typography paragraph className={classes.paragraph} >
              From the sidebar, navigate to the Get API.
            </Typography>
            <Typography paragraph className={classes.paragraph} >
              There are multiple options you have of how you can access the api's which are shown as below.
            </Typography>
            <Typography paragraph className={classes.paragraph} >
              GET ALL POSTS
            </Typography>
            <Typography paragraph className={classes.paragraph} >
              GET PUBLISHED POSTS
            </Typography>
            <Typography paragraph className={classes.paragraph} >
              GET UNPUBLISHED POSTS
            </Typography>
            <Typography paragraph className={classes.paragraph} >
              NEXT or PREVIOUS ALL POSTS
            </Typography>
            <Typography paragraph className={classes.paragraph} >
              NEXT or PREVIOUS PUBLISHED POSTS
            </Typography>
            <Typography paragraph className={classes.paragraph} >
              NEXT or PREVIOUS UNPUBLISHED POSTS
            </Typography>
            <img src={assets.getapi} alt="Sorry!" className={classes.getapi} />
            <Typography paragraph className={classes.paragraph} >
              You can select which ever api you want. For further information go through API REFERERNCES
            </Typography>
            <div className="form">
              <Typography component="h3" variant="h3" className={classes.title} >
                Were you expecting something more?
              </Typography>
              <Typography paragraph className={classes.paragraph} >
                We are constantly contributing to our documentation, but if you spot something we're missing, let us know and we'll be sure to add it.
            </Typography>
              <div className={classes.paperfield}>
                <TextField
                  variant="filled"
                  margin="normal"
                  multiline={true}
                  rows={3}
                  color='primary'
                  className={classes.textfield}
                  required
                  fullWidth
                  size="small"
                  label="Description"
                  name="Description"
                  autoComplete="Description"
                />
              </div>
              <div className={classes.paperfield}>
                <TextField
                  variant="filled"
                  margin="normal"
                  color='primary'
                  className={classes.textfield}
                  required
                  fullWidth
                  size="small"
                  label="email"
                  name="email"
                  autoComplete="email"
                />
              </div>
              <Button variant="contained" color="primary" className={classes.send} >
                Send Feedback
              </Button>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={3} >
          <div className={classes.sidepaper}>
            <Typography component='h2' variant='h2' className={classes.subtitle} >
              On this page
            </Typography>
            <Typography component='h6' variant='h6' className={classes.text} >
              Create Project
            </Typography>
            <Typography component='h6' variant='h6' className={classes.text} >
              Create Blog
            </Typography>
            <Typography component='h6' variant='h6' className={classes.text} >
              Write Article
            </Typography>
            <Typography component='h6' variant='h6' className={classes.text} >
              Save and/or Publish
            </Typography>
            <Typography component='h6' variant='h6' className={classes.text} >
              Add Project Information
            </Typography>
            <Typography component='h6' variant='h6' className={classes.text} >
              Get API
            </Typography>
            <Typography component='h6' variant='h6' className={classes.text} >
              Give Feedback
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
