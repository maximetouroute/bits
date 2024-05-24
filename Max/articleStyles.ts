import { CSSObject } from '@emotion/react'
import { Theme } from '@mui/material'
import { breakpointKey } from '../styles/styles'
import { themedACSS } from '../styles/styles';

export const cardCSS = (theme: Theme): CSSObject => {
  return {
    paddingTop: '6rem',
    paddingBottom: '4rem',
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    justifyContent: 'center'
  }
}

export const articleCSS = (theme: Theme): CSSObject => {
    return {

a: {
    ...themedACSS(theme.palette.primary.main),
    },
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
    },

    p: {
        marginLeft: 0,
        marginRight: 0,
        marginBottom: '15px',
        marginTop: 0,
        textAlign: 'justify',
      }
  } 
  };
  