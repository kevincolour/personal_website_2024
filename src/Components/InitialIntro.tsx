import React from "react";
import { CSSProperties, FC } from "react";
import { MyComponent, MyComponentProps } from "../Utils/types";
import { motion } from "framer-motion";
import { useSelectedComponentContext } from "../Context";
import { getStyles } from "../Utils/styles";
import Chatbox from "../Assets/Chatbox.svg";

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
  const clicked = currentComponent.name == thisComponent.name;
  const onClickHandlerBusiness = () => {
    const businessComponent: MyComponent = {
      name: "Business",
      index: 1,
    };
    setCurrentComponentCallback(businessComponent);
  };
  const onClickHandlerPleasure = () => {
    const PleasureComponent: MyComponent = {
      name: "Pleasure",
      index: 1,
    };
    setCurrentComponentCallback(PleasureComponent);
  };
  return (
    <>
      <div style={wrapperStyle} className="">
        <div>Hello, are you here for</div>
        <div style={{ ...styles, fontSize: "10px" }}></div>
        <div style={commonStyles.clickableOptionWrapper}>
          <div
            onClick={onClickHandlerBusiness}
            style={commonStyles.clickableOption}
          >
            Business
          </div>
          <div style={commonStyles.clickableOptionWrapper}>or</div>
          <div
            onClick={onClickHandlerPleasure}
            style={{
              ...commonStyles.clickableOption,
              // backgroundImage: "url(" + Chatbox + ")",
            }}
          >
            Pleasure
          </div>
        </div>
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
