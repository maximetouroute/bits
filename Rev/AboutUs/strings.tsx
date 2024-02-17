import React from 'react'
import { StringList } from '../../types'
import { CSSObject } from '@emotion/react'
import { Theme } from '@mui/material'

const boldCSS = (theme: Theme): CSSObject => {
  return {
    // color: '#2771cc',
    color: theme.palette.secondary.main,
  }
}

export const strings = (theme: Theme): StringList => {
  return {
    punchline: {
      ['en']: <>Let's create together</>,
      ['fr']: <>Créons ensemble</>,
    },

    subline: {
      ['en']: (
        <>
          We’re a team of digital artists, mediators and engineers in a mission
          to unlock the creative potential of Augmented Reality.
        </>
      ),
      ['fr']: (
        <>
          Nous sommes une équipe d’artistes numériques, médiat.eur.ice.s et
          ingénieurs en mission pour débloquer le potentiel créatif de la
          Réalité Augmentée.
        </>
      ),
    },

    features: {
      ['en']: (
        <>
          We organise <strong css={boldCSS(theme)}>workshops</strong> (for all
          ages), <strong css={boldCSS(theme)}>masterclasses</strong> (for pros)
          and <strong css={boldCSS(theme)}>co-create experiences</strong> with
          artists and institutions.
        </>
      ),
      ['fr']: (
        <>
          Nous animons des <strong css={boldCSS(theme)}>ateliers</strong> (pour
          tous les âges), des <strong css={boldCSS(theme)}>formations</strong>{' '}
          (pour les plus grands) et{' '}
          <strong css={boldCSS(theme)}>co-produisons</strong> des expériences
          avec artistes et institutions.
        </>
      ),
    },

    contactUs: {
      ['en']: `I'm interested`,
      ['fr']: `Ça m'intéresse`,
    },
  }
}
