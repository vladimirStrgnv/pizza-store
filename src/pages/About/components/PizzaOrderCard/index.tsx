import "./index.scss";
import { useState } from "react";
import PizzaImageCard from "../../../../components/PizzaImageCard";
import Button from "../../../../components/Button";

const PizzaOrderCard = ({
  imgIndex,
  title,
  composition,
  cost,
  type,
  sizeType,
}) => {
  const [size, setSize] = useState(sizeType);
  return (
    <div className="pizza-card">

      <img
        src={require(`../../assets/pizza-type/${type}.png`)}
        className="pizza-card__type"
        alt="pizza-type"
      />

      <div className="pizza-card__img-container">
        <PizzaImageCard imgIndex={imgIndex} size={size}></PizzaImageCard>
      </div>

      <div className="pizza-card__info">
        <h2 className="pizza-card__title">{title}</h2>
        <p className="pizza-card__composition">{composition}</p>
        <div className="pizza-card__order-params-info">
          <h3 className="pizza-card__size-title">Размер, см</h3>
          <div className="pizza-card__size-variants">
            <button
              className="pizza-card__choose-variant-btn"
              onClick={() => {
                setSize("small");
              }}
            >
              20
            </button>
            <button
              className="pizza-card__choose-variant-btn"
              onClick={() => {
                setSize("medium");
              }}
            >
              30
            </button>
            <button
              className="pizza-card__choose-variant-btn"
              onClick={() => {
                setSize("big");
              }}
            >
              40
            </button>
            <div
              className={`pizza-card__size-slider pizza-card__size-slider--${size}`}
            ></div>
          </div>
          <h3 className="pizza-card__min-cost">От {cost} руб.</h3>
          <Button text='Заказать'></Button>
        </div>
      </div>
    </div>
  );
};

export default PizzaOrderCard;