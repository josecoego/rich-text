import React, { useEffect, useLayoutEffect } from "react";
import HtmlToReact from "html-to-react";

const HtmlToReactParser: any = HtmlToReact.Parser; /**TODO: Change any */
const htmlToReactParser = new HtmlToReactParser();

function App() {
  const htmlInput =
    "<div id='test1' class='bg-red'><h1>Title</h1><h2>Subtitle H2</h2><p>A paragraph</p></div>";
  const scriptContent = `console.log('hi')
    var button1 = document.getElementById('test1')
    button1.addEventListener('click', function(){
       console.log('click')
    })
  `;
  useLayoutEffect(() => {
    const script = document.createElement("script");
    script.innerHTML = scriptContent;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const processNodeDefinitions = new (
    HtmlToReact as any
  ).ProcessNodeDefinitions();
  const processingInstructions = [
    {
      // Anything else
      shouldProcessNode: function (node: any) {
        return true;
      },
      processNode: processNodeDefinitions.processDefaultNode,
    },
  ];

  const reactElement = htmlToReactParser.parseWithInstructions(
    htmlInput,
    () => {
      return true;
    },
    processingInstructions
  );

  return (
    <div className="App">
      <style>{`.bg-red{
      background-color: red;
    }`}</style>
      {reactElement}
      <button id="test2">Test2</button>
    </div>
  );
}

export default App;
