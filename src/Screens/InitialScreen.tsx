import React, { useEffect } from "react";
import { CSSProperties, FC } from "react";
import { InitialIntro } from "../Components/InitialIntro";
import { MyComponentProps } from "../Utils/types";
import { PreviousComponents } from "../Components/PreviousComponents";
import {
  SelectedComponentContext,
  SelectedComponentProvider,
} from "../Context";
import { Business } from "../Components/Business";

export const InitialScreen = () => {
  //need some state to track components in past
  //need callback from here to component to set next component

  const [currentComponents, setCurrentComponents] =
    React.useState<React.FC<MyComponentProps>[]>();

  useEffect(() => {
    setCurrentComponents([() => <InitialIntro />, () => <Business />]);
  }, []);

  return (
    <>
      {/* <PreviousComponents prevComponents={prevComponents} /> */}
      {/* {currentComponent} */}

      <SelectedComponentProvider>
        {currentComponents?.map((Ele) => (
          <Ele />
        ))}
      </SelectedComponentProvider>
    </>
  );
};

const styles: CSSProperties = {
  position: "absolute",
  left: 0,
};
