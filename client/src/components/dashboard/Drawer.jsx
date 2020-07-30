import React, {useState} from 'react';
import { withRouter, Link } from 'react-router-dom'

import { useSelector } from "react-redux"
import { Redirect } from "react-router-dom";
import clsx from 'clsx';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import MailIcon from '@material-ui/icons/Mail';
import DashboardIcon from '@material-ui/icons/Dashboard';
import CreateIcon from '@material-ui/icons/Create';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import DescriptionIcon from '@material-ui/icons/Description';
import Avatar from '@material-ui/core/Avatar';
import TuneIcon from '@material-ui/icons/Tune';
import GroupIcon from '@material-ui/icons/Group';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { Route } from "react-router-dom";

import { assets } from '../../theme'
import FrontPage from '../dashboard/FrontPage'
import Profile from '../dashboard/Profile'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        backgroundColor: "white",
        height: '100vh',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    rounded: {
        backgroundColor: 'black',
        color: 'white',
        width: '40px',
        height: '40px',
    },
    icon: {
        width: '25px',
        marginLeft: '5px',
        height: '25px',
        color: '#404040',
    },
    toolbar: {
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(1, 0),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    nav: {
        display: 'flex',
    },
    bottom: {
        display: "flex",
        alignContent: 'flex-end',
        // alignContent:'space-between',
        // position:'fixed',
        // top: '67vh',
        // marginTop:"20vh",
    },
    loading: {
        width: '50px',
    },

}));

function NavBar(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const { history } = props;
    const itemsList = [
        {
            text: 'Project',
            icon: <Avatar variant='rounded' className={classes.rounded}>
                Pr
                  </Avatar>,
            onClick: () => history.push('/dashboard'),
        },
        {
            text: 'Dashboard',
            icon: <DashboardIcon className={classes.icon} />,
            onClick: () => history.push('/dashboard/overview'),
        },
        {
            text: 'New Article',
            icon: <CreateIcon className={classes.icon} />,
            onClick: () => history.push('/dashboard/new-article'),
        },
        {
            text: 'Article',
            icon: <FileCopyIcon className={classes.icon} />,
            onClick: () => history.push('/dashboard/articles'),
        },

    ];

    const itemsList2 = [
        {
            text: 'Settings',
            icon: <TuneIcon className={classes.icon} />,
            onClick: () => history.push('/dashboard/settings'),
        },
        {
            text: 'Articlone API',
            icon: <DescriptionIcon className={classes.icon} />,
            onClick: () => history.push('/dashboard/api'),
        },
        {
            text: 'Collaborate',
            icon: <GroupIcon className={classes.icon} />,
            onClick: () => history.push('/dashboard/collaborate'),
        },
        {
            text: 'Username',
            icon: <Avatar alt="Remy Sharp" src={assets.user} />,
            onClick: () => {return handleClick},
        },
    ];
    const user = useSelector(state => state.auth.user);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose} >
                        <img src={assets.loading} className={classes.loading} alt="sorry" />
                    </IconButton>
                </div>
                <div className="nav">
                    <div className="top">
                        <List>
                            {itemsList.map((item, index) => {
                                const { text, icon, onClick } = item;
                                return (
                                    <ListItem button key={text} onClick={onClick} >
                                        {icon && <ListItemIcon> {icon} </ListItemIcon>}
                                        <ListItemText primary={text} />
                                    </ListItem>
                                )
                            })}
                        </List>
                    </div>
                    <div className={classes.bottom}>
                        <List>
                            {itemsList2.map((item, index) => {
                                const { text, icon, onClick } = item;
                                return (
                                    <ListItem button key={text} onClick={onClick} >
                                        {icon && <ListItemIcon> {icon} </ListItemIcon>}
                                        <ListItemText primary={text} />
                                    </ListItem>
                                )
                            })}
                        </List>
                    </div>
                </div>
            </Drawer>
            <div>
                {/* <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    Open Menu
                </Button> */}
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Settings</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
            </div>
        </div>
    );
}

export default withRouter(NavBar);
