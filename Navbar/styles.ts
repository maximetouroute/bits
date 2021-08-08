import { CSSObject, Theme } from '@emotion/react'
import { breakpointKey } from '../styles/styles'

export const linkStyle = (theme: Theme): CSSObject => {
  return {
    textTransform: 'uppercase',
    padding: '0.8em',
    margin: 0,
    marginRight: '2em',
    marginLeft: '2em',
    color: 'white',
    fontSize: '1.2em',
    border: 'solid 2px transparent',
    textDecoration: 'none',

    '&:hover': {
      // color: $colorActive,
      cursor: 'pointer',
      textDecoration: 'none',
      transition: 'all 0.1s ease-in-out 0s',
      boxShadow: '0px 2px 0px white',
    },

    '&:active, &:focus': {
      outline: 0,
      outlineStyle: 'none',
    },

    [breakpointKey('normal')]: {
      textAlign: 'right',
    },
    [breakpointKey('small')]: {
      textAlign: 'center',
    },
  }
}
