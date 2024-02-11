import React from 'react'
import {
  punchlineCSS,
  responsiveContainerCSS,
  responsiveContainerInsideCSS,
  clientLogoCSS,
  clientsLogoGridCSS,
  imageBackgroundCSS,
} from './styles'
import { strings } from './strings'
import { LangCode } from '../../types'
import { PARTNERS_LOGOS, CLIENTS_LOGOS } from '../../../logos'

import { useTheme } from '@mui/material'

interface OwnProps {
  langCode: LangCode
}
export default function Partners({ langCode }: OwnProps) {
  const theme = useTheme()


  const grid = (logos) => {
    return (
      <div css={responsiveContainerCSS}>
      <div css={responsiveContainerInsideCSS}>
        <div css={clientsLogoGridCSS}>
          {logos.map((logo) => {
            return (
              <a
                key={logo.siteUrl}
                css={{
                  ...clientLogoCSS,
                }}
                target="_blank"
                rel="noreferrer noopener"
                href={logo.siteUrl}
                
              >
                <div css={{
                ...imageBackgroundCSS(logo.imageUrl),
              }}>
              </div>
              
              </a>
            )
          })}
        </div>
      </div>
    </div>

    )
  }
  return (
    <>
      <h3 css={punchlineCSS}>{strings['clients'][langCode]}</h3>
      {grid(CLIENTS_LOGOS)}
     
      <h3 css={punchlineCSS}>{strings['coachs'][langCode]}</h3>
      {grid(PARTNERS_LOGOS)}

    </>
  )
}
