import { get } from "http";

interface UserCreateAccount {
  name: string;
  email: string;
  password: string;
  lastName: string;
  birthDate: string;
  city: string;
  motorcycleAsigned: boolean;
  idMotorcycleAsigned: number;
}

async function userCreateAccount(bodyUser: UserCreateAccount) {
  try {
    const createNewItem = await fetch(
      "http://localhost:8082/rentail_motorcycles/api/users/createUser",
      {
        method: "POST",
        //credentials: "include",
        headers: {
          "Content-Type": "application/json",
          //Authorization: "Bearer ",
        },
        body: JSON.stringify(bodyUser),
      }
    );

    if (!createNewItem.ok) {
      throw new Error("Err in Api");
    }
    const resToApi = await createNewItem.json();
    const catchToken = resToApi.access_token;
    localStorage.setItem("tokenSession", catchToken);
    const { access_token, ...resUser } = resToApi;
    return resUser;
  } catch (err) {
    console.log(err);
  }
  /*  async function userConnectAccount(bodyUser: UserCreateAccount) {
    try {
      const createNewItem = await fetch(
        "http://localhost:8082/rentail_motorcycles/api/users/conect",
        {
          method: "POST",
          //credentials: "include",
          headers: {
            "Content-Type": "application/json",
            //Authorization: "Bearer ",
          },
          body: JSON.stringify(bodyUser),
        }
      );
  
      if (!createNewItem.ok) {
        throw new Error("Err in Api");
      }
    
      return resUser;
    } catch (err) {
      console.log(err);
    } */
}

export { userCreateAccount };
