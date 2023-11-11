//import { use } from "react";

interface ObjectBick {
  brand: "string";
  model: "string";
  cc: 2000;
  occupants: 3;
  autonomy: 999;
  speed: 500;
  weigth: 999;
  image: ".jpg";
  status: "Available";
}
async function getAllsItemsApi() {
  try {
    const allBikesInv = await fetch(
      "http://localhost:8082/rentail_Motorcycles/api/bikes-availables",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!allBikesInv.ok) {
      console.log("KOKO");

      alert("AA");
      throw new Error("Err in Api");
    }
    const resAllBikesInv = await allBikesInv.json();
    console.log(typeof resAllBikesInv);

    return resAllBikesInv.inventary;
  } catch (err) {
    console.log(err);
  }
}

async function addMotorcycleInventoryApi() {
  try {
    const createNewItem = fetch("/rentail_Motorcycles/api/postNew", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(createNewItem);
  } catch (err) {
    console.log(err);
  }
}
export { getAllsItemsApi, addMotorcycleInventoryApi };
