marked.setOptions({
  breaks: true,
});

const markedRenderer = new marked.Renderer();

function App() {
  const [text, setText] = React.useState(placeholder);

  function editing(event) {
    setText(event.target.value);
  }

  return (
    <div>
      <div className="for-editor container-fluid border border-dark shadow-lg p-3 mb-5 bg-white rounded">
      <nav><h4>Editor</h4></nav>
      <textarea
        name="text"
        id="editor"
        className="editor"
        cols="50"
        rows="10"
        value={text}
        onChange={editing}
      ></textarea>
      </div>
      <Preview markdown={text} />
    </div>
  );
}

function Preview(props) {
  return (
    <div className="for-previewer container border border-dark shadow-lg p-3 mb-5 bg-white rounded">
    <nav><h4>Previewer</h4></nav>
    <div
      dangerouslySetInnerHTML={{
        __html: marked(props.markdown, { renderer: markedRenderer }),
      }}
      id="preview"
      className="container-fluid"
    />
    </div>
  );
}

const placeholder = `# Welcome to my React Markdown Previewer!

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
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
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

ReactDOM.render(<App />, document.getElementById("root"));
