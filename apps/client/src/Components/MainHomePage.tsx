import hondaCbr from "../images/hondaCbr600rr.png";
import yamahaTenere from "../images/yamahaTenere.png";
import ContainerResume from "./ContainerResume";
import { getAllsItemsApi, addMotorcycleInventoryApi } from "../api/bikesApi";
import { useEffect, useState, useTransition } from "react";
import CardItem from "./CardItem";

export default function MainHomePage() {
  const [isPending, startTransition] = useTransition();

  const [allInventory, setAllInventory] = useState([]);
  const [numPositionItem, setNumPositionItem] = useState(0);
  const [widthWindow, setWidthWindow] = useState(window.innerWidth);

  useEffect(() => {
    getAllsItemsApi()
      .then((inventory) => {
        startTransition(() => {
          setAllInventory(inventory);
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const carouselImages = (isLeft: boolean, isRigth: boolean) => {
    const limitImages = allInventory.length;
    if (isLeft === true && isRigth === false) {
      setNumPositionItem((prev) => {
        if (prev === 0) {
          return prev;
        } else {
          return prev - 1;
        }
      });
    } else if (isLeft === false && isRigth === true) {
      setNumPositionItem((prev) => {
        if (prev === limitImages - 1) {
          return prev;
        }
        return prev + 1;
      });
    }
  };

  const createCardsItems = allInventory.map((el: any) => {
    return <CardItem key={el.id} {...el} />;
  });

  return (
    <main>
      <div className="containerImagesMain">
        <img className="hondaCbr" src={hondaCbr} alt="honda cbr 600" />
        <img className="yamahaTenere" src={yamahaTenere} alt="yamaha tenere" />
      </div>
      {createCardsItems.length === 0 ? (
        <div id="contentMsgeNotAvailable">
          <h5 className="msgeNotAvailables">
            oh oh Apparentlythere are no motorcycles available
          </h5>
        </div>
      ) : (
        <div id="containerAllItems">
          {widthWindow > 1024 && (
            <span
              onMouseOver={() => {
                carouselImages(true, false);
              }}
              id="containerAllItemsBefore"
            ></span>
          )}
          {widthWindow > 1024 && (
            <div className="prob"> {createCardsItems[numPositionItem - 1]}</div>
          )}
          {widthWindow > 1024
            ? createCardsItems[numPositionItem]
            : createCardsItems}
          {widthWindow > 1024 && (
            <div className="prob2">
              {" "}
              {createCardsItems[numPositionItem + 1]}
            </div>
          )}
          {widthWindow > 1024 && (
            <span
              onMouseOver={() => {
                carouselImages(false, true);
              }}
              id="containerAllItemsAfter"
            ></span>
          )}
        </div>
      )}

      <ContainerResume />
    </main>
  );
}
