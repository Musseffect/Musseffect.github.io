import React, { Component } from 'react';


class Tag extends Component {
  constructor(props)
  {
      super(props);
      this.click=props.click;
  }
  render() {
    let {active,name,click} = this.props;
    return (
      <div className={'tag'+(active?' active':'')} onClick={click}>
        <div className="tagCircle"></div>
        <div className="tagName">{name}</div>
      </div>
    )
  }
}

export default Tag;