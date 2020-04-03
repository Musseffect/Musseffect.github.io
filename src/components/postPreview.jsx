import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';
import Tag from "./tag.jsx";

class PostPreview extends Component {
  constructor(props)
  {
      super(props);
  }
  render() {
    let {name,tags,link,thumbnail,active,clickOnTag} = this.props;
    return (
      <div className={'postPreviewContainer'+(active?'':' disabled')}>
        <div className='postThumbnail'>
          <img className='postThumbnailImage' src={thumbnail}/>
        </div>
        <NavLink key="link_1" exact to={'/posts/'+link} className="postHeaderLink h6">{name}</NavLink>
        <div className='postPreviewTags'>
            {
            tags.map(function(value,index)
            {
              return (<Tag key={index} name={value.name} active={value.active} click={()=>clickOnTag(value.name)}/>);
            })
            }
        </div>
      </div>
    )
  }
}

export default PostPreview;