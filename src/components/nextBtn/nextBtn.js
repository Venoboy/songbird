import React from 'react';
import { Button, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';

import colors from '../../materialStyles/colors';
import myDefaultTheme from '../../materialStyles/myDefaultTheme';

const useStyles = makeStyles((props) => (
  {
    buttonContainer: {
      border: `1px solid ${colors.divider}`,
    },
    button: {
      color: props.palette.text.primary,
    },
  }
));

const nextBtn = (props) => {
  const { readyNextChapter, goNextChapter } = props;
  myDefaultTheme.readyNextChapter = readyNextChapter;
  const styles = useStyles(myDefaultTheme);
  return <Paper className={styles.buttonContainer}>
    <Button
      fullWidth
      disableRipple={!readyNextChapter}
      onClick={goNextChapter}
      className={styles.button}
      color={readyNextChapter ? 'primary' : 'inherit'}
      variant={readyNextChapter ? 'contained' : 'text'}
    >Следующий раздел
    </Button>
  </Paper>;
};

export default nextBtn;
