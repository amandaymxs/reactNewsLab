import { createMuiTheme } from '@material-ui/core';
import Ubuntu from './fonts/Ubuntu-Regular.ttf';
import Montserrat from './fonts/Montserrat-Bold.ttf';
import OpenSans from './fonts/OpenSans-Regular.ttf';

const theme = createMuiTheme({
    palette: {
        primary: {      //large grey
            light: '#2B3336',
            main: '#0F171A',
            dark: '#0a1012',
            contrastText: '#f4f4f4'
        },
        secondary: {    //small grey
            light: '#656a6b',
            main: '#3f4547',
            dark: '#2c3031',
            contrastText: '#aaa',
        },
        info: {         //blue-purple
            light: '#5E84C3',
            main: '#1C73B9',
            dark: '#3455FF'
        },
        error: {        //red
            light: '#a84e4f',
            main: '#F07071',
            dark: '#FF0000',    //ticker
            contrastText: '#EFDEDF',
        },
        success: {      //green
            light: '#26523a',
            main: '#377654',
            dark: '#018D31',    //ticker
            contrastText: '#98b8a7',
        },
        warning: {      //yellow
            light: '#af7c19',
            main: '#FBB225',
            dark: '#af7c19',
            contrastText: '#FFF7E0',
        },
        action: {       //orange
            light: '#ff825b',
            main: '#ff6333',
            dark: '#b24523',
        }
    },
    typography: {
        allVariants: {
            color: "#f4f4f4"
        },
    },
})

theme.props = {
    MuiAppBar: {
        position: 'static',
    },
    MuiTypography: {
        color: theme.palette.primary.contrastText,
    },
}

theme.overrides = {
    MuiCssBaseline: {
        "@global": {
            body: {
                backgroundColor: "#0F171A",
                margin: 0,
            },
        },
    },
    MuiIconButton: {
        root: {
            boxShadow: 'none',
        },
        edgeStart: {
            color: theme.palette.primary.contrastText,
            '&:hover': {
                color: theme.palette.action.light,
            },
        },
    },
    MuiButton: {
        root: {
            borderRadius: 10,
            textTransform: 'none',
            fontFamily: Ubuntu,
            color: theme.palette.primary.contrastText,
        },
        containedPrimary: {
            background: 'linear-gradient(135deg, #202D32 20%, #0F171A 90%)',
        },
        containedSizeLarge: {
            target: "_blank",
            rel: "noopener",
            backgroundColor: theme.palette.info.main,
            padding: '0 1.5em',
            color: theme.palette.primary.contrastText,
            textTransform: 'uppercase',
            fontSize: 12,

        },
        textSizeSmall: {
            textTransform: 'capitalize',
            fontSize: 12,
        },
        containedSizeSmall: {
            padding: '0 1.5em',
            fontSize: 10
        }
    },
    MuiTypography: {
        root: {
            fontFamily: OpenSans,
        },
        h1: {
            flexGrow: 1,
            fontFamily: Montserrat,
            fontSize: 45,
            fontWeight: 800,
            textDecoration: 'none',
        },
        h3: {
            fontWeight: 100,
            fontSize: 18,
            marginTop: 10,
            textTransform: 'capitalize',
        },
        h6: {
            display: 'inline',
            border: 2,
            color: theme.palette.secondary.contrastText,
            fontSize: 11.5,
            textTransform: 'uppercase',
        },
        alignRight: {
            fontSize: 12,
            textTransform: 'uppercase',
        },
    },
    MuiCard: {
        root: {
            borderRadius: 15,
            marginBottom: 20,
            // color: theme.palette.primary.contrastText,
        },

    },
}
export default theme;