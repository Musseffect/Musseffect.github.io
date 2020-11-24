import React, { Component } from 'react';


class LinkTag extends Component {
  constructor(props){
      super(props);
      this.click=props.click;
      this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e){
    if(this.props.click)
      this.props.click(this.props.name);
  }
  render() {
    const {active,name} = this.props;
    return (
        <div className={"linkTag"+(active?" active":"")} onClick={this.handleClick}>
            {name}
        </div>
    )
  }
}

export default LinkTag;