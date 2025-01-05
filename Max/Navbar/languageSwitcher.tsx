import React from 'react'
import { Link } from 'gatsby'
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

export const updateDefaultLanguage = (defaultLanguage: LangCode): void => {
    // console.log('update language to ', defaultLanguage)
    window.localStorage.setItem('language', defaultLanguage)
  }
  
  
export const languageSwitcher = (
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
              sx={{ fontSize: { xs: '1.2rem', md: '' } }}
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