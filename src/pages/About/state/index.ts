import { useReducer } from 'react';
import { pizzaListData } from '../consts';

interface Pizza {
    title: string,
    composition: string,
    sizes: number[],
    currentSize: {
        value: number,
        type: string
    },
    cost: number,
    type: string,
    imgIndex: number

}

interface PizzaAssortment  {
    pizza: Pizza[],
    filtredPizza: Pizza[]
}

const initialState: PizzaAssortment = {
    pizza: pizzaListData,
    filtredPizza: pizzaListData
}

function reducer(state, action): PizzaAssortment {
  switch (action.type) {
    case "GET_ASSORTMENT":
      return { ...state, section: action.value, page: 0 };
    case "CHANGE_FILTER":
      return { ...state, filtredPizza:  action.value === 'all'? state.pizza: state.pizza.filter(pizza => pizza.type === action.value)};
    default:
      return state;
  }
}

const useCreateAssortmentStore = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getAssortmentDispatch = (value) => {
    dispatch({
      type: "GET_ASSORTMENT",
      value: value,
    });
  };

  const changeFilterDispatch = (value) => {
    dispatch({
      type: "CHANGE_FILTER",
      value: value,
    });
  };

  return {
    state,
    getAssortmentDispatch,
    changeFilterDispatch
  }
};
  
export default useCreateAssortmentStore;