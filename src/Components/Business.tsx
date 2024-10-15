import { CSSProperties, useContext } from "react";
import { ChatOption } from "../HelperComponents/ChatOption";
import { MyComponent, MyComponentProps } from "../Utils/types";
import { InitialGreeting } from "./InitialGreeting";
import { Resume } from "./Resume";
import React from "react";
import { motion } from "framer-motion";
import { useSelectedComponentContext } from "../Context";

export const Business: React.FC<MyComponentProps> = (
  props: MyComponentProps
) => {
  const [isClicked, setIsClicked] = React.useState<boolean>(false);
  const { currentComponent, setCurrentComponentCallback } =
    useSelectedComponentContext();

  const thisComponent: MyComponent = {
    name: "Business",
    index: 1,
  };
  const clickedHandler = () => {
    setCurrentComponentCallback(thisComponent);
  };

  const clicked = currentComponent.name == thisComponent.name;

  const headerValue = getHeaderValue(clicked, clickedHandler);
  return (
    <>
      {headerValue}

      {clicked && (
        <>
          <div>
            I am a software engineer dedicated to crafting elegant solutions
          </div>
          <div>
            {/* <ChatOption
          text={"Resume"}
          onClickHandler={() =>
            props.setCurrentComponent(() => <Resume {...props} />, "Business")
          }
        /> */}
          </div>
        </>
      )}
    </>
  );
};

const getHeaderValue = (clicked: boolean, clickedHandler: any) => {
  if (clicked) {
    return (
      <motion.div
        animate={{ fontSize: "100px" }}
        onClick={() => clickedHandler(true)}
      >
        <div>Business</div>
      </motion.div>
    );
  } else {
    return (
      <motion.div onClick={() => clickedHandler(true)}>
        <div>Business</div>
      </motion.div>
    );
  }
};

const styles: CSSProperties = {
  position: "absolute",
  left: 0,
};
