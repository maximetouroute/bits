import React from 'react'
import { grettingCSS, heroCSS, punchlineCSS, lastLineCSS } from './styles'
import { strings } from './strings'
import { LangCode, LangReactElement } from '../../types'
import { Typography } from '@mui/material'

const punchline: LangReactElement = {
  en: (
    <div css={punchlineCSS}>
      I'm
      <b> Maxime.</b> I work on <b css={{ color: '#588CF6' }}>digital art</b>{' '}
      experiences and I build <b css={{ color: '#ad206d' }}>software</b> for
      digital artists and cultural institutions.
    </div>
  ),
  fr: (
    <div css={punchlineCSS}>
      Moi c'est
      <b> Maxime.</b> Je crée des expériences{' '}
      <b css={{ color: '#588CF6' }}> d'art numérique</b> et je développe des{' '}
      <b css={{ color: '#ad206d' }}>logiciels</b> pour les artistes et
      institutions culturelles.
    </div>
  ),
  es: (
    <div css={punchlineCSS}>
    Soy
    <b> Maxime.</b> Creo experiencias{' '}
    <b css={{ color: '#588CF6' }}> de arte digital</b> y desarrollo{' '}
    <b css={{ color: '#ad206d' }}>software</b> para artistas e
    instituciones culturales.
  </div>
  ),
}
interface OwnProps {
  langCode: LangCode
}
export default function Hero({ langCode }: OwnProps) {
  return (
    <div css={heroCSS}>
      <Typography variant="h3" style={grettingCSS}>{strings.hello[langCode]}</Typography>
      <Typography>{punchline[langCode]}</Typography>
     
      <Typography variant="h6" style={lastLineCSS}>
      {strings.checkOut[langCode]}
        <br />
      </Typography>
      <Typography variant="body1" style={{fontSize: '2rem'}}>
      ↓
      </Typography>
    </div>
  )
}
