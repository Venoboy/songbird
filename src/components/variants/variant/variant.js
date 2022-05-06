import React, { useEffect, useState } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText/ListItemText';
import Divider from '@mui/material/Divider';
import { makeStyles } from '@mui/styles';
import colors from '../../../materialStyles/colors';

import classes from './variant.module.scss';
import countScore from '../../../helpers/countScore';
import errorMp3 from '../../../assets/sound/error.mp3';
import successMp3 from '../../../assets/sound/success.mp3';
import variantState from '../variantState';

const useStyles = makeStyles({
  divider: {
    background: colors.divider,
  },
  item: {
    padding: '15px',
  },
});

const variant = (props) => {
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
      scoreHandler(countScore('win'));
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

export default variant;
