import "./index.scss";

const PizzaCard = ({ imgIndex, title, composition, cost }) => {
  return (
    <div className="pizza-card">
      <img
        src={require(`../../assets/pizza-cards/${imgIndex}.png`)}
        alt=""
        className="pizza-card__img"
      />
      <div className="pizza-card__info">
        <h2 className="pizza-card__title">{title}</h2>
        <p className="pizza-card__composition">{composition}</p>
        <div className="pizza-card__order-params-info">
          <h3 className="pizza-card__size-title">Размер, см</h3>
          <div className="pizza-card__size-variants">
            <button className="pizza-card__choose-variant-btn">20</button>
            <button className="pizza-card__choose-variant-btn">30</button>
            <button className="pizza-card__choose-variant-btn">40</button>
          </div>
          <h3 className="pizza-card__min-cost">От {cost} руб.</h3>
          <button className="pizza-card__order-btn">Заказать</button>
        </div>
      </div>
    </div>
  );
};

export default PizzaCard;
