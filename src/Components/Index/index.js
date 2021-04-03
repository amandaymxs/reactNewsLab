import '../../index.css';
import React, { useState } from 'react';
import Article from './article';
import Tweet from './tweet';
// import TickerTape from './tickerTape';
import { MuiThemeProvider, Grid, Box, Card, CardHeader, CardActions, Button, CardContent, makeStyles, List } from '@material-ui/core';
import theme from '../../theme';
import useInterval from '../../Utilities/useInterval';

const style = makeStyles({
    bodyGrid: {
        justifyContent: 'center',
    },
    cardActions: {
        padding: '1em 3em',
    },
    tickerTapeContainer: {
        width: '80%',
        justifyContent: 'center',
        borderTop: `1px solid ${theme.palette.primary.contrastText}`,
        borderBottom: `1px solid ${theme.palette.primary.contrastText}`,
        margin: '1.8em auto',
    },
    tweetCardContent: {
        padding: '0.5em 0',
    },
})

function Home() {
    const [delay, setDelay] = useState(10000);
    const [count, setCount] = useState(0);
    const classes = style();

    useInterval(() => {
        // Your custom logic here
        setCount(count + 1);
    }, 1000);

    // console.log(count);

    return (

        < MuiThemeProvider theme={theme} >
            <Box>
                <List className={classes.tickerTapeContainer}>
                    {/* <TickerTape data={Data.tickerTape} /> */}
                </List>
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
                                <Article delay={delay} />
                            </CardContent>
                            <CardActions className={classes.cardActions}>
                                <Button variant="text" color="secondary">Load More</Button>
                            </CardActions >
                        </Card>
                    </Grid>
                    <Grid item xs={3} order={2}>
                        <Card>
                            <CardHeader title="Latest News Tweets" />
                            <CardContent className={classes.tweetCardContent}>
                                <Tweet delay={delay} />
                            </CardContent>
                            <CardActions className={classes.cardActions}>
                                <Button variant="text" color="secondary">View More</Button>
                            </CardActions >
                        </Card>
                    </Grid>
                </Grid>
            </Box >
        </MuiThemeProvider >
    );
}

export default Home;


