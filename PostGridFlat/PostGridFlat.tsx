import { CSSObject } from '@emotion/react'
import { Link } from 'gatsby'
import { BgImage } from 'gbimage-bridge'
import { getImage } from 'gatsby-plugin-image'
import {
  postCSS,
  postHeadCSS,
  postPictureCSS,
  postSubtitleCSS,
  postTitleCSS,
} from './styles'

const gridCSS: CSSObject = {
  margin: 'auto',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  flexWrap: 'wrap',
  maxWidth: '90rem',
  // height: 30em;
  width: '100%',

  padding: 0,
}

const customTextColorOnHover = (color: string): CSSObject => {
  return {
    '&:hover': {
      color: `${color} !important`,
    },
  }
}

interface OwnProps {
  posts: any
}
export default function PostGridFlat({ posts }: OwnProps) {
  return (
    <div css={gridCSS}>
      {posts
        .filter((post) => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {
          const image = post.frontmatter.image.childImageSharp
          const gatsbyImage = getImage(image)
          const customColor = post.frontmatter.image.colors !== void 0
          const customcolorCSS: CSSObject = customColor
            ? customTextColorOnHover(post.frontmatter.image.colors.vibrant)
            : {}
          return (
            <Link
              css={{ ...postCSS, ...customcolorCSS }}
              to={`${post.frontmatter.path}#content`}
              key={post.id}
            >
              <div css={postHeadCSS}>
                <span css={postTitleCSS}>{post.frontmatter.title}</span>
                <span css={postSubtitleCSS}>{post.frontmatter.subtitle} </span>
              </div>
              <BgImage image={gatsbyImage} css={postPictureCSS} />
            </Link>
          )
        })}
    </div>
  )
}
