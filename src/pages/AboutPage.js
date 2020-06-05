import React, { Component } from 'react';
import { connect } from "react-redux";
import { NavLink, Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import {switchLanguage,setTitle} from "../actions/actions.js";


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

class AboutPage extends Component {
  constructor(props)
  {
      super(props);
  }
  componentDidMount()
  {
    this.props.setTitle("About. About what?");
  }
  render() {
    let {} = this.props;
    return (
      <div className='aboutContainer pageContainer'>
        <div className="h2" style={{width:"100%",textAlign:"center",}}>
          Not great, not terrible.
        </div>
        <p>
          Isn't that great?
        </p>
      </div>
    )
  }
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(AboutPage));