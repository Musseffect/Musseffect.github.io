import React, { Component } from 'react';
import { connect } from "react-redux";
import { NavLink, Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import MainPage from '../pages/MainPage.js';
import AboutPage from '../pages/AboutPage.js';
import StereoImagePage from '../pages/StereoImagePage.js';

const mapStateToProps=function(state)
{
  return {};
};

const mapDispatchToProps=function(dispatch)
{
  return ({
  });
};

class App extends Component {
  constructor(props)
  {
      super(props);
  }
  render() {
    const {}=this.props;
    let links=[];
    links.push(<NavLink key="link_1" exact to='/' className="nav-link nav-item link" activeClassName="active" onClick={this.closeMenu}>{"Gallery"}</NavLink>);  
    links.push(<NavLink key="link_2" exact to='/stereoImage' className="nav-link nav-item link" activeClassName="active" onClick={this.closeMenu}>{"StereoImage"}</NavLink>);  
    links.push(<NavLink key="link_3" exact to='/about' className="nav-link nav-item link" activeClassName="active" onClick={this.closeMenu}>{"About"}</NavLink>);  
    
    return (
      <div className='containerMain'>
        <div id="rootLayout" style={{display:"flex",flexDirection:"column",height:"100%",width:"100%"}}>
          <div id="header" className="noSelect" style={{width:"100%"}}>
            <h4>
            Header something
            </h4>
          </div>
          <div className="content">
            <div id="menu" className="navbar navbar-expand navbar-dark bg-primary" style={{width:"100%",display:"flex",flexDirection:"row"}} >
              <div className="navbar-nav mr-auto">
                {links}
              </div>
            </div>
            <div id="routeContent">
              <Route exact path='/' render={(props)=><MainPage {...props}/>} />
              <Route exact path='/gallery' render={(props)=><GalleryPage {...props}/>} />
              <Route exact path='/about' render={(props)=><AboutPage {...props}/>} />
              <Route exact path='/stereoImage' render={(props)=><StereoImagePage {...props}/>} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));