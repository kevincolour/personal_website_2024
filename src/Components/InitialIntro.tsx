import React from "react";
import { CSSProperties, FC } from "react";
import { Business } from "./Business";
import { MyComponent, MyComponentProps } from "../Utils/types";
import { ChatOption } from "../HelperComponents/ChatOption";
import { motion } from "framer-motion";
import { useSelectedComponentContext } from "../Context";

export const InitialIntro: React.FC<MyComponentProps> = (
  props: MyComponentProps
) => {
  //need some state to track components in past
  //need callback from here to component to set next component
  const initialIntro = "Hello, I am Kevin";
  const thisComponent: MyComponent = {
    name: "InitialIntro",
    index: 0,
  };
  const { currentComponent, setCurrentComponentCallback } =
    useSelectedComponentContext();
  const clicked = currentComponent.name == thisComponent.name;
  const onClickHandler = () => {
    setCurrentComponentCallback(thisComponent);
  };

  return (
    <>
      <motion.div layout onClick={onClickHandler}>
        {initialIntro}
      </motion.div>

      {clicked && (
        <div style={styles} className="optionsLeft">
          <div style={{ ...styles, fontSize: "10px" }}></div>
          <div style={styles}>
            <Business /> asdf
          </div>{" "}
          <div style={{ ...styles, fontSize: "10px" }}>or </div>
          <div style={styles}>Pleasure</div>
        </div>
      )}
    </>
  );
};

const styles: CSSProperties = {
  display: "inline-block",
};
