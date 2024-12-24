import {
  AnimationPlaybackControls,
  MotionValue,
  animate,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { interpolate, toRect } from "flubber";
import React, { useState } from "react";
import { getIndex, useFlubber } from "../Utils/use-flubber";
import { HAND_PATH, OVAL_PATH } from "../Assets/paths";
import profilepic from "../Assets/KKprofile.jpeg";
import { transitionKeysAreEqual } from "@fluentui/react";
import { screenState } from "../Utils/types";
type HandshakeTransitionProps = {
  fillColour?: string;
  setCurrentScreen: (screenState: screenState) => void;
};

export const HandshakeTransition = (props: HandshakeTransitionProps) => {
  const paths = [HAND_PATH, OVAL_PATH];

  const animationPath = OVAL_PATH;
  const animatestyle = { y: "calc(-40vh - 10px)", rotate: 90 };

  const onAnimationComplete = () => {};

  const animationDoneHandler = () => {
    props.setCurrentScreen("initial");
  };
  return (
    <motion.div
      animate={{
        opacity: [0, 1],
        top: [null, 10],
        width: [null, 60],
        height: [null, 60],
      }}
      onAnimationComplete={animationDoneHandler}
      style={{ position: "absolute", width: "100%" }}
      transition={{ duration: 3 }}
    >
      <div>
        <img
          style={{ borderRadius: 150, width: "100%" }}
          src={profilepic}
        ></img>
      </div>

      {/* <motion.svg
        onAnimationComplete={onAnimationComplete}
        animate={animatestyle}
        style={{
          textAlign: "center",
          position: "relative",
          // top: -200,
          width: "100%",
          filter: "drop-shadow( 3px 3px 2px rgba(0, 0, 0, .7))",
        }}
        transition={{ duration: 4 }}
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0px"
        y="0px"
        viewBox="0 0 100 100"
        // whileHover={{ scale: 1.2 }}
        // animate={{ scale: 1.2}}
        transform="rotate(-90) scale(1 1) "

        // initial="hidden"
        // animate="visible"
      >
        <motion.path
          stroke={"black"}
          strokeWidth={3}
          style={{ pathLength: 0.7 }}
          d={animationPath}
        />
      </motion.svg> */}
    </motion.div>
  );
};
