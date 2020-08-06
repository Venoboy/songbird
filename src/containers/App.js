import React, { Component } from 'react';
import 'fontsource-roboto';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';
import { Box, Grid } from '@material-ui/core';

import Header from '../components/header/header';
import classes from './app.module.scss';
import Tabs from '../components/tabs/tabs';
import Player from '../components/player/playerBox';
import defaultPic from '../assets/pictures/defaultBird.jpg';
import Variants from '../components/variants/variants';

class App extends Component {
  state = {};

  render() {
    this.smth = 'smth';
    return (
      <React.Fragment>
        <ScopedCssBaseline
          className={classes.wrapper}
        >
          <Grid
            container
            direction='column'
            spacing={3}
          >
            <Grid item>
              <Header/>
            </Grid>
            <Grid item>
              <Tabs/>
            </Grid>
            <Grid item>
              <Player
              name='Ястреб'
              picSrc={defaultPic}
              />
            </Grid>
            <Grid item container>
              <Grid item xs={12} sm={6}>
                <Variants/>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box>Summary</Box>
              </Grid>
            </Grid>
            <Grid item>
              <Box>Next</Box>
            </Grid>
          </Grid>
        </ScopedCssBaseline>
      </React.Fragment>
    );
  }
}

export default App;
