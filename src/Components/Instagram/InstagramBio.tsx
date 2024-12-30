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
  const waitTime = 5000;
  return (
    <div style={{ textAlign: "left", fontSize: 15 }}>
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially

          "Van to To to Van ✈️ ",
          waitTime * 20,
          "First to arrive last to give notice",
          waitTime,
          "Singing for the moment and dancing for the memories",
          waitTime,
          "Bubble tea enthusiast",
          waitTime,
          "Best friends with every prof, they just don't know it yet",
          waitTime,
          "Developing feelings over apps",
          waitTime,
          "Always laughing to always get the last laugh",
          waitTime,
          "Scared of eels but afraid of snakes",
          waitTime,
          '"They say you die twice; once you draw your last breath, and another when your name is said for the last time"',
          waitTime,
          "You don't know about me but I bet you want to🎶",
          waitTime,
          "A master and legend of the league",
          waitTime,
          "Dreaming small, living big",
          waitTime,
          "Born just in time to witness Hamiltoin reinacted in Roblox",
          waitTime,
          "Verified cat enjoyer",
          waitTime,
          "Proudly spreading awareness of autism",
          waitTime,
          "Music is better when we're together🎶",
          waitTime,
          "Chasing happily ever after",
          waitTime,
          "Deontologist, Utliitarian",
          waitTime,
          "Sometimes likes to have pizza cold",
          waitTime,
          "Top 10 sleeper NA",
          waitTime,
          "Trying not to be the person my cat thinks I am",
          waitTime,
          "Leaves the last piece of pie just in case",
          waitTime,
          "Last weeks enemies just next weeks friends",
          waitTime,
          "Slaying dragons by day, slaying dragons by night",
          waitTime,
          "Team blue & white dress",
          waitTime,
          "I'll have what she's having 😎",
          waitTime,
          "I-T b-o-y",
          waitTime,
          "Look out world, there's another Asian man in town",
          waitTime,
          '"Rules are good, rules help control the fun"',
          waitTime,
          "Will start advocating for veganism right after this last bite",
          waitTime,
          "\"I wish there was a way to know you're in the good old days before you've actually left them\"",
          waitTime,
          "Morally obligated to remind you to pet your cat",
          waitTime,
        ]}
        deletionSpeed={99}
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
      <span>~</span>
    </div>
  );
};

const imageStyle: CSSProperties = {
  border: "1px solid black",
  flex: 1,
  height: 150,
};
