import '../../index.css';
import React, { Component, Fragment } from 'react';
import Article from './article';
import Tweet from './tweet';
import { ThemeProvider, Grid, Box } from '@material-ui/core';
import theme from '../../theme';

class Home extends Component {
    render() {
        return (
            <Fragment>
                <ThemeProvider theme={theme}>
                    <Grid container p={1} justify="center" direction="row" width="80%" spacing="6">
                        <Grid item xs={5} order={1}>
                            <Box bgcolor="primary.main" p={4} mt={4}>
                                <h1 className="heading">Latest News Articles</h1>
                                <Article />
                            </Box>
                        </Grid>
                        <Grid item xs={3} order={2}>
                            <Box bgcolor="primary.main" p={4} mt={4}>
                                <h1 className="heading">Latest News Tweets</h1>
                                <Tweet />
                            </Box>
                        </Grid>
                    </Grid>
                </ThemeProvider>
            </Fragment >
        );
    }
}

export default Home;
