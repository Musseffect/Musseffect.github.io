import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import { setTitle, clickOnLinkTag} from "../actions/actions.js";
import {tr} from "../localization.js";
import Link from "../components/link.jsx";

const mapStateToProps=function(state)
{
  return {
    groups:state.links.groups,
    tagEntries:state.links.tagEntries,
    lang:state.options.language
  };
};

const mapDispatchToProps=function(dispatch)
{
  return ({
    clickOnTag:function(tag){dispatch(clickOnLinkTag(tag));},
    setTitle:function(title){dispatch(setTitle(title));}
  });
};

class LinksPage extends Component {
  constructor(props)
  {
      super(props);
      this.state = {andFilter:true,searchText:""};
  }
  componentDidMount()
  {
    this.props.setTitle(tr("menuLinks",this.props.lang));
  }
  render() {
    let {groups,clickOnTag,tagEntries,lang} = this.props;
    let {andFilter,searchText} = this.state;
    let activeTags = [];
    return (
      <div className='linksContainer pageContainer'>
        <div className="linkSearch">
            <i className="searchIcon fa fa-search fa-lg"></i>
            <input type="text" className="searchInput" placeholder={tr("searchPrompt",lang)} value={searchText} onChange={(e)=>this.setState({searchText:e.target.value})}/>
        </div>
        <div className="linksFilter" onClick={()=>this.setState({andFilter:!andFilter})}>
          {`${tr("filter",lang)}: ${andFilter?"&&":"||"}`} 
        </div>
        <div className='linksTagContainer'>
          {
            tagEntries.map(function([key, value],index)
            {
              if(value==true)
              {
                activeTags.push(key);
              }
              return (<div key={key} className={"linkTag"+(value?" active":"")} onClick={()=>clickOnTag(key)}>
                  {key}
              </div>);
            })
          }
        </div>
        <div className='linksList'>
          {
            groups.map(function(group,index)
            {
              let activeLinks = false;
              let links = group.items.map(function(link,index)
              {
                let active = false;
                let tags;
                if(andFilter)
                {
                  let activeCount = 0;
                  tags = link.tags.map(function(value)
                  {
                    let tagActive = activeTags.includes(value);
                    active|=tagActive;
                    activeCount +=tagActive?1:0;
                    activeTags.length==0?active=true:null;
                    return {active:tagActive,name:value};
                  });
                  active = false;
                  if(activeCount==activeTags.length)
                    active = true;
                }else
                {
                  tags = link.tags.map(function(value)
                  {
                    let tagActive = activeTags.includes(value);
                    active|=tagActive;
                    activeTags.length==0?active=true:null;
                    return {active:tagActive,name:value};
                  });
                }
                if(searchText.length!=0)
                {
                  active &= link.name.includes(searchText);
                }
                activeLinks |= active; 
                return (<Link key={index} active={active} name={link.name} href={link.href} tags={tags} clickOnTag={clickOnTag}></Link>);
                /*return (
                  <div key={index} className={"linkItem"+(active?'':' disabled')}>
                    <a target="_blank" className="linkName">{link.name}</a>
                    <div className="linkFull">
                      <a target="_blank" className="linkFullHref" href={link.href}>{link.href}</a>
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
                    </div>
                  </div>);*/
              }); 
              return (<div className = {"linkGroup"+(activeLinks?" active":"")} key={index}>
                <div className = "linkGroupName">
                  {group.name}
                </div>
                <div className = "linkGroupItems">
                  {links}
                </div>
               </div>);
            })
          }
          </div>
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(LinksPage));