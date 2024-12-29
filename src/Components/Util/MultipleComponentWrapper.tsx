import React, { PropsWithChildren, createRef, useEffect } from "react";

import { MyComponentWrapper } from "./MyComponentWrapper";
import { createRoot } from "react-dom/client";
import { ThinkingAnimation } from "../ThinkingAnimation";
type MultipleComponentWrapperProps = {
  components: JSX.Element[];
  animationCompleteCallback?: () => void;
} & PropsWithChildren;

export const MultipleComponentWrapper = (
  props: MultipleComponentWrapperProps
) => {
  const [counter, setCounter] = React.useState<number>(0);
  console.log("rerender multiple");
  React.useEffect(() => {
    const interval = window.setInterval(() => {
      if (counter < props.components.length) {
        setCounter(counter + 1);
      }
    }, 4000);

    return () => window.clearInterval(interval);
  }, [counter]);

  const mountedComponents = [];
  const componentsWithWrapper = props.components.map((ele, index) => {
    return (
      <MyComponentWrapper key={index} transitionObj={{ delay: 0 }}>
        {ele}
      </MyComponentWrapper>
    );
  }, []);

  const componentsWithDelay = componentsWithWrapper.slice(0, counter);
  return (
    <>
      {counter != props.components.length && <ThinkingAnimation />}
      <div style={{ marginBottom: "50px" }}>{componentsWithDelay}</div>
    </>
  );
};
