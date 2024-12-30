import { CSSProperties, useContext } from "react";
import {
  MyComponent,
  MyComponentProps,
} from "../../../../../../../Utils/types";
import { InitialGreeting } from "../../../../../../InitialGreeting";
import React from "react";
import { motion } from "framer-motion";
import { useSelectedComponentContext } from "../../../../../../../Context";
import { getStyles } from "../../../../../../../Utils/styles";
import { MyComponentWrapper } from "../../../../../../Util/MyComponentWrapper";
import { TypingSimulator } from "../../../../../../TypingSimulator";
import { ClickableText } from "../../../../../../Util/ClickableText";
import { MultipleComponentWrapper } from "../../../../../../Util/MultipleComponentWrapper";

export const Honours: React.FC<MyComponentProps> = (
  props: MyComponentProps
) => {
  const [isClicked, setIsClicked] = React.useState<boolean>(false);
  const { currentComponent, setCurrentComponentCallback } =
    useSelectedComponentContext();

  const onClickHandlerOption2 = () => {
    const component: MyComponent = {
      name: "honours",
      index: 2,
    };
    setSelectedComponent(component);
  };
  const onClickHandlerOption1 = () => {
    const component: MyComponent = {
      name: "marketable",
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
  const components = [
    <div>
      I mean I wasn't a bad student, I never was and I don't think I ever could
      have been, exams just fit me in ways clothes never could
      {/* <ClickableText
      text="more marketable"
      onClickHandler={onClickHandlerOption1}
    />{" "} */}
    </div>,
    <div>
      One of the more{" "}
      {/* <ClickableText
        text="unrelatable"
        onClickHandler={onClickHandlerOption1}
      />{" "} */}{" "}
      unrelatable things I say sometimes is that I actually <em>liked</em> to
      write exams. I liked the last minute studying in the library, the palpable
      panic in the air as we all huddled with textbooks out sitting outside the
      exam room, waiting, waiting together.
    </div>,
    <div>
      The pure focus when writing the exam is unparelled still. I don't think
      there is a comparable experience to the flow state when writing an exam,
      especially a challening one.
    </div>,
    <div>
      I actually wrote about this in my first cover letter when trying to answer
      "why should we hire you". I wrote about the simplicity of it all... how
      uniform the rows and columns of chairs and desks were, the fairness of a
      hundred pencils scribbling in symphony. The things I could achieve with
      just a pen and paper and my knowledge...
    </div>,
    <div>
      Sometimes I chase the relief of answering questions knowing you never have
      to know about it again. The relief of having studied for an obscure
      question answered in lecture eight, The discussions with your classmates
      afterward with undertones of panicked relief.
    </div>,
    <div>
      Tastes like the sandwich at the peak of an exhausting hike, like the
      feeling of finally being done running on the treadmill. The feeling of the
      first time you ride a bike unassisted, the feeling of walking home after a
      date, the feeling of finally reaching that itch on your back
    </div>,
    <div>
      Ofcourse I'm probably forgetting about the stress, the days with multiple
      exams on one day, the exams that were unfair and cruel, the blood and
      tears of reading page after page.
      <br></br>
      <div>Or am I?</div>
    </div>,
  ];

  return (
    <>
      <MultipleComponentWrapper components={components} />
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
