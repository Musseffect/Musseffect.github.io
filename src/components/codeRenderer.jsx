import React, { PureComponent  } from 'react';
import { LightAsync as SyntaxHighlighter } from 'react-syntax-highlighter';
import glsl from 'react-syntax-highlighter/dist/esm/languages/hljs/glsl';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import cpp from 'react-syntax-highlighter/dist/esm/languages/hljs/cpp';
import python from 'react-syntax-highlighter/dist/esm/languages/hljs/python';
import typescript from 'react-syntax-highlighter/dist/esm/languages/hljs/typescript';
import vs2015 from 'react-syntax-highlighter/dist/esm/styles/hljs/vs2015';
SyntaxHighlighter.registerLanguage('glsl',glsl);
SyntaxHighlighter.registerLanguage('js',js);
SyntaxHighlighter.registerLanguage('cpp',cpp);
SyntaxHighlighter.registerLanguage('python',python);
SyntaxHighlighter.registerLanguage('typescript',typescript);


class CodeRenderer extends PureComponent  {
  
    render() {
      const { language, value } = this.props;
      return (
        <SyntaxHighlighter language={language} style={vs2015}>
          {value}
        </SyntaxHighlighter>
      );
    }
  }

  CodeRenderer.defaultProps={
      language:null
  }
  
  export default CodeRenderer;