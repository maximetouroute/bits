import { CSSObject } from '@emotion/react'
import { breakpointKey } from '../../styles/styles'
import { Theme } from '@mui/material'
import { glassCSS } from '../../../globalStyles'

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

  backgroundColor: '#fcf8fc',
  paddingTop: '4rem',
  paddingBottom: '4rem',
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
  textAlign: 'center',
}

export const punchlineParagraphCSS: CSSObject = {
  paddingLeft: '5rem',
  paddingRight: '5rem',
  textAlign: 'center',
}

export const howDoesItWorkCSS: CSSObject = {
  [breakpointKey('normal')]: {
    minWidth: '40rem',
    maxWidth: '50rem',
    alignItems: 'flex-start',
  },
  [breakpointKey('small')]: {
    minWidth: '90vw',
    padding: '0.2rem',
    paddingTop: '3rem',
    flexDirection: 'column',
    alignItems: 'center',
  },
  display: 'flex',
  justifyContent: 'center',
}

export const sublineCSS: CSSObject = {
  // fontSize: '1.1em',
  textAlign: 'center',
}
export const howDoesItWorkPartCSS: CSSObject = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '2rem',
}

export const subjectTitleCSS = (theme: Theme): CSSObject => {
  return {
    // padding: '2rem',
    // paddingTop: '1rem',
    paddingBottom: '0rem',
    fontSize: '1.25rem',
    color: 'white',
    backgroundColor: theme.palette.primary.main,
    borderRadius: glassCSS.borderRadius,
    padding: '1rem',
    userSelect: 'none',
  }
}

export const glassContainerCSS = (theme: Theme): CSSObject => {
  return {
    height: '60vh',
    margin: '4rem',
    padding: '0.5em',

    [breakpointKey('small')]: {
      margin: '2rem',
      height: '70vh',
    },
    backgroundColor: theme.palette.action.hover,
    borderRadius: glassCSS.borderRadius,
    boxShadow: `0 0 20px 3px ${theme.palette.action.hover}`,
    // ...glassCSS
  }
}

export const subjectVideoCSS: CSSObject = {
  height: '100%',
  borderRadius: glassCSS.borderRadius,
}
