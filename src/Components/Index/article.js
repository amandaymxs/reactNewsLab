import React, { Component } from 'react';
import { CardContent } from '@material-ui/core';
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
            <CardContent style={{ padding: '1em 3em' }}>
                <ArticleLarge data={boxData} />
                <ArticleSmall data={textData} />
            </CardContent >
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