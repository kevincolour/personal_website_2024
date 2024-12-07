import React, { PropsWithChildren, createRef, useEffect } from "react";
import { CSSProperties, FC } from "react";

import { motion } from "framer-motion";
import { ThinkingAnimation } from "../ThinkingAnimation";
import { messsageWrapperStyle } from "../../Utils/styles";
import { AnimationComponent } from "./AnimationComponent";
import { type } from "os";
import messagetriangle from "../../Assets/messagetriangle .png";
import { TRIANGLE_HEIGHT } from "../../Utils/constants";

type MyComponentWrapperProps = {
  // name: string;
  transitionObj?: any;
} & PropsWithChildren;

export const MARGIN_LEFT = 20;
export const MyComponentWrapper = (props: MyComponentWrapperProps) => {
  const ref = createRef<HTMLDivElement>();

  const [triangleTop, setTriangleTop] = React.useState<number>(-1);
  React.useEffect(() => {
    const val = ref.current?.clientHeight;
    if (val) {
      const top = ref.current?.getBoundingClientRect().top;
      const valToSet = ref.current?.clientHeight + top - TRIANGLE_HEIGHT;
      setTriangleTop(valToSet);
    }
  }, [ref]);
  const triangleStyle =
    triangleTop === -1 ? {} : { top: triangleTop, left: MARGIN_LEFT - 5 };
  return (
    <>
      {/* <AnimationComponent key={props.name}> */}
      <AnimationComponent transitionObj={props.transitionObj}>
        <div style={messsageWrapperStyle} ref={ref}>
          <div style={chatBoxStyles}>
            {/* <div style={arrowLeftStyle}></div> */}
            {triangleTop != -1 && (
              <img
                src={messagetriangle}
                style={{
                  ...triangleStyle,
                  position: "fixed",
                  height: TRIANGLE_HEIGHT,
                }}
              ></img>
            )}
            {props.children}
          </div>
        </div>
      </AnimationComponent>
    </>
  );
};

//147efb
const arrowRightStyle: CSSProperties = {
  width: 0,
  height: 0,
  borderTop: "10px solid transparent",
  borderBottom: "10px solid transparent",
  borderLeft: "15px solid #e9e9eb",
  position: "absolute",
  top: 95,
  right: -10,
};

const chatBoxStyles: CSSProperties = {
  // border: "1px solid black",
  background: "#e9e9eb",
  margin: 5,
  marginLeft: MARGIN_LEFT,
  borderRadius: 20,
  position: "relative",
  textAlign: "left",
  padding: 10,
  paddingBottom: 15,
  paddingTop: 15,
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
  borderRight: "15px solid #e9e9eb",
  position: "absolute",
  top: 90,
  left: -10,
};
