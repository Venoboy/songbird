import React from 'react';
import {
  Box, Divider, Paper, Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Player from './player';
import myDefaultTheme from '../../materialStyles/myDefaultTheme';
import colors from '../../materialStyles/colors';
import defaultPic from '../../assets/pictures/defaultBird.jpg';

const useStyles = makeStyles((theme) => ({
  root: () => ({
    display: 'flex',
    flexDirection: 'row',
    borderRadius: '5px',
    padding: '16px',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  }),
  container: () => ({
    width: '100%',
    marginLeft: '24px',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  }),
  divider: {
    backgroundColor: colors.divider,
  },
  image: () => ({
    width: '200px',
    height: '155px',
    borderRadius: '10px',
    objectFit: 'cover',
    alignSelf: 'flex-start',
    [theme.breakpoints.down('xs')]: {
      alignSelf: 'center',
    },
  }),
  text: () => ({
    margin: '10px 0',
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
    },
  }),
}));

const playerTopBox = (props) => {
  const {
    picSrc, name, isDefaultBird, audioSrc,
  } = props;
  const DEFAULT_NAME = '******';

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
      <Player src={audioSrc}/>
    </Box>
  </Paper>;
};

export default playerTopBox;
