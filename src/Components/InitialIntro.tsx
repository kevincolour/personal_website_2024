import React from "react";
import { CSSProperties, FC } from "react";
import { MyComponent, MyComponentProps } from "../Utils/types";
import { motion } from "framer-motion";
import { useSelectedComponentContext } from "../Context";
import { getStyles } from "../Utils/styles";
import Chatbox from "../Assets/Chatbox.svg";
import { ClickableText } from "./Util/ClickableText";
import { TypingSimulator } from "./TypingSimulator";
import { useGetHeight } from "../Utils/helpersGobal";
import { MyComponentWrapper } from "./Util/MyComponentWrapper";

// import df from "../AYSTATP/dist/(tabs)/index.html";

type InitialIntroProps = {
  fromRedirect?: boolean;
};
export const InitialIntro = (props: InitialIntroProps) => {
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

  const height = useGetHeight();
  const transitionObj = props.fromRedirect ? { delay: 0.5 } : { delay: 4 };
  return (
    <>
      {/* <iframe src=".\AYSTATP\dist\(tabs)\index.html"></iframe> */}

      <MyComponentWrapper transitionObj={transitionObj}>
        <div className="">
          Are you here for{" "}
          <ClickableText
            text="Business"
            onClickHandler={onClickHandlerBusiness}
          />
          {" or for  "}
          <ClickableText
            text="Pleasure"
            onClickHandler={onClickHandlerPleasure}
          />
        </div>
      </MyComponentWrapper>
      {selectedComponent && (
        <TypingSimulator
          key={selectedComponent.typingString}
          onFinishHandler={onTypingFinishHandler}
          typingString={selectedComponent.typingString}
        />
      )}
    </>
  );
};

const styles: CSSProperties = {
  display: "inline-block",
};
