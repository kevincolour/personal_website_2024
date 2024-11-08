import React, { cloneElement, useEffect } from "react";
import { CSSProperties, FC } from "react";
import { InitialIntro } from "../Components/InitialIntro";
import { MyComponentProps } from "../Utils/types";
import { PreviousComponents } from "../Components/PreviousComponents";
import { useSelectedComponentContext } from "../Context";
import { ResumeWorkHeader } from "./ResumeWorkHeader";
import { GenericHeader } from "./GenericHeader";
import { motion } from "framer-motion";

export const HeaderManager = () => {
  //need some state to track components in past
  //need callback from here to component to set next component

  const { currentComponent, setCurrentComponentCallback } =
    useSelectedComponentContext();

  let activeHeaderComponent = null;
  let previousHeaderComponents: JSX.Element[] = [];
  const resume = React.useMemo(
    () => cloneElement(<GenericHeader name="Resume" />),
    []
  );
  const university = React.useMemo(
    () => cloneElement(<GenericHeader name="University" />),
    []
  );
  const business = React.useMemo(
    () => cloneElement(<GenericHeader name="Business" />),
    []
  );
  const elements = [business, resume, university];
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

  const animate = { fontSize: "50px", opacity: 1 };

  return (
    <div style={styles} id="headerList">
      {previousHeaderComponents.map((ele) => {
        return ele;
      })}
      <motion.div layout animate={animate} initial={{ opacity: 0 }}>
        {activeHeaderComponent}
        {/* {elements.map((ele, ind) => {
          return ele;
        })} */}
      </motion.div>
    </div>
  );
};

const styles: CSSProperties = {};
