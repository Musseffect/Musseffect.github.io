import React, { Component } from 'react';



class ColorPicker extends Component {
  constructor(props)
  {
      super(props);
      this.state={color:this.props.color,colorText:this.props.color};
      this._onTextFieldChange=this._onTextFieldChange.bind(this);
  }
  _onTextFieldChange(e)
  {

  }
  render() {
    let {color,colorText} = this.state;
    return (<div className='colorPicker'>
            <div className='color-div'>
              <div className='color-background' style={{backgroundColor:color}}></div>
              <div className='color-mask1'></div>
              <div className='color-mask2'></div>
            </div>
            <div className='hue-div'>
            </div>
            <div className='alpha-div'>
            </div>
            <input type='text' value={colorText} onChange={this._onTextFieldChange} />
            <div>
                
            </div>
        </div>);
  }
}




export default ColorPicker;