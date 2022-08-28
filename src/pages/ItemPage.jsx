import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Context } from "../index";

import { ImgSlider } from "../components/Carousel";
import { useParams } from "react-router-dom";
import { ItemDescription } from "../components/ItemDescription";
import { SupportForm } from "../components/SupportForm";
import { Recomendation } from "../components/Recomendation";

export const ItemPage = observer(() => {
  const { Categories, BreadCrumbs } = useContext(Context);
  const { id } = useParams();

  useEffect(() => {
    let item = Categories.items[id - 1]; //TODO: Need remake for server data
    BreadCrumbs.setCrumbs(BreadCrumbs.crumbs.slice(0, 3));
    BreadCrumbs.setCrumb({ to: `/category`, name: item.category }, 1);
    BreadCrumbs.setCrumb({ to: `/category/${item.id}`, name: item.name }, 2);
    Categories.setSelectedItem(item);
  });

  return (
    <>
      <Container className="mt-4 itemInfo">
        <Row>
          <Col className="d-flex flex-column justify-content-center" md={5}>
            <ImgSlider />
          </Col>
          <Col md={7}>
            <h2>{Categories.selectedItem.name}</h2>
            <h5 className="mt-4">Опис:</h5>
            <p className="mt-2">{Categories.selectedItem.description}</p>
            <h5 className="mt-4">Ціна:</h5>
            <h4 className="mt-2">{Categories.selectedItem.price}</h4>
            <Button
              className="mt-1"
              variant={"dark"}
              onClick={() => Categories.setModalShow(true)}
            >
              Замовити
            </Button>
          </Col>
        </Row>
        <ItemDescription />
      </Container>
      <SupportForm />
      <Recomendation />
    </>
  );
});
