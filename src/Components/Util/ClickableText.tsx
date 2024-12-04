import { CSSProperties, useContext } from "react";
import { MyComponent, MyComponentProps } from "../../Utils/types";
import { InitialGreeting } from "../InitialGreeting";
import React from "react";
import { motion } from "framer-motion";
import { useSelectedComponentContext } from "../../Context";
import { getStyles, messsageWrapperStyle } from "../../Utils/styles";

type ClickableTextProps = {
  onClickHandler: () => void;
  text: string;
};

export const ClickableText: React.FC<ClickableTextProps> = (
  props: ClickableTextProps
) => {
  const [isClicked, setIsClicked] = React.useState<boolean>(false);
  const { currentComponent, setCurrentComponentCallback } =
    useSelectedComponentContext();

  const thisComponent: MyComponent = {
    name: "Business",
    index: 1,
  };

  const styles = getStyles();
  return (
    <motion.div
      onClick={props.onClickHandler}
      style={{ display: "inline-block" }}
      initial={{ scale: 1 }}
      animate={{ scale: 1, rotate: [5, , 0, -5, 0, 0, 0, 0, 0, 0, 0, 0, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      {props.text}
    </motion.div>
    /* <div style={{ marginTop: 20 }}>
        <span onClick={onClickHandlerOption1} style={styles.clickableOption}>
          👨‍💻
        </span>
        <span onClick={onClickHandlerOption1} style={styles.clickableOption}>
          🛠️
        </span>
        <span onClick={onClickHandlerOption1} style={styles.clickableOption}>
          💡
        </span>
      </div> */
  );
};
