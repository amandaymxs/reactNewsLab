import React, { useEffect, useState, useRef } from 'react';
import { Grid, Avatar, MuiThemeProvider, Button, Typography, Divider, makeStyles } from '@material-ui/core';
import theme from '../../theme';
import SentimentScore from './sentimentScore';
import avatar from '../../avatar.json';

const style = makeStyles({
    tweetsContainer: {
        marginBottom: '1rem',
        justifyContent: 'space-evenly'
    },
    tweetAvatarGrid: {
        alignSelf: "start",
        marginRight: '0.8rem'
    },
    tweetButtonGrid: {
        marginTop: '0.3rem',
        alignSelf: 'flex-end',
        paddingRight: '5%',
    },
})

const Tweet = () => {
    const classes = style();

    const [tweetItems, setTweetItems] = useState([]);
    const [size, setSize] = useState('6');

    useEffect(() => {
        fetch(`http://35.203.53.106:8607/tweets/_search?sort=timestamp:desc&size=${size}`)
            .then(response => response.json())
            .then(json => setTweetItems(json.hits.hits))
            .catch(error => console.log('Error:', error))
    }, [])

    return (
        <MuiThemeProvider theme={theme}>
            {tweetItems.map((tweetItem) => {
                return (
                    <div>
                        <Grid container item direction="row" className={classes.tweetsContainer}>
                            <Grid item xs={2} className={classes.tweetAvatarGrid}>
                                <Avatar alt={tweetItem._source.username} src={avatar[tweetItem._source.username]} />
                            </Grid>
                            <Grid container item xs={9} direction="column" spacing={1}>
                                <Grid item>
                                    <Typography
                                    //  component="subtitle1"
                                    >@{tweetItem._source.username}</Typography>
                                </Grid>
                                <Grid item>
                                    <SentimentScore score={tweetItem._source.sentiment_score} sentiment={tweetItem._source.sentiment} title='Sentiment Score' intSize={11} />
                                </Grid>
                                <Grid item>
                                    <Typography variant="body1">
                                        {tweetItem._source.tweet}
                                    </Typography>
                                </Grid>
                                <Grid item className={classes.tweetButtonGrid}>
                                    <Button
                                        variant="contained"
                                        size="small"
                                        href={tweetItem._source.link}>View</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Divider />
                    </div>
                )
            })}
        </MuiThemeProvider >
    )
}


export default Tweet;