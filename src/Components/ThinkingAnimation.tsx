import React from "react";
import { CSSProperties, FC } from "react";
import { MyComponentProps } from "../Utils/types";
import { motion } from "framer-motion";
import thinkingAnimation from "../Assets/thinkingtransparent.gif";
interface PreviousComponentsProps {}
export const ThinkingAnimation = () => {
  //need some state to track components in past
  //need callback from here to component to set next component

  return (
    <>
      <img style={styles} src={thinkingAnimation}></img>
    </>
  );
};

const styles: CSSProperties = {
  width: "20%",
  maxWidth: "35%",
  //   maxHeight: "10%",
  position: "absolute",
  bottom: "0",
  left: "0",
};
