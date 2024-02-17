import React from 'react'
import {
  contactInfosCSS,
  mainViewCSS,
  punchlineCSS,
  punchlineParagraphCSS,
  responsiveContainerInsideCSS,
} from './styles'
import { strings } from './strings'
import { LangCode } from '../../types'
import { Typography, useTheme } from '@mui/material'

interface OwnProps {
  langCode: LangCode
}
export default function AboutUs({ langCode }: OwnProps) {
  const theme = useTheme()
  return (
    <div css={mainViewCSS}>
      <div css={responsiveContainerInsideCSS}>
        <Typography variant="h3" sx={punchlineCSS}>
          {strings(theme)['punchline'][langCode]}
        </Typography>

        <Typography variant="body1" sx={{ textAlign: 'center' }}>
          {strings(theme)['subline'][langCode]}
        </Typography>

        <Typography variant="body1" sx={{ textAlign: 'center' }}>
          {strings(theme)['features'][langCode]}
        </Typography>

        <div css={contactInfosCSS}>
          <Typography variant="body1">
            <a href="mailto:contact@reveality.io">
              {strings(theme)['contactUs'][langCode]}
            </a>
          </Typography>
        </div>
      </div>
    </div>
  )
}
