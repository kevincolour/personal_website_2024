import { CSSProperties, useContext } from "react";
import { MyComponent, MyComponentProps } from "../Utils/types";
import React from "react";
import { motion } from "framer-motion";
import { useSelectedComponentContext } from "../Context";
import profilePhoto from "../Assets/profilepicture.jpg";

export const HelloIAmKevin: React.FC<MyComponentProps> = (
  props: MyComponentProps
) => {
  const [isClicked, setIsClicked] = React.useState<boolean>(false);
  const { currentComponent, setCurrentComponentCallback } =
    useSelectedComponentContext();

  const onClickHandlerOption1 = () => {
    const resumeComponent: MyComponent = {
      name: "InitialIntro",
      index: 0,
    };
    setCurrentComponentCallback(resumeComponent);
  };
  return (
    <>
      <div
        style={{
          width: "100%",
          borderBottom: "1px solid black",
          paddingBottom: "10px",
          paddingTop: "10px",
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
      </div>
    </>
  );
};
