import React, { Component } from 'react';
import { Grid, Button, Typography, MuiThemeProvider, withStyles, Divider } from '@material-ui/core';
import theme from '../../theme';
import SentimentScore from './sentimentScore';

const styles = {
    articleContainer: {
        justifyContent: 'center',
        marginBottom: '0.5em',
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
                <Grid item>
                    {data.map(article => {
                        return (
                            <div>
                                <Grid
                                    key={article.id}
                                    container
                                    spacing={3}
                                    classes={{ root: classes.articleContainer }}
                                >
                                    <Grid
                                        container
                                        item
                                        order={1}
                                        direction="column"
                                        xs={2}
                                        align="right"
                                    >
                                        <Grid item><Typography component="h6" variant="h6" classes={{ root: classes.articleSource }}>{article.source}</Typography></Grid>
                                        <Grid item><SentimentScore data={article.sentimentScore} title="S/S" intSize={10} /></Grid>
                                        <Grid item><Typography component="h6" variant="h6">{article.time}</Typography></Grid>
                                    </Grid>

                                    <Grid item order={2} xs={8}>
                                        <Button variant="text" size="small" href={article.link}>
                                            {article.title}
                                        </Button>
                                    </Grid>
                                </Grid>
                                <Divider variant="middle" />
                            </div>
                        )
                    })}
                </Grid>
            </MuiThemeProvider>
        )
    }
}

export default withStyles(styles)(ArticleSmall);

