import { CSSObject } from '@emotion/react'
import { Theme } from '@mui/material'

export const langLinkCSS = (theme: Theme, active: boolean): CSSObject => {
  return {
    // textTransform: 'uppercase',
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
