import React, { Component } from 'react';
import { connect } from "react-redux";
import { NavLink, Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import {switchLanguage,setTitle} from "../actions/actions.js";


const mapStateToProps=function(state)
{
  return {};
};

const mapDispatchToProps=function(dispatch)
{
  return ({
    //switchLanguage:function(){dispatch(switchLanguage());}
    setTitle:function(title){dispatch(setTitle(title));}
  });
};

class AboutPage extends Component {
  constructor(props)
  {
      super(props);
  }
  componentDidMount()
  {
    this.props.setTitle("About");
  }
  render() {
    let {} = this.props;
    return (
      <div className='aboutContainer pageContainer'>
        this is about page
      </div>
    )
  }
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(AboutPage));