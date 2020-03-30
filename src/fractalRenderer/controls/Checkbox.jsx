import React, { Component } from 'react';


class Checkbox extends Component {
  constructor(props)
  {
    super(props);
    this.state={checked:this.props.checked};
    this._onClick=this._onClick.bind(this);
  }
  _onClick()
  {
    let checked=!this.state.checked;
    if(this.props.onChange!==undefined)
      this.props.onChange({value:checked,type:'combobox',name:this.props.name});
    this.setState({checked:checked});
  }
  render() {
    let {checked} = this.state;
    return (<div className='checkboxControl'>
          <div className='checkboxToggle'>
            </div>
        </div>);
  }
}


export default Checkbox;