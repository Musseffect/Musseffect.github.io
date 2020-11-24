import React, { Component } from 'react';


export class Modal extends Component {
  constructor(props)
  {
      super(props);
  }
  render() {
    const {show, windowStyle, containerStyle, backgroundStyle} = this.props;
    let children = this.props.children;
    /*let children = this.props.children.map(function(child)
    {
      if(child.type === ModalHeader)
      {
          return React.cloneElement(child,{onCloseButton:onCloseButton});
      }
      return child;
    });*/
    return (
      <div className={containerStyle} style={
        show?{
          /*display:"flex",
          flexDirection:"column",
          justifyContent:"center",
          alignItems:"center",
          position:"fixed",
          left:"0",
          top:"0",
          width:"100%",
          height:"100%"*/
          }:{display:"none"}}>
          <div className={backgroundStyle}></div>
        <div className={windowStyle}>
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
    let {headerStyle} = this.props;
    return (
      <div className={headerStyle}>
          {this.props.children}
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
    let {bodyStyle} = this.props;
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
    let {footerStyle} = this.props;
    return (
      <div className={footerStyle}>
          {this.props.children}
      </div>
    );
  }
}

ModalFooter.defaultProps=
{
  footerStyle:"modalFooter"
};
ModalHeader.defaultProps=
{
  headerStyle:"modalHeader"
};
Modal.defaultProps=
{
  windowStyle:"modalWindow",
  backgroundStyle:"modalBackground"
};
ModalBody.defaultProps=
{
  bodyStyle:"modalBody"
};