import React from 'react';
import { Link } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import InputBase from '@material-ui/core/InputBase';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles, useTheme } from '@material-ui/core/styles';

import { useSelector } from "react-redux";

import { assets } from '../../theme'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        height: '70px',
        boxShadow: 'none',
    },
    menuButton: {
        marginRight: theme.spacing(0),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
        marginLeft: '1vw',
    },
    toolbar: {
        height: '6px',
    },
    drawerPaper: {
        width: drawerWidth,
        marginTop: '70px',
        [theme.breakpoints.down("xs")]: {
            marginTop: '0px',
        },
    },
    logoicon: {
        flexGrow: 1,
        marginTop: '6px',
        marginLeft: '1vw',
        [theme.breakpoints.down("xs")]: {
            marginLeft: '0px',
        },
    },
    logo: {
        width: '180px',
        height: '54px',
    },
    topspace: {
        paddingTop: '5px',
        height: '70px',
        display: 'none',
        [theme.breakpoints.down("xs")]: {
            display: 'block',
        },
    },
    navicon: {
        flexGrow: 1,
        marginTop: '6px',
        marginLeft: '5vw',
    },
    navlogo: {
        width: '180px',
        height: '54px',
        [theme.breakpoints.down("xs")]: {
            width: '150px',
            height: '47px',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
        [theme.breakpoints.down("xs")]: {
            display: 'none',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    login: {
        boxShadow: 'none',
        textTransform: 'initial',
        "&:hover": {
            boxShadow: 'none',
        },
    },
    signup: {
        textTransform: 'initial',
        marginLeft: '12px',
        [theme.breakpoints.up("md")]: {
            marginRight: '1vw',
        },
        [theme.breakpoints.down("750")]: {
            display: 'none'
        },
        [theme.breakpoints.down("xs")]: {
            display: 'none'
        },
    },
    listitem: {
        paddingLeft: '2.5vw',
    }
}));

function Header(props) {
    const { window } = props;
    const user = useSelector(state => state.auth.user);
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <div className={classes.topspace} >
                <div className={classes.navicon}>
                    <img src={assets.logo} alt="sorry!" className={classes.navlogo} />
                </div>
                <div className={classes.toolbar} />
                <Divider />
            </div>
            <List >
                <ListItem button component={Link} to='/docs/getting-started' className={classes.listitem} >
                    <ListItemText primary="Get Started" />
                </ListItem>
                <ListItem button component={Link} to='/docs/key-concepts' className={classes.listitem} >
                    <ListItemText primary="Key Concepts" />
                </ListItem>
                <ListItem button component={Link} to='/docs/api-ref' className={classes.listitem} >
                    <ListItemText primary="API References" />
                </ListItem>
                <ListItem button component={Link} to='/docs/articlone-cms' className={classes.listitem} >
                    <ListItemText primary="Articlone CMS" />
                </ListItem>
                <ListItem button component={Link} to='/docs/features' className={classes.listitem} >
                    <ListItemText primary="Features" />
                </ListItem>
                <ListItem button component={Link} to='/docs/contact-us' className={classes.listitem} >
                    <ListItemText primary="Contact" />
                </ListItem>
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div className={classes.logoicon}>
                        <Link to="/">
                            <img src={assets.whiteLogo} alt="articlone icon" className={classes.logo} />
                        </Link>
                    </div>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <div className="btn">
                        {!user && (
                            <>
                                <Button color="primary" variant="contained" component={Link} to="/login" className={classes.login} >Login</Button>
                                <Button color="secondary" variant="outlined" component={Link} to="/signup" className={classes.signup} >Sign up</Button>
                            </>
                        )}

                    </div>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true,
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
        </div>
    );
}

export default Header;
