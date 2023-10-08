import "./index.scss";
import { useState, useEffect } from "react";
import Logo from "../Logo";
import Nav from "../Nav";
import VisitorsInfo from "../VisitorsInfo";
import OrderInfo from "../OrderInfo";
import ToggleLangBtn from "../ToggleLangBtn";
import Cart from "../Cart";
import BurgerIcon from "../BurgerIcon";
import BurgerMenu from "../BurgerMenu";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [isScroll, setScrollStatus] = useState(false);

  const toggleMenuActive = () => {
    setMenuActive(!menuActive);
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 15) {
        setScrollStatus(true);
      } else {
        setScrollStatus(false);
      }
    });
  }, []);

  return (
    <header className={`header ${isScroll?"header__sticky": ''}`}>
      <div className="container header__container">
        <div className={`header__container-logo ${isScroll?"header__container-logo-sticky": ''}`}>
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
        <BurgerMenu
          isActive={menuActive}
          onClick={toggleMenuActive}
        ></BurgerMenu>
      </div>
    </header>
  );
};

export default Header;
