import { CSSObject } from '@emotion/react'
import {
  breakpointKey,
  themedACSS,
  basicTransitionCSS,
} from '../../styles/styles'
import { Theme } from '@mui/material'

export const responsiveContainerCSS: CSSObject = {
  display: 'flex',
  justifyContent: 'center',
}

export const responsiveContainerInsideCSS: CSSObject = {
  [breakpointKey('normal')]: {
    minWidth: '60rem',
    maxWidth: '80rem',
  },
  [breakpointKey('small')]: {
    minWidth: '90vw',
    // padding: '0.2rem',
  },
}

export const mainViewCSS: CSSObject = {
  ...responsiveContainerCSS,
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '8rem',
  paddingBottom: '8rem',
}

export const mainViewInsideCSS: CSSObject = {
  ...responsiveContainerInsideCSS,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  [breakpointKey('small')]: {
    flexDirection: 'column',
  },
}

export const punchlineCSS: CSSObject = {
  // fontSize: '2rem',
  // [breakpointKey('small')]: {
  //   fontSize: '3rem',
  // },
  // fontWeight: 900,
  textAlign: 'center',
  marginBottom: '2rem',
}

export const punchlineParagraphCSS: CSSObject = {
  fontSize: '1.1em',
  textAlign: 'center',
}

export const contactInfosCSS = (theme: Theme): CSSObject => {
  return {
    marginTop: '2em',
    fontSize: '1.1em',
    textAlign: 'center',
    lineHeight: 1,
    a: {
      ...themedACSS(theme.palette.secondary.main),
    },
  }
}
