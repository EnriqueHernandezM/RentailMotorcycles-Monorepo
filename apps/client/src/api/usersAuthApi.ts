import { error } from "console";

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
interface UserConnectAccount {
  email: string;
  password: string;
}
async function userCreateAccount(bodyUser: UserCreateAccount) {
  try {
    const createNewItem = await fetch(
      "http://localhost:8082/rentail_motorcycles/api/users/createUser",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyUser),
      }
    );

    if (!createNewItem.ok) {
      throw new Error("It's not possible create account");
    }
    const resToApi = await createNewItem.json();
    const catchToken = resToApi.access_token;
    localStorage.setItem("tokenSession", catchToken);
    const { access_token, ...resUser } = resToApi;
    return resUser;
  } catch (err) {
    console.log(err);
  }
}
async function userConnectAccount(bodyUser: UserConnectAccount) {
  try {
    const connectUser = await fetch(
      "http://localhost:8082/rentail_motorcycles/api/users/conect",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyUser),
      }
    );
    if (!connectUser.ok) {
      throw new Error("Not Login");
    }
    const resToApi = await connectUser.json();
    const catchToken = resToApi.access_token;
    localStorage.setItem("tokenSession", catchToken);
    const { access_token, ...resUserConnect } = resToApi;
    return resUserConnect;
  } catch (error) {
    throw error;
  }
}
async function viewOneUser(bodyUser: UserCreateAccount) {
  try {
    const extarctCatchToken = localStorage.getItem("tokenSession");
    const connectUser = await fetch(
      "http://localhost:8082/rentail_motorcycles/api/users/conect",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${extarctCatchToken}`,
        },
        body: JSON.stringify(bodyUser),
      }
    );
    if (!connectUser.ok) {
      throw new Error("Error in api");
    }
    const resToApi = await connectUser.json();
    return resToApi;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
export { userCreateAccount, userConnectAccount, viewOneUser };
