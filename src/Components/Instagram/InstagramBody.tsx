import { CSSProperties, createRef, useContext, useRef } from "react";
import { MyComponent, MyComponentProps } from "../../Utils/types";
import { InitialGreeting } from "../InitialGreeting";
import React from "react";
import { motion } from "framer-motion";
import { useSelectedComponentContext } from "../../Context";
import { getStyles } from "../../Utils/styles";
import { ClickableText } from "../Util/ClickableText";
import { Modal } from "@fluentui/react";

import cat from "../../Assets/cat.jpg";
import cat2 from "../../Assets/cat2.jpg";

import first from "../../Assets/InstagramProfile/first.png";
import second from "../../Assets/InstagramProfile/second.png";
import third from "../../Assets/InstagramProfile/third.png";
import fourth from "../../Assets/InstagramProfile/HiddenPhotos/pic4.jpg";
import fitth from "../../Assets/InstagramProfile/HiddenPhotos/pic5.png";
import sixth from "../../Assets/InstagramProfile/HiddenPhotos/pic6.jpg";
import seventh from "../../Assets/InstagramProfile/HiddenPhotos/pic7.jpg";
import eigth from "../../Assets/InstagramProfile/HiddenPhotos/pic8.jpg";
import ninth from "../../Assets/InstagramProfile/HiddenPhotos/pic9.jpg";

import dotsselected from "../../Assets/InstagramProfile/9dots.png";
import dots from "../../Assets/InstagramProfile/9dotsnotselected.jpg";

import taggedphoto from "../../Assets/InstagramProfile/taggedphoto.png";
import taggedphotoselected from "../../Assets/InstagramProfile/taggedphotosselected.png";
import useLongPress from "./useLongPress";
import { InstagramBodyPicture } from "./InstagramBodyPicture";
import { InstagramBodyProfile } from "./InstagramBodyProfile";
import { InstagramTop } from "./InstagramTop";
import { isMobile } from "../../Utils/helpers";
import { WIDTH_RESPONSIVE } from "../../Utils/constants";

export const InstagramBody: React.FC<MyComponentProps> = (
  props: MyComponentProps
) => {
  const [isClicked, setIsClicked] = React.useState<boolean>(false);
  const [isHold, setHold] = React.useState<boolean>(false);
  const [isProfile, setProfile] = React.useState<boolean>(false);

  const { currentComponent, setCurrentComponentCallback } =
    useSelectedComponentContext();

  const ref = createRef<HTMLDivElement>();
  const styles = getStyles();
  const topButtonsHandler = () => {
    setProfile(true);
  };
  const topButtonsHandlerDefault = () => {
    setProfile(false);
  };
  let vw = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  const isMobileDevice = isMobile();
  return (
    <div style={{}}>
      <InstagramTop />
      {/* buttons */}
      <div
        style={{
          margin: "1px",
          display: "flex",
          width: "100%",
          justifyContent: "space-evenly",
          position: "relative",
        }}
      >
        <div
          onClick={topButtonsHandlerDefault}
          style={!isProfile ? { borderBottom: "2px solid black" } : {}}
        >
          {isProfile ? (
            <img style={{ width: 35 }} src={dots} />
          ) : (
            <img style={{ width: 35 }} src={dotsselected} />
          )}
        </div>

        <div
          onClick={topButtonsHandler}
          style={isProfile ? { borderBottom: "3px solid black" } : {}}
        >
          {!isProfile ? (
            <img style={{ width: 30 }} src={taggedphoto} />
          ) : (
            <img style={{ width: 35 }} src={taggedphotoselected} />
          )}
        </div>
      </div>
      {isProfile && <InstagramBodyProfile />}

      <motion.div
        animate={isProfile ? { x: -vw } : { x: 0 }}
        style={
          isMobileDevice
            ? { position: "absolute", width: WIDTH_RESPONSIVE, zIndex: 3 }
            : {
                minHeight: "100px",
                margin: "auto",
                position: "relative",
                bottom: 0,
                maxHeight: "40dvh",
                overflow: "auto",
              }
        }
        transition={{ damping: 20, duration: 0.2 }}
      >
        {/* <div
        style={
          isMobileDevice
            ? {
                minHeight: "100px",
                margin: "auto",
                position: "relative",
                bottom: 0,
              }
            : {
                minHeight: "100px",
                margin: "auto",
                position: "relative",
                bottom: 0,
                maxHeight: "40dvh",
                overflow: "auto",
              }
        }
      > */}
        <div
          style={{
            display: "flex",
            width: "100%",
            filter: "blur(5px)",
            pointerEvents: "none",
          }}
        >
          <InstagramBodyPicture key={ninth + "5"} pic={ninth} index={0} />
          <InstagramBodyPicture key={eigth + "6"} pic={eigth} index={1} />
          <InstagramBodyPicture key={seventh + "7"} pic={seventh} index={2} />
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            filter: "blur(5px)",
            pointerEvents: "none",
          }}
        >
          <InstagramBodyPicture key={sixth + "1"} pic={sixth} index={0} />
          <InstagramBodyPicture key={fitth + "3"} pic={fitth} index={1} />
          <InstagramBodyPicture key={fourth + "2"} pic={fourth} index={2} />
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
          }}
        >
          <InstagramBodyPicture key={third} pic={third} index={0} />
          <InstagramBodyPicture key={second} pic={second} index={1} />
          <InstagramBodyPicture key={first} pic={first} index={2} />
        </div>
      </motion.div>
    </div>
  );
};

const imageStyle: CSSProperties = {
  border: "1px solid black",
  flex: 1,
  height: 150,
};
