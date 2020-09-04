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
  sidepaper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    height: 'auto',
    position: 'fixed',
    marginLeft: '2vw',
    // backgroundColor: 'pink',
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

export default function Concepts() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.toolbar} />
      <Grid container spacing={0} className={classes.container} >
        <Grid item xs={12} sm={12} >
          <div className={classes.contentpaper}>
            <Typography component='h2' variant='h2' className={classes.mainheading} >
              Key Concepts & Features
            </Typography>
            <Typography paragraph className={classes.paragraph} >
              Build your digital experiences API-first the way you envisioned them. No templates, no restrictions, no boundaries. Give your development and editorial teams complete independence.
            </Typography>
            <Typography component='h1' variant='h1' className={classes.heading} >
              Articlone & Developer Efficiency
            </Typography>
            <Typography paragraph className={classes.paragraph} >
              Empower your development and editorial teams' workflows and bring your digital projects to life with Articlone - It will accelerates team efficiency. Powerful CMS for developers, and a seamless editor experience for content creators.
            </Typography>
            <Typography paragraph className={classes.paragraph} >
              The most flexible content API in the CMS industry. Our generated APIs offer endless flexibility for fetching or writing content. Precise content selection, filtering, ordering, pagination, union types and much more.
            </Typography>
            <Typography paragraph className={classes.paragraph} >
              The Articlone editor gives your team powerful editorial capabilities at their fingertips. Create and edit pages, banners, posts, communication, and more with all content types. Visualise your content before publishing, and experience an unparalleled content experience.
            </Typography>
            <Typography component='h1' variant='h1' className={classes.heading} >
              Content Management & Sharing
            </Typography>
            <Typography paragraph className={classes.paragraph} >
              DXPs (Digital Experience Platform) combine multiple services that are great at what they do. Incorporating a modular approach with best-of-breed services for multiple use cases like chat, NPS, campaigns, banners, etc. allow businesses to focus on delivering great experiences across devices, and harnessing the abilities of these services to create better interaction relevance with their customers.
            </Typography>
            <Typography paragraph className={classes.paragraph} >
              With digital touchpoints expanding between PC, mobile, wearables, speakers, and chatbots, to name a few, having a DXP strategy in place allows businesses to be present wherever their customers are, and understand how they interact with their products across channels.
            </Typography>
            <Typography component='h1' variant='h1' className={classes.heading} >
              Article Reading & Growth
            </Typography>
            <Typography paragraph className={classes.paragraph} >
              GraphCMS delivers on enterprise expectations, enabling teams to successfully take digital projects to market globally.
            </Typography>
            <Typography paragraph className={classes.paragraph} >
              Manage all your team’s content within a unified content repository, and let your developers query it from a single endpoint.
            </Typography>
            <Typography paragraph className={classes.paragraph} >
              Break down your legacy systems, work with best-of-breed microservices, and deliver a genuinely world-class digital experience to your customers.
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
