import { CSSProperties, useContext } from "react";
import { MyComponent, MyComponentProps } from "../../../Utils/types";
import { InitialGreeting } from "../../InitialGreeting";
import React from "react";
import { delay, motion } from "framer-motion";
import { useSelectedComponentContext } from "../../../Context";
import { getStyles } from "../../../Utils/styles";
import { MyComponentWrapper } from "../../Util/MyComponentWrapper";
import { transcode } from "buffer";
import { ClickableText } from "../../Util/ClickableText";
import { TypingSimulator } from "../../TypingSimulator";

export const PlayAGame: React.FC<MyComponentProps> = (
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
  return (
    <>
      <MyComponentWrapper>
        <ClickableText
          text="let's see. would you like to play a game to find out?"
          onClickHandler={onClickHandlerOption1}
        />
      </MyComponentWrapper>
      <MyComponentWrapper transitionObj={{ delay: 4 }}>
        <motion.div>
          <div>if not here are the other categories : x,y,x </div>
        </motion.div>
      </MyComponentWrapper>

      {selectedComponent && (
        <TypingSimulator
          // key={selectedComponent.typingString}
          onFinishHandler={onTypingFinishHandler}
          typingString={selectedComponent.typingString}
        />
      )}
    </>
  );
};
