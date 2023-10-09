import "./index.scss";
import { choosenProducts } from "../../consts";
import CartItem from "../CartItem";
import Button from "../Button";
import React, { useState } from 'react';

const FormOrder = () => {
  const [isNameValid, setValid] = useState(true);

  function validateName (e) {
    setValid(/^[a-zA-Z, а-яА-Я]*$/.test(e.target.value))
  }
  return (
    <form className="order-form">
      <fieldset className="order-form__order-details">
        <legend className="order-form__title">Ваш заказ</legend>
        <ul className="order-form__cart-list">
          {choosenProducts.map((pizza, index) => 
          <li className="order-form__cart-list-item" key={index}>
            <CartItem
              imgIndex={pizza.imgIndex}
              title={pizza.title}
              sizeValue={pizza.currentSize.value}
              sizeType={pizza.currentSize.type}
              cost={pizza.cost}
              pizzaType={pizza.type}
            ></CartItem>
          </li>)}
        </ul>
        <div className="order-form__total-cost">
          <h3 className="order-form__total-cost-title">Сумма заказа:</h3>
          <span className="order-form__total-cost-value">1 887 руб</span>
        </div>
      </fieldset>

      <fieldset className="order-form__contact-info">
        <div className="order-form__user-contact-info">
          <div className="order-form__user-contact-info-input-wrap order-form__user-contact-info-input-wrap-name">
            <input
              onChange={(e)=> validateName(e)}
              type="text"
              className="order-form__user-contact-info-input"
              pattern="[a-zA-Z, а-яА-Я]*$"
              
            />
            <label className="order-form__user-contact-info-input-placeholder">
              Ваше имя
            </label >
            <span className={`order-form__user-contact-info-input-warn ${!isNameValid? 'order-form__user-contact-info-input-warn--visible':''}`}>Имя должно состоять из букв</span>

          </div>
          <div className="order-form__user-contact-info-input-wrap order-form__user-contact-info-input-wrap-tel">
            <input
              type="tel"
              className="order-form__user-contact-info-input"
              pattern="[^\s*$["
            />
            <label className="order-form__user-contact-info-input-placeholder">
              Телефон
            </label>
          </div>
        </div>
        <div className="order-form__user-contact-info-input-wrap">
          <input
            type="tel"
            className="order-form__user-contact-info-input"
            
          />
          <label className="order-form__user-contact-info-input-placeholder">
            Адрес доставки
          </label>
        </div>
      </fieldset>

      <fieldset className="order-form__payment-methods">
        <legend className="order-form__payment-methods-title">
          Способ оплаты
        </legend>
        <div className="order-form__payment-methods-item">
          <input
            type="radio"
            id="offline"
            name="payment-method"
            className="order-form__payment-input"
          />
          <label htmlFor="offline" className="order-form__payment-input-label">
            Оплата наличными или картой курьеру
          </label>
        </div>
        <div className="order-form__payment-methods-item">
          <input
          checked 
            disabled
            type="radio"
            id="online"
            name="payment-method"
            className="order-form__payment-input"
          />
          <label htmlFor="online" className="order-form__payment-input-label">
            Оплата картой онлайн на сайте
          </label>
        </div>
      </fieldset>
      <div className="order-form__btn-container">
        <Button text="ОФОРМИТЬ ЗАКАЗ"></Button>
      </div>
      <span className="order-form__privacy-policy">
        Нажимая кнопку «Оформить заказ» вы соглашаетесь с политикой
        конфиденциальности
      </span>
    </form>
  );
};

export default FormOrder;
