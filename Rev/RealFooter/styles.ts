import { CSSObject } from '@emotion/react'
import {
  basicTransitionCSS,
  breakpointKey,
  themedACSS,
  injectLinkCSS,
} from '../../styles/styles'
import { Theme } from '@mui/material'
import { gradientBackground4CSS } from '../../../globalStyles'
const color = '#34393a'

const $accentColorIdle = 'black' //rgb(77, 102, 153);
const $colorUnselected = 'rgb(200, 200, 200)'

// Possibility to override through this file
// @import '../../components/bitStyleOverride.scss';

const $colorHover = $accentColorIdle
const $underlineColor = `rgba(#649DE5, 0.3)`

export const insideCSS: CSSObject = {
  marginBottom: '1em',
  lineHeight: '1.4em',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-end',
  flexWrap: 'nowrap',
  [breakpointKey('small')]: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
}

export const footerCSS: CSSObject = {
  color: color,
  width: '100%',
  ...gradientBackground4CSS,
}

export const linksCSS = (theme: Theme): CSSObject => {
  return {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    [breakpointKey('small')]: {
      flexDirection: 'row',
    },

    ...injectLinkCSS(theme),
  }
}

export const socialLinksCSS: CSSObject = {
  paddingLeft: '1em',
  paddingRight: '1em',
  display: 'flex',
  flexDirection: 'column',
}

export const socialMediaListCSS: CSSObject = {
  display: 'flex',
  flexDirection: 'row',
  fontSize: '1em',
  justifyContent: 'center',
}

export const socialIconCSS: CSSObject = {}

export const svgIconCSS: CSSObject = {
  width: '30px',
  height: '30px',
  marginLeft: '10px',
  marginRight: '10px',
  marginTop: '20px',
  marginBottom: '20px',
  transition: 'all 0.2s ease-in',
  path: {
    fill: $colorUnselected,
    transition: 'all 0.2s ease-in',
  },

  '&:hover': {
    transition: 'all 0.1s ease-in',
    path: {
      fill: $colorHover,
      transition: 'all 0.1s ease-in',
    },
  },
}

const threeBlocksMiddleCentered: CSSObject = {
  [breakpointKey('small')]: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  [breakpointKey('normal')]: {
    width: '30vw',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
}

export const contactCSS: CSSObject = {
  ...threeBlocksMiddleCentered,
}

export const contactInfosCSS = (theme: Theme): CSSObject => {
  return {
    fontSize: '1.2em',
    textAlign: 'center',
    color: color,
    lineHeight: 1.6,
    ...injectLinkCSS(theme),
  }
}

export const headerCSS: CSSObject = {
  fontSize: '2em',
  fontWeight: 600,
  marginBottom: '0.4em',
}

export const followUsCSS: CSSObject = {
  p: {
    textAlign: 'center',
    color: color,
  },
}

export const followUsStuffCSS = (theme: Theme): CSSObject => {
  return {
    fontSize: '2rem',
    textAlign: 'center',

    a: {
      padding: '1rem',
      // $underlineColor: 'rgba(#649de5, 1)', //rgba(150,150,150, 0.5);
      textDecoration: 'none',
      // border-bottom: 4px solid $underlineColor;
      color: theme.palette.action.active,
      lineHeight: 1.5,
      ...basicTransitionCSS,
      '&:hover': {
        transform: 'scale(140%)',
        color: theme.palette.primary.main,
        // workaround for some material icons (like twitter)
        svg: {
          ...basicTransitionCSS,
          color: theme.palette.primary.main,
        },
        outline: 0,
      },

      '&:visited': {
        textDecoration: 'none',
        color: 'inherit',
      },

      '&:active, &:focus': {
        outline: 0,
        outlineStyle: 'none',
      },
    },
  }
}
