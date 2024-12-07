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
import { InstagramBodyPicture } from "./InstagramBodyPicture";
import cat from "../../Assets/cat.jpg";
import cat2 from "../../Assets/cat2.jpg";
export type InstagramBodyProfile = {
  //   pic: string;
  //   callback: () => void;
  //   backPressed: boolean;
};

export const InstagramBodyProfile: React.FC<InstagramBodyProfile> = (
  props: InstagramBodyProfile
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
    <motion.div
      initial={{ x: vw }}
      animate={{ x: 0 }}
      style={{ position: "fixed", width: "100%" }}
      transition={{ damping: 20, duration: 0.1 }}
    >
      <div
        style={{
          border: "1px solid black",
          display: "flex",
          width: "100vw",
          flexWrap: "wrap",
        }}
      >
        <InstagramBodyPicture key={cat} pic={cat} />

        {/* <div style={{ height: 0, flexBasis: "100%" }}>test</div> */}
        <div style={imageStyle}>test</div>
        <div style={imageStyle}>test</div>
      </div>
      <div
        style={{
          border: "1px solid black",
          display: "flex",
          width: "100vw",
          flexWrap: "wrap",
        }}
      >
        <InstagramBodyPicture key={cat} pic={cat} />
        {/* <div style={{ height: 0, flexBasis: "100%" }}>test</div> */}
        <div style={imageStyle}>test</div>
        <div style={imageStyle}>test</div>
      </div>
      <div
        style={{
          border: "1px solid black",
          display: "flex",
          width: "100vw",
          flexWrap: "wrap",
        }}
      >
        {/* <div style={{ height: 0, flexBasis: "100%" }}>test</div> */}
        <div style={imageStyle}>test</div>
        <div style={imageStyle}>test</div>
      </div>
    </motion.div>
  );
};

const imageStyle: CSSProperties = {
  border: "1px solid black",
  flex: 1,
  height: 150,
  userSelect: "none",
};
