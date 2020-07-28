import React, { Component } from 'react';
import { withRouter } from 'react-router';


class Link extends Component {
  constructor(props)
  {
      super(props);
      this.state = {hover:false};
      this.click=props.click;
  }
  render() {
    let {active,name,href,tags,clickOnTag} = this.props;
    let {hover} = this.state;
    return (
      <div onMouseLeave={()=>{this.setState({hover:false})}} 
      onMouseEnter={()=>{this.setState({hover:true})}} 
      className={'linkItem'+(active?'':' disabled')}>
        <a target="_blank" className="linkName">{name}</a>
        {hover&&(<div className="linkFull">
            <a target="_blank" className="linkNameFull">{name}</a>
            <a target="_blank" className="linkHref" href={href}>{href}</a>
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
        </div>)}
      </div>
    )
  }
}

export default Link;