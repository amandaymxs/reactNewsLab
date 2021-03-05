import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './index';
import Home from '../Components/Index/index';
import News from '../Components/news';
import About from '../Components/about';
import Contact from '../Components/contact';
import { ThemeProvider } from '@material-ui/core';
import theme from '../theme';

function Header() {
    return (
        <Fragment>
            <ThemeProvider theme={theme}>
                <Router >
                    <Navbar />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/News" component={News} />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                    </Switch>
                </Router>
            </ThemeProvider>
        </Fragment>
    );
}

export default Header;