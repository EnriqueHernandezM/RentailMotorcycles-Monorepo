import React, { useState, createContext, useContext } from "react";

const ContextValueTabRout = createContext<boolean>(false);
const ContextChangeValueRout = createContext<Function>(Function);

export const useRoutCurrent = () => {
  return useContext(ContextValueTabRout);
};
export const useChangeRout = () => {
  return useContext(ContextChangeValueRout);
};

export function RoutsContext(props: { children: React.ReactNode }) {
  const [tabRout, setTabRout] = useState<boolean>(false);

  const changeRout = () => {
    setTabRout((prev) => {
      console.log(prev);
      return !prev;
      /*  if (prev === rout) {
        return prev;
      } else {
        return rout;
      } */
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
