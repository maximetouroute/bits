import { CSSObject } from '@emotion/react';

export const DEFAULT_MAIN_COLOR = '#1b1b1b';

export const basicTransitionCSS: CSSObject = {
  transition: 'all 100ms cubic-bezier(0.4, 0, 0.2, 1)',
};

export const themedACSS = (accentColor: string): CSSObject => {
  const underlineColor = `${accentColor}94`; //`rgba(${accentColor}, 0.3)`; //rgba(150,150,150, 0.5);
  return {
    textDecoration: 'none',
    borderBottom: `4px solid ${underlineColor}`,
    color: 'black',
    lineHeight: 1.5,
    ...basicTransitionCSS,
    '&:hover': {
      backgroundColor: `${underlineColor}`,
      borderBottom: '4px solid transparent',
      outline: 0,
      ...basicTransitionCSS,
    },

    '&:visited': {
      textDecoration: 'none',
      color: 'inherit',
    },

    '&:active, &:focus': {
      outline: 0,
      outlineStyle: 'none',
    },
  };
};

export const injectLinkCSS = (theme: Theme): CSSObject => {
  return {
    a: {
      ...themedACSS(theme.palette.primary.main),
    },
  };
};

export const breakpointKey = (value: string): string => {
  if (value === 'small') {
    return `@media (max-width: 61em)`;
  } else if (value === 'normal') {
    return `@media (min-width: 61em)`;
  } else {
    console.warn('Breakpoint mixin supports: small, normal');
    return '';
  }
};
