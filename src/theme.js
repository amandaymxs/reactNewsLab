import { createMuiTheme } from '@material-ui/core';
import { blueGrey, grey } from '@material-ui/core/colors'

//Green 900 - S&P Positive
//Red A700 - S&P Negative
//Indigo  A700 - S&P Title
// Light Blue 700 - News Links
//Gray 800 - Component Container
//Gray 900 - Component Articles

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#2B3336',
            contrastText: '#fff',
        },
        secondary: {
            main: '#0F171A',
            contrastText: '#fff',
        },
        // source: {
        //     main: lightBlue[700],
        //     contrastText: '#fff',
        // },
        // sentimentNeutral: {
        //     main: yellow['A400'],
        //     contrastText: '#fff',
        // },
        // sentimentNegative: {
        //     main: red[400],
        //     contrastText: '#fff',
        // },
        // sentimentPositive: {
        //     main: green[600],
        //     contrastText: '#fff',
        // },
    }
})

export default theme;