import React, { useEffect } from "react";
import HtmlToReact from "html-to-react";

const HtmlToReactParser: any = HtmlToReact.Parser; /**TODO: Change any */
const htmlToReactParser = new HtmlToReactParser();

function App() {
  const htmlInput =
    "<div id='test1' class='bg-red'><h1>Title</h1><p>A paragraph</p></div>";
  const scriptContent = `console.log('hi')
    var button1 = document.getElementById('test1')
    button1.addEventListener('click', function(){
       alert('click')
    })
  `;

  const reactElement = htmlToReactParser.parse(htmlInput);
  useEffect(() => {
    const script = document.createElement("script");
    script.innerHTML = scriptContent;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
