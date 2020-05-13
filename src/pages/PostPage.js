import React, { Component } from 'react';
import { connect } from "react-redux";
import Tag from "../components/tag.jsx";
import { withRouter,Redirect} from 'react-router';
import ReactMarkdown from "react-markdown";
import {switchLanguage, setTitle} from "../actions/actions.js";
import ImageViewer from '../components/imageViewer.jsx';
const mapStateToProps=function(state,ownProps)
{
  const { id } = ownProps.match.params;
  return {post:state.posts[id]};
};

const mapDispatchToProps=function(dispatch)
{
  return ({
    //switchLanguage:function(){dispatch(switchLanguage());},
    setTitle:function(title){dispatch(setTitle(title));}
  });
};


class PostPage extends Component {
  constructor(props)
  {
      super(props);
      this.state = {
        showImage:false,
        currentImage:0
      }
  }
  componentDidMount()
  {
    if(this.props.post!==undefined)
      this.props.setTitle(this.props.post.name);
  }
  render() {
    const {
      post
    } = this.props;
    if(post == undefined)
    {
      return <Redirect to='/' />
    }
    const {
      name,
      description,
      tags,
      images,
      mainImg
    } = post;
    let {
      showImage,
      currentImage
    } = this.state;
    let self = this;
    let isValid = (currentImage>=0&&currentImage<images.length);
    showImage=showImage&&isValid;
    return (
      <div className='postContainer pageContainer'>
        <div className='postContent'>
          <img className="postMainImg" src={mainImg}/>
          <div className="postName h5">
            {name}
          </div>
          <div className="postTags">
            {
              tags.map(function(value,index)
              {
                return (<Tag key={index} name={value} active={true}/>);
              })
            }
          </div>
          <ReactMarkdown source = {description} className = {'postDescription'}/>
          <div className="postImages2">
            {
              images.map(function(value,index)
              {
                return (
                <div key={index+'_container'} className='postImgContainer'>
                <div key={index+'_frame'} className='postImgFrame'>
                  <img 
                    key={index} 
                    className="postImg2" 
                    src={value.thumbnail} 
                    onClick={()=>{self.setState({currentImage:index,showImage:true})}}
                  ></img>
                </div>
                </div>
                  );
              })
            }
          </div>
        </div>
        <ImageViewer 
        show={showImage} 
        originalHref= {images[currentImage].original}
        onClose={()=>this.setState({showImage:false})}
        onLeft={()=>this.setState({currentImage:(currentImage+images.length-1)%images.length})}
        onRight={()=>this.setState({currentImage:(currentImage+1)%images.length})}
        imageSrc={images[currentImage].full}
        />
      </div>
    )
  }
}
/*

        <div className="modalImageViewerContainer"  style={this.state.showImage?{}:{display:'none'}}>
          <div className="modalImageViewerBackground"></div>
          <div className="modalImageViewerCloseButton"
            onClick={()=>this.setState({showImage:false})}
          ></div>
          <div className="modalImageViewerWindow">
              <div className="modalImageViewerHeader">
              </div>
              <div className="modalImageViewerBody">
                <div className="modalImageViewerButtons">
                <div 
                  className="modalImageViewerLeftButton active"
                  onClick={()=>this.setState({currentImage:(currentImage+images.length-1)%images.length})}
                ></div>
                <div 
                  className="modalImageViewerRightButton active"
                  onClick={()=>this.setState({currentImage:(currentImage+1)%images.length})}
                ></div>
                </div>
                <img className="postModalImg" src={images[currentImage].full}></img>
              </div>
            <div className="modalImageViewerFooter">
              <a className="modalImageViewerOpenOriginal" target="_blank" href={images[this.state.currentImage].original}>Open original</a>
            </div>
          </div>
        </div>
*/

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(PostPage));