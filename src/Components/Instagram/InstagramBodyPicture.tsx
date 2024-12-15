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
import { InstagramBodyDrill } from "./InstagramBodyDrill";

export type InstagramBodyPictureProps = {
  pic: string;
};

export const InstagramBodyPicture: React.FC<InstagramBodyPictureProps> = (
  props: InstagramBodyPictureProps
) => {
  const [isClickedPic, setIsClicked] = React.useState<string>("");
  const [isHold, setHold] = React.useState<boolean>(false);
  const [holdOver, setHoldOver] = React.useState<boolean>(false);
  const [backPressed, setBackPressed] = React.useState<boolean>(false);
  const { currentComponent, setCurrentComponentCallback } =
    useSelectedComponentContext();

  React.useEffect(() => {
    const e = () => {
      window.history.pushState(null, document.title, window.location.href);
      console.log("hashchange");
      setBackPressed(true);
      setIsClicked("");
    };
    window.history.pushState(null, document.title, window.location.href);
    window.addEventListener("popstate", e);

    return () => {
      window.removeEventListener("hashchange", e);
      window.removeEventListener("popstate", e);
    };
  }, []);

  const onMouseUpHandler = (pic: string) => {
    setHold(false);
    setHoldOver(true);
  };

  const onClickHandler = (pic: string) => {
    setBackPressed(false);
    setIsClicked(pic);
  };

  const imageSetCallback = () => {
    setIsClicked("");
  };
  const ref = createRef<HTMLDivElement>();

  const styles = getStyles();

  let vw = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  return (
    <motion.div style={{ margin: 1, boxSizing: "content-box" }}>
      {/* {isClicked && ( */}
      <InstagramBodyDrill
        pic={isClickedPic}
        callback={imageSetCallback}
        backPressed={backPressed}
        from={"Posts"}
      />
      <motion.div
        style={imageStyle}
        onClick={() => onClickHandler(props.pic)}
        onMouseDown={() => onMouseUpHandler(props.pic)}

        // onContextMenu={(e) => {
        //   e.preventDefault();
        //   onMouseUpHandler(1);
        // }}
      >
        <img
          style={{ maxWidth: "100%", height: "100%", width: "200px" }}
          src={props.pic}
          alt="logo"
        />
      </motion.div>
    </motion.div>
  );
};

const imageStyle: CSSProperties = {
  // border: "1px solid black",
  flex: 1,
  height: 150,
  userSelect: "none",
};
