import React, { Component } from 'react';
import { connect } from "react-redux";
import { NavLink, Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import {switchLanguage,setTitle} from "../actions/actions.js";
import t from "../localization.js";
import FractalRendererPage from '../fractalRenderer/FractalRendererPage.js';

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

class MainPage extends Component {
  constructor(props)
  {
      super(props);
  }
  componentDidMount()
  {
    this.props.setTitle("Main");
  }
  render() {
    let {} = this.props;
    return (
      <div className='mainPageContainer pageContainer'>
        this is a main page
        <FractalRendererPage/>
      </div>
    )
  }
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(MainPage));