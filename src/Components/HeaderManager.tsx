import React, { useEffect } from "react";
import { CSSProperties, FC } from "react";
import { InitialIntro } from "../Components/InitialIntro";
import { MyComponentProps } from "../Utils/types";
import { PreviousComponents } from "../Components/PreviousComponents";
import { useSelectedComponentContext } from "../Context";
import { BusinessHeader } from "../HeaderComponents/BusinessHeader";
import { ResumeHeader } from "../HeaderComponents/ResumeHeader";
import { ResumeWorkHeader } from "../HeaderComponents/ResumeWorkHeader";
import { GenericHeader } from "../HeaderComponents/GenericHeader";

export const HeaderManager = () => {
  //need some state to track components in past
  //need callback from here to component to set next component

  const { currentComponent, setCurrentComponentCallback } =
    useSelectedComponentContext();

  let activeHeaderComponent = null;
  let previousHeaderComponents: JSX.Element[] = [];
  const resume = <GenericHeader name="Resume" />;
  const university = <GenericHeader name="University" />;
  const business = <GenericHeader name="Business" />;
  if (currentComponent.name == "none") {
  }
  if (currentComponent.name == "Business") {
    activeHeaderComponent = business;
  }
  if (currentComponent.name == "Resume") {
    previousHeaderComponents = [business];
    activeHeaderComponent = resume;
  }
  if (currentComponent.name == "ResumeWork") {
    previousHeaderComponents = [business, resume];
    activeHeaderComponent = <ResumeWorkHeader />;
  }
  if (currentComponent.name == "University") {
    previousHeaderComponents = [business, resume];
    activeHeaderComponent = university;
  }

  return (
    <div style={styles} id="headerList">
      {previousHeaderComponents.map((ele) => {
        return ele;
      })}
      {activeHeaderComponent}
    </div>
  );
};

const styles: CSSProperties = {};
