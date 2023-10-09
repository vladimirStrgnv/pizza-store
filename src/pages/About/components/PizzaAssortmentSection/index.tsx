import "./index.scss";
import FilterPizzaTypeBtn from "../FilterPizzaTypeBtn";
import PizzaOrderCard from "../PizzaOrderCard";
import { filterTypesList } from "../../consts";
import useCreateAssortmentStore from "../../state";

const PizzaAssortmentSection = () => {
  const { state, getAssortmentDispatch, changeFilterDispatch } = useCreateAssortmentStore();

  const changeFilter = (filter) => {
    changeFilterDispatch(filter)
  }

  return (
    <section className="pizza-assortment container">
      <h2 className="pizza-assortment__title">Выберите пиццу</h2>
      <ul className="pizza-assortment__filter-list">
        {filterTypesList.map((filterType, index) => (
          <li className="pizza-assortment__filter-list-item" key={index}>
            <FilterPizzaTypeBtn
              title={filterType.title}
              value={filterType.img}
              img={filterType.img}
              onClick={changeFilter}
            ></FilterPizzaTypeBtn>
          </li>
        ))}
      </ul>
      <ul className="pizza-assortment__list">
        {state.filtredPizza.map((pizza, index) => (
          <li className="pizza-assortment__list-item" key={index}>
            <PizzaOrderCard
              imgIndex={pizza.imgIndex}
              title={pizza.title}
              composition={pizza.composition}
              cost={pizza.cost}
              type={pizza.type}
              sizeType={pizza.currentSize.type}
            ></PizzaOrderCard>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PizzaAssortmentSection;
