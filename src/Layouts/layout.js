import React, { Fragment, MainPageContent } from 'react';
import { Header, Footer } from './';
import { Box } from "@material-ui/core";

function Layout({ props }) {
    return (
        <Fragment>
            <Box component="div" label="header-body">
                <Header />

            </Box>
            <Footer />
        </Fragment>
    );
}

export default Layout;

//Note: fix main content overlapped by appbar