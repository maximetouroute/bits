import React from 'react'
import { Link } from 'gatsby'
import './Navbar.scss'
import MobileNavbar from './old/MobileNavbar'
import { CSSObject, Theme, ThemeProvider, StyledEngineProvider, Global, useTheme } from '@emotion/react';
import { breakpointKey } from '../styles/styles'


declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}


// Navbar.propTypes = {
//   title: PropTypes.string,
//   links: PropTypes.array,
// }

// Navbar.defaultProps = {
//   title: 'SiteTitle',
//   links: [
//     { path: '/', name: 'rootLink' },
//     { path: '/somePath', name: 'somePage' },
//     { path: '/otherPath', name: 'otherPage' },
//   ],
// }

const smallNavbarCSS: CSSObject = {
  [breakpointKey('normal')]: {
    display: 'none',
  },
}

const bigNavbarCSS = (theme: Theme): CSSObject => {
  return {
    backgroundColor: theme.palette.primary.main,
    [breakpointKey('small')]: {
      display: 'none',
    },
  }
}

interface NavbarLink {
  path: string
  name: string
}
interface OwnProps {
  title: string
  links: NavbarLink[]
}

export default function Navbar({ title, links }: OwnProps) {
  const theme = useTheme()

  const menuItems = () => {
    return (
      <>
        <Link activeClassName="" className="siteTitle" to="/">
          {title}
        </Link>
        {links.map((link) => (
          <Link activeClassName="active" to={link.path} key={link.name}>
            {link.name}
          </Link>
        ))}
      </>
    )
  }

  return (
    <div
      className="Navbar"
      style={{ backgroundColor: theme.palette.primary.main }}
    >
      <div css={smallNavbarCSS}>
        <MobileNavbar links={links} />
      </div>
      <div className="BigNavbar" css={bigNavbarCSS(theme)}>
        <div
          className="headerLinks"
          style={{ backgroundColor: theme.palette.primary.main }}
        >
          {menuItems()}
        </div>
      </div>
    </div>
  )
}
