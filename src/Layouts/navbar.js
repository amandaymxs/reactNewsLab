import '../index.css';
import React from 'react';
import { AppBar, Toolbar, Box, Button, Typography, IconButton, makeStyles } from '@material-ui/core';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import { Link } from 'react-router-dom';
import Montserrat from './../fonts/Montserrat-Bold.ttf'
import Ubuntu from './../fonts/Ubuntu-Regular.ttf'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: 'inherit',
        boxShadow: 'none'
    },
    title: {
        flexGrow: 1,
        fontFamily: Montserrat,
        fontSize: 45,
        fontWeight: 800,
        textDecoration: 'none',
        color: 'inherit',
    },
    loginButton: {
        color: 'inherit',
        textTransform: "none",
    },
    subscribeButton: {
        color: 'inherit',
        background: 'linear-gradient(135deg, #202D32 20%, #0F171A 90%)',
        fontFamily: Ubuntu,
        borderRadius: 10,
        textTransform: 'none',
    },
}));

const Navbar = () => {
    const classes = useStyles();

    return (
        <Box component="div" className={classes.root}>
            <AppBar elevation={0} position="sticky" >
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} aria-label="menu">
                        <MenuRoundedIcon fontSize="large" />
                    </IconButton>
                    <Typography component={Link} to="/" variant="h2" className={classes.title}>
                        News Lab
                        </Typography>
                    {/* <ul className="nav-list">
                        <Link to="/" className="nav-link"><li className="nav-item">Home</li></Link>
                        <Link to="/news" className="nav-link"><li className="nav-item">News</li></Link>
                        <Link to="/about" className="nav-link"><li className="nav-item">About</li></Link>
                        <Link to="/contact" className="nav-link"><li className="nav-item">Contact</li></Link>
                    </ul> */}
                    <Button variant="text" className={classes.loginButton}>Login</Button>
                    <Button variant="contained" className={classes.subscribeButton}> Subscribe</Button>
                </Toolbar>
            </AppBar>
        </Box >
    );
}

export default Navbar;