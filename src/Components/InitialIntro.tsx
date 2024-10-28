import React from "react";
import { CSSProperties, FC } from "react";
import { MyComponent, MyComponentProps } from "../Utils/types";
import { motion } from "framer-motion";
import { useSelectedComponentContext } from "../Context";

export const InitialIntro: React.FC<MyComponentProps> = (
  props: MyComponentProps
) => {
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
      <div style={styles} className="optionsLeft">
        <div style={{ ...styles, fontSize: "10px" }}></div>
        <div onClick={onClickHandlerBusiness} style={styles}>
          Business
        </div>{" "}
        <div style={{ ...styles, fontSize: "10px" }}>or </div>
        <div onClick={onClickHandlerPleasure} style={styles}>
          Pleasure
        </div>
      </div>
    </>
  );
};

const styles: CSSProperties = {
  display: "inline-block",
};
