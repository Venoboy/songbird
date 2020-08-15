import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import colors from '../../../materialStyles/colors';

import classes from './variant.module.scss';

const useStyles = makeStyles({
  divider: {
    background: colors.divider,
  },
  item: {
    padding: '15px',
  },
});

const activateLasers = (e) => {
  console.log(e);
};

const variant = (props) => {
  const { hasDivider, bird } = props;
  const styles = useStyles();
  return <>
      <ListItem
        button
        className={styles.item}
        onClick={(e) => activateLasers(e)}
      >
        <span className={classes.listButtons}/>
        <ListItemText primary={bird.name}/>
      </ListItem>
      {hasDivider ? <Divider className={styles.divider}/> : null}
    </>;
};

export default variant;
