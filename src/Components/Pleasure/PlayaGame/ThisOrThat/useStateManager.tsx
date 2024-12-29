import cat from "../../../../Assets/ThisOrThat/cinder.png";
import cat2 from "../../../../Assets/ThisOrThat/benjicat.jpg";

import screen2cat from "../../../../Assets/ThisOrThat/cinder2.png";
import screen2cat2 from "../../../../Assets/ThisOrThat/benjicat2.jpg";
import React, { CSSProperties } from "react";

export type ThisOrThatObj = {
  pic1: string;
  pic2: string;
  descriptionText: string;
  pic1styleModifier?: any;
  pic2styleModifier?: any;
};

export const useStateManager = (currentProgress: number) => {
  const picState1: ThisOrThatObj = {
    pic1: cat2,
    pic2: cat,
    descriptionText: "Which cat is cuter",
  };
  const picState2: ThisOrThatObj = {
    pic1: screen2cat2,
    pic2: screen2cat,
    descriptionText: "Which cat is bigger",
    pic1styleModifier: {
      width: window.innerHeight / 2.5,
      borderRadius: window.innerHeight / 2.5 / 2,
    },
    pic2styleModifier: {
      width: window.innerHeight / 5,
      borderRadius: window.innerHeight / 5 / 2,
    },
  };
  const picState3: ThisOrThatObj = {
    pic1: screen2cat2,
    pic2: screen2cat,
    descriptionText: "Which cat is bigger",
    pic2styleModifier: {
      width: window.innerHeight / 2.5,
      borderRadius: window.innerHeight / 2.5 / 2,
    },
    pic1styleModifier: {
      width: window.innerHeight / 5,
      borderRadius: window.innerHeight / 5 / 2,
    },
  };
  const picState4: ThisOrThatObj = {
    pic1: cat,
    pic2: cat2,
    descriptionText: "Which cat is cuter",
  };
  const arrayOfPicObj = React.useMemo(
    () => [picState1, picState2, picState3],
    []
  );

  if (currentProgress == arrayOfPicObj.length) {
    return null;
  }

  const pic1 = arrayOfPicObj[currentProgress].pic1;
  const pic2 = arrayOfPicObj[currentProgress].pic2;
  const descriptionText = arrayOfPicObj[currentProgress].descriptionText;
  const pic1styleModifier = arrayOfPicObj[currentProgress].pic1styleModifier;
  const pic2styleModifier = arrayOfPicObj[currentProgress].pic2styleModifier;
  return { pic1, pic2, descriptionText, pic1styleModifier, pic2styleModifier };
};
