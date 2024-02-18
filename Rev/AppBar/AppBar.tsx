import * as React from 'react'
import { PaletteMode, Theme } from '@mui/material'
import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import MenuItem from '@mui/material/MenuItem'
import Drawer from '@mui/material/Drawer'
import MenuIcon from '@mui/icons-material/Menu'
import { LangCode } from '../../types'
import logo from './logoHorizontal.svg'
import { useTheme } from '@emotion/react'
import { glassStyle } from '../../../globalStyles'
import { navigate, Link } from 'gatsby'
import { StringList } from '../../types'
import { supportedLangs } from '../../../locales/locales'
import { langLinkCSS } from './styles'

const updateDefaultLanguage = (defaultLanguage: LangCode): void => {
  // console.log('update language to ', defaultLanguage)
  window.localStorage.setItem('language', defaultLanguage)
}

export const LOCAL: StringList = {
  theApp: {
    ['en']: 'The App',
    ['fr']: `L'appli`,
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
  },
  education: {
    ['en']: 'Workshops',
    ['fr']: 'Ateliers',
  },
}

const logoStyle = {
  width: '90px',
  height: 'auto',
  cursor: 'pointer',
}

const menuItemStyle = {
  // py: '6px',
  // px: '12px',
  px: '1.4rem',
  borderRadius: '3rem',
  // borderRadius: '999px'
}

const drawerTextStyle = {
  p: '2rem',
  fontSize: '2rem',
  textAlign: 'right',
}

const navbarStyle = (theme: Theme) => ({
  display: 'flex',
  alignItems: 'stretch',
  justifyContent: { md: 'center', xs: 'space-between' },
  ...glassStyle(theme),
  height: '3rem',
  borderRadius: '3rem',
  // flexGrow: 0,
  width: { md: 'fit-content', xs: '100%' },
  py: '0.5rem',
})

const textStyle = {
  fontWeight: 600,
  fontSize: '1rem',
}

const languageSwitcher = (
  theme: Theme,
  currentUrl: string,
  currentLangCode: LangCode
) => {
  return (
    <>
      {Object.keys(supportedLangs).map((langCode: string, index: number) => {
        // alert(this.props.currentUrl);
        const baseUrl = currentUrl
          .replace(supportedLangs[currentLangCode].urlPrefix, '') // Remove language prefix
          .replace('//', '/') // Avoid possible double slash
        return (
          <Typography
            variant="body2"
            color="text.primary"
            sx={{ fontSize: { xs: '1.4rem', md: '' } }}
          >
            <Link
              key={index}
              to={baseUrl}
              onClick={() => {
                updateDefaultLanguage(langCode as LangCode)
              }}
              css={langLinkCSS(theme, currentLangCode === langCode)}
            >
              {supportedLangs[langCode].shortName}
            </Link>
          </Typography>
        )
      })}
    </>
  )
}

interface OwnProps {
  currentLangCode: LangCode
  currentUrl: string
}
const mode: PaletteMode = 'light'

