import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import colors from '../../materialStyles/colors';
import PlayerBox from '../player/playerBox';
import defaultPic from '../../assets/pictures/defaultBird.jpg';

const useStyles = makeStyles(() => (
  {
    root: {
      flex: 1,
      border: `1px solid ${colors.divider}`,
      borderRadius: '5px',
      padding: '12px',
    },
  }
));

const summary = (props) => {
  const { isDetailed } = props;
  const styles = useStyles();
  let startMessage;
  if (isDetailed) {
    startMessage = <Paper className={styles.root}>
      <PlayerBox
        name='Ястреб'
        picSrc={defaultPic}
        isSummary={true}
      />
      <Typography>
        Описание птицы.
      </Typography>
    </Paper>;
  } else {
    startMessage = <Paper className={styles.root}>
      <Typography>
        Послушайте плеер. <br/>
        Выберите птицу из списка.
      </Typography>
    </Paper>;
  }
  return startMessage;
};

export default summary;
