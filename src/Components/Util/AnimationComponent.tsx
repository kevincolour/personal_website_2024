import React, { PropsWithChildren, useEffect } from "react";
import { CSSProperties, FC } from "react";

import { motion } from "framer-motion";
import { ThinkingAnimation } from "../ThinkingAnimation";

type AnimationComponentProps = {
  // name: string;
  transitionObj?: any;
} & PropsWithChildren;

export const AnimationComponent = (props: AnimationComponentProps) => {
  const numBetween0and1 = Math.random() * 1;

  //range is 1 -> 2
  const delay = 1 + Math.round(numBetween0and1 * 10) / 10;
  // alert(delay);
  const transition = props.transitionObj
    ? props.transitionObj
    : { delay: delay };

  return (
    <>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={transition}
      >
        <ThinkingAnimation />
      </motion.div>
      <motion.div
        style={{ width: "100%" }}
        transition={transition}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        // transition={{ duration: 1, delay: 1 }}
      >
        {props.children}
      </motion.div>
    </>
  );
};
