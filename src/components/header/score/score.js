import React from 'react';
import { Typography } from '@material-ui/core';

import classes from './score.module.scss';

const score = (props) => (
   <Typography className={classes.scoreContainer}>
    <span>Score: </span><span>{props.score || 11}</span>
  </Typography>
);

export default score;
