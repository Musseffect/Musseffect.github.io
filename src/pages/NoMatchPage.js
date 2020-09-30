import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import {setTitle,setDescription} from "../actions/actions.js";
import {tr} from "../localization.js";

class NoMatchPage extends Component {
  constructor(props)
  {
      super(props);
  }
  componentDidMount()
  {
    setTitle("Page 404");
    setDescription(tr("main-description",this.props.lang));
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

export default withRouter(NoMatchPage);