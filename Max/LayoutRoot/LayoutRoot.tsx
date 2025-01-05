import React from 'react'
import Footer from '../../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import MobileAppBar from '../Navbar/MobileAppBar'
import {
  ThemeProvider as MaterialThemeProvider,
  createTheme,
} from '@mui/material/styles'
import { makeMaxTheme } from '../theme'
import { ThemeProvider, Global } from '@emotion/react'
import LanguageSwitcher from '../../Common/LanguageSwitcher/LanguageSwitcher'
import { defaultLang } from '../../../locales/locales'
import { languageAutoRedirect } from '../../Common/locales/localeUtils'
import { navbarConfig, footerConfig } from '../../../globalConfig'
import { supportedLangs } from '../../../locales/locales'
import {
  appBarCSS,
  gridContentCSS,
  gridFooterCSS,
  gridNavBarCSS,
  gridNavContentFooterCSS,
} from './styles'
import { bodyCSS } from '../../../globalStyles'

interface OwnProps {
  children: any
  language: any
  location: any
  accentColor?: string
}
export default function LayoutRoot({
  children,
  language,
  location,
  accentColor,
}: OwnProps) {
  // const isItRootUrl =
  //   location.pathname === '/' ||
  //   location.pathname === '/fr' ||
  //   location.pathname === '/fr/'
  // homepage: single slash
  if(supportedLangs[language] === void 0) {
    language = defaultLang;
  }
  // Skip build, Browsers only
  if (typeof window !== 'undefined') {
    languageAutoRedirect(language, location.pathname)
  }
  const theme = makeMaxTheme(accentColor);

  return (
    <MaterialThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <Global
          styles={{
            body: bodyCSS(theme),
          }}
        />
        <div css={gridNavContentFooterCSS}>
          <div css={appBarCSS}>
            <MobileAppBar title={navbarConfig.name} />
          </div>
          <nav css={gridNavBarCSS}>
            <Navbar
              title={navbarConfig.name}
              links={navbarConfig.links[language].links}
              currentLangCode={language}
              currentUrl={location.pathname}
            />
          </nav>
          <div css={gridContentCSS}>{children}</div>
          <div css={gridFooterCSS}>
            <Footer customLinks={footerConfig[language].links} />
            {location && (
              <LanguageSwitcher
                currentLangCode={language}
                currentUrl={location.pathname}
              />
            )}
          </div>
        </div>
      </ThemeProvider>
    </MaterialThemeProvider>
  )
}
