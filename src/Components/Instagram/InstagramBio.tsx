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
import { TypingSimulator } from "../TypingSimulator";
import { TypeAnimation } from "react-type-animation";

export const InstagramBio: React.FC<MyComponentProps> = (
  props: MyComponentProps
) => {
  const { currentComponent, setCurrentComponentCallback } =
    useSelectedComponentContext();
  const waitTime = 3000;
  return (
    <div style={{ textAlign: "left", fontSize: 15 }}>
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "~",
          waitTime,
          "✈️ Van to To to Van ✈️~",
          waitTime,
          "First to arrive last to give notice~",
          waitTime,
          "Singing for the moment but dancing for the memories~",
          waitTime,
          "Bubble tea enthusiast~",
          waitTime,
          "Developing feelings over apps",
          waitTime,
          "Laughing before life gets the last laugh~",
          waitTime,
          "Scared of eels but afraid of snakes~",
          waitTime,
          '"They say you die twice; once you draw your last breath, and another when your name is said for the last time"~',
          waitTime,
          "You don't know about me but I bet you want to🎶~",
          waitTime,
          "A master and legend of the league",
          waitTime,
          "Dreaming small, living big~",
          waitTime,
          "Verified cat enjoyer~",
          waitTime,
          "Spreading awareness of autism everyday~",
          waitTime,
          "Music is better when we're together🎶~",
          waitTime,
          "Chasing happily ever after~",
          waitTime,
          "Sometimes likes to have pizza cold~",
          waitTime,
          "Top 10 sleeper NA",
          waitTime,
          "Trying not to be the person my cat thinks I am~",
          waitTime,
          "Slaying dragons of all kinds~",
          waitTime,
          "Decidedly team blue & white dress~",
          waitTime,
        ]}
        wrapper="span"
        speed={50}
        // speed={{ type: "keyStrokeDelayInMs", value: 80 }}
        style={{
          // fontSize: "20",
          display: "inline-block",
          // visibility: "hidden",
        }}
        repeat={Infinity}
        cursor={true}
      />
    </div>
  );
};

const imageStyle: CSSProperties = {
  border: "1px solid black",
  flex: 1,
  height: 150,
};
