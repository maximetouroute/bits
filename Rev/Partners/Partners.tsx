import React from 'react'
import {
  punchlineCSS,
  imageBackgroundForMarqueeCSS,
  markeeContainerCSS,
  marqueChildCSS,
} from './styles'
import { strings } from './strings'
import { LangCode } from '../../types'
import Marquee from 'react-fast-marquee'
import { useTheme } from '@mui/material'
import { StaticImage } from 'gatsby-plugin-image'
import { Typography } from '@mui/material'
import Container from '@mui/material/Container'
/**
 * Here, we use StaticImage when possible (url must be written in scope, thus no config file/function/loop possible
 * Otherwise svg (ideal)
 */

import logoPartner_idf from './../../../res/logoPartner_idf.svg'
import logoPartner_stationf from './../../../res/logoPartner_stationf.svg'
import logoPartner_polepixel from './../../../res/logoPartner_polePixel.svg'
import logoPartner_bpi from './../../../res/logoPartner_bpi.svg'
import logoPartner_parisCo from './../../../res/logoPartner_parisCo.svg'
const logoRawPartner_1 = './../../../res/logoPartner_schoolab.png'

const height = 150

// <a css={imageBackgroundForMarqueeCSS(logoAdvanced_unity)}>
// </a>

interface OwnProps {
  langCode: LangCode
}
export default function Partners({ langCode }: OwnProps) {
  const theme = useTheme()

  return (
    <>
      <Typography variant="h3" sx={punchlineCSS}>
        {strings['coachs'][langCode]}
      </Typography>

      <Container
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: 0.7,
          transform: 'scale(0.8)',
        }}
      >
        <div css={marqueChildCSS(height)}>
          <a
            css={imageBackgroundForMarqueeCSS(logoPartner_idf)}
            href={'https://www.iledefrance.fr'}
            rel={'noopener noreferrer'}
            target={'_blank'}
          ></a>
        </div>

        <div css={marqueChildCSS(height)}>
          <a
            css={imageBackgroundForMarqueeCSS(logoPartner_polepixel)}
            href={'https://polepixel.fr/'}
            rel={'noopener noreferrer'}
            target={'_blank'}
          ></a>
        </div>

        <div css={marqueChildCSS(height)}>
          <a
            css={imageBackgroundForMarqueeCSS(logoPartner_bpi)}
            href={'https://www.bpifrance.fr/'}
            rel={'noopener noreferrer'}
            target={'_blank'}
          ></a>
        </div>
        <div css={marqueChildCSS(height)}>
          <a
            css={imageBackgroundForMarqueeCSS(logoPartner_stationf)}
            href={'https://stationf.co/'}
            rel={'noopener noreferrer'}
            target={'_blank'}
          ></a>
        </div>
        <div css={marqueChildCSS(height)}>
          <a
            css={imageBackgroundForMarqueeCSS(logoPartner_parisCo)}
            href={'https://www.parisandco.com/'}
            rel={'noopener noreferrer'}
            target={'_blank'}
          ></a>
        </div>
        <div css={marqueChildCSS(height)}>
          <a
            href={'https://www.theschoolab.com/en/'}
            rel={'noopener noreferrer'}
            target={'_blank'}
          >
            <StaticImage
              src={logoRawPartner_1}
              alt="Schoolab"
              placeholder="blurred"
              layout="fixed"
              width={height}
            />
          </a>
        </div>
      </Container>
    </>
  )
}
