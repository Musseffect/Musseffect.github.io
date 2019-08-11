import React, { Component } from 'react';
import { connect } from "react-redux";
import { NavLink, Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';

import GalleryPreview from "../components/galleryPreview.jsx";

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

class MainPage extends Component {
  constructor(props)
  {
      super(props);
  }
  render() {
    let {} = this.props;
    return (
      <div className='mainPageContainer'>
      </div>
    )
  }
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(MainPage));