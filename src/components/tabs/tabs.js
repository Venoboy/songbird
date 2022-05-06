import React from 'react';
import { Typography } from '@mui/material';

import classes from './tabs.module.scss';
import { birdSpecies } from '../../data/birds';

const tabs = (props) => {
  const { currentTab } = props;

  const handleChange = () => {
    // setValue(newValue);
  };

  const setClassName = (index) => (
    (index === currentTab) ? classes.currentTab : classes.singleTab
  );

  const tabsArr = birdSpecies.map((elem, index) => (
    <div className={setClassName(index)} key={index}>
      <Typography display='inline' className={classes.tabText}>{elem}</Typography>
    </div>
  ));

  return <div className={classes.tabsButtons} onClick={handleChange}>
    {tabsArr}
  </div>;
};

export default tabs;
