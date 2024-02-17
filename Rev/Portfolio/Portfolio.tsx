import React from 'react'
import {
  punchlineCSS,
  mainViewCSS,
  howDoesItWorkCSS,
  howDoesItWorkPartCSS,
  subjectVideoCSS,
  sublineCSS,
  glassContainerCSS,
} from './styles'
import { strings } from './strings'
import { LangCode } from '../../types'

import { Typography, useTheme } from '@mui/material'
import { CSSObject } from '@emotion/react'
import { Theme } from '@mui/material'
import { gradientBackground2CSS } from '../../../globalStyles'
import PostGridFlat from '../PostGridFlat/PostGridFlat'

const styledTitle = (theme: Theme): CSSObject => {
  return {
    backgroundColor: theme.palette.action.hover,
    padding: '1rem',
    borderRadius: '2rem',
  }
}
interface OwnProps {
  langCode: LangCode
  posts: any
}

export default function Portfolio({ langCode, posts }: OwnProps) {
  const theme = useTheme()
  return (
    <div css={{ ...mainViewCSS, ...gradientBackground2CSS }} id={'portfolio'}>
      <Typography variant="h3" sx={{ marginTop: '8rem', marginBottom: '2rem' }}>
        {strings['madeWith'][langCode]}
      </Typography>
      {/* <h2 css={punchlineCSS(theme)}> </h2> */}
      <PostGridFlat posts={posts} langCode={langCode} />
    </div>
  )
}
