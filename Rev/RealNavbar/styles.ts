import { CSSObject } from '@emotion/react'
import { breakpointKey } from '../../styles/styles'
import { glassCSS } from '../../../globalStyles'
import { basicTransitionCSS } from '../../styles/styles'

export const mobileNavbarCSS: CSSObject = {
  display: 'none',
  [breakpointKey('small')]: {
    display: 'inherit',
  },
}

export const desktopNavbarCSS: CSSObject = {
  [breakpointKey('small')]: {
    display: 'none',
  },
}

export const containerCSS: CSSObject = {
  // paddingTop: '2em',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingLeft: '2em',
  paddingRight: '2em',
  margin: '1rem',
  color: '#34393A',
  backgroundColor: 'transparent',
  // backgroundColor: '#e5f9ff',
  // background: `linear-gradient(0deg, #e5f9ff 0%, transparent 100%)`,

  [breakpointKey('small')]: {
    paddingLeft: '1em',
    paddingRight: '1em',
  },
}

export const mobileContainerCSS: CSSObject = {
  paddingLeft: '2em',
  paddingRight: '2em',
  margin: '1rem',
  color: '#34393A',

  ...glassCSS,
  borderRadius: `${2 * 1.5}rem`,
  // For children (links)
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
}

export const logoCSS: CSSObject = {
  fontWeight: 900,
  fontStyle: 'italic',
  // backgroundImage: 'linear-gradient(-225deg, #FFC796 0%,  #FFC796 48%, #45D4FB 100%)',
  // backgroundClip: 'text',
  // textFillColor: 'transparent',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width: '7rem',
  height: `1.5rem`,

  // marginBottom: 0,
  opacity: 0.9,
  paddingTop: '1rem',
  paddingBottom: '1rem',
  transition: 'transform 200ms linear',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}

export const centralBarCSS: CSSObject = {
  alignSelf: 'stretch',
  justifySelf: 'stretch',
  paddingLeft: '0.5em',
  paddingRight: '0.5em',
  /* From https://css.glass */
  ...glassCSS,
  borderRadius: `${2 * 1.5}rem`,
  // For children (links)
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'stretch',
}

export const linkCSS: CSSObject = {
  // textTransform: 'uppercase',
  fontWeight: 600,
  color: '#34393A',
  padding: '1em',
  marginTop: '0.5em',
  marginBottom: '0.5em',
  textDecoration: 'none',
  borderRadius: `${2 * 1.5}rem`,

  '&:hover': {
    ...basicTransitionCSS,
    backgroundColor: 'rgba(250,250,250,0.5)',
  },
  // Vertical align text
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
}

export const langLinkCSS = (active: boolean): CSSObject => {
  return {
    textTransform: 'uppercase',
    color: '#34393A',
    padding: '0.5em',
    textDecoration: 'none',
    fontWeight: active ? 900 : 400,
  }
}
