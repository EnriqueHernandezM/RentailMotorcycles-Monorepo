import { ChangeEvent, FormEvent, useState } from "react";
import { useThemeValue } from "../functions/ThemeContext";
import { availableRoutes, useChangeRout } from "../functions/RoutsContext";
import { userConnectAccount } from "../api/usersAuthApi";
import {
  useValueMesaggeInputUser,
  useChangesValueMesaggeInputUser,
} from "../functions/InputsAssistan";
interface InputsConnectAccount {
  email: string;
  password: string;
}
export default function ConnectCountForm() {
  const typeLigthValue = useThemeValue();
  const changeRout = useChangeRout();
  const analyzeInputs = useChangesValueMesaggeInputUser();
  const messagesToUser = useValueMesaggeInputUser();
  const [valuesFormConectAccount, setValuesFormConectAccount] =
    useState<InputsConnectAccount>({
      email: "",
      password: "",
    });
  function changesInFormConnectUser(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    analyzeInputs(name, value);
    setValuesFormConectAccount((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  function envFormConnectUser(e: FormEvent<HTMLElement>) {
    e.preventDefault();
    let iHaveErrors;
    Object.entries(valuesFormConectAccount)?.forEach(([key, value]) => {
      let regexp = /[>.<`;*=]/g;
      if (key === "email") regexp = /[><`;*=]/g;
      if (value.match(regexp)?.length !== undefined) {
        iHaveErrors = true;
        analyzeInputs(key, value);
      }
    });
    if (iHaveErrors) {
      return;
    }
    userConnectAccount(valuesFormConectAccount)
      .then((res) => changeRout(availableRoutes.home))
      .catch((error: any) => changeRout(availableRoutes.formCreateAccount));
  }
  return (
    <form
      autoComplete="no"
      className={
        typeLigthValue === false
          ? "formCreateAccount"
          : "formCreateAccountNigth"
      }
    >
      <label>
        Email
        <input
          type="email"
          onChange={(e) => {
            changesInFormConnectUser(e);
          }}
          name="email"
          className="inputsText"
        />
        <p className="messageInputsToUser">
          {messagesToUser.inInput === "email" && messagesToUser.message}
        </p>
      </label>
      <label>
        password
        <input
          type="password"
          onChange={(e) => {
            changesInFormConnectUser(e);
          }}
          name="password"
          className="inputsText"
          minLength={7}
        />
      </label>
      <button
        onClick={(e) => {
          envFormConnectUser(e);
        }}
        className="buttonForms"
      >
        Connect
      </button>

      <button
        onClick={() => changeRout(availableRoutes.formCreateAccount)}
        className="buttonForms"
      >
        Create Account
      </button>
    </form>
  );
}
