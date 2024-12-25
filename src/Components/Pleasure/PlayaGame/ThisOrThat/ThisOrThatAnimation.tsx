import { MyComponent, MyComponentProps } from "../../../../Utils/types";
import React from "react";
import { delay, motion } from "framer-motion";
import { useSelectedComponentContext } from "../../../../Context";
import { getStyles } from "../../../../Utils/styles";
import { MyComponentWrapper } from "../../../Util/MyComponentWrapper";
import cat from "../../../../Assets/cat.jpg";
import cat2 from "../../../../Assets/ThisOrThat/benjicat.jpg";
import {
  useGetHeight,
  useGetHeightOffset,
} from "../../../../Utils/helpersGobal";
import vs from "../../../../Assets/ThisOrThat/vs.jpg";

type ThisOrThatAnimationProps = {
  index: number;
};

type ThisOrThatState =
  | "OneSelected"
  | "TwoSelected"
  | "NoneSelected"
  | "OneConfirmed"
  | "TwoConfirmed";

export const ThisOrThatAnimation: React.FC<ThisOrThatAnimationProps> = (
  props: ThisOrThatAnimationProps
) => {
  const [indexOfPictureSelected, setIndexOfPictureSelected] =
    React.useState<number>(-1);
  const [thisOrThatState, setThisOrThatState] =
    React.useState<ThisOrThatState>("NoneSelected");
  const { currentComponent, setCurrentComponentCallback } =
    useSelectedComponentContext();
  const styles = getStyles();
  const onClickHandlerOption1 = () => {
    setIndexOfPictureSelected(0);
    if (thisOrThatState == "NoneSelected") {
      setThisOrThatState("OneSelected");
    }
    if (thisOrThatState == "OneSelected") {
      // setThisOrThatState("OneConfirmed");
      setThisOrThatState("NoneSelected");
    }
    if (thisOrThatState == "TwoSelected") {
      setThisOrThatState("NoneSelected");
    }
  };

  const onClickHandlerOption2 = () => {
    setIndexOfPictureSelected(1);
    if (thisOrThatState == "NoneSelected") {
      setThisOrThatState("TwoSelected");
    }
    if (thisOrThatState == "TwoSelected") {
      // setThisOrThatState("TwoConfirmed");
      setThisOrThatState("NoneSelected");
    }
    if (thisOrThatState == "OneSelected") {
      setThisOrThatState("NoneSelected");
    }
  };
  React.useEffect(() => {
    setIndexOfPictureSelected(props.index);
    setThisOrThatState("NoneSelected");
  }, []);

  // const animationCompleteCallback = (index: number) => {
  //   setDuration(0.1);
  //   setIndexOfPictureSelected(index);
  // };
  const styleForBoth = {
    width: 300,
    borderRadius: 150,
  };
  const duration = 0.1;
  const headerHeight = useGetHeightOffset();

  let picture2Delay = indexOfPictureSelected == 0 ? { delay: 0.1 } : {};
  let picture1Delay = indexOfPictureSelected == 1 ? { delay: 0.1 } : {};

  let picture1Animate = undefined;
  let picture2Animate = undefined;
  if (thisOrThatState == "NoneSelected") {
    if (indexOfPictureSelected == 0) {
      picture1Animate = {
        y: "calc(50% + " + (headerHeight - 45 / 2) + "px)",
      };
      picture2Animate = {
        y: "300px",
      };
    }
    if (indexOfPictureSelected == 1) {
      picture1Animate = {
        y: "-100px",
      };
      picture2Animate = {
        y: "-300px",
      };
    }
  }

  // if (indexOfPictureSelected == 1) {
  //   picture1Animate = { y: "0" };
  // } else if (indexOfPictureSelected == 1) {
  //   picture1Animate = { y: "-100px" };
  // } else if (indexOfPictureSelected == 1) {
  //   picture1Animate = {
  //     y: "-200px",
  //   };
  // } else if (indexOfPictureSelected == 1) {
  //   picture1Animate = { y: "-200px" };
  // }

  // let picture1Animate = undefined;
  // if (indexOfPictureSelected == 0) {
  //   picture1Animate = {
  //     y: "calc(50% + " + (headerHeight - 45 / 2) + "px)",
  //   };
  // }
  // if (indexOfPictureSelected == 1) {
  //   picture1Animate = { y: "0" };
  // } else if (indexOfPictureSelected == 1) {
  //   picture1Animate = { y: "-100px" };
  // } else if (indexOfPictureSelected == 1) {
  //   picture1Animate = {
  //     y: "-200px",
  //   };
  // } else if (indexOfPictureSelected == 1) {
  //   picture1Animate = { y: "-200px" };
  // }

  // let picture2Animate = undefined;

  // if (indexOfPictureSelected == 0) {
  //   picture2Animate = {
  //     y: "200px",
  //   };
  // } else if (indexOfPictureSelected == 0) {
  //   picture2Animate = { y: "0" };
  // } else if (indexOfPictureSelected == 0) {
  //   picture2Animate = { y: "calc(100% - " + headerHeight + "px)" };
  // } else if (indexOfPictureSelected == 1) {
  //   picture2Animate = { y: "-200px" };
  // }
  // } else if (indexOfPictureSelected == 1) {
  //   picture2Animate = { y: "0" };
  // } else if (indexOfPictureSelected == 1) {
  //   picture2Animate = { y: "calc(100% - " + headerHeight + "px)" };
  // }

  return (
    <>
      {/* <GameLoadingAnimation></GameLoadingAnimation> */}
      <div
        style={{
          overflow: "hidden",
          height: "calc(100dvh - " + 45 + "px)",
        }}
      >
        <motion.div
          style={{ overflow: "hidden" }}
          onClick={onClickHandlerOption1}
          animate={picture1Animate}
          transition={picture1Delay}
          // onAnimationComplete={() => animationCompleteCallback(0)}
        >
          <img src={cat} style={styleForBoth}></img>
        </motion.div>

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

        <motion.div
          style={{ overflow: "hidden" }}
          onClick={onClickHandlerOption2}
          animate={picture2Animate}
          transition={picture2Delay}
          // onAnimationComplete={() => animationCompleteCallback(0)}
        >
          <img src={cat2} style={styleForBoth}></img>
        </motion.div>
      </div>
    </>
  );
};
