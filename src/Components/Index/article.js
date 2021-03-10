import React, { Component } from 'react';
import Data from '../../data.json';
import ArticleLarge from './articleLarge';
import ArticleSmall from './articleSmall';

class Article extends Component {
    render() {
        const sliceNum = 6;
        const maxNewsNum = 10;
        let boxData = Data.articles.slice(0, sliceNum);
        let textData = Data.articles.slice(sliceNum, maxNewsNum);

        return (
            <>
                <ArticleLarge data={boxData} />
                <ArticleSmall data={textData} />
            </>
        );
    }
}

export default Article;