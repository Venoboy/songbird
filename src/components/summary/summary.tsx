import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import colors from '../../materialStyles/colors';
import PlayerSummaryBox from '../player/playerSummaryBox';
import { IBirdData } from '../../data/birds.types';

interface ISummary {
  detailedBird: IBirdData | undefined;
}

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

const summary = (props: ISummary) => {
  const { detailedBird } = props;
  const styles = useStyles();
  let summaryMessage;
  if (detailedBird) {
    summaryMessage = <Paper className={styles.root}>
      <PlayerSummaryBox
        name={detailedBird.name}
        picSrc={detailedBird.image}
        species={detailedBird.species}
        audioSrc={detailedBird.audio}
      />
      <Typography>
        {detailedBird.description}
      </Typography>
    </Paper>;
  } else {
    summaryMessage = <Paper className={styles.root}>
      <Typography>
        Послушайте плеер. <br/>
        Выберите птицу из списка.
      </Typography>
    </Paper>;
  }
  return summaryMessage;
};

export default summary;
