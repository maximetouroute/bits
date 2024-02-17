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

import subjectRaw from './../../../pages/app_shoot.webm'
import subjectAlpha from './../../../pages/app_create.webm'
import subjectMix from './../../../pages/app_share.webm'
import subjectRawSafariIos from './../../../pages/app_shoot.mp4'
import subjectAlphaSafariIos from './../../../pages/app_create.mp4'
import subjectMixSafariIos from './../../../pages/app_share.mp4'
import { Typography, useTheme } from '@mui/material'
import { CSSObject } from '@emotion/react'
import { Theme } from '@mui/material'

const styledTitle = (theme: Theme): CSSObject => {
  return {
    backgroundColor: theme.palette.action.hover,
    padding: '1rem',
    borderRadius: '2rem',
  }
}
interface OwnProps {
  langCode: LangCode
}
export default function TheApp({ langCode }: OwnProps) {
  const theme = useTheme()
  return (
    <div css={mainViewCSS}>
      <Typography
        variant="h3"
        sx={{ ...punchlineCSS, marginTop: '8rem', marginBottom: '2rem' }}
      >
        {strings['punchline'][langCode]}
      </Typography>
      <Typography variant="body1" sx={sublineCSS}>
        {strings['subline'][langCode]}
      </Typography>

      <div css={howDoesItWorkCSS}>
        <div css={howDoesItWorkPartCSS}>
          <Typography variant="h5" sx={{ my: 2, ...styledTitle(theme) }}>
            {strings['experiment'][langCode]}
          </Typography>

          <Typography variant="body1" sx={{ my: 2 }}>
            {strings['experimentDetails'][langCode]}
          </Typography>

          <div css={glassContainerCSS}>
            <video autoPlay muted loop playsInline css={subjectVideoCSS}>
              <source src={subjectRaw} type="video/webm" />
              <source src={subjectRawSafariIos} type="video/mp4" />
            </video>
          </div>
        </div>
        <div css={howDoesItWorkPartCSS}>
          <Typography variant="h5" sx={{ my: 2, ...styledTitle(theme) }}>
            {strings['create'][langCode]}
          </Typography>
          <Typography variant="body1" sx={{ my: 2 }}>
            {strings['createDetails'][langCode]}
          </Typography>

          <div css={glassContainerCSS}>
            <video autoPlay muted loop playsInline css={subjectVideoCSS}>
              <source src={subjectAlpha} type="video/webm" />
              <source src={subjectAlphaSafariIos} type="video/mp4" />
            </video>
          </div>
        </div>

        <div css={howDoesItWorkPartCSS}>
          <Typography variant="h5" sx={{ my: 2, ...styledTitle(theme) }}>
            {strings['publish'][langCode]}
          </Typography>

          <Typography variant="body1" sx={{ my: 2, ...styledTitle }}>
            {strings['publishDetails'][langCode]}
          </Typography>

          <div css={glassContainerCSS}>
            <video autoPlay muted loop playsInline css={subjectVideoCSS}>
              <source src={subjectMix} type="video/webm" />
              <source src={subjectMixSafariIos} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  )
}
