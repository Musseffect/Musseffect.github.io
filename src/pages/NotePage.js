import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter,Redirect} from 'react-router';
import MarkdownRender from "../components/markdownRender.jsx";
import {setTitle, fetchNoteIfNeeded} from "../actions/actions.js";
import { dateToString } from '../utils.js';
import {tr} from "../localization.js";

const mapStateToProps=function(state,ownProps)
{
  const linkName = ownProps.match.params.id;
  const {index,lang} = state.notesDictionary[linkName];
  return {
    note:state.notes[lang][index],
    content:state.note.content,
    isFetching:state.note.isFetching,
    err:state.note.err,
    lang:state.options.language
  };
};

const mapDispatchToProps=function(dispatch)
{
  return ({
    fetchNoteIfNeeded:function(file){dispatch(fetchNoteIfNeeded(file));},
    setTitle:function(title){dispatch(setTitle(title));}
  });
};

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
      isFetching,
      lang
    } = this.props;
    if(note == undefined)
    {
      return <Redirect to='/' />
    }
    let {date,name} = note;
    return (
      <div className='noteContainer pageContainer'>
        {err!=null?(<div>{tr("noteLoadingError",lang)})</div>):isFetching?(
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
          <MarkdownRender source = {content} escapeHtml={true} className = {'noteContent'}/></div>)
        }
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(NotePage));