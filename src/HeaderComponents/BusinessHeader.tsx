import { animate, delay, motion } from "framer-motion";
import { CSSProperties, useState } from "react";
import { useSelectedComponentContext } from "../Context";
import { MyComponent } from "../Utils/types";

export const BusinessHeader = () => {
  const [clicked, setClicked] = useState<boolean>(true);

  const { currentComponent, setCurrentComponentCallback } =
    useSelectedComponentContext();

  const animate = clicked ? { y: -20, fontSize: "100px" } : {};

  const amIActive = currentComponent.name == "Business";

  const setActiveComponent = () => {
    const thisComponent: MyComponent = {
      name: "Business",
      index: 0,
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
    </>
  );
};

const styles: CSSProperties = {
  border: "1px solid black",
};

const stylesInactive: CSSProperties = {
  border: "1px solid black",
};
