import { animate, delay, motion, useMotionValue } from "framer-motion";
import { CSSProperties, useEffect, useState } from "react";
import { useSelectedComponentContext } from "../Context";
import { MyComponent } from "../Utils/types";

type HeaderActiveProps = {
  name: string;
};

export const HeaderActive = (props: HeaderActiveProps) => {
  const opacity = useMotionValue(0);

  useEffect(() => {
    opacity.set(0.5);
    console.log(props.name, "Activeheadr");
    return () => opacity.set(0);
  }, []);

  return (
    <>
      <motion.div
        //   layout
        style={{ ...styles }}
        transition={{ duration: 2 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {props.name} 1123
      </motion.div>
    </>
  );
};

const styles: CSSProperties = {
  border: "1px solid black",
};

const stylesInactive: CSSProperties = {
  border: "1px solid black",
};
