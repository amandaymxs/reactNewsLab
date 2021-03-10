import React, { Component } from 'react';
import { Grid, Button, Typography, MuiThemeProvider } from '@material-ui/core';
import theme from '../../theme';
// import OpenSans from '../../fonts/OpenSans-Regular.woff';

class ArticleSmall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data
        }
    }
    render() {
        const { data } = this.state;
        return (
            <MuiThemeProvider theme={theme}>
                {
                    data.map((article) => {
                        return (
                            <Grid
                                key={article.id}
                                container
                                spacing={3}
                            >
                                <Grid
                                    order={1}
                                    item
                                    direction="column"
                                    xs={3}
                                    align="right"
                                // style={{ borderRight: `1px solid ${theme.palette.secondary.light}` }}
                                >
                                    <Grid item><Typography component="h6" variant="h6" style={{ fontSize: '1em', fontWeight: '600', color: theme.palette.info.main, fontStyle: 'italic' }}>{article.source}</Typography></Grid>
                                    <Grid item><Typography component="h6" variant="h6">{article.date}</Typography></Grid>
                                    <Grid item><Typography component="h6" variant="h6">{article.time}</Typography></Grid>
                                </Grid>

                                <Grid xs={8} order={2} item >
                                    <Button
                                        variant="text"
                                        size="small"
                                        href={article.link}
                                    >
                                        {article.title}
                                    </Button>
                                </Grid>
                            </Grid>
                        )
                    })
                }
            </MuiThemeProvider>
        )
    }
}

export default ArticleSmall;

