import { MyComponent, MyComponentProps } from "../../../../Utils/types";
import React from "react";
import { delay, motion } from "framer-motion";
import { useSelectedComponentContext } from "../../../../Context";
import { getStyles } from "../../../../Utils/styles";
import { MyComponentWrapper } from "../../../Util/MyComponentWrapper";

import vs from "../../../../Assets/ThisOrThat/vs.jpg";
import { ThisOrThatAnimation } from "./ThisOrThatAnimation";

import {
  useGetHeight,
  useGetHeightOffset,
} from "../../../../Utils/helpersGobal";
import { PICKLE_HEADER_HEIGHT } from "../../../../Utils/constants";
import { useStateManager } from "./useStateManager";
import { FinishScreen } from "./FinishScreen";
export const ThisOrThat: React.FC<MyComponentProps> = (
  props: MyComponentProps
) => {
  const [isDoneWaiting, setIsDoneWaiting] = React.useState<boolean>(false);

  const [currentProgress, setCurrentProgress] = React.useState<number>(3);

  const stateOfGame = useStateManager(currentProgress);

  const { pic1, pic2, descriptionText, pic1styleModifier, pic2styleModifier } =
    { ...stateOfGame };
  const [indexOfPictureSelected, setIndexOfPictureSelected] =
    React.useState<number>(-1);

  const finishHandler = () => {
    setCurrentProgress(currentProgress + 1);
    setIsDoneWaiting(false);
    setIndexOfPictureSelected(-1);
  };

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
    window.setTimeout(() => setIsDoneWaiting(true), 2000);
  });
  // const animationCompleteCallback = (index: number) => {
  //   setDuration(0.1);
  //   setIndexOfPictureSelected(index);
  // };
  const styleForBoth = {
    width: window.innerHeight / 3.5,
    borderRadius: 150,
  };
  const duration = 0.1;
  const height = useGetHeight();
  const headerHeight = useGetHeightOffset();
  const picture1Animate = {
    scale: 1,
  };
  const picture2Animate = {
    scale: 1,
    opacity: 1,
    width: "100%",
  };
  console.log(pic1styleModifier, pic2styleModifier);

  return (
    <div
      style={{
        height:
          "calc(100dvh - " + (headerHeight + PICKLE_HEADER_HEIGHT) + "px)",
      }}
    >
      <div
        style={{
          height: PICKLE_HEADER_HEIGHT,
          fontWeight: 700,
          fontSize: 30,
          borderBottom: "1px solid black",
        }}
      >
        {descriptionText}
      </div>
      {indexOfPictureSelected != -1 && (
        <ThisOrThatAnimation
          index={indexOfPictureSelected}
          styleForBoth={styleForBoth}
          pic1={pic1}
          pic2={pic2}
          finishHandler={finishHandler}
          pic1style={pic1styleModifier}
          pic2style={pic2styleModifier}
        />
      )}
      {stateOfGame == null && <FinishScreen />}

      {indexOfPictureSelected == -1 && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              height:
                "calc(100dvh - " +
                (PICKLE_HEADER_HEIGHT + headerHeight) +
                "px)",
              position: "absolute",
            }}
          >
            {/* <GameLoadingAnimation></GameLoadingAnimation> */}
            {isDoneWaiting && (
              <div style={{ overflow: "hidden" }}>
                <motion.div
                  initial={{ scale: 2 }}
                  animate={picture1Animate}
                  style={{ overflow: "hidden" }}
                  transition={{ duration: duration }}
                  // onAnimationComplete={() => animationCompleteCallback(0)}
                >
                  <img
                    onClick={onClickHandlerOption1}
                    src={pic1}
                    style={{ ...styleForBoth, ...pic1styleModifier }}
                  ></img>
                </motion.div>

                <motion.div
                  initial={{ scale: 2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1 }}
                  style={{ width: "100%" }}
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
                  animate={picture2Animate}
                  transition={{ delay: 2, duration: duration }}

                  // onAnimationComplete={() => animationCompleteCallback(1)}
                >
                  {" "}
                  <img
                    src={pic2}
                    onClick={onClickHandlerOption2}
                    style={{ ...styleForBoth, ...pic2styleModifier }}
                  ></img>
                </motion.div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
