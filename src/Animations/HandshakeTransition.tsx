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
  //   const [finished, setFinishsed] = useState(true);
  //   const [pathIndex, setPathIndex] = useState(0);
  //   const progress = useMotionValue(pathIndex);

  //   // const fill = useTransform(progress, paths.map((getIndex)), colors);
  //   const animationPath = useFlubber(progress, paths);
  //   console.log(animationPath);
  //   // const path = HAND_PATH;
  //   React.useEffect(() => {
  //     console.log("here");
  //     const animate2 = animate(progress, pathIndex, {
  //       duration: 1,
  //       ease: "easeInOut",
  //       onUpdate: (latest) => console.log(latest, "latest"),
  //       onComplete: () => {
  //         setPathIndex(pathIndex + 1);
  //         // console.log("complete");
  //       },
  //     });
  //     return () => animate2.stop();
  //   }, [pathIndex]);
  return (
    <motion.path
      stroke={props.fillColour}
      strokeWidth={3}
      // initial={{
      //   scaleX: 2,
      //   scaleY: 2,
      //   rotate: 10,
      //   background: "red",
      // }}

      // fill={"#b5ae82"}

      // fill={props.fillColour}
      // variants={draw}
      // custom={1}
      style={{ pathLength: 0.7 }}
      // animate={{ fill: fillColour }}
      // initial={{ fill: "#FFFFFF", pathLength: 0 }}
      // transition={{ duration: 3 }}
      d={animationPath}
    />
  );
};
