import React, { Component } from 'react';
import { Card, CardContent, CardActions, Box, Button, Typography, MuiThemeProvider, Grid, withStyles } from '@material-ui/core';
import theme from '../../theme';
import SentimentScore from './sentimentScore';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const styles = {
    articleCard: {
        backgroundColor: theme.palette.primary.dark,
        padding: '1.2em',
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
                {data.map((article) => {
                    return (
                        <Grid item style={{ width: '100%' }}>
                            <Card
                                key={article.id}
                                classes={{ root: classes.articleCard }}
                            >
                                <CardContent>
                                    <Box display="flex" justifyContent="space-between">
                                        <Box>
                                            <Typography component="h5" variant="h5" display="inline">{article.time}</Typography>
                                        </Box>
                                        <Box>
                                            <SentimentScore data={article.sentimentScore} title="Sentiment Score" intSize={13} />
                                        </Box>
                                    </Box>
                                    <Typography component="h3" variant="h3">{article.title}</Typography>
                                </CardContent>
                                <CardActions classes={{ root: classes.cardAction }}>
                                    <Button
                                        variant="contained"
                                        size="large"
                                        href={article.link}
                                        endIcon={<ArrowRightIcon fontSize="small" />}
                                    >
                                        {article.source}
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    )
                })}
            </MuiThemeProvider >
        )
    }
}

export default withStyles(styles)(ArticleLarge);



