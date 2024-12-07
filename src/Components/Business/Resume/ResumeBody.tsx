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
    };
    setCurrentComponentCallback(resumeComponent);
  };
  return (
    <>
      <MyComponentWrapper>
        <div>
          Sure thing, during
          <div>
            <ClickableText
              onClickHandler={onClickHandlerOption1}
              text="University of Toronto, Computer Science"
            />
          </div>
          <ClickableText
            onClickHandler={onClickHandlerOption1}
            text="Trapeze Group, Intern"
          />
          <ClickableText
            onClickHandler={onClickHandlerOption1}
            text="B3 Systems, Software Developer"
          />
          <ClickableText
            onClickHandler={onClickHandlerOption1}
            text="Microsoft, Software Engineer (2)"
          />
          <div style={styles.smallText}></div>
          <div style={styles.smallText}></div>
        </div>
      </MyComponentWrapper>
      <MyComponentWrapper transitionObj={{ delay: 4 }}>
        <motion.div>
          <div>let me see if I can find a download link ...</div>
        </motion.div>
      </MyComponentWrapper>

      <MyComponentWrapper transitionObj={{ delay: 10 }}>
        <motion.div>
          <div>
            found it! here you go : 📥 <a href="#">Kevin Kim Resume.pdf</a>{" "}
          </div>
        </motion.div>
      </MyComponentWrapper>
    </>
  );
};
