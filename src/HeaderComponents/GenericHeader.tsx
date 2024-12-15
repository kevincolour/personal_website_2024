import { animate, delay, motion, useMotionValue } from "framer-motion";
import { CSSProperties, useEffect, useState } from "react";
import {
  UserDataContext,
  useSelectedComponentContext,
  useUserData,
} from "../Context";
import { MyComponent, UserData } from "../Utils/types";
import { HeaderActive } from "./HeaderActive";
import { TRIANGLE_HEIGHT } from "../Utils/constants";
import messagetriangle from "../Assets/bluemessagetriange.png";
import React from "react";

type GenericHeaderProps = {
  name: string;
  typingString?: string;
};

export const GenericHeader = (props: GenericHeaderProps) => {
  const { currentComponent, setCurrentComponentCallback } =
    useSelectedComponentContext();
  const { currentUserData, setCurrentUserDataCallback } = useUserData();
  useEffect(() => {}, [setCurrentUserDataCallback]);

  const amIActive = currentComponent.name == props.name;

  const setActiveComponent = () => {
    const thisComponent: MyComponent = {
      name: props.name,
      index: 1,
    };
    setCurrentComponentCallback(thisComponent);
  };

  const inactiveheader = !amIActive && (
    <div style={{ display: "flex", justifyContent: "right" }}>
      <motion.div
        //   layout
        style={stylesInactive}
        onClick={setActiveComponent}
      >
        {/* <div style={arrowLeftStyle} className="arrow-left"></div> */}

        {props.name}
      </motion.div>
    </div>
  );
  return (
    <>
      {amIActive && props.typingString && (
        <>
          <HeaderActive
            key={props.name}
            name={props.name}
            typingString={props.typingString}
          />
        </>
      )}
    </>
  );
};

const styles: CSSProperties = {
  border: "1px solid black",
};

const stylesInactive: CSSProperties = {
  // border: "1px solid black",
  background: "#147efb",
  margin: 5,
  marginLeft: 8,
  borderRadius: 10,
  position: "relative",
  color: "white",
  width: "50%",
  alignItems: "right",
  // height: 50,
  // padding: 10,
  // width: "100%",
  // display: "none",
};
//147efb
const arrowLeftStyle: CSSProperties = {
  // width: 0,
  // height: 0,
  // borderTop: "10px solid transparent",
  // borderBottom: "10px solid transparent",
  // borderRight: "15px solid #e9e9eb",
  // position: "absolute",
  // top: 10,
  // left: -10,
};
