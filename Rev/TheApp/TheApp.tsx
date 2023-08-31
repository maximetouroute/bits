import React from 'react';
import {  punchlineCSS, mainViewCSS, howDoesItWorkCSS, howDoesItWorkPartCSS, subjectTitleCSS, subjectVideoCSS} from './styles';
import { strings } from './strings';
import { LangCode } from '../../types';

import subjectRaw from './../../../pages/subjectRAW.webm';
import subjectAlpha from './../../../pages/subjectALPHA.webm';
import subjectMix from './../../../pages/subjectMIX.webm';
import subjectRawSafariIos from './../../../pages/subjectRAWSafari.mp4';
import subjectAlphaSafariIos from './../../../pages/subjectALPHASafari.mp4';
import subjectMixSafariIos from './../../../pages/subjectMIXSafari.mp4';


interface OwnProps {
  langCode: LangCode;
}
export default function TheApp({ langCode }: OwnProps) {

  return (
    <div css={mainViewCSS}>
            <h1 css={{ ...punchlineCSS, marginTop: '8rem', marginBottom: '2rem' }}>
          {strings['punchline'][langCode]}
        </h1>
        <div css={howDoesItWorkCSS}>
          <div css={howDoesItWorkPartCSS}>
            <h3 css={subjectTitleCSS}>{strings['experiment'][langCode]}</h3>
            <p>{strings['experimentDetails'][langCode]}</p>

            <video autoPlay muted loop playsInline css={subjectVideoCSS}>
              <source src={subjectRaw} type="video/webm" />
              <source src={subjectRawSafariIos} type="video/mp4" />
            </video>
          </div>
          <div css={howDoesItWorkPartCSS}>
            <h3 css={subjectTitleCSS}>{strings['create'][langCode]}</h3>
            <p>{strings['createDetails'][langCode]}</p>
            <video autoPlay muted loop playsInline css={subjectVideoCSS}>
              <source src={subjectAlpha} type="video/webm" />
              <source src={subjectAlphaSafariIos} type="video/mp4" />
            </video>
          </div>

          <div css={howDoesItWorkPartCSS}>
            <h3 css={subjectTitleCSS}>{strings['publish'][langCode]}</h3>
            <p>{strings['publishDetails'][langCode]}</p>
            <video autoPlay muted loop playsInline css={subjectVideoCSS}>
              <source src={subjectMix} type="video/webm" />
              <source src={subjectMixSafariIos} type="video/mp4" />
            </video>
          </div>
        </div>
    </div>
  )
}
