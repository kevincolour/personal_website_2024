import { animate, delay, motion } from "framer-motion";
import { CSSProperties, useState } from "react";

type ChatOptionProps = {
  text: string;
  onClickHandler: () => void;
};

export const ChatOption = (props: ChatOptionProps) => {
  const [clicked, setClicked] = useState<boolean>();
  const onClickHandlerWrapper = () => {
    setClicked(true);
    // props.onClickHandler();
  };
  const animate = clicked ? { y: -20, fontSize: "100px" } : {};
  return (
    <motion.div
      layout
      onClick={onClickHandlerWrapper}
      style={styles}
      initial={{ opacity: 1 }}
      animate={animate}
    >
      {props.text}
    </motion.div>
  );
};

const styles: CSSProperties = {
  border: "1px solid black",
};
