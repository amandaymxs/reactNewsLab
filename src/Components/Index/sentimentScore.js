import React from 'react';
import { MuiThemeProvider, Button } from '@material-ui/core';
import theme from '../../theme';
import PropTypes from 'prop-types';

const SentimentScore = ({ data, title, intSize, children }) => {
    // const { data, intSize } = this.state;
    const sentimentScore = data.toString();
    let color;
    let backgroundColor;
    if (sentimentScore > 5) {
        color = `${theme.palette.success.contrastText}`;
        backgroundColor = `${theme.palette.success.main}`;
    } else if (sentimentScore < -5) {
        color = `${theme.palette.error.contrastText}`;
        backgroundColor = `${theme.palette.error.main}`;
    } else {
        color = `${theme.palette.warning.contrastText}`;
        backgroundColor = `${theme.palette.warning.main}`;
    }
    return (
        <MuiThemeProvider theme={theme} >
            <Button
                variant="contained"
                size="large"
                style={{
                    fontSize: intSize,
                    color: color,
                    backgroundColor: backgroundColor,
                    textTransform: 'capitalize',
                }}
                disabled
            > {title}: {data}% </Button>
        </MuiThemeProvider >
    )
}

SentimentScore.propTypes = {
    data: PropTypes.string,
    title: PropTypes.string,
    intSize: PropTypes.number
}

export default SentimentScore;