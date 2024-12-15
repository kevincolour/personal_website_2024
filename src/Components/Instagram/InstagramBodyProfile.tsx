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
import { WIDTH_RESPONSIVE } from "../../Utils/constants";
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
      style={{ position: "absolute", width: WIDTH_RESPONSIVE }}
      transition={{ damping: 20, duration: 0.2 }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
        }}
      >
        <InstagramBodyPicture key={cat} pic={cat2} />
        <InstagramBodyPicture key={cat} pic={cat2} />
        <InstagramBodyPicture key={cat} pic={cat2} />
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
        }}
      >
        <InstagramBodyPicture key={cat} pic={cat} />
        <InstagramBodyPicture key={cat} pic={cat} />
        <InstagramBodyPicture key={cat} pic={cat} />
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
        }}
      >
        <InstagramBodyPicture key={cat} pic={cat} />
        <InstagramBodyPicture key={cat} pic={cat} />
        <InstagramBodyPicture key={cat} pic={cat} />
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
