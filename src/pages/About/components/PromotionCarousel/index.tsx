import './index.scss';
import PromotionCard from '../PromotionCard';
import { promoCardsData } from '../../consts';

const PromotionCarousel = () => {
  return (
    <div className="promotion-carousel">
      <PromotionCard
        title={promoCardsData[0].title}
        text={promoCardsData[0].text}
        imgSrc={0}
      ></PromotionCard>
      <div className="promotion-carousel__nav">
        <button className="promotion-carousel__nav-btn promotion-carousel__nav-btn--active"></button>
        <button className="promotion-carousel__nav-btn"></button>
        <button className="promotion-carousel__nav-btn"></button>

      </div>
    </div>
  );
};

export default PromotionCarousel;