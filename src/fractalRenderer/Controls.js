import React, { Component } from 'react';
import { connect } from "react-redux";
import { NavLink, Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import Combobox from './controls/Combobox.jsx';
import FloatSlider from './controls/FloatSlider.jsx';
import Checkbox from './controls/Checkbox.jsx';
import ColorPicker from './controls/ColorPicker.jsx';


const mapStateToProps=function(state)
{
  return {};
};

const mapDispatchToProps=function(dispatch)
{
  return ({
  });
};

class Controls extends Component {
  constructor(props)
  {
      super(props);
  }
  render() {
    let {} = this.props;
    return (
      <div className='controlsContainer'>
        <Combobox values={['1','2','3']} currentIndex={0}/>
        <Checkbox checked={true}/>
        <FloatSlider />
        <ColorPicker color="#AAAAAAAA"/>
      </div>
    )
  }
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Controls));