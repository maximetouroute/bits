import * as React from 'react';
import { PaletteMode, Theme } from '@mui/material';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import { LangCode } from '../../types';
import logo from './logoHorizontal.svg';
import { useTheme } from '@emotion/react';
import { glassStyle } from '../../../globalStyles';
import { navigate, Link } from 'gatsby';
import { StringList } from '../../types'
import { supportedLangs } from '../../../locales/locales'
import { langLinkCSS } from './styles';

const updateDefaultLanguage = (defaultLanguage: LangCode): void => {
  // console.log('update language to ', defaultLanguage)
  window.localStorage.setItem('language', defaultLanguage)
}


export const LOCAL: StringList = {
  theApp: {
    ['en']: 'App',
    ['fr']: 'Appli',
  },
  about: {
    ['en']: 'About',
    ['fr']: 'A propos',
  },
  portfolio: {
    ['en']: 'Portfolio',
    ['fr']: 'Portfolio',
  },
  contact: {
    ['en']: 'Contact',
    ['fr']: 'Contact',
  }
}



const logoStyle = {
  width: '90px',
  height: 'auto',
  cursor: 'pointer',
};

const menuItemStyle = {
    py: '6px', 
    px: '12px',
    borderRadius: '999px'
};

const navbarStyle = (theme: Theme) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexShrink: 0,
    maxHeight: 40,
    ...glassStyle(theme),
    borderRadius: '999px',
 });


 const languageSwitcher = (currentUrl: string, currentLangCode: LangCode) => {
  return (<>
  {Object.keys(supportedLangs).map(
    (langCode: string, index: number) => {
      // alert(this.props.currentUrl);
      const baseUrl = currentUrl
        .replace(supportedLangs[currentLangCode].urlPrefix, '') // Remove language prefix
        .replace('//', '/') // Avoid possible double slash
      return (
        <Typography variant="body2" color="text.primary">
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
        </Typography>
      )
    }
  )}
</>)
 }


interface OwnProps {
  currentLangCode: LangCode;
  currentUrl: string
}
const mode: PaletteMode = "light";

function AppAppBar({ currentLangCode, currentUrl }: OwnProps) {
    const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
      setOpen(false);
    }
  };

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: 'transparent',
          backgroundImage: 'none',
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={navbarStyle(theme)}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                marginRight: '2rem',
                px: 0,
              }}
              onClick={() => scrollToSection('hero')}
            >
              <img
                src={logo}
                style={logoStyle}
                alt="logo of Reveality"
              />
              </Box>
              <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                px: 0,
              }}
            >
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <MenuItem
                  onClick={() => scrollToSection('theApp')}
                  sx={menuItemStyle}
                >
                  <Typography variant="body2" color="text.primary">
                    {LOCAL.theApp[currentLangCode]}
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection('portfolio')}
                  sx={menuItemStyle}
                >
                  <Typography variant="body2" color="text.primary">
                  {LOCAL.portfolio[currentLangCode]}
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection('about')}
                  sx={menuItemStyle}
                >
                  <Typography variant="body2" color="text.primary">
                  {LOCAL.about[currentLangCode]}
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() =>  scrollToSection('contact')}
                  sx={menuItemStyle}
                >
                  <Typography variant="body2" color="text.primary">
                  {LOCAL.contact[currentLangCode]}
                  </Typography>
                </MenuItem>

              

              </Box>
            </Box>

            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 0.5,
                alignItems: 'center',
              }}
            >
            {languageSwitcher(currentUrl, currentLangCode)}
          </Box>

            <Box sx={{ display: { sm: '', md: 'none' } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: '30px', p: '4px' }}
              >
                <MenuIcon />
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)} slotProps={{
                backdrop:{
                    style: {backgroundColor: 'transparent', filter:'blur(0px)'}
                }}}
              >
                <Box
                  sx={{
                    minWidth: '70dvw',

                    p: 2,
                    backgroundColor: 'transparent',
                    ...glassStyle(theme),
                    borderRadius: 0,
                    // backdropFilter: 'blur(24px)',
                    flexGrow: 1,

                  }}
                >
                  <MenuItem onClick={() => scrollToSection('theApp')} sx={{borderRadius: '999px'}}>
                  {LOCAL.theApp[currentLangCode]}
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection('portfolio')} sx={{borderRadius: '999px'}}>
                  {LOCAL.portfolio[currentLangCode]}
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection('about')} sx={{borderRadius: '999px'}}>
                  {LOCAL.about[currentLangCode]}
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection('contact')} sx={{borderRadius: '999px'}}>
                  {LOCAL.contact[currentLangCode]}
                  </MenuItem>
                  
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default AppAppBar;