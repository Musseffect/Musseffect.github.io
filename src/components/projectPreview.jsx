import React, { Component } from 'react';
import { copyToClipBoard } from '../utils.js';
import Tag from './tag.jsx';


class ProjectPreview extends Component {
  constructor(props)
  {
      super(props);
      this.click=props.click;
  }
  render() {
    const {active,tags, name, thumbnail, description, clickOnTag, lang, link, images} = this.props;
    return (
      <div className={"projectPreview mb-4" + (active?"":" disabled") }>
        <div className="projectInfo">
            <img className="projectPreviewImage" src={thumbnail}/>
            <div  className="projectRightColumn mx-3">
                <div className="projectName">{name}</div>
                <div className="projectDescription">{description[lang]}</div>
                <div className="projectLink"><i className="fas fa-link clicable" onClick={()=>copyToClipBoard(link)}></i><a target="_blank" href={link}>{link}</a></div>  
                <div className="projectTags">
                {tags.map(function(value,index){
                    return (<Tag key={index} name={value.name} active={value.active} click={clickOnTag}/>);
                    })}
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default ProjectPreview;