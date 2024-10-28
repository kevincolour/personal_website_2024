import { CSSProperties, useContext } from "react";
import { MyComponent, MyComponentProps } from "../Utils/types";
import { InitialGreeting } from "./InitialGreeting";
import React from "react";
import { motion } from "framer-motion";
import { useSelectedComponentContext } from "../Context";

export const ResumeBody: React.FC<MyComponentProps> = (
  props: MyComponentProps
) => {
  const [isClicked, setIsClicked] = React.useState<boolean>(false);
  const { currentComponent, setCurrentComponentCallback } =
    useSelectedComponentContext();

  const onClickHandlerOption1 = () => {
    const resumeComponent: MyComponent = {
      name: "ResumeWork",
      index: 3,
    };
    setCurrentComponentCallback(resumeComponent);
  };
  return (
    <>
      <div>resume</div>

      <div onClick={onClickHandlerOption1}>option1Resume</div>
    </>
  );
};
