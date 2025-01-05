import React from 'react'
import { Link } from 'gatsby'
import MobileNavbar from './MobileNavbar'
import { Theme, useTheme } from '@emotion/react'
import {
  appbarElementsCSS,
  bigAppbarCSS,
  smallAppbarCSS,
  activeLinkCSS,
  logoCSS,
  linkCSS
} from './styles'
import { Typography } from '@mui/material'
import { LangCode  } from '../../types'
import { languageSwitcher } from './languageSwitcher';

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

interface NavbarLink {
  path: string
  name: string
}
interface OwnProps {
  title: string
  links: NavbarLink[]
  currentLangCode: LangCode
  currentUrl: string
}



export default function Navbar({ title, links, currentUrl, currentLangCode }: OwnProps) {
  const theme = useTheme()

  const menuItems = () => {
    return (
      <>
        <div css={logoCSS}>
          <Typography fontWeight={900}>
          {title}
         </Typography>
        </div>
       

        {links.map((link) => (
            <Link
            css={linkCSS}
            activeStyle={activeLinkCSS(theme)}
            to={link.path}
            key={link.name}
          >
            <Typography>
            {link.name}
            </Typography>
          </Link>
          
         
        ))}
        
        <div css={{alignSelf: 'center', justifyContent: 'flex-end', display:'flex'}}>
        {languageSwitcher(theme, currentUrl, currentLangCode)}
        </div>
      
      </>
    )
  }

  return (
    <>
      <div css={smallAppbarCSS}>
        <MobileNavbar links={links} />
      </div>
      <div css={bigAppbarCSS}>
        <div css={appbarElementsCSS}>{menuItems()}</div>
      </div>
    </>
  )
}
