import React, { Component } from 'react';
import { connect } from "react-redux";
import { NavLink, Route, Switch } from 'react-router-dom';
import { Redirect, withRouter } from 'react-router';
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
import Loader from './loader.jsx';

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
      isFetching,
      hasError
    }=this.props;

    let lang = this.props.match.params.lang;
    if(!lang){
      return (<Redirect to="/en/"/>);
    }
    if(lang!="en"&&lang!="ru")
      return (<Redirect to="/en/not-found"/>);

    let links=[];
    links.push(<NavLink key="link_1" exact to={`/${lang}/posts`} className="link" activeClassName="active">{tr("projects-menu", lang)}</NavLink>); 
    links.push(<hr key="hr1" className="menuSeparator"/>);
    links.push(<NavLink key="link_2" exact to={`/${lang}/notes`} className="link" activeClassName="active">{tr("notes-menu", lang)}</NavLink>);  
    links.push(<hr key="hr2" className="menuSeparator"/>);
    links.push(<NavLink key="link_3" exact to={`/${lang}/links`} className="link" activeClassName="active">{tr("links-menu",lang)}</NavLink>); 
    links.push(<hr key="hr3" className="menuSeparator"/>);
    links.push(<NavLink key="link_4" exact to={`/${lang}/about`} className="link" activeClassName="active">{tr("about-menu", lang)}</NavLink>);  

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
          <NavLink  key="link_1" exact to={`/${lang}/`} className="headerTitleText" activeClassName="active" onClick={this.closeMenu}>
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
          <Loader isLoading={isFetching}>
            {hasError?
            (<div id="errorMessage" className="pageContainer">
              <div>{tr("error-first-part",lang)}</div>
              <div>{tr("error-second-part",lang)}</div>
            </div>):(<div id="routeContent">
                <Switch>
                  <Route exact path={`/${lang}/`} render={(props)=><GalleryPage {...props} lang={lang}/>} />
                  <Route path={`/${lang}/about`} render={(props)=><AboutPage {...props} lang={lang}/>} />
                  <Route exact path={`/${lang}/posts`} render={(props)=><PostsPage {...props} lang={lang}/>} />
                  <Route exact path={`/${lang}/notes`} render={(props)=><NotesPage {...props} lang={lang}/>} />
                  <Route path={`/${lang}/links`} render={(props)=><LinksPage {...props}/>} lang={lang} />
                  <Route path={`/${lang}/notes/:link`} component={(props)=><NotePage {...props} lang={lang}/>} />
                  <Route path={`/${lang}/posts/:link`} component={(props)=><PostPage {...props} lang={lang}/>} />
                  <Route path="*" component={(props)=><NoMatchPage {...props} lang={lang}/>} />
                </Switch>
              </div>)}
          </Loader>
      </div>
      <footer id='footer'>
        <div className="footerButton" onClick={()=>changeOption("theme",theme=="light"?"dark":"light")}>
          {tr(theme=="light"?"dark-theme-button":"light-theme-button",lang)}
        </div>
        <div className="languageSwitchContainer">
          <div className="languageButtonContainer">
            <NavLink exact to="/ru" className={"footerButton leftLanguageButton"+(lang=="ru"?" active":"")} activeClassName="active">ru</NavLink>
          </div>
          <div className="languageButtonContainer">
            <NavLink exact to="/en" className={"footerButton"+(lang=="en"?" active":"")} activeClassName="active">en</NavLink>
          </div>
        </div>
      </footer>
    </div>
  </div>
    )
  }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
