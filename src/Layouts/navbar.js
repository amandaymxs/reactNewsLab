import '../index.css';
import React from 'react';
import { MuiThemeProvider, AppBar, Toolbar, Button, Typography, IconButton } from '@material-ui/core';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import { Link } from 'react-router-dom';
import theme from '../theme';


const Navbar = () => {
    return (
        <MuiThemeProvider theme={theme}>
            <AppBar elevation={0}>
                <Toolbar>
                    <IconButton edge="start" aria-label="menu">
                        <MenuRoundedIcon fontSize="large" />
                    </IconButton>
                    <Typography component={Link} to="/" variant="h1">
                        News Lab
                        </Typography>
                    <Button variant="text">Login</Button>
                    <Button variant="contained" color="primary"> Subscribe</Button>
                </Toolbar>
            </AppBar>
        </MuiThemeProvider >
    );
}

export default Navbar;