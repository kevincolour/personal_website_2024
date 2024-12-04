import { animate, delay, motion, useMotionValue } from "framer-motion";
import { CSSProperties, useEffect, useState } from "react";
import { useSelectedComponentContext, useUserData } from "../Context";
import { MyComponent, UserData } from "../Utils/types";

type HeaderActiveProps = {
  name: string;
};

export const HeaderActive = (props: HeaderActiveProps) => {
  const opacity = useMotionValue(0);
  const { currentUserData, setCurrentUserDataCallback } = useUserData();
  useEffect(() => {
    console.log(props.name, "Activeheadr");
    const userData: UserData = structuredClone(currentUserData);
    if (userData.seenComponents.indexOf(props.name) === -1) {
      userData.seenComponents.push(props.name);
      userData.currentProgress = currentUserData.currentProgress + 1;
      setCurrentUserDataCallback(userData);
    }
  }, []);

  return (
    <div style={{ width: "75%" }}>
      <motion.div
        //   layout
        style={{ ...stylesActive }}
        transition={{ duration: 2 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div style={arrowLeftStyle} className="arrow-left"></div>
        {props.name}
      </motion.div>
    </div>
  );
};

const styles: CSSProperties = {
  border: "1px solid black",
  position: "relative",
};

const stylesActive: CSSProperties = {
  // border: "1px solid black",
  background: "#d8d8d8",
  margin: 5,
  marginLeft: 8,
  borderRadius: 10,
  position: "relative",
  textAlign: "left",
  padding: 10,
  // height: 50,
  // padding: 10,
  // width: "100%",
  // display: "none",
};
//147efb
const arrowLeftStyle: CSSProperties = {
  width: 0,
  height: 0,
  borderTop: "10px solid transparent",
  borderBottom: "10px solid transparent",
  borderRight: "15px solid #d8d8d8",
  position: "absolute",
  top: 46,
  left: -10,
};
