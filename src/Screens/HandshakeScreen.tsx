import React from "react";
import { Handshake } from "../Components/Handshake";
import { InitialGreeting } from "../Components/InitialGreeting";
import { screenState } from "../Utils/types";
import { HandshakeTransition } from "../Animations/HandshakeTransition";

type HandshakeScreenProps = {
  setCurrentScreen: (screenState: screenState) => void;
};

export const HandshakeScreen = (props: HandshakeScreenProps) => {
  const [initialGreetingDoneAnimating, setInitialGreetingDoneAnimating] =
    React.useState<boolean>();
  const [shakeDone, setShakeDone] = React.useState<boolean>();

  const onInitialCompleteHandler = () => {
    setInitialGreetingDoneAnimating(true);
  };
  const handshakeFinishHandler = () => {
    setShakeDone(true);
  };

  return (
    <>
      <div
        style={{
          display: "grid",
          placeItems: "center",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {!shakeDone && (
          <InitialGreeting onAnimationComplete={onInitialCompleteHandler} />
        )}
        {/* <div style={{ height: "20vh", width: "100%" }}></div> */}
        {initialGreetingDoneAnimating && (
          <Handshake finishCallback={handshakeFinishHandler} />
        )}
        {shakeDone && (
          <HandshakeTransition setCurrentScreen={props.setCurrentScreen} />
        )}
      </div>
    </>
  );
};
