import React from "react";
import HtmlToReact from "html-to-react";

const HtmlToReactParser: any = HtmlToReact.Parser; /**TODO: Change any */
const htmlToReactParser = new HtmlToReactParser();

function App() {
  const htmlInput = "<div><h1>Title</h1><p>A paragraph</p></div>";
  const reactElement = htmlToReactParser.parse(htmlInput);
  return <div className="App">{reactElement}</div>;
}

export default App;
