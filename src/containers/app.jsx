import React, { Component } from 'react';
import { connect } from "react-redux";
import { NavLink, Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import MediaQuery from 'react-responsive';
import AboutPage from '../pages/AboutPage.js';
import LinksPage from '../pages/LinksPage.js';
import PostsPage from '../pages/PostsPage.js';
import PostPage from '../pages/PostPage.js';
import NotesPage from '../pages/NotesPage.js';
import NotePage from '../pages/NotePage.js';
import NoMatchPage from '../pages/NoMatchPage.js';
import {changeOption} from "../actions/actions.js";
import {smallMedium,mediumLarge} from "../windowSizes.js";
import GalleryPage from '../pages/GalleryPage.js';
import {tr} from "../localization.js";

const mapStateToProps=function(state)
{
  return {
    isFetching:state.isFetching,
    hasError:state.hasError,
    theme:state.options.theme,
    lang:state.options.language
  };
};

const mapDispatchToProps=function(dispatch)
{
  return ({
    changeOption:function(option,value){dispatch(changeOption(option,value));}
  });
};

class App extends Component {
  constructor(props)
  {
      super(props);
  }
  render() {
    const {
      changeOption,
      theme,
      lang,
      isFetching,
      hasError
    }=this.props;

    let links=[];
    links.push(<NavLink key="link_1" exact to='/posts' className="link" activeClassName="active" onClick={this.closeMenu}>{tr("menuProjects", lang)}</NavLink>); 
    links.push(<hr key="hr1" className="menuSeparator"/>);
    links.push(<NavLink key="link_2" exact to='/notes' className="link" activeClassName="active" onClick={this.closeMenu}>{tr("menuNotes", lang)}</NavLink>);  
    links.push(<hr key="hr2" className="menuSeparator"/>);
    links.push(<NavLink key="link_3" exact to='/links' className="link" activeClassName="active" onClick={this.closeMenu}>{tr("menuLinks",lang)}</NavLink>); 
    links.push(<hr key="hr3" className="menuSeparator"/>);
    links.push(<NavLink key="link_4" exact to='/about' className="link" activeClassName="active" onClick={this.closeMenu}>{tr("menuAbout", lang)}</NavLink>);  

    return (
    <div className={'containerMain'+(theme=="light"?" theme-light":" theme-dark")}>
    <div id="background"></div>
    <div id="rootLayout">
      <header className = "header">
        <MediaQuery minWidth={smallMedium+1}>
          <div className="headerMainLinks">
            {links}
          </div>
        </MediaQuery>
        <div className="headerPageTitle">
          <NavLink  key="link_1" exact to='/' className="headerTitleText" activeClassName="active" onClick={this.closeMenu}>
          {'MUSSEFFECT'}
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
            <div>{tr("errorFirstPart",lang)}</div>
            <div>{tr("errorSecondPart",lang)}</div>
          </div>:!isFetching&&
          <div id="routeContent">
            <Switch>
              <Route exact path='/' render={(props)=><GalleryPage {...props}/>} />
              <Route path='/about' render={(props)=><AboutPage {...props}/>} />
              <Route exact path='/posts' render={(props)=><PostsPage {...props}/>} />
              <Route exact path='/notes' render={(props)=><NotesPage {...props}/>} />
              <Route path='/links' render={(props)=><LinksPage {...props}/>} />
              <Route path='/notes/:id' component={NotePage} />
              <Route path="/posts/:id" component={PostPage} />
              <Route path="*" component={NoMatchPage} />
            </Switch>
          </div>
          }
      </div>
      <footer id='footer'>
        <div className="footerButton" onClick={()=>changeOption("theme",theme=="light"?"dark":"light")}>
          {theme=="light"?tr("darkThemeButton",lang):tr("lightThemeButton",lang)}
        </div>
        <div className="languageSwitchContainer">
          <div className="languageButtonContainer">
            <div className={"footerButton leftLanguageButton"+(lang=="ru"?" active":"")} onClick={()=>changeOption("language","ru")}>ru</div>
          </div>
          <div className="languageButtonContainer">
            <div className={"footerButton"+(lang=="en"?" active":"")} onClick={()=>changeOption("language","en")}>en</div>
          </div>
        </div>
      </footer>
    </div>
  </div>
    )
  }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
/*
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
        </MediaQuery> */
