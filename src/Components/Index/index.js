import '../../index.css';
import React, { Component, Fragment } from 'react';
import Article from './article';
import Tweet from './tweet';
import { Grid, Box } from '@material-ui/core';


class Home extends Component {
    render() {
        return (
            <Fragment>
                <Grid container p={2} justify="center" direction="row" width="80%">
                    <Grid item xs={5} order={1} m={2}>
                        <Box bgcolor="transparent" p={4}>
                            <h1 className="heading">Latest News Articles</h1>
                            <Article />
                        </Box>
                    </Grid>
                    <Grid item xs={3} order={2} m={3}>
                        <Box bgcolor="transparent" p={4}>
                            <h1 className="heading">Latest News Tweets</h1>
                            <Tweet />
                        </Box>
                    </Grid>
                </Grid>
            </Fragment >
        );
    }
}

export default Home;
