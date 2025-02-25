import { CSSProperties, useContext } from "react";
import { MyComponent, MyComponentProps } from "../../../../Utils/types";
import { InitialGreeting } from "../../../InitialGreeting";
import React from "react";
import { motion } from "framer-motion";
import { useSelectedComponentContext } from "../../../../Context";
import { getStyles } from "../../../../Utils/styles";
import { MyComponentWrapper } from "../../../Util/MyComponentWrapper";
import { TypingSimulator } from "../../../TypingSimulator";
import { ClickableText } from "../../../Util/ClickableText";
import { Agile } from "./Agile/Agile";
import { VisualBasic } from "./VisualBasic/VisualBasic";

export const Trapeze: React.FC<MyComponentProps> = (
  props: MyComponentProps
) => {
  const [isClicked, setIsClicked] = React.useState<boolean>(false);
  const { currentComponent, setCurrentComponentCallback } =
    useSelectedComponentContext();

  const onClickHandlerOption1 = () => {
    const component: MyComponent = {
      name: "Agile",
      index: 2,
      actualComponent: <Agile />,
      typingString: "How was working in Agile",
    };
    setSelectedComponent(component);
  };
  const onClickHandlerOption2 = () => {
    const component: MyComponent = {
      name: " Visual Basic",
      index: 2,
      actualComponent: <VisualBasic />,
      typingString: "How was it working with Visual Basic,",
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
          • Collaborated with
          <ClickableText
            text="Agile team members"
            onClickHandler={onClickHandlerOption1}
          />{" "}
          to find unique, systematic solutions for our clients by using{" "}
          <ClickableText
            text=" Visual Basic 6.0"
            onClickHandler={onClickHandlerOption2}
          />{" "}
          and C++ to create an approachable user interface and seamless user
          experience
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
