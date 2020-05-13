import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import Tag from "../components/tag.jsx";
import {switchLanguage, setTitle,clickOnTag} from "../actions/actions.js";
import { Modal, ModalBody, ModalHeader, ModalFooter } from '../components/modal.jsx';
import ImageViewer from '../components/imageViewer.jsx';


const mapStateToProps=function(state)
{
  return {
    posts:state.posts,
    tags:state.tags
  };
};

const mapDispatchToProps=function(dispatch)
{
  return ({
    //switchLanguage:function(){dispatch(switchLanguage());}
    setTitle:function(title){dispatch(setTitle(title));},
    clickOnTag:function(value){dispatch(clickOnTag(value));}
  });
};

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
      tags,
      clickOnTag
    } = this.props;
    let activeTags=[];
    let {
      showImage,
      currentImage,
      currentPost
    } = this.state;
    let tagEntries = Object.entries(tags).sort((a,b)=>a[0].localeCompare(b[0]));
    /*tagEntries.forEach(function([key, value])
    {
      if(value==true)
      {
        activeTags.push(key);
      }
    });*/
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
        <div style={{display:"flex",flexDirection:"column"}}>
        <div style={{width:"5px",height:""}}></div>
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
            return (<div key={postIndex} style={active?{}:{opacity:0.1,display:"none"}}>
                    <div className="h5" style={{marginTop:"10px"}}>{value.name}</div>
                    <hr/>
                    <div style={{display:"flex",flexDirection:"row",width:'100%',flexWrap:"wrap"}}>{
                      value.images.map(function(value,index)
                      {
                        return (
                        <div key={index+'_container'} className='postImgContainer'>
                        <div key={index+'_frame'} className='postImgFrame'>
                          <img 
                            key={index} 
                            className="postImg2" 
                            src={value.thumbnail} 
                            onClick={()=>{self.setState({currentPost:postIndex,currentImage:index,showImage:true})}}
                          ></img>
                        </div>
                        </div>
                          );
                      })
                    }</div>
                    <div style={{display:"flex",flexDirection:"row",flexShrink:0,flexWrap:"wrap"}}>
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