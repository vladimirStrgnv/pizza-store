import './index.scss';
import { deliveryStagesData } from '../../consts';
import DeliveryStageCard from '../DeliveryStageCard';

const DeliveryInfoSection = () => {
  return (
    <section className="delivery-info">
      <div className="container">
        <h2 className="delivery-info__title">Доставка и оплата</h2>
        <ul className="delivery-info__stage-list">
          {deliveryStagesData.map((stageData, index) => (
            <li className='delivery-info__stage-list-item' key={index}>
              <DeliveryStageCard
                key={index}
                imgIndex={index}
                title={stageData.title}
                text={stageData.text}
              ></DeliveryStageCard>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default DeliveryInfoSection;