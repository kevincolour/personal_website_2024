import React, { useEffect } from "react";
import { CSSProperties, FC } from "react";
import { InitialIntro } from "../Components/InitialIntro";
import { MyComponentProps } from "../Utils/types";
import { PreviousComponents } from "../Components/PreviousComponents";
import {
  SelectedComponentContext,
  SelectedComponentProvider,
  useSelectedComponentContext,
  useUserData,
} from "../Context";
import { BusinessBody } from "../Components/BusinessBody";
import { BusinessHeader } from "../HeaderComponents/BusinessHeader";
import { ResumeHeader } from "../HeaderComponents/ResumeHeader";
import { HeaderManager } from "../Components/HeaderManager";
import { ResumeBody } from "../Components/ResumeBody";
import { ResumeWorkBody } from "../Components/ResumeWorkBody";
import { HelloIAmKevin } from "../Components/HelloIAmKevin";
import { ColourLine } from "../Components/ColourLine";
import { Animations } from "../Animations/Animations";
import { HEADER_HEIGHT } from "../Utils/constants";

export const InitialScreen = () => {
  const { currentUserData, setCurrentUserDataCallback } = useUserData();
  // React.useEffect(() => {
  //   const callback = (e: MouseEvent) => {
  //     setCurrentUserDataCallback({
  //       ...currentUserData,
  //       mouseData: { x: e.clientX, y: e.clientY },
  //     });
  //   };
  //   const x = window.addEventListener("mousemove", callback);
  //   return () => window.removeEventListener("mousemove", callback);
  // }, []);

  const { currentComponent, setCurrentComponentCallback } =
    useSelectedComponentContext();

  let element = null;
  let menuOption = null;

  if (
    currentComponent.name == "InitialIntro" ||
    currentComponent.name == "none"
  ) {
    element = <InitialIntro />;
  }
  if (currentComponent.name == "Business") {
    element = <BusinessBody />;
  }
  if (currentComponent.name == "Resume") {
    element = <ResumeBody />;
  }
  if (currentComponent.name == "ResumeWork") {
    element = <ResumeWorkBody />;
  }

  return (
    <div>
      {/* <PreviousComponents prevComponents={prevComponents} /> */}
      {/* {currentComponent} */}
      {/* <ColourLine /> */}

      <HelloIAmKevin />
      <HeaderManager />
      {/* <Animations /> */}
      <div style={wrapperStyle}>{element}</div>
    </div>
  );
};

const styles: CSSProperties = {
  position: "absolute",
  left: 0,
};

const wrapperStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "calc(100vh - " + HEADER_HEIGHT + "px)",
  // flex-flow: column nowrap;
};
