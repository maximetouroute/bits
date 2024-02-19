import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { glassCSS } from '../../../globalStyles'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople'
import GroupsIcon from '@mui/icons-material/Groups'
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'
import { injectLinkCSS } from '../../styles/styles'
import SchoolIcon from '@mui/icons-material/School'
import { useTheme } from '@emotion/react'
import { StringList } from '../../types'
import { LangCode } from '../../types'

const iconStyle = {
  width: 20,
  color: 'primary.main',
}

const coverStyle = {
  borderRadius: '24px',
}

const strings: StringList = {
  ourOffers: {
    en: 'Our offers',
    fr: 'Nos Formats',
  },
  ourOffersSubtitle: {
    fr: (
      <>
        Ils s'adaptent à vous, votre lieu et votre public.
        <br />
        <a href="mailto:contact@reveality.io">Contactez-nous</a> pour vos
        demandes sur mesure.
      </>
    ),
    en: (
      <>
        We adapt them to your needs, venue and audience.
        <br />
        <a href="mailto:contact@reveality.io">Contact us</a> for custom
        requests.
      </>
    ),
  },
}

const tiers = [
  {
    title: { fr: 'En continu', en: 'Come and go' },
    cover: (
      <StaticImage src="./continu.jpg" css={coverStyle} aspectRatio={1.5} />
    ),
    description: [
      {
        icon: <AccessTimeIcon sx={iconStyle} />,
        text: { fr: '5-10min par personne', en: '5-10mns per person' },
      },
      {
        icon: <GroupsIcon sx={iconStyle} />,
        text: { fr: 'Toutes jauges', en: 'All audience sizes' },
      },
      {
        icon: <SchoolIcon sx={iconStyle} />,
        text: {
          fr: 'Créer son premier contenu',
          en: 'Creating your first content',
        },
      },
      {
        icon: <AutoAwesomeIcon sx={iconStyle} />,
        text: {
          fr: `Idéal pour : évenements, soirées, salons, festivals`,
          en: 'Ideal for: events, parties, trade shows, festivals.',
        },
      },
    ],
    buttonText: { fr: 'Nous contacter', en: 'Contact us' },
    buttonVariant: 'outlined',
  },
  {
    title: { fr: 'En atelier', en: 'Workshop' },
    cover: (
      <StaticImage src="./workshop-2.jpg" css={coverStyle} aspectRatio={1.5} />
    ),
    description: [
      {
        icon: <AccessTimeIcon sx={iconStyle} />,
        text: { fr: '30min - 1h30', en: '30mns - 1h30' },
      },
      {
        icon: <GroupsIcon sx={iconStyle} />,
        text: { fr: '6-15 participants', en: '6-15 persons' },
      },
      {
        icon: <SchoolIcon sx={iconStyle} />,
        text: {
          fr: `S'emparer du processus créatif`,
          en: 'Appropriating the creative process',
        },
      },
      {
        icon: <AutoAwesomeIcon sx={iconStyle} />,
        text: {
          fr: `Idéal pour : scolaires, adultes, groupes parents-enfants, modules de formation`,
          en: 'Ideal for: students, adults, parent-child groups, training modules.',
        },
      },
    ],
    buttonText: { fr: 'Nous contacter', en: 'Contact us' },
    buttonVariant: 'outlined',
  },

  {
    title: { fr: 'Sans nous !', en: 'Without us!' },
    cover: <StaticImage src="./solo.jpg" css={coverStyle} aspectRatio={1.5} />,
    description: [
      {
        icon: <EmojiPeopleIcon sx={iconStyle} />,
        text: { fr: 'On forme vos équipes', en: 'We train your team' },
      },
      {
        icon: <MobileFriendlyIcon sx={iconStyle} />,
        text: { fr: `Accès à l'appli`, en: 'Unlimited app access' },
      },
      {
        icon: <SupportAgentIcon sx={iconStyle} />,
        text: { fr: 'Notre équipe en support', en: 'Our support team' },
      },
      {
        icon: <AutoAwesomeIcon sx={iconStyle} />,
        text: {
          fr: `Idéal pour : lieux de médiation, programmation régulière`,
          en: 'Ideal for: institutions, recurring workshops/events.',
        },
      },
    ],
    buttonText: { fr: 'Nous contacter', en: 'Contact us' },
    buttonVariant: 'outlined',
  },
]

