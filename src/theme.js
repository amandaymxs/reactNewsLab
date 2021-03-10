import { createMuiTheme } from '@material-ui/core';
import MontserratBoldWoff from './fonts/Montserrat-Bold.woff';
import OpenSansLightWoff from './fonts/OpenSans-Light.woff';
import OpenSansRegularWoff from './fonts/OpenSans-Regular.woff';
import PTSansRegularWoff from './fonts/PTSans-Regular.woff';
import UbuntuRegularWoff from './fonts/Ubuntu-Regular.woff';
import OpenSansItalicTtf from './fonts/OpenSans-Italic.ttf'

const openSans = {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `
    local('Open Sans'),
    url(${OpenSansRegularWoff}) format('woff')
  `,
}

const openSansLight = {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 100,
    src: `
    url(${OpenSansLightWoff}) format('woff')
  `,
}

const openSansItalic = {
    fontFamily: 'Open Sans',
    fontStyle: 'italic',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `
    url(${OpenSansItalicTtf}) format('truetype')
  `,
}

const monserratBold = {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 700,
    src: `
    local('Montserrat'),
    local('Montserrat-Bold'),
    url(${MontserratBoldWoff}) format('woff')
  `,
}

const pTSans = {
    fontFamily: 'PT Sans',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `
    local('PT Sans'),
    url(${PTSansRegularWoff}) format('woff')
  `,
}

const ubuntu = {
    fontFamily: 'Ubuntu',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `
    url(${UbuntuRegularWoff}) format('woff')
  `,
}


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
            color: "#f4f4f4",
        },
        fontFamily: [
            'Open Sans',
            'Montserrat',
            'PT Sans',
            'Ubuntu',
        ].join(','),
    },
})

theme.props = {
    MuiAppBar: {
        position: 'static',
    },
}

theme.overrides = {
    MuiCssBaseline: {
        "@global": {
            body: {
                backgroundColor: "#0F171A",
                margin: 0,
            },
            '@font-face': [openSans, openSansLight, openSansItalic, monserratBold, pTSans, ubuntu],
        }
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
            color: theme.palette.primary.contrastText,
        },
        containedPrimary: {
            background: 'linear-gradient(135deg, #202D32 20%, #0F171A 90%)',
        },
        containedSizeLarge: {
            target: "_blank",
            rel: "noopener",
            backgroundColor: theme.palette.info.main,
            padding: '0 1.3rem',
            color: theme.palette.primary.contrastText,
            textTransform: 'uppercase',
            fontFamily: 'Open Sans',
            fontSize: '0.8rem',
            fontWeight: 600,
            fontStyle: 'italic',

        },
        textSizeSmall: {
            textTransform: 'capitalize',
            fontSize: '0.9rem',
        },
    },
    MuiTypography: {
        root: {
            flexGrow: 1,
        },
        h1: {
            fontFamily: 'Montserrat',
            fontSize: '3.5rem',
            // fontWeight: 800,
            textDecoration: 'none',
        },
        h3: {
            fontWeight: 100,
            fontSize: '1.4rem',
            marginTop: 10,
            textTransform: 'capitalize',
        },
        h5: {
            color: theme.palette.secondary.contrastText,
            fontSize: '0.8rem',
            textTransform: 'uppercase',
        },
        h6: {
            color: theme.palette.secondary.contrastText,
            fontSize: '0.65rem',
            textTransform: 'uppercase',
        },
    },
    MuiCard: {
        root: {
            borderRadius: 15,
            marginBottom: 20,
            flexDirection: 'column',
            backgroundColor: theme.palette.primary.light,
        },
    },
    MuiCardHeader: {
        title: {
            paddingTop: '1rem',
            paddingLeft: '2rem',
            fontSize: '1.6rem',
            fontWeight: 600,
            textTransform: 'capitalize',
            color: theme.palette.primary.contrastText,
        }
    },
    MuiGrid: {
        container: {
            justifyContent: "center",
        },
        spacingXs2: {
            width: '100%',
            direction: 'row',
        },
        gridXs3: {

        },
    },
}

export default theme;