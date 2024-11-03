import { Link } from 'gatsby'
import { BgImage } from 'gbimage-bridge'
import { getImage } from 'gatsby-plugin-image'
import {
  postCSS,
  postHeadCSS,
  postPictureCSS,
  postSubtitleCSS,
  postTitleCSS,
  gridCSS,
} from './styles'
import { Typography, useTheme } from '@mui/material'
import { makeAccentColor } from '../accentColorCreator'

interface OwnProps {
  posts: any
}
export default function PostGridFlat({ posts }: OwnProps) {
  const theme = useTheme()

  return (
    <div css={gridCSS(theme)}>
      {posts
        .filter((post) => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {
          const image = post.frontmatter.image.childImageSharp
          const gatsbyImage = getImage(image)
          const customColor = post.frontmatter.image.colors !== void 0
          return (
            <Link
              css={{
                ...postCSS(
                  theme,
                  customColor
                    ? post.frontmatter.color ? post.frontmatter.color : makeAccentColor(post.frontmatter.image.colors.vibrant)
                    : theme.palette.primary.main
                ),
              }}
              to={`${post.frontmatter.path}#content`}
              key={post.id}
            >
              <div css={postHeadCSS}>
                <Typography style={postTitleCSS}>{post.frontmatter.title}</Typography>
                <Typography style={postSubtitleCSS}>{post.frontmatter.subtitle}</Typography>
              </div>
              <BgImage image={gatsbyImage} css={postPictureCSS} />
            </Link>
          )
        })}
    </div>
  )
}
