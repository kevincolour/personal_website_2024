import { CSSProperties, useContext } from "react";
import { MyComponent, MyComponentProps } from "../../../../Utils/types";
import { InitialGreeting } from "../../../InitialGreeting";
import React from "react";
import { motion } from "framer-motion";
import { useSelectedComponentContext } from "../../../../Context";
import { getStyles } from "../../../../Utils/styles";
import { MyComponentWrapper } from "../../../Util/MyComponentWrapper";
import { Programming } from "./Programming/Programming";
import { ClickableText } from "../../../Util/ClickableText";
import { Writing } from "./Writing/Writing";
import { Music } from "./Music/Music";

export const Projects: React.FC<MyComponentProps> = (
  props: MyComponentProps
) => {
  const [isClicked, setIsClicked] = React.useState<boolean>(false);
  const { currentComponent, setCurrentComponentCallback } =
    useSelectedComponentContext();

  const onClickHandlerOption1 = () => {
    const component: MyComponent = {
      name: "Music",
      index: 2,
      actualComponent: <Music />,
      typingString: "I want to see your Music",
    };
    setCurrentComponentCallback(component);
  };
  const onClickHandlerOption2 = () => {
    const component: MyComponent = {
      name: "Programming",
      index: 2,
      actualComponent: <Programming />,
      typingString: "I want to see programming",
    };
    setCurrentComponentCallback(component);
  };
  const onClickHandlerOption3 = () => {
    const component: MyComponent = {
      name: "Writing",
      index: 2,
      actualComponent: <Writing />,
      typingString: "I want to see your writing",
    };
    setCurrentComponentCallback(component);
  };
  const styles = getStyles();
  return (
    <>
      <MyComponentWrapper>
        <motion.div>
          <div style={{ marginBottom: "20px" }}>which type? I've got </div>
          <div>
            {" "}
            <ClickableText
              onClickHandler={onClickHandlerOption1}
              text="Music"
            />
          </div>
          <div>
            {" "}
            <ClickableText
              onClickHandler={onClickHandlerOption3}
              text="Writing"
            />
          </div>
          <div>
            {" "}
            <ClickableText
              onClickHandler={onClickHandlerOption2}
              text="Programming"
            />
          </div>
        </motion.div>
      </MyComponentWrapper>
    </>
  );
};
