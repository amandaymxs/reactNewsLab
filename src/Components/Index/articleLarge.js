import React, { Component } from 'react';
import { Card, CardContent, CardActions, Box, Button, Typography, MuiThemeProvider } from '@material-ui/core';
import theme from '../../theme';
import SentimentScore from './sentimentScore';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

class ArticleLarge extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data
        }
    }
    render() {
        const { data } = this.state;
        return (
            <MuiThemeProvider theme={theme}>
                {data.map((article) => {
                    return (
                        <Card
                            key={article.id}
                            style={{
                                backgroundColor: theme.palette.primary.dark,
                                padding: '1.2em',
                            }}
                        >
                            {/* <CardActionArea> */}
                            <CardContent>
                                <Box display="flex" justifyContent="space-between">
                                    <Box>
                                        <Typography component="h5" variant="h5" display="inline">{article.date}  </Typography>
                                        <Typography component="h5" variant="h5" display="inline">   {article.time}</Typography>
                                    </Box>
                                    <Box>
                                        <SentimentScore data={article.sentimentScore} />
                                    </Box>
                                </Box>
                                <Typography component="h3" variant="h3">{article.title}</Typography>
                            </CardContent>
                            <CardActions
                                style={{
                                    width: "97%",
                                    justifyContent: "flex-end"
                                }}
                            >
                                <Button
                                    variant="contained"
                                    size="large"
                                    href={article.link}
                                    endIcon={<ArrowRightIcon fontSize="small" />}
                                >
                                    {article.source}
                                </Button>
                            </CardActions>
                            {/* </CardActionArea> */}
                        </Card>
                    )
                })}
            </MuiThemeProvider>
        )
    }
}

export default ArticleLarge;



