import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { graphql } from 'gatsby'
import LayoutRoot from '../LayoutRoot/LayoutRoot'
import 'moment'
import SEO from '../../SEO/SEO'
import { SHORTCODES } from '../../mdx-components/shortcodes'
import { articleCSS, cardCSS } from '../articleStyles'
import { Container } from '@mui/material'

export default function Template({
  data: { mdx },
  children,
  location,
  pageContext: { langCode },
}) {
  return (
    <LayoutRoot language={mdx.frontmatter.language} location={{ ...location }}>
      <SEO
        title={mdx.frontmatter.title}
        description={
          mdx.frontmatter.description || mdx.frontmatter.subtitle || null
        }
        pathname={mdx.frontmatter.path}
        article={true}
        langCode={langCode}
      />
      <div css={cardCSS}>
      <Container maxWidth="md">
        <article id="content">
          <div css={articleCSS} itemProp="articleBody">
            <MDXProvider components={SHORTCODES}>{children}</MDXProvider>
          </div>
        </article>
        </Container>
      </div>
    </LayoutRoot>
  )
}

export const pageQuery = graphql`
  query MdxPageByPath($markdownPath: String, $langCode: String!) {
    mdx(
      frontmatter: { path: { eq: $markdownPath }, language: { eq: $langCode } }
    ) {
      frontmatter {
        path
        title
        language
        description
        embeddedImagesLocal {
          ...modernGatImage
        }
      }
    }
  }
`
