import React from "react";
import { motion } from "framer-motion";

export const HelloWorlds = () => {
  const [newWord, setNewWord] = React.useState<string>("Worlds");
  React.useEffect(() => {
    const interval = window.setInterval(() => {
      setNewWord("test");
    }, 1000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <>
      <div style={{ display: "flex", gap: "10px" }}>
        <div style={{}}>Hello </div>
        <div>
          {/* <motion.div style={{}}> Worlds</motion.div> */}
          <motion.div
            animate={{ opacity: 100 }}
            style={{ opacity: 0, position: "relative", top: "-40px" }}
          >
            {" "}
            {newWord}
          </motion.div>
        </div>
      </div>
    </>
  );
};
