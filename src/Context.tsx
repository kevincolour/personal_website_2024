import React, { createContext, useState, useContext } from "react";
import { MyComponent } from "./Utils/types";

const defaultComponent: MyComponent = {
  name: "none",
  index: -1,
};

// Create a context with default value (optional)
export const SelectedComponentContext = createContext({
  currentComponent: defaultComponent,
  setCurrentComponentCallback: (component: MyComponent) => {},
});

export const SelectedComponentProvider = ({ children }: { children: any }) => {
  const [currentComponent, setCurrentComponent] =
    useState<MyComponent>(defaultComponent);
  const setCurrentComponentCallback = React.useCallback(
    (component: MyComponent) => {
      setCurrentComponent(component);
    },
    []
  );

  return (
    <SelectedComponentContext.Provider
      value={{
        currentComponent,
        setCurrentComponentCallback,
      }}
    >
      {children}
    </SelectedComponentContext.Provider>
  );
};

export const useSelectedComponentContext = () =>
  useContext(SelectedComponentContext);
