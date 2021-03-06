import React, { Fragment, Component } from 'react';
import { Typography } from '@material-ui/core';

class TimeStamp extends Component {
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
                <Typography component="h6" variant="h6">{data.date.toUpperCase()}  </Typography>
                <Typography component="h6" variant="h6">   {data.time.toUpperCase()}</Typography>
            </Fragment >
        )
    }
}

export default TimeStamp;


// const date = () => {
//     const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//     const getWeekday = new Date().getDay();
//     const getMonth = new Date().getMonth();
//     const weekday = weekdays[getWeekday];
//     const month = months[getMonth];

//     return (weekday + ' ' + new Date().getDate() + ' ' + month + ' ' + new Date().getFullYear() + ' ' + new Date().getHours() + ':' + new Date().getMinutes())
// }