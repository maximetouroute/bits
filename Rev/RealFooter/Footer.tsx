import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link, StaticQuery } from 'gatsby'
import { strings } from './strings'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import FacebookIcon from '@mui/icons-material/Facebook'
import NewsletterForm from '../newsletterFormReveality/newsletterForm'
import { Box } from '@mui/material'
const MAILCHIMP_URL =
  'https://reveality.us5.list-manage.com/subscribe/post?u=8b4e477d425a1fcb90d90a287&amp;id=7331d8e0bb'
const BREVO_URL = "https://ab7fab4d.sibforms.com/serve/MUIFAMC79nZZcqgeTbb4jM-4bGnflf7fjDRnIHl0C8mDmoh8KdzWLsUaAcN_u3WZ1EpP6hSsbR6i2um8koMQ6FHi0A_13UA2o-DZGvxVSS8k12LGfs5UUgruIadXkw2swgQTFP4is_B8fLlGQ5aa3dseEFH5xqvxwSxvclmG1TDlb5e4A9Qv6ONbw9mIcPOtERSXl_HHrfp0iPkw"
const MAILCHIMP_ANTISPAM_ID = 'b_8b4e477d425a1fcb90d90a287_7331d8e0bb';


const propTypes = {
  links: PropTypes.array,
  lang: PropTypes.string,
}

const defaultProps = {
  links: [],
  lang: 'en',
}
import { useTheme } from '@emotion/react'
import { NamedLink } from '../../types'
import { LangCode } from '../../types'
import {
  socialIconCSS,
  footerCSS,
  linksCSS,
  headerCSS,
  socialLinksCSS,
  socialMediaListCSS,
  svgIconCSS,
  contactCSS,
  contactInfosCSS,
  insideCSS,
  followUsCSS,
  followUsStuffCSS,
} from './styles'
import { Typography } from '@mui/material'

