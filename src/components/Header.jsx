import Logo from "../img/logo.png";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="logoAndSearch">
        <img src={Logo} alt="logo" />
        <input type="text" placeholder="Search" />
      </div>
    </div>
  );
};
export default Header;
