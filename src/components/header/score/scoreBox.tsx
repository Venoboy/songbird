import { Typography } from '@material-ui/core';

import classes from './score.module.scss';

interface IScoreBox {
  score: number
}

const scoreBox = (props: IScoreBox) => (
   <Typography className={classes.scoreContainer}>
    <span>Score: </span><span>{props.score}</span>
  </Typography>
);

export default scoreBox;
