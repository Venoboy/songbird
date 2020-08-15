import React from 'react';
import { Button, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import colors from '../../materialStyles/colors';

const useStyles = makeStyles(() => (
  {
    root: {
      border: `1px solid ${colors.divider}`,
    },
  }
));

const nextBtn = () => {
  const styles = useStyles();
  return <Paper className={styles.root}>
    <Button fullWidth>Следующий раздел</Button>
  </Paper>;
};

export default nextBtn;
