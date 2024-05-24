import React from 'react'
import LayoutRoot from '../LayoutRoot/LayoutRoot'
import 'moment'
import { MDXProvider } from '@mdx-js/react'
import SEO from '../../SEO/SEO'
import { graphql, Link } from 'gatsby'
import { SHORTCODES } from '../../mdx-components/shortcodes'
import {
  nextPrevLinkCSS,
  coverBandCSS,
  punchlineCSS,
  subtextCSS,
} from './styles'
import { articleCSS, cardCSS } from '../articleStyles'
import { Container, Typography, Button } from '@mui/material'
import { makeAccentColor } from '../accentColorCreator'


export default function Template({
  data: { mdx },
  children,
  location,
  pageContext: { previousPost, nextPost, langCode },
}) {

  // content is at false is no previous or next
  const previousPostHtml = previousPost ? (
    
    <Link to={`${previousPost.frontmatter.path}#content`}>
      <Button variant="text" style={{color: makeAccentColor(previousPost.frontmatter.image.colors.vibrant)}}>
      ← {previousPost.frontmatter.title}
    </Button>
    </Link>
  ) : (
    <div></div>
  )
  const nextPostHtml = nextPost ? (
    nextPost && (
      <Link to={`${nextPost.frontmatter.path}#content`}>
        <Button variant="text" style={{color: makeAccentColor(nextPost.frontmatter.image.colors.vibrant)}}>
        {nextPost.frontmatter.title} →
        </Button>
      </Link>
    )
  ) : (
    <div></div>
  )
  const accentColor = makeAccentColor(mdx.frontmatter.image.colors.vibrant)
  return (
    <LayoutRoot
      language={mdx.frontmatter.language}
      location={{ ...location }}
      accentColor={accentColor}
    >
      <SEO
        title={mdx.frontmatter.title}
        description={mdx.frontmatter.description || mdx.frontmatter.subtitle}
        image={
          mdx.frontmatter.image.childImageSharp.gatsbyImageData.images
            .sources[0]
        }
        pathname={mdx.frontmatter.path}
        article={true}
        langCode={langCode}
      />
      <div css={coverBandCSS} id="content">
        <Typography variant="h1" style={punchlineCSS}>
        {mdx.frontmatter.title}
        </Typography>
        <Typography variant="h2" style={subtextCSS}>
        {mdx.frontmatter.subtitle}
        </Typography>
        <div css={nextPrevLinkCSS}>
          {previousPostHtml}
          {nextPostHtml}
        </div>
      </div>

      <div css={cardCSS}>
        <Container maxWidth="md">
        <article
          itemScope
          itemType="http://schema.org/BlogPosting"
        >
          <div css={articleCSS}>
            <MDXProvider components={SHORTCODES}>{children}</MDXProvider>
           
          </div>
          <div css={nextPrevLinkCSS}>
              {previousPostHtml}
              {nextPostHtml}
            </div>
        </article>
        </Container>
      </div>
    </LayoutRoot>
  )
}

export const articlePageQuery = graphql`
  query MdxArticleByPath($markdownPath: String!, $langCode: String!) {
    mdx(
      frontmatter: { path: { eq: $markdownPath }, language: { eq: $langCode } }
    ) {
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        subtitle
        language
        description
        embeddedImagesLocal {
          ...modernGatImage
        }
        image {
          colors {
            ...GatsbyImageColors
          }
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 700)
          }
        }
      }
    }
  }
`
