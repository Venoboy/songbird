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

const useStyles = makeStyles(() => ({
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
      flexDirection: 'row',
      borderRadius: '5px',
      padding: '16px',
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
    };
  },
  divider: {
    backgroundColor: colors.divider,
  },
  image: (props) => {
    if (props.parentWidth < PLAYER_MIN_WIDTH) {
      return {
        width: '200px',
        height: '155px',
        borderRadius: '10px',
        alignSelf: 'left',
        objectFit: 'cover',
      };
    }
    return {
      width: '200px',
      height: '155px',
      borderRadius: '10px',
      alignSelf: 'flex-start',
      objectFit: 'cover',
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
    };
  },
}));

const playerSummaryBox = (props) => {
  const {
    picSrc, name, isDefaultBird, audioSrc, species,
  } = props;
  const DEFAULT_NAME = '******';

  const parentRef = useRef();
  const { width } = useResize(parentRef);

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

  return <Paper
    className={styles.root}
    ref={parentRef}
  >
    <img
      className={styles.image}
      src={currentPicSrc}
      alt="bird"/>
    <Box className={styles.container}>
      <Typography className={styles.text} variant='h5'>
        {currentName}
      </Typography>
      <Divider className={styles.divider}/>
      <Typography variant='subtitle1'>{species}</Typography>
      <Divider className={styles.divider}/>
      <Player src={audioSrc}/>
    </Box>
  </Paper>;
};

export default playerSummaryBox;
