import React, { useState } from 'react';
import { AppBar, Tab, Tabs } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: '5px',
    color: theme.palette.text.primary,
  },
  tabs: {
    display: 'flex',
  },
  flexContainer: {
    flexWrap: 'wrap',
  },
}));

const tabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const classes = useStyles();

  return <AppBar position="static" className={classes.root}>
    <Tabs
      className={classes.tabs}
      value={value}
      onChange={handleChange}
      indicatorColor='secondary'
      variant='scrollable'
      scrollButtons='auto'
      orientation='vertical'
    >
      <Tab label="Разминка"/>
      <Tab label="Воробьиные"/>
      <Tab label="Лесные птицы"/>
      <Tab label="Певчие птицы"/>
      <Tab label="Хищные птицы"/>
      <Tab label="Морские птицы"/>
    </Tabs>
  </AppBar>;
};

export default tabs;
