import React from 'react';
import {
  Box, Divider, Paper, Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Player from './player';
import audioSrc from '../../assets/sound/Sinister Souls, Fragz, Hallucinator - Alive.mp3';
import colors from '../../materialStyles/colors';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    borderRadius: '5px',
    padding: '16px',
  },
  container: {
    width: '100%',
    marginLeft: '24px',
  },
  divider: {
    backgroundColor: colors.divider,
  },
  image: {
    borderRadius: '10px',
  },
  text: {
    margin: '10px 0',
  },
});

const playerBox = (props) => {
  const { picSrc, name } = props;
  const classes = useStyles();
  return <Paper className={classes.root}>
    <img className={classes.image} src={picSrc} alt="bird"/>
    <Box className={classes.container}>
      <Typography className={classes.text} variant='h5'>
        {name}
      </Typography>
      <Divider className={classes.divider} />
      <Player src={audioSrc}/>
    </Box>
  </Paper>;
};

export default playerBox;
