import '../../index.css';
import React from 'react';
import Article from './article';
import Tweet from './tweet';
import { Grid, Box, Typography, makeStyles } from '@material-ui/core';
import PTSans from '../../fonts/PTSans-Regular.ttf'

const useStyles = makeStyles((localTheme) => ({
    h2: {
        fontSize: 18,
        fontFamily: PTSans,
        fontWeight: 600,
        color: 'inherit',
        textAlign: 'left',
        marginBottom: 35,
    },
    sectionContainer: {
        background: '#2B3336',
        padding: 30,
        borderRadius: 20,
    }
}));

const Home = () => {
    const classes = useStyles();
    return (
        <Box component="div" pt={5}>
            <Grid container justify="center" direction="row" width="80%" spacing="6">
                <Grid item xs={6} order={1}>
                    <Box component="div" className={classes.sectionContainer}>
                        <Typography component='h2' variant='h3' className={classes.h2}>Latest News Articles</Typography>
                        <Article />
                    </Box>
                </Grid>
                <Grid item xs={3} order={2}>
                    <Box component="div" className={classes.sectionContainer}>
                        <Typography component='h2' variant='h3' className={classes.h2}>Latest News Tweets</Typography>
                        <Tweet />
                    </Box>
                </Grid>
            </Grid>
        </Box >
    );
}

export default Home;


