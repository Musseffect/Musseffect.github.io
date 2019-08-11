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

class GalleryPage extends Component {
  constructor(props)
  {
      super(props);
  }
  render() {
    let {} = this.props;
    let elements=[];
    for(var i=0;i<10;i++)
    {
      elements.push(<GalleryPreview key={i} src="http://2008.sub.blue/assets/0000/3045/Glynn2_preview.jpg"/>);
    }
    return (
      <div className='galleryContainer'>
        {elements}
      </div>
    )
  }
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(GalleryPage));