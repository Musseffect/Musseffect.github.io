import React, { Component } from 'react';
import { connect } from "react-redux";
import { NavLink, Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import {switchLanguage,setTitle} from "../actions/actions.js";


const mapStateToProps=function(state)
{
  return {
    links:state.links
  };
};

const mapDispatchToProps=function(dispatch)
{
  return ({
    //switchLanguage:function(){dispatch(switchLanguage());}
  });
};

class LinksPage extends Component {
  constructor(props)
  {
      super(props);
  }
  render() {
    let {links} = this.props;
    let elements=[];
    links.forEach(function(item,index)
    {
      let childs = item.links.map(function(value,childIndex)
      {
        return (
          <div key = {childIndex} className = "linkContainer">
            <a className='linkItem' href={value.link}>{value.link}</a>
            {value.description!=undefined&&
              <div className='linkDescription'>
              {" - "+ value.description}
              </div>}
          </div>)
      });
      elements.push(
        <div key={index} className = "linksGroup">
          <div key={index} className = "linksHeader">{item.groupName}</div>
          <div className='linksList'>
            {childs}
          </div>
        </div>);

    });
    /*for(var i=0;i<links.length;i++)
    {
      let linkItem=links[i];
      elements.push(<div key={i} className='linkContainer'>
        <a className='linkItem' href={linkItem.link}>{linkItem.link}</a>
        {linkItem.description!=undefined&&<div className='linkDescription'>
          {" - "+ linkItem.description}
          </div>}
        </div>);
    }*/
    /*
        <div className = 'linksGroup'>
          <div className='linksHeader'>Ray tracing</div>
          <ul className='linksList'>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
            <li>item 4</li>
          </ul>
        </div> */
    return (
      <div className='linksContainer pageContainer'>
        {elements}
      </div>
    )
  }
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(LinksPage));