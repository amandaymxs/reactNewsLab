import React from 'react';
import { MuiThemeProvider, Button } from '@material-ui/core';
import theme from '../../theme';
import PropTypes from 'prop-types';

const SentimentScore = ({ score, sentiment, title, intSize }) => {
    const sentimentScore = (score * 100).toFixed(2);
    let color;
    let backgroundColor;
    if (sentiment === 'positive') {
        color = `${theme.palette.success.contrastText}`;
        backgroundColor = `${theme.palette.success.main}`;
    } else if (sentiment === 'negative') {
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
            > {title}: {sentimentScore}% </Button>
        </MuiThemeProvider >
    )
}

SentimentScore.propTypes = {
    data: PropTypes.number,
    title: PropTypes.string,
    intSize: PropTypes.number
}

export default SentimentScore;