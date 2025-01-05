import { CSSObject } from '@emotion/react'
import { breakpointKey } from '../../styles/styles'

export const heroCSS: CSSObject = {
  maxWidth: '50vw',
  [breakpointKey('small')]: {
    maxWidth: '90vw',
  },
  margin: 'auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '50vh',
  textAlign: 'center',
  color: 'black',
  userSelect: 'none',
}

export const grettingCSS: CSSObject = {
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
  fontSize: '2.5rem',
  marginBottom: '2rem',
}

export const punchlineCSS: CSSObject = {
  fontSize: '1.4rem',
  lineHeight: '2rem',
  fontStyle: 'italic',
  marginBottom: 0,
  fontWeight: 300
}

export const lastLineCSS: CSSObject = {
  marginTop: '2rem',
  fontSize: '1.4rem',
  lineHeight: '3rem',
  fontStyle: 'italic',
  fontWeight: 400,
  marginBottom: 0,
}
