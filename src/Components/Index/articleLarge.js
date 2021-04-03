import React, { Component } from 'react';
import { Card, CardContent, CardActions, Button, Typography, MuiThemeProvider, Grid, withStyles } from '@material-ui/core';
import dateformat from 'dateformat';
import theme from '../../theme';
import SentimentScore from './sentimentScore';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const styles = {

    bodyContainer: {
        marginBottom: '1.5em',
    },
    articleCard: {
        backgroundColor: theme.palette.primary.dark,
        padding: '1.2em',
        width: '100%',
    },
    cardAction: {
        width: "98.5%",
        justifyContent: "flex-end"
    },
}

class ArticleLarge extends Component {
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
                <div className={classes.bodyContainer}>
                    {data.map((article) => {
                        return (<Card
                            key={article._id}
                            classes={{ root: classes.articleCard }}
                        >
                            <CardContent>
                                <Grid container style={{ justifyContent: 'space-between' }}>
                                    <Grid item order={1}>
                                        <Typography component="h5" variant="h5" display="inline">{dateformat(article._source.published_datetime, "mmmm dS, yyyy, h:MM:ss TT")}</Typography>
                                    </Grid>
                                    <Grid item order={2}>
                                        <SentimentScore score={article._source.sentiment_score} sentiment={article._source.sentiment} title="Sentiment Score" intSize={13} />
                                    </Grid>
                                </Grid>
                                <Typography component="h3" variant="h3">{article._source.title}</Typography>
                            </CardContent>
                            <CardActions classes={{ root: classes.cardAction }}>
                                <Button
                                    variant="contained"
                                    size="large"
                                    href={article._source.link}
                                    endIcon={<ArrowRightIcon fontSize="small" />}
                                    style={{ letterSpacing: '0.1em' }}
                                >
                                    {article._source.article_source}
                                </Button>
                            </CardActions>
                        </Card>
                        )
                    })}
                </div>
            </MuiThemeProvider >
        )
    }
}

export default withStyles(styles)(ArticleLarge);


