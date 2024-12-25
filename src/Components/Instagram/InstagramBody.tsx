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
import sixth from "../../Assets/InstagramProfile/HiddenPhotos/pic10.jpg";
import seventh from "../../Assets/InstagramProfile/HiddenPhotos/pic7.jpg";
import eigth from "../../Assets/InstagramProfile/HiddenPhotos/pic8.jpg";
import ninth from "../../Assets/InstagramProfile/HiddenPhotos/pic11.jpg";

import dotsselected from "../../Assets/InstagramProfile/9dots.png";
import dots from "../../Assets/InstagramProfile/9dotsnotselected.jpg";
import bell from "../../Assets/InstagramProfile/bell.webp";
import hamburger from "../../Assets/InstagramProfile/hamburger.svg";
import arrowLeft from "../../Assets/InstagramProfile/arrowleft.png";

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
  const [isDrillActive, setIsDrillActive] = React.useState<boolean>(false);

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
  const onclickHandlerBack = () => {
    if (isDrillActive) {
      setIsDrillActive(false);
    } else {
      if (currentComponent.previousComponent) {
        setCurrentComponentCallback(currentComponent.previousComponent);
      }
    }
  };
  const drillTriggeredCallback = (state: boolean) => {
    setIsDrillActive(state);
  };

  const onClickHandler1 = () => {};
  return (
    <div style={{}}>
      {/* FIXED HEADER */}
      <div style={{ top: 0, width: "90%" }}>
        <div
          id="fixedInstaHeader"
          style={{
            width: isMobileDevice ? "100%" : "390px",
            display: "flex",
            justifyContent: "space-between",
            padding: 10,
            paddingBottom: 0,
            position: "fixed",
            alignSelf: "start",
            zIndex: 25,
            background: "white",
          }}
        >
          <div style={{ display: "flex", marginBottom: "20px" }}>
            <div
              onClick={onclickHandlerBack}
              style={{ top: 7, position: "relative" }}
            >
              <img style={{ width: 30, cursor: "pointer" }} src={arrowLeft} />
            </div>
            <div style={{ marginLeft: 30, fontWeight: 600, fontSize: 25 }}>
              {isDrillActive ? "Posts" : "kevincolour"}
            </div>
          </div>
          {!isDrillActive && (
            <div style={{ display: "flex", marginTop: 3, width: 100 }}>
              <div style={{}}>
                <img
                  style={{
                    width: 25,
                    background: "white",
                    marginRight: 25,
                    filter: "blur(3px)",
                  }}
                  src={bell}
                />
              </div>
              <div>
                <img
                  style={{ width: 25, filter: "blur(3px)" }}
                  src={hamburger}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* FIXED HEADER POSSITIOKNING NOT USED*/}
      <div style={{ top: 0, visibility: "hidden" }}>
        <div
          style={{
            width: "100%",

            justifyContent: "space-between",
            padding: 10,
            paddingBottom: 0,
            top: 0,
            alignSelf: "start",
          }}
        >
          <div style={{ display: "flex", marginBottom: "20px" }}>
            <div
              onClick={onclickHandlerBack}
              style={{ top: 7, position: "relative" }}
            >
              <img style={{ width: 30, cursor: "pointer" }} src={arrowLeft} />
            </div>
            <div style={{ marginLeft: 30, fontWeight: 600, fontSize: 25 }}>
              kevincolour
            </div>
          </div>
          <div style={{ display: "flex", marginTop: 3, width: 100 }}></div>
        </div>
      </div>

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
          style={
            !isProfile
              ? {
                  borderBottom: "2px solid black",
                  paddingLeft: 20,
                  paddingRight: 20,
                }
              : { paddingLeft: 20, paddingRight: 20 }
          }
        >
          {isProfile ? (
            <img style={{ width: 35 }} src={dots} />
          ) : (
            <img style={{ width: 35 }} src={dotsselected} />
          )}
        </div>

        <div
          onClick={topButtonsHandler}
          style={
            isProfile
              ? {
                  borderBottom: "3px solid black",
                  paddingLeft: 20,
                  paddingRight: 20,
                }
              : { paddingLeft: 20, paddingRight: 20 }
          }
        >
          {!isProfile ? (
            <img style={{ width: 30 }} src={taggedphoto} />
          ) : (
            <img style={{ width: 35 }} src={taggedphotoselected} />
          )}
        </div>
      </div>
      {isProfile && (
        <InstagramBodyProfile
          drillTriggeredCallback={drillTriggeredCallback}
          drillState={isDrillActive}
        />
      )}

      <motion.div
        animate={isProfile ? { x: -vw } : { x: 0 }}
        style={
          isMobileDevice
            ? { position: "absolute", width: WIDTH_RESPONSIVE, zIndex: 3 }
            : {
                minHeight: "100px",
                margin: "auto",
                position: "absolute",
                overflow: "hidden",
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
          <InstagramBodyPicture
            key={ninth + "5"}
            pic={ninth}
            index={0}
            drillTriggeredCallback={drillTriggeredCallback}
            drillState={isDrillActive}
          />
          <InstagramBodyPicture
            key={eigth + "6"}
            pic={eigth}
            index={1}
            drillTriggeredCallback={drillTriggeredCallback}
            drillState={isDrillActive}
          />
          <InstagramBodyPicture
            key={seventh + "7"}
            pic={seventh}
            index={2}
            drillTriggeredCallback={drillTriggeredCallback}
            drillState={isDrillActive}
          />
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            filter: "blur(5px)",
            pointerEvents: "none",
          }}
        >
          <InstagramBodyPicture
            key={sixth + "1"}
            pic={sixth}
            index={0}
            drillTriggeredCallback={drillTriggeredCallback}
            drillState={isDrillActive}
          />
          <InstagramBodyPicture
            key={fitth + "3"}
            pic={fitth}
            index={1}
            drillTriggeredCallback={drillTriggeredCallback}
            drillState={isDrillActive}
          />
          <InstagramBodyPicture
            key={fourth + "2"}
            pic={fourth}
            index={2}
            drillTriggeredCallback={drillTriggeredCallback}
            drillState={isDrillActive}
          />
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
          }}
        >
          <InstagramBodyPicture
            key={third}
            pic={third}
            index={0}
            drillTriggeredCallback={drillTriggeredCallback}
            drillState={isDrillActive}
            drillDescriptionComponent={
              <div>
                {" "}
                sea to sea to{" "}
                <ClickableText
                  onClickHandler={onClickHandler1}
                  text=" see the sea "
                />{" "}
              </div>
            }
          />
          <InstagramBodyPicture
            key={second}
            pic={second}
            index={1}
            drillTriggeredCallback={drillTriggeredCallback}
            drillState={isDrillActive}
            drillDescriptionComponent={<div>test11</div>}
          />
          <InstagramBodyPicture
            key={first}
            pic={first}
            index={2}
            drillTriggeredCallback={drillTriggeredCallback}
            drillState={isDrillActive}
            drillDescriptionComponent={<div></div>}
          />
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
