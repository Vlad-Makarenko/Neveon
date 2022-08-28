import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import logo from "../assets/logo.png";
import "../styles/Footer.css";

export const Footer = () => {
  return (
    <Container>
      <h1>CEO</h1>
      <p className="mt-3" style={{ textAlign: "justify" }}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Так само обраний нами інноваційний шлях
        відіграє важливу роль у формуванні поставлених суспільством завдань. У
        своєму прагненні підвищити якість життя вони забувають, що постійне
        кількісне зростання і сфера нашої активності відіграє визначальне
        значення для моделі розвитку! Високий рівень залучення представників
        цільової аудиторії є чітким доказом простого факту: базовий вектор
        розвитку є цікавим експериментом перевірки системи масової участі.
        Насамперед глибокий рівень занурення виявляє термінову потребу
        відповідних умов активізації. Кожен із нас розуміє очевидну річ: сучасна
        методологія розробки створює необхідність включення до виробничого плану
        цілої низки позачергових заходів з урахуванням комплексу системи масової
        участі.
      </p>
      <div className="hDevider"></div>
      <Row>
        <Col md={3}>
          <img className="mt-4" src={logo} height="30" alt="Logo" />
          <p className="mt-4">ООО “NEVEON” © 2010-2021</p>
          <p>
            Продукція з поролону, поролон оптом, технічний поролон, меблевий
            поролон
          </p>
          <a
            className="mt-4 footerLink"
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="blank"
          >
            Політика конфіденційності
          </a>
          <p className="mt-2" style={{ color: "#C0C0C0" }}>
            Всі права захищені
          </p>
        </Col>
        <Col className="d-flex flex-column align-items-end" md={3}>
          <div className="mt-5"></div>
          <NavLink className="mt-4 footerLink" to="/">
            Головна
          </NavLink>
          <NavLink className="mt-3 footerLink" to="/">
            Каталог
          </NavLink>
          <NavLink className="mt-3 footerLink" to="/">
            Виробництво
          </NavLink>
          <NavLink className="mt-3 footerLink" to="/">
            Оплата і доставка
          </NavLink>
        </Col>
        <Col className="d-flex flex-column" md={3}>
          <div className="mt-5"></div>
          <NavLink className="mt-4 footerLink" to="/">
            Статті
          </NavLink>
          <NavLink className="mt-3 footerLink" to="/">
            Про компанію
          </NavLink>
          <NavLink className="mt-3 footerLink" to="/">
            Контакти
          </NavLink>
          <NavLink className="mt-3 footerLink" to="/">
            Сертифікати
          </NavLink>
        </Col>
        <Col className="d-flex flex-column align-items-end" md={3}>
          <span className="mt-4" style={{ fontSize: "25px" }}>
            +38 (044) 444-00-44
          </span>
          <span style={{ color: "#C0C0C0" }}>Пн-Пт 09:00 - 21:00</span>
          <a
            className="mt-4 footerLink d-flex flex-column align-items-end"
            target="blank"
            href="https://www.google.com/maps/place/Nezalezhnosti+Blvd,+10,+Brovary,+Kyivs'ka+oblast,+07400/@50.5158424,30.7971185,17z/data=!3m1!4b1!4m5!3m4!1s0x40d4d96dd6562095:0x62d65785781a27bc!8m2!3d50.5158424!4d30.7993072"
          >
            <span>м. Київ</span>
            <span>вул. Незалежності, буд. 10</span>
          </a>
          <span className="mt-4" style={{ color: "#f39b14" }}>
            support@gmail.com
          </span>
        </Col>
      </Row>
    </Container>
  );
};
