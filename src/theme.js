import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    primary: {
      main: '#0C40FC',
    },
    secondary: {
      main: '#000000',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  text: {
    primary: '#000000',
  },
  typography: {
    fontFamily: 'Barlow',
    h1: {
      fontWeight: 'bold',
      fontSize: 48,
      fontFamily: 'Regular',
    },
    h2: {
      fontWeight: 'bold',
      fontSize: 28,
      fontFamily: 'Regular',
    },
    h3: {
      fontWeight: 'bold',
      fontSize: 20,
      fontFamily: 'Regular',
    },
    subtitle1: {
      fontSize: 18,
      fontFamily: 'Barlow',
      fontWeight: 300,
    },
    body1: {
      fontSize: 16,
      fontFamily: 'Barlow',
      fontWeight: 300,
    },
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none',
        borderRadius: 4,
        boxShadow: 'none',
        minWidth: 'auto',
      },
    },
    MuiListItemIcon: {
      root: {
        minWidth: 40,
      },
    },
    MuiListItemText: {
      secondary: {
        color: 'black',
        opacity: 0.9,
        fontWeight: 300,
        fontFamily: 'Barlow',
        fontSize: 14,
        lineHeight: '16px',
      },
    },
  },
});
