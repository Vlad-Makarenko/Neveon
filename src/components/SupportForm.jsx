import React, { useState } from "react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useMessage } from "../hooks/message.hook";

import "react-phone-number-input/style.css";
import "../styles/Form.css";

export const SupportForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [comm, setComm] = useState("");
  const [checked, setChecked] = useState(false);
  const messages = useMessage();

  const CheckForm = () => {
    if (!name.length || !phoneNumber.length || !comm.length) {
      messages("All fields must be filled", "error");
      console.log("all fields must be filled");
    } else if (!isValidPhoneNumber(phoneNumber)) {
      messages("Phone number is not valid", "error");
      console.log("Phone number is not valid");
      setPhoneNumber("");
    } else {
      messages(
        "We have received your application and will contact you shortly",
        "success"
      );
      setPhoneNumber("");
      setName("");
      setComm("");
      setChecked(false);
    }
  };

  return (
    <div className="SupportForm mt-4 d-flex flex-column align-items-center justify-content-center">
      <Container className="d-flex flex-column align-items-center justify-content-center">
        <Row style={{ textAlign: "center" }}>
          <span className="formText">
            Якщо у вас залишилися питання, залиште заявку
          </span>
          <span className="formText">
            і ми зателефонуємо вам найближчим часом
          </span>
        </Row>
        <Row className="mt-4">
          <Col md={4}>
            <input
              className="FormInput"
              type="text"
              placeholder="Ваше ім'я"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Col>
          <Col md={4}>
            <PhoneInput
              className="FormInput"
              defaultCountry="UA"
              placeholder="Номер телефону"
              value={phoneNumber}
              onChange={setPhoneNumber}
            />
          </Col>
          <Col md={4}>
            <input
              className="FormInput"
              type="text"
              placeholder="Коментар"
              value={comm}
              onChange={(e) => setComm(e.target.value)}
            />
          </Col>
        </Row>
        <Row className="d-flex justify-content-center mt-4">
          <Button
            className="submitBtn"
            variant="light"
            onClick={CheckForm}
            disabled={!checked}
          >
            Відправити
          </Button>
        </Row>
        <Row style={{ width: "40%" }} className="mt-1">
          <label className="formText" htmlFor="root">
            <input
              type="checkbox"
              id="root"
              checked={checked}
              onChange={() => setChecked(!checked)}
              style={{ marginRight: "3%" }}
            />
            Я ознайомлений з{" "}
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="blank"
              className="rootLink"
            >
              політикою конфіденційності
            </a>{" "}
            та згоден на обробку персональних даних
          </label>
        </Row>
      </Container>
    </div>
  );
};
