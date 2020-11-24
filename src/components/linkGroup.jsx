import React, { Component } from 'react';
import Link from './link.jsx';


class LinkGroup extends Component {
  constructor(props){
      super(props);
      this.click=props.click;
      this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e){
    if(this.props.click)
      this.props.click(this.props.name);
  }
  render() {
    const {activeTags,clickOnTag,searchText,items,name,andFilter} = this.props;

    let activeLinks = false;
    let links = items.map(function(link,index){
      let active = false;
      let tags;
      if(andFilter){
        let activeCount = 0;
        tags = link.tags.map(function(value){
          let tagActive = activeTags.includes(value);
          active|=tagActive;
          activeCount +=tagActive?1:0;
          activeTags.length==0?active=true:null;
          return {active:tagActive,name:value};
        });
        active = false;
        if(activeCount==activeTags.length)
          active = true;
      }else{
        tags = link.tags.map(function(value){
          let tagActive = activeTags.includes(value);
          active|=tagActive;
          activeTags.length==0?active=true:null;
          return {active:tagActive,name:value};
        });
      }
      if(searchText.length!=0){
        active &= link.name.includes(searchText);
      }
      activeLinks |= active; 
      return (<Link key={index} active={active} name={link.name} href={link.href} tags={tags} clickOnTag={clickOnTag}></Link>);
    }); 
    return (<div className = {"linkGroup"+(activeLinks?" active":"")}>
      <div className = "linkGroupName">
        {name}
      </div>
      <div className = "linkGroupItems">
        {links}
      </div>
     </div>);
  }
}

export default LinkGroup;