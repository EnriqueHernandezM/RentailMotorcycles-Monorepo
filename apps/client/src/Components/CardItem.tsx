import { deleteMotorcycleInventoryApi } from "../api/bikesApi";
import { useThemeValue } from "../functions/ThemeContext";

interface ObjectBick {
  brand: string;
  model: string;
  cc: number;
  occupants: number;
  autonomy: number;
  speed: number;
  weigth: number;
  image: string;
  status: string;
  id: number;
}
export default function CardItem(props: ObjectBick) {
  const typeLigth: boolean = useThemeValue();
  async function deleteMotorcycle(id: number) {
    deleteMotorcycleInventoryApi(id)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
  return (
    <div id={typeLigth === false ? "cardForItem" : "cardForItemNigth"}>
      <img className="photoCard" src={props.image} alt=" image Bike" />
      <h2>{props.brand}</h2>
      <h3>{props.model}</h3>
      <span className="ccTag"> cc {props.cc}</span>
      <span className="ocupantsTag">👥{props.occupants}</span>
      <span className="autonomyTag">
        full tank autonomy {props.autonomy} km
      </span>
      <span className="speedTag">top speed {props.speed}k/h</span>
      <span className="weigthTag">weigth {props.weigth}kg</span>
      <span className="statatusTag">availability {props.status}</span>
      <span
        onClick={() => {
          deleteMotorcycle(props.id);
        }}
      >
        eliminar
      </span>
    </div>
  );
}
