import '../../index.css';
import React from 'react';
import Article from './article';
import Tweet from './tweet';
import { Grid, Box, Typography, makeStyles, Card, CardHeader, CardContent, CardActions, CardActionArea } from '@material-ui/core';
import PTSans from '../../fonts/PTSans-Regular.ttf'

const useStyles = makeStyles((localTheme) => ({
    sectionContainer: {
        background: '#2B3336',
        padding: 20,
    }
}));

const Home = () => {
    const classes = useStyles();
    return (
        <Box component="div" pt={5}>
            <Grid container justify="center" direction="row" width="80%" spacing="6">
                <Grid item xs={6} order={1}>
                    <Card component="div" className={classes.sectionContainer}>
                        <CardHeader
                            title="Latest News Articles"
                            fontSize={18}
                            fontFamily="PTSans"
                            fontWeight={800}
                        ></CardHeader>
                        <Article />
                        <CardActions >
                            Load More
                        </CardActions >
                    </Card>
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


