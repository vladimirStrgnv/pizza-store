import "./index.scss";
import PopUp from "../PopUp";
import { useState } from "react";
import FormOrder from "../FormOrder";

const Cart = () => {
  const [popUpOption, setPopUpOption] = useState(true);

  const setPopUpActive = () => {
    setPopUpOption(!popUpOption);
  };

  return (
    <>
      <div
        className="cart"
        onClick={() => {
          setPopUpActive()
        }}
      >
        <div className="cart__img"></div>
        <div className="cart__counter">3</div>
      </div>
      <PopUp
        children={<FormOrder></FormOrder>}
        isOpen={popUpOption}
        setActive={setPopUpActive}
      ></PopUp>
    </>
  );
};

export default Cart;
