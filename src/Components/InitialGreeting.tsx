import { delay, motion } from "framer-motion";

type InitialGreetingProps = {
  onAnimationComplete: any;
};

export const InitialGreeting = (props: InitialGreetingProps) => {
  return (
    <motion.div className="greeting" layout>
      <motion.div>Hello,</motion.div>{" "}
      <motion.div
        onAnimationComplete={props.onAnimationComplete}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div>it's</motion.div> <motion.div>nice</motion.div>{" "}
        <motion.div>to</motion.div> <motion.div>meet</motion.div>{" "}
        <motion.div>you</motion.div>{" "}
      </motion.div>
    </motion.div>
  );
};
