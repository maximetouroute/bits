import React from 'react';
import { Link } from 'gatsby';
import './Navbar.scss';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PaletteRoundedIcon from '@material-ui/icons/PaletteRounded';
import RssFeedRoundedIcon from '@material-ui/icons/RssFeedRounded';
import EventIcon from '@material-ui/icons/Event';
import PhotoLibraryOutlinedIcon from '@material-ui/icons/PhotoLibraryOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
//$accentColor: #85b94f; //#aac989; //#4d9933;
//$accentLight: #aac989;
//$accentColorIdle: #2b6b15;

const useStyles = makeStyles({
  root: {
    boxShadow: '0 -2px 4px 0 rgba(99,99,99,.3)',
    //borderTop: " solid 1px #ebebeb",
    backgroundColor: '#f2ede9',
  },
});

const useChildStyles = makeStyles({
  root: {
    color: 'dimgray',
  },
  selected: {
    color: '#506b5c',
    fontWeight: 700,
    boxShadow: 'inset 0 -2px 0 0 #506b5c',
  },
});

export default function MobileNavbar(props) {
  const { links } = props;
  const classes = useStyles();
  const childClasses = useChildStyles();
  const [value, setValue] = React.useState(0);
  // TODO: to make something truly factorised, user shall be able to override ths method by injecting it in the component
  const populateIconForName = (name) => {
    switch (name) {
      case 'WORK':
        return <PaletteRoundedIcon />;
      case 'NEWS':
        return <RssFeedRoundedIcon />;
      case 'BOOKING':
      case 'RESERVER':
        return <EventIcon />;
      case 'HOME':
      case 'ACCUEIL':
        return <HomeOutlinedIcon />;
      case 'GALLERY':
      case 'GALERIE':
        return <PhotoLibraryOutlinedIcon />;
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
      {links.map((link) => {
        return (
          <BottomNavigationAction
            key={link.path}
            label={link.path}
            component={Link}
            className={childClasses.root}
            to={link.path}
            label={link.name}
            activeClassName={childClasses.selected}
            label={link.name}
            icon={populateIconForName(link.name)}
          />
        );
      })}
    </BottomNavigation>
  );
}
