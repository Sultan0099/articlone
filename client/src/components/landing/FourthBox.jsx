import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CodeIcon from "@material-ui/icons/Code";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import BubbleChartOutlinedIcon from "@material-ui/icons/BubbleChartOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    backgroundColor: "#FFF",
    backgroundImage: "linear-gradient( #FFFFFF, #FFFFFF, #FFFFFF, #EDF3F3)",
  },
  paper1: {
    paddingTop: "3vh",
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  heading: {
    fontSize: "40px",
    marginTop: "4vh",
    fontWeight: "600",
    color: "#075A5D"
  },
  text: {
    color: "#2F2F2F",
    fontSize: "22px",
    marginTop: "50px",
    marginBottom: "100px"
  },
  cardsgrid: {
    // marginRight: '10vw',
    // marginLeft: '10vw',
    marginBottom: '180px',
  },
  paper2: {
    width: 250,
    height: 325,
    paddingBottom: '10px',
    [theme.breakpoints.down("750")]: {
      width: '70vw',
      height: 'auto'
    },
    borderRadius: "8px",
    paddingTop: "10px",
    backgroundColor: "#008AB7"
  },
  code: {
    marginLeft: "15px",
    width: "60px",
    height: "60px",
    color: "white"
  },
  file: {
    marginLeft: "15px",
    width: "40px",
    height: "55px",
    color: "white"
  },
  chart: {
    marginLeft: "15px",
    width: "45px",
    height: "55px",
    color: "white"
  },
  title: {
    color: "white",
    fontSize: '26px',
    marginLeft: "20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  },
  body: {
    color: "white",
    marginLeft: "20px",
    marginRight: '20px',
    marginBottom: '30px',
    marginTop: '5px',
    fontWeight: '200',
    fontSize: '18px',
    background: 'transparent',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  },
  paper3: {
    width: 250,
    height: 325,
    paddingBottom: '10px',
    [theme.breakpoints.down("750")]: {
      width: '70vw',
      height: 'auto'
    },
    paddingTop: "10px",
    borderRadius: "8px",
    backgroundColor: "#07485D"
  },
  paper4: {
    width: 250,
    height: 325,
    paddingBottom: '10px',
    [theme.breakpoints.down("750")]: {
      width: '70vw',
      height: 'auto'
    },
    paddingTop: "10px",
    borderRadius: "8px",
    backgroundColor: "#0E6B7E"
  }
}));

export default function FourthBox() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0} direction="column" alignItems="center" >
        <Grid item xs={10} sm={7}>
          <div className={classes.paper1}>
            <Typography component="h1" variant="h2" className={classes.heading}>
              Why Articlone?
            </Typography>
            <Typography component="h3" variant="h3" className={classes.text}>
              Build your digital experiences API-first the way you envisioned
              them. No templates, no restrictions, no boundaries.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12}>
          <Grid container className={classes.cardsgrid} spacing={0}>
            <Grid item xs={12}>
              <Grid container justify="center" spacing={10}>
                <Grid item>
                  <div className={classes.paper2}>
                    <CodeIcon className={classes.code} />
                    <Typography variant="h4" className={classes.title}>
                      Articlone &
                      Developer
                      Efficiency
                    </Typography>
                    <Typography
                      component="h6"
                      variant="h6"
                      className={classes.body}
                    >
                      Empower your development and editorial teams' workflows and bring your digital projects to life with Articlone.
                    </Typography>
                  </div>
                </Grid>
                <Grid item>
                  <div className={classes.paper3}>
                    <FileCopyOutlinedIcon className={classes.file} />
                    <Typography variant="h4" className={classes.title}>
                      Content
                      Management &
                      Sharing
                    </Typography>
                    <Typography
                      component="h6"
                      variant="h6"
                      className={classes.body}
                    >
                      Manage all your content from a single content hub and distribute natively across platforms at scale.
                    </Typography>
                  </div>
                </Grid>
                <Grid item>
                  <div className={classes.paper4}>
                    <BubbleChartOutlinedIcon className={classes.chart} />
                    <Typography variant="h4" className={classes.title}>
                      Article
                      Reading &
                      Growth
                    </Typography>
                    <Typography
                      component="h6"
                      variant="h6"
                      className={classes.body}
                    >
                      Deliver the perfect Customer Experience with a scalable and secure Enterprise Headless CMS that seamlessly fits in to your Experience Platform.
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
