import React from 'react';
import {
  Button,
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

import myDefaultTheme from '../../materialStyles/myDefaultTheme';
import countScore from '../../helpers/countScore';
import victoryImg from '../../assets/pictures/King_Red_-_Angry_Birds.png';
import winSound from '../../assets/sound/clearWin.wav';

const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: 'center',
    padding: '30px 10px 50px',
    whiteSpace: 'pre-wrap',
  },
  headerStyle: {
    [theme.breakpoints.up('xs')]: {
      fontSize: '2rem',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '3rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '5rem',
    },
  },
  subHeader: {
    [theme.breakpoints.up('xs')]: {
      fontSize: '1rem',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '2rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '3rem',
    },
  },
  numbers: {
    fontWeight: 'bold',
  },
  button: {
    color: theme.palette.text.primary,
    marginTop: '100px',
  },
  image: {
    width: '50%',
    marginTop: '30px',
  },
}));

const MAX_SCORE = 30;

const winScreen = (props) => {
  const { score } = props;
  const reset = () => {
    props.resetScore();
    countScore('reset');
  };

  const styles = useStyles(myDefaultTheme);

  let middleContent = <Typography>
        Вы прошли викторину и набрали <span className={styles.numbers}>{score}</span>{' '}
        из <span className={styles.numbers}>{MAX_SCORE}</span> возможных баллов
      </Typography>;

  if (score === MAX_SCORE) {
    const audio = new Audio(winSound);
    audio.play();
    middleContent = <>
      <Typography className={styles.subHeader}>
        Вы - орнитолог 80lvl.
      </Typography>
      <Typography>
        Викторина пройдена без единой ошибки!
      </Typography>
      <img
        src={victoryImg}
        className={styles.image}
      />
      </>;
  }
  return <Grid item>
    <Paper className={styles.container}>
      <Typography className={styles.headerStyle}>
        Поздравляем!
      </Typography>
      {middleContent}
      <Button
        className={styles.button}
        fullWidth
        color='primary'
        variant='contained'
        onClick={reset}
      >Попробовать еще раз!</Button>
    </Paper>
  </Grid>;
};

export default winScreen;
