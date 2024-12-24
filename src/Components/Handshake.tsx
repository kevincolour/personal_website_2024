import {
  animate,
  frame,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useSpring,
  useTransform,
} from "framer-motion";
import { MutableRefObject, RefObject, useEffect, useRef } from "react";
import {
  HANDSHAKE_FINISH,
  HANDSHAKE_INCREMENT,
  HANDSHAKE_PROGRESS_MODIFIER,
  MAX_DISTANCE,
  fillColours,
} from "../Utils/constants";
import { HandSVG } from "../Assets/HandSVG";
import React from "react";
import { HandshakeTransition } from "../Animations/HandshakeTransition";

type HandshakeProps = {
  finishCallback: () => void;
};

export const Handshake = (props: HandshakeProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const spring = { damping: 10, stiffness: 100, restDelta: 0.001 };
  const [isHoveringInterval, setIsHoveringInterval] = React.useState<
    NodeJS.Timer | undefined
  >();
  const [isFinishedAnimation, setIsFinishedAnimation] =
    React.useState<boolean>(false);

  const [fillColour, setFillColour] = React.useState<string>("");

  const opacity = useMotionValue(0);
  const yPoint = useMotionValue(0);
  const rotatePoint = useMotionValue(0);

  const handshakeProgress = useMotionValue(0);
  const y = useSpring(yPoint, spring);
  const rotate = useSpring(rotatePoint, spring);

  //   const x1 = handSVG(ref, "box", { x, y, rotate });
  const handleDrag = (event: MouseEvent) => {
    // const clientX = event.clientX;
    console.log("handledrag");
    const clientY = event.clientY;
    const element = ref.current;
    if (element) {
      const yVal = bindValue(
        clientY - element.offsetTop - element.offsetHeight / 2
      );

      const rotateCur = (yVal / MAX_DISTANCE) * -45;
      rotatePoint.set(rotateCur);

      const incrementalProgress =
        Math.abs(rotate.getPrevious() - rotateCur) /
        HANDSHAKE_PROGRESS_MODIFIER;

      const handshakeProgressCur = handshakeProgress.get();

      if (handshakeProgressCur >= HANDSHAKE_FINISH) {
        // done
        setIsFinishedAnimation(true);
        props.finishCallback();
      }
      if (incrementalProgress > 0.001) {
        console.log(incrementalProgress, handshakeProgressCur);
        const newValue =
          handshakeProgressCur + incrementalProgress + HANDSHAKE_INCREMENT;
        handshakeProgress.set(newValue);

        // const index = Math.floor((newValue * 100) / (100 / fillColours.length));
        const index =
          Math.floor((newValue * 100) / (100 / 30)) % fillColours.length;
        const fillColour = fillColours[index];
        console.log("index", index, fillColour);
        setFillColour(fillColour);
      } else {
        handshakeProgress.set(handshakeProgressCur + HANDSHAKE_INCREMENT);
      }
    }
  };

  const handleDragEnd = (event: MouseEvent) => {
    rotatePoint.set(0);
    handshakeProgress.set(0);

    //handle bug
    setIsHoveringInterval(undefined);
    clearInterval(isHoveringInterval);
  };

  const handleHoverStart = () => {
    const interval = setInterval(() => {
      const handshakeProgressCur = handshakeProgress.get();
      handshakeProgress.set(handshakeProgressCur + HANDSHAKE_INCREMENT);
    }, 10);
    if (!isHoveringInterval) {
      setIsHoveringInterval(interval);
    }
  };

  const handleHoverEnd = () => {
    setIsHoveringInterval(undefined);
    clearInterval(isHoveringInterval);
    handshakeProgress.set(0);
  };

  let animateOptions = { opacity: 1, rotate: 0, x: 0, y: 0, scale: 1 };
  if (isHoveringInterval) {
    animateOptions.scale = 1.2;
  }
  let animateOptionsFinished = {
    x: [0, 300],
    y: [0, 300],
    rotate: [0, -90],
    scale: [1, 1],
  };

  return (
    <div>
      <motion.div
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
        // onHoverEnd={handleHoverEnd}
        // onHoverStart={handleHoverStart}
        dragConstraints={{
          left: 10,
          right: 0,
          top: 0,
          bottom: 0,
        }}
        dragElastic={0.2}
        drag={!isFinishedAnimation}
        dragSnapToOrigin
        ref={ref}
        className="box"
        style={{ rotate }}
        initial={{ opacity: 0, rotate: -90, x: 300, y: 300 }}
        animate={isFinishedAnimation ? animateOptionsFinished : animateOptions}
        transition={isFinishedAnimation ? { duration: 1 } : { duration: 1 }}
      >
        <HandSVG
          fillColour={fillColour}
          handshakeProgress={handshakeProgress}
          finished={isFinishedAnimation}
        />
      </motion.div>
    </div>
  );
  //   return x1;
};

const bindValue = (val: number) => {
  const valuePinnedPositiveWay = Math.min(MAX_DISTANCE, val);
  const valuePinnedNegativeAsWell = Math.max(
    -1 * MAX_DISTANCE,
    valuePinnedPositiveWay
  );
  return valuePinnedNegativeAsWell;
};
