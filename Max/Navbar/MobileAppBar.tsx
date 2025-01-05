import React from 'react'
import { Link } from 'gatsby'
import { CSSObject, useTheme } from '@emotion/react'
import { Stack, Theme, Typography } from '@mui/material'
import { breakpointKey } from '../../styles/styles'
import { linkCSS } from './styles'
import { LangCode } from '../../types'
import { languageSwitcher } from './languageSwitcher'

const mobileAppBarCSS = (theme: Theme
): CSSObject => {
  return {
    paddingBottom: '1em',
    paddingTop: '1em',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    a: {
      ...linkCSS(theme),
      fontSize: '1.1em',
      fontWeight: 600,
      padding: '1em',
      color: theme.palette.primary.main,
      '&:hover': {
        color: theme.palette.primary.main,
      },
      boxShadow: `inset 0 -2px 0 0 ${theme.palette.primary.main}`,
    },
    // Final
    [breakpointKey('normal')]: {
      display: 'none',
    },
  }
}

interface OwnProps {
  title: string;
  currentLangCode: LangCode;
  currentUrl: string;
}

export default function MobileAppBar({ title, currentLangCode, currentUrl }: OwnProps) {
  const theme = useTheme();
  return (
    <Stack>
    <div css={mobileAppBarCSS}>
      
      <Link activeClassName="" to="/">
        <Typography fontWeight={900}>
        {title}
        </Typography>
        
      </Link>
      
    </div>
    
    <div css={{alignSelf: 'center', justifyContent: 'flex-end', display:'flex'}}>
    {languageSwitcher(theme, currentUrl, currentLangCode)}
    </div>
    </Stack>
  )
}
