import { CSSProperties, useContext } from "react";
import { MyComponent, MyComponentProps } from "../../../../Utils/types";
import { InitialGreeting } from "../../../InitialGreeting";
import React from "react";
import { motion } from "framer-motion";
import { useSelectedComponentContext } from "../../../../Context";
import { getStyles } from "../../../../Utils/styles";
import { MyComponentWrapper } from "../../../Util/MyComponentWrapper";

export const B3: React.FC<MyComponentProps> = (props: MyComponentProps) => {
  const [isClicked, setIsClicked] = React.useState<boolean>(false);
  const { currentComponent, setCurrentComponentCallback } =
    useSelectedComponentContext();

  const onClickHandlerOption1 = () => {
    const businessComponent: MyComponent = {
      name: "asdf",
      index: 2,
    };
    setCurrentComponentCallback(businessComponent);
  };
  const styles = getStyles();
  return (
    <MyComponentWrapper>
      <div>
        • Responsible for the end to end architecture of a business intelligence
        platform which produced KPIs, pro‑ vided scheduling tools, and allowed
        for optimization of manufacturing firms.
        <div>
          • Built a RESTful API in C# and ASP.NET that provided endpoints
          designed to query SQL data
        </div>
        <div>
          • Closely collaborated with peers on application architecture by
          discussing possible solutions and ap‑ proaches to align current
          application functionality
        </div>
        • Analyzed production code issues and generated solutions to improve
        user functionality operating under a scrum framework that operated under
        biweekly sprints
      </div>
    </MyComponentWrapper>
  );
};
