import { CSSProperties, useContext } from "react";
import { MyComponent, MyComponentProps } from "../../Utils/types";
import { InitialGreeting } from "../InitialGreeting";
import React from "react";
import { motion } from "framer-motion";
import { useSelectedComponentContext } from "../../Context";
import { getStyles, messsageWrapperStyle } from "../../Utils/styles";
import { ClickableText } from "../Util/ClickableText";

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
    <div style={{ display: "flex", justifyContent: "end" }}>
      <div style={messsageWrapperStyle}>
        <div style={businessStyles}>
          <div style={arrowRightStyle}></div>
          {/* <div>
            I am a software engineer dedicated to crafting elegant solutions
          </div> */}

          <motion.div>
            Welcome to my website. Please feel free to read more about me, or
            you can ask about my{" "}
            <ClickableText
              text="resume"
              onClickHandler={onClickHandlerOption1}
            />
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

          {/* <div>in other words</div> */}
          {/* <div style={{ marginTop: 20 }}>
        <span onClick={onClickHandlerOption1} style={styles.clickableOption}>
          👨‍💻
        </span>
        <span onClick={onClickHandlerOption1} style={styles.clickableOption}>
          🛠️
        </span>
        <span onClick={onClickHandlerOption1} style={styles.clickableOption}>
          💡
        </span>
      </div> */}
        </div>
      </div>
    </div>
  );
};

const businessStyles: CSSProperties = {
  background: "#147efb",
  color: "white",
  margin: 10,
  marginLeft: 8,
  borderRadius: 10,
  position: "relative",
  padding: 15,
  textAlign: "left",
};

//147efb
const arrowRightStyle: CSSProperties = {
  width: 0,
  height: 0,
  borderTop: "10px solid transparent",
  borderBottom: "10px solid transparent",
  borderLeft: "15px solid #147efb",
  position: "absolute",
  top: 95,
  right: -10,
};
