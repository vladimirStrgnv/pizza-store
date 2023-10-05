import './index.scss';

const AdvantagesCard = ({ imgIndex, title, text, isReverse }) => {
  return (
    <div className={isReverse?"advantages-card advantages-card--reverse": "advantages-card"}>
      <div className="advantages-card__img-container">
        <img
          src={require(`../../assets/advantages-card/${imgIndex}.png`)}
          className="advantages-card__img"
          alt="advantages-card__img"
        ></img>
      </div>
      <div className="advantages-card__info">
        <h2 className="advantages-card__title">{title}</h2>
        <p className="advantages-card__description">{text}</p>
      </div>
    </div>
  );
};

export default AdvantagesCard;