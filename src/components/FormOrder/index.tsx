import "./index.scss";
import CartItem from "../CartItem";
import { pizzaListData } from "../../pages/About/consts";
import Button from "../Button";

const FormOrder = () => {
  return (
    <form className="order-form">
      <fieldset className="order-form__order-details">
        <legend className="order-form__title">Ваш заказ</legend>
        <ul className="order-form__cart-list">
          <li className="order-form__cart-list-item">
            <CartItem
              imgIndex={0}
              title={pizzaListData[0].title}
              sizeValue={pizzaListData[0].currentSize.value}
              sizeType={pizzaListData[0].currentSize.type}
              cost={pizzaListData[0].cost}
              pizzaType={pizzaListData[0].type}
            ></CartItem>
          </li>
          <li className="order-form__cart-list-item">
            <CartItem
              imgIndex={0}
              title={pizzaListData[0].title}
              sizeValue={pizzaListData[0].currentSize.value}
              sizeType={pizzaListData[0].currentSize.type}
              cost={pizzaListData[0].cost}
              pizzaType={pizzaListData[0].type}
            ></CartItem>
          </li>
          <li className="order-form__cart-list-item">
            <CartItem
              imgIndex={0}
              title={pizzaListData[0].title}
              sizeValue={pizzaListData[0].currentSize.value}
              sizeType={pizzaListData[0].currentSize.type}
              cost={pizzaListData[0].cost}
              pizzaType={pizzaListData[0].type}
            ></CartItem>
          </li>
        </ul>
        <div className="order-form__total-cost">
          <h3 className="order-form__total-cost-title">Сумма заказа:</h3>
          <span className="order-form__total-cost-value">1 887 руб</span>
        </div>
      </fieldset>

      <fieldset className="order-form__contact-info">
        <div className="order-form__user-contact-info">
          <input
            type="text"
            placeholder="Ваше имя"
            className="order-form__contact-info-input order-form__contact-info-name-input"
            required
          />
          <input
            type="tel"
            placeholder="Телефон"
            className="order-form__contact-info-input order-form__contact-info-tel-input"
            required
          />
        </div>
        <input
          type="text"
          placeholder="Телефон"
          className="order-form__contact-info-input"
          required
        />
      </fieldset>

      <fieldset className="order-form__payment-methods">
        <legend className="order-form__payment-methods-title">
          Способ оплаты
        </legend>
        <div className="order-form__payment-methods-item">
          <input type="radio" id="offline" name="payment-method" className="order-form__payment-input"/>
          <label htmlFor="offline" className="order-form__payment-input-label">Оплата наличными или картой курьеру</label>
        </div>
        <div className="order-form__payment-methods-item">
          <input type="radio" id="online" name="payment-method" className="order-form__payment-input"/>
          <label htmlFor="online" className="order-form__payment-input-label">Оплата картой онлайн на сайте</label>
        </div>
      </fieldset>
      <div className="order-form__btn-container">
        <Button text='Оформить заказ'></Button>
      </div>
      <span className="order-form__privacy-policy">
        Нажимая кнопку «Оформить заказ» вы соглашаетесь с политикой конфиденциальности
      </span>
    </form>
  );
};

export default FormOrder;
