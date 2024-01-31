import { ChangeEvent, FormEvent, useState } from "react";
import { useThemeValue } from "../functions/ThemeContext";
import { availableRoutes, useChangeRout } from "../functions/RoutsContext";
import { userConnectAccount } from "../api/usersAuthApi";

interface InputsConnectAccount {
  email: string;
  password: string;
}

export default function ConnectCountForm() {
  const typeLigthValue = useThemeValue();
  const changeRout = useChangeRout();
  const [valuesFormConectAccount, setValuesFormConectAccount] =
    useState<InputsConnectAccount>({
      email: "",
      password: "",
    });

  function changesInFormConnectUser(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setValuesFormConectAccount((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  function envFormConnectUser(e: FormEvent<HTMLElement>) {
    e.preventDefault();
    userConnectAccount(valuesFormConectAccount)
      .then((res) => console.log(res))
      .catch((err: any) => console.log(err));
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
