import React from 'react';
import { Link } from 'gatsby';
import { supportedLangs } from '../../../locales/locales';
import { LangCode } from '../../types';
import Logo from './../RevealityLogo/RevealityLogo';
import { containerCSS, logoCSS, linkCSS, langLinkCSS} from './styles'

const updateDefaultLanguage = (defaultLanguage: LangCode): void => {
  // console.log('update language to ', defaultLanguage)
  window.localStorage.setItem('language', defaultLanguage);
};

interface OwnProps {
  currentLangCode: LangCode;
  currentUrl: string;
}
export default function Navbar({ currentLangCode, currentUrl }: OwnProps) {
  return (
    <div css={containerCSS}>
      <Link to="/" css={logoCSS}>
        {/* <StaticImage src={'./logo.png'} layout="fixed" width={50} height={50} />
        reveality */}
        <Logo />
      </Link>
      <div>
        <Link
          to={'/education'}
          css={linkCSS}
        >
          EDUCATION
        </Link>

        {Object.keys(supportedLangs).map((langCode: string, index: number) => {
          // alert(this.props.currentUrl);
          const baseUrl = currentUrl
            .replace(supportedLangs[currentLangCode].urlPrefix, '') // Remove language prefix
            .replace('//', '/'); // Avoid possible double slash
          return (
            <Link
              key={index}
              to={baseUrl}
              onClick={() => {
                updateDefaultLanguage(langCode as LangCode);
              }}
              css={langLinkCSS(currentLangCode === langCode)}
            >
              {langCode}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
