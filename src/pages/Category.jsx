import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

import { Advantages } from "../components/Advantages";
import { CategoryBar } from "../components/CategoryBar";
import { Description } from "../components/Description";
import { ItemCard } from "../components/ItemCard";
import { Context } from "../index";

import "../styles/Category.css";

export const Category = observer(() => {
  const { Categories, BreadCrumbs } = useContext(Context);

  useEffect(() => {
    BreadCrumbs.setCrumbs(BreadCrumbs.crumbs.slice(0, 2));
  });

  return (
    <Container>
      <Row className="mt-3">
        <h1 className="categoryText">
          {Categories.selectedCategory.name || "Головна"}
        </h1>
        <p className="categoryText">
          Як прийнято вважати, явні ознаки перемоги інституціоналізації
          закликають нас до нових звершень, які, своєю чергою, мають бути
          однаково надані самі собі. Для сучасного світу економічний порядок
          денний надає широкі можливості для сприятливих перспектив.
        </p>
      </Row>
      <Row className="mt-3">
        <Col md={3}>
          <CategoryBar />
        </Col>
        <Col md={9} className="d-flex flex-wrap justify-content-around">
          {Categories.selectedItems.length ? (
            Categories.selectedItems.map((item) => {
              return <ItemCard key={item.id} item={item} />;
            })
          ) : (
            <Container>
              <h2 className="oops">Oops..</h2>
              <p className="oops">
                Здається, ми не знайшли жодного товару в цій категорії =&#40;
              </p>
              <p className="oops">Виберіть, будь ласка, іншу категорію!</p>
            </Container>
          )}
        </Col>
      </Row>
      <Description />
      <Advantages />
    </Container>
  );
});
