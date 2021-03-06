import React from 'react';
import { Header, Footer } from './Layouts/';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import theme from './theme';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Components/Index/index';
import News from './Components/news';
import About from './Components/about';
import Contact from './Components/contact';

function App() {
  return (
    <>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/News" component={News} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Footer />
        </Router>
      </MuiThemeProvider >
    </>
  );
}

export default App;
