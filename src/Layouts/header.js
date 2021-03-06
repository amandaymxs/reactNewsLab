import React, { Fragment, Component } from 'react';
import { Navbar } from './index';

import { MuiThemeProvider } from '@material-ui/core';
import theme from '../theme';

class Header extends Component {
    render() {
        return (
            <Fragment>
                <MuiThemeProvider theme={theme}>
                    <Navbar />
                </MuiThemeProvider>
            </Fragment >
        );
    }
}

export default Header;