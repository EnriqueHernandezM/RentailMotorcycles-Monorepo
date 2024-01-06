import { FormEvent, useState } from "react";
import { useThemeValue } from "../functions/ThemeContext";

interface InputsConnectAccount {
  email: string;
  password: string;
  roles: string;
}

export default function ConnectCountForm() {
  const typeLigthValue = useThemeValue();

  const [valuesFormConectAccount, setValuesFormConectAccount] =
    useState<InputsConnectAccount>({
      email: "",
      password: "",
      roles: "admin" || "user",
    });

  function envFormConnectUser(e: FormEvent<HTMLElement>) {
    e.preventDefault();
    console.log("Quiero mi fucking api");
    console.log(valuesFormConectAccount);
    console.log("ya de una vena pa que sangre");
  }
  return (
    <form
      autoComplete="no"
      onSubmit={(e) => {
        envFormConnectUser(e);
      }}
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
          onChange={(e) => {}}
          name="email"
          className="inputsText"
        />
      </label>
      <label>
        password
        <input
          type="text"
          onChange={(e) => {}}
          name="email"
          className="inputsText"
          minLength={7}
        />
      </label>
    </form>
  );
}
