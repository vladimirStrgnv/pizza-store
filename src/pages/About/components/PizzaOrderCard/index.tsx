import "./index.scss";
import { useState } from "react";

const PizzaOrderCard = ({ imgIndex, title, composition, cost, type, sizeType }) => {
  const [szie, setSize] = useState(sizeType);
  return (
    <div className="pizza-card">
      <img
        src={require(`../../assets/pizza-type/${type}.png`)}
        className="pizza-card__type"
        alt="pizza-type"
      />
      <div className="pizza-card__img-container">
        <img
          src={require(`../../assets/pizza-cards/${imgIndex}.png`)}
          alt="pizza-card__img"
          className={`pizza-card__img pizza-card__img--${szie}`}
        />
        <div className="pizza-card__big-size-outline"></div>
        <div className="pizza-card__medium-size-outline"></div>
        <div className="pizza-card__small-size-outline"></div>
      </div>
      <div className="pizza-card__info">
        <h2 className="pizza-card__title">{title}</h2>
        <p className="pizza-card__composition">{composition}</p>
        <div className="pizza-card__order-params-info">
          <h3 className="pizza-card__size-title">Размер, см</h3>
          <div className="pizza-card__size-variants">
            <button className="pizza-card__choose-variant-btn" onClick={()=> {setSize('small')}}>20</button>
            <button className="pizza-card__choose-variant-btn" onClick={()=> {setSize('medium')}}>30</button>
            <button className="pizza-card__choose-variant-btn" onClick={()=> {setSize('big')}}>40</button>
            <div className={`pizza-card__size-slider pizza-card__size-slider--${szie}`}></div>
          </div>
          <h3 className="pizza-card__min-cost">От {cost} руб.</h3>
          <button className="pizza-card__order-btn">Заказать</button>
        </div>
      </div>
    </div>
  );
};

export default PizzaOrderCard;
