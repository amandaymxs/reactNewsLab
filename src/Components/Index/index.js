import '../../index.css';
import React from 'react';
import Article from './article';
import Tweet from './tweet';
import { MuiThemeProvider, Grid, Box, Card, CardHeader, CardActions, Button, CardContent } from '@material-ui/core';
import theme from '../../theme';

const Home = () => {
    return (
        <MuiThemeProvider theme={theme}>
            <Box pt={5}>
                <Grid
                    container
                    direction="row"
                    width="80%"
                    spacing={6} >
                    <Grid
                        item
                        xs={6}
                        order={1}>
                        <Card>
                            <CardHeader
                                title="Latest News Articles"
                            ></CardHeader>
                            <CardContent>
                                <Article />
                            </CardContent>
                            <CardActions style={{ padding: '1em 3em' }}>
                                <Button variant="text" color="secondary">Load More</Button>
                            </CardActions >
                        </Card>
                    </Grid>
                    <Grid item xs={4} order={2}>
                        <Card>
                            <CardHeader
                                title="Latest News Tweets"
                            ></CardHeader>
                            <CardContent>
                                <Tweet />
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box >
        </MuiThemeProvider>
    );
}

export default Home;


