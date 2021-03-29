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
            main: '#388e3c',
            dark: '#018D31',    //ticker
            contrastText: '#e5f6ec',
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
    MuiListItem: {
        disableGutters: true,
    },
    MuiDivider: {
        light: true,
        variant: 'middle',
    }
}

theme.overrides = {
    MuiCssBaseline: {
        "@global": {
            body: {
                backgroundColor: "#0F171A",
                margin: 0,
                overflowX: 'hidden',
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
            background: `linear-gradient(135deg, ${theme.palette.primary.main} 20%, ${theme.palette.primary.light} 80%)`,
        },
        textSecondary: {
            color: theme.palette.primary.contrastText,
            fontWeight: 800,
            '&:hover': {
                color: theme.palette.action.light,
            },
        },
        containedSizeLarge: {
            target: "_blank",
            rel: "noopener",
            backgroundColor: theme.palette.info.main,
            padding: '0 1.2em',
            color: theme.palette.primary.contrastText,
            textTransform: 'uppercase',
            fontSize: '0.8rem',
            fontWeight: 600,
            fontStyle: 'italic',
        },
        containedSizeSmall: {
            target: "_blank",
            rel: "noopener",
            backgroundColor: theme.palette.info.light,
            padding: '0 0.8em',
            color: theme.palette.primary.contrastText,
            textTransform: 'uppercase',
            fontSize: '0.7rem',
            fontWeight: 400,
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
        // subtitle1: {
        //     fontSize: '0.8rem',
        //     textTransform: 'uppercase',
        //     fontWeight: 400,
        // },
        // subtitle2: {
        //     fontSize: '0.8rem',
        //     textTransform: 'capitalize',
        //     fontWeight: 400,
        //     marginBottom: '0.5rem',
        // },
        body1: {
            fontWeight: 100,
        },
    },
    MuiCard: {
        root: {
            borderRadius: 15,
            marginBottom: 20,
            flexDirection: 'column',
            backgroundColor: theme.palette.primary.light,
            padding: '1.1rem'
        },
    },
    MuiCardHeader: {
        title: {
            fontSize: '1.6rem',
            fontWeight: 600,
            textTransform: 'capitalize',
            color: theme.palette.primary.contrastText,
        }
    },
    MuiCardActions: {
        root: {
            justifyContent: 'center',
        }
    },
    MuiGrid: {
        container: {
            justifyContent: "space-evenly",
        }
    },
    MuiAvatar: {
        root: {
            width: '100%',
            height: '100%',
            margin: 0,
            border: '0.12rem solid black',
        }
    },
    MuiList: {
        root: {
            display: 'flex',
        },
    },
    MuiDivider: {
        root: {
            marginBottom: '1.2rem',
        },
        middle: {
            backgroundColor: `${theme.palette.secondary.light}`,
        }
    },
}

export default theme;