import { CSSObject } from '@emotion/react';

import { breakpointKey } from '../styles/styles';

const blackLink ='#4c4c4c';

export const postCSS: CSSObject = {

  display: 'flex',
  flexDirection: 'column',

  // border-radius: 5px;
  backgroundColor: 'transparent',
  // border: solid 2px $black
  transform: 'scale(0.98)',
  fontSize: '1rem',

  color: blackLink,
  opacity: 0.9,

  // transition: `-webkit-transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
  //   transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
  //   filter 250ms cubic-bezier(0.4, 0, 0.2, 1),
  //   opacity 250ms cubic-bezier(0.4, 0, 0.2, 1)`,
  transition: `color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    filter 250ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 250ms cubic-bezier(0.4, 0, 0.2, 1)`,
  textDecoration: 'none', // Post is a link element
  // &:hover {
  //   transition: -webkit-transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
  //   transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
  //   filter 250ms cubic-bezier(0.4, 0, 0.2, 1),
  //   opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  // }

 [breakpointKey('small')]: {
    width: '90vw',
    height: '70vw',
    marginTop: '1em',
    marginCottom: '1em',
    opacity: 1,
    '&:hover': {
      transform: 'none',
      cursor: 'pointer'
    },
  },

  [breakpointKey('normal')]: {
    margin: '1em',
    width: '60vw',
    height: '30vw',
    maxWidth: '30em',
    maxHeight: '20em',
    opacity: 1
  },

    '&:hover': {
      border: 'none',
      // transition: border 0.5s ease-out;
      cursor: 'pointer',
      transform: 'scale(1)',
      color: 'white',
      opacity: 1
    }
};


  export const postHeadCSS: CSSObject = {
    display: 'flex',
    flexDirection: 'column'
  };

  export const postTitleCSS: CSSObject = {
    // padding: 2em;
    // border-radius: 5px;
    fontSize: '1.5em',
    // color: $blackLink;
    fontWeight: 600,
    padding:'0.5rem',
    paddingBottom: 0,
    paddingLeft: 0,
    // background-color: $backgroundColorForText;
    // box-decoration-break: clone;
    marginBottom: 0
  };

export const postSubtitleCSS: CSSObject = {
      // border-radius: 5px;
      fontSize: '1em',
      // color: $blackLink;
      // background-color: $backgroundText;
      boxDecorationBreak: 'clone',
      padding: '0.5rem',
      paddingLeft: 0
    };


export const postPictureCSS: CSSObject = {
  flexGrow: 1,
  backgroundRepeat: 'no-repeat',
  backgroundSize:'cover',
  backgroundPosition: 'center top'
};
