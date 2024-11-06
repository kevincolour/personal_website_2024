import { animate, delay, motion, useMotionValue } from "framer-motion";
import { CSSProperties, useEffect, useState } from "react";
import { useSelectedComponentContext } from "../Context";
import { MyComponent } from "../Utils/types";
import { HeaderActive } from "./HeaderActive";

type GenericHeaderProps = {
  name: string;
};

export const GenericHeader = (props: GenericHeaderProps) => {
  const { currentComponent, setCurrentComponentCallback } =
    useSelectedComponentContext();

  useEffect(() => {}, []);

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
          //   layout
          style={stylesInactive}
          onClick={setActiveComponent}
        >
          {props.name}
        </motion.div>
      )}

      {amIActive && <HeaderActive key={props.name} name={props.name} />}
    </>
  );
};

const styles: CSSProperties = {
  border: "1px solid black",
};

const stylesInactive: CSSProperties = {
  border: "1px solid black",
  // display: "none",
};
