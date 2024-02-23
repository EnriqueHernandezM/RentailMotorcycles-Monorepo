import React, { useState, createContext, useContext } from "react";

interface ToUser {
  inInput: string;
  message: string;
}
const ContextValuesMessageInInputsToUser = createContext<ToUser>({
  inInput: "",
  message: "",
});
const ContextChangeValuesMessageInInputsToUser =
  createContext<Function>(Function);

export const useValueMesaggeInputUser = () => {
  return useContext(ContextValuesMessageInInputsToUser);
};
export const useChangesValueMesaggeInputUser = () => {
  return useContext(ContextChangeValuesMessageInInputsToUser);
};
export function InputsAssistan(props: { children: React.ReactNode }) {
  const [messagesToUser, setMessagesToUser] = useState({
    inInput: "",
    message: "",
  });

  function analyzeInputs(nameInput: string, valueOfInput: string) {
    let regexp = /[>.<`;*=]/g;
    if (nameInput === "email") regexp = /[><`;*=]/g;
    if (nameInput === "password" && valueOfInput.match(regexp)?.length === 1) {
      setMessagesToUser((prev) => {
        return {
          ...prev,
          inInput: nameInput,
          message: "You entered invalid characters",
        };
      });
      return;
    }
    if (
      nameInput === "password" &&
      valueOfInput.length > 5 &&
      valueOfInput.match(regexp)?.length === undefined
    ) {
      setMessagesToUser((prev) => {
        return {
          ...prev,
          inInput: nameInput,
          message: "green",
        };
      });
      return;
    }
    if (valueOfInput.match(regexp)?.length === 1) {
      setMessagesToUser((prev) => {
        return {
          ...prev,
          inInput: nameInput,
          message: "You entered invalid characters",
        };
      });
    }
    if (valueOfInput.match(regexp)?.length === undefined) {
      setMessagesToUser((prev) => {
        return {
          ...prev,
          inInput: nameInput,
          message: "",
        };
      });
    }
  }
  return (
    <ContextValuesMessageInInputsToUser.Provider value={messagesToUser}>
      <ContextChangeValuesMessageInInputsToUser.Provider value={analyzeInputs}>
        {props.children}
      </ContextChangeValuesMessageInInputsToUser.Provider>
    </ContextValuesMessageInInputsToUser.Provider>
  );
}
