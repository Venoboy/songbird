import React, { Component } from 'react';
import 'fontsource-roboto';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';
import { Grid } from '@material-ui/core';

import Header from '../components/header/header';
import classes from './app.module.scss';
import Tabs from '../components/tabs/tabs';
import PlayerBox from '../components/player/playerBox';
import Variants from '../components/variants/variants';
import Summary from '../components/summary/summary';
import NextBtn from '../components/nextBtn/nextBtn';
import { birdsData } from '../data/birds';
import chooseRandom from '../helpers/chooseRandom';

class App extends Component {
  state = {
    currentTab: 0,
    isDefaultBird: true,
    currentData: birdsData[0],
    currentBirdId: chooseRandom(birdsData[0].length - 1),
    currentClickId: undefined,
  };

  setInitialData = () => {
    const initialData = birdsData[0];
    const initialBirdId = chooseRandom(initialData.length - 1);
    return {
      initialData,
      initialBirdId,
    };
  };

  getBirdData = () => (
    this.state.currentData[0]
  );

  render() {
    this.setInitialData();

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
              <Tabs currentTab={this.state.currentTab}/>
            </Grid>
            <Grid item>
              <PlayerBox
                name='Ястреб'
                isDefaultBird={this.state.isDefaultBird}
                audioSrc={this.getBirdData().audio}
              />
            </Grid>
            <Grid item container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Variants
                  currentData={this.state.currentData}
                />
              </Grid>
              <Grid item xs={12} sm={6} style={{ display: 'flex' }}>
                <Summary isDetailed={!this.state.isDefaultBird}/>
              </Grid>
            </Grid>
            <Grid item>
              <NextBtn/>
            </Grid>
          </Grid>
        </ScopedCssBaseline>
      </React.Fragment>
    );
  }
}

export default App;
