import React from 'react'
import { Link } from 'gatsby'
import { educationPageStrings } from './strings'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled'
import FlashOnRoundedIcon from '@mui/icons-material/FlashOnRounded'
import SchoolIcon from '@mui/icons-material/School'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import TouchAppOutlinedIcon from '@mui/icons-material/TouchAppOutlined'
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import { Button } from '@mui/material'
import { IconButton } from '@mui/material'
import {
  responsiveContainerCSS,
  responsiveContainerInsideCSS,
  joinBetaCallCSS,
  subjectTitleCSS,
  punchlineFeatureCSS,
  clientsLogoGridCSS,
  clientLogoCSS,
  imageBackgroundCSS,
  iconContainerCSS,
  thirdPageContainerCSS,
  subtextCSS,
  revLinkCSS,
  badgeContainerCSS,
  howDoesItWorkCSS,
  howDoesItWorkPartCSS,
  glassContainerCSS,
  styledTitle,
  subjectVideoCSS,
} from './styles'
import { injectLinkCSS } from '../../styles/styles'
import { glassStyle } from '../../../globalStyles'
import { gradientBackgroundCSS } from '../../../globalStyles'
import { EDUCATION_LOGOS } from '../../../logos'
import AppStoreBadges from '../AppStoreBadges/AppStoreBadges'
import { Typography, useTheme } from '@mui/material'
import { LangCode } from '../../types'
import Ateliers from '../Ateliers/Ateliers'
import { Box, Container } from '@mui/material'

import atelierFilme from './film_vp9.mp4'
import atelierReplace from './replace_vp9.mp4'
import atelierMix from './mix_vp9.mp4'
import atelierFilmeSafari from './film_safari.mp4'
import atelierReplaceSafari from './replace_safari.mp4'
import atelierMixSafari from './mix_safari.mp4'
import poster from './poster.png'

import { strings } from './strings'
interface OwnProps {
  langCode: LangCode
}

