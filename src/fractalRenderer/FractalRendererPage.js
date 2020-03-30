import React, { Component } from 'react';
import { connect } from "react-redux";
import { NavLink, Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import Controls from './Controls.js';

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

class FractalRendererPage extends Component {
  constructor(props)
  {
      super(props);
  }
  render() {
    let {} = this.props;
    return (
      <div className='fractalRendererContainer' style={{width:'100%',height:'500px',display:'flex',flexDirection:'row'}}>
        <div id='canvasPanel' style={{backgroundColor:'black',width:'100%',height:'100%'}}>
        </div>
        <div id='controlsPanel' style={{width:'400px',height:'100%'}}>
        <Controls />
        </div>
      </div>
    )
  }
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(FractalRendererPage));