import React, { Component } from 'react';
import { Box, Button, MuiThemeProvider, Typography, Card, CardContent, CardActions } from '@material-ui/core';
import Data from '../../data.json';
import theme from '../../theme';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import SentimentScore from './sentimentScore';

class Article extends Component {
    render() {
        const sliceNum = 6;
        const maxNewsNum = 10;
        let boxData = Data.articles.slice(0, sliceNum);
        let textData = Data.articles.slice(sliceNum, maxNewsNum);

        return (
            <MuiThemeProvider theme={theme}>
                <CardContent>
                    {boxData.map((article) => {
                        return (
                            <Card
                                key={article.id}
                                style={{ backgroundColor: theme.palette.primary.dark }}
                            >
                                {/* <CardActionArea> */}
                                < CardContent >
                                    <Box display="flex" justifyContent="space-between">
                                        <Box>
                                            <Typography component="h6" variant="h6">{article.date}  </Typography>
                                            <Typography component="h6" variant="h6">   {article.time}</Typography>
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
                    })
                    }
                    {
                        textData.map((article) => {
                            return (
                                <Box
                                    key={article.id}
                                    display="flex"
                                    flexDirection="row"
                                    bgcolor="#0F171A"
                                    marginBottom={4}
                                    borderRadius={15}
                                >
                                    <Box
                                        key={article.id}
                                        display="flex"
                                        flexDirection="column"
                                        marginRight={7}
                                    >
                                        <Typography align="right">{article.source}</Typography>
                                        <Typography component="h6" variant="h6" align="right">{article.date}</Typography>
                                        <Typography component="h6" variant="h6" align="right">{article.time}</Typography>
                                    </Box>
                                    <Box>
                                        <Button
                                            variant="text"
                                            size="small"
                                            href={article.link}
                                        >
                                            {article.title}
                                        </Button>
                                    </Box>
                                </Box>
                            )
                        })
                    }
                </CardContent >
            </MuiThemeProvider >
        );
    }
}

export default Article;


// const date = () => {
//     const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//     const getWeekday = new Date().getDay();
//     const getMonth = new Date().getMonth();
//     const weekday = weekdays[getWeekday];
//     const month = months[getMonth];

//     return (weekday + ' ' + new Date().getDate() + ' ' + month + ' ' + new Date().getFullYear() + ' ' + new Date().getHours() + ':' + new Date().getMinutes())
// }