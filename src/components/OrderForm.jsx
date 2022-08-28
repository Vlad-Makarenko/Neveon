import React, { useState } from "react";
import { Container } from "react-bootstrap";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { useMessage } from "../hooks/message.hook";
import "../styles/Form.css";

export const OrderForm = ({ setThanksModal, setOwnModal }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [checked, setChecked] = useState(false);
  const messages = useMessage();

  const CheckForm = () => {
    if (!name.length || !phoneNumber.length) {
      messages("All fields must be filled", "error");
      console.log("all fields must be filled");
    } else if (!isValidPhoneNumber(phoneNumber)) {
      messages("Phone number is not valid", "error");
      console.log("Phone number is not valid");
      setPhoneNumber("");
    } else {
      setOwnModal(false);
      setTimeout(() => setThanksModal(true), 500);
      setPhoneNumber("");
      setName("");
      setChecked(false);
    }
  };

  return (
    <Container className="d-flex flex-column align-items-center justify-content-around">
      <h1>Залиште заявку</h1>
      <p>Наш спеціаліст зв'яжеться з вами найближчим часом</p>
      <input
        className="OrderInput mt-1 mb-2"
        type="text"
        placeholder="Ваше ім'я"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <PhoneInput
        className="OrderInput"
        defaultCountry="UA"
        placeholder="Номер телефону"
        value={phoneNumber}
        onChange={setPhoneNumber}
      />
      <label className="OformText mt-3" htmlFor="root">
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
      <button
        className="orderSubmitBtn mt-2 mb-5"
        onClick={CheckForm}
        disabled={!checked}
      >
        Залишити заявку
      </button>
    </Container>
  );
};
