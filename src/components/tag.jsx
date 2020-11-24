import React, { Component } from 'react';


class Tag extends Component {
  constructor(props)
  {
      super(props);
      this.click=props.click;
      this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e){
    if(this.props.click)
      this.props.click(this.props.name);
  }
  render() {
    let {active,name} = this.props;
    return (
      <div className={'tag'+(active?' active':'')} onClick={this.handleClick}>
        <div className="tagCircle"></div>
        <div className="tagName">{name}</div>
      </div>
    )
  }
}

export default Tag;