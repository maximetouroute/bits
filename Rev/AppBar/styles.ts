import { CSSObject } from '@emotion/react'

export const langLinkCSS = (active: boolean): CSSObject => {
  return {
    // textTransform: 'uppercase',
    // color: '#34393A',
    padding: '0.5em',
    textDecoration: 'none',
    fontWeight: active ? 900 : 400,
    '&:hover': {
      color: '#34393A',
    },
  }
}
