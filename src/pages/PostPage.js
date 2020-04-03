import React, { Component } from 'react';
import { connect } from "react-redux";
import Tag from "../components/tag.jsx";
import { withRouter } from 'react-router';
import ReactMarkdown from "react-markdown";

const mapStateToProps=function(state,ownProps)
{
  const { id } = ownProps.match.params;
  return state.posts[id];
};

const mapDispatchToProps=function(dispatch)
{
  return ({
    //switchLanguage:function(){dispatch(switchLanguage());}
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
  render() {
    let {
      name,
      description,
      tags,
      images,
      mainImg
    } = this.props;
    let {
      showImage,
      currentImage
    } = this.state;
    let self = this;
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
        <div className="modalImageViewerContainer"  style={this.state.showImage?{}:{display:'none'}}>
          <div className="modalImageViewerBackground"></div>
          <div className="modalImageViewerCloseButton"
            onClick={()=>this.setState({showImage:false})}
          ></div>
          <div className="modalImageViewerWindow ">
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
      </div>
    )
  }
}

PostPage.defaultProps={
  name:'Name',
  description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
   Donec interdum eget tellus eu sagittis. Mauris sagittis erat a risus gravida convallis. 
   Sed fringilla varius neque, vel porta lorem porttitor in. Fusce placerat libero sapien, ut efficitur augue iaculis in. 
   Donec mollis varius ornare. Morbi a tortor tempus, malesuada nisl sed, elementum neque. Pellentesque nec pulvinar tortor. 
   Praesent ut dapibus purus, et luctus nisi. Aliquam pharetra sed magna at lobortis. 
   Duis vitae nisl dignissim dolor facilisis finibus. Suspendisse aliquam, ante et tincidunt pellentesque, lectus ipsum lacinia nibh, at vestibulum libero sapien sit amet leo. Donec eget quam non elit pulvinar elementum eget sed purus.
   Duis interdum neque non est interdum scelerisque. Proin at ligula eu tortor finibus luctus ac malesuada eros. Sed lobortis risus ac pellentesque iaculis. Quisque convallis accumsan erat vel facilisis. 
   Suspendisse vel justo sit amet tellus suscipit vestibulum porta non massa. Suspendisse sit amet eros quis diam tincidunt malesuada ut eu lectus. Sed elementum mauris ac varius tincidunt. Curabitur efficitur sapien et est faucibus, et auctor eros ornare.
   Phasellus faucibus lorem sit amet lacinia accumsan. Aliquam ac dignissim nulla. Ut nibh elit, pulvinar vel odio et, volutpat pretium velit. Proin et leo tempus, tristique lectus nec, ultrices felis. Maecenas scelerisque tortor nec dui porttitor porta non et mauris.
   Phasellus tempus tincidunt dui sit amet egestas. Cras mattis congue elit, sed sagittis lectus egestas nec.`,
  tags:['huj','pizda','jigurda'],
  images:[],
  mainImg:''
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(PostPage));