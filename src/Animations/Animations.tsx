import {
  animate,
  delay,
  motion,
  useAnimationFrame,
  useMotionValue,
  useSpring,
} from "framer-motion";
import React from "react";

export const Animations = () => {
  const x1 = useMotionValue(100);
  const x2 = useSpring(x1);

  const y1 = useMotionValue(100);
  const y2 = useSpring(y1);
  console.log("render animations");
  const rotate1 = useMotionValue(90);
  const rotate2 = useSpring(rotate1);
  useAnimationFrame((time, delta) => {
    // console.log(time, delta);

    if (time < 2000) {
      if (time % 500 < 250) {
        // y2.set(20);
        rotate2.set(70);
      } else if (time % 500 < 500) {
        // y2.set(200);
        rotate2.set(110);
      }
    } else {
      rotate2.set(90);
    }
  });
  React.useEffect(() => {
    // const interval = window.setInterval(() => {
    //   //   x1.set(1000);
    //   //   y2.set(y2.getPrevious() * -1);
    //   const prev = rotate2.getPrevious();
    //   if (prev > 90) {
    //     rotate2.set(80);
    //   } else {
    //     rotate2.set(100);
    //   }
    // }, 100);
    // window.setTimeout(() => {
    //   //   x1.set(1000);
    //   //   rotate2.set(92);
    // }, 1000);
    // return () => clearInterval(interval);
  }, []);
  return (
    <motion.div
      style={{
        position: "absolute",
        x: x2,
        y: y2,
        width: "20%",
        height: "1%",
        backgroundColor: "red",
        rotate: rotate2,
        transformOrigin: "right",
        borderRadius: 20,
      }}
    >
      t
    </motion.div>
  );
};
