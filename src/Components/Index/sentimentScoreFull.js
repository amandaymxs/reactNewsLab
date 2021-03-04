import React, { Fragment } from 'react';
import Proptypes from 'prop-types';
import { Box, withStyles } from '@material-ui/core';
import { yellow, red, green } from '@material-ui/core/colors'

//Yellow A400 - Sentiment Neutral
// Red 400 - Sentiment Negative
//Green 600 - Sentiment Positive

const styles = () => ({
    default: {
        borderRadium: 2,
        textTransform: 'none'
    },
    // primary: {
    //     '&:hover': {
    //         backgroundColor: 
    //     }
    // }
})

const SentimentScoreFull = ({ color, children }) => {
    return (
        <Fragment>
            <Box color={color} className={classes.default}>
                {children}
            </Box>
        </Fragment>
    )
}


SentimentScoreFull.propTypes = {
    color: Proptypes.string
}

export default withStyles(styles)(SentimentScoreFull);