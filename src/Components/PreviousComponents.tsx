import React from "react";
import { CSSProperties, FC } from "react";
import { MyComponentProps } from "../Utils/types";
import { motion } from "framer-motion";

interface PreviousComponentsProps {
  prevComponents: string[] | undefined;
}
export const PreviousComponents = (props: PreviousComponentsProps) => {
  //need some state to track components in past
  //need callback from here to component to set next component

  return (
    <>
      {props.prevComponents?.map((ele) => (
        <motion.div layout style={styles}>
          {" "}
          {ele}
        </motion.div>
      ))}
    </>
  );
};

const styles: CSSProperties = {
  fontSize: "12px",
  borderBottom: "1px solid black",
};
