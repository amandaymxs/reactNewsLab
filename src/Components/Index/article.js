import React, { Component } from 'react';
import { Box, Link, Button } from '@material-ui/core';
import { ThemeProvider } from "@material-ui/styles";        //???????
import Data from '../../data.json';
import theme from '../../theme';
import ArticleDateTime from './articleDateTime';

class Article extends Component {
    render() {
        const sliceNum = 6;
        const maxNewsNum = 10;
        let boxData = Data.articles.slice(0, sliceNum);
        let textData = Data.articles.slice(sliceNum, maxNewsNum);
        return (
            <ThemeProvider theme={theme}>
                <Box display="flex" flexDirection="column">
                    {boxData.map((article, index) => {
                        return (
                            <Box key={article.id} rows={1} marginBottom={3} bgcolor="secondary.main" borderRadius={15}>
                                <ArticleDateTime data={article} />
                                <Box component="div">{article.title}</Box>
                                <Button
                                    component={Link}
                                    variant="contained"
                                    to={article.source.toUpperCase()}
                                    color="inherit"
                                    target="_blank"
                                    rel="noopener"
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
                                    <Box component="div">{article.source.toUpperCase()}</Box>
                                    <ArticleDateTime data={article} />
                                </Box>
                                <Box>
                                    <Box component={Link} to={article.link}>{article.title}</Box>
                                </Box>
                            </Box>
                        )
                    })
                    }
                </Box >
            </ThemeProvider >
        );
    }
}

export default Article;