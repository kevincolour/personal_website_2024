import { CSSProperties, createRef, useContext, useRef } from "react";
import { MyComponent, MyComponentProps } from "../../Utils/types";
import { InitialGreeting } from "../InitialGreeting";
import React from "react";
import { motion } from "framer-motion";
import { useSelectedComponentContext } from "../../Context";
import { getStyles } from "../../Utils/styles";
import { ClickableText } from "../Util/ClickableText";
import { Modal } from "@fluentui/react";

import useLongPress from "./useLongPress";
import { InstagramBodyPicture } from "./InstagramBodyPicture";
import cat from "../../Assets/cat.jpg";
import cat2 from "../../Assets/cat2.jpg";
import { WIDTH_RESPONSIVE } from "../../Utils/constants";
import { isMobile } from "../../Utils/helpers";

import first from "../../Assets/InstagramProfile/TaggedPhotos/1.png";
import second from "../../Assets/InstagramProfile/TaggedPhotos/2.png";
import third from "../../Assets/InstagramProfile/TaggedPhotos/3.png";
import fourth from "../../Assets/InstagramProfile/TaggedPhotos/4.png";
import fith from "../../Assets/InstagramProfile/TaggedPhotos/5.png";
import sixth from "../../Assets/InstagramProfile/TaggedPhotos/6.png";
import seventh from "../../Assets/InstagramProfile/TaggedPhotos/7.png";
import eight from "../../Assets/InstagramProfile/TaggedPhotos/8.png";
import nine from "../../Assets/InstagramProfile/TaggedPhotos/9.png";
import ten from "../../Assets/InstagramProfile/TaggedPhotos/10.png";
import eleven from "../../Assets/InstagramProfile/TaggedPhotos/11.png";
import twelve from "../../Assets/InstagramProfile/TaggedPhotos/12.png";
import thirteen from "../../Assets/InstagramProfile/TaggedPhotos/13.png";
import fourteen from "../../Assets/InstagramProfile/TaggedPhotos/14.png";
import fifteen from "../../Assets/InstagramProfile/TaggedPhotos/15.png";

export type InstagramBodyProfile = {
  //   pic: string;
  //   callback: () => void;
  //   backPressed: boolean;
  drillTriggeredCallback: (state: boolean) => void;
  drillState: boolean;
};

export const InstagramBodyProfile: React.FC<InstagramBodyProfile> = (
  props: InstagramBodyProfile
) => {
  const { currentComponent, setCurrentComponentCallback } =
    useSelectedComponentContext();

  let vw = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  const styles = getStyles();
  // const position = props.backPressed ? vw : 0;
  const isMobileDevice = isMobile();
  return (
    <div>
      <motion.div
        initial={{ x: vw }}
        animate={{ x: 0 }}
        style={
          isMobileDevice
            ? { position: "absolute", width: WIDTH_RESPONSIVE, zIndex: 5 }
            : {
                minHeight: "100px",
                margin: "auto",
                position: "relative",
                bottom: 0,
                overflow: "hidden",
              }
        }
        transition={{ damping: 20, duration: 0.2 }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
          }}
        >
          <InstagramBodyPicture
            key={fifteen}
            pic={fifteen}
            index={0}
            drillTriggeredCallback={props.drillTriggeredCallback}
            drillState={props.drillState}
          />
          <InstagramBodyPicture
            key={fourteen}
            pic={fourteen}
            index={1}
            drillTriggeredCallback={props.drillTriggeredCallback}
            drillState={props.drillState}
          />
          <InstagramBodyPicture
            key={thirteen}
            pic={thirteen}
            index={2}
            drillTriggeredCallback={props.drillTriggeredCallback}
            drillState={props.drillState}
          />
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
          }}
        >
          <InstagramBodyPicture
            key={twelve}
            pic={twelve}
            index={0}
            drillTriggeredCallback={props.drillTriggeredCallback}
            drillState={props.drillState}
          />
          <InstagramBodyPicture
            key={eleven}
            pic={eleven}
            index={1}
            drillTriggeredCallback={props.drillTriggeredCallback}
            drillState={props.drillState}
          />
          <InstagramBodyPicture
            key={ten}
            pic={ten}
            index={2}
            drillTriggeredCallback={props.drillTriggeredCallback}
            drillState={props.drillState}
          />
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
          }}
        >
          <InstagramBodyPicture
            key={nine}
            pic={nine}
            index={0}
            drillTriggeredCallback={props.drillTriggeredCallback}
            drillState={props.drillState}
          />
          <InstagramBodyPicture
            key={eight}
            pic={eight}
            index={1}
            drillTriggeredCallback={props.drillTriggeredCallback}
            drillState={props.drillState}
          />
          <InstagramBodyPicture
            key={seventh}
            pic={seventh}
            index={2}
            drillTriggeredCallback={props.drillTriggeredCallback}
            drillState={props.drillState}
          />
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
          }}
        >
          <InstagramBodyPicture
            key={sixth}
            pic={sixth}
            index={0}
            drillTriggeredCallback={props.drillTriggeredCallback}
            drillState={props.drillState}
          />
          <InstagramBodyPicture
            key={fith}
            pic={fith}
            index={1}
            drillTriggeredCallback={props.drillTriggeredCallback}
            drillState={props.drillState}
          />
          <InstagramBodyPicture
            key={fourth}
            pic={fourth}
            index={2}
            drillTriggeredCallback={props.drillTriggeredCallback}
            drillState={props.drillState}
          />
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
          }}
        >
          <InstagramBodyPicture
            key={first}
            pic={third}
            index={0}
            drillTriggeredCallback={props.drillTriggeredCallback}
            drillState={props.drillState}
          />
          <InstagramBodyPicture
            key={second}
            pic={second}
            index={1}
            drillTriggeredCallback={props.drillTriggeredCallback}
            drillState={props.drillState}
          />
          <InstagramBodyPicture
            key={third}
            pic={first}
            index={2}
            drillTriggeredCallback={props.drillTriggeredCallback}
            drillState={props.drillState}
          />
        </div>
      </motion.div>
    </div>
  );
};

const imageStyle: CSSProperties = {
  border: "1px solid black",
  flex: 1,
  height: 150,
  userSelect: "none",
};
