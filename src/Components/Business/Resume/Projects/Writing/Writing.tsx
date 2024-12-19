import { CSSProperties, useContext } from "react";
import { MyComponent, MyComponentProps } from "../../../../../Utils/types";
import { InitialGreeting } from "../../../../InitialGreeting";
import React from "react";
import { motion } from "framer-motion";
import { useSelectedComponentContext } from "../../../../../Context";
import { getStyles } from "../../../../../Utils/styles";
import { MyComponentWrapper } from "../../../../Util/MyComponentWrapper";

export const Writing: React.FC<MyComponentProps> = (
  props: MyComponentProps
) => {
  const [isClicked, setIsClicked] = React.useState<boolean>(false);
  const { currentComponent, setCurrentComponentCallback } =
    useSelectedComponentContext();

  const onClickHandlerOption1 = () => {
    const businessComponent: MyComponent = {
      name: "asdf",
      index: 2,
    };
    setCurrentComponentCallback(businessComponent);
  };
  const styles = getStyles();
  return (
    <>
      <MyComponentWrapper>Here is my </MyComponentWrapper>
    </>
  );
};
