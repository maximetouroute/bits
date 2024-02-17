import React from 'react'
import {
  responsiveContainerCSS,
  responsiveContainerInsideCSS,
  mainVideoCSS,
  joinBetaCallCSS,
  punchlineParagraphCSS,
  punchlineCSS,
  logoAndVideoContainerCSS,
  logoContainerCSS,
  badgeContainerCSS,
  mainViewCSS,
  mainViewInsideCSS,
  mainVideoContainerCSS,
  contactInfosCSS,
} from './styles'
import { strings } from './strings'
import { LangCode } from '../../types'
import RevealityLogo from '../RevealityLogo/RevealityLogo'
import AppStoreBadges from '../AppStoreBadges/AppStoreBadges'
import demoVideo from './../../../pages/home.webm'
import demoVideoSafari from './../../../pages/home.mp4'
import { Typography, useTheme } from '@mui/material'
import { glassCSS } from '../../../globalStyles'
// const punchline = {
//   en: (
//     <div css={}>
//       I'm
//       <b> Maxime.</b> I work on <b css={{ color: '#588CF6' }}>digital art</b>{' '}
//       experiences and I build <b css={{ color: '#ad206d' }}>software</b> for
//       digital artists and cultural institutions.
//     </div>
//   ),
//   fr: (
//     <div css={}>
//       Moi c'est
//       <b> Maxime.</b> Je crée des expériences{' '}
//       <b css={{ color: '#588CF6' }}> d'art numérique</b> et je développe des{' '}
//       <b css={{ color: '#ad206d' }}>logiciels</b> pour les artistes et
//       institutions culturelles.
//     </div>
//   ),
// }

interface OwnProps {
  langCode: LangCode
}
export default function Hero({ langCode }: OwnProps) {
  const theme = useTheme()
  return (
    <div css={mainViewCSS}>
      <div css={mainViewInsideCSS}>
        <div css={logoAndVideoContainerCSS}>
          <Typography variant="h1" sx={punchlineCSS}>
            {strings['punchline'][langCode]}
          </Typography>
          <Typography variant="body1" sx={punchlineParagraphCSS}>
            {strings['subline'][langCode]}
          </Typography>

          <div css={badgeContainerCSS}>
            <Typography variant="h3" sx={joinBetaCallCSS(theme)}>
              {strings['downloadApp'][langCode]}
            </Typography>
            <AppStoreBadges />
          </div>

          <div css={contactInfosCSS}>
            <Typography variant="body1" sx={punchlineParagraphCSS}>
              {strings['aProject'][langCode]}{' '}
              <a href="mailto:contact@reveality.io">
                {strings['reachUs'][langCode]}
              </a>
            </Typography>
          </div>
        </div>

        <div></div>

        <div css={mainVideoContainerCSS}>
          <div css={{ ...glassCSS, padding: '1em' }}>
            <video autoPlay muted loop playsInline css={mainVideoCSS}>
              <source src={demoVideo} type="video/webm" />
              <source src={demoVideoSafari} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  )
}
