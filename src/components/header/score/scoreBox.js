import React from 'react';
import { Typography } from '@mui/material';

import classes from './score.module.scss';

const scoreBox = (props) => (
   <Typography className={classes.scoreContainer}>
    <span>Score: </span><span>{props.score}</span>
  </Typography>
);

export default scoreBox;
