import React from 'react'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

interface OverrideDefaults {
  title?: string
  description?: string
  image?: string
  pathname?: string
  article?: boolean
  author?: string
  langCode: string
  useRobotoFont?: boolean
  useBeVietnamFont?: boolean
}
const SEO = ({
  title,
  description,
  image,
  pathname,
  author,
  article,
  langCode,
  useRobotoFont = false,
  useBeVietnamFont = true,
}: OverrideDefaults) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: {
          defaultTitle,
          titleTemplate,
          defaultDescription,
          siteUrl,
          defaultImage,
          defaultAuthor,
          siteName,
          favicon,
        },
      },
    }) => {
      // console.log(
      //   'got global',
      //   defaultTitle,
      //   titleTemplate,
      //   defaultDescription,
      //   siteUrl,
      //   defaultImage,
      //   defaultAuthor,
      //   siteName,
      //   favicon
      // )
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        url: `${siteUrl}${pathname || '/'}`,
        author: author || defaultAuthor,
        siteName: siteName || title || defaultTitle,
        favicon: favicon || '',
      }
      // console.log('final seo', seo)

      return (
        <>
          <Helmet
            title={seo.title}
            titleTemplate={titleTemplate}
            link={[
              {
                rel: 'shortcut icon',
                type: 'image/png',
                href: `${seo.favicon}`,
              },
            ]}
          >
            {seo.title && <title>{seo.title}</title>}
            <meta name="robots" content="all" />
            <meta
              name="viewport"
              content="user-scalable=yes, width=device-width"
            />
            {seo.keywords && <meta name="keywords" content={seo.keywords} />}
            {seo.description && (
              <meta name="description" content={seo.description} />
            )}
            {seo.url && <meta property="og:url" content={seo.url} />}
            <meta
              property="og:type"
              content={article ? 'article' : 'website'}
            />
            {(article && seo.author ? true : null) && (
              <meta property="og:article:author" content={seo.author} />
            )}
            {seo.title && <meta property="og:title" content={seo.title} />}
            {seo.description && (
              <meta property="og:description" content={seo.description} />
            )}
            {seo.image && <meta property="og:image" content={seo.image} />}
            {seo.image && (
              <meta property="og:image:secure_url" content={seo.image} />
            )}
            {seo.image && (
              <meta property="og:image:type" content="image/jpeg" />
            )}
            {seo.title && (
              <meta property="og:site_name" content={seo.siteName} />
            )}

            <meta http-equiv="cache-control" content="Private" />
            <meta http-equiv="Expires" content="0" />

            {useRobotoFont ?? (
              <>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                  rel="preconnect"
                  href="https://fonts.gstatic.com"
                  crossOrigin
                />
                <link
                  href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
                  rel="stylesheet"
                />
              </>
            )}

            {useBeVietnamFont ?? ( <>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
<link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:wght@400;700&display=swap" rel="stylesheet"/>
            </>)}
            {/* <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Ubuntu"
            />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossOrigin
            />
            <link
              href={
                'https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap'
              }
              rel="stylesheet"
            /> */}

            <html lang={langCode} />
          </Helmet>
        </>
      )
    }}
  />
)

export default SEO

const query = graphql`
  query BitMetaTags {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        defaultAuthor: author
        siteName: siteName
        favicon: favicon
      }
    }
  }
`
