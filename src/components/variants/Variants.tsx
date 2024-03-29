import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';

import colors from '../../materialStyles/colors';
import Variant from './variant/Variant';
import { IVariants } from './Variants.types';

const useStyles = makeStyles(() => ({
  root: {
    flex: 1,
    width: '100%',
    border: `1px solid ${colors.divider}`,
    borderRadius: '5px',
  },
}));

const Variants = (props: IVariants) => {
  const styles = useStyles();
  const { currentData } = props;

  const variantsElems = currentData.map((bird, index) => (
    <Variant
      key={bird.id}
      bird={bird}
      answerId={props.answerId}
      setDetailedBird={props.setDetailedBird}
      setNotClickable={props.setNotClickable}
      variantsClickable={props.variantsClickable}
      scoreHandler={props.scoreHandler}
      detailedBird={props.detailedBird}
      setReadyNextChapter={props.setReadyNextChapter}
      hasDivider={index < currentData.length - 1}
    />
  ));

  return (
    <Paper className={styles.root}>
      <List
        component="ul"
        disablePadding
      >
        {variantsElems}
      </List>
    </Paper>
  );
};

export default Variants;
