import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { HelloWorlds } from "./Components/HelloWorlds";
import { chains } from "./matterjs";
import { Handshake } from "./Components/Handshake";
import { InitialGreeting } from "./Components/InitialGreeting";
import { InitialScreen } from "./Screens/InitialScreen";
import { HandshakeScreen } from "./Screens/HandshakeScreen";
import { screenState } from "./Utils/types";
import { SelectedComponentProvider, UserDataProvider } from "./Context";
import { HAND_PATH, OVAL_PATH } from "./Assets/paths";
import { animate, motion, useMotionValue } from "framer-motion";
import { useFlubber } from "./Utils/use-flubber";
// const x = chains();

const initialState = "initial";

function App() {
  const [currentScreen, setCurrentScreen] =
    React.useState<screenState>(initialState);

  const defaultProps = {
    setCurrentScreen: setCurrentScreen,
  };

  const currentScreenComponent = getCurrentScreen(defaultProps, currentScreen);
  return (
    <>
      <script src="matter.js" />
      <div className="App">
        <div className="">
          <UserDataProvider>
            <SelectedComponentProvider>
              {currentScreenComponent}
            </SelectedComponentProvider>
          </UserDataProvider>
          {/* <Handshake /> */}
          {/* <HelloWorlds /> */}
        </div>
      </div>
    </>
  );
}

const getCurrentScreen = (defaultProps: any, currentScreen?: screenState) => {
  if (currentScreen == "initial") {
    return <InitialScreen />;
  } else if (currentScreen == "handshake") {
    return <HandshakeScreen {...defaultProps} />;
  } else {
    return undefined;
  }
};
export default App;
