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
  return (
    <div id="cardForItem">
      <img className="photoCard" src={props.image} alt=" image Bike" />
      <h2>{props.brand}</h2>
      <h3>{props.model}</h3>
      <span className="ccTag"> cc {props.cc}</span>
      <span className="ocupantsTag">👥{props.occupants}</span>
      <span className="autonomyTag">full tank autonomy{props.autonomy} km</span>
      <span className="speedTag">top speed {props.speed}</span>
      <span className="weigthTag">weigth {props.weigth}</span>
      <span className="statatusTag">availability {props.status}</span>
    </div>
  );
}
