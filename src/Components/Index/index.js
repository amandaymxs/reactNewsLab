import '../../index.css';
import React from 'react';
import Article from './article';
import Tweet from './tweet';
import { MuiThemeProvider, Grid, Box, Card, CardHeader, CardActions, Button, CardContent, makeStyles } from '@material-ui/core';
import theme from '../../theme';
import Data from '../../data.json';

const style = makeStyles({
    bodyGrid: {
        justifyContent: 'center',
    },
    articleCardActions: {
        padding: '1em 3em',
    },
    tweetCardContent: {
        padding: '1rem 0',
    },
})

function Home() {
    const classes = style();
    return (
        <MuiThemeProvider theme={theme}>
            <Box pt={5}>
                <Grid
                    container
                    direction="row"
                    width="80%"
                    spacing={6}
                    className={classes.bodyGrid}
                >
                    <Grid
                        item
                        xs={6}
                        order={1}>
                        <Card>
                            <CardHeader title="Latest News Articles" />
                            <CardContent>
                                <Article data={Data.articles} />
                            </CardContent>
                            <CardActions className={classes.articleCardActions}>
                                <Button variant="text" color="secondary">Load More</Button>
                            </CardActions >
                        </Card>
                    </Grid>
                    <Grid item xs={3} order={2}>
                        <Card>
                            <CardHeader title="Latest News Tweets" />
                            <CardContent className={classes.tweetCardContent}>
                                <Tweet data={Data.tweets} />
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box >
        </MuiThemeProvider >
    );
}

export default Home;


