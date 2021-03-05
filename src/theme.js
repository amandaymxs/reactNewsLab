import { createMuiTheme } from '@material-ui/core';
import Ubuntu from './fonts/Ubuntu-Regular.ttf';
import Montserrat from './fonts/Montserrat-Bold.ttf';
import { CenterFocusStrong } from '@material-ui/icons';

const theme = createMuiTheme({
    palette: {
        primary: {  //large grey
            light: '#2B3336',
            main: '#0F171A',
            dark: '#0a1012',
            contrastText: '#f4f4f4'
        },
        secondary: {    //small grey
            light: '#656a6b',
            main: '#3f4547',
            dark: '#2c3031',
        },
        info: {    //blue-purple
            light: '#5E84C3',
            main: '#1C73B9',
            dark: '#3455FF'
        },
        error: {    //red
            light: '#f5a3a3',
            main: '#F07071',
            dark: '#FF0000',    //ticker
            contrastText: '#EFDEDF',
        },
        success: {    //green
            light: '#5f9176',
            main: '#377654',
            dark: '#018D31',    //ticker
            contrastText: '#98b8a7',
        },
        warning: {    //yellow
            light: '#fbcd73',
            main: '#FBB225',
            dark: '#af7c19',
            contrastText: '#FFF7E0',
        },
        action: {   //orange
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
        disableElevation: true,
        position: 'static',
    },
    MuiTypography: {
        color: theme.palette.primary.contrastText,
    },
    MuiIconButton: {

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
            color: '#f4f4f4',
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
        }
    },
    MuiTypography: {
        h1: {
            flexGrow: 1,
            fontFamily: Montserrat,
            fontSize: 45,
            fontWeight: 800,
            textDecoration: 'none',
        }
    },
}
export default theme;