import React from 'react';
import { Box } from '@mui/system';
import logo from '../../assets/pictures/logo.svg';
import classes from './header.module.scss';
import Score from './score/scoreBox';

const header = (props) => (
  <Box className={classes.header}>
    <img src={logo} className={classes.logo} alt="logo"/>
    <Score score={props.score}/>
  </Box>
);

export default header;
