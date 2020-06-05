import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter,Redirect} from 'react-router';
import MarkdownRender from "../components/markdownRender.jsx";
import {setTitle, fetchNoteIfNeeded} from "../actions/actions.js";
import CodeRenderer from "../components/codeRenderer.jsx";
import { dateToString } from '../utils.js';

const mapStateToProps=function(state,ownProps)
{
  const linkName = ownProps.match.params.id;
  const id = state.notesDictionary[linkName];
  return {
    note:state.notes[id],
    content:state.note.content,
    isFetching:state.note.isFetching,
    err:state.note.err
  };
};

const mapDispatchToProps=function(dispatch)
{
  return ({
    //switchLanguage:function(){dispatch(switchLanguage());},
    fetchNoteIfNeeded:function(file){dispatch(fetchNoteIfNeeded(file));},
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
    {
      this.props.setTitle(this.props.note.name);
      this.props.fetchNoteIfNeeded(this.props.note.file);
    }
  }
  render() {
    let {
      note,
      content,
      err,
      isFetching
    } = this.props;
    if(note == undefined)
    {
      return <Redirect to='/' />
    }
    let {date,name} = note;
    return (
      <div className='noteContainer pageContainer'>
        {err!=null?(<div>Couldn't load damn page</div>):isFetching?(
            <div className="loaderBackground">
                <div className="loader">
                  <div></div><div></div><div></div>
                </div>
            </div>
          ):(<div>
          <div className='noteHeader'>
          <div className="noteDate">
            {dateToString(date)}
            </div>
          <div className="noteName">{name}</div>
        </div>
        <MarkdownRender source = {content} escapeHtml={true} renderers={
          {
            image: imageRenderer,
            code: CodeRenderer
          }} className = {'noteContent'}/></div>)
        }
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(NotePage));