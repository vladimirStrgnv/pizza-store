import './index.scss';

const PizzaImageCard = ({ imgIndex, size }) => {
  return (
    <div className="pizza-image-card">
      <img
        src={require(`../../pages/About/assets/pizza-cards/${imgIndex}.png`)}
        alt="pizza-image-card"
        className={`pizza-image-card__img pizza-image-card__img--${size}`}
      />
      <div className="pizza-image-card__big-size-outline"></div>
      <div className="pizza-image-card__medium-size-outline"></div>
    </div>
  );
};

export default PizzaImageCard;