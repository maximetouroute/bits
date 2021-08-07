import React from 'react'
import { Link } from 'gatsby'
import './Navbar.scss'
import { makeStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import PaletteRoundedIcon from '@material-ui/icons/PaletteRounded'
import RssFeedRoundedIcon from '@material-ui/icons/RssFeedRounded'
import PersonRoundedIcon from '@material-ui/icons/PersonRounded'

const useStyles = makeStyles({
  root: {
    boxShadow: '0 -1px 4px 0 rgba(99,99,99,.11)',
    // borderTop: ' solid 1px #ebebeb',
  },
})

const useChildStyles = makeStyles({
  root: {
    color: '#99858a',
  },
  selected: {
    color: '#800f2f',
    fontWeight: 700,
    boxShadow: 'inset 0 2px 0 0 #800f2f',
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
