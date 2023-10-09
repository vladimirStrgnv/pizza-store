import "./index.scss";
import Logo from "../Logo";
import VisitorsInfo from "../VisitorsInfo";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__logo-container">
            <Logo styles="footer__logo"></Logo>
        </div>
        <div className="footer__second-part">
          <VisitorsInfo></VisitorsInfo>
          <h3 className="footer__priv-policy">Политика конфидициальности</h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
