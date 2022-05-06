import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@mui/styles';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import myDefaultTheme from './materialStyles/myDefaultTheme';
import App from './containers/App';

ReactDOM.render(
  <ThemeProvider theme={myDefaultTheme}>
    <App appTitle='Songbird'/>
  </ThemeProvider>,
  document.getElementById('root'),
);
