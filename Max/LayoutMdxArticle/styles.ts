import { CSSObject } from '@emotion/react'
import { Theme } from '@mui/material'
import { breakpointKey } from '../../styles/styles'

export const nextPrevLinkCSS = (theme: Theme): CSSObject => {
  return {
    marginTop: '8rem',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    [breakpointKey('small')]: {
      // better style in case it takes two lines
      justifyContent: 'space-around',
      marginTop: '4rem',
    },

    a: {
      // ...themedACSS(theme.palette.primary.main),
      padding: '0.75em',
      // textOverflow: 'ellipsis',
      // marginBottom: '1em',
    },
  }
}

export const coverBandCSS = (theme: Theme): CSSObject => {
  return {
    textAlign: 'center',
    fontWeight: 600,
    color: theme.palette.primary.main,

    [breakpointKey('small')]: {
      padding: '2rem',
      paddingLeft: '1rem',
      paddingRight: '1rem',
    },
    [breakpointKey('normal')]: {
      padding: '2rem',
      paddingTop: '4rem'
    },
  
  }
}

export const subtextCSS: CSSObject = {
  display: 'flex',
  flexDirection: 'row',
  [breakpointKey('small')]: {
    flexDirection: 'column',
    fontSize: '1.4rem',
  },
  justifyContent: 'center',
  animation: 'fadein 1s',
  fontSize: '1.6rem',
  fontWeight: 300,
  lineHeight: '1.8em',
  textAlign: 'center',
  fontStyle: 'italic'
}

export const punchlineCSS: CSSObject = {
  animation: 'fadein 1s',
  fontSize: '2rem',
  paddingBottom: '1rem',
  textAlign: 'center',
  [breakpointKey('small')]: {
    fontSize: '1.5em',
  },
  fontWeight: 600
}
