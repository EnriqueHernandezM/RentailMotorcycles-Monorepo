import { FormEvent, useState } from "react";
import { useThemeValue } from "../functions/ThemeContext";
import { userCreateAccount } from "../api/usersAuthApi";
import {
  useChangesValueMesaggeInputUser,
  useValueMesaggeInputUser,
} from "../functions/InputsAssistan";

interface InputsCreateAccount {
  name: string;
  lastName: string;
  email: string;
  password: string;
  birthDate: string;
  city: string;
  motorcycleAsigned: boolean;
  idMotorcycleAsigned: number;
}

export default function CreateCountForm() {
  const typeLigthValue: boolean = useThemeValue();
  const analyzeInputs = useChangesValueMesaggeInputUser();
  const messagesToUser = useValueMesaggeInputUser();
  const [valuesFormCreateAccount, setValuesFormCreateAccount] =
    useState<InputsCreateAccount>({
      name: "",
      lastName: "",
      email: "",
      password: "",
      birthDate: "",
      city: "",
      motorcycleAsigned: false,
      idMotorcycleAsigned: 0,
    });

  function changesFormCreateUser(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    analyzeInputs(name, value);
    setValuesFormCreateAccount((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  function envFormCreateNewUser(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { motorcycleAsigned, idMotorcycleAsigned, ...toAnalized } =
      valuesFormCreateAccount;
    let iHaveErrors;
    Object.entries(toAnalized)?.forEach(([key, value]) => {
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

    userCreateAccount(valuesFormCreateAccount)
      .then((res) => {
        console.log(res);
      })
      .catch((err: any) => console.log(err));
  }
  return (
    <form
      autoComplete="no"
      onSubmit={(e) => {
        envFormCreateNewUser(e);
      }}
      className={
        typeLigthValue === false
          ? "formCreateAccount"
          : "formCreateAccountNigth"
      }
    >
      <p> Create Account</p>
      <label>
        Name
        <input
          autoComplete="no"
          className="inputsText"
          type="text"
          name="name"
          required={true}
          onChange={changesFormCreateUser}
          value={valuesFormCreateAccount.name}
        />
        <p className="messageInputsToUser">
          {messagesToUser.inInput === "name" && messagesToUser.message}
        </p>
      </label>
      <label>
        Last name
        <input
          autoComplete="no"
          className="inputsText"
          type="text"
          name="lastName"
          required={true}
          onChange={changesFormCreateUser}
          value={valuesFormCreateAccount.lastName}
        />
        <p className="messageInputsToUser">
          {messagesToUser.inInput === "lastName" && messagesToUser.message}
        </p>
      </label>
      <label>
        Email
        <input
          autoComplete="no"
          className="inputsText"
          type="email"
          name="email"
          required={true}
          onChange={changesFormCreateUser}
          value={valuesFormCreateAccount.email}
        />
        <p className="messageInputsToUser">
          {messagesToUser.inInput === "email" && messagesToUser.message}
        </p>
      </label>
      <label>
        Password
        <input
          autoComplete="no"
          className="inputsText"
          type="password"
          name="password"
          required={true}
          onChange={changesFormCreateUser}
          value={valuesFormCreateAccount.password}
        />
        <p className="messageInputsToUser">
          {messagesToUser.inInput === "password" && messagesToUser.message}
        </p>
        <div
          id={
            messagesToUser.message === "green"
              ? "indicateSecurePasswordOn"
              : "indicateSecurePassword"
          }
        ></div>
      </label>
      <label>
        Birthdate
        <input
          autoComplete="no"
          className="inputCalendar"
          type="date"
          name="birthDate"
          required={true}
          onChange={changesFormCreateUser}
          value={valuesFormCreateAccount.birthDate}
        />
      </label>
      <label>
        City
        <input
          autoComplete="no"
          className="inputsText"
          type="text"
          name="city"
          required={true}
          onChange={changesFormCreateUser}
          value={valuesFormCreateAccount.city}
        />
        <p className="messageInputsToUser">
          {messagesToUser.inInput === "city" && messagesToUser.message}
        </p>
      </label>
      <button className="buttonForms"> Create account </button>
    </form>
  );
}
