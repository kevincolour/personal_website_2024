import { animate, delay, motion, useMotionValue } from "framer-motion";
import { CSSProperties, useEffect, useState } from "react";
import {
  UserDataContext,
  useSelectedComponentContext,
  useUserData,
} from "../Context";
import { MyComponent, UserData } from "../Utils/types";
import { HeaderActive } from "./HeaderActive";

type GenericHeaderProps = {
  name: string;
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

  return (
    <>
      {!amIActive && (
        <>
          <motion.div
            //   layout
            style={stylesInactive}
            onClick={setActiveComponent}
          >
            <div style={arrowLeftStyle} className="arrow-left"></div>

            {props.name}
          </motion.div>
        </>
      )}

      {amIActive && <HeaderActive key={props.name} name={props.name} />}
    </>
  );
};

const styles: CSSProperties = {
  border: "1px solid black",
};

const stylesInactive: CSSProperties = {
  // border: "1px solid black",
  background: "#d8d8d8",
  margin: 5,
  marginLeft: 8,
  borderRadius: 10,
  position: "relative",
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
  // borderRight: "15px solid #d8d8d8",
  // position: "absolute",
  // top: 10,
  // left: -10,
};
