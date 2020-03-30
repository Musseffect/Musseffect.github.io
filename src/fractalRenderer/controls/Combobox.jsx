import React, { Component } from 'react';



class Combobox extends Component {
  constructor(props)
  {
      super(props);
      this.state={currentIndex:this.props.currentIndex,
        collapsed:true};
    this._onClick=this._onClick.bind(this);
  }
  _onClick(e)
  {
        let currentIndex=e.target.dataset.index;
        if(this.props.onChange!==undefined)
            this.props.onChange({value:currentIndex,type:'combobox',name:this.props.name});
		this.setState({currentIndex:currentIndex,collapsed:true});
  }
  render() {
    let {currentIndex,collapsed} = this.state;
    let {values} =this.props;
    let elements=[];
    for(var i=0;i<values.length;i++)
    {
        elements.push(<div key={i} onClick={this._onClick} data-index={i} className={'comboboxItem'+((i==currentIndex)?' selected':'')}>
            {values[i]}
        </div>);
    }
    return (<div className='comboboxControl'>
            <div onClick={(e)=>this.setState({collapsed:!collapsed})} className='comboboxInner'>
                    {values[currentIndex]}
                    <i className='comboboxIcon'/>
            </div>
            <div className='comboboxList' style={collapsed?{display:'none'}:{}}>
                {elements}
            </div>
            </div>);
  }
}

Combobox.defaultProps ={
    currentIndex:0
}


export default Combobox;