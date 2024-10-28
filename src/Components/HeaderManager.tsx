import React, { useEffect } from "react";
import { CSSProperties, FC } from "react";
import { InitialIntro } from "../Components/InitialIntro";
import { MyComponentProps } from "../Utils/types";
import { PreviousComponents } from "../Components/PreviousComponents";
import { useSelectedComponentContext } from "../Context";
import { BusinessHeader } from "../HeaderComponents/BusinessHeader";
import { ResumeHeader } from "../HeaderComponents/ResumeHeader";
import { ResumeWorkHeader } from "../HeaderComponents/ResumeWorkHeader";

export const HeaderManager = () => {
  //need some state to track components in past
  //need callback from here to component to set next component

  const { currentComponent, setCurrentComponentCallback } =
    useSelectedComponentContext();

  let activeHeaderComponent = null;
  let previousHeaderComponents: JSX.Element[] = [];
  if (currentComponent.name == "none") {
  }
  if (currentComponent.name == "Business") {
    activeHeaderComponent = <BusinessHeader />;
  }
  if (currentComponent.name == "Resume") {
    previousHeaderComponents = [<BusinessHeader />];
    activeHeaderComponent = <ResumeHeader />;
  }
  if (currentComponent.name == "ResumeWork") {
    previousHeaderComponents = [<BusinessHeader />, <ResumeHeader />];
    activeHeaderComponent = <ResumeWorkHeader />;
  }

  return (
    <div style={styles}>
      {previousHeaderComponents.map((ele) => {
        return ele;
      })}
      {activeHeaderComponent}
    </div>
  );
};

const styles: CSSProperties = {};
