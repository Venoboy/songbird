import React from 'react';
import { AppBar, Tab, Tabs } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: '5px',
    color: theme.palette.text.primary,
  },
}));

const tabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const classes = useStyles();

  return <AppBar position="static" className={classes.root}>
    <Tabs
      value={value}
      onChange={handleChange}
      centered={true}
      indicatorColor='secondary'
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
