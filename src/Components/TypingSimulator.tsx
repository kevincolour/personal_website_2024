import React from "react";
import { CSSProperties, FC } from "react";
import { MyComponent, MyComponentProps } from "../Utils/types";
import thinkingAnimation from "../Assets/thinkingtransparent.gif";
import sendbutton from "../Assets/sendbutton.png";
import plus from "../Assets/plus.png";
import { TypeAnimation } from "react-type-animation";
import { useSelectedComponentContext } from "../Context";
import { GRAY_COLOUR } from "../Utils/constants";
interface TypingSimulatorProps {
  typingString?: string;
  onFinishHandler: () => void;
}
export const TypingSimulator = (props: TypingSimulatorProps) => {
  //need some state to track components in past
  //need callback from here to component to set next component

  const onFinishHandlerWrapper = () => {
    props.onFinishHandler();
    const body = window.document.getElementById("mainApp");
    if (body) body.style.pointerEvents = "auto";
  };
  React.useEffect(() => {
    const body = window.document.getElementById("mainApp");
    if (body) body.style.pointerEvents = "none";
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          bottom: 5,
          left: 0,
          position: "absolute",
          width: "95%",
          minHeight: "40px",
          alignContent: "center",
        }}
      >
        {/* plus button */}
        <div
          style={{
            height: 40,
            width: 40,
            borderRadius: 20,
            marginLeft: 10,
            marginRight: 10,
            background: GRAY_COLOUR,
            display: "flex",
            placeItems: "center",
            justifyContent: "center",
            alignSelf: "end",
          }}
        >
          <img style={{ height: 15, opacity: 0.5 }} src={plus}></img>
        </div>
        {/* circluar bar container */}
        <div
          style={{
            border: "1px solid " + GRAY_COLOUR,
            borderRadius: 25,
            width: "90%",
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* wrapper around text */}
          <div
            style={{
              // position: "absolute",
              bottom: 0,
              textAlign: "left",
              padding: 5,
              marginRight: 20,
              marginLeft: 10,
              // paddingRight: 30,
              overflow: "auto",
            }}
          >
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                props.typingString ?? "",
                1000,
                // "asdlsadfadsfdasfasdfsdaf sdafadsfsadf dsaf sdafa sd fcd",
                onFinishHandlerWrapper,
              ]}
              wrapper="span"
              speed={50}
              // speed={{ type: "keyStrokeDelayInMs", value: 80 }}
              style={{
                // fontSize: "20",
                display: "inline-block",
                paddingRight: 20,
                // visibility: "hidden",
              }}
              // repeat={1}
              cursor={false}
              key={props.typingString}
            />
            {/* {props.typingString} */}

            {/* send button */}
            <div
              style={{
                position: "absolute",
                bottom: 6,
                right: 5,
                height: 40 - 10,
              }}
            >
              <img style={{ height: 40 - 10 }} src={sendbutton}></img>
            </div>
          </div>
        </div>
      </div>
    </>
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
