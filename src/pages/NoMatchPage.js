import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import {setTitle} from "../actions/actions.js";

const mapStateToProps=function(state)
{
  return {};
};

const mapDispatchToProps=function(dispatch)
{
  return ({
    setTitle:function(title){dispatch(setTitle(title));}
  });
};

class NoMatchPage extends Component {
  constructor(props)
  {
      super(props);
  }
  componentDidMount()
  {
    this.props.setTitle("Page 404");
  }
  render() {
    let {} = this.props;
    return (
      <div className='page404'>
        Page 404
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(NoMatchPage));