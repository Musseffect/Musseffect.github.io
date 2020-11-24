import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import Tag from "./tag.jsx";

class PostPreview extends Component {
  constructor(props)
  {
      super(props);
  }
  render() {
    const {name, tags, lang, link, thumbnail, active, clickOnTag} = this.props;
    return (
      <div className={"postPreviewContainer"+(active?"":" disabled")}>
        <div className='postThumbnail'>
        <Link key="link_1" to={`/${lang}/posts/${link}`} className="postThumbnailLink">
          <img className="postThumbnailImage" src={thumbnail}/>
        </Link>
        </div>
        <Link key="link_1" to={`/${lang}/posts/${link}`} className="postHeaderLink">{name}</Link>
        <div className="postPreviewTags">
          {tags.map(function(value,index){
              return (<Tag key={index} name={value.name} active={value.active} click={clickOnTag}/>);
            })}
        </div>
      </div>
    )
  }
}

export default PostPreview;