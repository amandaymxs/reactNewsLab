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
            main: '#0F171A',
        },
        secondary: {
            main: '#2B3336',
        }

    }
})

export default theme;