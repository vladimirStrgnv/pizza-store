import { NavLink } from "react-router-dom";
import './index.scss';

const NavItem = ({text}) => {
  return (
    <a className="nav-item">{text}</a>
  )
}

export default NavItem;