import React, { Component } from 'react';
import { connect } from "react-redux";
import { NavLink, Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import MediaQuery from 'react-responsive';
import MainPage from '../pages/MainPage.js';
import AboutPage from '../pages/AboutPage.js';
import StereoImagePage from '../pages/StereoImagePage.js';
import LinksPage from '../pages/LinksPage.js';
import PostsPage from '../pages/PostsPage.js';
import PostPage from '../pages/PostPage.js';
import {smallMedium,mediumLarge} from "../windowSizes.js";

const mapStateToProps=function(state)
{
  return {title:state.title};
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
    const {title}=this.props;
    let links=[];
    links.push(<NavLink key="link_1" exact to='/main' className="nav-link nav-item link" activeClassName="active" onClick={this.closeMenu}>{"Main"}</NavLink>); 
    links.push(<NavLink key="link_3" exact to='/stereoImage' className="nav-link nav-item link" activeClassName="active" onClick={this.closeMenu}>{"StereoImage"}</NavLink>);   
    links.push(<NavLink key="link_5" exact to='/links' className="nav-link nav-item link" activeClassName="active" onClick={this.closeMenu}>{"Links"}</NavLink>);  
    links.push(<NavLink key="link_6" exact to='/about' className="nav-link nav-item link" activeClassName="active" onClick={this.closeMenu}>{"About"}</NavLink>);  
    links.push(<NavLink key="link_7" exact to='/' className="nav-link nav-item link" activeClassName="active" onClick={this.closeMenu}>{"Blog"}</NavLink>);  

    return (
    <div className='containerMain'>
    <div id="rootLayout" style={{display:"flex",flexDirection:"column",height:"100%",width:"100%"}}>
      <MediaQuery minWidth={smallMedium+1}>
      <header className = "header">
        <div className="headerMainButton">
         {/*<a href = "https://musseffect.github.io/">
            <img style={{width:'100px',height:'40px',display:'block',backgroundColor:'green'}} />
    </a>*/}
        </div>
        <div className="headerPageTitle">
          <NavLink  key="link_1" exact to='/' className="nav-link nav-item link headerTitleText" activeClassName="active" onClick={this.closeMenu}>
          {'Musseffect'}
          </NavLink>
        </div>
        <div className="headerButtonBlock">
          <div className="headerButton">
            <a href = "https://github.com/Musseffect">
            <i className="fab fa-github fa-lg"></i>
            </a>
          </div>
          <div className="headerButton">
            <a href = "https://www.instagram.com/musseffect/">
            <i className="fab fa-instagram fa-lg"></i>
            </a>
          </div>
          <div className="headerButton">
            <a href = "https://www.flickr.com/photos/musseffect2/">
            <i className="fab fa-flickr fa-lg"></i>
            </a>
          </div>
          <div className="headerButton">
            <a href = "mailto:lazarevich356@gmail.com">
            <i className="far fa-envelope fa-lg">
            </i></a>
          </div>
        </div>
      </header>
      </MediaQuery>
      <MediaQuery maxWidth = {smallMedium}>
      <header className = "header">
        <div className="headerPageTitle">
          <NavLink  key="link_1" exact to='/' className="nav-link nav-item link headerTitleText" activeClassName="active" onClick={this.closeMenu}>
          {'Musseffect'}
          </NavLink>
        </div>
      </header>
      </MediaQuery>
      <div className="content">
        <div id="menu" className="navbar navbar-expand navbar-dark bg-primary" style={{width:"100%",display:"none",flexDirection:"row"}} >
          <div id="menuButtons" className="navbar-nav mr-auto" style={{margin:'auto'}}>
            {links}
          </div>
        </div>
        <div id="routeContent">
          <Route exact path='/main' render={(props)=><MainPage {...props}/>} />
          <Route exact path='/' render={(props)=><PostsPage {...props}/>} />
          <Route exact path='/about' render={(props)=><AboutPage {...props}/>} />
          <Route exact path='/links' render={(props)=><LinksPage {...props}/>} />
          <Route exact path='/stereoImage' render={(props)=><StereoImagePage {...props}/>} />
          <Route path="/posts/:id" component={PostPage} />
        </div>
      </div>

      <footer id='footer'>
      <MediaQuery maxWidth = {smallMedium}>
        <div className="footerButtonBlock">
            <div className="footerButton">
              <a href = "https://github.com/Musseffect">
              <i className="fab fa-github fa-lg"></i>
              </a>
            </div>
            <div className="footerButton">
              <a href = "https://www.instagram.com/musseffect/">
              <i className="fab fa-instagram fa-lg"></i>
              </a>
            </div>
            <div className="footerButton">
              <a href = "https://www.flickr.com/photos/musseffect2/">
              <i className="fab fa-flickr fa-lg"></i>
              </a>
            </div>
            <div className="footerButton">
              <a href = "mailto:lazarevich356@gmail.com">
              <i className="far fa-envelope fa-lg">
              </i></a>
            </div>
          </div>
        </MediaQuery>
        </footer>
    </div>
  </div>
    )
  }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));

