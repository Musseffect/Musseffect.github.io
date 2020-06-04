import React, { Component } from 'react';
import { connect } from "react-redux";
import { NavLink, Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import MediaQuery from 'react-responsive';
import MainPage from '../pages/MainPage.js';
import AboutPage from '../pages/AboutPage.js';
import LinksPage from '../pages/LinksPage.js';
import PostsPage from '../pages/PostsPage.js';
import PostPage from '../pages/PostPage.js';
import NotesPage from '../pages/NotesPage.js';
import NotePage from '../pages/NotePage.js';
import NoMatchPage from '../pages/NoMatchPage.js';
import {smallMedium,mediumLarge} from "../windowSizes.js";
import GalleryPage from '../pages/GalleryPage.js';

const mapStateToProps=function(state)
{
  return {
    title:state.title,
    isFetching:state.isFetching,
    hasError:state.hasError
  };
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
    const {
      title,
      isFetching,
      hasError
    }=this.props;

    let links=[];
    links.push(<NavLink key="link_1" exact to='/posts' className="link" activeClassName="active" onClick={this.closeMenu}>{"Projects"}</NavLink>); 
    links.push(<NavLink key="link_2" exact to='/notes' className="link" activeClassName="active" onClick={this.closeMenu}>{"Notes"}</NavLink>);  
    links.push(<NavLink key="link_3" exact to='/about' className="link" activeClassName="active" onClick={this.closeMenu}>{"About"}</NavLink>);  

    /*<div className="headerMainButton">
    <a href = "https://musseffect.github.io/">
       <img style={{width:'100px',height:'40px',display:'block',backgroundColor:'green'}} />
    </a>
   </div>*/
    return (
    <div className='containerMain'>
    <div id="rootLayout">
      <header className = "header">
      <MediaQuery minWidth={smallMedium+1}>
        <div className="headerMainLinks">
          {links}
        </div>
      </MediaQuery>
        <div className="headerPageTitle">
          <NavLink  key="link_1" exact to='/' className="headerTitleText" activeClassName="active" onClick={this.closeMenu}>
          {'Musseffect'}
          </NavLink>
        </div>
      <MediaQuery minWidth={smallMedium+1}>
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
      </MediaQuery>
      </header>
      <MediaQuery maxWidth = {smallMedium}>
        <div className="linksSmallContainer">
          {links}
        </div>
      </MediaQuery>
      <div className="content">
          {isFetching&&(
            <div className="loaderBackground">
                <div className="loader">
                  <div></div><div></div><div></div>
                </div>
            </div>
          )}
          {hasError?
          <div id="errorMessage" className="pageContainer">
            Im sorry, you've got yourself an error, man
          </div>:!isFetching&&
          <div id="routeContent">
            <Switch>
              <Route exact path='/' render={(props)=><GalleryPage {...props}/>} />
              <Route path='/about' render={(props)=><AboutPage {...props}/>} />
              <Route exact path='/posts' render={(props)=><PostsPage {...props}/>} />
              <Route exact path='/notes' render={(props)=><NotesPage {...props}/>} />
              <Route path='/links' render={(props)=><LinksPage {...props}/>} />
              {/*<Route path='/gallery' render={(props)=><GalleryPage {...props}/>} />*/}
              <Route path='/notes/:id' component={NotePage} />
              <Route path="/posts/:id" component={PostPage} />
              <Route path="*" component={NoMatchPage} />
            </Switch>
          </div>
          }
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