export default function Education({ langCode }: OwnProps) {
  const theme = useTheme()
  const LOCAL = educationPageStrings[langCode]
  return (
    <>
      <div
        css={{
          ...responsiveContainerCSS,
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          paddingTop: '10rem',
          ...gradientBackgroundCSS,
        }}
      >
        <Container maxWidth="xl">
          <Typography
            variant="h3"
            sx={{
              ...subjectTitleCSS(theme),
              marginTop: 5,
              marginBottom: 2,
            }}
          >
            {strings.learnByDoing[langCode]}
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'center', my: 2 }}>
            {strings.learnByDoingSubtitle[langCode]}
          </Typography>

          <div css={howDoesItWorkCSS}>
            <div css={howDoesItWorkPartCSS}>
              <Typography variant="h5" sx={{ my: 2, ...styledTitle(theme) }}>
                {strings.weShoot[langCode]}
              </Typography>

              <Typography variant="body1" sx={{ my: 2 }}>
                {strings.weShootSubtitle[langCode]}
              </Typography>

              <div css={glassContainerCSS}>
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  css={subjectVideoCSS}
                  poster={poster}
                >
                  <source src={atelierFilme} type="video/webm" />
                  <source src={atelierFilmeSafari} type="video/mp4" />
                </video>
              </div>
            </div>
            <div css={howDoesItWorkPartCSS}>
              <Typography variant="h5" sx={{ my: 2, ...styledTitle(theme) }}>
                {strings.weReposition[langCode]}
              </Typography>
              <Typography variant="body1" sx={{ my: 2 }}>
                {strings.weRepositionSubtitle[langCode]}
              </Typography>

              <div css={glassContainerCSS}>
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  css={subjectVideoCSS}
                  poster={poster}
                >
                  <source src={atelierReplace} type="video/webm" />
                  <source src={atelierReplaceSafari} type="video/mp4" />
                </video>
              </div>
            </div>

            <div css={howDoesItWorkPartCSS}>
              <Typography variant="h5" sx={{ my: 2, ...styledTitle(theme) }}>
                {strings.weEmbrace[langCode]}
              </Typography>

              <Typography variant="body1" sx={{ my: 2, ...styledTitle }}>
                {strings.weEmbraceSubtitle[langCode]}
              </Typography>

              <div css={glassContainerCSS}>
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  css={subjectVideoCSS}
                  poster={poster}
                >
                  <source src={atelierMix} type="video/webm" />
                  <source src={atelierMixSafari} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>

          <Typography
            variant="body1"
            sx={{
              my: 4,
              ...styledTitle,
              textAlign: 'center',
              ...injectLinkCSS(theme),
            }}
          >

            {strings.getBrochureEducation[langCode]}<br/>
            {/* <Link to="/">{strings.learnMore[langCode]}</Link> */}
          </Typography>
          <Ateliers langCode={langCode} />
          <Typography
            variant="h6"
            sx={{ ...subjectTitleCSS, textAlign: 'center' }}
          >
            {LOCAL['partners']}
          </Typography>

          <div css={responsiveContainerCSS}>
            <div css={responsiveContainerInsideCSS}>
              <div css={clientsLogoGridCSS}>
                {EDUCATION_LOGOS.map((logo) => {
                  return (
                    <a
                      key={logo.siteUrl}
                      css={{
                        ...clientLogoCSS,
                        ...imageBackgroundCSS(logo.imageUrl),
                        transform: `scale(${logo.scale ? logo.scale : 1})`,
                      }}
                      target="_blank"
                      rel="noreferrer noopener"
                      href={logo.siteUrl}
                    />
                  )
                })}
              </div>
            </div>
          </div>

          {/* <Accordion sx={{...glassStyle(theme), mb:10}}>
        <AccordionSummary
          expandIcon={<IconButton sx={{p:4, my:1}}><ArrowDownwardIcon/></IconButton>}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{ py: 3, flexDirection: "column", border: 'none' }}
        > */}
          <Typography
            variant="h5"
            sx={{
              ...subjectTitleCSS(theme),
              mt: 15,
            }}
          >
            {LOCAL['punchline']}
          </Typography>
          {/* </AccordionSummary>
        <AccordionDetails> */}

          <div css={{ ...responsiveContainerCSS }}>
            <div
              css={{
                // ...responsiveContainerInsideCSS,
                width: '50%',
                display: 'block',
                paddingBottom: '28.125%', //'56.25%',
                position: 'relative',
                height: '0px',
                overflow: 'hidden',
                margin: '0px',
                marginBottom: '3rem',
                marginTop: '3rem',
                borderRadius: glassStyle(theme).borderRadius,
              }}
            >
              <iframe
                css={{
                  position: 'absolute',
                  top: '0px',
                  left: '0px',
                  width: '100%',
                  height: '100%',
                }}
                src="https://www.youtube.com/embed/I7a_KLPCZgs?rel=0&color=white&modestbranding=1"
                title="How to create with Reveality (Video)"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div css={responsiveContainerCSS}>
            <div
              css={{
                ...responsiveContainerInsideCSS,
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'flex-start',
              }}
            >
              <div css={thirdPageContainerCSS}>
                <div css={{ ...punchlineFeatureCSS, ...iconContainerCSS }}>
                  <TouchAppOutlinedIcon fontSize="large" />
                  <Typography variant="h5">
                    {LOCAL['Simple, Intuitif']}
                  </Typography>
                </div>
                <Typography variant="body1" sx={subtextCSS}>
                  {LOCAL[`smartApp`]}
                  <br />
                  <br />
                </Typography>
              </div>

              <div css={thirdPageContainerCSS}>
                <div css={{ ...punchlineFeatureCSS, ...iconContainerCSS }}>
                  <FlashOnRoundedIcon fontSize="large" />
                  <Typography variant="h5" sx={{ marginTop: '1em' }}>
                    {LOCAL[`Flow Rapide`]}
                  </Typography>
                </div>
                <Typography variant="body1" sx={subtextCSS}>
                  {LOCAL[`5mns`]}
                </Typography>
              </div>

              <div css={thirdPageContainerCSS}>
                <div css={{ ...punchlineFeatureCSS, ...iconContainerCSS }}>
                  <PlayCircleFilledIcon fontSize="large" />
                  <Typography variant="h5" sx={{ marginTop: '1em' }}>
                    {LOCAL['restitutionTitle']}
                  </Typography>
                </div>
                <Typography variant="body1" sx={subtextCSS}>
                  {LOCAL[`restitution`]}
                </Typography>
              </div>

              <div css={thirdPageContainerCSS}>
                <div css={{ ...punchlineFeatureCSS, ...iconContainerCSS }}>
                  <HomeRoundedIcon fontSize="large" />
                  <Typography variant="h5" sx={{ marginTop: '1em' }}>
                    {LOCAL[`athomeTitle`]}
                  </Typography>
                </div>
                <Typography variant="body1" sx={subtextCSS}>
                  {LOCAL[`athome`]}
                </Typography>
              </div>

              <div css={thirdPageContainerCSS}>
                <div css={{ ...punchlineFeatureCSS, ...iconContainerCSS }}>
                  <BuildOutlinedIcon fontSize="large" />
                  <Typography variant="h5" sx={{ marginTop: '1em' }}>
                    {LOCAL[`easySetupTitle`]}
                  </Typography>
                </div>
                <Typography variant="body1" sx={subtextCSS}>
                  {LOCAL[`easySetUp`]}
                  <br />
                  <br />
                </Typography>
              </div>
              <div css={thirdPageContainerCSS}>
                <div css={{ ...punchlineFeatureCSS, ...iconContainerCSS }}>
                  <SchoolIcon fontSize="large" />
                  <Typography variant="h5" sx={{ marginTop: '1em' }}>
                    {LOCAL['teacherModeTitle']}
                  </Typography>
                </div>
                <Typography variant="body1" sx={subtextCSS}>
                  {LOCAL[`teacherMode`]}
                  <br />
                  <br />
                </Typography>
              </div>
            </div>
          </div>



          {/* </AccordionDetails>
      </Accordion> */}
        </Container>
      </div>

      <div
        css={{
          marginTop: '2rem',
          marginBottom: '2rem',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Link to={'/'} css={revLinkCSS(theme)}>
          {LOCAL[`Retour à l'accueil`]}
        </Link>
      </div>
    </>
  )
}
