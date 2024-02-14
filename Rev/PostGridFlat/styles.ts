import { CSSObject } from '@emotion/react'
import { breakpointKey } from '../../styles/styles'
import { Theme } from '@mui/material'
import { glassCSS } from '../../../globalStyles'
export const gridCSS = (theme: Theme): CSSObject => {
  return {
    margin: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    maxWidth: '90rem',
    width: '100%',
    padding: 0,
    color: theme.palette.secondary.contrastText,
    // backgroundColor: theme.palette.text.primary,
    textAlign: 'center',
  }
}

export const postCSS = (theme: Theme, color: string): CSSObject => {
  return {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    color: theme.palette.secondary.contrastText,

    // backgroundColor: 'transparent',
    // border: solid 2px $black
    transform: 'scale(0.97)',
    fontSize: '1rem',

    // opacity: 0.9,

    // transition: `-webkit-transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    //   transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    //   filter 250ms cubic-bezier(0.4, 0, 0.2, 1),
    //   opacity 250ms cubic-bezier(0.4, 0, 0.2, 1)`,
    transition: `color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    filter 250ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 250ms cubic-bezier(0.4, 0, 0.2, 1)`,
    textDecoration: 'none', // Post is a link element

    filter: 'contrast(0.95)',

    [breakpointKey('small')]: {
      width: '90vw',
      height: '90vh',
      maxHeight: '90vw',
      marginTop: '1em',
      marginCottom: '1em',
      filter: 'contrast(1)',
    },

    [breakpointKey('normal')]: {
      margin: '1em',
      width: '30vw',
      height: '30vw',
      maxWidth: '25em',
      maxHeight: '25em',
    },

    '&:hover': {
      border: 'none',
      cursor: 'pointer',
      transform: 'none',
      opacity: 1,
      filter: 'contrast(1.05)'
      // color: `${color} !important`,
    },



    borderRadius: glassCSS.borderRadius,
  }
}

export const backgroundImageCSS: CSSObject = {
    width: '100%',
    height: '100%',
    borderRadius: "100px",
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'stretch',

    '&:after': {
      borderRadius: glassCSS.borderRadius
    }
}
export const postHeadCSS: CSSObject = {
  flexGrow: 1,
  padding: '1em',
  margin: '2em',
  ...glassCSS,
}

export const postTitleCSS: CSSObject = {
  fontSize: '1.5em',
  fontWeight: 600,
  padding: '0.5rem',
  paddingBottom: 0,
  paddingLeft: 0,
  marginBottom: 0,
}

export const postSubtitleCSS: CSSObject = {
  fontSize: '1em',
  boxDecorationBreak: 'clone',
  padding: '0.5rem',
  paddingLeft: 0,
}

export const postPictureCSS: CSSObject = {
  flexGrow: 0.9,
  // backgroundRepeat: 'no-repeat',
  // backgroundSize: 'cover',
  // backgroundPosition: 'center top',
  // borderRadius: '1000px',
}
