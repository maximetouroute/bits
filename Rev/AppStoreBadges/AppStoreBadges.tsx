import { CSSObject } from '@emotion/react'
import { Link } from 'gatsby'
import appleBadge from './appleBadge.svg'
import googleBadge from './googleBadge.svg'
import { glassCSS } from '../../../globalStyles'
import { basicTransitionCSS } from '../../styles/styles'

export const containerCSS: CSSObject = {
  width: '11rem',
  height: '3.3rem',
  margin: '1rem',
  ...glassCSS,

  ...basicTransitionCSS,
  '&:hover': {
    ...basicTransitionCSS,
    cursor: 'pointer',
    transform: 'scale(1.05)',
  },
}
export const googleBadgeCSS: CSSObject = {
  display: 'block',
  width: '100%',
  height: '100%',
  background: `url(${googleBadge})`,
  backgroundPosition: 'center',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
}

const appleBadgeCSS: CSSObject = {
  display: 'block',
  width: '100%',
  height: '100%',
  background: `url(${appleBadge})`,
  backgroundPosition: 'center',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
}

export default function AppStoreBadges() {
  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div css={containerCSS}>
        <Link
          css={appleBadgeCSS}
          to={'https://apps.apple.com/app/reveality/id1619973575'}
          target="_blank"
          rel="noopener"
        ></Link>
      </div>

      <div css={containerCSS}>
        <Link
          css={googleBadgeCSS}
          to={'https://play.google.com/store/apps/details?id=io.reveality.app'}
          target="_blank"
          rel="noopener"
        ></Link>
      </div>
    </div>
  )
}
