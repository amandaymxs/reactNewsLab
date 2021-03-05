import React from 'react';
import Layout from './Layouts/layout';
import { MuiThemeProvider, createMuiTheme, CssBaseline } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0F171A',
    },
    secondary: {
      main: '#2B3336'
    }
  },
  typography: {
    allVariants: {
      color: "#f4f4f4"
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundColor: "#0F171A",
        },
      },
    },
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Layout />
    </MuiThemeProvider >
  );
}

export default App;
