import { animate, delay, motion } from "framer-motion";
import { CSSProperties, useState } from "react";
import { useSelectedComponentContext } from "../Context";
import { MyComponent } from "../Utils/types";

export const BusinessHeader = () => {
  const [clicked, setClicked] = useState<boolean>(true);

  const { currentComponent, setCurrentComponentCallback } =
    useSelectedComponentContext();

  const animate = clicked ? stylesAfterAnimation : {};

  const amIActive = currentComponent.name == "Business";

  const setActiveComponent = () => {
    const thisComponent: MyComponent = {
      name: "Business",
      index: 0,
    };
    setCurrentComponentCallback(thisComponent);
  };
  return (
    <div style={wrapperStyle}>
      {!amIActive && (
        <motion.div
          layout
          style={styles}
          initial={{ opacity: 1 }}
          onClick={setActiveComponent}
        >
          business header
        </motion.div>
      )}

      {amIActive && (
        <motion.div
          layout
          style={styles}
          initial={{ opacity: 1 }}
          animate={animate}
        >
          business header
        </motion.div>
      )}
    </div>
  );
};

const styles: CSSProperties = {
  border: "1px solid black",
  width: "100%",
  top: 0,
};

const wrapperStyle: CSSProperties = {
  position: "absolute",
};

const stylesAfterAnimation = {
  fontSize: "50px",
  // y: -20,
  width: "100vw",
};
