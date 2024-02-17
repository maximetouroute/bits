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
import { Typography, useTheme } from '@mui/material'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby-link'
/**
 * Here, we use StaticImage when possible (url must be written in scope, thus no config file/function/loop possible
 * Otherwise svg (ideal)
 */

const logoRawClient_1 = './../../../res/logoClient_nat.webp'
const logoRawClient_2 = './../../../res/logoClient_cube.png'
const logoRawClient_3 = './../../../res/logoClient_saintex.png'
const logoRawClient_4 = './../../../res/logoClient_snzc.png'
const logoRawClient_5 = './../../../res/logoClient_aadn.png'
const logoRawClient_6 = './../../../res/logoClient_carrnum.png'
const logoRawClient_7 = './../../../res/logoClient_univLyon1.png'

import logoClient_nimes from './../../../res/logoClient_nimes.svg'
import logoClient_larayonne from './../../../res/logoClient_larayonne.svg'

const height = 150

// <a css={imageBackgroundForMarqueeCSS(logoAdvanced_unity)}>
// </a>

interface OwnProps {
  langCode: LangCode
}
export default function Clients({ langCode }: OwnProps) {
  const theme = useTheme()

  return (
    <>
      <Typography variant="h3" sx={punchlineCSS}>
        {strings['clients'][langCode]}
      </Typography>

      <div css={markeeContainerCSS}>
        <Marquee>
          <div css={marqueChildCSS(height)}>
            <a
              css={imageBackgroundForMarqueeCSS(logoClient_nimes)}
              href={'https://nimesartethistoire.fr/'}
              rel={'noopener noreferrer'}
              target={'_blank'}
            ></a>
          </div>

          <div css={marqueChildCSS(height)}>
            <a
              css={imageBackgroundForMarqueeCSS(logoClient_larayonne)}
              href={'https://larayonne.org/'}
              rel={'noopener noreferrer'}
              target={'_blank'}
            ></a>
          </div>

          <div css={marqueChildCSS(height)}>
            <a
              href={'https://natachapaquignon.com/'}
              rel={'noopener noreferrer'}
              target={'_blank'}
            >
              <StaticImage
                src={logoRawClient_1}
                alt="Compagnie Natacha Paquignon"
                placeholder="blurred"
                layout="fixed"
                width={height}
              />
            </a>
          </div>
          <div css={marqueChildCSS(height)}>
            <a
              href={'https://www.lecubegarges.fr/'}
              rel={'noopener noreferrer'}
              target={'_blank'}
            >
              <StaticImage
                src={logoRawClient_2}
                alt="Le Cube"
                placeholder="blurred"
                layout="fixed"
                width={height}
              />
            </a>
          </div>

          <div css={marqueChildCSS(height)}>
            <a
              href={'https://saintex-reims.com/'}
              rel={'noopener noreferrer'}
              target={'_blank'}
            >
              <StaticImage
                src={logoRawClient_3}
                alt="Saint Ex"
                placeholder="blurred"
                layout="fixed"
                width={height}
              />
            </a>
          </div>
          <div css={marqueChildCSS(height)}>
            <a
              href={'https://www.snzn.org/'}
              rel={'noopener noreferrer'}
              target={'_blank'}
            >
              <StaticImage
                src={logoRawClient_4}
                alt="Seconde Nature Zinc"
                placeholder="blurred"
                layout="fixed"
                width={height}
              />
            </a>
          </div>

          <div css={marqueChildCSS(height)}>
            <a
              href={'https://aadn.org/'}
              rel={'noopener noreferrer'}
              target={'_blank'}
            >
              <StaticImage
                src={logoRawClient_5}
                alt="AADN"
                placeholder="blurred"
                layout="fixed"
                width={height}
              />
            </a>
          </div>

          <div css={marqueChildCSS(height)}>
            <a
              href={
                'https://www.cite-sciences.fr/fr/au-programme/lieux-ressources/carrefour-numerique2'
              }
              rel={'noopener noreferrer'}
              target={'_blank'}
            >
              <StaticImage
                src={logoRawClient_6}
                alt="Carrefour Numérique"
                placeholder="blurred"
                layout="fixed"
                width={height}
              />
            </a>
          </div>
          <div css={marqueChildCSS(height)}>
            <a
              href={
                'https://www.cite-sciences.fr/fr/au-programme/lieux-ressources/carrefour-numerique2'
              }
              rel={'noopener noreferrer'}
              target={'_blank'}
            >
              <StaticImage
                src={logoRawClient_7}
                alt="Carrefour Numérique"
                placeholder="blurred"
                layout="fixed"
                width={height}
              />
            </a>
          </div>
        </Marquee>
      </div>
    </>
  )
}
