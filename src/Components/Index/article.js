import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import ArticleLarge from './articleLarge';
import ArticleSmall from './articleSmall';
import useFetch from '../../Utilities/useFetch';

const Article = () => {
    const [size, setSize] = useState('15');

    const { queryItems: newsItems, isPending } = useFetch('news', 'published_datetime:desc', size);

    const displayArticles = () => {
        if (isPending) {
            return <p> Loading page...</p>
        }
        const sliceNum = 6;
        const articlesLarge = newsItems.slice(0, sliceNum).map(item => item);
        const articlesSmall = newsItems.slice(sliceNum, size).map(item => item);
        return (<><ArticleLarge data={articlesLarge} /><ArticleSmall data={articlesSmall} /></>)
    }

    return (
        <Grid container direction="row" display='flex'>
            {displayArticles()}
        </Grid>
    );
}

export default Article;