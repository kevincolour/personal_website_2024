import { CSSProperties, useContext } from "react";
import { MyComponent, MyComponentProps } from "../../../../../Utils/types";
import { InitialGreeting } from "../../../../InitialGreeting";
import React from "react";
import { motion } from "framer-motion";
import { useSelectedComponentContext } from "../../../../../Context";
import { getStyles } from "../../../../../Utils/styles";
import { MyComponentWrapper } from "../../../../Util/MyComponentWrapper";
import Player from "./hooks";
import dankolour1mp3 from "../../../../../Assets/dankolour1.mp3";

export const Music: React.FC<MyComponentProps> = (props: MyComponentProps) => {
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
    <>
      <MyComponentWrapper>
        here is the first "song" I ever made with my friend danny
        <audio controls controlsList="nodownload">
          <source src={dankolour1mp3} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </MyComponentWrapper>
    </>
  );
};
