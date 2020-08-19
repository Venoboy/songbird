import React from 'react';
import { Typography } from '@material-ui/core';

import classes from './score.module.scss';

const scoreBox = (props) => (
   <Typography className={classes.scoreContainer}>
    <span>Score: </span><span>{props.score}</span>
  </Typography>
);

export default scoreBox;
