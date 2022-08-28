import React, { useState } from "react";
import { Card, Container, Row } from "react-bootstrap";

import qualityImg from "../assets/quality.png";
import deliveryImg from "../assets/delivery.png";
import reportImg from "../assets/report.png";
import "../styles/Item.css";

export const Advantages = () => {
  const [advantagesInfo] = useState([
    {
      id: 1,
      img: qualityImg,
      title: "Якість",
      description:
        "Зроблені на базі інтернет-аналітики висновки висвітлюють надзвичайно цікаві особливості картини загалом.",
    },
    {
      id: 2,
      img: deliveryImg,
      title: "Доставка",
      description:
        "Як неодноразово згадано, ретельні дослідження конкурентів може бути своєчасно верифіковані. У своєму прагненні покращити користувальницький досвід ми втрачаємо",
    },
    {
      id: 3,
      img: reportImg,
      title: "Грамотна консультація",
      description:
        "Сформована структура організації є якісно новим щаблем своєчасного виконання надзавдання.Перспективне планування надає широкі можливості для першочергових вимог",
    },
  ]);
  return (
    <Container>
      <h1>Чому обирають саме нас?</h1>
      <Row className="d-flex  justify-content-around">
        {advantagesInfo.map((item) => {
          return (
            <Card key={item.id} className="align-items-center itemCard">
              <Card.Img
                variant="top"
                src={item.img}
                className="advantagesImg"
              />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </Row>
    </Container>
  );
};
