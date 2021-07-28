import { CSSObject } from '@emotion/react'
import { Link } from 'gatsby'
import './PostGridFlat.scss'

interface OwnProps {
  posts: any
}

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
export default function PostGridFlat({ posts }: OwnProps) {
  return (
    <div css={gridCSS}>
      {posts
        .filter((post) => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {
          return (
            <Link
              className={'post'}
              to={`${post.frontmatter.path}#content`}
              key={post.id}
            >
              <div className={'postHead'}>
                <span className="postTitle">{post.frontmatter.title}</span>
                <span className="postSubtitle">
                  {post.frontmatter.subtitle}{' '}
                </span>
              </div>
              <div
                className={'postPicture'}
                style={{
                  backgroundImage:
                    'url(' +
                    post.frontmatter.image.childImageSharp.fluid.src +
                    ')',
                }}
              ></div>
            </Link>
          )
        })}
    </div>
  )
}
