import { CSSProperties, createRef, useContext, useRef } from "react";
import { MyComponent, MyComponentProps } from "../../Utils/types";
import { InitialGreeting } from "../InitialGreeting";
import React from "react";
import { motion } from "framer-motion";
import { useSelectedComponentContext } from "../../Context";
import { getStyles, messsageWrapperStyle } from "../../Utils/styles";
import { ClickableText } from "../Util/ClickableText";
import { Modal } from "@fluentui/react";

import useLongPress from "./useLongPress";

export type InstagramBodyDrillProps = {
  pic: string;
  callback: () => void;
  backPressed: boolean;
  from?: string;
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
  return (
    <>
      {props.pic && (
        <div>
          <motion.div
            initial={{ x: vw }}
            animate={{ x: 0 }}
            style={{ position: "fixed", width: "100%", top: "25vh" }}
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
              <button onClick={props.callback}> back buttonsdf</button>
            </div>
            <motion.div>
              <img style={{ width: "100%" }} src={props.pic}></img>
            </motion.div>
          </motion.div>
        </div>
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
