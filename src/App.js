import './App.css';
import React from 'react';
import Layout from './Layouts/layout';
import { createMuiTheme, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout />
    </ThemeProvider>
  );
}

export default App;
