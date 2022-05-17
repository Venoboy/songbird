import { ThemeProvider } from '@material-ui/core';
import AudioPlayer from 'material-ui-audio-player/dist';
import { makeStyles } from '@material-ui/core/styles';

import myDefaultTheme from '../../materialStyles/myDefaultTheme';

interface IPlayer {
  src: string;
  readyNextChapter?: boolean;
}

const useStyles = makeStyles((theme) => (
  {
    root: {
      margin: 0,
      color: theme.palette.text.primary,
      background: theme.palette.background.paper,
    },
    playIcon: {
      color: theme.palette.primary.light,
      '&:hover': {
        color: theme.palette.primary.dark,
      },
    },
    volumeIcon: {
      color: theme.palette.primary.light,
      '&:hover': {
        color: theme.palette.primary.dark,
      },
    },
    mainSlider: {
      color: theme.palette.primary.light,
      '&:hover': {
        color: theme.palette.primary.dark,
      },
    },
    volumeSlider: {
      color: theme.palette.primary.light,
      '&:hover': {
        color: theme.palette.primary.dark,
      },
    },
    pauseIcon: {
      color: theme.palette.primary.light,
      '&:hover': {
        color: theme.palette.primary.dark,
      },
    },
  }
));

const Player = (props: IPlayer) => {
  const { src, readyNextChapter } = props;

  const currentSrc = readyNextChapter ? '' : src;

  return <ThemeProvider theme={myDefaultTheme}>
    <AudioPlayer
      src={currentSrc}
      elevation={0}
      variation='primary'
      spacing={3}
      useStyles={useStyles}
    />
  </ThemeProvider>;
};

export default Player;
