import { stringBuilderEnFr } from '../../../locales/strings'
import { StringEnFr } from '../../../locales/strings'
import { Theme } from '@mui/material'
import { StringList } from '../../types'
import React from 'react'
import { Link } from 'gatsby'

export const strings: StringList = {
  learnByDoing: {
    en: `Learning by doing`,
    fr: `Apprendre en pratiquant`,
  },
  learnByDoingSubtitle: {
    fr: (
      <>
        L'application Reveality permet d'expérimenter les étapes de création de
        son propre double virtuel et de lui donner vie en Réalité Augmentée.
        <br />
        Aucune compétence technique requise. <br />
        Une expérience amusante et ludique mixant vidéo, corps et technologie.
        Tous publics (7ans +).
      </>
    ),
    en: (
      <>
        The Reveality app allows users to experience the steps of creating their
        own virtual double and bringing it to life in Augmented Reality. No
        technical skills required. <br />A playful experience blending video,
        body movements, and technology. Suitable for all audiences (ages 7+)
      </>
    ),
  },

  weShoot: {
    fr: 'On se filme',
    en: 'Filming',
  },
  weShootSubtitle: {
    fr: 'Découvrir la captation et la post-production',
    en: 'Discovering shooting and post-production',
  },

  weReposition: {
    fr: 'On se replace',
    en: 'Repositionning',
  },
  weRepositionSubtitle: {
    fr: 'Appréhender les concepts de la Réalité Augmentée ',
    en: 'Understanding the concepts of Augmented Reality',
  },

  weEmbrace: {
    fr: `On s'amuse !`,
    en: 'Having fun!',
  },
  weEmbraceSubtitle: {
    fr: `S'emparer d'un processus créatif de A à Z`,
    en: `Using a creative process from A to Z`,
  },

  imagesFrom: {
    fr: (
      <>
        Images d'un atelier réalisé avec la communauté créative AADN.{' '}
        <Link to="/">En savoir plus</Link>
      </>
    ),
    en: (
      <>
        Images from a workshop conducted with the AADN creative community.{' '}
        <Link to="/">Learn More</Link>
      </>
    ),
  },
}

export const educationPageStrings = stringBuilderEnFr([
  StringEnFr('restitutionTitle', `Easy to show`, `Restitution simple`),
  StringEnFr('athomeTitle', 'Available at home', 'Accessible à la maison'),
  StringEnFr('easySetupTitle', 'Simple set up', 'Mise en place facile'),
  StringEnFr('teacherModeTitle', 'Teacher Mode', 'Mode Enseignant'),
  StringEnFr('getApp', 'Download the app', `Téléchargez l'appli`),
  StringEnFr(
    `teacherMode`,
    `Access participants' creations directly on the app`,
    `Déroulez vos ateliers et accédez au travail des élèves depuis l'appli.`
  ),
  StringEnFr(
    `Aucune contrainte d'espace, de matériel ou d'éclairage pour commencer à créer.`,
    `Aucune contrainte d'espace, de matériel ou d'éclairage pour commencer à créer.`,
    `Aucune contrainte d'espace, de matériel ou d'éclairage pour commencer à créer.`
  ),
  StringEnFr(
    `Mise en place facile`,
    `Mise en place facile`,
    `Mise en place facile`
  ),
  StringEnFr(
    `
    L'appli fonctionne sur tous les téléphones gratuitement. Les participants s'emparent de l'outil pendant, et après l'atelier.`,
    `
    L'appli fonctionne sur tous les téléphones gratuitement. Les participants s'emparent de l'outil pendant, et après l'atelier.`,
    `
    L'appli fonctionne sur tous les téléphones gratuitement. Les participants s'emparent de l'outil pendant, et après l'atelier.`
  ),
  StringEnFr(
    `Un smartphone et une appli, c'est tout ! Les participants peuvent créer de A à Z sans être bloqués techniquement.
    `,
    `Un smartphone et une appli, c'est tout ! Les participants peuvent créer de A à Z sans être bloqués techniquement.
    `,
    `Un smartphone et une appli, c'est tout ! Les participants peuvent créer de A à Z sans être bloqués techniquement.
    `
  ),
  StringEnFr(`Flow Rapide`, `Fast Creation`, `Flow Rapide`),
  StringEnFr(
    '5mns',
    `5 minutes is enough to create your first content. That's more time available to test, experiment, and try again.`,
    `5 minutes suffisent pour créer une scène. C'est du temps gagné pour tester, explorer, recommencer.`
  ),
  StringEnFr(`Restitution simple`, `Restitution simple`, `Restitution simple`),
  StringEnFr(
    `restitution`,
    `Capture and export videos of your creations so it's easy to share.`,
    `Récupérez les créations en vidéo, diffusables sur toutes les plateformes existantes.`
  ),
  StringEnFr(
    `Accessible à la maison`,
    `Accessible à la maison`,
    `Accessible à la maison`
  ),
  StringEnFr(`Retour à l'accueil`, `Back home`, `Retour à l'accueil`),
  StringEnFr(
    'partners',
    'They conduct workshops with us',
    'Ils animent des ateliers avec nous'
  ),
  StringEnFr(
    'punchline',
    'Discover a full-fledged solution to learn Augmented Reality',
    'Découvrez une solution complète pour initier à la Réalité Augmentée'
  ),
  StringEnFr('Simple, Intuitif', `Easy to use`, `Simple, Intuitif`),
  StringEnFr(
    `smartApp`,
    `A phone, an app and that's it! Participants can create from A to Z idependently`,
    `Un smartphone et une appli, c'est tout ! Les participants peuvent créer de A à Z sans être bloqués techniquement.`
  ),
  StringEnFr('seoTitle', 'Subscription Confirmed', 'Inscription confirmée'),
  StringEnFr('divTitle', 'One more step...', `Encore une étape...`),

  StringEnFr(
    `athome`,
    `The app is free and works on every phone. Participants can keep creating after class`,
    `L’appli fonctionne sur tous les téléphones. Les participants s'emparent de l'appli pendant, et après l’atelier.`
  ),
  StringEnFr(
    'divSubtitle',
    `Don't leave us yet! We'd like to know more about you`,
    `Ne partez pas tout de suite ! Nous aimerions mieux vous connaitre`
  ),
  StringEnFr(
    `easySetUp`,
    `You don't need a lot of space, expensive equipment or lighting to start creating`,
    `Aucune contrainte d’espace, de matériel ou d'éclairage pour commencer à créer.`
  ),
  StringEnFr('goBackHome', 'Go back Home', `Retour Accueil`),
])
