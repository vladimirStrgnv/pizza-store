import "./index.scss";
import PizzaImageCard from "../PizzaImageCard";
import CrossSvg from "../CrossIcon";

const CartItem = ({
  imgIndex,
  title,
  sizeValue,
  sizeType,
  cost,
  pizzaType,
}) => {
  return (
    <div className="cart-item">
      <img
        src={require(`../../pages/About/assets/pizza-type/${pizzaType}.png`)}
        className="cart-item__piza-type-img"
        alt="cart-item__piza-type-img"
      />
      <div className="cart-item__pizza-info">
        <div className="cart-item__img-container">
          <PizzaImageCard imgIndex={imgIndex} size={sizeType}></PizzaImageCard>
        </div>
        <div className="cart-item__pizza-text-info-container">
          <h2 className="cart-item__pizza-title">{title}</h2>
          <h3 className="cart-item__pizza-size">{sizeValue} см</h3>
        </div>
      </div>
      <div className="cart-item__counts-info">
        <div className="cart-item__counts-controller">
          <input
            className="cart-item__counts-controller-btn"
            value="-"
            type="button"
            disabled
          />
          <input
            min="1"
            type="number"
            defaultValue="1"
            className="cart-item__counts-controller-input"
          />
          <input
            className="cart-item__counts-controller-btn"
            value="+"
            type="button"
          />
        </div>
        <div className="cart-item__cost-info">{cost}руб</div>
      </div>
      <CrossSvg setActive={() => {}} styles="cart-item__cross"></CrossSvg>
    </div>
  );
};

export default CartItem;
