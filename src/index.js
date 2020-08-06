import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';

import myDefaultTheme from './materialStyles/myDefaultTheme';
import App from './containers/App';

ReactDOM.render(
  <ThemeProvider theme={myDefaultTheme}>
    <App appTitle='Songbird'/>
  </ThemeProvider>,
  document.getElementById('root'),
);
