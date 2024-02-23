interface AddNewMotorcycle {
  brand: string;
  model: string;
  cc: string;
  occupants: string;
  autonomy: string;
  speed: string;
  weigth: string;
  status: string;
  image: any;
}

async function getAllsItemsApi() {
  try {
    const allBikesInv = await fetch(
      "http://localhost:8082/rentail_motorcycles/api/bikes-availables",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!allBikesInv.ok) {
      throw new Error("Err in Api");
    }
    const resAllBikesInv = await allBikesInv.json();
    return resAllBikesInv.inventary;
  } catch (error) {
    throw error;
  }
}
async function addMotorcycleInventoryApi(bodyC: AddNewMotorcycle) {
  try {
    const extarctCatchToken = localStorage.getItem("tokenSession");
    const createNewItem = await fetch(
      "http://localhost:8082/rentail_motorcycles/api/postNew",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${extarctCatchToken}`,
        },
        body: JSON.stringify(bodyC),
      }
    );
    if (!createNewItem.ok) {
      throw new Error("It's not posible add new item. Need credentials");
    }
    const resToApi = await createNewItem.json();
    return resToApi;
  } catch (error) {
    throw error;
  }
}
async function deleteMotorcycleInventoryApi(id: number) {
  try {
    const catchToken = localStorage.getItem("tokenSession");
    const createNewItem = await fetch(
      `http://localhost:8082/rentail_motorcycles/api/deleteOne/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${catchToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    if (!createNewItem.ok) {
      throw new Error("Err in Api");
    }
    const resToApi = await createNewItem.json();
    console.log(resToApi);

    return resToApi;
  } catch (err) {
    console.log(err);
  }
}
export {
  getAllsItemsApi,
  addMotorcycleInventoryApi,
  deleteMotorcycleInventoryApi,
};
export type { AddNewMotorcycle };
