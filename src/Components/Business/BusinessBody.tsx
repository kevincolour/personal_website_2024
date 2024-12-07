import { CSSProperties, useContext } from "react";
import { MyComponent, MyComponentProps } from "../../Utils/types";
import { InitialGreeting } from "../InitialGreeting";
import React from "react";
import { motion } from "framer-motion";
import { useSelectedComponentContext } from "../../Context";
import { getStyles, messsageWrapperStyle } from "../../Utils/styles";
import { ClickableText } from "../Util/ClickableText";
import { MyComponentWrapper } from "../Util/MyComponentWrapper";

export const BusinessBody: React.FC<MyComponentProps> = (
  props: MyComponentProps
) => {
  const [isClicked, setIsClicked] = React.useState<boolean>(false);
  const { currentComponent, setCurrentComponentCallback } =
    useSelectedComponentContext();

  const thisComponent: MyComponent = {
    name: "Business",
    index: 1,
  };

  const onClickHandlerOption1 = () => {
    const businessComponent: MyComponent = {
      name: "Resume",
      index: 2,
    };
    setCurrentComponentCallback(businessComponent);
  };
  const onClickHandlerOption2 = () => {
    const businessComponent: MyComponent = {
      name: "Projects",
      index: 2,
    };
    setCurrentComponentCallback(businessComponent);
  };
  const onClickHandlerOption3 = () => {
    const businessComponent: MyComponent = {
      name: "Contact",
      index: 2,
    };
    setCurrentComponentCallback(businessComponent);
  };
  const styles = getStyles();
  return (
    <div style={{ display: "flex" }}>
      <MyComponentWrapper>
        {/* <div>
            I am a software engineer dedicated to crafting elegant solutions
          </div> */}

        <motion.div>
          Welcome to my website. Please feel free to read more about me, or you
          can ask about my{" "}
          <ClickableText text="resume" onClickHandler={onClickHandlerOption1} />
          ,{" "}
          <ClickableText
            text="projects"
            onClickHandler={onClickHandlerOption2}
          />
          , or{" "}
          <ClickableText
            text="contact"
            onClickHandler={onClickHandlerOption3}
          />{" "}
          me more directly!.
        </motion.div>
      </MyComponentWrapper>
    </div>
  );
};

//147efb
const arrowRightStyle: CSSProperties = {
  width: 0,
  height: 0,
  borderTop: "10px solid transparent",
  borderBottom: "10px solid transparent",
  borderLeft: "15px solid #e9e9eb",
  position: "absolute",
  top: 95,
  right: -10,
};

const businessStyles: CSSProperties = {
  // border: "1px solid black",
  background: "#e9e9eb",
  margin: 5,
  marginLeft: 8,
  borderRadius: 10,
  position: "relative",
  textAlign: "left",
  padding: 10,
  // height: 50,
  // padding: 10,
  // width: "100%",
  // display: "none",
};
//147efb
const arrowLeftStyle: CSSProperties = {
  width: 0,
  height: 0,
  borderTop: "10px solid transparent",
  borderBottom: "10px solid transparent",
  borderRight: "15px solid #e9e9eb",
  position: "absolute",
  top: 90,
  left: -10,
};
