import React, { Fragment, useState } from 'react';
import Article from './article';
import Tweet from './tweet';
import { Grid, Box } from '@material-ui/core';
import Data from '../../data.json';


function Home() {

    return (
        <Fragment>
            <Grid container p={2} justify="center" direction="row" width="80%">
                <Grid item xs={5} order={1} m={2}>
                    <Box bgcolor="transparent" p={4}>
                        <h1>Latest News Articles</h1>
                        <ul>
                            <Article />
                        </ul>
                    </Box>
                </Grid>
                <Grid item xs={3} order={2} m={3}>
                    <Box bgcolor="transparent" p={4}>
                        <h1>Latest News Tweets</h1>
                        <Tweet />
                    </Box>
                </Grid>
            </Grid>
        </Fragment >
    );
}

export default Home;