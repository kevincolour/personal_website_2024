import React, { PropsWithChildren, createRef, useEffect } from "react";

import { MyComponentWrapper } from "./MyComponentWrapper";
import { createRoot } from "react-dom/client";
import { ThinkingAnimation } from "../ThinkingAnimation";
import { textContent } from "../../Utils/helpersGobal";
import { TYPING_CONSTANT } from "../../Utils/constants";
type MultipleComponentWrapperProps = {
  components: JSX.Element[];
  animationCompleteCallback?: () => void;
  timeToTypeArray: number[];
} & PropsWithChildren;

export const MultipleComponentWrapperInner = (
  props: MultipleComponentWrapperProps
) => {
  const [currentElements, setCurrentElements] = React.useState<JSX.Element[]>(
    []
  );
  console.log("rerender multiple", props);
  React.useEffect(() => {
    // const interval = window.setInterval(() => {
    //   if (counter < props.components.length) {
    //     setCounter(counter + 1);
    //   }
    // }, 4000);

    // return () => window.clearInterval(interval);
    props.components.map((ele, index) => {
      window.setTimeout(() => {
        setCurrentElements((prev) => [...prev, ele]);
      }, props.timeToTypeArray[index]);
    });
  }, []);

  const componentsWithWrapper = currentElements.map((ele, index) => {
    return (
      <MyComponentWrapper key={index} transitionObj={{ delay: 0 }}>
        {ele}
      </MyComponentWrapper>
    );
  }, []);

  return (
    <>
      {currentElements.length != props.components.length && (
        <ThinkingAnimation />
      )}
      <div style={{ marginBottom: "50px" }}>{componentsWithWrapper}</div>
    </>
  );
};
