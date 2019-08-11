import React, { Component } from 'react';
import { connect } from "react-redux";
import { NavLink, Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';


const mapStateToProps=function(state)
{
  return {};
};

const mapDispatchToProps=function(dispatch)
{
  return ({
    //switchLanguage:function(){dispatch(switchLanguage());}
  });
};

class AboutPage extends Component {
  constructor(props)
  {
      super(props);
  }
  render() {
    let {} = this.props;
    return (
      <div className='aboutContainer'>
      </div>
    )
  }
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(AboutPage));