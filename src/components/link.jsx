import React, { Component } from 'react';
import { withRouter } from 'react-router';


class Link extends Component {
  constructor(props)
  {
      super(props);
  }
  render() {
    let {active,name,href,tags,clickOnTag} = this.props;

    return (<div className={'linkItem'+(active?'':' disabled')}>
          <a target="_blank" className="linkName" href={href}>{name}</a>
          <div className='linkTags'>
              {
              tags.map(function(value,index)
              {
                  return (<div key={index} className={"linkTag"+(value.active?" active":"")}  onClick={()=>clickOnTag(value.name)}>
                      {value.name}
                  </div>);
              })
              }
          </div>
      </div>);
  }
}

export default Link;