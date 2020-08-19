import React from 'react';
import {
  Button, Grid, Paper, Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import myDefaultTheme from '../../materialStyles/myDefaultTheme';
import countScore from '../../helpers/countScore';

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
  numbers: {
    fontWeight: 'bold',
  },
  button: {
    color: theme.palette.text.primary,
    marginTop: '100px',
  },
}));

const winScreen = (props) => {
  const reset = () => {
    props.resetScore();
    countScore('reset');
  };

  const styles = useStyles(myDefaultTheme);
  return <Grid item>
    <Paper className={styles.container}>
      <Typography className={styles.headerStyle}>
        Поздравляем!
      </Typography>
      <Typography>
        Вы прошли викторину и набрали <span className={styles.numbers}>22</span>{' '}
        из <span className={styles.numbers}>30</span> возможных баллов
      </Typography>
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