interface OwnProps {
  langCode: LangCode
}
export default function Ateliers({ langCode }: OwnProps) {
  const theme = useTheme()
  console.log(tiers)
  console.log(tiers[0])
  console.log(tiers[0].title)
  console.log(tiers[0].title[langCode])
  console.log(langCode)
  return (
    <Container
      id="pricing"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: 'center',
        }}
      >
        <Typography
          component="h2"
          variant="h4"
          color="text.primary"
          sx={{ my: 2 }}
        >
          {strings.ourOffers[langCode]}
        </Typography>
        <Typography variant="body1" sx={{ ...injectLinkCSS(theme) }}>
          {strings.ourOffersSubtitle[langCode]}
        </Typography>
      </Box>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        {tiers.map((tier) => (
          <Grid item key={tier.title[langCode]} xs={12} md={4}>
            <Card
              sx={{
                p: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'stretch',
                jusitfyContent: 'stretch',
                flexGrow: 1,
                gap: 4,
                // border: tier.title === 'Professional' ? '1px solid' : undefined,
                // borderColor:
                //   tier.title === 'Professional' ? 'primary.main' : undefined,
                // background:
                //   tier.title === 'Professional'
                //     ? 'linear-gradient(#033363, #021F3B)'
                //     : undefined,
                ...glassCSS,
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    mb: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    // color:
                    //   tier.title === 'Professional'
                    //     ? 'primary.contrastText'
                    //     : '',
                  }}
                >
                  {tier.cover}
                  <Typography component="h3" variant="h6" sx={{ mt: 2 }}>
                    {tier.title[langCode]}
                  </Typography>

                  {/* {tier.title === 'Sans nous !' && (
                    <Chip
                      icon={<AutoAwesomeIcon />}
                      label={"Application"}
                      size="small"
                      sx={{
                        background: (theme) =>
                          theme.palette.mode === 'light' ? '' : 'none',
                        backgroundColor: 'primary.contrastText',
                        '& .MuiChip-label': {
                          color: 'primary.dark',
                        },
                        '& .MuiChip-icon': {
                          color: 'primary.dark',
                        },
                      }}
                    />
                  )} */}
                </Box>
                {/* <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'baseline',
                    color:
                      tier.title === 'Professional'
                        ? 'primary.contrastText'
                        : undefined,
                  }}
                >
                  <Typography component="h3" variant="h2">
                    ${tier.price}
                  </Typography>
                  <Typography component="h3" variant="h6">
                    &nbsp; per month
                  </Typography>
                </Box> */}
                <Divider
                  sx={{
                    m: 2,
                    my: 2,
                    opacity: 0.2,
                    borderColor: 'grey.500',
                  }}
                />
                {tier.description.map((description, index) => (
                  <Box
                    key={description.text[langCode]}
                    sx={{
                      p: 2,
                      py: 1,
                      display: 'flex',
                      gap: 1.5,
                      alignItems: 'center',
                    }}
                  >
                    {description.icon}

                    <Typography
                      component="text"
                      variant="subtitle2"
                      sx={
                        {
                          // color:
                          //   tier.title === 'Professional'
                          //     ? 'primary.contrastText'
                          //     : undefined,
                        }
                      }
                    >
                      {description.text[langCode]}
                    </Typography>
                  </Box>
                ))}
              </CardContent>
              <CardActions>
                <Button
                  fullWidth
                  variant={tier.buttonVariant as 'outlined' | 'contained'}
                  component="a"
                  href="mailto:contact@reveality.io"
                  target="_blank"
                  sx={{
                    borderRadius: glassCSS.borderRadius,
                  }}
                >
                  {tier.buttonText[langCode]}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
