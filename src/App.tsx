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
import { Modal } from "@fluentui/react";
import { FULL_WIDTH } from "./Utils/constants";
import { isMobile } from "./Utils/helpers";
// const x = chains();

const initialState = "initial";
// const initialState = "handshake";

function App() {
  React.useEffect(() => {
    window.addEventListener("touchmove", (e) => {
      e.preventDefault();
    });
  }, []);
  const [currentScreen, setCurrentScreen] =
    React.useState<screenState>(initialState);

  const defaultProps = {
    setCurrentScreen: setCurrentScreen,
  };

  const isMobileDevice = isMobile();
  const currentScreenComponent = getCurrentScreen(defaultProps, currentScreen);
  return (
    <>
      <script src="matter.js" />
      <meta
        name="viewport"
        content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;"
      />
      {!isMobileDevice && (
        <Modal
          isOpen={true}
          styles={{
            main: { overflow: "hidden", maxHeight: "100%", maxWidth: "100%" },
          }}
        >
          <div className="App" id="mainApp" style={{ width: FULL_WIDTH }}>
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
        </Modal>
      )}
      {isMobileDevice && (
        <div className="App" id="mainApp">
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
      )}
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
