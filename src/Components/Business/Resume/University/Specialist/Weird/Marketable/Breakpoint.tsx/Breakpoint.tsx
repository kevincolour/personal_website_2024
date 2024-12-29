import { CSSProperties, useContext } from "react";
import {
  MyComponent,
  MyComponentProps,
} from "../../../../../../../../Utils/types";
import { InitialGreeting } from "../../../../../../../InitialGreeting";
import React from "react";
import { motion } from "framer-motion";
import { useSelectedComponentContext } from "../../../../../../../../Context";
import { getStyles } from "../../../../../../../../Utils/styles";
import { MyComponentWrapper } from "../../../../../../../Util/MyComponentWrapper";
import { TypingSimulator } from "../../../../../../../TypingSimulator";
import { ClickableText } from "../../../../../../../Util/ClickableText";

export const Marketable: React.FC<MyComponentProps> = (
  props: MyComponentProps
) => {
  const [isClicked, setIsClicked] = React.useState<boolean>(false);
  const { currentComponent, setCurrentComponentCallback } =
    useSelectedComponentContext();

  const onClickHandlerOption2 = () => {
    const component: MyComponent = {
      name: "honours",
      index: 2,
    };
    setSelectedComponent(component);
  };
  const onClickHandlerOption1 = () => {
    const component: MyComponent = {
      name: "marketable",
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
        <div>
          Being marketable is of course important don't get me wrong, but{" "}
          <ClickableText
            text=" there
            exists a breakpoint"
            onClickHandler={onClickHandlerOption1}
          />{" "}
          where marketing just becomes plain old deception and tricks of the
          trade becomes the a common back alley grift
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
