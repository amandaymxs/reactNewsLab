import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import ArticleLarge from './articleLarge';
import ArticleSmall from './articleSmall';


const Article = () => {

    const [newsItems, setNewsItems] = useState([]);
    const [size, setSize] = useState('15')

    useEffect(() => {
        fetch(`http://35.203.53.106:8607/news/_search?sort=published_datetime:desc&size=${size}`)
            .then(response => response.json())
            .then(json => setNewsItems(json.hits.hits))
            .catch(error => console.log('Error:', error))
    }, [])


    const sliceNum = 6;
    const articlesLarge = newsItems.slice(0, sliceNum).map(item => item);
    const articlesSmall = newsItems.slice(sliceNum, size).map(item => item);


    return (
        <Grid container direction="row" display='flex'>
            <ArticleLarge data={articlesLarge} />
            <ArticleSmall data={articlesSmall} />
        </Grid>
    );
}

export default Article;