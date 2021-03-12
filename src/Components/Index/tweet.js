import React, { Component } from 'react';
import { Grid, Avatar, MuiThemeProvider, Button, Typography, withStyles, Divider } from '@material-ui/core';
import theme from '../../theme';
import SentimentScore from './sentimentScore';

const styles = {
    tweetsContainer: {
        maxHeight: '20rem',
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
}

class Tweet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data
        }
    }
    render() {
        const { data } = this.state;
        const { classes } = this.props;
        return (
            <MuiThemeProvider theme={theme}>
                {data.map((tweet) => {
                    return (
                        <div>
                            <Grid container item direction="row" classes={{ root: classes.tweetsContainer }}>
                                <Grid item xs={2} classes={{ root: classes.tweetAvatarGrid }}>
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
                                    <Grid item classes={{ root: classes.tweetButtonGrid }}>
                                        <Button
                                            variant="contained"
                                            size="small"
                                            href={tweet.link}>View</Button>
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
}

export default withStyles(styles)(Tweet);