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
import { InstagramBio } from "./InstagramBio";

export const InstagramTop: React.FC<MyComponentProps> = (
  props: MyComponentProps
) => {
  const { currentComponent, setCurrentComponentCallback } =
    useSelectedComponentContext();

  const labelStyle = { fontSize: 15, flex: 1 };
  const numberSizeStyle = { fontSize: 20, fontWeight: "700" };
  return (
    <div style={{ padding: 5, height: "20dvh" }}>
      <div
        style={{
          margin: "1px",
          display: "flex",
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
          <div style={{ fontWeight: "600", fontSize: 15, textAlign: "left" }}>
            Kevin Kim
          </div>
        </div>
        <div
          style={{ width: "80%", display: "flex", justifyContent: "center" }}
        >
          <div
            style={{
              display: "flex",
              width: "90%",
              justifyContent: "space-between",
            }}
          >
            <div style={labelStyle}>
              <div style={numberSizeStyle}>3</div>posts
            </div>
            <div style={labelStyle}>
              <div style={numberSizeStyle}>121</div>followers
            </div>
            <div style={labelStyle}>
              <div style={numberSizeStyle}>153</div>following
            </div>
          </div>
        </div>
      </div>
      <InstagramBio />
    </div>
  );
};

const imageStyle: CSSProperties = {
  border: "1px solid black",
  flex: 1,
  height: 150,
};
