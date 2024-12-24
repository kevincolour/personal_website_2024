import { CSSProperties, useContext } from "react";
import { MyComponent, MyComponentProps } from "../../../../../Utils/types";
import { InitialGreeting } from "../../../../InitialGreeting";
import React from "react";
import { motion } from "framer-motion";
import { useSelectedComponentContext } from "../../../../../Context";
import { getStyles } from "../../../../../Utils/styles";
import { MyComponentWrapper } from "../../../../Util/MyComponentWrapper";
import { TypingSimulator } from "../../../../TypingSimulator";
import { ClickableText } from "../../../../Util/ClickableText";
import { Weird } from "./Weird/Weird";

export const Specialist: React.FC<MyComponentProps> = (
  props: MyComponentProps
) => {
  const [isClicked, setIsClicked] = React.useState<boolean>(false);
  const { currentComponent, setCurrentComponentCallback } =
    useSelectedComponentContext();

  const onClickHandlerOption1 = () => {
    const component: MyComponent = {
      name: "weird",
      index: 2,
      actualComponent: <Weird />,
      typingString: "that is weird...",
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
        <div>
          Yeah, at U of T there is this concept of a "specialist" degree where
          you do 26 courses instead of the 16 required for a "major"
        </div>
      </MyComponentWrapper>
      <MyComponentWrapper transitionObj={{ delay: 4 }}>
        <div>
          Keep in mind you need 40 courses to graduate, so if I was a "major" I
          would have spent less than half my time in university in required
          courses
        </div>
      </MyComponentWrapper>
      <MyComponentWrapper transitionObj={{ delay: 8 }}>
        <div>
          If you do a major, you are required to do two majors and so most
          graduates of U of T by default have two majors which is{" "}
          <ClickableText text="weird." onClickHandler={onClickHandlerOption1} />
        </div>
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
