import hondaCbr from "../images/hondaCbr600rr.png";
import yamahaTenere from "../images/yamahaTenere.png";
import ContainerResume from "./ContainerResume";
import { getAllsItemsApi, addMotorcycleInventoryApi } from "../api/bikesApi";
import React, { useEffect, useState } from "react";
import CardItem from "./CardItem";
export default function MainHomePage() {
  const [allInventory, setAllInventory] = useState([]);
  const [num, setNum] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    getAllsItemsApi()
      .then((inventory) => {
        setAllInventory(inventory);
      })
      .catch((err) => console.log(err));
  }, []);

  const carouselImages = (isLeft: boolean, isRigth: boolean) => {
    const limitImages = allInventory.length;
    if (isLeft === true && isRigth === false) {
      setNum((prev) => {
        if (prev === 0) {
          return prev;
        } else {
          return prev - 1;
        }
      });
    } else if (isLeft === false && isRigth === true) {
      setNum((prev) => {
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
      <div id="containerAllItems">
        {width > 1024 && (
          <span
            onMouseOver={() => {
              carouselImages(true, false);
            }}
            id="containerAllItemsBefore"
          ></span>
        )}
        {width > 1024 && (
          <div className="prob"> {createCardsItems[num - 1]}</div>
        )}
        {width > 1024 ? createCardsItems[num] : createCardsItems}
        {width > 1024 && (
          <div className="prob2"> {createCardsItems[num + 1]}</div>
        )}
        {width > 1024 && (
          <span
            onMouseOver={() => {
              carouselImages(false, true);
            }}
            id="containerAllItemsAfter"
          ></span>
        )}
      </div>
      <ContainerResume />
    </main>
  );
}
