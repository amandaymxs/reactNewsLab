import React, { Component } from 'react';
import { Box } from '@material-ui/core';
import Data from '../../data.json';

class Article extends Component {
    render() {
        const sliceInt = 6;
        const maxNewsNum = 10;
        let boxData = Data.articles.slice(0, sliceInt);
        let textData = Data.articles.slice(sliceInt, maxNewsNum);
        return (
            <Box display="flex" flexDirection="column">
                {boxData.map((article, index) => {
                    return (
                        <Box key={article.id} cols={index % 3 ? 1 : 2} rows={1}>
                            <p>{article.time.toUpperCase()}</p>
                            <p>{article.date.toUpperCase()}</p>
                            <p>{article.title}</p>
                            <a href={article.link} className="link">
                                <p>{article.source.toUpperCase()}</p></a>
                        </Box>
                    )
                })}
                {textData.map((article, index) => {
                    return (
                        <a href={article.link} className="link"><Box key={article.id} display="flex" flexDirection="row">
                            <Box display="flex" flexDirection="column">
                                <Box>{article.source.toUpperCase()}</Box>
                                <Box>{article.time.toUpperCase()}</Box>
                                <Box>{article.date.toUpperCase()}</Box>
                            </Box>
                            <Box>
                                <p>{article.title}</p>
                            </Box>
                        </Box>
                        </a>
                    )
                })
                }
                    )
            </Box >
        );
    }
}

export default Article;