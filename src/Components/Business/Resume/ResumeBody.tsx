import { CSSProperties, useContext } from "react";
import { MyComponent, MyComponentProps } from "../../../Utils/types";
import { InitialGreeting } from "../../InitialGreeting";
import React from "react";
import { delay, motion } from "framer-motion";
import { useSelectedComponentContext } from "../../../Context";
import { getStyles } from "../../../Utils/styles";
import { MyComponentWrapper } from "../../Util/MyComponentWrapper";
import { transcode } from "buffer";
import { ClickableText } from "../../Util/ClickableText";
import resume from "../../../Assets/Kevin_Resume_2024.pdf";
import { Trapeze } from "./Trapeze/Trapeze";
import { B3 } from "./B3/B3";
import { Microsoft } from "./Microsoft/Microsoft";
import { TypingSimulator } from "../../TypingSimulator";
export const ResumeBody: React.FC<MyComponentProps> = (
  props: MyComponentProps
) => {
  const [isClicked, setIsClicked] = React.useState<boolean>(false);
  const { currentComponent, setCurrentComponentCallback } =
    useSelectedComponentContext();
  const styles = getStyles();
  const onClickHandlerOption1 = () => {
    const resumeComponent: MyComponent = {
      name: "University",
      index: 3,
      typingString: "Tell me about your time in University",
    };
    setSelectedComponent(resumeComponent);
  };

  const [selectedComponent, setSelectedComponent] = React.useState<
    MyComponent | undefined
  >();
  const onTypingFinishHandler = () => {
    if (selectedComponent) {
      setCurrentComponentCallback(selectedComponent);
    }
  };
  const onClickHandlerOption2 = () => {
    const resumeComponent: MyComponent = {
      name: "Trapeze",
      index: 3,
      actualComponent: <Trapeze />,
      typingString: "Tell me about your time at Trapeze Group",
    };
    setSelectedComponent(resumeComponent);
  };
  const onClickHandlerOption3 = () => {
    const resumeComponent: MyComponent = {
      name: "B3",
      index: 3,
      actualComponent: <B3 />,
      typingString: "Tell me about your time at B3 Systems",
    };
    setSelectedComponent(resumeComponent);
  };
  const onClickHandlerOption4 = () => {
    const resumeComponent: MyComponent = {
      name: "Microsoft",
      index: 3,
      actualComponent: <Microsoft />,
      typingString: "Tell me about your time at Microsoft",
    };
    setSelectedComponent(resumeComponent);
  };
  return (
    <>
      <MyComponentWrapper>
        <div>
          Sure thing, I studied at
          <div>
            <ClickableText
              onClickHandler={onClickHandlerOption1}
              text="University of Toronto, Computer Science"
            />
          </div>
        </div>
      </MyComponentWrapper>

      <MyComponentWrapper transitionObj={{ delay: 2 }}>
        <div>
          Then I worked at the following companies -
          <div>
            <ClickableText
              onClickHandler={onClickHandlerOption2}
              text="Trapeze Group, Intern"
            />
            <ClickableText
              onClickHandler={onClickHandlerOption3}
              text="B3 Systems, Software Developer"
            />
            <ClickableText
              onClickHandler={onClickHandlerOption4}
              text="Microsoft, Software Engineer (2)"
            />
          </div>
        </div>
      </MyComponentWrapper>
      <MyComponentWrapper transitionObj={{ delay: 4 }}>
        <motion.div>
          <div>
            Might be easier if I find a download link ... looking for it now
          </div>
        </motion.div>
      </MyComponentWrapper>

      {/* <MyComponentWrapper transitionObj={{ delay: 15 }}>
        <motion.div>
          <div>
            Where is this thing 😅 Feel free to ask me about the experiences
            directly
          </div>
        </motion.div>
      </MyComponentWrapper> */}
      <MyComponentWrapper transitionObj={{ delay: 30 }}>
        <motion.div>
          <div>
            finally found it! here you go : 📥{" "}
            <a href={resume} download>
              Kevin Kim Resume.pdf
            </a>{" "}
          </div>
        </motion.div>
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
