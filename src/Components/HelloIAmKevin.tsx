import { CSSProperties, useContext } from "react";
import { MyComponent, MyComponentProps } from "../Utils/types";
import React from "react";
import { motion } from "framer-motion";
import { useSelectedComponentContext } from "../Context";

export const HelloIAmKevin: React.FC<MyComponentProps> = (
  props: MyComponentProps
) => {
  const [isClicked, setIsClicked] = React.useState<boolean>(false);
  const { currentComponent, setCurrentComponentCallback } =
    useSelectedComponentContext();

  const onClickHandlerOption1 = () => {
    const resumeComponent: MyComponent = {
      name: "InitialIntro",
      index: 0,
    };
    setCurrentComponentCallback(resumeComponent);
  };
  return (
    <>
      <div
        style={{ position: "fixed", top: 0 }}
        onClick={onClickHandlerOption1}
      >
        Hello I Am Kevin
      </div>
    </>
  );
};
