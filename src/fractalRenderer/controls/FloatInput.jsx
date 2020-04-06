import React, { Component } from 'react';



class FloatInput extends Component {
  constructor(props)
  {
      super(props);
      this.state={value:this.props.value,
      active:false};
      this.slider=React.createRef();
      this._onChange=this._onChange.bind(this);
      this._onBlur=this._onBlur.bind(this);
      this._onDrag=this._onDrag.bind(this);
      this._onDragEnd=this._onDragEnd.bind(this);
      this._onDragStart=this._onDragStart.bind(this);
      this._onLabelClick=this._onLabelClick.bind(this);
  }
  _onChange(e)
  {
    let value=event.target.value;
    this.setState({value:event.target.value});
  }
  _onDragEnd(e)
  {
    document.removeEventListener('mousemove',this._onDrag);
    document.removeEventListener('mouseup',this._onDragEnd);
  }
  _onDrag(e)
  {
    e.stopPropagation();
    let sl=this.slider.current;
    let rect=sl.getBoundingClientRect();
    let position=e.clientX-rect.x;
    let relativePos=Math.max(Math.min(position/(rect.width),1.0),0.0);
    let {min,max} = this.props;
    let value=relativePos*(max-min)+min;
    this.setState({value:value});
  }
  _onDragStart(e)
  {
    document.addEventListener('mousemove',this._onDrag);
    document.addEventListener('mouseup',this._onDragEnd);
  }
  _onBlur(e)
  {
    let floatValue=parseFloat(this.state.value);
    let {min,max,step} =this.props;
    if(!this.isValid(floatValue,min,max))
    {
      floatValue=this.props.value;
    }
    this.props.onChange({target:{value:floatValue,name:this.props.name,type:'floatSlider'}});
    this.setState({value:floatValue});
  }
  _onLabelClick(e)
  {
    e.stopPropagation();
    if(e.target.className!='floatSliderMinLable')
      return;
    this.setState({value:e.target.dataset.value})
  }
  isValid(value,min,max)
  {
    return (!isNaN(value)&&(min===undefined||value>=min)
    &&(max===undefined||value<=max));
  }
  render() {
    let {onValueChange} = this.state;
    let {min,max,step,value} =this.props;
    value = Math.min(Math.max(value,min),max);
    return (
        <input value={value} onChange={onValueChange} step={step}/>
    );
  }
}

FloatInput.defaultProps ={
  min:-1,
  max:1,
  step:0.1,
  value:0
}
export default FloatInput;