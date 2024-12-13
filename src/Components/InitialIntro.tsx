import React from "react";
import { CSSProperties, FC } from "react";
import { MyComponent, MyComponentProps } from "../Utils/types";
import { motion } from "framer-motion";
import { useSelectedComponentContext } from "../Context";
import { getStyles } from "../Utils/styles";
import Chatbox from "../Assets/Chatbox.svg";
import { ClickableText } from "./Util/ClickableText";
import { TypingSimulator } from "./TypingSimulator";

export const InitialIntro: React.FC<MyComponentProps> = (
  props: MyComponentProps
) => {
  const commonStyles = getStyles();

  //need some state to track components in past
  //need callback from here to component to set next component
  const thisComponent: MyComponent = {
    name: "InitialIntro",
    index: 0,
  };
  const { currentComponent, setCurrentComponentCallback } =
    useSelectedComponentContext();

  const [selectedComponent, setSelectedComponent] = React.useState<
    MyComponent | undefined
  >();
  const clicked = currentComponent.name == thisComponent.name;
  const onClickHandlerBusiness = () => {
    const businessComponent: MyComponent = {
      index: 1,
      name: "Business",
      typingString: "I am here for business.",
    };
    setSelectedComponent(businessComponent);
  };
  const onClickHandlerPleasure = () => {
    const PleasureComponent: MyComponent = {
      name: "Pleasure",
      index: 1,
      typingString: "I am here for pleasure!",
    };
    setSelectedComponent(PleasureComponent);
  };
  const onTypingFinishHandler = () => {
    if (selectedComponent) {
      setCurrentComponentCallback(selectedComponent);
    }
  };

  return (
    <>
      <div style={wrapperStyle} className="">
        <div>Hello, are you here for</div>
        <div style={{ ...styles, fontSize: "10px" }}></div>
        <div style={{}}>
          <ClickableText
            text="Business"
            onClickHandler={onClickHandlerBusiness}
          />{" "}
          or{" "}
          <ClickableText
            text="Pleasure"
            onClickHandler={onClickHandlerPleasure}
          />
        </div>
        {selectedComponent && (
          <TypingSimulator
            key={selectedComponent.typingString}
            onFinishHandler={onTypingFinishHandler}
            typingString={selectedComponent.typingString}
          />
        )}
      </div>
    </>
  );
};

const styles: CSSProperties = {
  display: "inline-block",
};

const wrapperStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
};
