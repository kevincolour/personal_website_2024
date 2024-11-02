import { animate, delay, motion } from "framer-motion";
import { CSSProperties, useState } from "react";

export const ResumeWorkHeader = () => {
  const [clicked, setClicked] = useState<boolean>(true);

  const animate = clicked ? { fontSize: "25px" } : {};
  return (
    <motion.div
      layout
      style={styles}
      initial={{ opacity: 1 }}
      animate={animate}
    >
      Resume Work header
    </motion.div>
  );
};

const styles: CSSProperties = {
  border: "1px solid black",
};
