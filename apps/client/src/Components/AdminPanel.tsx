import { useEffect, useState } from "react";
import { useThemeValue } from "../functions/ThemeContext";
import { availableRoutes, useChangeRout } from "../functions/RoutsContext";
import {
  addMotorcycleInventoryApi,
  deleteMotorcycleInventoryApi,
} from "../api/bikesApi";
import { AddNewMotorcycle } from "../api/bikesApi";
import uploadImgToStorage from "../firebase/storage";
import { Value } from "sass";
export default function AdminPanel() {
  const typeLigthValue = useThemeValue();
  const [changeValueImage, setChangeValueImage] = useState(false);
  const [rrr, setRrr] = useState("");
  const [valuesFormAddNewMotorcycle, setValuesFormAddNewMotorcycle] =
    useState<AddNewMotorcycle>({
      brand: "",
      model: "",
      cc: "",
      occupants: "",
      autonomy: "",
      speed: "",
      weigth: "",
      status: "Available",
      image: "",
    });
  const changeRout = useChangeRout();
  function changesFormAddNewMotocycleStatus(
    e: React.ChangeEvent<HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setValuesFormAddNewMotorcycle((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function changesFormAddNewMotocycle(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value, type, files } = e.target;
    setValuesFormAddNewMotorcycle((prev) => {
      let newValue;
      if (type === "number") {
        newValue = +value;
      } else {
        newValue = value;
      }
      if (files) {
        setRrr(URL.createObjectURL(files[0]));
      }
      return {
        ...prev,
        [name]: files ? files[0] : newValue,
      };
    });
  }

  async function postFormNewMotorcycles(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newUrlIMage = await uploadImgToStorage(
      valuesFormAddNewMotorcycle.image
    );
    /*  setValuesFormAddNewMotorcycle((prev) => {
      PROBABLEMENTE BORREMOS ESTO
      return {
        ...prev,
        image: newUrlIMage,
      };
    }); */
    const { image, ...valuesNotImage } = valuesFormAddNewMotorcycle;
    let v = { image: newUrlIMage, ...valuesNotImage };
    addMotorcycleInventoryApi(v)
      .then((res) => {
        console.log(res);
        changeRout(availableRoutes.home);
      })
      .catch((error) => {
        console.log("inEroor");
        changeRout(availableRoutes.formAdmin);
        console.log(error);
      });
  }
  /*  if (changeValueImage === true) {
    console.log("hghujkes por esto");

    addMotorcycleInventoryApi(valuesFormAddNewMotorcycle)
      .then((res) => {
        setChangeValueImage(false);
        console.log(res);

        changeRout(availableRoutes.home);
      })
      .catch((error) => {
        console.log("inEroor");
        changeRout(availableRoutes.formAdmin);
        console.log(error);
      });
  } */

  return (
    <form
      className={
        typeLigthValue === false
          ? "formCreateAccount"
          : "formCreateAccountNigth"
      }
      autoComplete="no"
      onSubmit={(e) => {
        postFormNewMotorcycles(e);
      }}
    >
      <label>
        Brand
        <input
          autoComplete="no"
          type="text"
          name="brand"
          required={true}
          className="inputsText"
          value={valuesFormAddNewMotorcycle.brand}
          onChange={(e) => {
            changesFormAddNewMotocycle(e);
          }}
        />
      </label>
      <label>
        Model
        <input
          autoComplete="no"
          type="text"
          name="model"
          required={true}
          className="inputsText"
          value={valuesFormAddNewMotorcycle.model}
          onChange={(e) => {
            changesFormAddNewMotocycle(e);
          }}
        />
      </label>
      <label>
        Displacement
        <input
          autoComplete="no"
          type="number"
          name="cc"
          required={true}
          className="inputsText"
          value={valuesFormAddNewMotorcycle.cc}
          onChange={(e) => {
            changesFormAddNewMotocycle(e);
          }}
        />
      </label>
      <label>
        Occupants
        <input
          autoComplete="no"
          type="number"
          name="occupants"
          required={true}
          className="inputsText"
          value={valuesFormAddNewMotorcycle.occupants}
          onChange={(e) => {
            changesFormAddNewMotocycle(e);
          }}
        />
      </label>
      <label>
        Autonomy
        <input
          autoComplete="no"
          type="number"
          name="autonomy"
          required={true}
          className="inputsText"
          value={valuesFormAddNewMotorcycle.autonomy}
          onChange={(e) => {
            changesFormAddNewMotocycle(e);
          }}
        />
      </label>
      <label>
        Speed
        <input
          autoComplete="no"
          type="number"
          name="speed"
          required={true}
          className="inputsText"
          value={valuesFormAddNewMotorcycle.speed}
          onChange={(e) => {
            changesFormAddNewMotocycle(e);
          }}
        />
      </label>
      <label>
        Weigth
        <input
          autoComplete="no"
          type="number"
          name="weigth"
          required={true}
          className="inputsText"
          value={valuesFormAddNewMotorcycle.weigth}
          onChange={(e) => {
            changesFormAddNewMotocycle(e);
          }}
          onClick={(e) => {
            console.log(e);
          }}
        />
      </label>
      <label>
        Status
        <select
          name="status"
          value={valuesFormAddNewMotorcycle.status}
          className="buttonInputsAvailableOrNot"
          onChange={(e) => {
            changesFormAddNewMotocycleStatus(e);
          }}
        >
          <option value="Available">Available</option>
          <option value="Unvailable">Unvailable</option>
        </select>
      </label>
      <label>
        Add image
        <span id="buttonSelectFiles">Select Files </span>
        <input
          name="image"
          hidden
          type="file"
          onChange={(e) => {
            changesFormAddNewMotocycle(e);
          }}
        />
      </label>

      {valuesFormAddNewMotorcycle.image && (
        <div id="previewAddImage">
          <img
            alt="your img"
            src={rrr}
            data-toggle="modal"
            data-target="#ModalPreViewImg"
            className="img-responsive"
          ></img>
        </div>
      )}
      <button className="buttonForms"> Add </button>
    </form>
  );
}
