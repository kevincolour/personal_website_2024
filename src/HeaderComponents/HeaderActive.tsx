import { animate, delay, motion, useMotionValue } from "framer-motion";
import { CSSProperties, createRef, useEffect, useState } from "react";
import { useSelectedComponentContext, useUserData } from "../Context";
import { MyComponent, UserData } from "../Utils/types";
import messagetriangle from "../Assets/bluemessagUpscale.png";
import React from "react";
import { BORDER_RADIUS_OF_MESSAGE, TRIANGLE_HEIGHT } from "../Utils/constants";
type HeaderActiveProps = {
  name: string;
  typingString?: string;
};

export const HeaderActive = (props: HeaderActiveProps) => {
  const opacity = useMotionValue(0);
  const { currentUserData, setCurrentUserDataCallback } = useUserData();
  const [triangleTop, setTriangleTop] = React.useState<number>(-1);

  const [animationDone, setAnimationDone] = React.useState<boolean>(false);
  const ref = createRef<HTMLDivElement>();
  useEffect(() => {
    //push seen comonents?
    const userData: UserData = structuredClone(currentUserData);
    if (userData.seenComponents.indexOf(props.name) === -1) {
      userData.seenComponents.push(props.name);
      userData.currentProgress = currentUserData.currentProgress + 1;
      setCurrentUserDataCallback(userData);
    }
    console.log("useeffect");
    const val = ref.current?.clientHeight;
    if (val) {
      const top = ref.current?.getBoundingClientRect().top;
      const valToSet = ref.current?.clientHeight + top - TRIANGLE_HEIGHT;
      setTriangleTop(valToSet);
      console.log(val);
    }
  }, []);

  const triangleStyle =
    triangleTop === -1 ? {} : { top: triangleTop + 3, right: 0 };
  const yValue = window.innerHeight - 200;
  return (
    <motion.div
      animate={{
        x: [-200, 30, 0],
        y: [yValue, yValue, 0],
      }}
      onAnimationComplete={() => setAnimationDone(true)}
      transition={{ damping: 20, duration: 0.15 }}
      style={{
        marginLeft: "20%",
        width: "80%",
        display: "flex",
        justifyContent: "end",
        zIndex: 10,
      }}
    >
      <div
        //   layout
        style={{ ...stylesActive }}
        // transition={{ duration: 2 }}
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        ref={ref}
      >
        {/* <div style={arrowRightStyle} className="arrow-right"></div> */}
        {props.typingString}
      </div>
      {triangleTop != -1 && animationDone && (
        <img
          src={messagetriangle}
          style={{
            ...triangleStyle,
            position: "absolute",
            height: TRIANGLE_HEIGHT - 2,
            width: TRIANGLE_HEIGHT * 2,
          }}
        ></img>
      )}
    </motion.div>
  );
};

const styles: CSSProperties = {
  border: "1px solid black",
  position: "relative",
};

const stylesActive: CSSProperties = {
  background: "#1b86fe",
  color: "white",
  margin: 10,
  marginLeft: 8,
  borderRadius: BORDER_RADIUS_OF_MESSAGE,
  position: "relative",
  padding: 15,
  textAlign: "left",
};

const arrowRightStyle: CSSProperties = {
  width: 0,
  height: 0,
  borderTop: "10px solid transparent",
  borderBottom: "10px solid transparent",
  borderLeft: "15px solid #147efb",
  position: "absolute",
  top: 50,
  right: -10,
};
//147efb
