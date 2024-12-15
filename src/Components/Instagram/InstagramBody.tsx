import { CSSProperties, createRef, useContext, useRef } from "react";
import { MyComponent, MyComponentProps } from "../../Utils/types";
import { InitialGreeting } from "../InitialGreeting";
import React from "react";
import { motion } from "framer-motion";
import { useSelectedComponentContext } from "../../Context";
import { getStyles, messsageWrapperStyle } from "../../Utils/styles";
import { ClickableText } from "../Util/ClickableText";
import { Modal } from "@fluentui/react";

import cat from "../../Assets/cat.jpg";
import cat2 from "../../Assets/cat2.jpg";
import useLongPress from "./useLongPress";
import { InstagramBodyPicture } from "./InstagramBodyPicture";
import { InstagramBodyProfile } from "./InstagramBodyProfile";

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
  return (
    <div style={{ overflow: "hidden" }}>
      {/* top area */}
      <div
        style={{
          margin: "1px",
          display: "flex",
          height: "30vh",
          width: "100%",
        }}
      ></div>
      {/* buttons */}
      <div
        style={{
          margin: "1px",
          display: "flex",
          height: "5vh",
          width: "100%",
          justifyContent: "space-evenly",
        }}
      >
        <div style={!isProfile ? { borderBottom: "3px solid black" } : {}}>
          <button onClick={topButtonsHandlerDefault}>button1</button>
        </div>
        <div style={isProfile ? { borderBottom: "3px solid black" } : {}}>
          <button onClick={topButtonsHandler}>button2</button>
        </div>
      </div>
      {isProfile && <InstagramBodyProfile />}
      <div
        style={{
          display: "flex",
          width: "100%",
        }}
      >
        <InstagramBodyPicture key={cat} pic={cat2} />
        <InstagramBodyPicture key={cat} pic={cat2} />
        <InstagramBodyPicture key={cat} pic={cat} />
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
        }}
      >
        <InstagramBodyPicture key={cat} pic={cat} />
        <InstagramBodyPicture key={cat} pic={cat} />
        <InstagramBodyPicture key={cat} pic={cat} />
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
        }}
      >
        <InstagramBodyPicture key={cat} pic={cat} />
        <InstagramBodyPicture key={cat} pic={cat} />
        <InstagramBodyPicture key={cat} pic={cat} />
      </div>
    </div>
  );
};

const imageStyle: CSSProperties = {
  border: "1px solid black",
  flex: 1,
  height: 150,
};
