import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter,Redirect} from 'react-router';
import {setTitle} from "../actions/actions.js";
import { Link } from 'react-router-dom';
import { dateToString } from '../utils.js';
import {tr} from "../localization.js";

const mapStateToProps=function(state,ownProps)
{
    return {
      notes:state.notes[state.options.language],
      lang:state.options.language
    };
};

const mapDispatchToProps=function(dispatch)
{
  return ({
    setTitle:function(title){dispatch(setTitle(title));}
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
        this.props.setTitle(tr("menuNotes",this.props.lang));
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
                            <Link to={'/notes/'+value.link} className="noteHeaderLink">{value.name}</Link>
                        </div>
                    </div>);
                })
            }
            </div>
        )
    }
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(NotesPage));