import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import ArticleLarge from './articleLarge';
import ArticleSmall from './articleSmall';

class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data
        }
    }
    render() {
        const { data } = this.state;
        const sliceNum = 6;
        const maxNewsNum = 10;
        let boxData = data.slice(0, sliceNum);
        let textData = data.slice(sliceNum, maxNewsNum);

        return (
            <Grid container direction="row" style={{
                justifyContent: 'space-evenly', maxHeight: '100rem',
                marginBottom: '1rem',
            }}>
                <ArticleLarge data={boxData} />
                <ArticleSmall data={textData} />
            </Grid>
        );
    }
}

export default Article;