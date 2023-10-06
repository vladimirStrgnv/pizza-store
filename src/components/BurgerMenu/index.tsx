import "./index.scss";
import Logo from "../Logo";
import CrossSvg from "../CrossIcon";
import React from "react";
import NavItem from "../NavItem";
import VisitorsInfo from "../VisitorsInfo";

interface IBurgerMenu {
  isActive: boolean;
  onClick: () => void;
}

const BurgerMenu: React.FC<IBurgerMenu> = ({ isActive, onClick }) => {
  return (
    <div className={isActive ? `menu active` : `menu`}>
      <div className={"menu__blur"} onClick={() => onClick()}></div>
      <div className={"menu__content"}>
        <div className={"menu__header"}>
            <div className={"menu__logo-container"}>
                <Logo styles="menu__logo"></Logo>
            </div>
          <CrossSvg setActive={onClick} styles={'menu__cross'}></CrossSvg>
        </div>
        <ul className={"menu__link-list"}>
          <li className={"menu__link-list-item"} onClick={() => onClick()}>
            <NavItem text='меню'></NavItem>
          </li>
          <li className={"menu__link-list-item"} onClick={() => onClick()}>
            <NavItem text='О нас'></NavItem>
          </li>
          <li className={"menu__link-list-item"} onClick={() => onClick()}>
            <NavItem text='Контакты'></NavItem>
          </li>
        </ul>
        <div className="menu__footer">
            <h3 className="menu__tel-order-title">ЗАКАЗАТЬ ПО ТЕЛЕФОНУ</h3>
            <VisitorsInfo></VisitorsInfo>
            <button className="menu__switch-lang-btn">ENGLISH</button>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;