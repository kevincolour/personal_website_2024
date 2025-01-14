import { MyComponent, MyComponentProps } from "../../../../Utils/types";
import React, { CSSProperties, createRef, useRef } from "react";
import { delay, motion } from "framer-motion";
import { useSelectedComponentContext } from "../../../../Context";
import { getStyles } from "../../../../Utils/styles";
import { MyComponentWrapper } from "../../../Util/MyComponentWrapper";
import cat from "../../../../Assets/ThisOrThat/cinder.png";
import cat2 from "../../../../Assets/ThisOrThat/benjicat.jpg";
import {
  useGetHeight,
  useGetHeightOffset,
} from "../../../../Utils/helpersGobal";
import vs from "../../../../Assets/ThisOrThat/vs.jpg";
import { PICKLE_HEADER_HEIGHT } from "../../../../Utils/constants";

type ThisOrThatAnimationProps = {
  index: number;
  styleForBoth: CSSProperties;
  pic1?: string;
  pic2?: string;
  finishHandler: () => void;
  pic1style?: any;
  pic2style?: any;
};

type StateOfGame = {
  indexOfPictureSelected: number;
  thisOrThatState: ThisOrThatState;
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
  const [stateOfGame, setStateOfGame] = React.useState<StateOfGame>({
    indexOfPictureSelected: props.index,
    thisOrThatState: props.index == 0 ? "OneSelected" : "TwoSelected",
  });
  const [pic1Height, setPic1Height] = React.useState<number>(-1);
  const [pic2Height, setPic2Height] = React.useState<number>(-1);
  const thisOrThatState = stateOfGame.thisOrThatState;
  const indexOfPictureSelected = stateOfGame.indexOfPictureSelected;
  const ref1 = createRef<HTMLDivElement>();
  const ref2 = createRef<HTMLDivElement>();

  React.useEffect(() => {
    if (ref1.current && ref2.current) {
      setPic1Height(ref1.current?.clientHeight);
      setPic2Height(ref2.current?.clientHeight);
    }
  }, [ref1, ref2]);
  const { currentComponent, setCurrentComponentCallback } =
    useSelectedComponentContext();
  const styles = getStyles();
  const onClickHandlerOption1 = React.useCallback(() => {
    let newStateOfGame: StateOfGame = {
      indexOfPictureSelected: 0,
      thisOrThatState: "NoneSelected",
    };
    if (thisOrThatState == "NoneSelected") {
      newStateOfGame.thisOrThatState = "OneSelected";
    }
    if (thisOrThatState == "OneSelected") {
      newStateOfGame.thisOrThatState = "OneConfirmed";
    }
    if (thisOrThatState == "TwoSelected") {
      newStateOfGame.thisOrThatState = "NoneSelected";
    }

    setStateOfGame(newStateOfGame);
  }, [stateOfGame]);
  console.log("currentSTate", thisOrThatState.toString());

  const onClickHandlerOption2 = () => {
    let newStateOfGame: StateOfGame = {
      indexOfPictureSelected: 1,
      thisOrThatState: "NoneSelected",
    };
    if (thisOrThatState == "NoneSelected") {
      newStateOfGame.thisOrThatState = "TwoSelected";
    }
    if (thisOrThatState == "TwoSelected") {
      newStateOfGame.thisOrThatState = "TwoConfirmed";
    }
    if (thisOrThatState == "OneSelected") {
      newStateOfGame.thisOrThatState = "NoneSelected";
    }
    setStateOfGame(newStateOfGame);
  };
  React.useEffect(() => {}, []);

  // const animationCompleteCallback = (index: number) => {
  //   setDuration(0.1);
  //   setIndexOfPictureSelected(index);
  // };

  const duration = 0.1;
  const headerHeight = useGetHeightOffset();

  let picture2Delay = indexOfPictureSelected == 0 ? { delay: 0.1 } : {};
  let picture1Delay = indexOfPictureSelected == 1 ? { delay: 0.1 } : {};

  let picture1Animate = undefined;
  let picture2Animate = undefined;

  if (thisOrThatState == "OneSelected" || thisOrThatState == "TwoSelected") {
    if (indexOfPictureSelected == 0) {
      picture1Animate = {
        y: "calc(50% + " + headerHeight / 2 + "px)",
        // y: pic1Height,
        // y: pic1Height,
      };
      const pic2style = props.pic2style ?? {};
      const height = pic2style.width ?? 0;
      picture2Animate = {
        y: pic1Height,
      };
    }
    if (indexOfPictureSelected == 1) {
      const pic1style = props.pic1style ?? {};
      const height = pic1style.width ?? 0;

      console.log(pic1style, "kevin");
      picture1Animate = {
        y: -1 * height,
      };
      picture2Animate = {
        y: "calc(-50% - " + headerHeight / 2 + "px)",
        // y: "-50%",
      };
    }
  } else if (thisOrThatState == "OneConfirmed") {
    picture1Animate = undefined;
  } else if (thisOrThatState == "TwoConfirmed") {
    picture2Animate = {
      // y: "calc(-50% - " + (headerHeight - PICKLE_HEADER_HEIGHT / 2) + "px)",
      // y: "-50%",
    };
  }

  return (
    <>
      {/* <GameLoadingAnimation></GameLoadingAnimation> */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            overflow: "hidden",
            height:
              "calc(100dvh - " + (PICKLE_HEADER_HEIGHT + headerHeight) + "px)",
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {thisOrThatState !== "TwoConfirmed" && (
            <motion.div
              style={{ overflow: "hidden" }}
              animate={picture1Animate}
              transition={picture1Delay}
              ref={ref1}
              // onAnimationComplete={() => animationCompleteCallback(0)}
            >
              <img
                onClick={onClickHandlerOption1}
                src={props.pic1}
                style={{ ...props.styleForBoth, ...props.pic1style }}
              ></img>
              {thisOrThatState === "OneConfirmed" && (
                <div>14% of people picked !nameofpicture </div>
              )}
            </motion.div>
          )}

          {thisOrThatState !== "OneConfirmed" &&
            thisOrThatState !== "TwoConfirmed" && (
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
            )}
          {thisOrThatState !== "OneConfirmed" && (
            <motion.div
              style={{ overflow: "hidden" }}
              animate={picture2Animate}
              transition={picture2Delay}
              ref={ref2}
              // onAnimationComplete={() => animationCompleteCallback(0)}
            >
              <img
                onClick={onClickHandlerOption2}
                src={props.pic2}
                style={{ ...props.styleForBoth, ...props.pic2style }}
              ></img>
              {thisOrThatState === "TwoConfirmed" && (
                <div>14% of people picked !nameofpicture </div>
              )}
            </motion.div>
          )}
          {(thisOrThatState == "OneConfirmed" ||
            thisOrThatState == "TwoConfirmed") && (
            <button onClick={props.finishHandler}>next</button>
          )}
        </div>
      </div>
    </>
  );
};
