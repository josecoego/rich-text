import React, { useEffect, useLayoutEffect } from "react";
import HtmlToReact from "html-to-react";
import Subtitle from "./components/Subtitle";
import CustomComponent from "./components/CutomComponent";

const HtmlToReactParser: any = HtmlToReact.Parser; /**TODO: Change any */
const htmlToReactParser = new HtmlToReactParser();
const processNodeDefinitions = new (
  HtmlToReact as any
).ProcessNodeDefinitions();

const processingInstructions = [
  {
    shouldProcessNode: function (node: any) {
      return true;
    },
    processNode: processNodeDefinitions.processDefaultNode,
  },
];

function App() {
  return (
    <CustomComponent
      html={"<h1 class='newborder'>Title</h1>"}
      plainCss={["h1 {background-color:red}", "h1 {color:white}"]}
      stylesheetLinks={["/assets/newstyles.css"]}
      proccessingInstructions={processingInstructions}
      scriptContents={["console.log('hi')"]}
      scriptLinks={["/assets/test.js"]}
    />
  );
  /*  const htmlInput =
    "<div id='test1' class='bg-red'><h1>Title</h1><h2 component='subtitle'>Subtitle H2</h2><p>A paragraph</p></div>";
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
      shouldProcessNode: function (node: any) {
        console.log("Nodeeeee", node.attribs);
        if (node.attribs?.component === "subtitle") return true;
        return false;
      },
      processNode: function (node: any, children: any) {
        return <Subtitle text={children} />;
      },
    },
    {
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
  ); */
}

export default App;
