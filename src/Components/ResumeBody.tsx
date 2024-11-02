import { CSSProperties, useContext } from "react";
import { MyComponent, MyComponentProps } from "../Utils/types";
import { InitialGreeting } from "./InitialGreeting";
import React from "react";
import { motion } from "framer-motion";
import { useSelectedComponentContext } from "../Context";
import { getStyles } from "../Utils/styles";

export const ResumeBody: React.FC<MyComponentProps> = (
  props: MyComponentProps
) => {
  const [isClicked, setIsClicked] = React.useState<boolean>(false);
  const { currentComponent, setCurrentComponentCallback } =
    useSelectedComponentContext();
  const styles = getStyles();
  const onClickHandlerOption1 = () => {
    const resumeComponent: MyComponent = {
      name: "University",
      index: 3,
    };
    setCurrentComponentCallback(resumeComponent);
  };
  return (
    <div>
      <button>Download Resume</button>
      <div
        onClick={onClickHandlerOption1}
        style={{ ...styles.smallText, ...styles.clickableOption }}
      >
        University of Toronto, Computer Science
      </div>
      <div style={styles.smallText}>Trapeze Group, Intern</div>
      <div style={styles.smallText}>B3 Systems, Software Developer</div>
      <div style={styles.smallText}>Microsoft, Software Engineer (2)</div>
    </div>
  );
};
