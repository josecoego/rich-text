import React, { useEffect, useLayoutEffect } from "react";
import HtmlToReact from "html-to-react";
import StyleCustomComponent from "./SytleCustomComponent";

type CustomComponentProps = {
  html: string;
  scriptContents?: string[];
  scriptLinks?: string[];
  proccessingInstructions?: any[];
  plainCss?: string[];
  stylesheetLinks?: string[];
  config?: { isValidNode: boolean };
};

const HtmlToReactParser: any = HtmlToReact.Parser; /**TODO: Change any */
const htmlToReactParser = new HtmlToReactParser();

const CustomComponent = (props: CustomComponentProps): JSX.Element => {
  const {
    html,
    scriptContents,
    scriptLinks,
    proccessingInstructions,
    plainCss,
    stylesheetLinks,
    config,
  } = props;
  const isValidNode = () => {
    return config?.isValidNode ?? true;
  };

  useLayoutEffect(() => {
    //create links to css on head.
    const linkElements = stylesheetLinks?.map((link) => {
      const linkElement = document.createElement("link");
      linkElement.href = link;
      linkElement.rel = "stylesheet";
      return linkElement;
    });
    linkElements?.forEach((linkElement) => {
      document.head.appendChild(linkElement);
    });
    return () => {
      linkElements?.forEach((linkElement) => {
        document.head.removeChild(linkElement);
      });
    };
  }, []);
  useLayoutEffect(() => {
    const scriptElements = scriptContents?.map((content) => {
      const script = document.createElement("script");
      script.innerHTML = content;
      return script;
    });

    scriptElements?.forEach((scriptElement) => {
      document.body.appendChild(scriptElement);
    });

    return () => {
      scriptElements?.forEach((scriptElement) => {
        document.body.removeChild(scriptElement);
      });
    };
  }, []);
  useLayoutEffect(() => {
    const scriptElements = scriptLinks?.map((link) => {
      const script = document.createElement("script");
      script.src = link;
      return script;
    });

    scriptElements?.forEach((scriptElement) => {
      document.body.appendChild(scriptElement);
    });

    return () => {
      scriptElements?.forEach((scriptElement) => {
        document.body.removeChild(scriptElement);
      });
    };
  }, []);

  if (!html) return <div>NO HTML RECEIVED</div>;

  const OutputElment = htmlToReactParser.parseWithInstructions(
    html,
    isValidNode,
    proccessingInstructions
  );

  return (
    <>
      {plainCss &&
        plainCss.map((plcss, index) => {
          return <StyleCustomComponent key={index} plainStyle={plcss} />;
        })}
      {OutputElment}
    </>
  );
};

export default CustomComponent;
