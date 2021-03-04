import React, { Fragment } from 'react';
import { Header, Footer } from './';
// import { ThemeProvider } from "@material-ui/styles";
// import theme from '../theme';

function Layout() {
    return (
        <Fragment>
            {/* <ThemeProvider theme={theme}> */}
            <div className="header-body">
                <Header />

            </div>
            <Footer />
            {/* </ThemeProvider> */}
        </Fragment>

    );
}

export default Layout;