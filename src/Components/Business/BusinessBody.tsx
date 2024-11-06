import { CSSProperties, useContext } from "react";
import { MyComponent, MyComponentProps } from "../../Utils/types";
import { InitialGreeting } from "../InitialGreeting";
import React from "react";
import { motion } from "framer-motion";
import { useSelectedComponentContext } from "../../Context";
import { getStyles } from "../../Utils/styles";

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
  const styles = getStyles();
  return (
    <div>
      <div>
        I am a software engineer dedicated to crafting elegant solutions
      </div>
      <div>in other words</div>
      <div style={{ marginTop: 20 }}>
        <span onClick={onClickHandlerOption1} style={styles.clickableOption}>
          👨‍💻
        </span>
        <span onClick={onClickHandlerOption1} style={styles.clickableOption}>
          🛠️
        </span>
        <span onClick={onClickHandlerOption1} style={styles.clickableOption}>
          💡
        </span>
      </div>
    </div>
  );
};
