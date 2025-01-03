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
import { Specialist } from "./Specialist/Specialist";

export const UniversityBody: React.FC<MyComponentProps> = (
  props: MyComponentProps
) => {
  const [isClicked, setIsClicked] = React.useState<boolean>(false);
  const { currentComponent, setCurrentComponentCallback } =
    useSelectedComponentContext();

  const onClickHandlerOption1 = () => {
    const component: MyComponent = {
      name: "Specialist",
      index: 2,
      actualComponent: <Specialist />,
      typingString: "specialist stream?",
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
          • Graduated in the
          <ClickableText
            text="specialist stream"
            onClickHandler={onClickHandlerOption1}
          />{" "}
          with a focus on data structures, algorithms and their proofs
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
