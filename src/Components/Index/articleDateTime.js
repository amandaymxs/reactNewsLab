import React, { Fragment, Component } from 'react';
import { Box } from '@material-ui/core';

class ArticleDateTime extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data
        }
    }

    render() {
        const { data } = this.state;
        return (
            <Fragment>
                <Box component="div">{data.date.toUpperCase()}</Box>
                <Box component="div">{data.time.toUpperCase()}</Box>
            </Fragment >
        )
    }
}

export default ArticleDateTime;