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
import { AYSTATP } from "./AYSTATP/AYSTATP";

export const PlayAGame: React.FC<MyComponentProps> = (
  props: MyComponentProps
) => {
  const [isClicked, setIsClicked] = React.useState<boolean>(false);
  const { currentComponent, setCurrentComponentCallback } =
    useSelectedComponentContext();
  const styles = getStyles();
  const onClickHandlerOption1 = () => {
    const component: MyComponent = {
      name: "Pickle",
      index: 2,
      typingString: "Sounds like fun, let's play!",
    };
    setSelectedComponent(component);
  };

  const onClickHandlerOption2 = () => {
    const component: MyComponent = {
      name: "AYSTATP",
      index: 2,
      typingString: "What the heck is AYSTATP",
      actualComponent: <AYSTATP />,
    };
    setSelectedComponent(component);
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
      <MyComponentWrapper transitionObj={{ delay: 4 }}>
        <motion.div>
          <div>
            here are some games :{" "}
            <div>
              <ClickableText
                text="This or That"
                onClickHandler={onClickHandlerOption1}
              />
            </div>
          </div>
          <div>
            <ClickableText
              text="AYSTATP"
              onClickHandler={onClickHandlerOption2}
            />
          </div>
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
