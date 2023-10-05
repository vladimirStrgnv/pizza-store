import './index.scss';
import FilterPizzaTypeBtn from '../FilterPizzaTypeBtn';
import PizzaCard from '../PizzaCard';
import { filterTypesList, pizzaListData } from "../../consts";

const PizzaAssortmentSection = () => {
  return (
    <section className="pizza-assortment container">
      <h2 className="pizza-assortment__title">Выберите пиццу</h2>
      <ul className="pizza-assortment__filter-list">
        {filterTypesList.map((filterType) => (
          <li className="pizza-assortment__filter-list-item">
            <FilterPizzaTypeBtn text={filterType}></FilterPizzaTypeBtn>
          </li>
        ))}
      </ul>
      <ul className="pizza-assortment__list">
        {pizzaListData.map((pizza, index) => (
          <li className="pizza-assortment__list-item">
            <PizzaCard
              imgIndex={index}
              title={pizza.title}
              composition={pizza.composition}
              cost={pizza.cost}
            ></PizzaCard>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PizzaAssortmentSection;