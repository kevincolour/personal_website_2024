import React, { useEffect } from "react";
import { CSSProperties, FC } from "react";
import { InitialIntro } from "../Components/InitialIntro";
import { useSelectedComponentContext, useUserData } from "../Context";
import { BusinessBody } from "../Components/Business/BusinessBody";
import { HeaderManager } from "../HeaderComponents/HeaderManager";
import { ResumeBody } from "../Components/Business/Resume/ResumeBody";
import { ResumeWorkBody } from "../Components/ResumeWorkBody";
import { HelloIAmKevin } from "../Components/HelloIAmKevin";
import { UniversityBody } from "../Components/Business/Resume/University/UniversityBody";
import { motion } from "framer-motion";
import { PleasureBody } from "../Components/Pleasure/PleasureBody";
import { InstagramBody } from "../Components/Instagram/InstagramBody";
import { PlayAGame } from "../Components/Pleasure/PlayaGame/PlayAGame";
import { ThisOrThat } from "../Components/Pleasure/PlayaGame/ThisOrThat/ThisOrThat";
import { FAQ } from "../Components/Business/FAQ/FAQ";
import { Projects } from "../Components/Business/Resume/Projects/Projectss";

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

  React.useEffect(() => {
    const e = function (event: any) {
      console.log("The hash has changed!");
      // var r = window.confirm("You pressed a Back button! Are you sure?!");
      window.history.pushState(null, document.title, window.location.href);
    };
    window.history.pushState(null, document.title, window.location.href);
    window.addEventListener("popstate", e);
    return () => window.removeEventListener("popstate", e);
  }, []);
  let menuOption = null;

  const componentElement = React.useMemo(() => {
    let element = null;
    if (currentComponent.name == "none" || currentComponent.name == "") {
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
    if (currentComponent.name == "Pleasure") {
      element = <PleasureBody />;
    }
    if (currentComponent.name == "Instagram") {
      element = <InstagramBody />;
    }
    if (currentComponent.name == "PlayAGame") {
      element = <PlayAGame />;
    }
    if (currentComponent.name == "ThisOrThat") {
      element = <ThisOrThat />;
    }
    if (currentComponent.name == "FAQ") {
      element = <FAQ />;
    }
    if (currentComponent.name == "Projects") {
      element = <Projects />;
    }

    return element;
  }, [currentComponent.name]);

  const heightHeader = document.getElementById("headerList")?.offsetHeight;
  return (
    <div style={stylesOuterWrapper}>
      {/* <PreviousComponents prevComponents={prevComponents} /> */}
      {/* {currentComponent} */}
      {/* <ColourLine /> */}
      <HelloIAmKevin />
      <HeaderManager />
      {/* <Animations /> */}
      <motion.div id="wrapper" style={getWrapperStyle()}>
        {componentElement}

        {!componentElement && currentComponent.actualComponent}
      </motion.div>
    </div>
  );
};

const stylesOuterWrapper: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  height: "100dvh",
  overflow: "hidden",
  // fontSize: "20",
};

const getWrapperStyle: (headerHeight?: string) => CSSProperties = (
  headerHeight?: string
) => {
  return {
    justifyContent: "center",
    flex: 1,
    // overflow: "auto",
    overflow: "auto",
    overflowX: "hidden",
    // scrollbarGutter: "stable",
    // overflowX: "hidden",
    // display: "flex",
  };
};
