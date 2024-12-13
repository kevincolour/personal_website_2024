import { CSSProperties, useContext } from "react";
import { MyComponent, MyComponentProps } from "../../Utils/types";
import { InitialGreeting } from "../InitialGreeting";
import React from "react";
import { motion } from "framer-motion";
import { useSelectedComponentContext } from "../../Context";
import { getStyles, messsageWrapperStyle } from "../../Utils/styles";
import { ClickableText } from "../Util/ClickableText";
import { MyComponentWrapper } from "../Util/MyComponentWrapper";

export const PleasureBody: React.FC<MyComponentProps> = (
  props: MyComponentProps
) => {
  const [isClicked, setIsClicked] = React.useState<boolean>(false);
  const { currentComponent, setCurrentComponentCallback } =
    useSelectedComponentContext();

  const onClickHandlerOption1 = () => {
    const component: MyComponent = {
      name: "df",
      index: 2,
    };
    setCurrentComponentCallback(component);
  };
  const onClickHandlerOption2 = () => {
    const component: MyComponent = {
      name: "Instagram",
      index: 2,
    };
    setCurrentComponentCallback(component);
  };

  const styles = getStyles();
  return (
    <MyComponentWrapper>
      Awesome! What do you want to do... we could{" "}
      <ClickableText
        text="play a game"
        onClickHandler={onClickHandlerOption1}
      />{" "}
      or{" "}
      <ClickableText
        text="see the sights"
        onClickHandler={onClickHandlerOption2}
      />{" "}
    </MyComponentWrapper>
  );
};

const businessStyles: CSSProperties = {
  background: "#147efb",
  color: "white",
  margin: 10,
  marginLeft: 8,
  borderRadius: 10,
  position: "relative",
  padding: 15,
  textAlign: "left",
};

//147efb
const arrowRightStyle: CSSProperties = {
  width: 0,
  height: 0,
  borderTop: "10px solid transparent",
  borderBottom: "10px solid transparent",
  borderLeft: "15px solid #147efb",
  position: "absolute",
  top: 95,
  right: -10,
};
