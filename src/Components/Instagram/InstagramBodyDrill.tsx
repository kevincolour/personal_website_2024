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
export type InstagramBodyDrillProps = {
  pic: string;
  callback: () => void;
  backPressed: boolean;
  from?: string;
  index: number;
  width?: number;
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
  console.log("RENDERD instagrambody");
  const styles = getStyles();
  // const position = props.backPressed ? vw : 0;

  const headerHeight = window.document.getElementById("topHeaderBar");
  const heightOffset = headerHeight?.clientHeight;
  return (
    <>
      {props.pic && (
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
            height: "calc(100dvh - " + heightOffset + "px)",
            backgroundColor: "white",
            top: heightOffset + "px",
          }}
          transition={{ damping: 20, duration: 0.1 }}
        >
          <div
            style={{
              position: "relative",
              top: "0",
              left: "0",
              display: "flex",
            }}
          >
            <div onClick={props.callback}>
              {" "}
              <img style={{ width: 20, cursor: "pointer" }} src={arrowLeft} />
            </div>
            <div style={{ marginLeft: 30, fontWeight: 700, fontSize: 20 }}>
              Posts
            </div>
          </div>
          <motion.div>
            <img style={{ width: "100%" }} src={props.pic}></img>
          </motion.div>
        </motion.div>
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
