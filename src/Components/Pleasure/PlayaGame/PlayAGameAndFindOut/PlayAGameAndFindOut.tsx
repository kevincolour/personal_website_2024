import { MyComponent, MyComponentProps } from "../../../../Utils/types";
import React from "react";
import { delay, motion } from "framer-motion";
import { useSelectedComponentContext } from "../../../../Context";
import { getStyles } from "../../../../Utils/styles";
import { MyComponentWrapper } from "../../../Util/MyComponentWrapper";
import cat from "../../../../Assets/cat.jpg";
import cat2 from "../../../../Assets/cat2.jpg";
export const PlayAGameAndFindOut: React.FC<MyComponentProps> = (
  props: MyComponentProps
) => {
  const [isClicked, setIsClicked] = React.useState<boolean>(false);
  const { currentComponent, setCurrentComponentCallback } =
    useSelectedComponentContext();
  const styles = getStyles();
  const onClickHandlerOption1 = () => {
    const businessComponent: MyComponent = {
      name: "playAGameToFindOut",
      index: 2,
      typingString: "Sounds like fun, let's play a game and find out",
    };
    setSelectedComponent(businessComponent);
  };

  const [selectedComponent, setSelectedComponent] = React.useState<
    MyComponent | undefined
  >();
  const onTypingFinishHandler = () => {
    if (selectedComponent) {
      setCurrentComponentCallback(selectedComponent);
    }
  };
  const animationCompleteCallback = () => {
    window.setTimeout(() => setIsClicked(true), 2000);
  };
  return (
    <>
      <MyComponentWrapper animationCompleteCallback={animationCompleteCallback}>
        Which cat is cuter
        <motion.div></motion.div>
      </MyComponentWrapper>
      {/* <GameLoadingAnimation></GameLoadingAnimation> */}
      {isClicked && (
        <div style={{ overflow: "hidden" }}>
          <motion.div
            initial={{ scale: 2 }}
            animate={{ scale: 1 }}
            style={{ overflow: "hidden" }}
          >
            <img src={cat}></img>
          </motion.div>

          <motion.div
            initial={{ scale: 2, opacity: 0 }}
            style={{ fontSize: 60 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1 }}
          >
            vs
          </motion.div>

          <motion.div
            initial={{ scale: 2, opacity: 0 }}
            style={{ fontSize: 60 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 2 }}
          >
            {" "}
            <img src={cat2}></img>
          </motion.div>
        </div>
      )}
    </>
  );
};
