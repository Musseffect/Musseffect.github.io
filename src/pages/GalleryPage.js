import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter} from 'react-router';
import {Link} from 'react-router-dom';
import Tag from "../components/tag.jsx";
import {setTitle,clickOnTag} from "../actions/actions.js";
import ImageViewer from '../components/imageViewer.jsx';

const mapStateToProps=function(state)
{
  return {
    posts:state.posts.items,
    tagEntries:state.posts.tagEntries
  };
};

const mapDispatchToProps=function(dispatch)
{
  return ({
    setTitle:function(title){dispatch(setTitle(title));},
    clickOnTag:function(value){dispatch(clickOnTag(value));}
  });
};
//<div className="postGalleryName">{value.name}</div>
class GalleryPage extends Component {
  constructor(props)
  {
      super(props);
      this.state = {
        showImage:false,
        currentImage:0,
        currentPost:0
      };
  }
  componentDidMount()
  {
    this.props.setTitle("Musseffect");
  }
  render() {
    const {
      posts,
      tagEntries,
      clickOnTag
    } = this.props;
    let activeTags=[];
    let {
      showImage,
      currentImage,
      currentPost
    } = this.state;
    let self = this;
    let isValid = (currentPost>=0&&currentPost<posts.length);
    if(isValid)
      isValid=(currentImage>=0&&currentImage<posts[currentPost].images.length);
    showImage=showImage&&isValid;
    return (
      <div className='postsContainer pageContainer'>
        <div className='globalTagsContainer'>
            {
            tagEntries.map(function([key, value],index)
            {
                if(value==true)
                {
                  activeTags.push(key);
                }
                return (<Tag key={key} name={key} active={value} click={()=>clickOnTag(key)}/>);
            })
            }
        </div>
        <div className="galleryPosts">
        {
          posts.map(function(value,postIndex)
          {
            let active = false;
            let activeCount = 0;
            let tags = value.tags.map(function(value)
            {
              let tagActive = activeTags.includes(value);
              active|=tagActive;
              activeCount +=tagActive?1:0;
              activeTags.length==0?active=true:null;
              return {active:tagActive,name:value};
            });
            active = false;
            if(activeCount==activeTags.length)
              active = true;
            return (<div className={"galleryPost"+(active?" active":"")} key={postIndex}>
                    <Link key={postIndex +"link"} to={'/posts/'+postIndex} className="galleryPostName">{value.name}</Link>
                    <hr className="galleryLine"/>
                    <div className="postImages">{
                      value.images.map(function(value,index)
                      {
                        return (
                        <div key={index+'_container'} className='postImgContainer'>
                        <div key={index+'_frame'} className='postImgFrame'>
                          <img 
                            key={index} 
                            className="postImg" 
                            src={value.thumbnail} 
                            onClick={()=>{self.setState({currentPost:postIndex,currentImage:index,showImage:true})}}
                          ></img>
                        </div>
                        </div>
                          );
                      })
                    }</div>
                    <div className="galleryPostTags">
                      {
                        tags.map(function(value,index)
                        {
                          return (<Tag key={"tag"+index} name={value.name} active={value.active} click={()=>clickOnTag(value.name)}/>);
                        })
                      }
                    </div>

                </div>);
          })
        }
        </div>
        <ImageViewer 
        show={showImage} 
        originalHref= {posts[currentPost].images[currentImage].original}
        onClose={()=>this.setState({showImage:false})}
        onLeft={()=>this.setState({currentImage:(currentImage+posts[currentPost].images.length-1)%posts[currentPost].images.length})}
        onRight={()=>this.setState({currentImage:(currentImage+1)%posts[currentPost].images.length})}
        imageSrc={posts[currentPost].images[currentImage].full}
        />
        
      </div>
    )
  }
}
/*
<Modal show={this.state.showModal} containerStyle="modalImageViewerContainer" windowStyle="modalImageViewerWindow" backgroundStyle="modalImageViewerBackground">
          <div className="modalImageViewerCloseButton"
            onClick={()=>this.setState({showImage:false})}
          ></div>
          <ModalHeader headerStyle="modalImageViewerHeader">
          </ModalHeader>
          <ModalBody bodyStyle="modalImageViewerBody">                
            <div className="modalImageViewerButtons">
              <div 
                className="modalImageViewerLeftButton active"
                onClick={()=>this.setState({currentImage:(currentImage+images.length-1)%posts[currentPost].images.length})}
              ></div>
              <div 
                className="modalImageViewerRightButton active"
                onClick={()=>this.setState({currentImage:(currentImage+1)%posts[currentPost].images.length})}
              ></div>
            </div>
            <img className="postModalImg" src={posts[currentPost].images[currentImage].full}></img>
          </ModalBody>
          <ModalFooter footerStyle="modalImageViewerFooter">
            <a className="modalImageViewerOpenOriginal" target="_blank" href={posts[currentPost].images[currentImage].original}>Open original</a>
          </ModalFooter>
        </Modal>
*/

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(GalleryPage));