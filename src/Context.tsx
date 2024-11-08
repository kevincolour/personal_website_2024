import React, { createContext, useState, useContext } from "react";
import { MyComponent, UserData } from "./Utils/types";

const defaultComponent: MyComponent = {
  name: "none",
  index: -1,
};

const defaultUserData: UserData = {
  mouseData: {
    x: 0,
    y: 0,
  },
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

// Create a context with default value (optional)
export const UserDataContext = createContext({
  currentUserData: defaultUserData,
  setCurrentUserDataCallback: (userData: UserData) => {},
});

export const UserDataProvider = ({ children }: { children: any }) => {
  const [currentUserData, setCurrentUserData] =
    useState<UserData>(defaultUserData);
  const setCurrentUserDataCallback = React.useCallback((userData: UserData) => {
    setCurrentUserData(userData);
  }, []);

  return (
    <UserDataContext.Provider
      value={{
        currentUserData,
        setCurrentUserDataCallback,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

export const useUserData = () => useContext(UserDataContext);
