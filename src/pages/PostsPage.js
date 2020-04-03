import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import PostPreview from '../components/postPreview.jsx';
import Tag from "../components/tag.jsx";
import {switchLanguage, setTitle,clickOnTag} from "../actions/actions.js";


const mapStateToProps=function(state)
{
  return {
    posts:state.posts,
    tags:state.tags
  };
};

const mapDispatchToProps=function(dispatch)
{
  return ({
    //switchLanguage:function(){dispatch(switchLanguage());}
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
    this.props.setTitle("Posts");
  }
  render() {
    let {posts,tags,clickOnTag} = this.props;
    let activeTags=[];
    Object.entries(tags).forEach(function([key, value])
    {
      if(value==true)
      {
        activeTags.push(key);
      }
    })
    return (
      <div className='postsContainer pageContainer'>
        <div className='globalTagsContainer'>
          {
            Object.entries(tags).map(function([key, value],index)
            {
              return (<Tag key={key} name={key} active={value} click={()=>clickOnTag(key)}/>);
            })
          }
        </div>
        <div className='posts'>
        {
          posts.map(function(value,index)
          {
            let active = false;
            let tags = value.tags.map(function(value)
            {
              let tagActive = activeTags.includes(value);
              active|=tagActive;
              return {active:tagActive,name:value};
            });
            return (<PostPreview key={index} name={value.name} link={index} thumbnail={value.thumbnail} tags={tags} active={active} clickOnTag={clickOnTag}/>);
          })
        }
        </div>
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(PostsPage));