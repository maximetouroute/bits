import React from 'react';
import { Link } from 'gatsby';
import { CSSObject } from '@emotion/react';
import './Navbar.scss';
import { LangCode, supportedLangs } from '../../locales/locales';
import { breakpointKey } from '../../components/styles';
import Logo from './../RevealityLogo/RevealityLogo';
export const containerCSS: CSSObject = {
  // paddingTop: '2em',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingLeft: '2em',
  paddingRight: '2em',

  color: '#34393A',
  [breakpointKey('small')]: {
    paddingLeft: '1em',
    paddingRight: '1em',
  },
};

export const logoCSS: CSSObject = {
  fontWeight: 900,
  fontStyle: 'italic',
  // backgroundImage: 'linear-gradient(-225deg, #FFC796 0%,  #FFC796 48%, #45D4FB 100%)',
  // backgroundClip: 'text',
  // textFillColor: 'transparent',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width: '2rem',
  height: `${2 * 1.5}rem`,
  // marginBottom: 0,
  opacity: 0.9,
  paddingTop: '1rem',
  paddingBottom: '1rem',
  transition: 'transform 200ms linear',
  '&:hover': {
    transform: 'scale(1.05)',
  },
};

export const langCSS: CSSObject = {};

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
              css={{
                textTransform: 'uppercase',
                color: '#34393A',
                padding: '0.5em',
                textDecoration: 'none',
                fontWeight: currentLangCode === langCode ? 900 : 300,
              }}
            >
              {langCode}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
