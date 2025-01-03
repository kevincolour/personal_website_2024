import { CSSProperties, createRef, useContext, useRef } from "react";
import { MyComponent, MyComponentProps } from "../../Utils/types";
import { InitialGreeting } from "../InitialGreeting";
import React from "react";
import { motion } from "framer-motion";
import { useSelectedComponentContext } from "../../Context";
import { getStyles } from "../../Utils/styles";
import { ClickableText } from "../Util/ClickableText";
import { Modal } from "@fluentui/react";

import useLongPress from "./useLongPress";
import { WIDTH_RESPONSIVE } from "../../Utils/constants";
import { getAbsoluteHeight } from "../../Utils/helpers";
import arrowLeft from "../../Assets/InstagramProfile/arrowleft.png";
import profilepic from "../../Assets/profileinstasmall.jpg";
import { useGetHeight, useGetHeightOffset } from "../../Utils/helpersGobal";
import hamburger from "../../Assets/InstagramProfile/hamburger.svg";
export type InstagramBodyDrillProps = {
  pic: string;
  callback: () => void;
  backPressed: boolean;
  from?: string;
  index: number;
  width?: number;
  drillState: boolean;
};
export const InstagramBodyDrill: React.FC<InstagramBodyDrillProps> = (
  props: InstagramBodyDrillProps
) => {
  const { currentComponent, setCurrentComponentCallback } =
    useSelectedComponentContext();

  let vw = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  const styles = getStyles();
  // const position = props.backPressed ? vw : 0;
  const offset = useGetHeightOffset();
  const height = useGetHeight();
  const onclickHandlerBack = () => {
    props.callback();
  };

  const headerHeight = window.document.getElementById("fixedInstaHeader");
  const topOffset = headerHeight?.clientHeight ?? 0;

  return (
    <>
      {props.pic && props.drillState && (
        <>
          <motion.div
            className="instagrambodydrill"
            initial={{ x: vw }}
            animate={{
              x: -1 * (props.width ?? 0) * props.index - 2 * props.index - 1,
            }}
            style={{
              position: "fixed",
              width: WIDTH_RESPONSIVE,
              // top: "25vh",
              height: height,
              backgroundColor: "white",
              top: (offset ?? 0) + topOffset + "px",
              zIndex: 60,
            }}
            transition={{ damping: 20, duration: 0.1 }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div
                style={{
                  display: "flex",
                  alignContent: "center",
                  fontSize: 15,
                }}
              >
                <img
                  style={{
                    height: 30,
                    borderRadius: 15,
                    marginLeft: 10,
                    marginRight: 10,
                    marginBottom: 5,
                    marginTop: 5,
                  }}
                  src={profilepic}
                ></img>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: 15,
                  }}
                >
                  <span>kevincolour</span>
                </div>
              </div>
              <img style={{ width: 25, filter: "blur(2px)" }} src={hamburger} />
            </div>
            <motion.div>
              <img style={{ width: "100%" }} src={props.pic}></img>
            </motion.div>
          </motion.div>
        </>
      )}
    </>
  );
};

const imageStyle: CSSProperties = {
  border: "1px solid black",
  flex: 1,
  height: 150,
  userSelect: "none",
};
