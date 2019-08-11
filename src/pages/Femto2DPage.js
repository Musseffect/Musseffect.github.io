import React, { Component } from 'react';
import { connect } from "react-redux";
import { NavLink, Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import THREE from 'three';

class Femto2DPage extends Component
{
    constructor(props)
    {
        super(props);
    }
    render() {
      let {} = this.props;
      return (
        <div className='femto2dContainer'>
        </div>
      )
    }
}