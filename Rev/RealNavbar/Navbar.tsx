import React from 'react'
import { Link } from 'gatsby'
import { LangCode } from '../../types'
import Logo from './../RevealityLogo/RevealityLogo'
import {
  containerCSS,
  logoCSS,
  linkCSS,
  langLinkCSS,
  centralBarCSS,
  mobileNavbarCSS,
  desktopNavbarCSS,
  mobileContainerCSS,
} from './styles'
import { supportedLangs } from '../../../locales/locales'

const updateDefaultLanguage = (defaultLanguage: LangCode): void => {
  // console.log('update language to ', defaultLanguage)
  window.localStorage.setItem('language', defaultLanguage)
}

interface OwnProps {
  currentLangCode: LangCode
  currentUrl: string
}
export default function Navbar({ currentLangCode, currentUrl }: OwnProps) {
  return (
    <>
      <div css={mobileNavbarCSS}>
        <div css={mobileContainerCSS}>
          <Link to="/" css={logoCSS}>
            {/* <StaticImage src={'./logo.png'} layout="fixed" width={50} height={50} />
        reveality */}
            <Logo />
          </Link>
          <Link to={'/team'} css={linkCSS}>
            Menu
          </Link>
        </div>
      </div>

      <div css={desktopNavbarCSS}>
        <div css={containerCSS}>
          <Link to="/" css={logoCSS}>
            {/* <StaticImage src={'./logo.png'} layout="fixed" width={50} height={50} />
        reveality */}
            <Logo />
          </Link>

          <div css={centralBarCSS}>
            <Link to={'/'} css={linkCSS}>
              Home
            </Link>
            <Link to={'/team'} css={linkCSS}>
              The App
            </Link>
            <Link to={'/team'} css={linkCSS}>
              Revy Pro
            </Link>
            <Link to={'/team'} css={linkCSS}>
              Services
            </Link>
            <Link to={'/team'} css={linkCSS}>
              About
            </Link>
            <Link to={'/contact'} css={linkCSS}>
              Contact
            </Link>
          </div>
          <div>
            {Object.keys(supportedLangs).map(
              (langCode: string, index: number) => {
                // alert(this.props.currentUrl);
                const baseUrl = currentUrl
                  .replace(supportedLangs[currentLangCode].urlPrefix, '') // Remove language prefix
                  .replace('//', '/') // Avoid possible double slash
                return (
                  <Link
                    key={index}
                    to={baseUrl}
                    onClick={() => {
                      updateDefaultLanguage(langCode as LangCode)
                    }}
                    css={langLinkCSS(currentLangCode === langCode)}
                  >
                    {supportedLangs[langCode].shortName}
                  </Link>
                )
              }
            )}
          </div>
        </div>
      </div>
    </>
  )
}
