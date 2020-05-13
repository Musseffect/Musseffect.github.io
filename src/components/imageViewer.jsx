import React, { Component } from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter } from '../components/modal.jsx';

class ImageViewer extends Component {
    constructor(props)
    {
        super(props);
    }
    render()
    {
        let {show,imageSrc,originalHref,onLeft,onRight,onClose} = this.props;
        return <Modal show={show} containerStyle="modalImageViewerContainer" windowStyle="modalImageViewerWindow" backgroundStyle="modalImageViewerBackground">
          <ModalHeader headerStyle="modalImageViewerHeader">
              <div className="modalImageViewerCloseButton" style={{justifySelf:"flex-end"}}
            onClick={onClose}
          ></div>
          </ModalHeader>
          <ModalBody bodyStyle="modalImageViewerBody">                
            <div className="modalImageViewerButtons">
              <div 
                className="modalImageViewerLeftButton active"
                onClick={onLeft}
              ></div>
              <div 
                className="modalImageViewerRightButton active"
                onClick={onRight}
              ></div>
            </div>
            <img className="postModalImg" src={imageSrc}></img>
          </ModalBody>
          <ModalFooter footerStyle="modalImageViewerFooter">
            <a className="modalImageViewerOpenOriginal" target="_blank" href={originalHref}>Open original</a>
          </ModalFooter>
        </Modal>;
    }
}


export default ImageViewer;





