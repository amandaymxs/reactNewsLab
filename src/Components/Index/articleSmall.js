import React, { Component } from 'react';
import { Grid, Button, Typography, MuiThemeProvider } from '@material-ui/core';
import theme from '../../theme';


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
                                direction="row"
                                style={{
                                    width: '100%',
                                    margin: 0,
                                    marginBottom: '1.5em',
                                    '&:last-child': {
                                        marginBottom: 0
                                    }
                                }}
                                spacing={2}
                                alignItems="center"
                            >
                                <Grid
                                    container
                                    item
                                    direction="column"
                                    xs={3}
                                    spacing={0}
                                    style={{ borderRight: `1px solid ${theme.palette.secondary.light}` }}>
                                    <Typography align="right">{article.source}</Typography>
                                    <Typography component="h6" variant="h6" align="right">{article.date}</Typography>
                                    <Typography component="h6" variant="h6" align="right">{article.time}</Typography>
                                </Grid>

                                <Grid xs={8}>
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

