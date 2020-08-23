import { createMuiTheme } from '@material-ui/core/styles';

const myDefaultTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#00bc8c',
      light: '#5befbc',
      dark: '#008b5f',
    },
    secondary: {
      main: '#fb8c00',
      light: '#ffbd45',
      dark: '#c25e00',
    },
    background: {
      paper: '#303030',
      default: '#222222',
    },
    text: {
      disabled: 'rgba(255, 255, 255, 0.5)',
      hint: 'rgba(255, 255, 255, 0.5)',
      icon: 'rgba(255, 255, 255, 0.5)',
      primary: '#fff',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
  },
});

export default myDefaultTheme;
