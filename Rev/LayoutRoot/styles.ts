import { CSSObject } from '@emotion/react'
import { breakpointKey } from '../../styles/styles'
import { Theme } from '@mui/material'

export const gridNavContentFooterCSS: CSSObject = {
  width: '100%',
  margin: 0,
  padding: 0,
  display: 'grid',
  gridGap: 0,
  gridTemplateAreas: `'nav nav' 'content content' 'content content' 'footer footer' 'navBottom navBottom'`,
  justifyItems: 'stretch',
}

export const appBarCSS = {
  justifySelf: 'stretch',
  gridArea: 'nav',
  textAlign: 'right',
  [breakpointKey('normal')]: {
    display: 'none',
  },
}

export const gridNavBarCSS = {
  justifySelf: 'stretch',
  gridArea: 'nav',
  textAlign: 'right',
  // position: 'sticky',
  // top: 0,
  // zIndex: 1,
  width: '100vw',

  // bottom nav menu
  [breakpointKey('small')]: {
    // padding: 0,
    //position: sticky; TODO: use this and remove width when firefox mobile doesnt jump on scroll anymore (May 2020)
    // position: 'fixed',
  },
}

export const customColorCSS = (theme: Theme): CSSObject => {
  return {
    backgroundColor: theme.palette.secondary.main,
  }
}

export const gridContentCSS = {
  gridArea: 'content',
  borderTop: 0,
  paddingBottom: '4em',
  [breakpointKey('small')]: {
    paddingLeft: 0,
    paddingRight: 0,
    border: 'none',
  },
}

export const gridFooterCSS = {
  gridArea: 'footer',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '4rem',
}
