import React from 'react'
import { Link } from 'gatsby'
import './../Navbar.scss'
import makeStyles from '@mui/styles/makeStyles';
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import PaletteRoundedIcon from '@mui/icons-material/PaletteRounded'
import RssFeedRoundedIcon from '@mui/icons-material/RssFeedRounded'
import PersonRoundedIcon from '@mui/icons-material/PersonRounded'
import { DEFAULT_MAIN_COLOR } from '../../styles/styles'
const useStyles = makeStyles({
  root: {
    boxShadow: '0 -2px 2px 0 rgb(99 99 99 / 10%)',
    // borderTop: ' solid 1px #ebebeb',
  },
})

const useChildStyles = makeStyles({
  root: {
    color: '${DEFAULT_MAIN_COLOR}4A',
  },
  selected: {
    color: `${DEFAULT_MAIN_COLOR}`,
    fontWeight: 700,
    boxShadow: `inset 0 2px 0 0 ${DEFAULT_MAIN_COLOR}`,
  },
})

export default function MobileNavbar(props) {
  const { links } = props
  const classes = useStyles()
  const childClasses = useChildStyles()
  const [value, setValue] = React.useState(0)
  // TODO: to make something truly factorised, user shall be able to override ths method by injecting it in the component
  const populateIconForName = (name) => {
    switch (name) {
      case 'WORK':
      case 'PROJETS':
      case 'PROJECTS':
        return <PaletteRoundedIcon />
      case 'NEWS':
        return <RssFeedRoundedIcon />
      case 'ABOUT':
      case 'A PROPOS':
        return <PersonRoundedIcon />
      default:
        return <></>
    }
  }

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
        )
      })}
    </BottomNavigation>
  )
}
