import React, { Component } from 'react';
import { connect } from "react-redux";
import Tag from "../components/tag.jsx";
import { withRouter,Redirect} from 'react-router';
import ReactMarkdown from "react-markdown";
import {setDescription, setTitle} from "../actions/actions.js";
import ImageViewer from '../components/imageViewer.jsx';
const mapStateToProps=function(state,ownProps)
{
  const { link } = ownProps.match.params;
  let id = state.posts.dictionary[link];
  return {post:state.posts.items[id],lang:ownProps.lang};
};

const mapDispatchToProps=function(dispatch)
{
  return ({
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
    {
      setTitle(this.props.post.name);
      setDescription(this.props.post.metaDescription[this.props.lang]);
    }
  }
  render() {
    const {
      post,
      lang
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
          <div className="postName">
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
          <ReactMarkdown source = {description[lang]} className = 'postDescription'/>
          <div className="postImages">
            {
              images.map(function(value,index)
              {
                return (
                <div key={index+'_container'} className='postImgContainer'>
                <div key={index+'_frame'} className='postImgFrame'>
                  <img 
                    key={index} 
                    className="postImg" 
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

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(PostPage));