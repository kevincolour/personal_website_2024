import { animate, delay, motion } from "framer-motion";
import { CSSProperties, useState } from "react";
import { useSelectedComponentContext } from "../Context";
import { MyComponent } from "../Utils/types";

type GenericHeaderProps = {
  name: string;
};

export const GenericHeader = (props: GenericHeaderProps) => {
  const [clicked, setClicked] = useState<boolean>(true);

  const { currentComponent, setCurrentComponentCallback } =
    useSelectedComponentContext();

  const animate = clicked ? { fontSize: "40px" } : {};

  const amIActive = currentComponent.name == props.name;

  const setActiveComponent = () => {
    const thisComponent: MyComponent = {
      name: props.name,
      index: 1,
    };
    setCurrentComponentCallback(thisComponent);
  };

  return (
    <>
      {!amIActive && (
        <motion.div
          layout
          style={stylesInactive}
          initial={{ opacity: 1 }}
          onClick={setActiveComponent}
        >
          {props.name}
        </motion.div>
      )}

      {amIActive && (
        <motion.div
          layout
          style={styles}
          initial={{ opacity: 1 }}
          animate={animate}
        >
          {props.name}
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
