import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { Context } from "..";
import { ItemCard } from "./ItemCard";
import { arrayRotate } from "../utils/arrayRotate";

import "../styles/Item.css";

export const Recomendation = observer(() => {
  const { Categories } = useContext(Context);
  const history = useNavigate();
  const carouselBtnHandler = (next) => {
    Categories.setRecomendedItems(
      arrayRotate(Categories.recomendedItems, next)
    );
  };

  return (
    <div className="mt-5 mb-5 d-flex align-items-center justify-content-center">
      <span
        onClick={() => carouselBtnHandler(false)}
        className="round carouselBtn"
      >
        &#8249;
      </span>
      <div
        style={{ width: "85%" }}
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <h1 className="align-self-start">З цим також купують</h1>
        <div className="d-flex justify-content-around mt-3">
          {Categories.recomendedItems.slice(0, 4).map((item) => {
            return <ItemCard key={item.id} item={item} />;
          })}
        </div>
        <Button variant={"outline-dark"} onClick={() => history("/")}>
          Подивитись каталог товарів
        </Button>
      </div>
      <span
        onClick={() => carouselBtnHandler(true)}
        className="round carouselBtn"
      >
        &#8250;
      </span>
    </div>
  );
});
