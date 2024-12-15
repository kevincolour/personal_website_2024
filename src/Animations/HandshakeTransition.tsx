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
type HandshakeTransitionProps = {
  fillColour: string;
};

export const HandshakeTransition = (props: HandshakeTransitionProps) => {
  const paths = [HAND_PATH, OVAL_PATH];

  const animationPath = OVAL_PATH;

  return (
    <motion.path
      stroke={props.fillColour}
      strokeWidth={3}
      style={{ pathLength: 0.7 }}
      d={animationPath}
    />
  );
};
