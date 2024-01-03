import { FormEvent, useState } from "react";
import { useThemeValue } from "../functions/ThemeContext";
import { userCreateAccount } from "../api/usersAuthApi";

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
    setValuesFormCreateAccount((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  function envFormCreateNewUser(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
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
      id={
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
      </label>
      <button className="buttonForms"> Log in </button>
    </form>
  );
}
