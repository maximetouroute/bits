import React from 'react'
import { StringList } from '../../types'
import { CSSObject } from '@emotion/react'

const boldCSS: CSSObject = {
  // color: '#2771cc',
}
const boldLightCSS: CSSObject = {
  color: '#649DE5',
}

export const strings: StringList = {
  punchline: {
    ['en']: (
      <>
        Become an <strong css={boldCSS}>AR(T)</strong> creator
      </>
    ),
    ['fr']: (
      <>
        Devenez créateur⸱ice {' '}
        <strong css={boldCSS}>d'AR(T)</strong>
      </>
    ),
  },
  subline: {
    ['en']: (
      <>
        Reveality is a toolkit designed to
        craft cultural experiences with <strong css={boldCSS}>Augmented Reality (AR)</strong>.
      </>
    ),
    ['fr']: (
      <>
        Reveality est une boite à outils à conçue pour la création d'expériences culturelles
        <strong css={boldCSS}> en Réalité Augmentée (AR)</strong>.
      </>
    ),
  },
  downloadApp: {
    ['en']: `App available now`,
    ['fr']: `Appli disponible aujourd'hui`,
  },
  aProject: {
    ['en']: `A project in mind?`,
    ['fr']: `Une idée en tête ?`,
  },
  reachUs: {
    ['en']: `Let's talk about it`,
    ['fr']: `Parlons-en`,
  },
}
