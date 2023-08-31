import { CSSObject } from "@emotion/react";
import { breakpointKey } from "../../styles/styles";

export const responsiveContainerCSS: CSSObject = {
    display: 'flex',
    justifyContent: 'center',
  };

  
  export const responsiveContainerInsideCSS: CSSObject = {
    [breakpointKey('normal')]: {
      minWidth: '60rem',
      maxWidth: '80rem',
    },
    [breakpointKey('small')]: {
      minWidth: '90vw',
      // padding: '0.2rem',
    },
  };


export const mainViewCSS: CSSObject = {
    ...responsiveContainerCSS,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '90vh',
    display: 'flex',
    flexDirection: 'column',
  };
  
  export const mainViewInsideCSS: CSSObject = {
    ...responsiveContainerInsideCSS,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    [breakpointKey('small')]: {
      flexDirection: 'column',
    },
  };



  export const punchlineCSS: CSSObject = {
    fontSize: '2rem',
    [breakpointKey('small')]: {
      fontSize: '3rem',
    },
    fontWeight: 900,
    textAlign: 'center',
    color: '#34393A',
  
    // backgroundImage: 'linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)',
    // backgroundImage: 'linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)',
    // backgroundImage: 'linear-gradient(to top, #dfe9f3 0%, white 100%)',
    // backgroundImage: 'linear-gradient(-225deg, #A445B2 0%, #D41872 52%, #FF0066 100%)',
    // backgroundImage:
    //   'linear-gradient(-225deg, #9EFBD3 0%, #57E9F2 48%, #45D4FB 100%)',
    // backgroundImage: 'linear-gradient(-225deg, #22E1FF 0%, #1D8FE1 48%, #625EB1 100%)',
    // backgroundImage: 'linear-gradient(-225deg, #FFE29F 0%, #FFA99F 48%, #FF719A 100%)',
    // backgroundImage: 'radial-gradient(73% 147%, #EADFDF 59%, #ECE2DF 100%), radial-gradient(91% 146%, rgba(255,255,255,0.50) 47%, rgba(0,0,0,0.50) 100%)',
    // backgroundBlendMode: screen;
    // backgroundClip: 'text',
    // textFillColor: 'transparent',
  };
  

export const punchlineParagraphCSS: CSSObject = {
    paddingLeft: '5rem',
    paddingRight: '5rem',
    textAlign: 'center',
  };
  
  export const howDoesItWorkCSS: CSSObject = {
    [breakpointKey('normal')]: {
      minWidth: '40rem',
      maxWidth: '50rem',
      alignItems: 'flex-start',
    },
    [breakpointKey('small')]: {
      minWidth: '90vw',
      padding: '0.2rem',
      paddingTop: '3rem',
      flexDirection: 'column',
      alignItems: 'center',
    },
    display: 'flex',
    justifyContent: 'center',
  };

  export const howDoesItWorkPartCSS: CSSObject = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  export const subjectTitleCSS: CSSObject = {
    padding: '2rem',
    paddingTop: '1rem',
    paddingBottom: '1rem',
    borderRadius: '0.4rem',
    color: '#fbf9e8',
    backgroundColor: '#649de4',
    userSelect: 'none',
  };

  export const subjectVideoCSS: CSSObject = {
    borderRadius: '16px',
    height: '50vh',
    margin: '2em',
    [breakpointKey('small')]: {
      height: '60vh',
      borderRadius: '18px',
    },
  };