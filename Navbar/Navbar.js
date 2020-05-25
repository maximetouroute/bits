import React, { Component } from 'react'
import { Link } from 'gatsby'
import './Navbar.scss'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PaletteRoundedIcon from '@material-ui/icons/PaletteRounded';
import RssFeedRoundedIcon from '@material-ui/icons/RssFeedRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';


export default function SimpleBottomNavigation() {


}

const classes = makeStyles({
  root: {
    boxShadow: '0 -1px 4px 0 rgba(99,99,99,.11)',
    borderTop: 'solid 1px #f0f0f0',
  },
});

export class Navbar extends Component {

  mobileMenuItems() {
    const links = this.props.links;
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
    )
  }
  menuItems() {
    const title = this.props.title
    const links = this.props.links
    return (
      <>
        <Link activeClassName="" className="siteTitle" to="/">
          {title}
        </Link>
        {links.map(link => (
          <Link activeClassName="active" to={link.path} key={link.name}>
            {link.name}
          </Link>
        ))}
      </>
    )

  }

  render() {
    return (
      <>
      <div className="SmallNavbar">
      {this.mobileMenuItems()}
      </div>
      <div className="BigNavbar">
        <div className="headerLinks">{this.menuItems()}</div>
      </div>
      </>
    )
  }
}

Navbar.propTypes = {
  title: PropTypes.string,
  links: PropTypes.array,
}

Navbar.defaultProps = {
  title: 'SiteTitle',
  links: [
    { path: '/', name: 'rootLink' },
    { path: '/somePath', name: 'somePage' },
    { path: '/otherPath', name: 'otherPage' },
  ],
}
