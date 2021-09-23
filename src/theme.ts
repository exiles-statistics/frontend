import {createTheme, responsiveFontSizes} from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
let theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      '"Noto Sans SC"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      'sans-serif'
    ].join(','),
    h1: {
      letterSpacing: '-0.1rem'
    },
    h2: {
      letterSpacing: '-0.1rem',
    },
    h3: {
      letterSpacing: '-0.075rem'
    },
    h4: {
      letterSpacing: '-0.025rem'
    },
    h5: {
      letterSpacing: '0.02rem'
    },
    h6: {
      letterSpacing: '0.05rem'
    }
  }
});

theme = responsiveFontSizes(theme)

export default theme;
