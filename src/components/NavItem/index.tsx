import './index.scss';
import { NavLink } from 'react-router-dom';

const NavItem = ({ text, link = "/" }) => {
  return (
    <NavLink
      to={link}
      className={({ isActive, isPending }) =>
        isActive ? "nav-item nav-item--active" : "nav-item"
      }
    >
      {text}
    </NavLink>
  );
};

export default NavItem;