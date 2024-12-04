import { CSSProperties, createRef, useContext, useRef } from "react";
import { MyComponent, MyComponentProps } from "../../Utils/types";
import { InitialGreeting } from "../InitialGreeting";
import React from "react";
import { motion } from "framer-motion";
import { useSelectedComponentContext } from "../../Context";
import { getStyles, messsageWrapperStyle } from "../../Utils/styles";
import { ClickableText } from "../Util/ClickableText";
import { Modal } from "@fluentui/react";

import cat from "../../Assets/cat.jpg";
import cat2 from "../../Assets/cat2.jpg";
import useLongPress from "./useLongPress";
import { InstagramBodyPicture } from "./InstagramBodyPicture";

export const InstagramBody: React.FC<MyComponentProps> = (
  props: MyComponentProps
) => {
  const [isClicked, setIsClicked] = React.useState<boolean>(false);
  const [isHold, setHold] = React.useState<boolean>(false);

  const { currentComponent, setCurrentComponentCallback } =
    useSelectedComponentContext();

  const ref = createRef<HTMLDivElement>();
  const styles = getStyles();
  return (
    <>
      <div
        style={{
          border: "1px solid black",
          display: "flex",
          height: "30vh",
          width: "100vw",
        }}
      ></div>
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
        <motion.div ref={ref} style={imageStyle}>
          {/* <img style={{ maxWidth: "100%" }} src={cat} alt="logo" /> */}
        </motion.div>
        {/* <div style={{ height: 0, flexBasis: "100%" }}>test</div> */}
        <div style={imageStyle}>test</div>
        <div style={imageStyle}>test</div>
      </div>
    </>
  );
};

const imageStyle: CSSProperties = {
  border: "1px solid black",
  flex: 1,
  height: 150,
};
