import React, { Component } from 'react';
import { connect } from "react-redux";
import Tag from "../components/tag.jsx";
import { withRouter,Redirect} from 'react-router';
import ReactMarkdown from "react-markdown";
import {switchLanguage, setTitle} from "../actions/actions.js";
import { dateToString } from '../utils.js';

const mapStateToProps=function(state,ownProps)
{
  const { id } = ownProps.match.params;
  return {note:state.notes[id]};
};

const mapDispatchToProps=function(dispatch)
{
  return ({
    //switchLanguage:function(){dispatch(switchLanguage());},
    setTitle:function(title){dispatch(setTitle(title));}
  });
};

function imageRenderer(props)
{
  return <img {...props} className="noteImage"/>
}

class NotePage extends Component {
  constructor(props)
  {
      super(props);
  }
  componentDidMount()
  {
    if(this.props.note!==undefined)
      this.props.setTitle(this.props.note.name);
  }
  render() {
    let {
      note
    } = this.props;
    if(note == undefined)
    {
      return <Redirect to='/' />
    }
    let {date,name,content} = note;
    return (
      <div className='noteContainer pageContainer'>
        <div className='noteHeader'>
          <div className="noteDate">
            {dateToString(date)}
            </div>
          <div className="noteName">{name}</div>
        </div>
        <ReactMarkdown source = {content} escapeHtml={true} renderers={{image: imageRenderer}} className = {'noteContent'}/>
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(NotePage));