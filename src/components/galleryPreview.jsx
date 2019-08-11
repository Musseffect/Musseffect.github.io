import React, { Component } from 'react';



class GalleryPreview extends Component {
  constructor(props)
  {
      super(props);
  }
  render() {
    let {src} = this.props;
    return (
      <div className='galleryPreviewContainer'>
        <img src={src} className="galleryPreviewImg"/>
      </div>
    )
  }
}

export default GalleryPreview;