interface OwnProps {
  customLinks: Array<NamedLink>
  lang: LangCode
}
export default function Footer({ customLinks, lang }: OwnProps) {
  const theme = useTheme()

  const socialMediaLinks = (links) => {
    return (
      <div css={socialLinksCSS}>
        <div css={socialMediaListCSS}>
          {links.github && (
            <a
              id="github-link"
              css={socialIconCSS}
              title="Github"
              aria-label="Github Page"
              href={links.github}
              target="_blank"
              rel="noreferrer noopener"
            >
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 28"
                css={svgIconCSS}
              >
                <path d="M12 2c6.625 0 12 5.375 12 12 0 5.297-3.437 9.797-8.203 11.391-0.609 0.109-0.828-0.266-0.828-0.578 0-0.391 0.016-1.687 0.016-3.297 0-1.125-0.375-1.844-0.812-2.219 2.672-0.297 5.484-1.313 5.484-5.922 0-1.313-0.469-2.375-1.234-3.219 0.125-0.313 0.531-1.531-0.125-3.187-1-0.313-3.297 1.234-3.297 1.234-0.953-0.266-1.984-0.406-3-0.406s-2.047 0.141-3 0.406c0 0-2.297-1.547-3.297-1.234-0.656 1.656-0.25 2.875-0.125 3.187-0.766 0.844-1.234 1.906-1.234 3.219 0 4.594 2.797 5.625 5.469 5.922-0.344 0.313-0.656 0.844-0.766 1.609-0.688 0.313-2.438 0.844-3.484-1-0.656-1.141-1.844-1.234-1.844-1.234-1.172-0.016-0.078 0.734-0.078 0.734 0.781 0.359 1.328 1.75 1.328 1.75 0.703 2.141 4.047 1.422 4.047 1.422 0 1 0.016 1.937 0.016 2.234 0 0.313-0.219 0.688-0.828 0.578-4.766-1.594-8.203-6.094-8.203-11.391 0-6.625 5.375-12 12-12zM4.547 19.234c0.031-0.063-0.016-0.141-0.109-0.187-0.094-0.031-0.172-0.016-0.203 0.031-0.031 0.063 0.016 0.141 0.109 0.187 0.078 0.047 0.172 0.031 0.203-0.031zM5.031 19.766c0.063-0.047 0.047-0.156-0.031-0.25-0.078-0.078-0.187-0.109-0.25-0.047-0.063 0.047-0.047 0.156 0.031 0.25 0.078 0.078 0.187 0.109 0.25 0.047zM5.5 20.469c0.078-0.063 0.078-0.187 0-0.297-0.063-0.109-0.187-0.156-0.266-0.094-0.078 0.047-0.078 0.172 0 0.281s0.203 0.156 0.266 0.109zM6.156 21.125c0.063-0.063 0.031-0.203-0.063-0.297-0.109-0.109-0.25-0.125-0.313-0.047-0.078 0.063-0.047 0.203 0.063 0.297 0.109 0.109 0.25 0.125 0.313 0.047zM7.047 21.516c0.031-0.094-0.063-0.203-0.203-0.25-0.125-0.031-0.266 0.016-0.297 0.109s0.063 0.203 0.203 0.234c0.125 0.047 0.266 0 0.297-0.094zM8.031 21.594c0-0.109-0.125-0.187-0.266-0.172-0.141 0-0.25 0.078-0.25 0.172 0 0.109 0.109 0.187 0.266 0.172 0.141 0 0.25-0.078 0.25-0.172zM8.937 21.438c-0.016-0.094-0.141-0.156-0.281-0.141-0.141 0.031-0.234 0.125-0.219 0.234 0.016 0.094 0.141 0.156 0.281 0.125s0.234-0.125 0.219-0.219z"></path>
              </svg>
            </a>
          )}

          {links.facebook && (
            <div>
              <a
                id="facebook-link"
                css={socialIconCSS}
                title="Facebook"
                aria-label="Facebook"
                href={links.facebook}
                target="_blank"
                rel="noreferrer noopener"
              >
                <svg css={svgIconCSS} viewBox="0 0 20 20">
                  <path d="M11.344,5.71c0-0.73,0.074-1.122,1.199-1.122h1.502V1.871h-2.404c-2.886,0-3.903,1.36-3.903,3.646v1.765h-1.8V10h1.8v8.128h3.601V10h2.403l0.32-2.718h-2.724L11.344,5.71z"></path>
                </svg>
              </a>
            </div>
          )}

          {links.instagram && (
            <div>
              <a
                id="insta-link"
                css={socialIconCSS}
                title="Instagram"
                aria-label="Instagram"
                href={links.instagram}
                target="_blank"
                rel="noreferrer noopener"
              >
                <svg css={svgIconCSS} viewBox="0 0 26 26">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"></path>
                </svg>
              </a>
            </div>
          )}

          {links.vimeo && (
            <a
              id="vimeo-link"
              css={socialIconCSS}
              title="Vimeo"
              aria-label="Vimeo"
              href={links.vimeo}
              target="_blank"
              rel="noreferrer noopener"
            >
              <svg css={svgIconCSS} viewBox="0 0 26 26">
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197c1.185-1.044 2.351-2.084 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.493 4.797l-.013.01z"
                ></path>
              </svg>
            </a>
          )}

          {links.twitter && (
            <a
              id="twitter-link"
              css={socialIconCSS}
              title="Twitter"
              aria-label="Twitter"
              href={links.twitter}
              target="_blank"
              rel="noreferrer noopener"
            >
              <svg css={svgIconCSS} viewBox="0 0 20 20">
                <path
                  fill="none"
                  d="M18.258,3.266c-0.693,0.405-1.46,0.698-2.277,0.857c-0.653-0.686-1.586-1.115-2.618-1.115c-1.98,0-3.586,1.581-3.586,3.53c0,0.276,0.031,0.545,0.092,0.805C6.888,7.195,4.245,5.79,2.476,3.654C2.167,4.176,1.99,4.781,1.99,5.429c0,1.224,0.633,2.305,1.596,2.938C2.999,8.349,2.445,8.19,1.961,7.925C1.96,7.94,1.96,7.954,1.96,7.97c0,1.71,1.237,3.138,2.877,3.462c-0.301,0.08-0.617,0.123-0.945,0.123c-0.23,0-0.456-0.021-0.674-0.062c0.456,1.402,1.781,2.422,3.35,2.451c-1.228,0.947-2.773,1.512-4.454,1.512c-0.291,0-0.575-0.016-0.855-0.049c1.588,1,3.473,1.586,5.498,1.586c6.598,0,10.205-5.379,10.205-10.045c0-0.153-0.003-0.305-0.01-0.456c0.7-0.499,1.308-1.12,1.789-1.827c-0.644,0.28-1.334,0.469-2.06,0.555C17.422,4.782,17.99,4.091,18.258,3.266"
                ></path>
              </svg>
            </a>
          )}

          {links.youtube && (
            <a
              id="youtube-link"
              css={socialIconCSS}
              title="YouTube"
              aria-label="YouTube"
              href={links.youtube}
              target="_blank"
              rel="noreferrer noopener"
            >
              <svg css={svgIconCSS} viewBox="0 0 20 20">
                <path d="M9.426,7.625h0.271c0.596,0,1.079-0.48,1.079-1.073V4.808c0-0.593-0.483-1.073-1.079-1.073H9.426c-0.597,0-1.079,0.48-1.079,1.073v1.745C8.347,7.145,8.83,7.625,9.426,7.625 M9.156,4.741c0-0.222,0.182-0.402,0.404-0.402c0.225,0,0.405,0.18,0.405,0.402V6.62c0,0.222-0.181,0.402-0.405,0.402c-0.223,0-0.404-0.181-0.404-0.402V4.741z M12.126,7.625c0.539,0,1.013-0.47,1.013-0.47v0.403h0.81V3.735h-0.81v2.952c0,0-0.271,0.335-0.54,0.335c-0.271,0-0.271-0.202-0.271-0.202V3.735h-0.81v3.354C11.519,7.089,11.586,7.625,12.126,7.625 M6.254,7.559H7.2v-2.08l1.079-2.952H7.401L6.727,4.473L6.052,2.527H5.107l1.146,2.952V7.559z M11.586,12.003c-0.175,0-0.312,0.104-0.405,0.204v2.706c0.086,0.091,0.213,0.18,0.405,0.18c0.405,0,0.405-0.451,0.405-0.451v-2.188C11.991,12.453,11.924,12.003,11.586,12.003 M14.961,8.463c0,0-2.477-0.129-4.961-0.129c-2.475,0-4.96,0.129-4.96,0.129c-1.119,0-2.025,0.864-2.025,1.93c0,0-0.203,1.252-0.203,2.511c0,1.252,0.203,2.51,0.203,2.51c0,1.066,0.906,1.931,2.025,1.931c0,0,2.438,0.129,4.96,0.129c2.437,0,4.961-0.129,4.961-0.129c1.117,0,2.024-0.864,2.024-1.931c0,0,0.202-1.268,0.202-2.51c0-1.268-0.202-2.511-0.202-2.511C16.985,9.328,16.078,8.463,14.961,8.463 M7.065,10.651H6.052v5.085H5.107v-5.085H4.095V9.814h2.97V10.651z M9.628,15.736h-0.81v-0.386c0,0-0.472,0.45-1.012,0.45c-0.54,0-0.606-0.515-0.606-0.515v-3.991h0.809v3.733c0,0,0,0.193,0.271,0.193c0.27,0,0.54-0.322,0.54-0.322v-3.604h0.81V15.736z M12.801,14.771c0,0,0,1.03-0.742,1.03c-0.455,0-0.73-0.241-0.878-0.429v0.364h-0.876V9.814h0.876v1.92c0.135-0.142,0.464-0.439,0.878-0.439c0.54,0,0.742,0.45,0.742,1.03V14.771z M15.973,12.39v1.287h-1.688v0.965c0,0,0,0.451,0.405,0.451s0.405-0.451,0.405-0.451v-0.45h0.877v0.708c0,0-0.136,0.901-1.215,0.901c-1.08,0-1.282-0.901-1.282-0.901v-2.51c0,0,0-1.095,1.282-1.095S15.973,12.39,15.973,12.39 M14.69,12.003c-0.405,0-0.405,0.45-0.405,0.45v0.579h0.811v-0.579C15.096,12.453,15.096,12.003,14.69,12.003"></path>
              </svg>
            </a>
          )}

          {links.soundcloud && (
            <a
              id="soundcloud-link"
              css={socialIconCSS}
              title="SoundCloud"
              aria-label="SoundCloud"
              href={links.soundcloud}
              target="_blank"
              rel="noreferrer noopener"
            >
              <svg
                viewBox="0 0 33 33"
                css={svgIconCSS}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M 27.874,16.069c-0.565,0-1.105,0.11-1.596,0.308C 25.95,12.803, 22.831,10, 19.028,10 c-0.931,0-1.834,0.176-2.635,0.474c-0.311,0.116-0.393,0.235-0.393,0.466l0,12.585 c0,0.243, 0.195,0.445, 0.441,0.469 C 16.452,23.994, 27.802,24, 27.875,24C 30.154,24, 32,22.224, 32,20.035S 30.152,16.069, 27.874,16.069zM 12.5,24L 13.5,24L 14,16.993L 13.5,10L 12.5,10L 12,16.993 zM 9.5,24L 8.5,24L 8,18.914L 8.5,14L 9.5,14L 10,19 zM 4.5,24L 5.5,24L 6,20L 5.5,16L 4.5,16L 4,20 zM 0.5,22L 1.5,22L 2,20L 1.5,18L 0.5,18L0,20 z"></path>
              </svg>
            </a>
          )}
        </div>
      </div>
    )
  }

  // Dirty default language switcher
  if (lang !== 'en' && lang !== 'fr') {
    lang = 'en'
  }

  return (
    <StaticQuery
      query={query}
      render={({
        site: {
          siteMetadata: {
            author,
            socialLinks: {
              twitter,
              facebook,
              linkedin,
              instagram,
              vimeo,
              youtube,
              github,
              soundcloud,
              tiktok,
            },
          },
        },
      }) => {
        const links = {
          twitter: twitter === '' ? undefined : twitter,
          tiktok: tiktok === '' ? undefined : tiktok,
          github: github === '' ? undefined : github,
          instagram: instagram === '' ? undefined : instagram,
          facebook: facebook === '' ? undefined : facebook,
          vimeo: vimeo === '' ? undefined : vimeo,
          soundcloud: soundcloud === '' ? undefined : soundcloud,
          youtube: youtube === '' ? undefined : youtube,
          linkedin: linkedin === '' ? undefined : linkedin,
        }

        return (
          <div css={footerCSS}>
            <div
              css={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Box
                sx={{
                  my: 10,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography variant="h7" sx={{ textAlign: 'center', py: 3 }}>
                  {strings.joinNewsletter[lang]}
                </Typography>

                <NewsletterForm
                  uniqueId={'footerForm'}
                  newsletterPostURL={BREVO_URL}
                  uniqueAntiSpamId={''}
                />
              </Box>
            </div>

            <div css={insideCSS}>
              <Typography variant="h7" sx={{ textAlign: 'center' }}>
                {strings.followUs[lang]}
              </Typography>
              <div css={followUsCSS}>
                <div css={followUsStuffCSS}>
                  <a
                    href={links.tiktok}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <MusicNoteIcon />
                  </a>

                  <a
                    href={links.instagram}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <InstagramIcon />
                  </a>

                  <a
                    href={links.twitter}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <TwitterIcon />
                  </a>

                  <a
                    href={links.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <LinkedInIcon />
                  </a>

                  <a
                    href={links.facebook}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <FacebookIcon />
                  </a>
                </div>
              </div>

              <div css={contactCSS}>
                <Typography
                  variant="h6"
                  sx={{ textAlign: 'center', py: 3, ...contactInfosCSS(theme) }}
                >
                  <a href="mailto:contact@reveality.io">contact@reveality.io</a>
                </Typography>
              </div>
            </div>

            <div
              css={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                // color: '#34393A',
                ...insideCSS,
              }}
            >
              <div css={linksCSS(theme)}>
                {customLinks.map((link) => {
                  return (
                    <Typography variant="body1">
                      <Link
                        key={link.name}
                        to={link.path}
                        css={{ margin: '0.5rem' }}
                      >
                        {link.name}
                      </Link>
                    </Typography>
                  )
                })}
              </div>
              <Typography variant="body2" sx={{ marginTop: '3rem' }}>
                Copyright 2024 Reveality
              </Typography>
            </div>
          </div>
        )
      }}
    />
  )
}

const query = graphql`
  query RealFooter {
    site {
      siteMetadata {
        author
        socialLinks {
          twitter
          facebook
          linkedin
          instagram
          vimeo
          youtube
          github
          soundcloud
          tiktok
        }
      }
    }
  }
`
