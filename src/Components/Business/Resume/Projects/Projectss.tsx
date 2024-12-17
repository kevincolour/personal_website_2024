import { CSSProperties, useContext } from "react";
import { MyComponent, MyComponentProps } from "../../../../Utils/types";
import { InitialGreeting } from "../../../InitialGreeting";
import React from "react";
import { motion } from "framer-motion";
import { useSelectedComponentContext } from "../../../../Context";
import { getStyles } from "../../../../Utils/styles";
import { MyComponentWrapper } from "../../../Util/MyComponentWrapper";
import { Programming } from "./Programming/Programming";

export const Projects: React.FC<MyComponentProps> = (
  props: MyComponentProps
) => {
  const [isClicked, setIsClicked] = React.useState<boolean>(false);
  const { currentComponent, setCurrentComponentCallback } =
    useSelectedComponentContext();

  const onClickHandlerOption1 = () => {
    const component: MyComponent = {
      name: "Programming",
      index: 2,
      actualComponent: <Programming />,
      typingString: "I want to see programming",
    };
    setCurrentComponentCallback(component);
  };
  const styles = getStyles();
  return (
    <>
      <MyComponentWrapper>
        <motion.div>
          <div>which type? I've got </div>
          <div>writing</div>
          <div onClick={onClickHandlerOption1}>programming</div>
          <div>music</div>
        </motion.div>
      </MyComponentWrapper>
    </>
  );
};
