import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import PostPreview from '../components/postPreview.jsx';
import Tag from "../components/tag.jsx";
import {setTitle,clickOnTag} from "../actions/actions.js";
import {tr} from "../localization.js";

const mapStateToProps=function(state)
{
  return {
    posts:state.posts.items,
    tagEntries:state.posts.tagEntries,
    lang:state.options.language
  };
};

const mapDispatchToProps=function(dispatch)
{
  return ({
    setTitle:function(title){dispatch(setTitle(title));},
    clickOnTag:function(value){dispatch(clickOnTag(value));}
  });
};

class PostsPage extends Component {
  constructor(props)
  {
      super(props);
  }
  componentDidMount()
  {
    this.props.setTitle(tr("menuProjects",this.props.lang));
  }
  render() {
    const {posts,clickOnTag,tagEntries} = this.props;
    let activeTags=[];
    return (
      <div className='postsContainer pageContainer'>
        <div className='globalTagsContainer'>
          {
            tagEntries.map(function([key, value],index)
            {
              if(value==true)
              {
                activeTags.push(key);
              }
              return (<Tag key={key} name={key} active={value} click={()=>clickOnTag(key)}/>);
            })
          }
        </div>
        <div className='posts'>
        {
          posts.map(function(value,index)
          {
            let active = false;
            let activeCount = 0;
            let tags = value.tags.map(function(value)
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
            return (<PostPreview key={index} name={value.name} link={index} thumbnail={value.thumbnail} tags={tags} active={active} clickOnTag={clickOnTag}/>);
          })
        }
        </div>
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(PostsPage));