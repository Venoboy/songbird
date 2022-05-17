import { useEffect, useState } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import colors from '../../../materialStyles/colors';

import classes from './Variant.module.scss';
import countScore from '../../../helpers/countScore';
import errorMp3 from '../../../assets/sound/error.mp3';
import successMp3 from '../../../assets/sound/success.mp3';
import variantState from '../variantState';
import { scoreEnum } from '../../../helpers/helpers.types';
import { IVariant } from './Variant.types';

const useStyles = makeStyles({
  divider: {
    background: colors.divider,
  },
  item: {
    padding: '15px',
  },
});

const Variant = (props: IVariant) => {
  const {
    hasDivider, bird, answerId, variantsClickable, scoreHandler,
    setReadyNextChapter, setDetailedBird, setNotClickable,
  } = props;
  const id = bird.id - 1;
  const styles = useStyles();
  const audioRight = new Audio(successMp3);
  const audioWrong = new Audio(errorMp3);

  let circleStyle;

  const [varState, setVarState] = useState(variantState.unchecked);

  useEffect(() => {
    if (!props.detailedBird) {
      setVarState(variantState.unchecked);
    }
  });

  switch (varState) {
    case variantState.right:
      circleStyle = classes.coloredCircle__right;
      break;
    case variantState.wrong:
      circleStyle = classes.coloredCircle__wrong;
      break;
    default:
      circleStyle = classes.coloredCircle;
  }

  const variantClickHandler = () => {
    setDetailedBird(bird);
    if (!variantsClickable) return null;
    if (answerId === id) {
      setVarState(variantState.right);
      scoreHandler(countScore(scoreEnum.WIN));
      audioRight.play();
      setReadyNextChapter(true);
      setNotClickable();
    } else {
      setVarState(variantState.wrong);
      scoreHandler(countScore());
      audioWrong.play();
    }
    return null;
  };

  return <>
    <ListItem
      button
      className={styles.item}
      disableRipple={!variantsClickable}
      onClick={variantClickHandler}
    >
      <span className={circleStyle}/>
      <ListItemText primary={bird.name}/>
    </ListItem>
    {hasDivider ? <Divider className={styles.divider}/> : null}
  </>;
};

export default Variant;
