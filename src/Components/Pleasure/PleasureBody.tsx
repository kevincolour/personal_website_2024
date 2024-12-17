import { CSSProperties, useContext } from "react";
import { MyComponent, MyComponentProps } from "../../Utils/types";
import { InitialGreeting } from "../InitialGreeting";
import React from "react";
import { motion } from "framer-motion";
import { useSelectedComponentContext } from "../../Context";
import { getStyles } from "../../Utils/styles";
import { ClickableText } from "../Util/ClickableText";
import { MyComponentWrapper } from "../Util/MyComponentWrapper";
import { TypingSimulator } from "../TypingSimulator";

export const PleasureBody: React.FC<MyComponentProps> = (
  props: MyComponentProps
) => {
  const [isClicked, setIsClicked] = React.useState<boolean>(false);
  const { currentComponent, setCurrentComponentCallback } =
    useSelectedComponentContext();

  const onClickHandlerOption1 = () => {
    const component: MyComponent = {
      name: "PlayAGame",
      index: 2,
      typingString: "I want to play a game, what type of games do you have?",
    };
    setSelectedComponent(component);
  };
  const onClickHandlerOption2 = () => {
    const component: MyComponent = {
      name: "Instagram",
      index: 2,
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
  const styles = getStyles();
  return (
    <>
      <MyComponentWrapper>
        Awesome! What do you want to do... we could{" "}
        <ClickableText
          text="play a game"
          onClickHandler={onClickHandlerOption1}
        />{" "}
        or{" "}
        <ClickableText
          text="see the sights"
          onClickHandler={onClickHandlerOption2}
        />{" "}
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

const businessStyles: CSSProperties = {
  background: "#147efb",
  color: "white",
  margin: 10,
  marginLeft: 8,
  borderRadius: 10,
  position: "relative",
  padding: 15,
  textAlign: "left",
};

//147efb
const arrowRightStyle: CSSProperties = {
  width: 0,
  height: 0,
  borderTop: "10px solid transparent",
  borderBottom: "10px solid transparent",
  borderLeft: "15px solid #147efb",
  position: "absolute",
  top: 95,
  right: -10,
};
