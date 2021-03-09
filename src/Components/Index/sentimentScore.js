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
        let border;
        if (sentimentScore > 5) {
            color = `${theme.palette.success.contrastText}`;
            backgroundColor = `${theme.palette.success.main}`;
            border = `0.15em solid ${theme.palette.success.light}`
        } else if (sentimentScore < -5) {
            color = `${theme.palette.error.contrastText}`;
            backgroundColor = `${theme.palette.error.main}`;
            border = `0.15em solid ${theme.palette.error.light}`;
        } else {
            color = `${theme.palette.warning.contrastText}`;
            backgroundColor = `${theme.palette.warning.main}`;
            border = `0.15em solid ${theme.palette.warning.light}`
        }
        return (
            <MuiThemeProvider theme={theme} >
                <Button
                    variant="contained"
                    size="small"
                    style={{
                        color: color,
                        backgroundColor: backgroundColor,
                        border: border
                    }}
                > Sentiment Score: {data} </Button>
            </MuiThemeProvider >
        )
    }
}

export default SentimentScore;