import React, { useEffect, useLayoutEffect } from "react";
import HtmlToReact from "html-to-react";
import StyleCustomComponent from "./SytleCustomComponent";

type CustomComponentProps = {
  html: string;
  plainJs?: string[];
  scriptsUrls?: string[];
  proccessingInstructions?: any[];
  plainCss?: string[];
  cssUrls?: string[];
  config?: { isValidNode: boolean };
};

const HtmlToReactParser: any = HtmlToReact.Parser; /**TODO: Change any */
const htmlToReactParser = new HtmlToReactParser();

const CustomComponent = (props: CustomComponentProps): JSX.Element => {
  const {
    html,
    plainJs,
    scriptsUrls,
    proccessingInstructions,
    plainCss,
    cssUrls,
    config,
  } = props;
  const isValidNode = () => {
    return config?.isValidNode ?? true;
  };

  useLayoutEffect(() => {}, []);
  const OutputElment = htmlToReactParser.parseWithInstructions(
    html,
    isValidNode,
    proccessingInstructions
  );

  if (!html) return <div>NO HTML RECEIVED</div>;
  console.log("plaincssss", plainCss);

  return (
    <>
      {plainCss &&
        plainCss.map((plcss) => {
          return <StyleCustomComponent plainStyle={plcss} />;
        })}
      {OutputElment}
    </>
  );
};

export default CustomComponent;
