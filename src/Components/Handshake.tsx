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
import { HANDSHAKE_PROGRESS_MODIFIER, MAX_DISTANCE } from "../Utils/constants";
import { HandSVG } from "../Assets/HandSVG";
import React from "react";

export const Handshake = () => {
  const ref = useRef<HTMLDivElement>(null);
  const spring = { damping: 10, stiffness: 100, restDelta: 0.001 };

  const opacity = useMotionValue(0);
  const yPoint = useMotionValue(0);
  const rotatePoint = useMotionValue(0);

  const handshakeProgress = useMotionValue(0);
  const y = useSpring(yPoint, spring);
  const rotate = useSpring(rotatePoint, spring);

  useMotionValueEvent(rotate, "change", (current: any) => {
    // const incrementalProgress =
    //   Math.abs(rotate.getPrevious() - current) / HANDSHAKE_PROGRESS_MODIFIER;
    // const handshakeProgressCur = handshakeProgress.get();
    // // console.log(incrementalProgress, handshakeProgressCur);
    // handshakeProgress.set(handshakeProgressCur + incrementalProgress);
  });

  useMotionValueEvent(rotate, "animationComplete", () => {
    console.log("animationcomplete");
  });

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
      if (incrementalProgress > 0.001) {
        console.log(incrementalProgress, handshakeProgressCur);
        handshakeProgress.set(
          handshakeProgressCur + incrementalProgress + 0.0001
        );
      } else {
        handshakeProgress.set(handshakeProgressCur + 0.0001);
      }
    }
  };

  const handleDragEnd = (event: MouseEvent) => {
    rotatePoint.set(0);
    handshakeProgress.set(0);
  };
  return (
    <motion.div
      onDrag={handleDrag}
      onDragEnd={handleDragEnd}
      dragConstraints={{
        left: 10,
        right: 0,
        top: 0,
        bottom: 0,
      }}
      dragElastic={0.2}
      drag
      dragSnapToOrigin
      ref={ref}
      className="box"
      style={{ rotate }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, x: -100 }}
      transition={{ duration: 4 }}
    >
      <HandSVG fillColour="#880808" handshakeProgress={handshakeProgress} />
    </motion.div>
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
