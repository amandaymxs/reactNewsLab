import React, { Component } from 'react';
import { MuiThemeProvider, Button } from '@material-ui/core';
import theme from '../../theme';

class SentimentScore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data
        }
    }

    render() {
        const { data } = this.state;
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
                        color: color,
                        backgroundColor: backgroundColor,
                        textTransform: 'capitalize',
                    }}
                    disabled
                > Sentiment Score: {data} </Button>
            </MuiThemeProvider >
        )
    }
}

export default SentimentScore;