import React, { Component } from 'react'
import { Link } from 'gatsby'
import './Navbar.scss'
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PaletteRoundedIcon from '@material-ui/icons/PaletteRounded';
import RssFeedRoundedIcon from '@material-ui/icons/RssFeedRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';

const useStyles = makeStyles({
  root: {
    boxShadow: '0 -1px 4px 0 rgba(99,99,99,.11)',
    borderTop: 'solid 2px #f0f0f0',
    color: 'red',
  },
});

export default function MobileNavbar(props) {
  const {links} = props;
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
// TODO: to make something truly factorised, user shall be able to override ths method by injecting it in the component
const populateIconForName = (name) => {
  switch(name) {
  case 'WORK':
    return <PaletteRoundedIcon />;
  case 'NEWS':
    return <RssFeedRoundedIcon />;
  case 'ABOUT':
    return <PersonRoundedIcon />;
    default:
      return <></>;
  }
};

  return (
    <BottomNavigation
    value={-1} // Trick material-ui its defaut value is incorrect. Active classname takes care of it
    showLabels
    className={classes.root}
  >
     {links.map(link => { 

       return (
        <BottomNavigationAction 
        key={link.path}
        label={link.path} 
        component={Link}
             to={link.path}
             label={link.name}
             activeClassName="Mui-selected"
             label={link.name}
             icon = {populateIconForName(link.name)}
             />
            
      )})} 
  </BottomNavigation>
  );
}
