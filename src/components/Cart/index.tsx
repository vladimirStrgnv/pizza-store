import "./index.scss";
import PopUp from "../PopUp";
import { useState } from "react";
import FormOrder from "../FormOrder";

const Cart = () => {
  const [popUpOption, setPopUpOption] = useState(false);

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
        <div className="cart__counter"><span className="cart__counter-value">3</span></div>
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
