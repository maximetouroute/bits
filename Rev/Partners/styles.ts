import { CSSObject } from '@emotion/react'
import { breakpointKey, basicTransitionCSS } from '../../styles/styles'
import { glassCSS } from '../../../globalStyles'

export const responsiveContainerCSS: CSSObject = {
  display: 'flex',
  justifyContent: 'center',
}

export const punchlineCSS: CSSObject = {
  fontSize: '1.5rem',
  [breakpointKey('small')]: {
    fontSize: '1.3rem',
  },
  fontWeight: 900,
  textAlign: 'center',
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

// CLIENTS LOGOSexport const
export const clientsLogoGridCSS: CSSObject = {
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  justifyContent: 'space-around',
  maxWidth: '90vw',
}
export const clientLogoCSS: CSSObject = {
  [breakpointKey('small')]: {
    minWidth: '8em',
    minHeight: '8em',
    margin: '1em',
  },

  [breakpointKey('normal')]: {
    minWidth: '8em',
    minHeight: '8em',
    margin: '2em',
  },

  padding: '2em',
  ...glassCSS,

  display: 'flex',
  alignItems: 'stretch',
  justifyContent: 'stretch',

  ...basicTransitionCSS,
  '&:hover': {
    ...basicTransitionCSS,
    cursor: 'pointer',
    transform: 'scale(1.05)',
  },
}

export const markeeContainerCSS: CSSObject = {
  width: '99vw',
}

export const marqueChildCSS = (size: number): CSSObject => {
  return {
    width: `${size}px`,
    height: `${size}px`,
    padding: `${size / 4}px`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
}

export const imageBackgroundForMarqueeCSS = (url: string): CSSObject => {
  return {
    // use padding to tell width
    minHeight: '100%',
    minWidth: '100%',
    background: `url(${url})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
  }
}
