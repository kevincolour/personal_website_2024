import { MotionValue, motion } from "framer-motion";

type HandSVGProps = {
  fillColour: string;
  handshakeProgress: MotionValue<any>;
};

export const HandSVG = (props: HandSVGProps) => {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "tween", duration: 10, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };
  return (
    <motion.svg
      style={{
        position: "relative",
        // top: -200,
        width: "100%",
        // filter: "drop-shadow( 3px 3px 2px rgba(0, 0, 0, .7))",
      }}
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 100 125"
      // whileHover={{ scale: 1.2 }}
      // animate={{ scale: 1.2}}
      transform="rotate(-90) scale(1 1)"

      // initial="hidden"
      // animate="visible"
    >
      <motion.path
        stroke={props.fillColour}
        strokeWidth={3}
        // initial={{
        //   scaleX: 2,
        //   scaleY: 2,
        //   rotate: 10,
        //   background: "red",
        // }}

        // fill={"#b5ae82"}

        // fill={props.fillColour}
        // variants={draw}
        // custom={1}
        style={{ pathLength: props.handshakeProgress }}
        // animate={{ fill: fillColour }}
        // initial={{ fill: "#FFFFFF", pathLength: 0 }}
        // transition={{ duration: 3 }}
        d="m72.5 43.301c-0.16016-4.9688-5.4414-6.7617-8.8281-4.3906v-19.27c0.019531-4.1211-4.9492-6.5703-8.2188-4.1602 0.51953-8.0586-10.789-8.0508-10.371 0.058593-3.2383-2.5117-8.2695-0.011718-8.2109 4.1016v3.5898c-2.8594-2.0195-7.25 0.070312-7.3984 3.6016l-1.6094 24.52c-0.21875 3.3906-0.30078 6.7695-0.35938 9.6289-0.10156 6.0703 2.3789 12.18 6.8789 16.672v12.91h24.98v-12.34c8.0508-3.9414 13.18-12.02 13.129-20.762v-14.16h0.011718zm-2.1484 14.168c0.070313 8.3203-5.1484 15.98-13.012 19.328-0.070313 0.03125-0.12109 0.10156-0.12109 0.17969v11.43h-20.68v-11.699c-4.4609-4-6.9805-9.9297-6.8789-15.691 0.050782-2.8281 0.12891-6.1797 0.35156-9.5312l1.6094-24.52c0.10156-1.4609 1.4688-2.5781 3-2.3594 1.3203 0.19141 2.25 1.4102 2.25 2.7383v17.68c0 0.58984 0.48047 1.0781 1.0781 1.0781 0.60156 0 1.0781-0.48047 1.0781-1.0781v-25.379c0.12891-3.9492 5.9414-3.9102 6.0117 0.070313v25.309c0.019532 1.3984 2.1211 1.4219 2.1484 0 0-3.6602-0.03125-27.27 0.058594-30.301 0.10938-4.1211 5.9102-4.1992 6.0586-0.14062v2.7383s0 27.672-0.019532 27.699c0 0.58984 0.48047 1.0781 1.0781 1.0781 0.60156 0 1.0781-0.48047 1.0781-1.0781v-25.301c0-0.85938 0.32812-1.6406 0.91016-2.1992 1.8203-1.8281 5.1914-0.48047 5.1719 2.1289 0 5.9805 0.019531 26.281 0.019531 31.898-8.0898 2.4219-14.262 8.9805-16.859 16.961-0.48828 1.3086 1.4492 2.1016 2 0.78906 2.5195-7.8594 8.7617-14.148 16.859-16.078 0.089843-0.019531 0.14844-0.10156 0.14844-0.19141v-9.8516c0-0.89844 0.28906-1.6484 0.85938-2.1992 1.9492-1.8398 5.75-1.0195 5.8203 2.3516v14.129h-0.03125z"
      />
    </motion.svg>
  );
};
