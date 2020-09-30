import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter,Redirect} from 'react-router';
import NoteMarkdown from "../components/noteMarkdown.jsx";
import {setTitle, setDescription, fetchNoteIfNeeded} from "../actions/actions.js";
import { dateToString } from '../utils.js';
import {tr} from "../localization.js";
import ImageViewer from '../components/imageViewer.jsx';
import Loader from '../containers/loader.jsx';

const mapStateToProps=function(state,ownProps)
{
  const {link} = ownProps.match.params;
  const {lang} = ownProps;
  const {index} = state.notesDictionary[lang][link];
  return {
    note:state.notes[lang][index],
    content:state.note.content,
    isFetching:state.note.isFetching,
    err:state.note.err,
    lang:lang
  };
};

const mapDispatchToProps=function(dispatch)
{
  return ({
    fetchNoteIfNeeded:function(file){dispatch(fetchNoteIfNeeded(file));}
  });
};

class NotePage extends Component {
  constructor(props)
  {
      super(props);
      this.images = [];
      this.state = {showImage:false,currentImage:0};
      this.onImageClick = this.onImageClick.bind(this);
      this.onImagePush = this.onImagePush.bind(this);
  }
  componentDidMount()
  {
    if(this.props.note!==undefined)
    {
      setTitle(this.props.note.name);
      setDescription(this.props.note.metaDescription);
      this.props.fetchNoteIfNeeded(window.location.origin+"/content/notes/"+this.props.note.file);
    }
  }
  onImageClick(id){
    this.setState({showImage:true,currentImage:id});
  }
  onImagePush(src){
    this.images.push(src);
    return this.images.length-1;
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
      return <Redirect to={`/${lang}/not-found`} />
    }
    let {date, name} = note;
    let {showImage, currentImage} = this.state;
    if(isFetching)
      this.images = [];
    return (
      <div className='noteContainer pageContainer'>
        <Loader isLoading={isFetching}>
          {err!=null?(<div>{tr("note-loading-error",lang)})</div>):(<div>
            <div className='noteHeader'>
              <div className="noteDate">
                {dateToString(date)}
              </div>
              <div className="noteName">{name}</div>
            </div>
            <NoteMarkdown source = {content} escapeHtml={true} 
            onImageClick={this.onImageClick} 
            onImagePush={this.onImagePush} 
            className = {'noteContent'}/>
            <ImageViewer
            show={showImage} 
            originalHref= {this.images[currentImage]}
            onClose={()=>this.setState({showImage:false})}
            onLeft={()=>this.setState({currentImage:(currentImage+this.images.length-1)%this.images.length})}
            onRight={()=>this.setState({currentImage:(currentImage+1)%this.images.length})}
            imageSrc={this.images[currentImage]}/>
          </div>)}
        </Loader>
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(NotePage));