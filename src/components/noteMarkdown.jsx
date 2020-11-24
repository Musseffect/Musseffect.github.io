import React, { Component,PureComponent } from 'react';
import ReactMarkdown from "react-markdown";
import MathJax from 'react-mathjax';
import RemarkMathPlugin from 'remark-math';
import RemarkMacroPlugin from 'remark-macro';
import CodeRenderer from "./codeRenderer.jsx";

const macro = RemarkMacroPlugin();
macro.addMacro('figure',function(content,props,{transformer,eat})
{
    return {
        type:'figureNode',
        data:{
            hName:'div',
            classNames:['noteFigure']
        },
        children:transformer.tokenizeBlock(content,eat.now())
    }
})
class MarkdownImage extends Component{
  constructor(props){
      super(props);
      this.state = {show:false};
  }
  render(){
    const {show} = this.state;
    return <div>
      <img {...this.props} onClick={()=>{this.setState({show:!show})}}
    style={show?{maxWidth:"90%"}:{}} className="noteImage"/>
    </div>;
  }
}

function imageRenderer(props)
{
  return <MarkdownImage {...props} />
}
function getCoreProps(props) {
  return props['data-sourcepos'] ? {
    'data-sourcepos': props['data-sourcepos']
  } : {};
}

class NoteMarkdown extends PureComponent {
    constructor(props){
        super(props);
    }
    render(){
        const {onImageClick,onImagePush} = this.props;
        const newProps = Object.assign({
            plugins:[
                RemarkMathPlugin,
                macro.transformer 
            ]
        },this.props);
        newProps.renderers = Object.assign({
            table: (props)=><div className="noteTable"><table>{props.children}</table></div>,
            image: (props)=>{ 
              let index = onImagePush(props.src);
              return <img {...props} onClick={()=>{onImageClick(index)}}
              className="noteImage"/>;},
            code: CodeRenderer,
            paragraph:(props)=>
                <p className="paragraph">{props.children}</p>,
            math: (props) => 
              <div style={{overflowX:"auto",padding:"0 1px"}}><MathJax.Node formula={props.value} /></div>,
            inlineMath: (props) =>
              <MathJax.Node inline formula={props.value} />,
            figureNode: (props) => 
              React.createElement(props.data.hName,{className:props.data.classNames.reduce((prev,cur,ind,arr)=>{return prev+cur+(ind==arr.length-1?"":" ");},"")},props.children)
        },this.props.renderers);
        return (
        <MathJax.Provider input="tex">
              <ReactMarkdown {...newProps} />
        </MathJax.Provider>);
    }
}

export default NoteMarkdown;