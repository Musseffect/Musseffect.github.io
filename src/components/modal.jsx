import React, { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';


export class Modal extends Component {
  constructor(props)
  {
      super(props);
      this.onClose = this.onClose.bind(this);
  }
  render() {
    let {show,windowStyle,onHide} = this.props;
    let children = this.props.children.map(function(child)
    {
      if(child.type === ModalHeader)
      {
          return React.cloneElement(child,{onCloseButton:onHide});
      }
      return child;
    });
    return (
      <div className="modalBackground">
        <div className={windowStyle} style={show?{display:"block"}:{display:"none"}}>
          {children}
        </div>
      </div>
    )
  }
}

export class ModalHeader extends Component 
{
  constructor(props)
  {
      super(props);
  }
  render() {
    let {closeButton,headerStyle,onCloseButton} = this.props;
    return (
      <div className={headerStyle}>
          {this.props.children}
          {closeButton?
          (<div className="modalCloseButton" onClick={onCloseButton}></div>):null
          }
      </div>
    )
  }
}
export class ModalBody extends Component 
{
  constructor(props)
  {
      super(props);
  }
  render()
  {
    let {bodyStyle} = props;
    return (
      <div className={bodyStyle}>
          {this.props.children}
      </div>
    );
  }
}
export class ModalFooter extends Component
{
  constructor(props)
  {
      super(props);
  }
  render()
  {
    let {footerStyle} = props;
    return (
      <div className={footerStyle}>
          {this.props.children}
      </div>
    );
  }
}

ModalFooter.defaultProps=
{
  footerStyle="modalFooter"
};
ModalHeader.defaultProps=
{
  headerStyle="modalHeader"
};
Modal.defaultProps=
{
  windowStyle="modalWindow"
};
ModalBody.defaultProps=
{
  bodyStyle="modalBody"
};