import Logo from "../Logo";
import Nav from "../Nav";
import './index.scss';
import TelInfo from "../TelInfo";
import OrderInfo from "../OrderInfo";
import ToggleLangBtn from "../ToggleLangBtn";

const Header = () => {
  return (
    <header className="container header">
      <div className="header__container-logo">
        <Logo></Logo>
      </div>
      <div className="header__nav-container">
        <Nav></Nav>
      </div>
      <div className="header__third-part-container">
        <TelInfo></TelInfo>
        <OrderInfo></OrderInfo>
        <ToggleLangBtn></ToggleLangBtn>
      </div>
    </header>
  );
};

export default Header;