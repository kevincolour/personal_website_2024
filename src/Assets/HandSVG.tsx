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
import { HAND_PATH, OVAL_PATH } from "./paths";
import { HandshakeTransition } from "../Animations/HandshakeTransition";
import { InitialGreeting } from "../Components/InitialGreeting";
import { screenState } from "../Utils/types";
type HandSVGProps = {
  fillColour: string;
  handshakeProgress: MotionValue<any>;
  finished: boolean;
};

export const HandSVG = (props: HandSVGProps) => {
  const progressHandshake = props.handshakeProgress.get();

  const paths = [HAND_PATH, OVAL_PATH];
  // const [finished, setFinishsed] = useState(true);
  // const [pathIndex, setPathIndex] = useState(0);
  // const progress = useMotionValue(pathIndex);

  // // const fill = useTransform(progress, paths.map((getIndex)), colors);
  // const animationPath = useFlubber(progress, paths);
  // // const path = HAND_PATH;
  // React.useEffect(() => {
  //   let x: undefined | AnimationPlaybackControls = undefined;
  //   // if (progressHandshake > 0.7) {
  //   if (true) {
  //     console.log("here");
  //     x = animate(progress, pathIndex, {
  //       duration: 0.8,
  //       ease: "easeInOut",
  //       onComplete: () => {
  //         if (pathIndex === paths.length - 1) {
  //           progress.set(0);
  //           setPathIndex(1);
  //         } else {
  //           setPathIndex(pathIndex + 1);
  //         }
  //         console.log("complete");
  //       },
  //     });
  //   }
  //   return () => x?.stop();
  // }, []);

  const [currentScreen, setCurrentScreen] = React.useState<screenState>();

  const onAnimationComplete = () => {};
  return (
    <>
      <motion.svg
        onAnimationComplete={onAnimationComplete}
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
        (
        <motion.path
          stroke={props.finished ? "black" : props.fillColour}
          strokeWidth={4}
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
          style={{ pathLength: props.handshakeProgress }}
          // animate={{ fill: fillColour }}
          // initial={{ fill: "#FFFFFF", pathLength: 0 }}
          // transition={{ duration: 3 }}
          d={HAND_PATH}
        />
        )
      </motion.svg>
    </>
  );
};
