import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter,Redirect} from 'react-router';
import {setDescription, setTitle} from "../actions/actions.js";
import { Link } from 'react-router-dom';
import { dateToString } from '../utils.js';
import {tr} from "../localization.js";

const mapStateToProps=function(state,ownProps)
{
    return {
      notes:state.notes[ownProps.lang],
      lang:ownProps.lang
    };
};

const mapDispatchToProps=function(dispatch)
{
  return ({
  });
};

class NotesPage extends Component
{
    constructor(props)
    {
        super(props);
    }
    componentDidMount()
    {
        setTitle(tr("notes-menu",this.props.lang));
        setDescription(tr("main-description",this.props.lang));
    }
    render()
    {
        let {notes,lang} = this.props;
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
                            <Link to={`/${lang}/notes/${value.link}`} className="noteHeaderLink">{value.name}</Link>
                        </div>
                    </div>);
                })
            }
            </div>
        )
    }
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(NotesPage));