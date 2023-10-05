import './index.scss';
import { advantagesCardsData } from '../../consts';
import AdvantagesCard from '../AdvantagesCard';

const AdvantagesSection = () => {
  return (
    <section className="container advantages">
      <ul className="advantages__list">
        {advantagesCardsData.map((advantage, index) => (
          <li className="advantages__list-item">
            <AdvantagesCard
              imgIndex={index}
              title={advantage.title}
              text={advantage.text}
              isReverse={advantage.isReverse}
            ></AdvantagesCard>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AdvantagesSection;