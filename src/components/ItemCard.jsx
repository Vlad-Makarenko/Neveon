import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Context } from "..";
import { chooseImg } from "../utils/chooseImg";

import "../styles/Item.css";

export const ItemCard = observer(({ item }) => {
  const [cardImg, setCardImg] = useState();
  const { Categories } = useContext(Context);

  const history = useNavigate();

  useEffect(() => {
    chooseImg(item.id, setCardImg);
  }, [item.id]);

  const clickItemHandler = () => {
    window.scrollTo(0, 0);
    history(`/category/${item.id}`);
  };

  return (
    <Card className="d-flex flex-column justify-content-center itemCard">
      <Card.Img
        onClick={clickItemHandler}
        className="itemLink"
        variant="top"
        src={cardImg}
      />
      <Card.Body>
        <Card.Title onClick={clickItemHandler} className="itemLink">
          {item.name}
        </Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <Card.Title>Ціна від {item.price}</Card.Title>
        <Button
          variant={"outline-dark"}
          onClick={() => Categories.setModalShow(true)}
        >
          Замовити
        </Button>
      </Card.Body>
    </Card>
  );
});
