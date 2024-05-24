import { CSSObject } from '@emotion/react'
import { Theme } from '@mui/material'
import { breakpointKey } from '../../styles/styles'

export const langLinkCSS = (theme: Theme, active: boolean): CSSObject => {
  return {
    color: theme.palette.text.primary,
    padding: '0.5em',
    borderRadius: '0.5em',
    textDecoration: 'none',
    fontWeight: active ? 900 : 400,
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
  }
}


export const navbarElementCSS = (theme: Theme): CSSObject => {
  return {
    userSelect: 'none',
    textTransform: 'uppercase',
    padding: '0.8em',
    margin: 0,
    marginRight: '2em',
    marginLeft: '2em',
    color: theme.palette.primary.main,
    fontSize: '1.2em',
    border: 'solid 2px transparent',
    textDecoration: 'none',
    [breakpointKey('normal')]: {
      textAlign: 'right',
    },
    [breakpointKey('small')]: {
      textAlign: 'center',
    }
  }
};

export const logoCSS = (theme: Theme): CSSObject => {
  return {
    ...navbarElementCSS(theme),
    fontWeight: 600,
  }
};

export const linkCSS = (theme: Theme): CSSObject => {
  return {
    ...navbarElementCSS(theme),

      '&:hover': {
        // color: $colorActive,
        cursor: 'pointer',
        textDecoration: 'none',
        transition: 'all 0.1s ease-in-out 0s',
        boxShadow: `0px 2px 0px ${theme.palette.primary.main}`,
      },
  
      '&:active, &:focus': {
        outline: 0,
        outlineStyle: 'none',
      },

  
    };
 }


export const appbarElementsCSS: CSSObject = {
    [breakpointKey('small')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      textAlign: 'center',
    },

    [breakpointKey('normal')]: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    },

    a: {

    }
};

export const activeLinkCSS = (theme: Theme): CSSObject => {
  return {
    color: theme.palette.primary.main,
    fontWeight: 800,
    boxShadow: `0px 2px 0px ${theme.palette.secondary.contrastText}`,
  }
}

export const smallAppbarCSS: CSSObject = {
  [breakpointKey('normal')]: {
    display: 'none',
  },
}

export const bigAppbarCSS: CSSObject = {
    [breakpointKey('small')]: {
      display: 'none',
    },
}