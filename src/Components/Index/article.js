import React, { Component } from 'react';
import { Box, Link, Button, withStyles, Typography } from '@material-ui/core';
import { ThemeProvider } from "@material-ui/styles";        //???????
import Data from '../../data.json';
import theme from '../../theme';
import Timestamp from './timestamp';
import OpenSans from '../../fonts/OpenSans-Regular.ttf'
import { blue } from '@material-ui/core/colors';

const styles = (localTheme) => ({
    root: {
        rows: 1,
        marginBottom: 35,
        borderRadius: 15,
        padding: 18,
        color: "#f4f4f4",
    },
    body1: {
        fontFamily: OpenSans,
        fontWeight: 100,
    }
});

class Article extends Component {
    render() {
        const { classes } = this.props;
        const sliceNum = 6;
        const maxNewsNum = 10;
        let boxData = Data.articles.slice(0, sliceNum);
        let textData = Data.articles.slice(sliceNum, maxNewsNum);
        return (
            <ThemeProvider theme={theme}>
                <Box display="flex" flexDirection="column">
                    {boxData.map((article, index) => {
                        return (
                            <Box component="div" key={article.id} className={classes.root} bgcolor="#0F171A">
                                <Timestamp data={article} />
                                <Typography component="body1" variant="body1" className={classes.body1} display="block">{article.title}</Typography>
                                <Button
                                    component={Link}
                                    variant="contained"
                                    to={article.source.toUpperCase()}
                                    color="inherit"
                                    target="_blank"
                                    rel="noopener"
                                >
                                    {article.source.toUpperCase()}
                                </Button>
                            </Box>
                        )
                    })}
                    {textData.map((article, index) => {
                        return (
                            <Box key={article.id} display="flex" flexDirection="row">
                                <Box display="flex" flexDirection="column">
                                    <Box component="div">{article.source.toUpperCase()}</Box>
                                    <Timestamp data={article} />
                                </Box>
                                <Box>
                                    <Box component={Link} to={article.link}>{article.title}</Box>
                                </Box>
                            </Box>
                        )
                    })
                    }
                </Box >
            </ThemeProvider >
        );
    }
}

export default withStyles(styles, { withTheme: true })(Article);
