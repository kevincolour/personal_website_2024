import React from "react";
import { CSSProperties, FC } from "react";
import { MyComponent, MyComponentProps } from "../Utils/types";
import thinkingAnimation from "../Assets/thinkingtransparent.gif";
import sendbutton from "../Assets/sendbutton.png";
import { TypeAnimation } from "react-type-animation";
import { useSelectedComponentContext } from "../Context";
interface TypingSimulatorProps {
  typingString?: string;
  onFinishHandler: () => void;
}
export const TypingSimulator = (props: TypingSimulatorProps) => {
  //need some state to track components in past
  //need callback from here to component to set next component

  return (
    <div
      style={{
        display: "flex",
        bottom: 0,
        left: 0,
        position: "absolute",
        width: "95%",
        height: "4%",
        border: "1px solid black",
        borderRadius: 25,
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: 0,
          textAlign: "left",
          padding: 10,
        }}
      >
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            props.typingString ?? "",
            1000,
            "",
            props.onFinishHandler,
          ]}
          wrapper="span"
          //   speed={50}
          speed={{ type: "keyStrokeDelayInMs", value: 80 }}
          style={{ fontSize: "1em", display: "inline-block" }}
          repeat={1}
          cursor={false}
          key={props.typingString}
        />
        {/* {props.typingString} */}
        <div style={{ position: "fixed", bottom: 10, right: 30 }}>
          <img style={{ height: 20 }} src={sendbutton}></img>
        </div>
      </div>
    </div>
  );
};

const styles: CSSProperties = {
  width: "20%",
  maxWidth: "35%",
  //   maxHeight: "10%",
  position: "absolute",
  bottom: "0",
  left: "0",
};
