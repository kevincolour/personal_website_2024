import React, { PropsWithChildren, useEffect } from "react";
import { CSSProperties, FC } from "react";

import { motion } from "framer-motion";

export const AnimationComponent = (props: PropsWithChildren) => {
  return (
    <motion.div
    // initial={{ opacity: 0 }}
    // animate={{ opacity: 1 }}
    // transition={{ duration: 1, delay: 1 }}
    >
      {props.children}
    </motion.div>
  );
};
