import Logo from "../Logo";
import Nav from "../Nav";
import "./index.scss";
import VisitorsInfo from "../VisitorsInfo";
import OrderInfo from "../OrderInfo";
import ToggleLangBtn from "../ToggleLangBtn";
import Cart from "../Cart";
import BurgerIcon from "../BurgerIcon";
import {useState} from "react";
import BurgerMenu from "../BurgerMenu";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenuActive = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className="container header">
      <div className="header__container-logo">
        <Logo></Logo>
      </div>
      <div className="header__nav-container">
        <Nav></Nav>
      </div>
      <div className="header__list-options-container">
        <div className="header__list-options-container-first-item">
          <div className="header__visitors-info-container">
            <div className="header__tel-img"></div>
            <div className="header__visitors-info-wrapper">
              <VisitorsInfo></VisitorsInfo>
            </div>
          </div>
          <div className="header__order-info-container">
            <Cart></Cart>
            <div className="header__order-info-wrapper">
              <OrderInfo></OrderInfo>
            </div>
          </div>
        </div>
        <div className="header__list-options-container-second-item">
          <ToggleLangBtn></ToggleLangBtn>
          <BurgerIcon onClick={toggleMenuActive}></BurgerIcon>
        </div>
      </div>
      <BurgerMenu isActive={menuActive} onClick={toggleMenuActive}></BurgerMenu>
    </header>
  );
};

export default Header;
