import { Button, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import colors from '../../materialStyles/colors';
import myDefaultTheme from '../../materialStyles/myDefaultTheme';
import { goNextChapterType } from '../../containers/App.types';

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

interface INextBnt {
  readyNextChapter: boolean;
  goNextChapter: goNextChapterType;
}

const NextBtn = (props: INextBnt) => {
  const { readyNextChapter, goNextChapter } = props;
  // myDefaultTheme.readyNextChapter = readyNextChapter;
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

export default NextBtn;
