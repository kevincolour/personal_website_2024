import { CSSProperties, createRef, useContext, useRef } from "react";
import { MyComponent, MyComponentProps } from "../../Utils/types";
import { InitialGreeting } from "../InitialGreeting";
import React from "react";
import { motion } from "framer-motion";
import { useSelectedComponentContext } from "../../Context";
import { getStyles } from "../../Utils/styles";
import { ClickableText } from "../Util/ClickableText";
import { Icon, Modal } from "@fluentui/react";
import profilePhoto from "../../Assets/profileinstasmall.jpg";
import bell from "../../Assets/InstagramProfile/bell.webp";
import hamburger from "../../Assets/InstagramProfile/hamburger.svg";
import arrowLeft from "../../Assets/InstagramProfile/arrowleft.png";

export const InstagramTop: React.FC<MyComponentProps> = (
  props: MyComponentProps
) => {
  const { currentComponent, setCurrentComponentCallback } =
    useSelectedComponentContext();

  const onclickHandlerBack = () => {
    if (currentComponent.previousComponent) {
      setCurrentComponentCallback(currentComponent.previousComponent);
    }
  };
  return (
    <div style={{ padding: 5, height: "40dvh" }}>
      {/* top area */}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", marginBottom: "20px" }}>
          <div onClick={onclickHandlerBack}>
            <img style={{ width: 20, cursor: "pointer" }} src={arrowLeft} />
          </div>
          <div style={{ marginLeft: 30, fontWeight: 700, fontSize: 20 }}>
            kevincolour
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 3 }}>
          <div>
            <img
              style={{
                width: 20,
                background: " white",
                marginRight: 25,
                filter: "blur(3px)",
              }}
              src={bell}
            />
          </div>
          <div>
            <img style={{ width: 20, filter: "blur(3px)" }} src={hamburger} />
          </div>
        </div>
      </div>
      <div
        style={{
          margin: "1px",
          display: "flex",
          height: "90%",
          width: "100%",
        }}
      >
        {/* left */}
        <div style={{ width: "20%" }}>
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
          <div style={{ fontWeight: "600", fontSize: 15 }}>Kevin Kim</div>
          <div style={{ textAlign: "left" }}>~</div>
        </div>
        <div
          style={{ width: "80%", display: "flex", justifyContent: "center" }}
        >
          <div
            style={{
              display: "flex",
              width: "80%",
              justifyContent: "space-between",
            }}
          >
            <div style={{ fontSize: 12, flex: 1 }}>
              <div style={{ fontSize: 20 }}>10</div>posts
            </div>
            <div style={{ fontSize: 12, flex: 1 }}>
              <div style={{ fontSize: 20 }}>10</div>followers
            </div>
            <div style={{ fontSize: 12, flex: 1 }}>
              <div style={{ fontSize: 20 }}>10</div>following
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const imageStyle: CSSProperties = {
  border: "1px solid black",
  flex: 1,
  height: 150,
};
