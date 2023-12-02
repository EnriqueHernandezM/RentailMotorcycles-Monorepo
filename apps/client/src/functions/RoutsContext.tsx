import React, { useState, createContext, useContext } from "react";

export const availableRoutes = {
  home: "/",
  formCreateAccount: "createNewUser",
  formAdmin: "formAdmin",
};

const ContextValueTabRout = createContext<string>("/");
const ContextChangeValueRout = createContext<Function>(Function);

export const useRoutCurrent = () => {
  return useContext(ContextValueTabRout);
};
export const useChangeRout = () => {
  return useContext(ContextChangeValueRout);
};

export function RoutsContext(props: { children: React.ReactNode }) {
  const [tabRout, setTabRout] = useState<string>(availableRoutes.home);

  const changeRout = (routCatch: string) => {
    const availableRouts = setTabRout((prev) => {
      if (prev === routCatch) {
        return prev;
      }
      return routCatch;
    });
  };

  return (
    <ContextValueTabRout.Provider value={tabRout}>
      <ContextChangeValueRout.Provider value={changeRout}>
        {props.children}
      </ContextChangeValueRout.Provider>
    </ContextValueTabRout.Provider>
  );
}
