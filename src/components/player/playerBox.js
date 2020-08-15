import React, { useRef } from 'react';
import {
  Box, Divider, Paper, Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Player from './player';
import myDefaultTheme from '../../materialStyles/myDefaultTheme';
import colors from '../../materialStyles/colors';
import useResize from '../../helpers/useResize';
import defaultPic from '../../assets/pictures/defaultBird.jpg';

const PLAYER_MIN_WIDTH = 400;

const useStyles = makeStyles((theme) => ({
  root: (props) => {
    if (props.parentWidth < PLAYER_MIN_WIDTH) {
      return {
        display: 'flex',
        borderRadius: '5px',
        padding: '16px',
        flexDirection: 'column',
        alignItems: 'center',
      };
    }
    return {
      display: 'flex',
      borderRadius: '5px',
      padding: '16px',
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
        alignItems: 'center',
      },
    };
  },
  container: (props) => {
    if (props.parentWidth < PLAYER_MIN_WIDTH) {
      return {
        width: '100%',
        marginLeft: 0,
      };
    }
    return {
      width: '100%',
      marginLeft: '24px',
      [theme.breakpoints.down('xs')]: {
        marginLeft: 0,
      },
    };
  },
  divider: {
    backgroundColor: colors.divider,
  },
  image: (props) => {
    if (props.parentWidth < PLAYER_MIN_WIDTH) {
      return {
        borderRadius: '10px',
        alignSelf: 'center',
      };
    }
    return {
      borderRadius: '10px',
      alignSelf: 'flex-start',
      [theme.breakpoints.down('xs')]: {
        alignSelf: 'center',
      },
    };
  },
  text: (props) => {
    if (props.parentWidth < PLAYER_MIN_WIDTH) {
      return {
        margin: '10px 0',
        textAlign: 'center',
      };
    }

    return {
      margin: '10px 0',
      [theme.breakpoints.down('xs')]: {
        textAlign: 'center',
      },
    };
  },
}));

const playerBox = (props) => {
  const {
    picSrc, name, isSummary, isDefaultBird, audioSrc,
  } = props;
  const DEFAULT_NAME = '******';

  const parentRef = useRef();
  const { width } = useResize(parentRef);

  myDefaultTheme.isSummary = isSummary;
  myDefaultTheme.parentWidth = width;
  const styles = useStyles(myDefaultTheme);

  let currentPicSrc;
  let currentName;
  if (isDefaultBird) {
    currentPicSrc = defaultPic;
    currentName = DEFAULT_NAME;
  } else {
    currentPicSrc = picSrc;
    currentName = name;
  }

  const latName = isSummary ? (
    <>
      <Typography variant='subtitle1'>Parus major</Typography>
      <Divider className={styles.divider}/>
    </>
  ) : null;

  return <Paper
    className={styles.root}
    ref={parentRef}
  >
    <img className={styles.image} src={currentPicSrc} alt="bird"/>
    <Box className={styles.container}>
      <Typography className={styles.text} variant='h5'>
        {currentName}
      </Typography>
      <Divider className={styles.divider}/>
      {latName}
      <Player src={audioSrc}/>
    </Box>
  </Paper>;
};

export default playerBox;
