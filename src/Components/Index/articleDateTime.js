import React, { Fragment, Component } from 'react';
import { Typography, withStyles, Box } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { Block } from '@material-ui/icons';

const styles = (theme) => ({
    root: {
        border: 2,
        bgcolor: red,
    }
})

class ArticleDateTime extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data
        }
    }

    render() {
        const { classes } = this.props;
        const { data } = this.state;
        return (
            <Fragment>
                <Typography component="p" variant="subtitle1" className={classes.p} display="inline">{data.date.toUpperCase()} </Typography>
                <Typography component="p" variant="subtitle1" className={classes.p} display="inline"> {data.time.toUpperCase()}</Typography>
            </Fragment >
        )
    }
}

export default withStyles(styles, { withTheme: true })(ArticleDateTime);


// const date = () => {
//     const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//     const getWeekday = new Date().getDay();
//     const getMonth = new Date().getMonth();
//     const weekday = weekdays[getWeekday];
//     const month = months[getMonth];

//     return (weekday + ' ' + new Date().getDate() + ' ' + month + ' ' + new Date().getFullYear() + ' ' + new Date().getHours() + ':' + new Date().getMinutes())
// }