import { CSSProperties, useContext } from "react";
import { MyComponent, MyComponentProps } from "../Utils/types";
import React from "react";
import { motion, useMotionValue } from "framer-motion";
import { useSelectedComponentContext, useUserData } from "../Context";
import profilePhoto from "../Assets/profilepicture.jpg";
import profilePhotoInsta from "../Assets/profileinsta.jpg";
import { FULL_WIDTH, GRAY_COLOUR } from "../Utils/constants";

export const HelloIAmKevin: React.FC<MyComponentProps> = (
  props: MyComponentProps
) => {
  const [isClicked, setIsClicked] = React.useState<boolean>(false);
  const { currentComponent, setCurrentComponentCallback } =
    useSelectedComponentContext();
  const { currentUserData, setCurrentUserDataCallback } = useUserData();

  const [bouncingNumber, setBouncingNumber] = React.useState<number>(0);
  const onClickHandlerOption1 = () => {
    const resumeComponent: MyComponent = {
      name: "InitialIntro",
      index: 0,
    };
    setCurrentComponentCallback(resumeComponent);
  };
  const opacity = useMotionValue(0);
  const percent = (currentUserData.currentProgress / 5) * 100;
  const isFirstPage =
    currentComponent.name == "InitialIntro" || currentComponent.name == "none";
  const styles = getStyles(percent * 100);

  const onBackClickHandler = () => {
    if (currentComponent.previousComponent) {
      setCurrentComponentCallback(currentComponent.previousComponent);
    }
  };

  React.useEffect(() => {
    const intervalFunc = window.setInterval(() => {
      if (!isFirstPage) {
        if (bouncingNumber == 0) {
          setBouncingNumber(0.2);
        } else {
          setBouncingNumber(bouncingNumber * -1);
        }
      }
    }, 500);

    return () => clearInterval(intervalFunc);
  }, [bouncingNumber, isFirstPage]);

  const width = window.innerWidth > 700 ? FULL_WIDTH.toString() + "px" : "100%";
  return (
    <div id="topHeaderBar">
      <div
        onClick={onBackClickHandler}
        style={{
          position: "fixed",
          // border: "1px solid black",
          zIndex: 20,
          top: 25,
          fontSize: 30,
          color: "#1d89fd",
          cursor: "pointer",
        }}
      >
        {"<"}
      </div>
      <motion.div
        animate={{
          clipPath:
            "polygon(" +
            (percent + bouncingNumber) +
            "% 0%, 100% 0%, 100% 99.5%, " +
            (percent + bouncingNumber * -1) +
            "%  100%)",
        }}
        initial={{
          clipPath:
            "polygon(" + 0 + "% 0%, 100% 0%, 100% 99.5%, " + 0 + "%  100%)",
        }}
        style={{
          position: "fixed",

          // clipPath:
          //   "polygon(" +
          //   (percent + bouncingNumber) +
          //   "% 0%, 100% 0%, 100% 99.5%, " +
          //   (percent + bouncingNumber) +
          //   "%  100%)",
          width: width,
          borderBottom: "1px solid black",
          paddingBottom: "10px",
          paddingTop: "10px",
          zIndex: "12",
          background: "white",
          // background:
          //   "linear-gradient(90deg, rgba(185,72,72,0.4990371148459384) " +
          //   percent * 100 +
          //   "%, rgba(255,255,255,1) 100%)",
        }}
      >
        <>
          <div>
            {" "}
            <img
              style={{
                position: "relative",
                width: 60,
                height: 60,
                backgroundColor: "black",
                margin: "auto",
                borderRadius: "37.5px",
              }}
              src={profilePhoto}
            />
          </div>
          <div
            style={{ fontSize: 15, cursor: "pointer" }}
            onClick={onClickHandlerOption1}
          >
            kevincolour.com
            <span style={{ fontSize: 13, opacity: 0.6 }}>{">"}</span>
          </div>
        </>
      </motion.div>

      <motion.div
        style={{
          position: "fixed",
          zIndex: "11",
          width: width,
          borderBottom: "1px solid black",
          paddingBottom: "10px",
          paddingTop: "10px",
          background: GRAY_COLOUR,
          // background:
          //   "linear-gradient(90deg, rgba(185,72,72,0.4990371148459384) " +
          //   percent * 100 +
          //   "%, rgba(255,255,255,1) 100%)",
        }}
      >
        <div>
          {" "}
          <img
            style={{
              position: "relative",
              width: 60,
              height: 60,
              backgroundColor: "black",
              margin: "auto",
              borderRadius: "37.5px",
              objectFit: "contain",
              objectPosition: "top",
            }}
            src={profilePhotoInsta}
          />
        </div>
        <div style={{ fontSize: 15 }} onClick={onClickHandlerOption1}>
          Kevin Kim
          <span style={{ fontSize: 13, opacity: 0.6 }}>{">"}</span>
        </div>
      </motion.div>

      {/* nNOT USED, JSUT FOR FORMATTING */}
      <motion.div
        style={{
          zIndex: "11",
          width: width,
          borderBottom: "1px solid black",
          paddingBottom: "10px",
          paddingTop: "10px",
          background: GRAY_COLOUR,
          // background:
          //   "linear-gradient(90deg, rgba(185,72,72,0.4990371148459384) " +
          //   percent * 100 +
          //   "%, rgba(255,255,255,1) 100%)",
        }}
      >
        <div>
          {" "}
          <img
            style={{
              position: "relative",
              width: 60,
              height: 60,
              backgroundColor: "black",
              margin: "auto",
              borderRadius: "37.5px",
            }}
            src={profilePhotoInsta}
          />
        </div>
        <div style={{ fontSize: 15 }} onClick={onClickHandlerOption1}>
          not used
        </div>
      </motion.div>
    </div>
  );
};

const getStyles = (percent: number) => {
  const styles: CSSProperties = {
    width: "100%",
    borderBottom: "1px solid black",
    paddingBottom: "10px",
    paddingTop: "10px",
    // background:
    //   "linear-gradient(90deg, rgba(143,26,26,1) " +
    //   percent +
    //   "%, rgba(247,247,255,1) 100%)",
  };
  return styles;
};