function AppAppBar({ currentLangCode, currentUrl }: OwnProps) {
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen)
  }

  const navigateToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId)
    // Scroll if in page, navigate to root page if not
    if (sectionElement) {
      const offset = 128
      const targetScroll = sectionElement.offsetTop - offset
      sectionElement.scrollIntoView({ behavior: 'smooth' })
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      })
    } else {
      navigate(`/#${sectionId}`)
    }
    setOpen(false)
  }

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: 'transparent',
          backgroundImage: 'none',
          mt: 2.5,
        }}
      >
        <Container maxWidth="lg">
          {/** Logo wide */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                alignItems: 'flex-end',
                justifyContent: 'center',
                px: 0,
              }}
              onClick={() => navigateToSection('hero')}
            >
              <img src={logo} style={logoStyle} alt="logo of Reveality" />
            </Box>

            <Toolbar
              variant="regular"
              sx={{
                ...navbarStyle(theme),
                display: { xs: 'none', md: 'flex' },
                // manual gutter
                px: navbarStyle(theme).py,
              }}
              disableGutters={true}
            >
              {/** Large Toolbar*/}

              <Box
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  justifyContent: 'center',
                  alignItems: 'stretch',
                }}
              >
                <MenuItem
                  onClick={() => navigateToSection('theApp')}
                  sx={menuItemStyle}
                >
                  <Typography
                    variant="body2"
                    color="text.primary"
                    sx={textStyle}
                  >
                    {LOCAL.theApp[currentLangCode]}
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => navigateToSection('portfolio')}
                  sx={menuItemStyle}
                >
                  <Typography
                    variant="body2"
                    color="text.primary"
                    sx={textStyle}
                  >
                    {LOCAL.portfolio[currentLangCode]}
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => navigateToSection('about')}
                  sx={menuItemStyle}
                >
                  <Typography
                    variant="body2"
                    color="text.primary"
                    sx={textStyle}
                  >
                    {LOCAL.about[currentLangCode]}
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => navigate('/education')}
                  sx={menuItemStyle}
                >
                  <Typography
                    variant="body2"
                    color="text.primary"
                    sx={textStyle}
                  >
                    {LOCAL.education[currentLangCode]}
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => navigateToSection('contact')}
                  sx={menuItemStyle}
                >
                  <Typography
                    variant="body2"
                    color="text.primary"
                    sx={textStyle}
                  >
                    {LOCAL.contact[currentLangCode]}
                  </Typography>
                </MenuItem>
              </Box>
            </Toolbar>

            <Toolbar
              variant="regular"
              sx={{
                ...navbarStyle(theme),
                display: { xs: 'flex', md: 'none' },
              }}
            >
              {/** Mobile Toolbar*/}
              <Box
                sx={{
                  display: { xs: 'flex', md: 'none' },
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: 1.5,
                }}
                onClick={() => navigateToSection('hero')}
              >
                <img src={logo} style={logoStyle} alt="logo of Reveality" />
              </Box>

              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ p: '10px', borderRadius: '999px' }}
              >
                <MenuIcon />
              </Button>
            </Toolbar>

            <Drawer
              anchor="right"
              open={open}
              onClose={toggleDrawer(false)}
              slotProps={{
                backdrop: {
                  style: {
                    backgroundColor: 'transparent',
                    filter: 'blur(0px)',
                  },
                },
              }}
            >
              <Box
                sx={{
                  minWidth: '60dvw',
                  p: 2,

                  ...glassStyle(theme),
                  borderRadius: 0,
                  flexGrow: 1,
                }}
              >
                <MenuItem
                  onClick={() => navigateToSection('theApp')}
                  sx={{ borderRadius: '999px' }}
                >
                  <Typography sx={drawerTextStyle}>
                    {LOCAL.theApp[currentLangCode]}
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => navigateToSection('portfolio')}
                  sx={{ borderRadius: '999px' }}
                >
                  <Typography sx={drawerTextStyle}>
                    {' '}
                    {LOCAL.portfolio[currentLangCode]}
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => navigateToSection('about')}
                  sx={{ borderRadius: '999px' }}
                >
                  <Typography sx={drawerTextStyle}>
                    {LOCAL.about[currentLangCode]}
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => navigateToSection('contact')}
                  sx={{ borderRadius: '999px' }}
                >
                  <Typography sx={drawerTextStyle}>
                    {LOCAL.contact[currentLangCode]}
                  </Typography>
                </MenuItem>
                <Divider />
                <Box
                  sx={{
                    display: { xs: 'flex', md: 'none' },
                    gap: 0.5,
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    my: 4,
                  }}
                >
                  {languageSwitcher(theme, currentUrl, currentLangCode)}
                </Box>
              </Box>
            </Drawer>

            {/* </Toolbar> */}

            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 0.5,
                alignItems: 'center',
              }}
            >
              {languageSwitcher(theme, currentUrl, currentLangCode)}
            </Box>
          </Box>
        </Container>
      </AppBar>
    </div>
  )
}

export default AppAppBar
