import React, { Component } from 'react';



class FloatSlider extends Component {
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
    let {value} = this.state;
    let {min,max,step,ticks} =this.props;
    let range=(max-min);
    let delta=range/(ticks-1);
    let labels=[];
    
    for(var i=0;i<ticks;i++)
    {
      let labelValue=delta*i+min;
      let persentage=i/(ticks-1)*100.0;
      labels.push(<label key={i} data-value={labelValue} className='floatSliderMinLable' 
      style={{height:'20px',width:'20px',textAlign:'center',left:persentage+'%',transform:'translateX(-50%)',position:'absolute'}}>{labelValue}</label>);
    }
    return (
      <div className='floatControl' style={{display:'flex',flexDirection:'row'}}>
          <div className='floatSliderContainer' style={{display:'flex',flexDirection:'column'}}>
              <div className='floatSliderTicks' style={{width:'100%',height:'30px',position:'relative'}} onClick={this._onLabelClick}>
                {labels}
              </div>
              <div ref={this.slider} className='floatSliderTrack' 
              onMouseDown={this._onDrag}
              onMouseUp={this._onDragEnd}>
                <div className='floatSliderThumb' 
                onMouseDown={this._onDragStart}
                onMouseUp={this._onDragEnd}
                style={{left:(value-min)/(max-min)*100.0+'%',transform:'translateX(-50%) translateY(-50%)'}}>
                </div>
              </div>
          </div>
          <input className="floatSliderInput" onChange={this._onChange} onClick={function(e){e.target.focus()}} type="number" value={value} min={min} max={max} step={step}/>
      </div>
    )
  }
}

FloatSlider.defaultProps ={
  min:-1,
  max:1,
  step:0.1,
  value:0,
  ticks:3
}


export default FloatSlider;