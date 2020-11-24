import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import { setTitle, setDescription, clickOnTag} from "../actions/actions.js";
import {tr} from "../localization.js";
import Link from "../components/link.jsx";
import LinkTag from '../components/linkTag.jsx';
import LinkGroup from '../components/linkGroup.jsx';

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
    clickOnTag:function(tag){dispatch(clickOnTag('links', tag));}
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
    setTitle(tr("links-menu",this.props.lang));
    setDescription(tr("links-description",this.props.lang));
  }
  render() {
    let {groups,clickOnTag,tagEntries,lang} = this.props;
    let {andFilter,searchText} = this.state;
    let activeTags = [];
    return (
      <div className='linksContainer pageContainer'>
        <div className="linkSearch">
            <i className="searchIcon fa fa-search fa-lg"></i>
            <input type="text" className="searchInput" placeholder={tr("search-prompt",lang)} value={searchText} onChange={(e)=>this.setState({searchText:e.target.value})}/>
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
              return <LinkTag key={key} name={key} click={clickOnTag}/>;
            })
          }
        </div>
        <div className='linksList'>
          {groups.map(function(group,index){
            return <LinkGroup searchText={searchText} clickOnTag={clickOnTag} activeTags={activeTags} andFilter={andFilter} key={index} {...group}/>
          })}
        </div>
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(LinksPage));