import "./index.scss";
import { promoCardsData } from "../../consts";
import PromotionCard from "../PromotionCard";
import PromotionCarousel from "../PromotionCarousel";
import Button from "../../../../components/Button";

const PromotionSection = () => {
  return (
    <section className="promotion">
      <div className="promotion__container container">
        <div className="promotion__order-info-container">
          <h2 className="promotion__title">Пицца на заказ</h2>
          <p className="promotion__description">
            Бесплатная и быстрая доставка за час в любое удобное для вас время
          </p>
          <div className="promotion__btn-container">
            <Button text={"ВЫБРАТЬ ПИЦЦУ"}></Button>
          </div>
        </div>
        <img
          className="promotion__pizza-img"
          src={require("../../assets/promo/promo-pizza.png")}
        ></img>
        <ul className="promotion__advertising-card-list">
          {promoCardsData.map((cardData, index) => (
            <li className="promotion__advertising-card-list-item" key={index}>
              <PromotionCard
                title={cardData.title}
                text={cardData.text}
                imgSrc={index}
              ></PromotionCard>
            </li>
          ))}
        </ul>
        <div className="promotion__carousel-wrapper">
          <PromotionCarousel></PromotionCarousel>
        </div>
      </div>
    </section>
  );
};

export default PromotionSection;
