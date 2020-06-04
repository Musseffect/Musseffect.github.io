import React, { Component } from 'react';
import ReactMarkdown from "react-markdown";
import MathJax from 'react-mathjax';
import RemarkMathPlugin from 'remark-math';
import RemarkMacroPlugin from 'remark-macro';

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

class MarkdownRender extends Component 
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        const newProps = Object.assign(
        {
            plugins:[
                RemarkMathPlugin,
                macro.transformer /*,
                [shortcodes,
                    {
                      startBlock: "[[",
                      endBlock: "]]"
                    }]*/
            ]
        },this.props);
        newProps.renderers = Object.assign({
            paragraph:(props)=>
                <p className="paragraph">{props.children}</p>,
            math: (props) => 
              <MathJax.Node formula={props.value} />,
            inlineMath: (props) =>
              <MathJax.Node inline formula={props.value} />,
              figureNode: (props) => 
              React.createElement(props.data.hName,{className:props.data.classNames.reduce((prev,cur,ind,arr)=>{return prev+cur+(ind==arr.length-1?"":" ");},"")},props.children),
              /*shortcode: shortcodeRenderer*/
        },this.props.renderers);
        return (
        <MathJax.Provider input="tex">
            <ReactMarkdown {...newProps} />
        </MathJax.Provider>);
    }
}

export default MarkdownRender;