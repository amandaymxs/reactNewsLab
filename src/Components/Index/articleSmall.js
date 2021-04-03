import React, { Component } from 'react';
import { Grid, Button, Typography, MuiThemeProvider, withStyles } from '@material-ui/core';
import dateformat from 'dateformat';
import theme from '../../theme';
import SentimentScore from './sentimentScore';

const styles = {
    articleContainer: {
        justifyContent: 'space-evenly',
        margin: 'auto',
        padding: '0.8em',
        borderBottom: '0.1em solid grey',
        width: '90%'
    },
    articleSource: {
        fontSize: '1em',
        fontWeight: '600',
        color: theme.palette.info.main,
        fontStyle: 'italic'
    }
}

class ArticleSmall extends Component {
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
                {data.map(article => {
                    return (
                        <>
                            <Grid
                                key={article._id}
                                container
                                spacing={3}
                                classes={{ root: classes.articleContainer }}
                            >
                                <Grid
                                    container
                                    order={1}
                                    direction="column"
                                    xs={2}
                                    align="right"
                                    style={{ margin: 'auto' }}
                                >
                                    <Grid item><Typography component="h6" variant="h6" classes={{ root: classes.articleSource }}>{article._source.article_source}</Typography></Grid>
                                    <Grid item><SentimentScore score={article._source.sentiment_score} sentiment={article._source.sentiment} title="S/S" intSize={10} /></Grid>
                                    <Grid item><Typography component="h6" variant="h6">{dateformat(article._source.published_datetime, "h:MM TT")}</Typography></Grid>
                                    <Grid item><Typography component="h6" variant="h6">{dateformat(article._source.published_datetime, "mmmm dS, yyyy")}</Typography></Grid>
                                </Grid>

                                <Grid order={2} xs={8} style={{ margin: 'auto' }}>
                                    <Button variant="text" size="small" href={article._source.link}>
                                        {article._source.title}
                                    </Button>
                                </Grid>
                            </Grid>
                        </>
                    )
                })}
            </MuiThemeProvider>
        )
    }
}

export default withStyles(styles)(ArticleSmall);
