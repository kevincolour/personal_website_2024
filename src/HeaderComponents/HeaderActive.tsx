import { animate, delay, motion, useMotionValue } from "framer-motion";
import { CSSProperties, createRef, useEffect, useState } from "react";
import { useSelectedComponentContext, useUserData } from "../Context";
import { MyComponent, UserData } from "../Utils/types";
import messagetriangle from "../Assets/bluemessagetriange.png";
import React from "react";
import { TRIANGLE_HEIGHT } from "../Utils/constants";
type HeaderActiveProps = {
  name: string;
  typingString?: string;
};

export const HeaderActive = (props: HeaderActiveProps) => {
  const opacity = useMotionValue(0);
  const { currentUserData, setCurrentUserDataCallback } = useUserData();
  const [triangleTop, setTriangleTop] = React.useState<number>(-1);
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
      const valToSet = ref.current?.clientHeight + top - TRIANGLE_HEIGHT + 3;
      setTriangleTop(valToSet);
      console.log(val);
    }
  }, []);

  const triangleStyle =
    triangleTop === -1 ? {} : { top: triangleTop, right: 5 };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "end",
        zIndex: 10,
      }}
    >
      <motion.div
        //   layout
        style={{ ...stylesActive }}
        // transition={{ duration: 2 }}
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        ref={ref}
      >
        {/* <div style={arrowRightStyle} className="arrow-right"></div> */}
        {props.typingString}
      </motion.div>
      {triangleTop != -1 && (
        <img
          src={messagetriangle}
          style={{
            ...triangleStyle,
            position: "fixed",
            height: TRIANGLE_HEIGHT - 3,
          }}
        ></img>
      )}
    </div>
  );
};

const styles: CSSProperties = {
  border: "1px solid black",
  position: "relative",
};

const stylesActive: CSSProperties = {
  background: "#168dfc",
  color: "white",
  margin: 10,
  marginLeft: 8,
  borderRadius: 10,
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
