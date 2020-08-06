import React from 'react';
import { Box } from '@material-ui/core';
import logo from '../../assets/pictures/logo.svg';
import classes from './header.module.scss';
import Score from './score/score';
// import { makeStyles } from '@material-ui/styles';

// const useStyles = makeStyles(() => {
//
// });
const header = () => (
  <Box className={classes.header}>
    <img src={logo} className={classes.logo} alt="logo"/>
    <Score/>
  </Box>
);

export default header;
