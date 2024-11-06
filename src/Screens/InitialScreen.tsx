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
import { BusinessBody } from "../Components/Business/BusinessBody";
import { HeaderManager } from "../HeaderComponents/HeaderManager";
import { ResumeBody } from "../Components/Business/Resume/ResumeBody";
import { ResumeWorkBody } from "../Components/ResumeWorkBody";
import { HelloIAmKevin } from "../Components/HelloIAmKevin";
import { ColourLine } from "../Components/ColourLine";
import { Animations } from "../Animations/Animations";
import { HEADER_HEIGHT } from "../Utils/constants";
import { UniversityBody } from "../Components/Business/Resume/University/UniversityBody";

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
  if (currentComponent.name == "University") {
    element = <UniversityBody />;
  }

  const heightHeader = document.getElementById("headerList")?.offsetHeight;
  return (
    <div style={stylesOuterWrapper}>
      {/* <PreviousComponents prevComponents={prevComponents} /> */}
      {/* {currentComponent} */}
      {/* <ColourLine /> */}

      <HelloIAmKevin />
      <HeaderManager />
      {/* <Animations /> */}
      <div id="wrapper" style={getWrapperStyle()}>
        {element}
      </div>
    </div>
  );
};

const stylesOuterWrapper: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  height: "100dvh",
};

const getWrapperStyle: (headerHeight?: string) => CSSProperties = (
  headerHeight?: string
) => {
  return {
    // display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    // height: "calc(100vh - " + headerHeight + ")",

    display: "flex",
  };
};
