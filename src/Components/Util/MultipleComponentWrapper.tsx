import React, { PropsWithChildren, createRef, useEffect } from "react";

import { MyComponentWrapper } from "./MyComponentWrapper";
import { createRoot } from "react-dom/client";
import { ThinkingAnimation } from "../ThinkingAnimation";
import { textContent } from "../../Utils/helpersGobal";
import { TYPING_CONSTANT } from "../../Utils/constants";
import { MultipleComponentWrapperInner } from "./MultipleComponentWrapperInner";
import { useSelectedComponentContext, useUserData } from "../../Context";
type MultipleComponentWrapperProps = {
  components: JSX.Element[];
  animationCompleteCallback?: () => void;
} & PropsWithChildren;

export const MultipleComponentWrapper = (
  props: MultipleComponentWrapperProps
) => {
  const { currentUserData, setCurrentUserDataCallback } = useUserData();
  const { currentComponent, setCurrentComponentCallback } =
    useSelectedComponentContext();
  const timeToTypeArray = React.useMemo(
    () =>
      props.components.map((ele, index) => {
        console.log(ele);
        const getTimeToTypeText = (ele: JSX.Element, index: number) => {
          const textString = textContent(ele);
          const timeToTypeInMs = Math.floor(
            (textString.length / TYPING_CONSTANT) * 60 * 1000
          );
          return timeToTypeInMs;
        };
        const timeToTypeInMs = getTimeToTypeText(ele, index);
        return timeToTypeInMs;
      }),
    []
  );

  let timeToTypeAccumulate: number[] = [];

  timeToTypeArray.reduce((sum, current) => {
    if (currentUserData.seenComponents.indexOf(currentComponent.name) > -1) {
      timeToTypeAccumulate.push(0);
      return 0;
    } else {
      sum += current;
      timeToTypeAccumulate.push(sum);
      return sum;
    }
  }, 0);

  return (
    <>
      <MultipleComponentWrapperInner
        components={props.components}
        timeToTypeArray={timeToTypeAccumulate}
      />
    </>
  );
};
