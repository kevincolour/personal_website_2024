import { MyComponent, MyComponentProps } from "../../../../../../Utils/types";
import React from "react";
import { motion } from "framer-motion";
import { useSelectedComponentContext } from "../../../../../../Context";
import { getStyles } from "../../../../../../Utils/styles";
import { MyComponentWrapper } from "../../../../../Util/MyComponentWrapper";
import { ClickableText } from "../../../../../Util/ClickableText";

export const VideoServerSide: React.FC<MyComponentProps> = (
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
    };
    setCurrentComponentCallback(businessComponent);
  };
  const styles = getStyles();
  return (
    <>
      <MyComponentWrapper>
        <motion.div>
          <div>
            Well I can't store this file where my client side code is hosted
            because it is 100 mb and will cost me money. There's also
            performance implications of having to bundle a big file like a video
            along with my code (which is mostly text)
          </div>
        </motion.div>
      </MyComponentWrapper>
      <MyComponentWrapper transitionObj={{ delay: 10 }}>
        <motion.div>
          <div>
            The suitable solution here is to instead host the file in a server,
            and only request the file when it is needed. Alternatively I guess I
            could{" "}
            <a href="https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading">
              lazy load
            </a>
            the darn thing. but I'm probably going to need a server anyway to
            make this app somewhat stateless for some "features. hmm... well a
            problem for another day
          </div>
        </motion.div>
      </MyComponentWrapper>
    </>
  );
};
