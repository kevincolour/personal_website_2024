import { CSSProperties, useContext } from "react";
import { MyComponent, MyComponentProps } from "../Utils/types";
import React from "react";
import { motion, useMotionValue } from "framer-motion";
import { useSelectedComponentContext, useUserData } from "../Context";
import profilePhoto from "../Assets/profilepicture.jpg";

export const HelloIAmKevin: React.FC<MyComponentProps> = (
  props: MyComponentProps
) => {
  const [isClicked, setIsClicked] = React.useState<boolean>(false);
  const { currentComponent, setCurrentComponentCallback } =
    useSelectedComponentContext();
  const { currentUserData, setCurrentUserDataCallback } = useUserData();

  const onClickHandlerOption1 = () => {
    const resumeComponent: MyComponent = {
      name: "InitialIntro",
      index: 0,
    };
    setCurrentComponentCallback(resumeComponent);
  };
  const opacity = useMotionValue(0);
  const percent = currentUserData.currentProgress / 5;
  const styles = getStyles(percent * 100);

  return (
    <>
      <motion.div
        animate={{
          width: "100%",
          borderBottom: "1px solid black",
          paddingBottom: "10px",
          paddingTop: "10px",
          background:
            "linear-gradient(90deg, rgba(185,72,72,0.4990371148459384) " +
            percent * 100 +
            "%, rgba(255,255,255,1) 100%)",
        }}
      >
        <div>
          {" "}
          <img
            style={{
              position: "relative",
              width: 75,
              height: 75,
              backgroundColor: "black",
              margin: "auto",
              borderRadius: "37.5px",
            }}
            src={profilePhoto}
          />
        </div>
        <div style={{}} onClick={onClickHandlerOption1}>
          kevincolour.com
        </div>
      </motion.div>
    </>
  );
};

const getStyles = (percent: number) => {
  const styles: CSSProperties = {
    width: "100%",
    borderBottom: "1px solid black",
    paddingBottom: "10px",
    paddingTop: "10px",
    background:
      "linear-gradient(90deg, rgba(143,26,26,1) " +
      percent +
      "%, rgba(247,247,255,1) 100%)",
  };
  return styles;
};
