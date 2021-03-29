import React from 'react';
import { makeStyles, MuiThemeProvider, Button, Typography } from '@material-ui/core';
import theme from '../theme';

const styles = makeStyles({
    root: {
        display: 'flex',
        height: '6em',
        backgroundColor: `${theme.palette.primary.light}`,
        alignItems: 'flex-end',
    },
    returnTopButton: {
        backgroundColor: `${theme.palette.primary.dark}`,
        color: `${theme.palette.primary.contrastText}`,
        borderRadius: 0,
        marginRight: '5%',
    },
    rightContainer: {
        display: 'flex',
        width: '20%'
    },
    leftText: {
        marginLeft: '1em',
    },
    rightText: {
        alignSelf: 'flex-end',
    }
})

function Footer() {
    const classes = styles();
    return (
        <MuiThemeProvider theme={theme}>
            <div className={classes.root}>
                <Typography
                    // component='subtitle1'
                    className={classes.leftText}>Privacy Policy | Terms of Use</Typography>
                <div className={classes.rightContainer}>
                    <Typography
                        //  component='subtitle1' 
                        className={classes.rightText}>Copyright &#169; News Lab</Typography>
                    <Button variant='contained' className={classes.returnTopButton}>Return to top of page</Button>
                </div>
            </div>
        </MuiThemeProvider >
    );
}

export default Footer;