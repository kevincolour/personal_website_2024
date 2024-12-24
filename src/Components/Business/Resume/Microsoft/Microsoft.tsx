import { CSSProperties, useContext } from "react";
import { MyComponent, MyComponentProps } from "../../../../Utils/types";
import { InitialGreeting } from "../../../InitialGreeting";
import React from "react";
import { motion } from "framer-motion";
import { useSelectedComponentContext } from "../../../../Context";
import { getStyles } from "../../../../Utils/styles";
import { MyComponentWrapper } from "../../../Util/MyComponentWrapper";
import { TypingSimulator } from "../../../TypingSimulator";

export const Microsoft: React.FC<MyComponentProps> = (
  props: MyComponentProps
) => {
  const [isClicked, setIsClicked] = React.useState<boolean>(false);
  const { currentComponent, setCurrentComponentCallback } =
    useSelectedComponentContext();

  const onClickHandlerOption1 = () => {
    const component: MyComponent = {
      name: "asdf",
      index: 2,
    };
    setSelectedComponent(component);
  };

  const [selectedComponent, setSelectedComponent] = React.useState<
    MyComponent | undefined
  >();
  const onTypingFinishHandler = () => {
    if (selectedComponent) {
      setCurrentComponentCallback(selectedComponent);
    }
  };
  const styles = getStyles();
  return (
    <>
      <MyComponentWrapper>
        <div>
          • Utilized React and modern JS to collaboratively implement features,
          using ADO for sprints and code review.
          <div>
            • Integrated internal High Value Controls in a monorepo, managing
            extensive downstream and solving comlex dependency issues.
          </div>{" "}
          <div>
            • Owned product feature end to end, building custom backend
            middleware to communicate with multiple backend API services for
            storage of metadata and video files.
          </div>
        </div>
      </MyComponentWrapper>

      <MyComponentWrapper>
        <div>
          • Responsible for shipping the feature through multiple release rings,
          pushing the feature through product reviews and fixing critical bugs.
        </div>
        <div>
          • Developed, designed and documented discoverability features to
          increase feature usage while implement‑ ing telemetry and dashboards
          to track effectiveness
        </div>
      </MyComponentWrapper>

      {selectedComponent && (
        <TypingSimulator
          // key={selectedComponent.typingString}
          onFinishHandler={onTypingFinishHandler}
          typingString={selectedComponent.typingString}
        />
      )}
    </>
  );
};
