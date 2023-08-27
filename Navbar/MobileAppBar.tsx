import React from 'react';
import { Link } from 'gatsby';
import { CSSObject, Theme } from '@emotion/react';
import { breakpointKey } from '../styles/styles';
import { linkStyle } from './styles';

const siteTitleCSS: CSSObject = {
  color: 'white',
  '&:hover': {
    color: 'white',
  },
};

const mobileAppBarCSS = (theme: Theme): CSSObject => {
  return {
    paddingBottom: '1em',
    paddingTop: '1em',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.main,

    a: {
      ...linkStyle(theme),
      fontSize: '1.1em',
      fontWeight: 600,
      padding: '1em',
      color: 'white',
      '&:hover': {
        color: 'white',
      },
      boxShadow: 'inset 0 -2px 0 0 white',
    },
    // Final
    [breakpointKey('normal')]: {
      display: 'none',
    },
  };
};

interface OwnProps {
  title: string;
}

export default function MobileAppBar({ title }: OwnProps) {
  return (
      <div css={mobileAppBarCSS}>
        <Link activeClassName="" to="/" css={siteTitleCSS}>
          {title}
        </Link>
      </div>
  );
}
