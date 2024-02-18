import React from 'react'
import { Link } from 'gatsby'
import { educationPageStrings } from './strings'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled'
import FlashOnRoundedIcon from '@mui/icons-material/FlashOnRounded'
import SchoolIcon from '@mui/icons-material/School'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import TouchAppOutlinedIcon from '@mui/icons-material/TouchAppOutlined'
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined'

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
} from './styles'
import { gradientBackgroundCSS } from '../../../globalStyles'
import { CLIENTS_LOGOS } from '../../../logos'
import AppStoreBadges from '../AppStoreBadges/AppStoreBadges'
import { Typography, useTheme } from '@mui/material'
import { LangCode } from '../../types'

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
        <Typography
          variant="h3"
          sx={{
            ...subjectTitleCSS(theme),
          }}
        >
          {LOCAL['punchline']}
        </Typography>

        <div css={{ ...responsiveContainerCSS, marginTop: '4rem' }}>
          <div
            css={{
              ...responsiveContainerInsideCSS,
              display: 'block',
              paddingBottom: '56.25%',
              position: 'relative',
              height: '0px',
              overflow: 'hidden',
              margin: '0px',
              marginBottom: '4rem',
              borderRadius: '26px',
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

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '4rem',
            marginBottom: '8rem',
          }}
        >
          <Typography></Typography>

          <Typography
            variant="h3"
            sx={{ textAlign: 'center', fontSize: '1em', fontWeight: 600 }}
          >
            {LOCAL['getApp']}
          </Typography>
          <AppStoreBadges />
          {/* 
          <h3 css={joinBetaCallCSS}></h3> */}
          {/* <AppStoreBadges /> */}
        </div>
      </div>

      <h2 css={{ ...subjectTitleCSS, textAlign: 'center' }}>
        {LOCAL['partners']}
      </h2>

      <div css={responsiveContainerCSS}>
        <div css={responsiveContainerInsideCSS}>
          <div css={clientsLogoGridCSS}>
            {CLIENTS_LOGOS.map((logo) => {
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
