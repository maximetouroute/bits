import React from 'react'
import RevealityFooter from './../RealFooter/Footer'
import {
  ThemeProvider as MaterialThemeProvider,
  createTheme,
} from '@mui/material/styles'
import { ThemeProvider, Global } from '@emotion/react'
import { defaultLang } from '../../../locales/locales'
import { languageAutoRedirect } from '../../Common/locales/localeUtils'
import { navbarConfig, footerConfig } from '../../../globalConfig'
import {
  gridContentCSS,
  gridFooterCSS,
  gridNavContentFooterCSS,
} from './styles'
import { bodyCSS } from '../../../globalStyles'
import AppAppBar from '../AppBar/AppBar'

interface OwnProps {
  children: any
  language: any
  location: any
  skipLanguageAutoRedirect?: boolean
}
export default function LayoutRoot({
  children,
  language,
  location,
  skipLanguageAutoRedirect = false,
}: OwnProps) {
  // const isItRootUrl =
  //   location.pathname === '/' ||
  //   location.pathname === '/fr' ||
  //   location.pathname === '/fr/'
  // homepage: single slash

  if (language !== 'fr' && language !== 'en') {
    language = defaultLang
  }
  // Skip build, Browsers only
  if (typeof window !== 'undefined' && !skipLanguageAutoRedirect) {
    languageAutoRedirect(language, location.pathname + location.hash)
  }
  const theme = createTheme({
    palette: {
      mode: 'light',
      background: {
        default: 'hsla(300,40%,98%,1)',
      },
      primary: {
        main: '#5122dd',
      },
      secondary: {
        main: '#2251dd',
      },
      info: {
        main: '#2251dd',
      },
      background: {
        default: 'hsla(300,40%,98%,1)',
        paper: 'transparent',
      },
      action: {
        hover: '#7b56eb38',
      },
      text: {
        primary: '#28116F', //'#131b4b',
        secondary: '#1a58bc',
      },

      // FOR TEXT ? #34393A
      // action: {
      //   hover: 'rgba(0,0,0,0.56)',
      // },
      // Used by `getContrastText()` to maximize the contrast between
      // the background and the text.
      contrastThreshold: 3,
      // Used by the functions below to shift a color's luminance by approximately
      // two indexes within its tonal palette.
      // E.g., shift from Red 500 to Red 300 or Red 700.
      tonalOffset: 0.2,
    },

    typography: {
      // fontFamily: ["Be Vietnam Pro", "Roboto", "sans-serif"].join(","),
      // fontSize:   13,
      // fontWeightRegular: 300,
      body1: {
        lineHeight: 1.8,
        // letterSpacing: 2
      },
    },
  })

  return (
    <MaterialThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <Global
          styles={{
            body: bodyCSS(theme),
          }}
        />
        <div css={gridNavContentFooterCSS}>
          <AppAppBar
            currentLangCode={language}
            currentUrl={location.pathname}
          />

          <div css={gridContentCSS}>{children}</div>
          <div css={gridFooterCSS} id={'contact'}>
            <RevealityFooter
              lang={language}
              customLinks={footerConfig[language].links}
            />
          </div>
        </div>
      </ThemeProvider>
    </MaterialThemeProvider>
  )
}
