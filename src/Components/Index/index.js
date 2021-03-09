import '../../index.css';
import React from 'react';
import Article from './article';
import Tweet from './tweet';
import { MuiThemeProvider, Grid, Box, Card, CardHeader, CardActions } from '@material-ui/core';
import PTSans from '../../fonts/PTSans-Regular.ttf'
import theme from '../../theme';

const Home = () => {
    return (
        <MuiThemeProvider theme={theme}>
            <Box pt={5}>
                <Grid container justify="center" direction="row" width="80%" spacing={6} >
                    <Grid item xs={6} order={1} >
                        <Card style={{ backgroundColor: theme.palette.primary.light, display: 'flex', flexDirection: 'column', justifyContent: 'center' }} >
                            <CardHeader
                                title="Latest News Articles"
                                fontSize={18}
                                fontFamily={PTSans}
                                fontWeight={800}
                            ></CardHeader>
                            <Article />
                            <CardActions >
                                Load More
                        </CardActions >
                        </Card>
                    </Grid>
                    <Grid item xs={3} order={2}>
                        <Card style={{ backgroundColor: theme.palette.primary.light }}>
                            <CardHeader
                                title="Latest News Tweets"
                                fontSize={18}
                                fontFamily="PTSans"
                                fontWeight={800}
                            ></CardHeader>
                            <Tweet />
                        </Card>
                    </Grid>
                </Grid>
            </Box >
        </MuiThemeProvider>
    );
}

export default Home;


