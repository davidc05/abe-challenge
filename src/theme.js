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
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none',
        borderRadius: 4,
        boxShadow: 'none',
      },
    },
  },
});
