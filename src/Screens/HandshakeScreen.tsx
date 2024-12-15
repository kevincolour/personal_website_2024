import React from "react";
import { Handshake } from "../Components/Handshake";
import { InitialGreeting } from "../Components/InitialGreeting";
import { screenState } from "../Utils/types";

type HandshakeScreenProps = {
  setCurrentScreen: (screenState: screenState) => void;
};

export const HandshakeScreen = (props: HandshakeScreenProps) => {
  const [initialGreetingDoneAnimating, setInitialGreetingDoneAnimating] =
    React.useState<boolean>();

  const onInitialCompleteHandler = () => {
    setInitialGreetingDoneAnimating(true);
  };
  const handshakeFinishHandler = () => {
    // alert("here");
    props.setCurrentScreen("initial");
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
        <InitialGreeting onAnimationComplete={onInitialCompleteHandler} />
        {/* <div style={{ height: "20vh", width: "100%" }}></div> */}
        {initialGreetingDoneAnimating && (
          <Handshake finishCallback={handshakeFinishHandler} />
        )}
      </div>
    </>
  );
};
