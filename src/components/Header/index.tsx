import Logo from "../Logo";
import Nav from "../Nav";
import './index.scss';

const Header = () => {
  return (
    <header className='container header'>
        <Logo></Logo>
        <Nav></Nav>
    </header>
  )
}

export default Header;