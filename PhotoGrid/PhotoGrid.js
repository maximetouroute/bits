import React from 'react'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css' // This only needs to be imported once in your app
import PropTypes from 'prop-types'
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import './PhotoGrid.scss'


// import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from 'gatsby-background-image';
import { BgImage } from 'gbimage-bridge';
// DIRTY test for custom component.
/*

The problem here :

We want to fetch the res from the markdown folder but graphql queries runned here cannot take any variable and doesnt have access to gatsby context
The only way I found to keep a clean syntax is to insert img tags directly in the markdown, they will be transformed by gatsby image (so responsive stuff and all)
and then those urls can be used (props.href)
 */

function styleBackgroundPhoto(src) {
  return {
    backgroundImage: 'url(' + src + ')',
  }
}

const photoGridProptypes = { gatsbyImages: PropTypes.array.isRequired }
export class PhotoGrid extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      photoIndex: 0,
      isOpen: false,
    }
  }

  generatePicture(picture, index, margin) {
    const gatsbyImg = getImage(picture.thumb);
    // const bgImage = convertToBgImage(gatsbyImg)
    let className = margin ? `photoThumbnail marginRight` : `photoThumbnail`
    return (
<BgImage
      key={index}
      image={gatsbyImg}
      className={className}
      onClick={() => this.setState({ isOpen: true, photoIndex: index })}
    />
    )
  }

  //numberPerRow is a WIP, needs changes in sass too
  generateGrid(pictures, numberPerRow = 3) {
    let photoGrid = []
    for (let i = 0; i < pictures.length; i += numberPerRow) {
      let photoRow = []

      for (
        let columnIndex = 0;
        columnIndex < numberPerRow && i + columnIndex < pictures.length;
        columnIndex++
      ) {
        // handle margin right
        if (columnIndex < numberPerRow) {
          photoRow.push(
            this.generatePicture(
              pictures[i + columnIndex],
              i + columnIndex,
              true
            )
          )
        } else {
          photoRow.push(
            this.generatePicture(
              pictures[i + columnIndex],
              i + columnIndex,
              false
            )
          )
        }
      }
      photoGrid.push(
        <div key={i} className="photoRowContainer">
          {photoRow}
        </div>
      )
      photoRow = []
    }
    return photoGrid
  }

  render() {
    const { isOpen, photoIndex } = this.state;
    const images = this.props.gatsbyImages;
    console.log(this.props);

    const prevIndex = (photoIndex + images.length - 1) % images.length;
    const nextIndex  = (photoIndex + 1) % images.length;
    const mainSrc = images[photoIndex]?.full?.images?.fallback?.src;
    const nextSrc = images[nextIndex]?.full?.images?.fallback?.src;
    const prevSrc = images[prevIndex]?.full?.images?.fallback?.src;

    console.log(images)
    return (
      <div className="componentPhotoGrid">
        {isOpen && (
          <Lightbox
          mainSrc={mainSrc || ''}
          nextSrc={nextSrc || ''}
          prevSrc={prevSrc || ''}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: nextIndex,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: nextIndex,
              })
            }
          />
        )}

        <div className="photoGrid">
          {this.generateGrid(this.props.gatsbyImages)}
        </div>
      </div>
    )
  }
}

PhotoGrid.propTypes = photoGridProptypes

function PhotoGridGatsbyMethod({ children }) {
  // console.log(children);
  const photos = children.filter((child) => typeof child !== 'string');
  console.log(photos);
  // [0].props.children[1].props.href
  const srcs = photos.map((photo) => photo.props.children[1].props.href) // Cleary a bad workaround to fetch gatsby image url.. but it works.
  return <PhotoGrid gatsbyImages={srcs} />
}

PhotoGridGatsbyMethod.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PhotoGridGatsbyMethod
