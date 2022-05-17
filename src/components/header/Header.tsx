import { Box } from '@material-ui/core';
import logo from '../../assets/pictures/logo.svg';
import classes from './header.module.scss';
import Score from './score/scoreBox';

const Header = (props: any) => (
  <Box className={classes.header}>
    <img src={logo} className={classes.logo} alt="logo"/>
    <Score score={props.score}/>
  </Box>
);

export default Header;
