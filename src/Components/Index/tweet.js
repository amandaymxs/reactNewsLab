import React, { useState } from 'react';
import { Grid, Avatar, MuiThemeProvider, Button, Typography, Divider, makeStyles } from '@material-ui/core';
import theme from '../../theme';
import SentimentScore from './sentimentScore';
import avatar from '../../avatar.json';
import useFetch from '../../Utilities/useFetch';

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

const Tweet = (props) => {
    const { delay } = props;
    const classes = style();

    const [size, setSize] = useState('10');

    const { queryItems: tweetItems, isPending } = useFetch('tweets', 'timestamp:desc', size, delay);

    const displayTweets = () => {
        if (isPending) {
            return <p> Loading page...</p>
        }
        return (
            tweetItems.map((tweetItem) => {
                return (
                    <div>
                        <Grid container direction="row" className={classes.tweetsContainer}>
                            <Grid xs={2} className={classes.tweetAvatarGrid}>
                                <Avatar alt={tweetItem._source.username} src={avatar[tweetItem._source.username]} />
                            </Grid>
                            <Grid container item xs={9} direction="column" spacing={1}>
                                <Grid>
                                    <Typography
                                    //  component="subtitle1"
                                    >@{tweetItem._source.username}</Typography>
                                </Grid>
                                <Grid>
                                    <SentimentScore score={tweetItem._source.sentiment_score} sentiment={tweetItem._source.sentiment} title='S/S ' intSize={11} />
                                </Grid>
                                <Grid>
                                    <Typography variant="body1">
                                        {tweetItem._source.tweet}
                                    </Typography>
                                </Grid>
                                <Grid className={classes.tweetButtonGrid}>
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
            })
        )
    }

    return (
        <MuiThemeProvider theme={theme}>
            {displayTweets()}
        </MuiThemeProvider >
    )
}


export default Tweet;