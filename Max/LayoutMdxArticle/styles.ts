import { CSSObject } from '@emotion/react'
import { Theme } from '@mui/material'
import { breakpointKey } from '../../styles/styles'
import { themedACSS } from '../../styles/styles'

export const nextPrevLinkCSS = (theme: Theme): CSSObject => {
  return {
    marginTop: '4rem',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    [breakpointKey('small')]: {
      // better style in case it takes two lines
      justifyContent: 'space-around',
      marginTop: '2em',
    },

    a: {
      ...themedACSS(theme.palette.primary.main),
      padding: '0.75em',
      textOverflow: 'ellipsis',
      marginBottom: '1em',
    },
  }
}

export const articleCSS = (theme: Theme): CSSObject => {
  return {
  h1: {
    fontSize: '2.4em',
    textAlign: 'start',
    [breakpointKey('small')]: {
      fontSize: '1.7em',
    },
    fontWeight: 400,
  },
  h2: {
    textAlign: 'start',
    fontSize: '1.8em',
    [breakpointKey('small')]: {
      fontSize: '1.4em',
    },

    fontWeight: 400,
  },
  h3: {
    textAlign: 'start',
    fontSize: '1.5em',
    [breakpointKey('small')]: {
      fontSize: '1.3em',
    },
    fontWeight: 400,
  },
  h4: {
    textAlign: 'start',
    fontSize: '1.6em',
    fontWeight: 600,
    margin: 0.6,
    marginBottom: '1em',
  },
  h5: {
    textAlign: 'start',
    margin: 0,
  },
  h6: {
    textAlign: 'start',
    margin: 0,
  },

  ul: {
    color: 'rgb(50, 50, 50)',
    // list-style-type: none;
    fontSize: '1rem',
    paddingLeft: '1rem',

    li: {
      paddingTop: '0.2rem',
      paddingBottom: '0.2rem',
    },
  },
  hr: {
    backgroundColor: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
    height: '1px',
    marginTop: '1em',
    marginBottom: '1em',
    width: '250px',
    display: 'flex',
    alignSelf: 'center',
    flexDirection: 'column',
  }
} 
};

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


// export const cardCSS: CSSObject = {
//   [breakpointKey('normal')]: {
//     width: '50rem',
//   },
//   [breakpointKey('small')]: {
//     minWidth: '90vw',
//   },
// }

export const pageCSS = (theme: Theme): CSSObject => {
  return {
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    justifyContent: 'center',
    a: {
      ...themedACSS(theme.palette.secondary.main),
    },
    p: {
      marginLeft: 0,
      marginRight: 0,
      marginBottom: '15px',
      marginTop: 0,
      textAlign: 'justify',
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
  fontWeight: 400,
  lineHeight: '1.8em',
  textAlign: 'center',
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
