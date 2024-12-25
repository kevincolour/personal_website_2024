import { MyComponent, MyComponentProps } from "../../../../Utils/types";
import React from "react";
import { delay, motion } from "framer-motion";
import { useSelectedComponentContext } from "../../../../Context";
import { getStyles } from "../../../../Utils/styles";
import { MyComponentWrapper } from "../../../Util/MyComponentWrapper";
import cat from "../../../../Assets/cat.jpg";
import cat2 from "../../../../Assets/ThisOrThat/benjicat.jpg";
import vs from "../../../../Assets/ThisOrThat/vs.jpg";
import { ThisOrThatAnimation } from "./ThisOrThatAnimation";

import {
  useGetHeight,
  useGetHeightOffset,
} from "../../../../Utils/helpersGobal";
export const ThisOrThat: React.FC<MyComponentProps> = (
  props: MyComponentProps
) => {
  const [isClicked, setIsClicked] = React.useState<boolean>(false);

  const [indexOfPictureSelected, setIndexOfPictureSelected] =
    React.useState<number>(-1);
  const { currentComponent, setCurrentComponentCallback } =
    useSelectedComponentContext();
  const styles = getStyles();
  const onClickHandlerOption1 = () => {
    setIndexOfPictureSelected(0);
  };

  const onClickHandlerOption2 = () => {
    setIndexOfPictureSelected(1);
  };

  React.useEffect(() => {
    window.setTimeout(() => setIsClicked(true), 2000);
  });
  // const animationCompleteCallback = (index: number) => {
  //   setDuration(0.1);
  //   setIndexOfPictureSelected(index);
  // };
  const styleForBoth = {
    width: 300,
    borderRadius: 150,
  };
  const duration = 0.1;
  const height = useGetHeight();
  const headerHeight = useGetHeightOffset();
  const picture1Animate =
    indexOfPictureSelected == 0 ? { scale: 1, y: 100 } : { scale: 1 };
  const picture2Animate =
    indexOfPictureSelected == 0
      ? { scale: 1, opacity: 1, y: 100 }
      : { scale: 1, opacity: 1 };
  return (
    <div style={{ height: "calc(100dvh - " + (headerHeight + 45) + "px)" }}>
      <div
        style={{
          height: 45,
          fontWeight: 700,
          fontSize: 30,
          borderBottom: "1px solid black",
        }}
      >
        Which cat is cuter
      </div>
      {indexOfPictureSelected != -1 && (
        <ThisOrThatAnimation index={indexOfPictureSelected} />
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "100%",
        }}
      >
        {/* <GameLoadingAnimation></GameLoadingAnimation> */}
        {isClicked && indexOfPictureSelected == -1 && (
          <div style={{ overflow: "hidden" }}>
            <motion.div
              initial={{ scale: 2 }}
              animate={picture1Animate}
              style={{ overflow: "hidden" }}
              onClick={onClickHandlerOption1}
              transition={{ duration: duration }}
              // onAnimationComplete={() => animationCompleteCallback(0)}
            >
              <img src={cat} style={styleForBoth}></img>
            </motion.div>

            <motion.div
              initial={{ scale: 2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <div
                style={{
                  fontSize: 60,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img style={{ width: 100 }} src={vs} />
              </div>
            </motion.div>

            <motion.div
              initial={{ scale: 2, opacity: 0 }}
              style={{ fontSize: 60 }}
              animate={picture2Animate}
              transition={{ delay: 2, duration: duration }}
              onClick={onClickHandlerOption2}
              // onAnimationComplete={() => animationCompleteCallback(1)}
            >
              {" "}
              <img src={cat2} style={styleForBoth}></img>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};
