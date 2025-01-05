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
  langLinkCSS,
  linkCSS
} from './styles'
import { Typography } from '@mui/material'
import { LangCode  } from '../../types'
import { supportedLangs } from '../../../locales/locales'

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

const updateDefaultLanguage = (defaultLanguage: LangCode): void => {
  // console.log('update language to ', defaultLanguage)
  window.localStorage.setItem('language', defaultLanguage)
}


const languageSwitcher = (
  theme: Theme,
  currentUrl: string,
  currentLangCode: LangCode
) => {
  return (
    <>
      {Object.keys(supportedLangs).map((langCode: string, index: number) => {
        // alert(this.props.currentUrl);
        const baseUrl = currentUrl
          .replace(supportedLangs[currentLangCode].urlPrefix, '') // Remove language prefix
          .replace('//', '/') // Avoid possible double slash
        return (
          <Typography
            variant="body2"
            color="text.primary"
            sx={{ fontSize: { xs: '1.4rem', md: '' } }}
          >
            <Link
              key={index}
              to={baseUrl}
              onClick={() => {
                updateDefaultLanguage(langCode as LangCode)
              }}
              css={langLinkCSS(theme, currentLangCode === langCode)}
            >
              {supportedLangs[langCode].shortName}
            </Link>
          </Typography>
        )
      })}
    </>
  )
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
