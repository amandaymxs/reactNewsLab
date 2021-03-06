import React, { Component } from 'react';
import { Box, Link, Button, MuiThemeProvider, Typography, Card, CardActions, CardContent } from '@material-ui/core';
import Data from '../../data.json';
import theme from '../../theme';
import Timestamp from './timestamp';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

class Article extends Component {
    render() {
        const sliceNum = 6;
        const maxNewsNum = 10;
        let boxData = Data.articles.slice(0, sliceNum);
        let textData = Data.articles.slice(sliceNum, maxNewsNum);
        return (
            <MuiThemeProvider theme={theme}>
                <Box display="flex" flexDirection="column">
                    {boxData.map((article, index) => {
                        return (
                            <Box
                                key={article.id}
                                bgcolor="#0F171A"
                                marginBottom={4}
                                borderRadius={15}
                                padding={2}
                                color="#f4f4f4"
                            >
                                <Timestamp data={article} />
                                <Typography component="h3" variant="h3">{article.title}</Typography>
                                <Button
                                    variant="contained"
                                    size="large"
                                    href={article.link}
                                    endIcon={<ArrowRightIcon fontSize="small" />}
                                >
                                    {article.source.toUpperCase()}
                                </Button>
                            </Box>
                        )
                    })}
                    {textData.map((article, index) => {
                        return (
                            <Box key={article.id} display="flex" flexDirection="row">
                                <Box display="flex" flexDirection="column">
                                    <Box>{article.source.toUpperCase()}</Box>
                                    <Timestamp data={article} />
                                </Box>
                                <Box>
                                    <Box component={Link} to={article.link}>{article.title}</Box>
                                </Box>
                            </Box>
                        )
                    })
                    }
                </Box >
            </MuiThemeProvider >
        );
    }
}

export default Article;
