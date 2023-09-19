import React from 'react';
import {marked} from "https://esm.sh/marked";
import { useState } from 'react';

marked.setOptions({
  breaks: true,
  });

const defaultMarkdown = `
# Welcome to my React Markdown Previewer!
## This is a sub-heading...
### And here's some other cool stuff:
Heres some code, \`<div></div>\`, between 2 backticks.
\`\`\`
// this is multi-line code:
function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
You can also make text **bold**... whoa!
Or _italic_.
Or... **_both!_**
There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

function App() {
  const [markdownText, setMarkdownText] = useState(defaultMarkdown);
  const [editorMaximized, setEditorMaximized] = useState(false);
  const [previewMaximized, setPreviewMaximized] = useState(false);

  const classes = editorMaximized
? ['editorWrap maximized', 'previewWrap hide', 'fa fa-compress']
: previewMaximized
? ['editorWrap hide', 'previewWrap maximized', 'fa fa-compress']
: ['editorWrap', 'previewWrap', 'fa fa-arrows-alt'];

const handleChange = (e) => {
  setMarkdownText(e.target.value);
};

const handleEditorMaximize = () => {
  setEditorMaximized(!editorMaximized);
};

const handlePreviewMaximize = () => {
  setPreviewMaximized(!previewMaximized);
};

  return (
    <div className="App">
      <Header />
      <div className={classes[0]}>
         <Toolbar 
            icon={classes[2]}
            onClick={handleEditorMaximize}
         text="Editor" />
      {/* <textarea
          name="editor"
          id="editor"
          value={markdownText}
          onChange={(e) => setMarkdownText(e.target.value)}
        ></textarea> */}
        <Editor markdown={markdownText} onChange={handleChange} />
        </div>
        <div className='previewWrap'>
        <Toolbar 
         icon={classes[2]}
         onClick={handlePreviewMaximize}
        text="Previewer" />
        {/* <div id='preview' dangerouslySetInnerHTML={{
      __html: marked(markdownText)
    }}></div> */}
        <Preview markdown={markdownText} />
    </div>
    </div>
  );
}


/*Toolbar variable */
const Toolbar = (props) => {
  return (
  <div className='toolbar'>
  <i className="fa-brands fa-free-code-camp" />
  <h3>{props.text}</h3>
  <i className={props.icon} onClick={props.onClick}/>
  </div>
  );
}

const Editor = (props) => {
  return (
    <textarea
      id="editor"
      onChange={props.onChange}
      type="text"
      value={props.markdown}
    />
  );
};

const Preview = (props) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: marked(props.markdown)
      }}
      id="preview"
    />
  );
};


const Header = () => {
  return (
    <h1 style={{textAlign: 'center'}}>Markdown Previewer</h1>
  );
}

export default App;
