import { delay, motion } from "framer-motion";
import React, { CSSProperties } from "react";
import { useUserData } from "../Context";

export const ColourLine = (props: any) => {
  const [percent, setPercent] = React.useState<number>(10);
  const { currentUserData, setCurrentUserDataCallback } = useUserData();

  React.useEffect(() => {
    const valueToChange = Math.floor(
      (currentUserData.mouseData.x / window.innerWidth) * 100
    );
    setPercent(valueToChange);
    console.log(valueToChange);
  }, [currentUserData]);
  const styles = getStyles(percent.toString());
  return (
    <motion.div
      className=""
      style={styles}
      layout
      animate={{
        width: 1000,
      }}
    >
      <motion.div></motion.div>{" "}
    </motion.div>
  );
};

const getStyles = (colourPercent?: string) => {
  const styles: CSSProperties = {
    //   backgroundImage: "linear-gradient(red, yellow)",
    background:
      "linear-gradient(90deg, rgba(2,0,36,1) " +
      colourPercent +
      "%, rgba(121,111,9,1) 28%, rgba(121,108,10,1) 29%, rgba(108,12,34,1) 60%, rgba(0,212,255,1) 96%)",
    top: 50,
    position: "fixed",
    width: 100,
    height: 30,
    borderRadius: 10,
  };

  return styles;
};
