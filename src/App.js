import './App.css';
import React from 'react';
import Layout from './Layouts/layout';
import { createMuiTheme, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from "@material-ui/styles";

const mainTheme = createMuiTheme({
  palette: {
    type: "dark"
  },
  typography: {
    allVariants: {
      color: "white"
    },
  }
});

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <Layout />
    </ThemeProvider>
  );
}

export default App;
