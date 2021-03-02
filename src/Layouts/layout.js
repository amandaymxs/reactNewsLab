import React, { Fragment } from 'react';
import { Header, Footer } from './';

function Layout() {
    return (
        <Fragment>
            <div className="header-body">
                <Header />

            </div>
            <Footer />
        </Fragment>
    );
}

export default Layout;