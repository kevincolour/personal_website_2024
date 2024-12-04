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

export type InstagramBodyPictureProps = {
  pic: string;
};

export const InstagramBodyPicture: React.FC<InstagramBodyPictureProps> = (
  props: InstagramBodyPictureProps
) => {
  const [isClicked, setIsClicked] = React.useState<boolean>(false);
  const [isHold, setHold] = React.useState<boolean>(false);
  const [holdOver, setHoldOver] = React.useState<boolean>(false);

  const { currentComponent, setCurrentComponentCallback } =
    useSelectedComponentContext();

  const longPress = useLongPress(
    React.useCallback(() => {
      setHold(true);
      const ele = window.document.getElementById("wrapper");
      if (ele) ele.style.filter = "blur(2px)";
    }, []),
    1000,
    setHold,
    holdOver
  );

  const onMouseUpHandler = (index: number) => {
    setHold(false);
    setHoldOver(true);
    const ele = window.document.getElementById("wrapper");
    if (ele) ele.style.filter = "";
  };

  const onClickHandler = (index: number) => {
    setIsClicked(true);
  };

  const onClickHandlerDismiss = () => {
    setHold(false);
    setHoldOver(true);
    const ele = window.document.getElementById("wrapper");
    if (ele) ele.style.filter = "";
  };
  const ref = createRef<HTMLDivElement>();

  const styles = getStyles();
  return (
    <>
      {isHold && (
        <>
          {/* <motion.div animate={{ scale: 3, rotate: 25 }} initial={{ scale: 1 }}> */}
          <Modal
            // forceFocusInsideTrap
            isOpen={isHold}
            onDismiss={onClickHandlerDismiss}
            styles={{
              main: {
                width: "calc(100% - 16px)",
                height: "calc(100vw - 16px)",
              },
            }}
            layerProps={{ ref: ref }}
          >
            {" "}
            <img
              // onContextMenu={(e) => {
              //   e.preventDefault();
              //   onMouseUpHandler(1);
              // }}
              style={{ width: "100%", height: "100%" }}
              src={props.pic}
              alt="logo"
              {...longPress}
            />
          </Modal>
          {/* </motion.div> */}
        </>
      )}

      <motion.div
        style={imageStyle}
        onClick={() => onClickHandler(1)}
        {...longPress}
        // onContextMenu={(e) => {
        //   e.preventDefault();
        //   onMouseUpHandler(1);
        // }}
      >
        <img
          style={{ maxWidth: "100%", height: "100%" }}
          src={props.pic}
          alt="logo"
        />
      </motion.div>
    </>
  );
};

const imageStyle: CSSProperties = {
  border: "1px solid black",
  flex: 1,
  height: 150,
  userSelect: "none",
};
