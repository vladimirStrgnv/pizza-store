import NavItem from "../NavItem";
import "./index.scss";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__link-list">
        <li>
          <NavItem text="Меню" link="menu"></NavItem>
        </li>
        <li>
          <NavItem text="О нас" link="/"></NavItem>
        </li>
        <li>
          <NavItem text="Контакты" link="contacts"></NavItem>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
