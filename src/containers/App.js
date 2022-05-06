import React, { Component } from 'react';
import 'fontsource-roboto';
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';
import { Grid } from '@mui/material';

import Header from '../components/header/header';
import classes from './app.module.scss';
import Tabs from '../components/tabs/tabs';
import PlayerTopBox from '../components/player/playerTopBox';
import Variants from '../components/variants/variants';
import Summary from '../components/summary/summary';
import NextBtn from '../components/nextBtn/nextBtn';
import { birdsData } from '../data/birds';
import chooseRandom from '../helpers/chooseRandom';
import WinScreen from '../components/winScreen/winScreen';

class App extends Component {
  state = {
    currentTab: 0,
    isDefaultBird: true,
    currentData: birdsData[0],
    answerBirdId: chooseRandom(birdsData[0].length - 1),
    currentClickId: undefined,
    readyNextChapter: false,
    detailedBird: undefined,
    score: 0,
    variantsClickable: true,
    isResultScreen: false,
    isTrue: true,
  };

  setNotClickable = () => {
    this.setState({ variantsClickable: false });
  };

  resetScore = () => {
    this.setState({
      score: 0,
      isResultScreen: false,
    });
  };

  setReadyNextChapter = (ready) => {
    this.setState({
      readyNextChapter: ready,
      isDefaultBird: !ready,
    });
  };

  goNextChapter = () => {
    if (!this.state.readyNextChapter) return;
    const isLastChapter = this.state.currentTab === birdsData.length - 1;
    if (isLastChapter) {
      this.setState({
        isResultScreen: true,
      });
    }
    this.setState((prevState) => ({
      currentTab: isLastChapter ? 0 : prevState.currentTab + 1,
      isDefaultBird: true,
      currentData: isLastChapter ? birdsData[0] : birdsData[prevState.currentTab + 1],
      answerBirdId: isLastChapter ? chooseRandom(birdsData[0].length - 1)
        : chooseRandom(birdsData[prevState.currentTab + 1].length - 1),
      readyNextChapter: false,
      currentClickId: undefined,
      variantsClickable: true,
      detailedBird: undefined,
      score: prevState.score,
      isLastChapter: false,
    }));
  };

  scoreHandler = (result) => {
    this.setState({ score: result });
  };

  setDetailedBird = (bird) => {
    this.setState({
      detailedBird: bird,
    });
  };

  render() {
    const answerBirdData = this.state.currentData[this.state.answerBirdId];

    const output = !this.state.isResultScreen ? (
      <>
        <Grid item>
          <PlayerTopBox
            isDefaultBird={this.state.isDefaultBird}
            audioSrc={answerBirdData.audio}
            name={answerBirdData.name}
            picSrc={answerBirdData.image}
            readyNextChapter={this.state.readyNextChapter}
          />
        </Grid>
        <Grid item container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Variants
              currentData={this.state.currentData}
              answerId={this.state.answerBirdId}
              setReadyNextChapter={this.setReadyNextChapter}
              setDetailedBird={this.setDetailedBird}
              scoreHandler={this.scoreHandler}
              currentClickId={this.state.currentClickId}
              setNotClickable={this.setNotClickable}
              variantsClickable={this.state.variantsClickable}
              detailedBird={this.state.detailedBird}
            />
          </Grid>
          <Grid item xs={12} sm={6} style={{ display: 'flex' }}>
            <Summary
              detailedBird={this.state.detailedBird}
            />
          </Grid>
        </Grid>
        <Grid item>
          <NextBtn
            readyNextChapter={this.state.readyNextChapter}
            goNextChapter={this.goNextChapter}
          />
        </Grid>
      </>
    ) : <WinScreen
      resetScore={this.resetScore}
      score={this.state.score}
    />;

    return (
      <ScopedCssBaseline
        className={classes.wrapper}
      >
        <Grid
          container
          direction='column'
          spacing={3}
        >
          <Grid item>
            <Header score={this.state.score}/>
          </Grid>
          <Grid item>
            <Tabs currentTab={this.state.currentTab}/>
          </Grid>
          {output}
        </Grid>
      </ScopedCssBaseline>
    );
  }
}

export default App;
