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
import { useTheme } from '@mui/material'

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
          return (
            <Link
              css={{
                ...postCSS(theme, theme.palette.primary.main),
              }}
              to={`${post.frontmatter.path}#content`}
              key={post.id}
            >
              <BgImage
                  image={gatsbyImage}
                  css={{ width: '100%', height: '100%', display: 'flex',  alignItems: 'flex-end', justifyContent: 'stretch'}}
                >

              <div css={postHeadCSS}>
                <span css={postTitleCSS}>{post.frontmatter.title}</span>
                <br/>
                <span css={postSubtitleCSS}>{post.frontmatter.subtitle} </span>
              </div>
                </BgImage>
              
              <div css={postPictureCSS}>
                
              </div>
            </Link>
          )
        })}
    </div>
  )
}
