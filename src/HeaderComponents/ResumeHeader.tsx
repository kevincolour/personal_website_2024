import { animate, delay, motion } from "framer-motion";
import { CSSProperties, useState } from "react";
import { useSelectedComponentContext } from "../Context";
import { MyComponent } from "../Utils/types";

export const ResumeHeader = () => {
  const [clicked, setClicked] = useState<boolean>(true);

  const { currentComponent, setCurrentComponentCallback } =
    useSelectedComponentContext();

  const animate = clicked ? { fontSize: "100px" } : {};

  const amIActive = currentComponent.name == "Resume";

  const setActiveComponent = () => {
    const thisComponent: MyComponent = {
      name: "Resume",
      index: 1,
    };
    setCurrentComponentCallback(thisComponent);
  };

  return (
    <>
      {!amIActive && (
        <motion.div
          layout
          style={styles}
          initial={{ opacity: 1 }}
          onClick={setActiveComponent}
        >
          Resume header
        </motion.div>
      )}

      {amIActive && (
        <motion.div
          layout
          style={styles}
          initial={{ opacity: 1 }}
          animate={animate}
        >
          Resume header
        </motion.div>
      )}
    </>
  );
};

const styles: CSSProperties = {
  border: "1px solid black",
};

const stylesInactive: CSSProperties = {
  border: "1px solid black",
};
