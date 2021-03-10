import React from 'react';
import { Grid, Avatar, MuiThemeProvider, Button, Typography } from '@material-ui/core';
import Data from '../../data.json';
import theme from '../../theme';
import SentimentScore from './sentimentScore';

function Tweet() {
    return (
        <MuiThemeProvider theme={theme}>
            {Data.tweets.map((tweet) => {
                return (
                    <Grid container direction="row" style={{ marginBottom: '1.8rem' }}>
                        <Grid item xs={2} style={{ alignSelf: "center", marginRight: '0.8rem' }}>
                            <Avatar alt={tweet.source} src={tweet.avatar} />
                        </Grid>
                        <Grid container item xs={9} direction="column" spacing={0.5}>
                            <Grid item>
                                <Typography variant="subtitle1">@{tweet.source}</Typography>
                            </Grid>
                            <Grid item>
                                <SentimentScore data={tweet.sentimentScore} title='Sentiment Score' intSize='0.7rem' />
                            </Grid>
                            <Grid item>
                                <Typography variant="body1">
                                    {tweet.text}
                                </Typography>
                            </Grid>
                            <Grid item style={{ marginTop: '0.3rem', alignSelf: 'flex-end', paddingRight: '5%' }}>
                                <Button
                                    variant="contained"
                                    size="small"
                                    href={tweet.link}>View</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                )
            })}
        </MuiThemeProvider >
    )
}

export default Tweet;