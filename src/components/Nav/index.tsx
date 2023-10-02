import NavItem from "../NavItem";
import "./index.scss";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__link-list">
        <li>
          <NavItem text="Меню"></NavItem>
        </li>
        <li>
          <NavItem text="О нас"></NavItem>
        </li>
        <li>
          <NavItem text="Контакты"></NavItem>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
