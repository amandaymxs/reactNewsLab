import React from 'react';
import Layout from './Layouts/layout';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import theme from './theme';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Layout />
    </MuiThemeProvider >
  );
}

export default App;
