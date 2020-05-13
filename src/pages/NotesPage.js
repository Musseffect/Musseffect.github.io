import React, { Component } from 'react';
import { connect } from "react-redux";
import Tag from "../components/tag.jsx";
import { withRouter,Redirect} from 'react-router';
import ReactMarkdown from "react-markdown";
import {switchLanguage, setTitle} from "../actions/actions.js";
import { Link } from 'react-router-dom';
import { dateToString } from '../utils.js';

const mapStateToProps=function(state,ownProps)
{
    return {
      notes:state.notes
    };
};

const mapDispatchToProps=function(dispatch)
{
  return ({
    setTitle:function(title){dispatch(setTitle(title));}
  });
};


class NotesPage extends React.Component{
    constructor(props)
    {
        super(props);
    }
    componentDidMount()
    {
        this.props.setTitle("Notes");
    }
    render()
    {
        let {notes} = this.props;
        return (
            <div className='notesContainer pageContainer'>
            {
                notes.map(function(value,index)
                {
                    let date = value.date;
                    return (
                    <div key={index} className="notePreview">
                        <div className="notePreviewDate">
                        {dateToString(date)}
                        </div>
                        <div className="notePreviewName">
                            <Link to={'/notes/'+index} className="noteHeaderLink">{value.name}</Link>
                        </div>
                    </div>);
                })
            }
            </div>
        )
    }
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(NotesPage));