import React from 'react';
import { ThemeProvider } from '@mui/material';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';

import myDefaultTheme from '../../materialStyles/myDefaultTheme';

// const useStyles = makeStyles((theme) => (
//   {
//     root: {
//       margin: 0,
//       color: theme.palette.text.primary,
//       background: theme.palette.background.paper,
//     },
//     playIcon: {
//       color: theme.palette.primary.light,
//       '&:hover': {
//         color: theme.palette.primary.dark,
//       },
//     },
//     volumeIcon: {
//       color: theme.palette.primary.light,
//       '&:hover': {
//         color: theme.palette.primary.dark,
//       },
//     },
//     mainSlider: {
//       color: theme.palette.primary.light,
//       '&:hover': {
//         color: theme.palette.primary.dark,
//       },
//     },
//     volumeSlider: {
//       color: theme.palette.primary.light,
//       '&:hover': {
//         color: theme.palette.primary.dark,
//       },
//     },
//     pauseIcon: {
//       color: theme.palette.primary.light,
//       '&:hover': {
//         color: theme.palette.primary.dark,
//       },
//     },
//   }
// ));

const player = (props) => {
  const { src, readyNextChapter } = props;

  const currentSrc = readyNextChapter ? '' : src;

  return <ThemeProvider theme={myDefaultTheme}>
    <AudioPlayer
      src={currentSrc}
    />
  </ThemeProvider>;
};

export default player;
