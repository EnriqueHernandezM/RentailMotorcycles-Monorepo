import { useState } from "react";
import { useThemeValue } from "../functions/ThemeContext";

interface InputsCreateAccount {
  nameNewUser: string;
  emailNewUser: string;
  lastNameNewUser: string;
  birthDateNewUser: string;
  cityNewUser: string;
  motorcycleAsigned: boolean;
  idMotorcycleAsigned: string;
}

export default function CreateCountForm() {
  const typeLigthValue: boolean = useThemeValue();

  const [valuesFormCreateAccount, setValuesFormCreateAccount] =
    useState<InputsCreateAccount>({
      nameNewUser: "",
      lastNameNewUser: "",
      emailNewUser: "",
      birthDateNewUser: "",
      cityNewUser: "",
      motorcycleAsigned: false,
      idMotorcycleAsigned: "",
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
  function envFormCreateNewUser() {
    ///visit api
    console.log(valuesFormCreateAccount);
  }
  return (
    <form
      onSubmit={envFormCreateNewUser}
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
          className="inputsText"
          type="text"
          name="nameNewUser"
          required={true}
          onChange={changesFormCreateUser}
          value={valuesFormCreateAccount.nameNewUser}
        />
      </label>
      <label>
        Last name
        <input
          className="inputsText"
          type="text"
          name="lastName"
          required={true}
          onChange={changesFormCreateUser}
          value={valuesFormCreateAccount.lastNameNewUser}
        />
      </label>
      <label>
        Email
        <input
          className="inputsText"
          type="email"
          name="emailNewUser"
          required={true}
          onChange={changesFormCreateUser}
          value={valuesFormCreateAccount.emailNewUser}
        />
      </label>
      <label>
        Birthdate
        <input
          className="inputCalendar"
          type="date"
          name="birthDateNewUser"
          required={true}
          onChange={changesFormCreateUser}
          value={valuesFormCreateAccount.birthDateNewUser}
        />
      </label>
      <label>
        City
        <input
          className="inputsText"
          type="text"
          name="cityNewUser"
          required={true}
          onChange={changesFormCreateUser}
          value={valuesFormCreateAccount.cityNewUser}
        />
      </label>
    </form>
  );
}
