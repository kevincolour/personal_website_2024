import { MyComponent, MyComponentProps } from "../../../../Utils/types";
import React from "react";
import { delay, motion } from "framer-motion";
import { useSelectedComponentContext } from "../../../../Context";
import { getStyles } from "../../../../Utils/styles";
import { MyComponentWrapper } from "../../../Util/MyComponentWrapper";
import cat from "../../../../Assets/cat.jpg";
import cat2 from "../../../../Assets/cat2.jpg";
import { WIDTH_RESPONSIVE } from "../../../../Utils/constants";
export const AYSTATP: React.FC<MyComponentProps> = (
  props: MyComponentProps
) => {
  const [isDoneWaiting, setIsDoneWaiting] = React.useState<boolean>(false);
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
    window.setTimeout(() => setIsDoneWaiting(true), 2000);
  };
  return (
    <>
      <MyComponentWrapper animationCompleteCallback={animationCompleteCallback}>
        Let me load the game for you... one sec
        <motion.div></motion.div>
      </MyComponentWrapper>
      {/* <GameLoadingAnimation></GameLoadingAnimation> */}
      {isDoneWaiting && (
        <iframe
          style={{
            position: "absolute",
            zIndex: 100,
            height: "800px",
            width: WIDTH_RESPONSIVE,
            transform: "translate(-50%, -50%)",
            top: 500,
          }}
          src={"https://legendary-kleicha-4ba30c.netlify.app/"}
        ></iframe>
      )}
    </>
  );
};
