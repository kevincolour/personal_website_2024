import { CSSProperties, useContext } from "react";
import { MyComponent, MyComponentProps } from "../../../../../Utils/types";
import { InitialGreeting } from "../../../../InitialGreeting";
import React from "react";
import { motion } from "framer-motion";
import { useSelectedComponentContext } from "../../../../../Context";
import { getStyles } from "../../../../../Utils/styles";
import { MyComponentWrapper } from "../../../../Util/MyComponentWrapper";
import { ClickableText } from "../../../../Util/ClickableText";
import { VideoServerSide } from "./VideoServerSide/VideoServerSide";

export const Programming: React.FC<MyComponentProps> = (
  props: MyComponentProps
) => {
  const [isClicked, setIsClicked] = React.useState<boolean>(false);
  const { currentComponent, setCurrentComponentCallback } =
    useSelectedComponentContext();

  const onClickHandlerOption1 = () => {
    const businessComponent: MyComponent = {
      name: "VideoServerSide",
      index: 2,
      typingString: 'what do you mean store it "server side"?',
      actualComponent: <VideoServerSide />,
    };
    setCurrentComponentCallback(businessComponent);
  };
  const styles = getStyles();
  return (
    <>
      <MyComponentWrapper>
        <motion.div>
          <div>Here's a video of me implementing the handshake</div>
        </motion.div>
        <div>
          <iframe
            width="100%"
            // height="315"
            src="https://www.youtube.com/embed/thhzWru-WAw?si=EIAYkG2oUgo_RH35"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div style={{ color: "green" }}>
          //TODO : store{" "}
          <ClickableText
            onClickHandler={onClickHandlerOption1}
            text="video server side"
          />{" "}
          and stream it to avoid youtube overlay
        </div>
      </MyComponentWrapper>
    </>
  );
};
