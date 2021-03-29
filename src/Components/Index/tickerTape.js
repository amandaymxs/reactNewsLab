import React, { Component } from 'react';
import { ListItem, Typography, MuiThemeProvider, withStyles } from '@material-ui/core';
import theme from '../../theme';

const styles = {
  root: {
    flexGrow: 0,
    padding: '0 0.25rem',
    fontWeight: 800,
    fontSize: '0.85rem',
  },
  symbolItem: {
    color: `${theme.palette.info.dark}`,
    textTransform: 'uppercase',
  },
}

class TickerTape extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
    }
  }
  render() {
    const { data } = this.state;
    const { classes } = this.props;
    return (
      data.map(item => {
        let symbol = item.symbol;
        let price = parseFloat(item.price).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        let changeAmount = parseFloat(item.changeAmount).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        let changePercent = parseFloat(item.changePercent).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        let changeColor = `${theme.palette.error.dark}`;
        if (changeAmount >= 0.00) {
          changeAmount = '+' + changeAmount;
          changePercent = '+' + changePercent;
          changeColor = `${theme.palette.success.dark}`;
        }
        return (
          <MuiThemeProvider theme={theme}>
            <ListItem style={{ justifyContent: 'center' }}>
              <Typography
                // component='subtitle1'
                classes={{ root: classes.root, subtitle1: classes.symbolItem }}>{symbol}</Typography>
              <Typography
                // component='subtitle1'
                classes={{ root: classes.root }}>{price}</Typography>
              <Typography
                // component='subtitle1'
                classes={{ root: classes.root }}
                style={{ color: changeColor }}>{changeAmount} ({changePercent})</Typography>
            </ListItem>
          </MuiThemeProvider >
        )
      })
    )
  }
}

// export default withStyles(styles)(TickerTape);
