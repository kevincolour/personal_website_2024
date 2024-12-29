import { CSSProperties, useContext } from "react";
import { MyComponent, MyComponentProps } from "../../../../../../Utils/types";
import { InitialGreeting } from "../../../../../InitialGreeting";
import React from "react";
import { motion } from "framer-motion";
import { useSelectedComponentContext } from "../../../../../../Context";
import { getStyles } from "../../../../../../Utils/styles";
import { MyComponentWrapper } from "../../../../../Util/MyComponentWrapper";
import { TypingSimulator } from "../../../../../TypingSimulator";
import { ClickableText } from "../../../../../Util/ClickableText";
import { Marketable } from "./Marketable/Marketable";
import { Honours } from "./Honours/Honours";

export const Weird: React.FC<MyComponentProps> = (props: MyComponentProps) => {
  const [isClicked, setIsClicked] = React.useState<boolean>(false);
  const { currentComponent, setCurrentComponentCallback } =
    useSelectedComponentContext();

  const onClickHandlerOption2 = () => {
    const component: MyComponent = {
      name: "Honours",
      index: 2,
      actualComponent: <Honours />,
      typingString: "were you a good student",
    };
    setSelectedComponent(component);
  };
  const onClickHandlerOption1 = () => {
    const component: MyComponent = {
      name: "marketable",
      index: 2,
      actualComponent: <Marketable />,
      typingString: "It's important to be marketable, is it even weird",
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
          It's a good marketing strategy though, because it makes the graduates
          much{" "}
          <ClickableText
            text="more marketable"
            onClickHandler={onClickHandlerOption1}
          />{" "}
          . I routinely see people get impressed at this "double major" moniker
        </div>
      </MyComponentWrapper>
      <MyComponentWrapper transitionObj={{ delay: 4 }}>
        <div>
          There is another similiar startegy that U of T uses for it's
          graduates. It's a simple one, but an effective one. Every graduate has
          an "honours" degree at U of T. The loweset level of degree is
          "honours".
        </div>
      </MyComponentWrapper>
      <MyComponentWrapper transitionObj={{ delay: 8 }}>
        <div>
          So I can state confidently in my resume that{" "}
          <ClickableText
            text="an honours student"
            onClickHandler={onClickHandlerOption2}
          />{" "}
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
